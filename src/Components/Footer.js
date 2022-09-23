import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
       {/* <!-- footer component start --> */}
    <footer className="container py-5">
        <div className="row">
            <div className="col-12 col-md">

                <small className="d-block mb-3 ">www.Text-Utils.com &copy; 2022-2023</small>
            </div>
            <div className="col-6 col-md">
                <h5><Link to="/">Home</Link></h5>
                <ul className="list-unstyled text-small">
                    <li>Cool stuff</li>
                    <li>Random feature</li>
                    <li>Team feature</li>
                    <li>Stuff for developers</li>
                    <li>Another feature</li>
                   
                </ul>
            </div>
            <div className="col-6 col-md">
                <h5><Link to="/services">Services</Link></h5>
                <ul className="list-unstyled text-small">
                    <li>Text Analysis</li>
                    <li>uppercase</li>
                    <li>lowercase</li>
                    <li>copy text</li>
                    <li>Remove extra space</li>
                   
                </ul>
            </div>
            <div className="col-6 col-md">
                <h5><Link to="/about">About</Link></h5>
                <ul className="list-unstyled text-small">
                    <li>text analysis</li>
                    <li>Education</li>
                    <li>text-transform</li>
                    <li>adopt innovation</li>
                    <li>Free to use</li>
                </ul>
            </div>
            <div className="col-6 col-md">
                <h5><Link to="/contactus">Contact Us</Link></h5>
                <ul className="list-unstyled text-small">
                    <li>Name</li>
                    <li>Email</li>
                    <li>password</li>
                    <li>your queries</li>
                    <li>submit</li>
                </ul>
            </div>
           
            
        </div>
    </footer>
    </div>
  )
}
