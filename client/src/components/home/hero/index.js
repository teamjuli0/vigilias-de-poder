import React from 'react'
import { bannerBlur } from './images'
import VideoWall from '../videoWall'
import './style.css'
import { Es } from '../../../languages'

const { hero } = Es()

const Hero = () => (
  <div className='heroMainRow'>
    <div>
      <div className='heroOpacity' />
      <VideoWall>
        <div className='heroInfoDiv'>
          <div>
            <p className='cursor-default'>{hero.header}</p>
            {hero.buttons.map((btn) => (
              <a className='heroBtn' href={btn.link}>
                {btn.title}
              </a>
            ))}
          </div>
        </div>
      </VideoWall>

      {/* <img src={bannerBlur} alt='' className='heroImg'></img> */}
    </div>
  </div>
)

export default Hero
