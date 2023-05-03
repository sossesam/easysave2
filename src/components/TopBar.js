import React from 'react'
import {BiWifi} from "react-icons/bi"
import {FaBatteryFull} from "react-icons/fa"
import {GiNetworkBars} from "react-icons/gi"

const TopBar = () => {
    const current = new Date();

    const time = current.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        });

  return (
    <div className="top-bar">
           <div className="time">{time}</div>
            <div>
                <GiNetworkBars className='network'/>
                <BiWifi className='wifi'/>
                <FaBatteryFull className='battery'/>
            </div>
           
        </div>
  )
}

export default TopBar