import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  

  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
        <div className="container-fluid">
          <Link  className="navbar-brand" to="/"><b><i><u>TEXT-UTILS</u></i></b></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contactus">Contact Us</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-4 `}>

              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
            </div>
          </div>
        </div>
      </nav>

    </div>
  )
}
