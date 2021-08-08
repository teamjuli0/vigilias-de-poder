import React, { useEffect } from 'react'
import { Navbar, Footer } from '../../components/'
import './style.css'
import L from 'leaflet'
import { MapMarker } from './images'

const Location = () => {
  useEffect(() => {
    let mymap = L.map('mapid').setView([34.03964, -118.2926], 13)
    mymap.scrollWheelZoom.disable()

    let MapMarkerIcon = L.icon({
      iconUrl: MapMarker,

      iconSize: [35, 45], // size of the icon
      iconAnchor: [20, 44], // point of the icon which will correspond to marker's location
      popupAnchor: [-5, -47], // point from which the popup should open relative to the iconAnchor
    })

    L.tileLayer(
      'https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png',
      {
        maxZoom: 20,
        minZoom: 9,
        attribution:
          '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
      }
    ).addTo(mymap)

    L.marker([34.03964, -118.2926], { icon: MapMarkerIcon }).addTo(mymap)
  })

  return (
    <>
      <Navbar />
      <main className='mainDiv'>
        <div id='col-left-location'>
          <div>
            <div id='address-div'>
              <h1>Address</h1>
              <p id='address-lg-txt'>1000 Address Rd</p>
              <p id='address-sm-txt'>Los Angeles, CA 90000</p>
              <a href='/location'>Directions</a>
            </div>
          </div>
          <div>
            <div id='service-time-div'>
              <h1>Service Times</h1>
              <p className='service-day'>Friday</p>
              <p className='service-time'>7:00 P.M.</p>
              <p className='service-day'>Sunday</p>
              <p className='service-time'>10:00 A.M.</p>
            </div>
          </div>
        </div>
        <div id='map-container'>
          <div>
            <div id='mapid'></div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Location
