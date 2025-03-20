import React from 'react'
import KmHeroSection from '../../../components/KmComponents/KmHeroSection'
import FooterLinkServices from '../../../components/KmComponents/FooterLinkServices'
import { structuredCabling } from './constant'
import KmBottom from '../../../components/KmComponents/KmBottom'

const StructuredCabling = () => {
  return (
    <>
      <KmHeroSection heroSection={structuredCabling[0]} />
      <section className="container mx-auto px-6 py-12 flex flex-col md:items-center ">
        {/* Left - Image */}
        <p className="text-gray-900 font-bold text-center uppercase">Infrastructure Solutions</p>
        <h2 className="text-5xl font-bold text-gray-900 mt-5 mb-10 text-center">
        Structured Cabling
        </h2>
        <div className="relative w-full md:w-[50%]">

          <img
            src="https://images.pexels.com/photos/4508748/pexels-photo-4508748.jpeg"
            alt="Cloud Telephony"
            className="rounded-lg shadow-lg w-full h-[350px]"
          />
          {/* Decorative Dots */}
        </div>

        {/* Right - Text Content */}
        <div className="w-full md:w-full my-10 text-center">

          <p className="text-gray-700 mt-4 leading-relaxed">
          Structured network cabling involves using a flexible and singular cabling infrastructure to connect multiple computers, phones, and other devices together. Specialized sockets are provided for plugging in your multiple devices. A central communication network cabinet is provided for connecting multiple cables from different workstations. A well-designed and structured cabling system can help in addressing common workflow issues and network downtime problems effectively. The structured cabling system begins at the point where the service provider (SP) terminates. This point is the point of demarcation (demarc) or Network Interface Device (NID). Every structured cabling system is unique. This is due to variations in the architectural structure of the building, which houses the cabling installation; The cable and connection products; The function of the cabling installation; and many more. Structured cabling systems are a kind of network cabling solution that organizes your infrastructure.
          </p>


        </div>
      </section>

      <FooterLinkServices services={structuredCabling} titles={structuredCabling[0]} />
      <KmBottom bottomSection={structuredCabling[0]} />
    </>
  )
}

export default StructuredCabling