import React from 'react'
import EmiCalculator from './EmiCalculator'
import Application from './Application'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary ">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
      <img src={`${process.env.PUBLIC_URL}/images/logo.png`} className="App-logo img-fluid" alt="logo" width={160} />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
         <Link to="/" className='Linkstyle'> <li className="nav-item links">
            <a className="nav-link " aria-current="page" href="#">
              Home
            </a>
          </li></Link>
         <Link to="/about" className='Linkstyle'> <li className="nav-item links">
            <a className="nav-link" href="#">
              About Us
            </a>
          </li></Link>
          <Link to="services" className='Linkstyle'>
          <li className="nav-item links">
            <a className="nav-link" href="#">
              Our Services
            </a>
          </li></Link>
          <li className="nav-item links">
            <a className="nav-link" href="#">
              <Application/>
            </a>
          </li>
          <li className="nav-item links">
            <a className="nav-link" href="#">
             <EmiCalculator/>
            </a>
          </li>
          <li className="nav-item">
         
            <button type="button" className="login-btn"><i className="bi bi-person-circle"></i> Login</button>
           
          </li>
        
        </ul>
       
      </div>
    </div>
  </nav>
  // 
  )
  // 
  
}
