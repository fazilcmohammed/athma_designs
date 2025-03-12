import React from 'react'
import KmHeroSection from '../../components/KmComponents/KmHeroSection'
import { itStructure } from '../../assets/constant'
import KmServices from '../../components/KmComponents/KmServices'
import KmBottom from '../../components/KmComponents/KmBottom'

const ItInfrastructure = () => {
  return (
    <>
      <KmHeroSection heroSection={itStructure[0]} />

      <section className="container mx-auto px-6 py-12 md:flex md:items-center md:space-x-12">
      {/* Left - Image */}
      <div className="relative w-full md:w-1/2">
        <img
          src="https://pratishri.com/wp-content/uploads/2022/11/blog40.jpg"
          alt="Cloud Telephony"
          className="rounded-lg shadow-lg w-full"
        />
        {/* Decorative Dots */}
        <div className="absolute top-10 -left-6 w-16 h-24 border-l-4 border-dotted border-blue-500 hidden md:block"></div>
      </div>

      {/* Right - Text Content */}
      <div className="w-full md:w-1/2">
        <p className="text-blue-600 font-bold">// Infrastructure Solutions</p>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
        What is IT Infrastructure?

        </h2>
        <p className="text-gray-700 mt-4 leading-relaxed">
        IT Infrastructure is the backbone of any organization, doing it with careful consideration will save you a lot of efforts while also improving your workforce efficiency and meeting business goals. A robust IT infrastructure is vital to enhance the overall efficiency of your organization while also ensuring cost savings and security of your critical business data. A well-planned IT infrastructure solution can significantly reduce costs and boost revenues. IT infrastructure grows even more rapidly from few servers initially to large data centers housing modern technology.
        </p>
        <button
          className="px-6 py-3 mt-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition"
          onClick={() => setShowModal(true)}
        >
          REQUEST A CALLBACK
        </button>
      </div>
    </section >

    {/* <KmServices services={itStructure} titles = {itStructure[0]}/> */}
    <KmBottom bottomSection = {itStructure[0]}/>
    </>
  )
}

export default ItInfrastructure