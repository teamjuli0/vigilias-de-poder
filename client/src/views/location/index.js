import React, { useEffect } from 'react'
import { Navbar, Footer } from '../../components/'
import './style.css'
import L from 'leaflet'

const Location = () => {
  useEffect(() => {
    var mymap = L.map('mapid').setView([51.505, -0.09], 13)

    L.tileLayer(
      'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png',
      {
        maxZoom: 20,
        attribution:
          '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
      }
    ).addTo(mymap)
  })
  return (
    <>
      <main className='mainDiv'>
        <Navbar />
        <div
          id='mapid'
          style={{
            height: '600px',
            width: '100%',
          }}
        ></div>
        <Footer />
      </main>
    </>
  )
}

export default Location
