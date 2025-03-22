import React, { useState } from 'react'
import KmHeroSection from '../../components/KmComponents/KmHeroSection'
import { cloudOperations } from '../../assets/constant'
import KmServices from '../../components/KmComponents/KmServices'
import KmBottom from '../../components/KmComponents/KmBottom'
import CallbackModal from '../../components/CallBackModal'

const CloudOperation = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <KmHeroSection heroSection={cloudOperations[0]} />

      <section className="container mx-auto px-6 py-12 flex flex-col md:items-center ">
      <p className="text-gray-900 font-bold text-center uppercase text-sm">Professional Service</p>
        <h2 className="text-4xl font-bold text-gray-900 mt-5 mb-10 text-center">
        Cloud Operations Center
        </h2>
      {/* Left - Image */}
      <div className="relative w-full md:w-[40%]">
        <img
          src="https://www.firstfocus.com.au/wp-content/uploads/2023/12/shutterstock_2235412393.jpg"
          alt="Cloud Operations Center"
          className="rounded-lg shadow-lg w-full"
        />
        
      </div>

      {/* Right - Text Content */}
      <div className="w-full md:w-[80%] my-10 text-justify flex flex-col justify-center items-center">
        
        <p className="text-gray-700 mt-4 leading-relaxed">
        Techpappa’s Cloud Operation Center (COC) offers a dedicated, streamlined solution for businesses seeking to enhance their cloud infrastructure with expert oversight, security, and efficiency. Designed for organizations leveraging cloud platforms like Microsoft Azure and Amazon Web Services, Techpappa’s COC provides 24/7 monitoring, incident response, and proactive management to ensure optimal cloud performance and reliability. At the Cloud Operation Center, our certified experts oversee critical functions, including real-time system health checks, resource optimization, automated scaling, and compliance management. This proactive approach reduces downtime, enhances security, and minimizes operational risks, allowing businesses to focus on core objectives without disruptions. Techpappa’s Cloud Operation Center integrates seamlessly into existing cloud environments, offering customized solutions tailored to each client’s unique needs. Our commitment to excellence and partnership with industry-leading providers ensures clients have access to best-in-class tools and expertise. With Techpappa’s COC, businesses can enjoy enhanced cloud efficiency, improved security, and peace of mind knowing their cloud infrastructure is in capable hands.

        </p>
        <button
          className="px-6 py-3 mt-5 bg-primaryBlue hover:bg-blue-700 text-white font-semibold rounded transition"
          onClick={() => setShowModal(true)}
        >
          REQUEST A CALLBACK
        </button>
        <CallbackModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </div>
    </section >

    <KmServices services={cloudOperations} titles = {cloudOperations[0]}/> 
    <KmBottom bottomSection = {cloudOperations[0]}/>
    </>
  )
}

export default CloudOperation