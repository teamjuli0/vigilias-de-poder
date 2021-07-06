import React from 'react'
import './style.css'

const Card = () => (
  <div className='mainCardDiv'>
    <div>
      <div className='cardImgDiv' alt='placeholder'>
        <div className='nestedImgDiv'>
          <div className='imgOpacite' />
          <img
            className='cardImg'
            src='https://images.unsplash.com/photo-1592247945554-c4a7c1879021?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3Jvc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
            alt=''
          ></img>
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
