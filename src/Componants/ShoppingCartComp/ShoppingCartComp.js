import React from 'react';
//import Data from '../../Data/Data';
import './ShoppingCartComp.css';
import SizeSelectComp from '../SizeSelectComp/SizeSelectComp';
import {connect} from 'react-redux';
import * as actionCreator from '../../Redux/Actions/Actions';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
let totalPrice=0;

  

class ShoppingCartComp extends React.Component{
    // constructor(){
    //     super();
    //     this.state={
    //         product:{
    //             name:'cloth order',
    //             price:totalPrice,
    //             productBy:'Indian Shopping Store'
    //         }
    //     }
    // }
    
    render(){
        const makePayment = token=>{
            const body = {
                token,
                product:{
                    name:'cloth order',
                    price:totalPrice
                }
            }
                
            return axios.post('https://shopping-site-online.herokuapp.com/payment',body)
            .then(response=>{
                    console.log('response===>',response);
                    if(response.status===200)
                    {
                        totalPrice = 0;
                        this.props.emptyCart(this.props.userId);
                    }
                }).catch(err=>{
                    console.log('err====>',err);
                })
            }
    console.log('CartItemsTotal==>shopping cart',this.props.CartItemsTotal);
    let cartItems =this.props.CartItems;
    console.log('REACT_APP_KEY===>',process.env.REACT_APP_KEY)
    totalPrice = 0;
    return(
        <div className='cart-wrapper'>
            <div style={{width:'70%'}}>
            <div className='cart-name'>Shopping Cart</div>
            {
                
                cartItems.map((elem,i)=>{
                    totalPrice = totalPrice + elem.price;
                    return(
                    <div className='cart-item' key={elem.id}>
                        <img src={elem.img} alt='not found'></img>
                        <div className='cart-details'>
                            <div>
                                {elem.name}
                            </div>
                            <SizeSelectComp selectedCartSize={elem.size}/>
                            <button onClick={()=>this.props.removeFromCart(elem.id,cartItems,this.props.userId)}>Delete</button>
                        </div>
                        <div>{elem.price} $</div>
                    </div>
                    )
                })
            }
            {(this.props.CartItemsTotal === 0) ? <div className='empty-cart'> Your Shopping Cart is Empty.</div> : null}
            </div>
            

            <div className='box-container'>
                Total Price: {Math.round(totalPrice)} $<br></br>
                <StripeCheckout stripeKey={process.env.REACT_APP_KEY} token={makePayment} name='Proceed to Checkout' amount={Math.round(totalPrice) * 100}
                shippingAddress
                billingAddress
                ><button className={totalPrice > 0 ? null:'disabled'}>Proceed to Checkout</button></StripeCheckout>
            </div>
        </div>
    )
        }
}

const mapStateToProps = state =>{
    return{
        CartItems:state.CartItems,
        Products:state.Products,
        CartItemsTotal:state.CartItemsTotal,
        userId:state.userInfo.email
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        removeFromCart:(id,cartItems,userId)=> dispatch(actionCreator.removeFromCart(id,cartItems,userId)),
        emptyCart:(userId)=>dispatch(actionCreator.emptyCart(userId))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCartComp);