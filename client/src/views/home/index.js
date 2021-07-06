import React from 'react'
import { Hero, Card } from '../../components/'
import './style.css'

const Home = () => (
  <main className='mainDiv'>
    <Hero />
    <div className='flexRow'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </main>
)

export default Home
