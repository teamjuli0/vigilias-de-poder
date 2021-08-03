import React from 'react'
import './style.css'
import { Es } from '../../languages'

const Navbar = () => {
  const { options, sermons } = Es().nav
  return (
    <>
      <nav>
        <div id='nav-row-1'>
          <p className='cursor-default'>VIGILIAS DE PODER</p>
          <div>
            <div id='row-btns'>
              {options.map((btn) => (
                <a href={btn.link}>{btn.title}</a>
              ))}
            </div>
          </div>
        </div>
        <div id='nav-row-2'>
          <p className='cursor-default'>{sermons}</p>
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
