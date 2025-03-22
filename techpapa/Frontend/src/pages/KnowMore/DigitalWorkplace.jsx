import React from 'react'
import { digitalWorkplace } from '../../assets/constant'
import KmHeroSection from '../../components/KmComponents/KmHeroSection'
import KmServices from '../../components/KmComponents/KmServices'
import KmBottom from '../../components/KmComponents/KmBottom'

const DigitalWorkplace = () => {
  return (
    <>
    <KmHeroSection heroSection={digitalWorkplace[0]}/>
    <section className="container mx-auto px-6 py-12 flex flex-col md:items-center md:space-x-12">
    <p className="text-gray-900 font-bold text-center uppercase text-sm">Digital Workplace</p>
        <h2 className="text-4xl font-bold text-gray-900 mt-5 mb-10 text-center">
        Digital Workspace: Anything, Anytime, Anywhere with Modern Workplace Solutions
        </h2>
      {/* Left - Image */}
      <div className="relative w-full md:w-[40%] ">
        <img
          src="https://images.stockcake.com/public/a/0/e/a0e230ac-c327-46f5-bf9d-24b974a0d5e9/holographic-workspace-design-stockcake.jpg"
          alt="Digital Workplace"
          className="rounded-lg shadow-lg w-full"
        />
      </div>

      {/* Right - Text Content */}
      <div className="w-full md:w-[80%] my-10 text-justify flex flex-col justify-center items-center">
        
        <p className="text-gray-700 mt-4 leading-relaxed">
        Our Managed IT Service is based on modern digital solutions and services that use innovative technology solutions to solve business problems, delivering exceptional value. Specializing in digital transformation and cloud-based technologies, we imagine, build, and empower IT-enabled business solutions. From essential reactive monitoring to overall  IT infrastructure management, Techpappa’s managed services ensure that all our customers delegate their routine maintenance tasks to us whilst investing their capital and resources on other mission-critical tasks requiring domain expertise.
        </p>
        
        <p className="text-gray-700 mt-4 leading-relaxed">
          You can now save yourself from the hassles of installing and setting up physical 
          telephony settings in your business by moving everything to the cloud for a better 
          communication experience for you, your customers, clients, and suppliers alike.
        </p>
      </div>
    </section>
    <KmServices services={digitalWorkplace} titles = {digitalWorkplace[0]}  />
    <KmBottom bottomSection = {digitalWorkplace[0]}/>
    </>
  )
}

export default DigitalWorkplace