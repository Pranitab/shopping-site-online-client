import React from 'react';
import './HeaderComp.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class HeaderComp extends React.Component{
    handleChange =(e)=>{
        console.log('search term.....',e.target.value);
        this.props.searchProduct(e.target.value);
    }
    render(){
    return (
        <div className='HeaderComp'>
            <Link to='/'>
                    Indian Shopping Store
            </Link>
            <div style={{width:'53%'}}>
                <input placeholder='Search Product' onChange={this.handleChange}></input>
            </div>
            {this.props.userInfo.name ? 
            <Link to='/'>
                <div onClick={this.props.signOutUser}>Sign Out</div>
            </Link> : <Link to='/sign-in'>
                <div>Sign In</div>
            </Link> }
            
            <Link to='/cart'>
                <div>
                    Cart
                    <span className="addToCartBubble">{this.props.CartItemsTotal}</span>
                </div>
            </Link>
        </div>
    )}
}

const mapStateToProps = state =>{
    return{
        CartItemsTotal:state.CartItemsTotal,
        userInfo:state.userInfo
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        signOutUser:()=>dispatch({type:'SIGN_OUT'}),
        searchProduct:(val)=>dispatch({type:'SEARCH_PRODUCT',value:val})
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(HeaderComp);