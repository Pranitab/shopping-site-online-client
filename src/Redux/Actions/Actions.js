import axios from 'axios';

export const getAllProductsAsync = (data) =>{
    return{
        type:'GET_PRODUCTS',
        value:data
    }
}

export const getAllProducts = () =>{
    return dispatch =>{
        axios.get('https://shopping-site-online.herokuapp.com/Products')
    .then((proddata)=>{
        let {data} = proddata
        //this.setState({Products:data});
        //console.log(data,'proddata');
        dispatch(getAllProductsAsync(data));
    })
    .catch((err)=>{
        console.log('error found',err);
    })
    }
    
}

export const addnewUserAsync = (data) =>{
    return{
        type:'ADD_NEW_USER',
        value:data
    }
}
export const addnewUser = (userdata)=>{
    console.log('userdata===>',userdata);
    const reqbody = {...userdata,_id:userdata.email,cartItems:{}}
    return dispatch =>{
        axios.post('https://shopping-site-online.herokuapp.com/storeUserData',reqbody)
        .then((data)=>{
            console.log('data is saved',data);
            dispatch(addnewUserAsync(userdata));
        })
    }
    // return{
    //     type:'ADD_NEW_USER'
    // }
}
export const signInAsync = data =>{
    const userStoredData ={
        email:data.email,
        name:data.name,
        password:data.password,
        cartItems:data.cartItems,
        signInResponse:data.message
    }
    return{
        type:'SIGN_IN',
        value:userStoredData
    }
}

export const signIn =(data)=>{
    console.log("signin data===>",data);
    return dispatch =>{
        axios.post('https://shopping-site-online.herokuapp.com/validateUser',data)
        .then((res)=>{
            console.log('user validated',res.data);
            dispatch(signInAsync(res.data));
        })
        .catch((err)=>{
            console.log('sign in err==>',err);
        })
    }

}

export const addToCartAsync = data =>{
    return{
        type:'ADD_TO_CART',
        value:data
    }
}
export const addToCart = (currProduct,cartItemsData,currSize,id) =>{
    console.log('add to cart===>',currProduct,cartItemsData,currSize,id);
    cartItemsData = cartItemsData ? cartItemsData : [];
    const cartItems = cartItemsData.concat(currProduct);
    cartItems[cartItems.length-1].size=currSize;

    console.log('cartItems===>addToCart',cartItems);
    return dispatch =>{
        axios.patch('https://shopping-site-online.herokuapp.com/updateCart/'+id,cartItems)
        .then((res)=>{
            console.log('user validated',res);
            if(res.status === 200)
            {
                dispatch(addToCartAsync(cartItems));
            }
        })
        .catch((err)=>{
            console.log('sign in err==>',err);
        })
    }
}

export const removeFromCartAsync =(data)=>{
    return{
        type:"REMOVE_FROM_CART",
        value:data
    }
}
export const removeFromCart =(id,cartItems,userId)=>{
    console.log('remove from cart===>',id,cartItems,userId);
    cartItems = cartItems.filter((el)=>el.id !== id);

    console.log('cartItems===>removefromCart',cartItems);
    return dispatch =>{
        axios.patch('https://shopping-site-online.herokuapp.com/updateCart/'+userId,cartItems)
        .then((res)=>{
            if(res.status === 200)
            {
                dispatch(removeFromCartAsync(cartItems));
            }
        })
        .catch((err)=>{
            console.log('sign in err==>',err);
        })
    }
}


export const emptyCartAsync =(data)=>{
    return{
        type:"EMPTY_CART"
    }
}
export const emptyCart =(userId)=>{
    let cartItems = [];

    console.log('cartItems===>empty Cart',cartItems);
    return dispatch =>{
        axios.patch('https://shopping-site-online.herokuapp.com/updateCart/'+userId,cartItems)
        .then((res)=>{
            if(res.status === 200)
            {
                dispatch(emptyCartAsync(cartItems));
            }
        })
        .catch((err)=>{
            console.log('sign in err==>',err);
        })
    }
}