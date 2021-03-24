import React from 'react';
import FooterComp from '../../Componants/FooterComp/FooterComp';
import HeaderComp from '../../Componants/HeaderComp/HeaderComp';
import ProductListComp from '../../Componants/ProductListComp/ProductListComp';

const ProductListContainer =()=>{
    return (
        <React.Fragment>
            <HeaderComp/>
            <ProductListComp/>
            <FooterComp/>
        </React.Fragment>
    )
}

export default ProductListContainer;