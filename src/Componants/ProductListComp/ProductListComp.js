import React from 'react';
import ProductTileComp from './ProductTileComp/ProductTileComp';
//import ProductData from '../../Data/Data';
import './ProductListComp.css';
import {connect} from 'react-redux';
import * as actionCreator from '../../Redux/Actions/Actions';



class ProductListComp extends React.Component{


componentDidMount(){
    this.props.getAllProducts();
}
    render(){
        let filteredProducts;
        if(this.props.Products){
                filteredProducts = this.props.Products.filter((product)=>{
                        return product.name.toLowerCase().indexOf(this.props.SearchTerm) !== -1
                })
            }
        return (
            <div className='ProdList'>
                {
                    filteredProducts && (filteredProducts.map((elem,i)=>{
                        return<ProductTileComp prodData={elem} key={elem.id}/>
                    }))
                }
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        Products:state.Products,
        SearchTerm:state.SearchTerm
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        getAllProducts:()=>dispatch(actionCreator.getAllProducts())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductListComp);