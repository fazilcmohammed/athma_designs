import React from 'react'
import { nextGenFirewall } from './constant'
import KmHeroSection from '../../../components/KmComponents/KmHeroSection'
import FooterLinkServices from '../../../components/KmComponents/FooterLinkServices'
import KmBottom from '../../../components/KmComponents/KmBottom'

const NextGenFirewall = () => {
  return (
    <>
      <KmHeroSection heroSection={nextGenFirewall[0]} />
      <section className="container mx-auto px-6 py-12 flex flex-col md:items-center ">
        {/* Left - Image */}
        <p className="text-gray-900 font-bold text-center uppercase">Infrastructure Solutions</p>
        <h2 className="text-5xl font-bold text-gray-900 mt-5 mb-10 text-center">
        Next Generation Firewall
        </h2>
        <div className="relative w-full md:w-[50%]">

          <img
            src="https://images.unsplash.com/photo-1606606767399-01e271823a2e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Cloud Telephony"
            className="rounded-lg shadow-lg w-full h-[350px]"
          />
          {/* Decorative Dots */}
        </div>

        {/* Right - Text Content */}
        <div className="w-full md:w-full my-10 text-center">

          <p className="text-gray-700 mt-4 leading-relaxed">
          Next generation firewall can be on- premises or cloud based. The differentiating features of next generation firewalls create unique benefits for the companies using them. NGFWs can block malware from entering a network, something that traditional firewalls would never be able to achieve. They are better equipped to address Advanced Persistent Threats (APTs). Our Next generation firewall solutions can be a low-cost option for companies looking to improve their basic security because they can incorporate the work of antiviruses, firewalls, and other security applications into one solution. The features of this include application awareness, inspection services, as well as a protection system and awareness tool that benefit the offering at all odds. A next generation firewall adds additional features such as application control, integrated intrusion prevention (IPS) and often more advanced threat prevention capabilities like sandboxing Our Next generation firewall solutions are optimized for your business deployment.
          </p>


        </div>
      </section>

      <FooterLinkServices services={nextGenFirewall} titles={nextGenFirewall[0]} />

      <KmBottom bottomSection={nextGenFirewall[0]} />
    </>
  )
}

export default NextGenFirewall