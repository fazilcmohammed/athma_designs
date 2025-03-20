import React from 'react'
import KmHeroSection from '../components/KmComponents/KmHeroSection'
import { managedService } from '../assets/constant'
import KmServices from '../components/KmComponents/KmServices'
import KmBottom from '../components/KmComponents/KmBottom'

const ManagedService = () => {
  return (
    <>
      <KmHeroSection heroSection={managedService[0]}/>
      
            <section className="container mx-auto px-6 py-12 flex flex-col md:items-center md:space-x-12">
            {/* Left - Image */}
            <p className="text-gray-900 font-bold text-center">MANAGED IT SERVICE</p>
              <h2 className="text-5xl font-bold text-gray-900 mt-5 mb-10 text-center">
              A Catalyst in Business Transformation
              </h2>
            <div className="relative w-full md:w-[50%]">
            
              <img
                src="https://c.pxhere.com/photos/bc/1f/udgagora-201396.jpg!d"
                alt="Cloud Telephony"
                className="rounded-lg shadow-lg w-full h-[350px]"
              />
              {/* Decorative Dots */}
            </div>
      
            {/* Right - Text Content */}
            <div className="w-full md:w-full my-10 text-center">
              
              <p className="text-gray-700 mt-4 leading-relaxed">
              Our Managed IT Service is based on modern digital solutions and services that use innovative technology solutions to solve business problems, delivering exceptional value. Specializing in digital transformation and cloud-based technologies, we imagine, build, and empower IT-enabled business solutions. From essential reactive monitoring to overall IT infrastructure management, Techpappa’s managed services ensure that all our customers delegate their routine maintenance tasks to us whilst investing their capital and resources on other mission-critical tasks requiring domain expertise.
              </p>
              
              <h1 className='text-xl font-semibold mt-6'>Quality IT Support in UAE</h1>

              <p className="text-gray-700 mt-4 leading-relaxed">
              As one of the most successful nationwide IT Managed Services providers we can help guide your IT needs. With Gold partnerships with Microsoft, VEEAM, SonicWall, Sophos, and more we are poised to be your IT managed service partner.
              </p>
              <button
                className="px-6 py-3 mt-5 bg-primaryBlue hover:bg-blue-700 text-white font-semibold rounded transition"
                onClick={() => setShowModal(true)}
              >
                REQUEST A CALLBACK
              </button>
            </div>
          </section>
      
          <KmServices services={managedService} titles = {managedService[0]}/>
      
          <KmBottom bottomSection = {managedService[0]}/>
    </>
  )
}

export default ManagedService