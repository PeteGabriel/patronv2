import React, { Component } from "react";
import './marker.css';

export default class Marker extends Component {

  render(){
    return (
      <div className="marker">
        <div className="marker-base">
          <svg id="c31621a1-bf18-48a0-9573-0a9894cb25ff" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 142.7 215.09">
            <path
              d="M959.49,432.45a71.35,71.35,0,0,0-71.35,71.35c0,39.4,32,106.5,71.35,143.74,39.35-37.25,71.35-104.34,71.35-143.74A71.35,71.35,0,0,0,959.49,432.45Z"
              transform="translate(-888.14 -432.45)" fill="#0684c2"/>
            <circle cx="71.35" cy="71.35" r="47.74" fill="#fff"/>
            <circle cx="71.35" cy="71.35" r="47.74" fill="#fff"/>
          </svg>
        </div>
      </div>
    )
  }
}