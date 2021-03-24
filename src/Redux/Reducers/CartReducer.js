
let initialState={
    Products:null,
    CartItems:[],
    CartItemsTotal:0,
    SearchTerm:'',
    userInfo:{
        name:'',
        email:'',
        password:''
    }
}

const CartReducer =(state=initialState,action)=>{
    const newState ={...state}
    switch(action.type){
        case 'GET_PRODUCTS':
                newState.Products = action.value;
            break;
        case 'ADD_TO_CART':
                console.log('added to cart!!!',action.value);
                newState.CartItems = action.value;
                newState.CartItemsTotal = newState.CartItems.length;
             
                break; 
        case 'REMOVE_FROM_CART':
              console.log('removed from cart!!!',action.value);
             // newState.CartItems = newState.CartItems.filter((el)=>el.id !== action.value);
              newState.CartItems = action.value;
              newState.CartItemsTotal = newState.CartItems.length; 
              break;       
        case 'ADD_NEW_USER':
                console.log('new user added!!!',action.value);
                newState.userInfo = action.value;
              break;   
        case 'SIGN_IN':
                console.log('sign in !!!',action.value);
                newState.userInfo = action.value;
                newState.CartItems = action.value.cartItems;
                newState.CartItemsTotal = newState.CartItems ? newState.CartItems.length:0;
              break;    
        case 'SIGN_OUT':
               console.log('Sign out!!!');
               newState.userInfo = {...initialState.userInfo};
               newState.CartItems = [];
               newState.CartItemsTotal = 0;
               break;  
        case 'EMPTY_CART':
                newState.CartItems = [];
                newState.CartItemsTotal = 0;    
                break;   
        case 'SEARCH_PRODUCT':
                newState.SearchTerm = action.value;
              break;         
        default:
            console.log('in default...!');
    }
    console.log("newstate====>",newState)
    return newState
}

export default CartReducer;