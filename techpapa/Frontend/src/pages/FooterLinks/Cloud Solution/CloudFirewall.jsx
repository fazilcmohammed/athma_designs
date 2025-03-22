import React from 'react'
import { cloudFirewall } from './constant'
import KmHeroSection from '../../../components/KmComponents/KmHeroSection'
import FooterLinkServices from '../../../components/KmComponents/FooterLinkServices'
import KmBottom from '../../../components/KmComponents/KmBottom'

const CloudFirewall = () => {
  return (
    <>
          <KmHeroSection heroSection={cloudFirewall[0]} />
          <section className="container mx-auto px-6 py-12 flex flex-col md:items-center ">
            {/* Left - Image */}
            <p className="text-gray-900 font-bold text-center uppercase text-sm">Cloud Solutions</p>
            <h2 className="text-4xl font-bold text-gray-900 mt-5 mb-10 text-center">
            Cloud Firewall
            </h2>
            <div className="relative w-full md:w-[40%]">
    
              <img
                src="https://c.pxhere.com/images/a6/76/b44cd812bdd5d879dc8204ffd22c-1565521.jpg!d"
                alt="Cloud Firewall"
                className="rounded-lg shadow-lg w-full"
              />
              {/* Decorative Dots */}
            </div>
    
            {/* Right - Text Content */}
            <div className="w-full md:w-[80%] my-10 text-justify flex flex-col justify-center items-center">
    
              <p className="text-gray-700 mt-4 leading-relaxed">
              Cloud firewalls are virtual network security devices deployed in the public cloud. Public cloud firewalls tend to offer capabilities like those of hardware firewalls. However, in hybrid cloud deployments, public cloud firewalls offer significant advantages over on-premises devices in terms of scalability, availability, and extensibility. Often also called “virtual firewalls,” these devices are referred to as “public cloud firewalls” when used in those environments. Cloud firewalls block cyber-attacks directed at these cloud assets. As the name implies, a cloud firewall is a firewall that is hosted in the cloud. Cloud-based firewalls form a virtual barrier around cloud platforms, infrastructure, and applications, just as traditional firewalls form a barrier around an organization’s internal network. Deploying a cloud firewall is like replacing a local security camera and a physical security guard with a global 24/7 security center that has a centralized staff and security camera feeds from all the places.
    </p>
    
    
            </div>
          </section>
    
          <FooterLinkServices services={cloudFirewall} titles={cloudFirewall[0]} />
          <KmBottom bottomSection={cloudFirewall[0]} />
        </>
  )
}

export default CloudFirewall