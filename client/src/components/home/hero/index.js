import React from 'react'
import { bannerBlur } from './images'
import './style.css'

const Hero = () => (
  <div className='heroMainRow'>
    <div>
      <div className='heroOpacity' />
      <img src={bannerBlur} alt='' className='heroImg'></img>
      <div className='heroInfoDiv'>
        <div>
          <p>JESUS IS LIFE</p>
          <a className='heroBtn' href='/'>
            BUTTON ONE
          </a>
          <a className='heroBtn' href='/'>
            BUTTON ONE
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Hero
