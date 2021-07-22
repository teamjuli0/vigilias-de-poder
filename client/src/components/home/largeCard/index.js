import React from 'react'
import './style.css'

const LargeCard = () => (
  <div id='largeCardDiv'>
    <div id='sermonSearchDiv'>
      <h1>SERMONS</h1>
      <div id='search'>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            padding: '10px 0',
          }}
        >
          <button
            style={{
              backgroundColor: '#d2d2d2',
              border: 0,
              borderRadius: '5px 0 0 5px',
              padding: '5px 0',
            }}
          >
            <i class='fas fa-search'></i>
          </button>
          <input
            style={{
              backgroundColor: '#d2d2d2',
              border: 0,
              borderRadius: '0 5px 5px 0',
              padding: '5px 0',
            }}
          />
        </div>
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
