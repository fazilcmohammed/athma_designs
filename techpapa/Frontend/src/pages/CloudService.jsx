import React, { useState } from 'react'
import { cloudServices } from '../assets/constant'
import KmHeroSection from '../components/KmComponents/KmHeroSection'
import KmServices from '../components/KmComponents/KmServices'
import KmBottom from '../components/KmComponents/KmBottom'
import CallbackModal from '../components/CallBackModal'

const CloudService = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <KmHeroSection heroSection={cloudServices[0]}/>
      <section className="container mx-auto px-6 py-12 flex flex-col md:items-center ">
      {/* Left - Image */}
      <p className="text-gray-900 font-bold text-center uppercase text-sm">Go Cloud</p>
        <h2 className="text-4xl font-bold text-gray-900 mt-5 mb-10 text-center">
        Making The Cloud Sing To Your Business
        </h2>
      <div className="relative w-full md:w-[40%]">
      
        <img
          src="https://www.idmworks.com/wp-content/uploads/2023/06/IDMW_Blog_Bitbucket-AWS_790x525.webp"
          alt="Making The Cloud Sing To Your Business"
          className="rounded-lg shadow-lg w-full "
        />
        {/* Decorative Dots */}

      </div>

      {/* Right - Text Content */}
      <div className="w-full md:w-[80%]  my-10 text-justify flex flex-col justify-center items-center">
        
        <p className="text-gray-700 mt-4 leading-relaxed">
        Embrace the latest cloud-based solutions from TECHPAPPA, which will help companies of all sizes to optimize their operations in the current competitive business environment. Our services will help you streamline IT infrastructure costs and reduce operational expenses, enabling you to focus on your core competencies.
        </p>
        
        <p className="text-gray-700 mt-4 leading-relaxed">
        TECHPAPPA is a cloud solution provider in UAE. We specialize in designing, building, and supporting cloud solutions, based on proprietary technology. We are a team of talented professionals, who strive to deliver innovative cloud solutions with world-class expertise.
        </p>
        <button
          className="px-6 py-3 mt-5 bg-primaryBlue hover:bg-blue-700 text-white font-semibold rounded transition"
          onClick={() => setShowModal(true)}
        >
          REQUEST A CALLBACK
        </button>
        <CallbackModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </div>
    </section>
    <KmServices services={cloudServices} titles = {cloudServices[0]}/>
    <KmBottom bottomSection = {cloudServices[0]}/>
    </>
  )
}

export default CloudService