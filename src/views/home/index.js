import React from 'react'
import { Hero, Card, LargeCard, Navbar, Footer } from '../../components/'
import './style.css'

const imagesArr = [
  'https://cdn.images.express.co.uk/img/dynamic/130/590x/secondary/Religious-festivals-and-holidays-2021-2829829.jpg?r=1609600376177',
  'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/christian-quotes-1565711372.jpg',
  'https://www.cru.org/us/en/train-and-grow/spiritual-growth/beginning-with-god/the-christian-and-good-deeds/_jcr_content/image.transform/Cru704x396/img.jpg',
  'https://media.beliefnet.com/~/media/photos-with-attribution/faith/faith-christian-prayer-group-study_credit-shutterstock.jpg?as=1&extension=webp',
  'https://wp-media.patheos.com/blogs/sites/776/2018/09/post-109-salt-christian.jpg',
  'https://willingsteward.com/wp-content/uploads/2017/08/Webp.net-resizeimage-2.jpg',
]

const Home = (props) => (
  <>
    <main className='mainDiv'>
      <Hero />
      <Navbar />
      <div className='flexRow'>
        <LargeCard />
        {imagesArr.map((image) => (
          <Card img={image} />
        ))}
      </div>

      <Footer />
    </main>
  </>
)

export default Home
