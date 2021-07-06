import React from 'react'

const Navbar = (props) => {
  return (
    <>
      <nav className='navbar fixed-top navbar-expand-lg navbar-dark'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>
            <img
              alt=''
              // src={require('./images/placeholder.webp').default}
              className='navImg'
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
          <h1>Hello World</h1>
        </div>
      </div>
    </>
  )
}

export default Navbar
