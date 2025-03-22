import React from 'react'
import { telephonyAsAService } from './constant'
import KmHeroSection from '../../../components/KmComponents/KmHeroSection'
import FooterLinkServices from '../../../components/KmComponents/FooterLinkServices'
import KmBottom from '../../../components/KmComponents/KmBottom'

const TelephonyAsServices = () => {
  return (
    <>
      <KmHeroSection heroSection={telephonyAsAService[0]} />
      <section className="container mx-auto px-6 py-12 flex flex-col md:items-center ">
        {/* Left - Image */}
        <p className="text-gray-900 font-bold text-center uppercase text-sm">Cloud Solutions</p>
        <h2 className="text-4xl font-bold text-gray-900 mt-5 mb-10 text-center">
        Hybrid Cloud Telephony Solutions

        </h2>
        <div className="relative w-full md:w-[40%]">

          <img
            src="https://www.esic.edu/sites/default/files/rethink/3e0af5ef-call-center-contact-center.jpg"
            alt="Hybrid Cloud Telephony Solutions"
            className="rounded-lg shadow-lg w-full "
          />
          {/* Decorative Dots */}
        </div>

        {/* Right - Text Content */}
        <div className="w-full md:w-[80%] my-10 text-justify flex flex-col justify-center items-center">

          <p className="text-gray-700 mt-4 leading-relaxed">
          Hybrid Cloud IP Telephony is the communications technology where all communication devices and applications are hosted at the service provider’s premises. Hybrid Cloud telephony streamlines your business communications and grows with your business. Whether you’re opening new offices, hiring remote workers, or expanding your in-house teams, cloud telephony will make the expansion effortless and cost-effective. You can now save yourself from the hassles of installing and setting up physical telephony settings in your business premise by moving all the infrastructure to cloud for better communication experience for not just you but also your customers, clients, and suppliers alike. Without the need to have any fancy hardware, our cloud telephony solutions are crafted to meet even the most demanding traffic requirements of the clients without ever letting you down. With better communication and support systems for your customers, you can now accelerate your business growth even further.
        </p>


        </div>
      </section>

      <FooterLinkServices services={telephonyAsAService} titles={telephonyAsAService[0]} />
      <KmBottom bottomSection={telephonyAsAService[0]} />
    </>
  )
}

export default TelephonyAsServices