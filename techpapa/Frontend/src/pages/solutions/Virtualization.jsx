import React from 'react'
import KmHeroSection from '../../components/KmComponents/KmHeroSection'
import { virtualizationSolution } from '../../assets/constant'
import KmServices from '../../components/KmComponents/KmServices'
import KmBottom from '../../components/KmComponents/KmBottom'

const Virtualization = () => {
  return (
    <>
    <KmHeroSection heroSection={virtualizationSolution[0]}/>
    <section className="container mx-auto px-6 py-12 flex flex-col md:items-center md:space-x-12">
      {/* Left - Image */}
      <div className="relative w-full md:w-[50%]">
      <p className="text-gray-900 font-bold text-center uppercase">Infrastructure Solutions</p>
        <h2 className="text-5xl font-bold text-gray-900 mt-5 mb-10 text-center">
        Virtualization Solutions, Design, and Deployment
        </h2>
        <img
          src="https://imgs.search.brave.com/yVpitjjq6AfsqAjXgsLkevIg5Sr74fJSEGFQFq5D58s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM1/NDE5Mjc3Ni9waG90/by9zaG90LW9mLXR3/by10ZWNobmljaWFu/cy13b3JraW5nLXRv/Z2V0aGVyLWluLWEt/c2VydmVyLXJvb20u/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUlsenRJVFpnTE5E/MGlKczRNQ3dnOFI2/N1pzb29Kelo4NUlN/R3VuVV9wS289"
          alt="Cloud Telephony"
          className="rounded-lg shadow-lg w-full h-[350px]"
        />
        {/* Decorative Dots */}
      </div>

      {/* Right - Text Content */}
      <div className="w-full md:w-full my-10 text-center">
        
        <p className="text-gray-700 mt-4 leading-relaxed">
        Many IT organizations deploy servers that are only running at a fraction of their capacity, often because they are dedicating their physical 
        server to a specific application. This is usually an inefficient mechanism because there is an 
        excess capacity that is not being consumed, which leads to higher operating costs. Our Virtualization 
        solutions can benefit your organization in several ways, with a single server, you are able to create several
         virtual machines. Virtualization enables more efficient utilization of computer hardware and enables a greater return on an 
         organization’s hardware investment. Virtualization uses software to create an abstraction layer over the physical 
         hardware. In doing so, it creates a virtual compute system, known as virtual machines (VMs). This allows 
         organizations to run multiple virtual computers, operating systems, and applications on a single physical server. 
         Simply put, it is a more efficient use of the physical computer hardware; this, in turn, provides a greater return
          on a company’s investment.
        </p>
        <button
          className="px-6 py-3 mt-5 bg-primaryBlue hover:bg-blue-700 text-white font-semibold rounded transition"
          onClick={() => setShowModal(true)}
        >
          REQUEST A CALLBACK
        </button>
      </div>
    </section>
    <KmServices services={virtualizationSolution} titles = {virtualizationSolution[0]}/>
    <KmBottom bottomSection = {virtualizationSolution[0]}/>
    </>
  )
}

export default Virtualization