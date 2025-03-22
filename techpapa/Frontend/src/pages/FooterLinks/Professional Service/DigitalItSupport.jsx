import React from 'react'
import { digitalItSupport } from './constant'
import KmHeroSection from '../../../components/KmComponents/KmHeroSection'
import KmBottom from '../../../components/KmComponents/KmBottom'
import FooterLinkServices from '../../../components/KmComponents/FooterLinkServices'

const DigitalItSupport = () => {
  return (
    <>
      <KmHeroSection heroSection={digitalItSupport[0]} />
      <section className="container mx-auto px-6 py-12 flex flex-col md:items-center ">
        {/* Left - Image */}
        <p className="text-gray-900 font-bold text-center uppercase text-sm">Professional Service</p>
        <h2 className="text-4xl font-bold text-gray-900 mt-5 mb-10 text-center">
          Digital IT Support
        </h2>
        <div className="relative w-full md:w-[40%]">

          <img
            src="https://www.gwtltd.com/wp-content/uploads/2024/01/work-from-home.jpg"
            alt="Digital IT Support"
            className="rounded-lg shadow-lg w-full"
          />
          {/* Decorative Dots */}
        </div>

        {/* Right - Text Content */}
        <div className="w-full md:w-[80%] my-10 text-justify flex flex-col justify-center items-center">

          <p className="text-gray-700 mt-4 leading-relaxed">
            We offer quick online technical support with expert skill for our customers to identify and fix technical issues instantly. As businesses depends more and more on technology to carry out their operations and support their end-customers, by leveraging all kinds of technological platforms. It is high time that you must establish a strong, reliable, and scalable IT support wing that not only helps you get things right, also help you adapt right technology roadmap to reach your business destinations.
          </p>
          <br />
          <p className="text-gray-700 mt-4 leading-relaxed">This is exactly what Techpappa’s IT Support can offer through its proactive support services just as you would love. While many businesses have certain IT support wings for their business, most of them find difficult to handle the stress and challenges that come with a ransomware attack or anything of that sort. That is exactly why you need a team of experts that you can rely on to restore your back in action quickly. With our team working round the clock monitoring your IT infrastructure and watching over it for any suspicious activities, you get access to the knowledge and expertise of savvy, insightful and experienced team round the clock. Not only can Techpappa’s IT support can work to create an environment where your infrastructure is protected and secured from threats, it can also empower your own in-house team to face any of the challenges that might come your way.
          </p>


        </div>
      </section>

      <FooterLinkServices services={digitalItSupport} titles={digitalItSupport[0]} />
      <KmBottom bottomSection={digitalItSupport[0]} />
    </>
  )
}

export default DigitalItSupport