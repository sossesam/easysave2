import React from 'react'
import image from "../images/image 5.png"

import TopBar from './TopBar'
import {RxDot} from "react-icons/rx"
import {AiOutlineArrowRight} from "react-icons/ai"


const Onboarding1 = () => {

  return (
    <div className="container">
        <TopBar/>
        <div className="logo-header">EASYSAVE</div>
        <img src={image} alt="pig"></img>
        <div className="article-header">
        Turn your small savings into something big
        </div>
        <div className="article-content">
        Lets help you save more money by teaching you how to save and helping you save.
        </div>
      <div className="article-dot">
        <RxDot/>
        <RxDot />
        <RxDot />
      </div>
      <div className="button-section">
          <div className="next-button">
        <div className="button-text">NEXT</div>
          <AiOutlineArrowRight   className="button-arrow" /></div>
      
      </div>
      

    </div>
  )
}

export default Onboarding1