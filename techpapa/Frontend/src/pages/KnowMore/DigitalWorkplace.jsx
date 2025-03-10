import React from 'react'
import { digitalWorkplace } from '../../assets/constant'
import KmHeroSection from '../../components/KmComponents/KmHeroSection'
import KmServices from '../../components/KmComponents/KmServices'
import KmBottom from '../../components/KmComponents/KmBottom'

const DigitalWorkplace = () => {
  return (
    <>
    <KmHeroSection heroSection={digitalWorkplace[0]}/>
    <section className="container mx-auto px-6 py-12 md:flex md:items-center md:space-x-12">
      {/* Left - Image */}
      <div className="relative w-full md:w-1/2">
        <img
          src="https://imgs.search.brave.com/fQQzrrb64-w-f2OpEXO0XgwkqhVyIRwxzDt_uV-OLYw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b2ZmaWNlc3BhY2Vz/b2Z0d2FyZS5jb20v/d3AtY29udGVudC91/cGxvYWRzL2RpZ2l0/YWwtd29ya3NwYWNl/LWJlbmVmaXRzLTEw/MjR4NjgzLmpwZw"
          alt="Cloud Telephony"
          className="rounded-lg shadow-lg w-full"
        />
        {/* Decorative Dots */}
        <div className="absolute top-10 -left-6 w-16 h-24 border-l-4 border-dotted border-red-500 hidden md:block"></div>
      </div>

      {/* Right - Text Content */}
      <div className="w-full md:w-1/2">
        <p className="text-red-600 font-bold">// Managed IT Service</p>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">
        A catalyst in business transformation
        </h2>
        <p className="text-gray-700 mt-4 leading-relaxed">
        Our Managed IT Service is based on modern digital solutions and services that use innovative technology solutions to solve business problems, delivering exceptional value. Specializing in digital transformation and cloud-based technologies, we imagine, build, and empower IT-enabled business solutions. From essential reactive monitoring to overall  IT infrastructure management, Emtech’s managed services ensure that all our customers delegate their routine maintenance tasks to us whilst investing their capital and resources on other mission-critical tasks requiring domain expertise.
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