import React from 'react'
import { banner } from './images'

const Hero = () => (
  <div className='row'>
    <div className='col-12'>
      <div
        style={{
          background: `url(${banner})`,
          height: '600px',
          backgroundSize: 'cover',
          width: '100%',
        }}
      />
    </div>
  </div>
)

export default Hero
