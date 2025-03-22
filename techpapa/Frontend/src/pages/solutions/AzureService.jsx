import React, { useState } from 'react'
import KmHeroSection from '../../components/KmComponents/KmHeroSection'
import { azureManage } from '../../assets/constant'
import KmServices from '../../components/KmComponents/KmServices'
import KmBottom from '../../components/KmComponents/KmBottom'
import CallbackModal from '../../components/CallBackModal'

const AzureService = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <KmHeroSection heroSection={azureManage[0]} />

      <section className="container mx-auto px-6 py-12 flex flex-col md:items-center ">
      <p className="text-gray-900 font-bold text-center uppercase text-sm">Professional Service</p>
        <h2 className="text-4xl font-bold text-gray-900 mt-5 mb-10 text-center">
        Azure Managed Service
        </h2>
      {/* Left - Image */}
      <div className="relative w-full md:w-[40%]">
        <img
          src="https://cswsolutions.com/media/1673/ms-azure-logo.png?anchor=center&mode=crop&width=1200&height=630&rnd=132636612750000000"
          alt="Azure Managed Service"
          className="rounded-lg shadow-lg w-full"
        />
        
      </div>

      {/* Right - Text Content */}
      <div className="w-full md:w-[80%] my-10 text-justify flex flex-col justify-center items-center">
        
        <p className="text-gray-700 mt-4 leading-relaxed">
        It’s an incredibly competitive environment for enterprises, and they need every opportunity they can find to beat the competition. With the cloud, you can benefit from an optimized, scalable infrastructure that lets your business grow without limitations. Our experts have already helped hundreds of our clients optimize their applications and infrastructure while leveraging the immense benefits of the cloud. Migrate your infrastructure to Azure local cloud with managed services and stay compliant. Delivered business benefits Our Cloud management solution services for Azure delivers a complete solution, providing you with one partner for all of your Azure needs. Our experts cater to all your Azure-related requirements by leveraging three core features that offer peace of mind and ensure your cloud investment will be optimized, managed and protected.
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

    <KmServices services={azureManage} titles = {azureManage[0]}/> 
    <KmBottom bottomSection = {azureManage[0]}/>
    </>
  )
}

export default AzureService