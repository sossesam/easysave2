import React from 'react'
import TopBar from './TopBar'
import {IoIosFingerPrint} from "react-icons/io"


const WelcomePage = () => {
  return (
    <div className="container">
    <TopBar />
    <div className="form-header">Welcome Back,</div>
    <form>
        <label htmlFor="email-address">Email Address</label>
        <div className='inputfeild'>
        <input type="email" name="email-address" id="email" />
        </div>
        <label htmlFor="password">password</label>
        <div>
            
            <input type="password" name="password" id="password" />
        </div>
        <div className='forgot-password'>
            <p>Face id</p>
            <p className='fgp'>Forgot your password?</p>
        </div>
        <div className="login">
            Log in
        </div>
        <div className='text-account'>
            Don’t have an account? Sign Up
        </div>
        <IoIosFingerPrint className='fingerprint'/>
    </form>
    
  

</div>
  )
}

export default WelcomePage