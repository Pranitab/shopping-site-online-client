import React from 'react';
import './SignInComp.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { Redirect } from 'react-router';
import * as actionCreator from '../../Redux/Actions/Actions'

class SignInComp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
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
        console.log('sign in form submitted...$',this.state.userInfo);
        this.props.signIn(this.state.userInfo);
        this.setState({submitted:true});
    }
    render(){
        console.log("sign in data--->",this.props.userInfo);
        const {email,password} = this.state.userInfo;
        return(
        <div className='login-modal-backdrop'>
            <div className='login-modal'>
                <div className='login-caption'>Sign-In</div>
                Email ID:<br/><input name='email' value={email} placeholder='Enter your email ID...' onChange={this.handleChange}></input><br/>
                {(!email && this.state.submitted)?<div className='text-danger'>Email is required !!!</div>:null}
                Password:<br/><input name='password' value={password} type='password' placeholder='Enter your password...' onChange={this.handleChange}></input>
                {(!password && this.state.submitted)?<div className='text-danger'>Password is required !!!</div>:null}
                {(this.props.userInfo.name && this.state.submitted)? <Redirect push to="/" />:null}
                <button className='sign-in' onClick={this.onFormSubmit}>Signin</button>
                {this.props.userInfo.signInResponse ? <div className='text-danger'>{this.props.userInfo.signInResponse}</div>:null}
                New to Indian Shopping Store?
                <Link to='/register'>
                    <button className='create-account'>Create Your Account</button>
                </Link>
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

const mapDispatchToProps=(dispatch)=>{
    return({
        signIn:(value)=>dispatch(actionCreator.signIn(value))
    })
}
export default connect(mapStateToProps,mapDispatchToProps)(SignInComp);