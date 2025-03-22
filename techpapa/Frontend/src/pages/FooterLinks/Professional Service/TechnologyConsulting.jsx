import React from 'react'
import { technologyConsulting } from './constant'
import KmHeroSection from '../../../components/KmComponents/KmHeroSection'
import FooterLinkServices from '../../../components/KmComponents/FooterLinkServices'
import KmBottom from '../../../components/KmComponents/KmBottom'

const TechnologyConsulting = () => {
  return (
    <>
      <KmHeroSection heroSection={technologyConsulting[0]} />
      <section className="container mx-auto px-6 py-12 flex flex-col md:items-center ">
        {/* Left - Image */}
        <p className="text-gray-900 font-bold text-center uppercase text-sm">Professional Service</p>
        <h2 className="text-4xl font-bold text-gray-900 mt-5 mb-10 text-center">
        Technology Consulting
        </h2>
        <div className="relative w-full md:w-[40%]">

          <img
            src="https://amuconsultant.com/wp-content/uploads/2024/04/Professional-Account-Management.jpg"
            alt="Technology Consulting"
            className="rounded-lg shadow-lg w-full "
          />
          {/* Decorative Dots */}
        </div>

        {/* Right - Text Content */}
        <div className="w-full md:w-[80%] my-10 text-justify flex flex-col justify-center items-center">

          <p className="text-gray-700 mt-4 leading-relaxed">
          As a market leader in enterprise IT consulting with 2 decades of experience, IT consultant services are an integral part of consulting. The target of seeking IT consulting services is to stay updated and competitive in the marketplace as per the most recent technology trends. twenty first century businesses homeowners are typically seen checking out such services for adding worth to your business. Most of the time, they trust IT consulting companies as a result of their professionals understand the simplest attainable ways that of optimizing existing infrastructures installed by their clients. They advise their clients regarding the ways that they’ll best use their existing IT infrastructure.
          </p>
        </div>
      </section>

      <FooterLinkServices services={technologyConsulting} titles={technologyConsulting[0]} />
      <KmBottom bottomSection={technologyConsulting[0]} />
    </>
  )
}

export default TechnologyConsulting