import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return <>
        <nav className="navbar navbar-expand-lg   fixed-top ">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand " to=''><img className='w-50' src={(require('./imges/logo.png'))}  alt="" /></Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='home'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='about'>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='payment'>payment</Link>
                        </li> 
                    </ul>
                    <div className="d-flex ">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center align-items-center">
                            <div className="social">
                                <i className='fab mx-2 fa-facebook'></i>
                                <i className='fab mx-2 fa-instagram'></i>
                                <i className='fab mx-2 fa-twitter'></i>
                                <i className='fab mx-2 fa-spotify'></i>
                                <i className='fab mx-2 fa-github'></i>
                            </div>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to='/'>Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='login'></Link>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" to=''></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </>
}
