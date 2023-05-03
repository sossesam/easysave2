import React from 'react'
import TopBar from './TopBar'
import {IoIosFingerPrint} from "react-icons/io"


const WelcomePage = () => {
  return (
    <div className="container">
    <TopBar />
    <div className="page-header">Welcome Back,</div>
    <form>
        <label htmlFor="email-address">Email Address</label>
        <div className='inputfeild'>
        <input type="email" name="email-address" id="email" />
        </div>
        <div>
            <label htmlFor="password">password</label>
            <input type="password" name="password" id="password" />
        </div>
        <div>
            <p>face id</p>
            <p>forgot password?</p>
        </div>
        <div className="next-button">
            Log in
        </div>
        <div>
            Don’t have an account? Sign Up
        </div>
        <IoIosFingerPrint className='fingerprint'/>
    </form>
    
  

</div>
  )
}

export default WelcomePage