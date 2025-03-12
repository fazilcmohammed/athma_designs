import React from 'react'
import { enterprise } from '../../assets/constant'
import KmBottom from '../../components/KmComponents/KmBottom'
import KmHeroSection from '../../components/KmComponents/KmHeroSection'

const Enterprise = () => {
  return (
    <>
    <KmHeroSection heroSection={enterprise[0]}/>

    <section className="container mx-auto px-6 py-12 md:flex md:items-center md:space-x-12">
      {/* Left - Image */}
      <div className="relative w-full md:w-1/2">
        <img
          src="https://www.visiontechin.com/wp-content/uploads/2023/03/ict-img-1-opt.jpg"
          alt="Cloud Telephony"
          className="rounded-lg shadow-lg w-full"
        />
        {/* Decorative Dots */}
        <div className="absolute top-10 -left-6 w-16 h-24 border-l-4 border-dotted border-blue-500 hidden md:block"></div>
      </div>

      {/* Right - Text Content */}
      <div className="w-full md:w-1/2">
        {/* <p className="text-red-600 font-bold">// Professional Service</p> */}
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
        Enterprise ICT Solutions
        </h2>
        <p className="text-gray-700 mt-4 leading-relaxed">
        TECHPAPPA, one among the top IT companies in UAE, follows a comprehensive approach to creating and managing enterprise ICT
         and cloud solutions, along with delivering them from robust, scalable, integrated, and secure platforms, in order to 
         ensure optimal cost, performance, and efficiency. TECHPAPPA provides your business with a range of enterprise ICT and Cloud 
         solutions. Whether it is dealing with passive components such as Structured Cabling or to new developments in cloud 
         solutions we deliver the right enterprise technology solutions. All the IT solutions you need for your business such 
         as Wi-Fi Network and Security, storage solutions, virtualization, security, and disaster recovery solutions will 
         be met by our highly trained team of IT professionals who understand how IT and business intersect. Businesses use our 
         enterprise ICT and Cloud Solutions to take them to the next level helping them stay competitive, stay protected, and ahead
          in performance. With more than two decades of domain experience and 24/7 IT support we know we deliver the best for your 
          business.


        </p>
        <button
          className="px-6 py-3 mt-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition"
          onClick={() => setShowModal(true)}
        >
          REQUEST A CALLBACK
        </button>
      </div>
    </section>

    <KmBottom bottomSection = {enterprise[0]}/>
    </>
  )
}

export default Enterprise