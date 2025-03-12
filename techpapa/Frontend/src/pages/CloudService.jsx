import React from 'react'
import { cloudServices } from '../assets/constant'
import KmHeroSection from '../components/KmComponents/KmHeroSection'
import KmServices from '../components/KmComponents/KmServices'
import KmBottom from '../components/KmComponents/KmBottom'

const CloudService = () => {
  return (
    <>
      <KmHeroSection heroSection={cloudServices[0]}/>
      <section className="container mx-auto px-6 py-12 md:flex md:items-center md:space-x-12">
      {/* Left - Image */}
      <div className="relative w-full md:w-1/2">
        <img
          src="https://cdn.prod.website-files.com/6436709e876f3f217c2a3e0a/644b2d17ed46000fe3e5c45b_Digital%20Solutions_Data%20Analytics%20and%20Business%20Intelligence-min.png"
          alt="Cloud Telephony"
          className="rounded-lg shadow-lg w-full"
        />
        {/* Decorative Dots */}
        <div className="absolute top-10 -left-6 w-16 h-24 border-l-4 border-dotted border-blue-500 hidden md:block"></div>
      </div>

      {/* Right - Text Content */}
      <div className="w-full md:w-1/2">
        <p className="text-blue-600 font-bold uppercase">// go Cloud</p>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">
        Making The Cloud Sing To Your Business
        </h2>
        <p className="text-gray-700 mt-4 leading-relaxed">
        Embrace the latest cloud-based solutions from TECHPAPPA, which will help companies of all sizes to optimize their operations in the current competitive business environment. Our services will help you streamline IT infrastructure costs and reduce operational expenses, enabling you to focus on your core competencies.
        </p>
        
        <p className="text-gray-700 mt-4 leading-relaxed">
        TECHPAPPA is a cloud solution provider in UAE. We specialize in designing, building, and supporting cloud solutions, based on proprietary technology. We are a team of talented professionals, who strive to deliver innovative cloud solutions with world-class expertise.
        </p>
        <button
          className="px-6 py-3 mt-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition"
          onClick={() => setShowModal(true)}
        >
          REQUEST A CALLBACK
        </button>
      </div>
    </section>
    <KmServices services={cloudServices} titles = {cloudServices[0]}/>
    <KmBottom bottomSection = {cloudServices[0]}/>
    </>
  )
}

export default CloudService