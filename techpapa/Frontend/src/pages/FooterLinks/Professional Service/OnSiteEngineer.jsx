import React from 'react'
import { onSiteEngineer } from './constant'
import KmHeroSection from '../../../components/KmComponents/KmHeroSection'
import FooterLinkServices from '../../../components/KmComponents/FooterLinkServices'
import KmBottom from '../../../components/KmComponents/KmBottom'

const OnSiteEngineer = () => {
  return (
    <>
      <KmHeroSection heroSection={onSiteEngineer[0]} />
      <section className="container mx-auto px-6 py-12 flex flex-col md:items-center ">
        {/* Left - Image */}
        <p className="text-gray-900 font-bold text-center uppercase text-sm">Professional Service</p>
        <h2 className="text-4xl font-bold text-gray-900 mt-5 mb-10 text-center">
        On Site Engineer
        </h2>
        <div className="relative w-full md:w-[40%]">

          <img
            src="https://images.pexels.com/photos/442152/pexels-photo-442152.jpeg"
            alt="On Site Engineer"
            className="rounded-lg shadow-lg w-full "
          />
          {/* Decorative Dots */}
        </div>

        {/* Right - Text Content */}
        <div className="w-full md:w-[80%] my-10 text-justify flex flex-col justify-center items-center">

          <p className="text-gray-700 mt-4 leading-relaxed">
          We are an industry-leader in providing on-site IT support. Our approach to providing successful IT network support services is proactive, ensuring your organization is equipped for the present and prepared for the future. We offer full, high-level advisory and consulting services as part of every engagement. we work directly with you through on-site IT support delivering both on-premises to on cloud. Many businesses let their servers, data, and networks go unmanaged for weeks or months at a time. Don’t expose your central IT infrastructure to risk by ignoring warning signs or failing to perform maintenance and security tasks. Let us take care of your systems to ensure business continuity. Our dedicated technical resource will be available full time at customer site to run the IT operations on a daily basis. On-site resource have access to Techpappa talent pool to get the right skillset involvement on right time.
</p>
        </div>
      </section>

      <FooterLinkServices services={onSiteEngineer} titles={onSiteEngineer[0]} />
      <KmBottom bottomSection={onSiteEngineer[0]} />
    </>
  )
}

export default OnSiteEngineer