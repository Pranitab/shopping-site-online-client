import React from 'react';
import HeaderComp from '../../Componants/HeaderComp/HeaderComp';
import FooterComp from '../../Componants/FooterComp/FooterComp';
import RegistrationComp from '../../Componants/RegistrationComp/RegistrationComp';

const RegisterContainer = ()=>{
    return(
        <React.Fragment>
            <HeaderComp/>
            <RegistrationComp/>
            <FooterComp/>
        </React.Fragment>
    )
    
}

export default RegisterContainer;