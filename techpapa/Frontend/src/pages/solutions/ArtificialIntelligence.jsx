import React from 'react'
import KmHeroSection from '../../components/KmComponents/KmHeroSection'
import { artificialIntelligence } from '../../assets/constant'
import KmBottom from '../../components/KmComponents/KmBottom'

const ArtificialIntelligence = () => {
  return (
    <>
      <KmHeroSection heroSection={artificialIntelligence[0]} />

      <section className="container mx-auto px-6 py-12 md:flex md:items-center md:space-x-12">
      {/* Left - Image */}
      <div className="relative w-full md:w-1/2">
        <img
          src="https://itchronicles.com/wp-content/uploads/2020/11/where-is-ai-used-1024x683.jpg"
          alt="Cloud Telephony"
          className="rounded-lg shadow-lg w-full"
        />
        {/* Decorative Dots */}
        <div className="absolute top-10 -left-6 w-16 h-24 border-l-4 border-dotted border-blue-500 hidden md:block"></div>
      </div>

      {/* Right - Text Content */}
      <div className="w-full md:w-1/2">
        {/* <p className="text-red-600 font-bold">// Cloud Solutions</p> */}
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
        Artificial Intelligence Platform
        </h2>
        <p className="text-gray-700 mt-4 leading-relaxed">
        We provide innovative AI solutions to help businesses become agile and smart. As a leading AI provider, we offer
         cost-effective services in natural language processing, machine learning, and knowledge virtualization, using top AI 
         technologies to automate sales operations and enhance customer experiences. From large enterprises to small businesses,
          we deliver high-quality AI solutions across industries like banking, finance, e-commerce, healthcare, and 
          telecommunications.
        </p>
        <p className="text-gray-700 mt-4 leading-relaxed">
        Our experienced team leverages machine learning tools and algorithms to develop AI-driven products tailored to each client’s business environment. Based in Dubai, we enable organizations to streamline daily tasks and reduce infrastructure costs using advanced AI technologies. With years of expertise, we understand clients’ needs and provide industry-leading AI applications for sectors including healthcare, telecommunications, manufacturing, customer service, education, financial services, and more.


        </p>
        <button
          className="px-6 py-3 mt-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition"
          onClick={() => setShowModal(true)}
        >
          REQUEST A CALLBACK
        </button>
      </div>
    </section >

    <KmBottom bottomSection = {artificialIntelligence[0]}/>
    </>
  )
}

export default ArtificialIntelligence