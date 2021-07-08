import React from 'react'
import './style.css'

const LargeCard = () => (
  <div id='largeCardDiv'>
    <div id='sermonSearchDiv'>
      <h1>SERMONS</h1>
      <div id='search'>
        <input />
        <button>
          <i class='fas fa-search'></i>
        </button>
      </div>
    </div>
    <div id='largeCardInnerDiv'>
      <div className='largeImgOpacite' />
      <img
        className='largeCardImg'
        src='https://images.unsplash.com/photo-1592247945554-c4a7c1879021?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3Jvc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
        alt=''
      ></img>
      <div id='largeCardTitle'>
        <p>Sermon Name Here</p>
        <div className='triangleTitle' />
      </div>
      <div id='largeCardDesc'>
        <p>Here you can put the preacher name or short sermon description</p>
        <div className='triangleDesc' />
      </div>
    </div>
  </div>
)

export default LargeCard
