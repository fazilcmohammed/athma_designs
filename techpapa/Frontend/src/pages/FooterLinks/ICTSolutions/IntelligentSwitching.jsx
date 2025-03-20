import React from 'react'
import { intelligentSwitching } from './constant'
import FooterLinkServices from '../../../components/KmComponents/FooterLinkServices'
import KmBottom from '../../../components/KmComponents/KmBottom'
import KmHeroSection from '../../../components/KmComponents/KmHeroSection'

const IntelligentSwitching = () => {
    return (
        <>
            <KmHeroSection heroSection={intelligentSwitching[0]} />
            <section className="container mx-auto px-6 py-12 flex flex-col md:items-center ">
                {/* Left - Image */}
                <p className="text-gray-900 font-bold text-center uppercase">Infrastructure Solutions</p>
                <h2 className="text-5xl font-bold text-gray-900 mt-5 mb-10 text-center">
                Intelligent Switching
                </h2>
                <div className="relative w-full md:w-[50%]">

                    <img
                        src="https://i-techsupport.com/wp-content/uploads/2024/11/ms-environment-image-desktop-rack-01-1-scaled.jpg"
                        alt="Cloud Telephony"
                        className="rounded-lg shadow-lg w-full h-[350px]"
                    />
                    {/* Decorative Dots */}
                </div>

                {/* Right - Text Content */}
                <div className="w-full md:w-full my-10 text-center">

                    <p className="text-gray-700 mt-4 leading-relaxed">
                    Simple, flexible software suites help you achieve the latest software-defined WAN innovations and provide centralised management with security, application-aware policies, segmentation, and optimization for cloud connectivity, quality of service (QoS), remote mirroring, data sharing, protocol conversion, and advanced security. Intelligent Switch also known as smart switch are managed switches with a limited set of management features. Smart switches allow you to segment the network into workgroups by creating VLANs. They also offer some levels of security, such as 802.1x endpoint authentication, and in some cases with limited numbers of ACLs (access control lists). In addition, smart switches support basic quality-of-service (QoS) that facilitates prioritization of users and applications based on 802.1q/TOS/DSCP, adding to the versatility of the solution. Intelligent switches can make it possible to manage storage in heterogeneous environments, reduce costs, and provide expandability and scalability for existing and growing businesses.
                    </p>


                </div>
            </section>

            <FooterLinkServices services={intelligentSwitching} titles={intelligentSwitching[0]} />

            <KmBottom bottomSection={intelligentSwitching[0]} />
        </>
    )
}

export default IntelligentSwitching