import React from 'react'
import { wifiAsAService } from './constant'
import KmHeroSection from '../../../components/KmComponents/KmHeroSection'
import FooterLinkServices from '../../../components/KmComponents/FooterLinkServices'
import KmBottom from '../../../components/KmComponents/KmBottom'

const WifiAsService = () => {
  return (
    <>
          <KmHeroSection heroSection={wifiAsAService[0]} />
          <section className="container mx-auto px-6 py-12 flex flex-col md:items-center ">
            {/* Left - Image */}
            <p className="text-gray-900 font-bold text-center uppercase">Cloud Solutions</p>
            <h2 className="text-5xl font-bold text-gray-900 mt-5 mb-10 text-center">
            Managed Cloud Wi-Fi

            </h2>
            <div className="relative w-full md:w-[50%]">
    
              <img
                src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcHg1NTM1ODctaW1hZ2Uta3d2eG9hc3MuanBn.jpg"
                alt="Azure Active Directory (Azure AD)"
                className="rounded-lg shadow-lg w-full h-[350px]"
              />
              {/* Decorative Dots */}
            </div>
    
            {/* Right - Text Content */}
            <div className="w-full md:w-[90%] my-10 text-center">
    
              <p className="text-gray-700 mt-4 leading-relaxed">
              A managed WLAN solution is more than just managing user access, it can comprise the entire lifecycle of WLAN – from designing, engineering, and installing the wireless systems to managing the entire network. Cloud managed Wi-Fi uses a flexible subscription-based payment model to deliver centralized management for authentication of users and network monitoring. Cloud-managed Wi-Fi simplifies the deployment and management of Wi-Fi networks by eliminating the need for on-premises controllers. Cloud based Wi-Fi services is the way forward; the entire WLAN ecosystem is managed remotely by the service provider ensuring a secure, scalable and stress free Wi-Fi network. There are two prevailing models of cloud-managed wireless: One embeds both the wireless controller and network management software in the cloud, and the other puts only the management functions there. Cloud-based WLAN management is sold as a subscription-based service, which offloads the capital and operational expenses.


            </p>
    
    
            </div>
          </section>
    
          <FooterLinkServices services={wifiAsAService} titles={wifiAsAService[0]} />
          <KmBottom bottomSection={wifiAsAService[0]} />
        </>
  )
}

export default WifiAsService