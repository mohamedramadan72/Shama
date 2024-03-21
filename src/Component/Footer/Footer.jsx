import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return <>
    <footer id='footer ' className='bg-dark text-white mt-5 '>
      <div className="container w-75 ">
        <div className="footerlogo text-center">
          <h1 className='fw-bolder pt-3 text-white'><span className=' text-info'>DOC</span>HOME</h1>
        </div>
        <div className="footerline w-25  bg-info pt-1 mx-auto mb-5  "></div>
        <div className="row">
          <div className="col-md-3">
            <div className="footertext1">
              <h5 className='mb-1 fw-bold'>DOCHOME</h5>
              <div className=" px-3">
                <Link className='nav-link' to='about'><h6 className='fs-6'><span className='fs-3 '>.</span> About Us</h6></Link>
                <Link className='nav-link' to='team'><h6 className='fs-6'><span className='fs-3'>.</span> Our Team</h6></Link>
                <Link className='nav-link' to='contact'><h6 className='fs-6'><span className='fs-3'>.</span> Contact Us</h6></Link>
                <Link className='nav-link' to='faqs'><h6 className='fs-6'><span className='fs-3'>.</span> FAQs</h6></Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footertext1">
              <h5 className='mb-1 fw-bold'>Specialties</h5>
              <div className=" px-3">
                <Link className='nav-link' to='about'><h6 className='fs-6'><span className='fs-3 '>.</span> Nursing</h6></Link>
                <Link className='nav-link' to='team'><h6 className='fs-6'><span className='fs-3'>.</span> Physiotherapist</h6></Link>
                <Link className='nav-link' to='team'><h6 className='fs-6'><span className='fs-3'>.</span> Analysis labs</h6></Link>
                <Link className='nav-link' to='team'><h6 className='fs-6'><span className='fs-3'>.</span> Radiology centers</h6></Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footertext1">
              <h5 className='mb-1 fw-bold'>Search By</h5>
              <div className=" px-3">
                <Link className='nav-link' to='about'><h6 className='fs-6'><span className='fs-3 '>.</span> Speciality</h6></Link>
                <Link className='nav-link' to='team'><h6 className='fs-6'><span className='fs-3'>.</span> Area</h6></Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footertext1">
              <h5 className='mb-1 fw-bold'>Are You A Doctor ?</h5>
              <div className=" px-3">
                <Link className='nav-link' to='about'><h6 className='fs-6'><span className='fs-3 '>.</span> Join DocHome Doctors</h6></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerline w-100  bg-info pt-1"></div>
      <div className="container w-75 ">
        <div className="row g-2 d-flex justify-content-center align-items-center mt-2">
          <div className="col-md-4">
            <div className="footertext2">
              <div className=" text-center  d-flex justify-content-center  align-items-center mx-auto  ">
                <Link to=''><img className="w-50 opacity-75" src={(require('./imges/youtube.png'))} alt="apple" /></Link>
                <Link to=''><img className="w-50 opacity-75 " src={(require('./imges/instagram.png'))} alt="google" /></Link>
                <Link to=''><img className="w-50 opacity-75 " src={(require('./imges/linkedin.png'))} alt="facebook" /></Link>
                <Link to=''><img className="w-50 opacity-75 " src={(require('./imges/google-play.png'))} alt="facebook" /></Link>
                <Link to=''><img className="w-50 opacity-75 " src={(require('./imges/facebook.png'))} alt="facebook" /></Link>
                <Link to=''><img className="w-50 opacity-75 " src={(require('./imges/whatsapp.png'))} alt="facebook" /></Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footertext2">
              <div className=" d-flex justify-content-center align-items-center">
                <img className='w-25' src={(require('./imges/logo.png'))} alt="signUpLogo" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footertext2 d-flex justify-content-center align-items-center">
              <div className="">
                <p className='fs-5 opacity-75'>2024© All rights reserved by </p>
              </div>
              <div className="">
                <h6 className='fw-bolder  text-white'><span className=' text-info'>DOC</span>HOME</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
}
