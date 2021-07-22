import React from 'react'
import { backgroundVideo } from './images'

const VideoWall = (props) => {
  return (
    <>
      <div
        style={{
          height: '650px',
          width: '100%',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            position: 'absolute',
            zIndex: 1,
            height: '650px',
            width: '100%',
          }}
        >
          <div
            style={{
              maxWidth: '1050px',
              margin: 'auto',
            }}
          >
            {props.children}
          </div>
        </div>
        <video
          playsInline
          autoPlay
          muted
          loop
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'relative',
            zIndex: '0',
          }}
        >
          <source src={backgroundVideo} type='video/mp4' />
        </video>
      </div>
    </>
  )
}

export default VideoWall
