import React from 'react'
import KmHeroSection from '../components/KmComponents/KmHeroSection'
import { digitalSolutions } from '../assets/constant'
import KmServices from '../components/KmComponents/KmServices'
import KmBottom from '../components/KmComponents/KmBottom'

const DigitalSolutions = () => {
  return (
    <>
    <KmHeroSection heroSection={digitalSolutions[0]}/>
    <section className="container mx-auto px-6 py-12 flex flex-col md:items-center md:space-x-12">
      {/* Left - Image */}
      <div className="relative w-full md:w-[50%]">
      <p className="text-gray-900 font-bold text-center uppercase">Digital Solutions. Digital Results</p>
        <h2 className="text-5xl font-bold text-gray-900 mt-5 mb-10 text-center">
        The Complete Digital Transformation Experience

        </h2>
        <img
          src="https://cdn.prod.website-files.com/6436709e876f3f217c2a3e0a/644b2d17ed46000fe3e5c45b_Digital%20Solutions_Data%20Analytics%20and%20Business%20Intelligence-min.png"
          alt="Cloud Telephony"
          className="rounded-lg shadow-lg w-full h-[350px]"
        />
        {/* Decorative Dots */}
        {/* <div className="absolute top-10 -left-6 w-16 h-24 border-l-4 border-dotted border-red-500 hidden md:block"></div>  */}
      </div>

      {/* Right - Text Content */}
      <div className="w-full md:w-full my-10 text-center">
        
        <p className="text-gray-700 mt-4 leading-relaxed">
        Digital Solutions helps you drive business outcomes by looking beyond traditional ways of working. At TECHPAPPA, we can help your business tap into the power of digital technologies to drive better business outcomes. We are a leading provider of digital solutions in the UAE, and our team of experts has the knowledge and experience to help your business succeed.
        </p>
        
        <p className="text-gray-700 mt-4 leading-relaxed">
        We provide you with a wide spectrum of digital solutions and services to help you create, deliver and build digital experiences. Whether you are just beginning your digital journey, or seeking new opportunities to accelerate growth, our digital solutions and services empower your business transformation journey. We work with you to understand your unique business needs and develop a tailored digital solution that will help you achieve your desired results.
        </p>
        <button
          className="px-6 py-3 mt-5 bg-primaryBlue hover:bg-blue-700 text-white font-semibold rounded transition"
          onClick={() => setShowModal(true)}
        >
          REQUEST A CALLBACK
        </button>
      </div>
    </section>
    <KmServices 
            services={digitalSolutions} titles = {digitalSolutions[0]}
          />
    <KmBottom bottomSection = {digitalSolutions[0]}/>
    </>
  )
}

export default DigitalSolutions