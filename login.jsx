import React, { useState } from "react";

import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import { SocialIcon } from 'react-social-icons';
<head>    <script src="https://kit.fontawesome.com/5a8a395b16.js" crossorigin="anonymous"></script>
</head>
export const Login = (props) => {

    return (
        <div className="auth-form-container">
            <div className="heading"><h1>Get's started.</h1>
            <p>Don't have an account?<button className="register" >Sign up </button> </p></div>
            <div className="icons"> 
                <button className="google"><SocialIcon url="https://google.com/jaketrent" /><p className="gsign" >Sign in with Google</p></button> 
                <button className="facebook"><SocialIcon url="https://facebook.com/jaketrent" /><p className="fbsign" >Sign in with Facebook</p></button> 

            </div>
            
            <div className="separate"><div className="line"></div>or<div className="line"></div></div>
                <form className="login-form" >
                <label>Email</label>
                <input type="email" placeholder="uistore@gmail.com" id="email" name="email" />
                <label>Password</label>
                <div className='wrapper'>
        <div className='input-field'>
        <input type="password" placeholder="********" id="password" name="password" />

          <span><Icon icon={eye} size={20}/></span>
        </div>
    </div>
            </form>
            <div className="divider"><input type="checkbox"checked={false} className="check"></input><label className="remember">Remember me</label> <button className="forgot">Forgot your password?</button></div>
            <button type="submit" className="signin">Sign In</button>

        </div>
    )
}