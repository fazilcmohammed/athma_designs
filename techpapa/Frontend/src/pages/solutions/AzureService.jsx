import React from 'react'
import KmHeroSection from '../../components/KmComponents/KmHeroSection'
import { azureManage } from '../../assets/constant'
import KmServices from '../../components/KmComponents/KmServices'
import KmBottom from '../../components/KmComponents/KmBottom'

const AzureService = () => {
  return (
    <>
      <KmHeroSection heroSection={azureManage[0]} />

      <section className="container mx-auto px-6 py-12 md:flex md:items-center md:space-x-12">
      {/* Left - Image */}
      <div className="relative w-full md:w-1/2">
        <img
          src="https://cswsolutions.com/media/1673/ms-azure-logo.png?anchor=center&mode=crop&width=1200&height=630&rnd=132636612750000000"
          alt="Cloud Telephony"
          className="rounded-lg shadow-lg w-full"
        />
        {/* Decorative Dots */}
        <div className="absolute top-10 -left-6 w-16 h-24 border-l-4 border-dotted border-blue-500 hidden md:block"></div>
      </div>

      {/* Right - Text Content */}
      <div className="w-full md:w-1/2">
        <p className="text-blue-600 font-bold">// Professional Service</p>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
        Azure Managed Service
        </h2>
        <p className="text-gray-700 mt-4 leading-relaxed">
        It’s an incredibly competitive environment for enterprises, and they need every opportunity they can find to beat the competition. With the cloud, you can benefit from an optimized, scalable infrastructure that lets your business grow without limitations. Our experts have already helped hundreds of our clients optimize their applications and infrastructure while leveraging the immense benefits of the cloud. Migrate your infrastructure to Azure local cloud with managed services and stay compliant. Delivered business benefits Our Cloud management solution services for Azure delivers a complete solution, providing you with one partner for all of your Azure needs. Our experts cater to all your Azure-related requirements by leveraging three core features that offer peace of mind and ensure your cloud investment will be optimized, managed and protected.
        </p>
        <button
          className="px-6 py-3 mt-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition"
          onClick={() => setShowModal(true)}
        >
          REQUEST A CALLBACK
        </button>
      </div>
    </section >

    <KmServices services={azureManage} titles = {azureManage[0]}/> 
    <KmBottom bottomSection = {azureManage[0]}/>
    </>
  )
}

export default AzureService