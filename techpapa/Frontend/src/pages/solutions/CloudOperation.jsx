import React from 'react'
import KmHeroSection from '../../components/KmComponents/KmHeroSection'
import { cloudOperations } from '../../assets/constant'
import KmServices from '../../components/KmComponents/KmServices'
import KmBottom from '../../components/KmComponents/KmBottom'

const CloudOperation = () => {
  return (
    <>
      <KmHeroSection heroSection={cloudOperations[0]} />

      <section className="container mx-auto px-6 py-12 md:flex md:items-center md:space-x-12">
      {/* Left - Image */}
      <div className="relative w-full md:w-1/2">
        <img
          src="https://www.firstfocus.com.au/wp-content/uploads/2023/12/shutterstock_2235412393.jpg"
          alt="Cloud Telephony"
          className="rounded-lg shadow-lg w-full"
        />
        {/* Decorative Dots */}
        <div className="absolute top-10 -left-6 w-16 h-24 border-l-4 border-dotted border-blue-500 hidden md:block"></div>
      </div>

      {/* Right - Text Content */}
      <div className="w-full md:w-1/2">
        <p className="text-blue-600 font-bold">// Professional Service</p>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
        Cloud Operations Center
        </h2>
        <p className="text-gray-700 mt-4 leading-relaxed">
        Techpappa’s Cloud Operation Center (COC) offers a dedicated, streamlined solution for businesses seeking to enhance their cloud infrastructure with expert oversight, security, and efficiency. Designed for organizations leveraging cloud platforms like Microsoft Azure and Amazon Web Services, Emtech’s COC provides 24/7 monitoring, incident response, and proactive management to ensure optimal cloud performance and reliability. At the Cloud Operation Center, our certified experts oversee critical functions, including real-time system health checks, resource optimization, automated scaling, and compliance management. This proactive approach reduces downtime, enhances security, and minimizes operational risks, allowing businesses to focus on core objectives without disruptions. Emtech’s Cloud Operation Center integrates seamlessly into existing cloud environments, offering customized solutions tailored to each client’s unique needs. Our commitment to excellence and partnership with industry-leading providers ensures clients have access to best-in-class tools and expertise. With Emtech’s COC, businesses can enjoy enhanced cloud efficiency, improved security, and peace of mind knowing their cloud infrastructure is in capable hands.

        </p>
        <button
          className="px-6 py-3 mt-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition"
          onClick={() => setShowModal(true)}
        >
          REQUEST A CALLBACK
        </button>
      </div>
    </section >

    <KmServices services={cloudOperations} titles = {cloudOperations[0]}/> 
    <KmBottom bottomSection = {cloudOperations[0]}/>
    </>
  )
}

export default CloudOperation