import React from 'react'
import TopBar from './TopBar'
 import image from "../images/image 3.png"
 import {RxDot} from "react-icons/rx"
import {AiOutlineArrowRight} from "react-icons/ai"


const Onboarding2 = () => {
  return (
    <div className="container">
    <TopBar/>
    <div className="logo-header">EASYSAVE</div>
    <img src={image} alt="pig"></img>
    <div className="article-header">
    Invest in commodities, stocks & indices  
    </div>
    <div className="article-content">
    We’ve made buying, selling and exchanging of stocks from different companies easy and accessible from within the app.
    </div>
  <div className="article-dot">
    <RxDot />
    <RxDot />
  </div>
  <div className="button-section">
      <div className="next-button">
            <div className="button-text">Get Started</div>
        <AiOutlineArrowRight   className="button-arrow" /></div>
        <div className="next-button">
            <div className="button-text">Log In</div>
        </div>
  
  </div>
  

</div>
  )
}

export default Onboarding2