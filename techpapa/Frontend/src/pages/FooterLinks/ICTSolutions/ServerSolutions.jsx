import React from 'react'
import { serverSolutions } from './constant'
import KmHeroSection from '../../../components/KmComponents/KmHeroSection'
import FooterLinkServices from '../../../components/KmComponents/FooterLinkServices'
import KmBottom from '../../../components/KmComponents/KmBottom'

const ServerSolutions = () => {
  return (
    <>
          <KmHeroSection heroSection={serverSolutions[0]} />
          <section className="container mx-auto px-6 py-12 flex flex-col md:items-center ">
            {/* Left - Image */}
            <p className="text-gray-900 font-bold text-center uppercase">Infrastructure Solutions</p>
            <h2 className="text-5xl font-bold text-gray-900 mt-5 mb-10 text-center">
            Server
            </h2>
            <div className="relative w-full md:w-[50%]">
    
              <img
                src="https://images.unsplash.com/photo-1584169417032-d34e8d805e8b?q=80&w=1609&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Cloud Telephony"
                className="rounded-lg shadow-lg w-full h-[350px]"
              />
              {/* Decorative Dots */}
            </div>
    
            {/* Right - Text Content */}
            <div className="w-full md:w-full my-10 text-center">
    
              <p className="text-gray-700 mt-4 leading-relaxed">
              A server is a computer or system that provides resources, data, services, or programs to other computers, known as clients, over a network. Servers can provide various functionalities, often called “services”, such as sharing data or resources among multiple clients, or performing computation for a client. A Server protects business information by delivering a more reliable and security-enhanced infrastructure. It includes built-in firewall protection and security-enhanced remote access to help prevent unauthorized users from getting into your network. While many companies rely on cloud-based servers run by third-parties, on-site servers that you maintain yourself offer performance, flexibility and above all security that is unrivalled. Emtech offer a large range of pre-configured and customizable server solutions to meet the needs of industry. When you buy from Emtech, you are buying the best enterprise server solutions in the industry.
              </p>
    
    
            </div>
          </section>
    
          <FooterLinkServices services={serverSolutions} titles={serverSolutions[0]} />
          <KmBottom bottomSection={serverSolutions[0]} />
        </>
  )
}

export default ServerSolutions