import React from 'react'
import './style.css'
import { Es } from '../../languages'

const { headerOne, headerTwo, headerThree, buttons } = Es().footer

const Footer = () => {
  return (
    <footer>
      <div id='footer-row-1'>
        {buttons.map((button) => (
          <div>
            <a href={button.link}>{button.title}</a>
          </div>
        ))}
      </div>
      <div id='footer-row-2'>
        <div>
          <div class='footer-col'>
            <h1 className='cursor-default'>{headerOne.title}</h1>
            {headerOne.options.map((option) => (
              <a href={option.link}>
                <p>{option.title}</p>
              </a>
            ))}
            <h1 className='cursor-default'>{headerTwo.title}</h1>
            {headerTwo.options.map((option) => (
              <a href={option.link}>
                <p>{option.title}</p>
              </a>
            ))}
          </div>
          <div class='footer-col'>
            <h1 className='cursor-default'>Preguntas?</h1>
            <div>
              <div
                style={{
                  border: 0,
                  flex: '0 0 50%',
                }}
              >
                <input
                  style={{
                    width: '100%',
                  }}
                />
              </div>
              <div
                style={{
                  border: 0,
                  flex: '0 0 50%',
                }}
              >
                <input
                  style={{
                    width: '100%',
                  }}
                />
              </div>
            </div>
            <input
              style={{
                margin: 0,
                padding: 0,
                border: 0,
                width: '100%',
                flex: '0 0 100%',
              }}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
