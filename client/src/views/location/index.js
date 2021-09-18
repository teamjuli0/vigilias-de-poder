import React, { useEffect } from 'react'
import { Navbar, Footer } from '../../components/'
import './style.css'
import L from 'leaflet'
import { MapMarker } from './images'

const Location = () => {
  useEffect(() => {
    let mymap = L.map('mapid').setView([34.03964, -118.2926], 15)
    mymap.scrollWheelZoom.disable()

    let MapMarkerIcon = L.icon({
      iconUrl: MapMarker,

      iconSize: [35, 45], // size of the icon
      iconAnchor: [20, 44], // point of the icon which will correspond to marker's location
      popupAnchor: [-5, -47], // point from which the popup should open relative to the iconAnchor
    })

    L.tileLayer(
      'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}',
      {
        attribution:
          'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: 'abcd',
        maxZoom: 20,
        minZoom: 9,
        ext: 'png',
      }
    ).addTo(mymap)

    L.marker([34.03964, -118.2926], { icon: MapMarkerIcon }).addTo(mymap)
  })

  return (
    <>
      <main className='mainDiv'>
        <Navbar />
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
