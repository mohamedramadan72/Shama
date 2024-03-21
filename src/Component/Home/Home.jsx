import { Component } from "react";
import './Home.css'
import { Link } from 'react-router-dom'
export default class Home extends Component {
    state = {
    }
    render() {
        return <>
            <header id="home" className="">
                <div className="layer">
                    <div className="hometext d-flex align-items-center ps-5 vh-100">
                        <div className="item ps-5 text-white ">
                            <h1 className=" fw-bold opacity-75"> Reviews for </h1>
                            <h2 className=" fw-bold mb-5 h1 opacity-75"> Nursing Care Providers </h2>
                            <p className="lead opacity-50 py-5">Yes, home care has expanded in recent years to includea <br /> more full range of services but what does that mean <br /> for you? Overall, the importance of home nursing is  <br /> significant to  a larger number of patients,</p>
                            <button className="btn ">Read more ....</button>
                        </div>
                    </div>
                </div>
            </header>
            {/* Categories */}
            <section id="Categories" className="pt-2 bg-white mb-5">
                <div className="footerline w-100  bg-light pt-1"></div>
                <div className="container w-75">
                    <h2 className="fw-bolder text-center pt-2">Categories</h2>
                    <p className="text-muted lead text-center">Choose the intended category</p>
                    <div className="footerline w-25  bg-light mx-auto pt-1 mb-4  "></div>
                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="CategoriesItem bg-light p-4 rounded rounded-5 shadow vh-25">
                                <img className="" src={(require('./imges/C.png'))} alt="" />
                                <h4 className="fw-bold">Nursing</h4>
                                <p className=" text-muted lead">Nursing includes the promotion of health, prevention of illness, and the care of ill, disabled and dying people.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="CategoriesItem bg-white p-4 rounded rounded-5 shadow">
                                <img className="" src={(require('./imges/D.png'))} alt="" />
                                <h4 className="fw-bold">Physiotherapist</h4>
                                <p className=" text-muted lead w-75">Providing care and treatment for people who suffer from movement problems or physical injuries</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="CategoriesItem bg-white p-4 rounded rounded-5 shadow ">
                                <img className="" src={(require('./imges/B.png'))} alt="" />
                                <h4 className="fw-bold">Analysis labs</h4>
                                <p className=" text-muted lead">He analyzes and studies samples using advanced laboratory techniques to obtain accurate information about the composition of the sample</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="CategoriesItem bg-white p-4 rounded rounded-5 shadow ">
                                <img className="" src={(require('./imges/A.png'))} alt="" />
                                <h4 className="fw-bold">Radiology centers</h4>
                                <p className=" text-muted lead">Medical imaging services for diagnosis and medical follow-up. Advanced radiological techniques are used to obtain internal images of the body</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*  Most popular caregiver*/}
            <section id="MostPopularCaregiver" className="pt-2 bg-white mb-5">
                <div className="footerline w-100  bg-light pt-1"></div>
                <div className="container">
                    <h2 className="fw-bolder text-center pt-2">Most popular caregiver</h2>
                    <p className="text-muted lead text-center w-25  mx-auto"> is someone who is widely recognized and highly regarded for their exceptional skills</p>
                    <div className="footerline w-25  bg-light mx-auto pt-1 mb-4  "></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div class=" bg-light p-2 rounded rounded-3 border border-light">
                                <img className="w-50 d-block mx-auto mb-5" src={(require('./imges/E.png'))} alt="" />
                                <h5 className="fw-bold text-center">Dr. Asmaa Adel </h5>
                                <p className="text-muted lead mb-3 text-center fs-4">Doctor of physical therapy</p>
                                <div className="stars d-flex ">
                                    <div className="star px-5">
                                        <i class="fa-solid fa-star text-warning "></i>
                                        <i class="fa-solid fa-star text-warning "></i>
                                        <i class="fa-solid fa-star text-warning "></i>
                                        <i class="fa-solid fa-star text-warning "></i>
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div className="">
                                        <p className="text-muted  mb-3 text-center">4.8 | 177 Reviews</p>
                                    </div>
                                </div>
                                <div className=" d-flex align-items-center justify-content-center">
                                    <a className="nav-link" href=""> <button className="btn btn1 mb-3 shadow-lg "> View Profile</button></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class=" 
                             p-2 rounded rounded-3 border border-3 border-light">
                                <img className="w-50 d-block mx-auto mb-5" src={(require('./imges/E.png'))} alt="" />
                                <h5 className="fw-bold text-center">Dr. Asmaa Adel </h5>
                                <p className="text-muted lead mb-3 text-center fs-4">Doctor of physical therapy</p>
                                <div className="stars d-flex text-center ">
                                    <div className="star px-5 ">
                                        <i class="fa-solid fa-star text-warning "></i>
                                        <i class="fa-solid fa-star text-warning "></i>
                                        <i class="fa-solid fa-star text-warning "></i>
                                        <i class="fa-solid fa-star text-warning "></i>
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div className="">
                                        <p className="text-muted  mb-3 text-center">4.8 | 177 Reviews</p>
                                    </div>
                                </div>
                                <div className=" d-flex align-items-center justify-content-center">
                                    <a className="nav-link" href=""> <button className="btn btn1 mb-3 shadow-lg "> View Profile</button></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class=" 
                             p-2 rounded rounded-3 border border-3 border-light">
                                <img className="w-50 d-block mx-auto mb-5" src={(require('./imges/E.png'))} alt="" />
                                <h5 className="fw-bold text-center">Dr. Asmaa Adel </h5>
                                <p className="text-muted lead mb-3 text-center fs-4">Doctor of physical therapy</p>
                                <div className="stars d-flex ">
                                    <div className="star px-5">
                                        <i class="fa-solid fa-star text-warning "></i>
                                        <i class="fa-solid fa-star text-warning "></i>
                                        <i class="fa-solid fa-star text-warning "></i>
                                        <i class="fa-solid fa-star text-warning "></i>
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                    <div className="">
                                        <p className="text-muted  mb-3 text-center">4.8 | 177 Reviews</p>
                                    </div>
                                </div>
                                <div className=" d-flex align-items-center justify-content-center">
                                    <a className="nav-link" href=""> <button className="btn btn1 mb-3 shadow-lg "> View Profile</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* More healt hcare */}
            <section id="Morehealthcare" className=" bg-light py-5">
                <div className="footerline w-100  bg-light pt-1"></div>
                <div className="container">
                    <h2 className="fw-bolder text-center pt-2">More health care</h2>
                    <p className="text-muted lead text-center w-25  mx-auto"> We care about your health and well-being, your health matters to us</p>
                    <div className="footerline w-25  bg-dark opacity-25 mx-auto pt-1 mb-4  "></div>
                </div>
                <div className="container w-75 bg-white rounded rounded-5 shadow mb-5">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-4">
                            <div className=" p-5">
                                <img className="w-100 mx-auto mb-5" src={(require('./imges/G.png'))} alt="" />
                            </div>
                        </div>
                        <div className="col-md-7 offset-md-1">
                            <div className="p-5">
                                <h4 className="fw-bold py-4">Do you have any medical  <br /> questions?</h4>
                                <p className=" text-muted lead w-75 mb-5 ">Send your medical question and get an answer from a specialist doctor</p>
                                <a className="nav-link" href=""> <button className="btn btn1 mb-3 shadow-lg px-5 "> Ask Now</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container w-75 bg-white rounded rounded-5 shadow  ">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-7 offset-md-1 ">
                            <div className="p-5">
                                <h4 className="fw-bold py-4">Doctor call </h4>
                                <p className=" text-muted lead w-75 mb-5 ">Determine the call time in agreement with the caregiver</p>
                                <a className="nav-link" href=""> <button className="btn btn1 mb-3 shadow-lg px-5 "> Book a call</button></a>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className=" p-5">
                                <img className="w-100 mx-auto mb-5" src={(require('./imges/H.png'))} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Blog */}
            <section id="Blog" className=" d-flex  align-items-center justify-content-center">
                <div className="container p-2  ">
                    <div className="row g-3 ">
                        <div className="col-md-4">
                            <div className="BlogItem d-flex">
                                <div className=" px-3">
                                    <img className=" " src={(require('./imges/T.png'))} alt="" />
                                </div>
                                <div className="">
                                    <h6 className=" fw-bolder mb-3">Search and book an appointment</h6>
                                    <p className=" text-muted">Request a home visit from the doctor, book medical services or procedures, and you can also contact the doctor for quick inquiries at the best available prices.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="BlogItem d-flex">
                                <div className=" px-3">
                                    <img className=" " src={(require('./imges/S.png'))} alt="" />
                                </div>
                                <div className="">
                                    <h6 className=" fw-bolder mb-3">Reviews from previous patients.</h6>
                                    <p className=" text-muted">By reading real patient reviews, you can get an idea about the level of healthcare provided and the quality of services provided. These assessments can include information about the doctor's skills,</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="BlogItem d-flex">
                                <div className=" px-3">
                                    <img className=" " src={(require('./imges/W.png'))} alt="" />
                                </div>
                                <div className="">
                                    <h6 className=" fw-bolder mb-3">The quality of the doctor</h6>
                                    <p className=" text-muted">Our doctors are skilled, precise, and detail-oriented, and can interact effectively with patients, listen to their concerns, and clearly explain available treatments and options.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Download */}
            <section id="Download" className=" py-5 d-flex  align-items-center justify-content-center">
                <div className="container w-75">
                    <div className="DownloagItem p-2 rounded rounded-5 shadow">
                        <div className="row align-items-center justify-content-center p-2">
                            <div className="col-md-8">
                                <div className="DownloadText p-3 text-white  ">
                                    <h5 className="fw-bold mb-5">Download DocHome Application</h5>
                                    <p className="lead w-75  fw-light opacity-75 pb-5">Using the app, you can search and book caregiver consultations with ease. Book a caregiver and they will come to you within minutes.</p>
                                    <Link> <img className="mb-3 " src={(require('./imges/O.png'))} alt="" /></Link>
                                    <div className="DownloadSocial  ">
                                         <Link className="text-white "><i className='fab mx-3 fa-facebook'></i></Link>
                                         <Link className="text-white "><i className='fab mx- fa-youtube'></i></Link>
                                         <Link className="text-white "><i className='fab mx-3 fa-twitter'></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="DownloadImeg p-0">
                                <img className=" w-100 " src={(require('./imges/F.png'))} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    }
}

