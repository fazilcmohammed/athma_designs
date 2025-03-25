import React from 'react'
import { Link } from "react-router-dom";
import aboutImg from "../assets/images/aboutimg.jpg"


const AboutUs = () => {
    return (
        <section className=" bg-white container py-10 md:py-20 mx-auto px-6 md:px-12">
            <h1 className='text-3xl font-medium text-center mb-10'>About <br /> <span className='text-4xl  font-bold'>ALASHAB</span></h1>
            <div className='flex flex-col-reverse  md:flex-row  items-start gap-10 '>
                <div className='md:w-1/2 flex flex-col justify-center items-center md:items-start'>
                    <p className='text-justify mb-5'>
                        At <strong>ALASHAB</strong>, we are committed to providing high-quality fresh fruits and vegetables to the UAE market and beyond. Our extensive network and expertise in supply, import, export, and retail make us a trusted partner for businesses across the region.
                    </p>
                    <p className='text-justify mb-5'>
                        We specialize in wholesale supply of fresh fruits and vegetables across the UAE market, ensuring that our clients receive the finest produce at competitive prices.
                    </p>
                    <p className='text-justify mb-5'>
                        We also import and export our high-quality fresh fruits and vegetables to various parts of the world, with a focus on markets in the Middle East, Africa, and Asia. Our extensive market presence and reliable shipping services ensure that our products are available to meet the needs of customers worldwide.
                    </p>
                    <button className="mt-2 px-6 py-3 bg-[#068f96] text-white font-semibold rounded-md hover:bg-green-600 transition-all">
                        <Link to="/about">Read More</Link>
                    </button>
                </div>
                <div className='md:w-1/2'>
                    <img src={aboutImg} alt="" className='md:w-[90%] rounded-lg' />
                </div>
            </div>
        </section>
    )
}

export default AboutUs