import React from 'react'
import { desktopAsAService } from './constant'
import KmHeroSection from '../../../components/KmComponents/KmHeroSection'
import FooterLinkServices from '../../../components/KmComponents/FooterLinkServices'
import KmBottom from '../../../components/KmComponents/KmBottom'

const DesktopAsService = () => {
  return (
    <>
      <KmHeroSection heroSection={desktopAsAService[0]} />
      <section className="container mx-auto px-6 py-12 flex flex-col md:items-center ">
        {/* Left - Image */}
        <p className="text-gray-900 font-bold text-center uppercase">Aging Systems and New Technology</p>
        <h2 className="text-5xl font-bold text-gray-900 mt-5 mb-10 text-center">
        Desktop as a Service
        </h2>
        <div className="relative w-full md:w-[50%]">

          <img
            src="https://live.staticflickr.com/65535/50120101806_7869a6e079_b.jpg"
            alt="Azure Active Directory (Azure AD)"
            className="rounded-lg shadow-lg w-full h-[350px]"
          />
          {/* Decorative Dots */}
        </div>

        {/* Right - Text Content */}
        <div className="w-full md:w-[90%] my-10 text-center">

          <p className="text-gray-700 mt-4 leading-relaxed">
          The boundaries of IT are fading, as technology has become an integral part of business operations and how employees work. Aging legacy systems need to be replaced to meet the changing expectations of customers and a new workforce. IT teams struggle to keep up with the exploding volume and type is of technology available. Big Data and Analytics, IoT, Artificial Intelligence, Virtual Reality, Cloud, Everything as a Service, the list grows daily. Simply put, the role of IT is changing. To keep up with ever-evolving modern workplace, IT now has new concerns as well a new strategic drivers they must incorporate into their job function from cybersecurity breaches to driving employee adoption of new technology.
        </p>


        </div>
      </section>

      <FooterLinkServices services={desktopAsAService} titles={desktopAsAService[0]} />
      <KmBottom bottomSection={desktopAsAService[0]} />
    </>
  )
}

export default DesktopAsService