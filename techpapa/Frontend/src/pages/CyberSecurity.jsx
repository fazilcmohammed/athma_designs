import React from 'react'
import KmHeroSection from '../components/KmComponents/KmHeroSection'
import { cyberSecurity } from '../assets/constant'
import KmServices from '../components/KmComponents/KmServices'
import KmBottom from '../components/KmComponents/KmBottom'

const CyberSecurity = () => {
  return (
    <>
      <KmHeroSection heroSection={cyberSecurity[0]}/>

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
        <p className="text-red-600 font-bold uppercase">// CYBER SECURITY – THE BIGGEST NEED OF THE HOUR</p>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">
        Protecting Your Business And Customers
        </h2>
        <p className="text-gray-700 mt-4 leading-relaxed">
        Cybersecurity is a serious issue that can affect any business, regardless of its size or sector. Cybercriminals are constantly on the lookout for new ways to compromise your data and steal your information.
        </p>
        
        <p className="text-gray-700 mt-4 leading-relaxed">
        You need a security partner who can provide you with the right level of protection and offer expert advice on the best methodologies to protect your business.
        </p>

        <p className="text-gray-700 mt-4 leading-relaxed">
        TECHPAPPA Cyber Security Solutions Provider in UAE offers an extensive suite of cyber security services in UAE that are catered to your individual business needs. Our team of cybersecurity professionals provides support and advice on your security posture, as well as the best approach for your industry, and then implements a solution that we manage so that we can monitor your entire cybersecurity initiative. With our wide range of cyber security solutions, we provide you with reliable protection and help you prevent data breaches.
        </p>
        <button
          className="px-6 py-3 mt-5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded transition"
          onClick={() => setShowModal(true)}
        >
          REQUEST A CALLBACK
        </button>
      </div>
    </section>

    <KmServices services={cyberSecurity} titles = {cyberSecurity[0]}/>

    <KmBottom bottomSection = {cyberSecurity[0]}/>
    </>
  )
}

export default CyberSecurity