import React from 'react'
import { bannerBlur, logo } from './images'
import './style.css'

const LargeCard = () => (
  <div id='largeCardDiv'>
    <div id='largeCardInnerDiv'>
      <div className='largeImgOpacite' />
      <img className='largeCardImg' src={bannerBlur} alt=''></img>
      <img className='logo' alt='' src={logo}></img>
      <div id='largeCardTitle'>
        <p>Sermon Name Here</p>
        {/* <div className='triangleTitle' /> */}
      </div>
      <div id='largeCardDesc'>
        <p>Here you can put the preacher name or short sermon description</p>
        {/* <div className='triangleDesc' /> */}
      </div>
    </div>
  </div>
)

export default LargeCard
