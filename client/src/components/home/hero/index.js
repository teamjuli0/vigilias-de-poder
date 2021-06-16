import React from 'react'
import { banner, bannerBlur } from './images'

const Hero = () => (
  <div className='row'>
    <div className='col-12'>
      <div
        style={{
          height: '500px',
          width: '100%',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            backgroundColor: 'black',
            opacity: '.7',
          }}
        />
        <img
          src={bannerBlur}
          alt=''
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
          }}
        ></img>
        <div
          style={{
            position: 'absolute',
            top: '0',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              position: 'relative',
              height: '100px',
            }}
          >
            <p
              style={{
                fontSize: '50px',
                width: '400px',
                fontWeight: 'bolder',
                margin: '-30px auto 0 auto',
              }}
            >
              JESUS IS LIFE
            </p>
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
  </div>
)

export default Hero
