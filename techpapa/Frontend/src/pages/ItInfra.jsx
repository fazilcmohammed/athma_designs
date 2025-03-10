import React from 'react'
import KmHeroSection from '../components/KmComponents/KmHeroSection'
import { itInfrastructure } from '../assets/constant'
import KmServices from '../components/KmComponents/KmServices'
import KmBottom from '../components/KmComponents/KmBottom'

const ItInfra = () => {
  return (
    <>
      <KmHeroSection heroSection={itInfrastructure[0]}/>

      <section className="container mx-auto px-6 py-12 md:flex md:items-center md:space-x-12">
      {/* Left - Image */}
      <div className="relative w-full md:w-1/2">
        <img
          src="https://cdn.prod.website-files.com/6436709e876f3f217c2a3e0a/644b2d17ed46000fe3e5c45b_Digital%20Solutions_Data%20Analytics%20and%20Business%20Intelligence-min.png"
          alt="Cloud Telephony"
          className="rounded-lg shadow-lg w-full"
        />
        {/* Decorative Dots */}
        <div className="absolute top-10 -left-6 w-16 h-24 border-l-4 border-dotted border-red-500 hidden md:block"></div>
      </div>

      {/* Right - Text Content */}
      <div className="w-full md:w-1/2">
        <p className="text-red-600 font-bold uppercase">// Transform Your It Infrastructure</p>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">
        IT Infrastructure Services That Offer A Differentiated Value
        </h2>
        <p className="text-gray-700 mt-4 leading-relaxed">
        EMTECH offers a range of IT infrastructure services. We provide free active consultation, we implement services by using the latest technology solutions that deliver a differentiated value to your business, by enhancing operational efficiencies, boosting productivity and performance, accelerating time-to-market, and reducing costs.
        </p>
        
        <p className="text-gray-700 mt-4 leading-relaxed">
        Our IT Infrastructure consulting services enable organizations to design, build, run and manage a scalable, flexible, and reliable IT infrastructure. Through our suite of services, we help our customers in reducing infrastructure costs and facilitate them to focus on strategic initiatives and business transformation.
        </p>

        <p className="text-gray-700 mt-4 leading-relaxed">
        We are experts in pairing up the top IT infrastructure technologies to meet each client’s specific need. We have an extensive pool of infrastructure specialists who can help you create, run and manage the next-generation IT Infrastructure.
        </p>
        <button
          className="px-6 py-3 mt-5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded transition"
          onClick={() => setShowModal(true)}
        >
          REQUEST A CALLBACK
        </button>
      </div>
    </section>
    <KmServices services={itInfrastructure} titles = {itInfrastructure[0]}/>

    <KmBottom bottomSection = {itInfrastructure[0]}/>
    </>
  )
}

export default ItInfra