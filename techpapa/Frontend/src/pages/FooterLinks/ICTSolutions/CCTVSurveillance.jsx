import React from 'react'
import { cctvSurveillance } from './constant'
import KmHeroSection from '../../../components/KmComponents/KmHeroSection'
import FooterLinkServices from '../../../components/KmComponents/FooterLinkServices'
import KmBottom from '../../../components/KmComponents/KmBottom'

const CCTVSurveillance = () => {
  return (
    <>
      <KmHeroSection heroSection={cctvSurveillance[0]} />
      <section className="container mx-auto px-6 py-12 flex flex-col md:items-center ">
        {/* Left - Image */}
        <p className="text-gray-900 font-bold text-center uppercase text-sm">Infrastructure Solutions</p>
        <h2 className="text-4xl font-bold text-gray-900 mt-5 mb-10 text-center">
          CCTV Surveillance
        </h2>
        <div className="relative w-full md:w-[40%]">

          <img
            src="https://cdn.stocksnap.io/img-thumbs/960w/cctv-camera_1VZ50RICYR.jpg"
            alt="CCTV Surveillance"
            className="rounded-lg shadow-lg w-full "
          />
          {/* Decorative Dots */}
        </div>

        {/* Right - Text Content */}
        <div className="w-full md:w-[80%] my-10 text-justify flex flex-col justify-center items-center">

          <p className="text-gray-700 mt-4 leading-relaxed">
            A security camera monitoring system is a critical component of a comprehensive security strategy. Techpappa is proud to offer the experience and expertise to design, install, maintain and upgrade a wide range of CCTV solutions to meet your unique business needs. We integrate with your existing systems. Whether you’re looking for basic local video surveillance systems, or complex enterprise-class video surveillance for large campuses, We can deliver the solution that you need. Utilizing a special video processing mode, you can perform operations such as recording, playback, and processing of images to achieve the best video results. The video surveillance system can be used at Internal and external environment of banks, securities business places, enterprises and institutions, agencies, commercial places, building access, parking lot, internal and external environment of high-end community.
          </p>


        </div>
      </section>

      <FooterLinkServices services={cctvSurveillance} titles={cctvSurveillance[0]} />
      <KmBottom bottomSection={cctvSurveillance[0]} />
    </>
  )
}

export default CCTVSurveillance