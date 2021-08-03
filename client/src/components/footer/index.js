import React from 'react'
import './style.css'

const Footer = () => {
  return (
    <footer>
      <div id='footer-row-1'>
        <div>
          <a href='/'>BUTTON ONE</a>
        </div>
        <div>
          <a href='/'>BUTTON TWO</a>
        </div>
        <div>
          <a href='/'>BUTTON THREE</a>
        </div>
        <div>
          <a href='/'>BUTTON FOUR</a>
        </div>
      </div>
      <div id='footer-row-2'>
        <div>
          <div class='footer-col'>
            <h1 className='cursor-default'>First Header</h1>
            <a href='/'>
              <p>Option One</p>
            </a>
            <a href='/'>
              <p>Option Two</p>
            </a>
            <a href='/'>
              <p>Option Three</p>
            </a>
            <a href='/'>
              <p>Option Four</p>
            </a>
            <h1 className='cursor-default'>Second Header</h1>
            <a href='/'>
              <p>Option One</p>
            </a>
            <a href='/'>
              <p>Option Two</p>
            </a>
            <a href='/'>
              <p>Option Three</p>
            </a>
          </div>
          <div class='footer-col'>
            <h1 className='cursor-default'>Third Header</h1>
            <a href='/'>
              <p>Option One</p>
            </a>
            <a href='/'>
              <p>Option Two</p>
            </a>
            <a href='/'>
              <p>Option Three</p>
            </a>
            <a href='/'>
              <p>Option Four</p>
            </a>
            <a href='/'>
              <p>Option Five</p>
            </a>
            <a href='/'>
              <p>Option Six</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
