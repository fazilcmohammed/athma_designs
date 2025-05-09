import React, { useState } from 'react'
import KmHeroSection from '../../components/KmComponents/KmHeroSection'
import { microsoft365 } from '../../assets/constant'
import KmServices from '../../components/KmComponents/KmServices'
import KmBottom from '../../components/KmComponents/KmBottom'
import CallbackModal from '../../components/CallbackModal'

const Microsoft365 = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <KmHeroSection heroSection={microsoft365[0]} />

      <section className="container mx-auto px-6 py-12 flex flex-col md:items-center ">
      <p className="text-gray-900 font-bold text-center uppercase text-sm">Cloud Solutions</p>
        <h2 className="text-4xl font-bold text-gray-900 mt-5 mb-10 text-center">
        Microsoft 365 Suite
        </h2>
      {/* Left - Image */}
      <div className="relative w-full md:w-[40%]">
        <img
          src="https://www.firstfocus.com.au/wp-content/uploads/2023/12/shutterstock_2235412393.jpg"
          alt="Microsoft 365 Suite"
          className="rounded-lg shadow-lg w-full"
        />
       
      </div>

      {/* Right - Text Content */}
      <div className="w-full  md:w-[80%] my-10 text-justify flex flex-col justify-center items-center">
        
        <p className="text-gray-700 mt-4 leading-relaxed">
        As your trusted Microsoft 365 provider, what if we told you that you can leverage the possibilities and opportunities of MS Office at a business level to run your business better and more efficiently? Surprised? Don’t be. With extensive enterprise-based capabilities and features, Microsoft 365 transforms the ordinary MS Office into an all-new, powerful solution. Techpappa helps you effectively deploy and configure Microsoft 365 to meet your specific business needs. One of the major advantages of Microsoft 365 is the ability to access your files and data across desktops, laptops, and tablets worldwide, providing flexibility and scalability for your business. With Microsoft 365, you can elevate your business to the next level. Microsoft 365 Business is your comprehensive solution to protect and secure your data. Microsoft 365 Business Premium offers a subscription service that lets you manage your organization in the cloud while Microsoft handles IT, protecting against threats and providing the latest business software.
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

    <KmServices services={microsoft365} titles = {microsoft365[0]}/> 
    <KmBottom bottomSection = {microsoft365[0]}/>
    </>
  )
}

export default Microsoft365