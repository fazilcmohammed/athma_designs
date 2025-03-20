import React from 'react'
import KmHeroSection from '../../components/KmComponents/KmHeroSection'
import { iot } from '../../assets/constant'
import KmBottom from '../../components/KmComponents/KmBottom'

const IoT = () => {
  return (
    <>
      <KmHeroSection heroSection={iot[0]} />

      <section className="container mx-auto px-6 py-12 flex flex-col md:items-center md:space-x-12">
      <p className="text-gray-900 font-bold text-center uppercase">Cloud Solutions</p>
        <h2 className="text-5xl font-bold text-gray-900 mt-5 mb-10 text-center">
        Internet of Things (IoT)
        </h2>
      {/* Left - Image */}
      <div className="relative w-full md:w-1/2">
        <img
          src="https://cdn.thingsup.io/wp-content/uploads/2023/10/iStock-1184401187.jpg"
          alt="Cloud Telephony"
          className="rounded-lg shadow-lg w-full"
        />
      </div>

      {/* Right - Text Content */}
      <div className="w-full md:w-full my-10 text-center">
        
        <p className="text-gray-700 mt-4 leading-relaxed">
        We provide innovative AI solutions to help businesses become agile and smart. As a leading AI provider, we offer
         cost-effective services in natural language processing, machine learning, and knowledge virtualization, using top AI 
         technologies to automate sales operations and enhance customer experiences. From large enterprises to small businesses,
          we deliver high-quality AI solutions across industries like banking, finance, e-commerce, healthcare, and 
          telecommunications.
        </p>
        <p className="text-gray-700 mt-4 leading-relaxed">
        Whether it’s selecting and integrating the right sensors, deriving valuable insights from real-time data, or selecting the best platform to support seamless operations, our IoT solutions are tailored to meet the diverse needs of our clients. By delivering comprehensive IoT services, we help businesses streamline operations, optimize resource utilization, and improve decision-making, enabling them to stay ahead in a rapidly advancing digital landscape.
        </p>
        <button
          className="px-6 py-3 mt-5 bg-primaryBlue hover:bg-blue-700 text-white font-semibold rounded transition"
          onClick={() => setShowModal(true)}
        >
          REQUEST A CALLBACK
        </button>
      </div>
    </section >

    <KmBottom bottomSection = {iot[0]}/>
    </>
  )
}

export default IoT