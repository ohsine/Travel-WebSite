import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";

import '../App.css'
import './HeroSection.css'

import { Button } from './Button'
import video1 from "../Assets/videos/video-1.mp4"

function HeroSection() {
  return (
    <div className='hero-container'>

      <video src={ video1 } autoPlay loop muted />

      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      
      <div className="hero-btns">
        <Button className='btns'
        buttonStyle='btn--outline' 
        buttonSize='btn--large'
        >
            GET STARTED
        </Button>

        <Button className='btns'
        buttonStyle='btn--primary' 
        buttonSize='btn--large'
        >
            WATCH TRAILER <FontAwesomeIcon icon={faCirclePlay} />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
