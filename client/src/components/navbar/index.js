import React from 'react'
import './style.css'

const Navbar = (props) => {
  return (
    <>
      <nav>
        <div id='nav-row-1'>
          <p className='cursor-default'>VIGILIAS DE PODER</p>
          <div>
            <div id='row-btns'>
              <a href='/'>Button 1</a>
              <a href='/'>Button 2</a>
              <a href='/'>Button 3</a>
              <a href='/'>Button 4</a>
            </div>
          </div>
        </div>
        <div id='nav-row-2'>
          <p className='cursor-default'>SERMONS</p>
          <div id='input-div'>
            <a href='/'>
              <i class='fas fa-search'></i>
            </a>
            <input type='text' />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
