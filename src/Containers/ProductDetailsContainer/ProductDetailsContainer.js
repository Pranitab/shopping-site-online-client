import React from 'react';
import FooterComp from '../../Componants/FooterComp/FooterComp';
import HeaderComp from '../../Componants/HeaderComp/HeaderComp';
import ProductDetailsComp from '../../Componants/ProductDetailsComp/ProductDetailsComp';

const ProductDetailsContainer =()=>{
    return (
        <React.Fragment>
            <HeaderComp/>
            <ProductDetailsComp/>
            <FooterComp/>
        </React.Fragment>
    )
}

export default ProductDetailsContainer;