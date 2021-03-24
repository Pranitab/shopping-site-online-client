import React from 'react';
import HeaderComp from '../../Componants/HeaderComp/HeaderComp';
import FooterComp from '../../Componants/FooterComp/FooterComp';
import ShoppingCartComp from '../../Componants/ShoppingCartComp/ShoppingCartComp';

const ShoppingCartContainer=()=>{
    return(
        <React.Fragment>
            <HeaderComp/>
            <ShoppingCartComp/>
            <FooterComp/>
        </React.Fragment>
    )
}

export default ShoppingCartContainer