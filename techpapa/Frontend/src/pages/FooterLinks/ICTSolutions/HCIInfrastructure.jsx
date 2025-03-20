import React from 'react'
import { hciInfrastructure } from './constant'
import KmHeroSection from '../../../components/KmComponents/KmHeroSection'
import FooterLinkServices from '../../../components/KmComponents/FooterLinkServices'
import KmBottom from '../../../components/KmComponents/KmBottom'

const HCIInfrastructure = () => {
    return (
        <>
            <KmHeroSection heroSection={hciInfrastructure[0]} />
            <section className="container mx-auto px-6 py-12 flex flex-col md:items-center ">
                {/* Left - Image */}
                <p className="text-gray-900 font-bold text-center uppercase">Infrastructure Solutions</p>
                <h2 className="text-5xl font-bold text-gray-900 mt-5 mb-10 text-center">
                HCI Infrastructure
                </h2>
                <div className="relative w-full md:w-[50%]">

                    <img
                        src="https://www.itservtechnology.com/wp-content/uploads/2024/06/Computer-Science-Courses.jpg"
                        alt="Cloud Telephony"
                        className="rounded-lg shadow-lg w-full h-[350px]"
                    />
                    {/* Decorative Dots */}
                </div>

                {/* Right - Text Content */}
                <div className="w-full md:w-full my-10 text-center">

                    <p className="text-gray-700 mt-4 leading-relaxed">
                    Hyper converged infrastructure also known as HCI is a next generation technology that combines compute, storage, networking, and management resources into a predefined all in one solution. This integrated solution uses software and x86 servers to replace expensive, purpose-built hardware. With hyperconverged infrastructure, you will decrease data center complexity and increase scalability. HCI infrastructures are usually made up of server systems equipped with Direct-Attached Storage (DAS). HCI includes the ability to plug and play into a data-center pool of like systems. All physical data-center resources reside on a single administrative platform for both hardware and software layers. Traditional three-tier architecture is expensive to build, complex to operate and difficult to scale. Do not wait on the IT infrastructure that can support your modern application demands. Adopt HCI without losing control, increasing costs, or compromising security.
                    </p>


                </div>
            </section>

            <FooterLinkServices services={hciInfrastructure} titles={hciInfrastructure[0]} />

            <KmBottom bottomSection={hciInfrastructure[0]} />
        </>
    )
}

export default HCIInfrastructure