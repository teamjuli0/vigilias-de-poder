import React from 'react'
import { Hero, Card, LargeCard } from '../../components/'
import './style.css'

const imagesArr = [
  'https://cdn.images.express.co.uk/img/dynamic/130/590x/secondary/Religious-festivals-and-holidays-2021-2829829.jpg?r=1609600376177',
  'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/christian-quotes-1565711372.jpg',
  'https://www.cru.org/us/en/train-and-grow/spiritual-growth/beginning-with-god/the-christian-and-good-deeds/_jcr_content/image.transform/Cru704x396/img.jpg',
  'https://media.beliefnet.com/~/media/photos-with-attribution/faith/faith-christian-prayer-group-study_credit-shutterstock.jpg?as=1&extension=webp',
  'https://wp-media.patheos.com/blogs/sites/776/2018/09/post-109-salt-christian.jpg',
  'https://willingsteward.com/wp-content/uploads/2017/08/Webp.net-resizeimage-2.jpg',
]

const Home = () => (
  <>
    <main className='mainDiv'>
      <Hero />
      <nav
        style={{
          width: '100%',
          height: '80px',
          position: 'sticky',
          top: 0,
          backgroundColor: '#171717',
          zIndex: 4,
          padding: 0,
        }}
      >
        <div
          style={{
            maxWidth: '1150px',
            margin: 'auto',
            color: 'white',
          }}
        >
          <nav class='navbar navbar-expand-lg navbar-dark'>
            <div class='container-fluid'>
              <a class='navbar-brand' href='#'>
                Navbar
              </a>
              <button
                class='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span class='navbar-toggler-icon'></span>
              </button>
              <div class='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul class='navbar-nav ms-auto mb-2 mb-lg-0'>
                  <li class='nav-item'>
                    <a class='nav-link active' aria-current='page' href='#'>
                      Home
                    </a>
                  </li>
                  <li class='nav-item'>
                    <a class='nav-link' href='#'>
                      Link
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div
            style={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
              height: '40px',
            }}
          >
            <p
              style={{
                height: '30px',
              }}
            >
              SERMONS
            </p>
            <input
              style={{
                height: '30px',
              }}
            />
          </div>
        </div>
      </nav>
      <div className='flexRow'>
        <LargeCard />
        {imagesArr.map((image) => (
          <Card img={image} />
        ))}
      </div>
    </main>
  </>
)

export default Home
