import React, { useState } from 'react'
import KmHeroSection from '../../components/KmComponents/KmHeroSection'
import { itSupport } from '../../assets/constant'
import KmServices from '../../components/KmComponents/KmServices'
import KmBottom from '../../components/KmComponents/KmBottom'
import CallbackModal from '../../components/CallBackModal'

const ItSupport = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <KmHeroSection heroSection={itSupport[0]} />

      <section className="container mx-auto px-6 py-12 flex flex-col md:items-center ">
      <p className="text-gray-900 font-bold text-center uppercase text-sm">Professional Service</p>
        <h2 className="text-4xl font-bold text-gray-900 mt-5 mb-10 text-center">
        Nationwide Emergency 24/7 Onsite IT Support
        </h2>
      {/* Left - Image */}
      <div className="relative w-full md:w-[40%]">
        <img
          src="https://microage.ca/nwd/wp-content/uploads/sites/39/bb-plugin/cache/shutterstock_1319513888-2-1536x864-landscape-81e9071c78385ca479cd6c826dabe5e9-603ffbdade5fe.png"
          alt="IT Support"
          className="rounded-lg shadow-lg w-full"
        />
        
      </div>

      {/* Right - Text Content */}
      <div className="w-full md:w-[80%] my-10 text-justify flex flex-col justify-center items-center">
        
        <p className="text-gray-700 mt-4 leading-relaxed">
        At Techpappa, we provide exceptional IT Support Services that help businesses maintain seamless operations 24/7. Our extensive expertise in technology integration and management spans multiple industries, making us the preferred IT partner for leading banks and financial institutions in the region. In today’s tech-driven world, businesses relying on advanced technology platforms need a robust, reliable, and scalable support structure. Techpappa delivers IT Support Services that ensure your systems are always running smoothly, securely, and efficiently. Whether you need help managing your IT infrastructure, optimizing operations, or troubleshooting complex issues, our proactive support is tailored to meet your unique business needs. We focus on minimizing downtime, resolving issues quickly, and ensuring long-term stability. As one of the most successful nationwide IT Managed Services providers, we can help guide your IT needs. With Gold partnerships with Microsoft, VEEAM, SonicWall, Sophos, and more, we are poised to be your IT managed service partner. Explore more about our IT Managed Services today.
        </p>
        <button
          className="px-6 py-3 mt-5 bg-primaryBlue hover:bg-blue-700 text-white font-semibold rounded transition"
          onClick={() => setShowModal(true)}
        >
          REQUEST A CALLBACK
        </button>
        <CallbackModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </div>
    </section >

    <KmServices services={itSupport} titles = {itSupport[0]}/> 
    <KmBottom bottomSection = {itSupport[0]}/>
    </>
  )
}

export default ItSupport