import React from 'react'
import KmHeroSection from '../../components/KmComponents/KmHeroSection'
import KmServices from '../../components/KmComponents/KmServices'
import { amcSupport } from '../../assets/constant'
import KmBottom from '../../components/KmComponents/KmBottom'

const AmcSupport = () => {
  return (
    <>
    <KmHeroSection heroSection={amcSupport[0]}/>

    <section className="container mx-auto px-6 py-12 md:flex md:items-center md:space-x-12">
      {/* Left - Image */}
      <div className="relative w-full md:w-1/2">
        <img
          src="https://www.imatriz.com/wp-content/uploads/2018/03/m_8-AMC-Services-Support-C-1024x682.jpg"
          alt="Cloud Telephony"
          className="rounded-lg shadow-lg w-full"
        />
        {/* Decorative Dots */}
        <div className="absolute top-10 -left-6 w-16 h-24 border-l-4 border-dotted border-red-500 hidden md:block"></div>
      </div>

      {/* Right - Text Content */}
      <div className="w-full md:w-1/2">
        <p className="text-red-600 font-bold">// Professional Service</p>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">
        Premium AMC Support
        </h2>
        <p className="text-gray-700 mt-4 leading-relaxed">
        For businesses utilizing IT and cloud infrastructure, having a proactive and reliable IT AMC (Annual Maintenance Contract) provider is crucial. While there are many IT AMC providers in the UAE, we distinguish ourselves with our tailored service offerings that cater specifically to client needs. Our team comprises highly experienced and certified engineers and technicians skilled in various technical domains, allowing us to address diverse requirements through our annual maintenance contracts. Our IT AMC services are designed with client satisfaction in mind, offering comprehensive coverage for a wide array of IT assets, including servers, networking, backup solutions, Wi-Fi, firewalls, IPT, virtualization, and cloud infrastructure. We focus on ensuring optimal performance, security, and reliability across all supported equipment, making us a leading choice for IT AMC services in the UAE. As a trusted IT AMC provider, we partner with industry leaders like Microsoft, HPE, SonicWall, Veeam, Sophos, Huawei, Dell etc. These partnerships enable us to deliver cutting-edge technology and support that align with global standards. To discover the benefits of regular IT maintenance, visit our blog post on Why Regular IT Maintenance Matters for Business Success, or reach out to our IT AMC specialists today.
        </p>
        <button
          className="px-6 py-3 mt-5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded transition"
          onClick={() => setShowModal(true)}
        >
          REQUEST A CALLBACK
        </button>
      </div>
    </section>

    <KmServices services={amcSupport} titles = {amcSupport[0]}/>
    <KmBottom bottomSection = {amcSupport[0]}/>
    </>
  )
}

export default AmcSupport