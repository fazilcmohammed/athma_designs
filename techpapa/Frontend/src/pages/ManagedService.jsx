import React from 'react'
import KmHeroSection from '../components/KmComponents/KmHeroSection'
import { managedService } from '../assets/constant'
import KmServices from '../components/KmComponents/KmServices'
import KmBottom from '../components/KmComponents/KmBottom'

const ManagedService = () => {
  return (
    <>
      <KmHeroSection heroSection={managedService[0]}/>
      
            <section className="container mx-auto px-6 py-12 md:flex md:items-center md:space-x-12">
            {/* Left - Image */}
            <div className="relative w-full md:w-1/2">
              <img
                src="https://cdn.prod.website-files.com/63a71c562e3ccbc6f6a40f0f/67b98625472de816d0951c58_65bcbb02d38aec8f6ce1f1ab_L%2526D_Cyber%2526ITSecurity_Hero.png"
                alt="Cloud Telephony"
                className="rounded-lg shadow-lg w-full"
              />
              {/* Decorative Dots */}
              <div className="absolute top-10 -left-6 w-16 h-24 border-l-4 border-dotted border-red-500 hidden md:block"></div>
            </div>
      
            {/* Right - Text Content */}
            <div className="w-full md:w-1/2">
              <p className="text-red-600 font-bold uppercase">// MANAGED IT SERVICE</p>
              <h2 className="text-3xl font-bold text-gray-900 mt-2">
              A Catalyst in Business Transformation
              </h2>
              <p className="text-gray-700 mt-4 leading-relaxed">
              Our Managed IT Service is based on modern digital solutions and services that use innovative technology solutions to solve business problems, delivering exceptional value. Specializing in digital transformation and cloud-based technologies, we imagine, build, and empower IT-enabled business solutions. From essential reactive monitoring to overall IT infrastructure management, Emtech’s managed services ensure that all our customers delegate their routine maintenance tasks to us whilst investing their capital and resources on other mission-critical tasks requiring domain expertise.
              </p>
              
              <h1 className='text-xl font-semibold mt-6'>Quality IT Support in UAE</h1>

              <p className="text-gray-700 mt-4 leading-relaxed">
              As one of the most successful nationwide IT Managed Services providers we can help guide your IT needs. With Gold partnerships with Microsoft, VEEAM, SonicWall, Sophos, and more we are poised to be your IT managed service partner.
              </p>
              <button
                className="px-6 py-3 mt-5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded transition"
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