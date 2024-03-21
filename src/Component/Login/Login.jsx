import React from 'react'
import { Link } from 'react-router-dom'
export default function Login() {
    return <>
        <section id='login' className='py-5 mt-5'>
            <div className="container w-75 ">
                <div className="row g-2">
                    <div className="col-md-6">
                        <div className="LoginContent1 bg-light h-100 shadow  pt-3 border border-info border-opacity-50 rounded rounded-2  border-2 ">
                            <div className="logo1  text-center">
                                <h1 className='fw-bolder pt-5'><span className=' text-info'>DOC</span>HOME</h1>
                            </div>
                            <div className="LoginLogo d-flex justify-content-center align-items-center py-5">
                                <img className='w-50   text-center ' src={(require('./imges/logo.png'))} alt="signUpLogo" />
                            </div>
                            <div className="LoginText1 text-center">
                                <h3 className='lead fw-bold text-muted'>Thanks you for your trust</h3>
                            </div>
                            <div className="logo1  text-center">
                                <h3 className=' py-3'><span className=' text-info'>DOC</span>HOME</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6  ">
                        <div className="LoginContent2 h-100 shadow  pt-3 border border-info border-opacity-50 rounded rounded-2  border-2">
                            <div className="LoginText2">
                                <h6 className='pt-5 text-muted lead text-center fw-bold fs-6'>Login to Your accont</h6>
                            </div>
                            <form className='pt-3'>
                                <input className='form-control w-75 mx-auto my-3 py-2 bg-light' type="email" placeholder='email.com ' />
                                <input className='form-control w-75 mx-auto my-3 py-2 bg-light' type="password" placeholder=' password ' />
                                <div class="row mb-4 py-4  mx-auto">
                                    <div class="col d-flex justify-content-center">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                                            <label class="form-check-label" for="form1Example3"> Remember me </label>
                                        </div>
                                    </div>
                                    <div class="col">      
                                        <Link to="#!">Forgot password?</Link>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center mx-4 mb-3 ">
                                    <button type="button" className="btn1 btn-outline-info btn border rounded rounded-5 w-50">Log In</button>
                                </div>
                                <div className="d-flex mx-auto mb-3 w-50">

                                </div>
                                <div className="LoginText2 text-center mb-2 text-muted">
                                    <p>Or sing up with</p>
                                </div>
                                <div className="LginIcon w-25 text-center  d-flex justify-content-center  align-items-center mx-auto  mb-3   ">
                                    <Link to=''><img className="w-75 px-1" src={(require('./imges/apple-logo.png'))} alt="apple" /></Link>
                                    <Link to=''><img className="w-75 px-1 " src={(require('./imges/google.png'))} alt="google" /></Link>
                                    <Link to=''><img className="w-75 px-1 " src={(require('./imges/facebook.png'))} alt="facebook" /></Link>
                                </div>
                                <p class="text-center lead fs-6 text-muted mt-0 ">Don't have an account? <Link to='/'
                                    class="fw-bold text-primary"><u>Sing Up</u></Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
