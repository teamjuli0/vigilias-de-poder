import React from 'react'

const ListItem = (props) => {
  return (
    <li className='nav-item'>
      <a className='nav-link' aria-current='page' href={props.link}>
        {props.text}
      </a>
    </li>
  )
}

const Navbar = (props) => {
  return (
    <>
      <nav className='navbar fixed-top navbar-expand-lg navbar-dark'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>
            <img
              alt=''
              // src={require('./images/placeholder.webp').default}
              style={{
                height: '30px',
              }}
            />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <div
              style={{
                color: 'white',
              }}
            >
              Hello World
            </div>
          </div>
        </div>
      </nav>
      <div
        class='modal fade'
        id='exampleModal'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div
          class='modal-dialog'
          style={{
            color: 'white',
          }}
        >
          {/* <button
            type='button'
            class='btn-close'
            data-bs-dismiss='modal'
            aria-label='Close'
          ></button> */}
          <h1>Hello World</h1>
        </div>
      </div>
    </>
  )
}

export default Navbar
