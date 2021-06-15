import React from 'react'
import { Hero } from '../../components/'

const styles = {
  mainDiv: {
    backgroundColor: 'red',
  },
}

const Home = () => (
  <div className='container-fluid' style={styles.mainDiv}>
    <Hero />
    <div className='row'>
      <div
        className='col-12'
        style={{
          height: '450px',
          textAlign: 'center',
          margin: 'auto',
          maxWidth: '1000px',
          padding: '30px 10px',
        }}
      >
        <h1>INFORMACIÓN</h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: '33.3%',
            }}
          >
            <h1>Anuncios</h1>
          </div>
          <div
            style={{
              width: '33.3%',
            }}
          >
            <h1>Anuncios</h1>
          </div>
          <div
            style={{
              width: '33.3%',
            }}
          >
            <h1>Anuncios</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Home
