import React from 'react'
import { Hero } from '../../components/'

const styles = {
  mainDiv: {
    backgroundColor: '#efefef',
    fontFamily: 'Source Sans Pro, sans-serif',
  },
}

const Card = () => (
  <div
    style={{
      boxShadow: '0 0 25px #cecece',
      borderRadius: '4px',
      margin: '0 10px',
      width: '260px',
      height: '225px',
      backgroundColor: '#f7f7f7',
      overflow: 'hidden',
      minWidth: '220px',
    }}
  >
    <div
      style={{
        height: '175px',
        width: '100%',
        position: 'relative',
      }}
      alt='placeholder'
    >
      <div
        style={{
          height: '100%',
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
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
          }}
          src='https://images.unsplash.com/photo-1592247945554-c4a7c1879021?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3Jvc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
          alt=''
        ></img>
      </div>
      <h1
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          marginLeft: 'auto',
          marginRight: 'auto',
          left: 0,
          right: 0,
          textAlign: 'center',
          color: 'white',
          fontWeight: 'bolder',
          paddingLeft: '10px',
          paddingRight: '10px',
          fontSize: '35px',
        }}
      >
        Testing Text
      </h1>
    </div>
    <div
      style={{
        height: '50px',
        textAlign: 'left',
        margin: '0 0 0 10px',
      }}
    >
      <p
        style={{
          padding: 0,
          margin: '5px 0 0 0',
          // letterSpacing: '1px',
          fontSize: '17px',
          fontWeight: 'bold',
        }}
      >
        Latest Message
      </p>
      <p
        style={{
          padding: 0,
          margin: '-5px 0 0 0',
          fontSize: '13px',
        }}
      >
        Some more test text
      </p>
    </div>
  </div>
)

const Home = () => (
  <div className='container-fluid' style={styles.mainDiv}>
    <Hero />
    <div className='row'>
      <div
        className='col-12'
        style={{
          height: '450px',
          textAlign: 'center',
          maxWidth: '1000px',
          padding: '30px 300px',
          margin: 'auto',
        }}
      >
        {/* <h1
          style={{
            padding: '30px 0',
          }}
        >
          INFORMACIÓN
        </h1> */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '20px 10px',
          }}
        >
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  </div>
)

export default Home
