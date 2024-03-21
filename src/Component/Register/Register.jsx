import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
export default function Register(){
    return <>
        <section id='register' className='py-5 mt-5 '>
            <div className="container w-75 ">
                <div className="row g-2">
                    <div className="col-md-6">
                        <div className="registerContent-1 bg-light   h-100 shadow  pt-3 border border-info border-opacity-50 rounded rounded-2  border-2 ">
                            <div className="logo1  text-center">
                                <h1 className='fw-bolder pt-5'><span className=' text-info'>DOC</span>HOME</h1>
                            </div>
                            <div className="signUpLogo d-flex justify-content-center align-items-center py-5">
                                <img className='w-50 py-5  text-center  ' src={(require('./imges/logo.png'))} alt="signUpLogo" />
                            </div>
                            <div className="SingUpText1 text-center">
                                <h3 className='lead fw-bold text-muted'>Your health matters to us</h3>
                            </div>
                            <div className="logo1  text-center">
                                <h3 className=' pt-3'><span className=' text-info'>DOC</span>HOME</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6  ">
                        <div className="registerContent2 h-100 shadow  pt-3 border border-info border-opacity-50 rounded rounded-2  border-2">
                            <div className="registerText2">
                                <h6 className='pt-5 text-muted lead text-center fw-bold fs-6'>Create an account</h6>
                            </div>
                            <form className='pt-3'>
                                <input className='form-control w-75 mx-auto my-3 py-2 bg-light' type="text" placeholder=' user name ' />
                                <input className='form-control w-75 mx-auto my-3 py-2 bg-light' type="number" placeholder=' phone ' />
                                <input className='form-control w-75 mx-auto my-3 py-2 bg-light' type="email" placeholder='email.com ' />
                                <input className='form-control w-75 mx-auto my-3 py-2 bg-light' type="password" placeholder=' password ' />
                                <input className='form-control w-75 mx-auto my-3 py-2 bg-light' type="password" placeholder=' confirm password ' />
                                <div className="form-check d-flex justify-content-center mb-5">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                    <label className="form-check-label" for="form2Example3">
                                        I agree all statements in <Link to='condition'>Terms of service</Link>
                                    </label>
                                </div>
                                <div className="d-flex justify-content-center mx-4 mb-3 ">
                                    <button type="button" className="btn1 btn-outline-info btn border rounded rounded-5 w-50 shadow shadow-1">Sing Up</button>
                                </div>
                                <div className="d-flex mx-auto mb-3 w-50"> 
                                </div>
                                <div className="SingUpText2 text-center mb-2 text-muted">
                                    <p>Or sing up with</p>
                                </div>
                                <div className="registerIcon w-25 text-center  d-flex justify-content-center  align-items-center mx-auto  mb-3   ">
                                    <Link to=''><img className="w-75 px-1" src={(require('./imges/apple-logo.png'))} alt="apple" /></Link>
                                    <Link to=''><img className="w-75 px-1 " src={(require('./imges/google.png'))} alt="google" /></Link>
                                    <Link to=''><img className="w-75 px-1 " src={(require('./imges/facebook.png'))} alt="facebook" /></Link>
                                </div>
                                <p class="text-center lead fs-6 text-muted mt-0 ">Have already an account? <Link to='/login'
                                    class="fw-bold text-primary"><u>Sign in</u></Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
