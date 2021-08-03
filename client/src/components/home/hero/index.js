import React from 'react'
import { bannerBlur } from './images'
import VideoWall from '../videoWall'
import './style.css'

const Hero = () => (
  <div className='heroMainRow'>
    <div>
      <div className='heroOpacity' />
      <VideoWall>
        <div className='heroInfoDiv'>
          <div>
            <p className='cursor-default'>JESUS IS LIFE</p>
            <a className='heroBtn' href='/'>
              BUTTON ONE
            </a>
            <a className='heroBtn' href='/'>
              BUTTON ONE
            </a>
          </div>
        </div>
      </VideoWall>

      {/* <img src={bannerBlur} alt='' className='heroImg'></img> */}
    </div>
  </div>
)

export default Hero
