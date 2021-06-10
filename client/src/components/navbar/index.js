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
    <nav className='navbar navbar-expand-lg navbar-light'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          <img
            src={require('./images/placeholder.webp').default}
            style={{
              height: '30px',
            }}
          />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            {props.buttonTxt.map((item) => (
              <ListItem link={item.link} text={item.text} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
