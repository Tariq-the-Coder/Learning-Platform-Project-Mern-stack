import React from 'react'
import { NavLink } from 'react-router-dom'
import img from '../images/img5.jpg'


export default function Feature() {
    return (
        <section className='d-flex align-items-center  '>
            <div className='container-fluid '>
                <div className='row first-carousel'>
                    <div className='col-lg-6 col-md-12 col-12 col-xxl-6 order-2 order-lg-1  container d-flex justify-content-center flex-column '>
                        <div className='container py-5'>
                            <h1 className=" display-5" style={{ color: '#ff4500', fontWeight: 'bold' }}>Learn Online</h1>
                            <h4 className='my-3' style={{ color: '#0076fa', fontWeight: 'bold', fontSize: '15px' }}>Instant Doubt Resolution</h4>
                            <NavLink to='/signin' id="mainbtn" className='btn  mt-3'>Get Started</NavLink>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12 col-12 col-xxl-6  order-1 order-lg-2'>
                        <img src={img} className='w-100 ' alt="" />
                    </div>
                </div>
            </div>
        </section>

    )
}
