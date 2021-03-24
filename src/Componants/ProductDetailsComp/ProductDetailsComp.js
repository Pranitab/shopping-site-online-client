import React from 'react';
import './ProductDetailsComp.css';
import {Link} from 'react-router-dom';
import Rating from '../RatingComp/rating';
import SizeSelectComp from '../SizeSelectComp/SizeSelectComp'
import {connect} from 'react-redux';
import * as actionCreator from '../../Redux/Actions/Actions';

//import {withRouter} from 'react-router-dom';
let currentSize;
class ProductDetailsComp extends React.Component{
    
    getSize=(val)=>{
        console.log('getsize...!!!11',val);
        currentSize = val;
    }

    componentDidMount(){
        this.props.getAllProducts();
    }

    render(){
        currentSize='S';
        let currentProduct = Number((window.location.pathname).split('/')[1])-1;
        let currentProductData = this.props.Products ? this.props.Products[currentProduct]:null;
        console.log('CartItems=>',this.props.CartItems,this.props.Products);
        console.log('render--->11',currentProduct);
        return (
            this.props.Products && (
            <div className='ProductDetailsComp'>
            <Link to='/'>Back to Results</Link>
            {console.log('currentProductData===>',currentProductData)}
            <div className='ProductDetailsContainer'>
                <img src ={currentProductData.img} alt='not found'></img>
                <div style={{width:'65%'}}>
                    <div className='prod-name'>{currentProductData.name}</div>
                    <Rating ratingStar={currentProductData.rating}/><span className='reviewTxt'>({currentProductData.numReviews} reviews)</span>
                    <br/><b>Price: </b><div className='prod-price'>{currentProductData.price}$</div>
                    <SizeSelectComp selectSize={this.getSize}/>
                    <div className='prod-description'><b>Description:</b><br/>{currentProductData.description}</div>
                </div>
                <div className='button-box'>
                    To buy, <span style={{color:'red'}}>Sign in</span> and Select size:<br/>
                    <button onClick ={()=>this.props.addToCart(this.props.Products[currentProduct],this.props.CartItems,currentSize,this.props.useremailId)} className={this.props.useremailId ? null: 'disabled'}>Add To Cart</button>
                </div>
            </div>
        </div>)
        )
    }
   
}

const mapStateToProps = state =>{
    return{
        Products:state.Products,
        CartItems:state.CartItems,
        useremailId:state.userInfo.email
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        getAllProducts:()=>dispatch(actionCreator.getAllProducts()),
        addToCart:(currentProduct,CartItems,currentSize,useremailId)=>dispatch(actionCreator.addToCart(currentProduct,CartItems,currentSize,useremailId))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductDetailsComp);