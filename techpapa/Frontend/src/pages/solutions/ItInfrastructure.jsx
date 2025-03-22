import React, { useState } from 'react'
import KmHeroSection from '../../components/KmComponents/KmHeroSection'
import { itStructure } from '../../assets/constant'
import KmServices from '../../components/KmComponents/KmServices'
import KmBottom from '../../components/KmComponents/KmBottom'
import CallbackModal from '../../components/CallBackModal'

const ItInfrastructure = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <KmHeroSection heroSection={itStructure[0]} />

      <section className="container mx-auto px-6 py-12 flex flex-col md:items-center ">
      <p className="text-gray-900 font-bold text-center uppercase text-sm">Infrastructure Solutions</p>
        <h2 className="text-4xl font-bold text-gray-900 mt-5 mb-10 text-center">
        What is IT Infrastructure?
        </h2>
      {/* Left - Image */}
      <div className="relative w-full md:w-[40%]">
        <img
          src="https://pratishri.com/wp-content/uploads/2022/11/blog40.jpg"
          alt="IT Infrastructure"
          className="rounded-lg shadow-lg w-full"
        />
      </div>

      {/* Right - Text Content */}
      <div className="w-full md:w-[80%] my-10 text-justify flex flex-col justify-center items-center">
        
        <p className="text-gray-700 mt-4 leading-relaxed">
        IT Infrastructure is the backbone of any organization, doing it with careful consideration will save you a lot of efforts while also improving your workforce efficiency and meeting business goals. A robust IT infrastructure is vital to enhance the overall efficiency of your organization while also ensuring cost savings and security of your critical business data. A well-planned IT infrastructure solution can significantly reduce costs and boost revenues. IT infrastructure grows even more rapidly from few servers initially to large data centers housing modern technology.
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

    {/* <KmServices services={itStructure} titles = {itStructure[0]}/> */}
    <KmBottom bottomSection = {itStructure[0]}/>
    </>
  )
}

export default ItInfrastructure