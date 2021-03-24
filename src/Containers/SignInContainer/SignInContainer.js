import React from 'react';
import HeaderComp from '../../Componants/HeaderComp/HeaderComp';
import FooterComp from '../../Componants/FooterComp/FooterComp';
import SignInComp from '../../Componants/SignInComp/SignInComp';

const SignInContainer =(props)=>{
    return(
        <React.Fragment>
            <HeaderComp/>
            <SignInComp/>
            <FooterComp/>
        </React.Fragment>
    )
    
}
export default SignInContainer;