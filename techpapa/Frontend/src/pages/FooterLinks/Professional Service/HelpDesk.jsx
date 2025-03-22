import React from 'react'
import { helpDesk } from './constant'
import KmHeroSection from '../../../components/KmComponents/KmHeroSection'
import FooterLinkServices from '../../../components/KmComponents/FooterLinkServices'
import KmBottom from '../../../components/KmComponents/KmBottom'

const HelpDesk = () => {
  return (
    <>
          <KmHeroSection heroSection={helpDesk[0]} />
          <section className="container mx-auto px-6 py-12 flex flex-col md:items-center ">
            {/* Left - Image */}
            <p className="text-gray-900 font-bold text-center uppercase text-sm">Professional Service</p>
            <h2 className="text-4xl font-bold text-gray-900 mt-5 mb-10 text-center">
            IT Help Desk Service
            </h2>
            <div className="relative w-full md:w-[40%]">
    
              <img
                src="https://images.pexels.com/photos/8867434/pexels-photo-8867434.jpeg"
                alt="IT Help Desk Service"
                className="rounded-lg shadow-lg w-full "
              />
              {/* Decorative Dots */}
            </div>
    
            {/* Right - Text Content */}
            <div className="w-full md:w-[80%] my-10 text-justify flex flex-col justify-center items-center">
    
              <p className="text-gray-700 mt-4 leading-relaxed">
              A help desk could be a resource meant to provide the client or internal user with data and computer support associated with a company’s processes, products and services. The aim of a help desk is to provide a centralized resource to answer questions, troubleshoot issues and facilitate solutions to known issues. Common samples of help-desks include: Technical Support centers, Product Support /Warranty functions, worker benefits desks and facilities service centers. A help desk is concentrated on providing “help” and “break-fix” support. Helpdesks don’t have to be IT targeted and can be used to support exceptions to traditional operations that come about everywhere the company. Helpdesk support may be provided through various channels as well as physical locations, toll-free numbers, websites, instant messaging, or email.
                </p>
            </div>
          </section>
    
          <FooterLinkServices services={helpDesk} titles={helpDesk[0]} />
          <KmBottom bottomSection={helpDesk[0]} />
        </>
  )
}

export default HelpDesk