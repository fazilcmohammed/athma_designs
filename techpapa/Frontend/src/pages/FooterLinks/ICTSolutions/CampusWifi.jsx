import React from 'react'
import { campusWifi } from './constant'
import KmHeroSection from '../../../components/KmComponents/KmHeroSection'
import KmServices from '../../../components/KmComponents/KmServices'
import KmBottom from '../../../components/KmComponents/KmBottom'
import FooterLinkServices from '../../../components/KmComponents/FooterLinkServices'

const CampusWifi = () => {
  return (
    <>
      <KmHeroSection heroSection={campusWifi[0]} />
      <section className="container mx-auto px-6 py-12 flex flex-col md:items-center ">
        {/* Left - Image */}
        <p className="text-gray-900 font-bold text-center uppercase">Infrastructure Solutions</p>
        <h2 className="text-5xl font-bold text-gray-900 mt-5 mb-10 text-center">
          Campus Wi-Fi
        </h2>
        <div className="relative w-full md:w-[50%]">

          <img
            src="https://media.freemalaysiatoday.com/wp-content/uploads/2020/10/wifi-lifestyle-rawpixel-301020-1.jpg"
            alt="Campus Wi-Fi"
            className="rounded-lg shadow-lg w-full h-[350px]"
          />
          {/* Decorative Dots */}
        </div>

        {/* Right - Text Content */}
        <div className="w-full md:w-full my-10 text-center">

          <p className="text-gray-700 mt-4 leading-relaxed">
            Wi-Fi is a wireless networking technology that allows devices such as computers, mobile devices, and other equipment to interface with the Internet. Internet connectivity occurs through a wireless router. If you run a retail location, cafe, or bistro, you realize how much interest there is with the expectation of complimentary Wi-Fi. From Starbucks to Target, an expanding number of retail foundations currently fill in as hotspots. Numerous individuals utilize these spots as remote workstations, and retailers giving discounts through marked applications can profit by offering clients an option, in contrast to spending valuable cell information while shopping. Utilizing Wi-Fi at school, understudies can effectively share archives, alter introductions continuously, store venture documents in the cloud, and improve their collaboration abilities.Wi-Fi for schools additionally enables educators to tailor exercises and introductions as indicated by their learning styles.
          </p>


        </div>
      </section>

      <FooterLinkServices services={campusWifi} titles={campusWifi[0]} />
      <KmBottom bottomSection={campusWifi[0]} />
    </>
  )
}

export default CampusWifi