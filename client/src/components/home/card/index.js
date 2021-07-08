import React from 'react'
import './style.css'

const Card = (props) => (
  <div className='mainCardDiv'>
    <div>
      <div className='cardImgDiv' alt='placeholder'>
        <div className='nestedImgDiv'>
          <div className='imgOpacite' />
          <img className='cardImg' src={props.img} alt=''></img>
        </div>
        <h1 className='imgText'>Testing Text</h1>
      </div>
      <div className='cardInfoDiv'>
        <p className='infoHeader'>Latest Message</p>
        <p className='infoDescription'>Some more test text</p>
      </div>
    </div>
  </div>
)

export default Card
