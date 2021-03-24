import React from 'react';
import './RegistrationComp.css';
import {connect} from 'react-redux';
import * as actionCreater from '../../Redux/Actions/Actions';
import {Redirect} from 'react-router';

class RegistrationComp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:'',
                email:'',
                password:''
            },
            submitted:false
        }
    }
    handleChange=(e)=>{
        console.log('value changed...!',e.target.name,e.target.value);
        this.setState({userInfo:{...this.state.userInfo, [e.target.name]: e.target.value}});
    }
    onFormSubmit=()=>{
        console.log('form submitted...$');
        this.props.addnewUser(this.state.userInfo);
        this.setState({submitted:true});
    }
    render(){
        console.log(this.state.userInfo,'userinfo--->');
        const {name,email,password} = this.state.userInfo;
        return(
            <div className='login-modal-backdrop'>
                <div className='login-modal'>
                        <div className='login-caption'>Create Account</div>
                        Name:<br/><input name='name' value={name} placeholder='Enter your name...' onChange={this.handleChange}></input><br/>
                        {(!name && this.state.submitted)?<div className='text-danger'>Name is required !!!</div>:null}
                        Email ID:<br/><input name='email' value={email} placeholder='Enter your email ID...' onChange={this.handleChange}></input><br/>
                        {(!email && this.state.submitted)?<div className='text-danger'>Email is required !!!</div>:null}
                        Password:<br/><input name='password' value={password} type='password' placeholder='Enter your password...' onChange={this.handleChange}></input>
                        {(!password && this.state.submitted)?<div className='text-danger'>Password is required !!!</div>:null}
                        {(this.props.userInfo.name && this.state.submitted)? <Redirect push to="/" />:null}
                        <button className='register' onClick={this.onFormSubmit} value='Register'>Register</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        userInfo:state.userInfo
    }
}

const mapDispatchToProps = (dispatch,ownProp) =>{
    return{
        addnewUser:(value)=>{
            dispatch(actionCreater.addnewUser(value));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RegistrationComp);