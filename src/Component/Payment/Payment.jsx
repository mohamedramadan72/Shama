import React from 'react'
import { Link } from 'react-router-dom'
import './Payment.css'

export default function Payment() {
    return <>
        <section id='payment' className='py-5 mt-5'>
            <div className="container  bg-white rounded rounded-3 shadow shadow-3 pb-3">
                <div className="  d-flex  align-items-center mb-5 p-3">
                    <i class="fa-solid fa-chevron-left px-2 fs-4 paymenticon"></i>
                    <h2 className='fw-bolder'>Credit Card Details</h2>
                </div>
                <div className="paymentMethod w-75 mx-auto shadow shadow-3 rounded rounded-3 p-3 mb-3  d-flex justify-content-center align-items-center">
                    <h3 className=' fw-bold '>Payment Method</h3>
                    <div className="paymentMethodImeg w-50 d-flex justify-content-center align-items-center">
                        <img className='w-25 mx-5' src={(require('./imges/V.png'))} alt="paymentMethodImeg" />
                        <img className='w-25 mx-1' src={(require('./imges/C.png'))} alt="paymentMethodImeg" />
                    </div>
                </div>
                <div className="container w-75  ">
                    <div className="row  mx-auto p-3  bg-white rounded rounded-3 shadow shadow-3">
                        <div className="col-md-6">
                            <div class="form-group w-50 mx-auto py-2">
                                <label className='mb-1' for="cardNumber">CARD NUMBER</label>
                                <input type="text" class="form-control" id="cardNumber" placeholder="Valid Card Number" required autofocus />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="form-group w-50 mx-auto py-2">
                                <label className='mb-1' for="expityMonth"> EXPIRY DATE</label>
                                <input type="text" class="form-control" id="expityMonth" placeholder="MM" required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="form-group w-50 mx-auto py-2">
                                <label className='mb-1' for="expityYear"> EXPIRY DATE</label>
                                <input type="text" class="form-control" id="expityYear" placeholder="YY" required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="form-group w-50 mx-auto py-2">
                                <label className='mb-1' for="cvCode"> VS Code</label>
                                <input type="password" class="form-control" id="cvCode" placeholder="CV" required />
                            </div>
                        </div>
                    </div>
                    <hr className='my-5  mx-auto' />
                    <Link className='nav-link bg-light w-25 text-center p-3 rounded rounded-3 shadow shadow-3 x-auto'> <i class="fa-solid fa-plus"></i> Add another card  </Link>
                </div>
                <div className="  d-flex align-items-center justify-content-center">
                    <button className='PaymentBtn w-50 mt-5 rounded rounded-5 shadow-lg py-2'>Save</button>
                </div>
            </div>
        </section>
    </>
}
