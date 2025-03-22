import React from 'react'
import { networkOperation } from './constant'
import KmHeroSection from '../../../components/KmComponents/KmHeroSection'
import FooterLinkServices from '../../../components/KmComponents/FooterLinkServices'
import KmBottom from '../../../components/KmComponents/KmBottom'

const NetworkOperation = () => {
  return (
    <>
      <KmHeroSection heroSection={networkOperation[0]} />
      <section className="container mx-auto px-6 py-12 flex flex-col md:items-center ">
        {/* Left - Image */}
        <p className="text-gray-900 font-bold text-center uppercase text-sm">Professional Service</p>
        <h2 className="text-4xl font-bold text-gray-900 mt-5 mb-10 text-center">
        Network Operation Center
        </h2>
        <div className="relative w-full md:w-[40%]">

          <img
            src="https://psseth.com/wp-content/uploads/2024/01/noc.jpg"
            alt="Azure Active Directory (Azure AD)"
            className="rounded-lg shadow-lg w-full "
          />
          {/* Decorative Dots */}
        </div>

        {/* Right - Text Content */}
        <div className="w-full md:w-[80%] my-10 text-justify flex flex-col justify-center items-center">

          <p className="text-gray-700 mt-4 leading-relaxed">
          Techpappa’s Network Operation Centre is 24/7/365 running which keeps services, databases, external services, firewalls, and network up and running and addressing any issues that arise. A NOC is often the first line of defence against any attacks or disruptions a company or enterprise might experience with their telecommunication networks.    
        </p>
        </div>
      </section>

      <FooterLinkServices services={networkOperation} titles={networkOperation[0]} />
      <KmBottom bottomSection={networkOperation[0]} />
    </>
  )
}

export default NetworkOperation