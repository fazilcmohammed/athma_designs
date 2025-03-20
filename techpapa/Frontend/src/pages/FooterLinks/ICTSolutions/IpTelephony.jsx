import React from 'react'
import { ipTelephony } from './constant'
import KmHeroSection from '../../../components/KmComponents/KmHeroSection'
import FooterLinkServices from '../../../components/KmComponents/FooterLinkServices'
import KmBottom from '../../../components/KmComponents/KmBottom'

const IpTelephony = () => {
    return (
        <>
            <KmHeroSection heroSection={ipTelephony[0]} />
            <section className="container mx-auto px-6 py-12 flex flex-col md:items-center ">
                {/* Left - Image */}
                <p className="text-gray-900 font-bold text-center uppercase">Infrastructure Solutions</p>
                <h2 className="text-5xl font-bold text-gray-900 mt-5 mb-10 text-center">
                IP Telephony
                </h2>
                <div className="relative w-full md:w-[50%]">

                    <img
                        src="https://i-techsupport.com/wp-content/uploads/2022/10/IT-Support.jpg"
                        alt="Cloud Telephony"
                        className="rounded-lg shadow-lg w-full h-[350px]"
                    />
                    {/* Decorative Dots */}
                </div>

                {/* Right - Text Content */}
                <div className="w-full md:w-full my-10 text-center">

                    <p className="text-gray-700 mt-4 leading-relaxed">
                    IP telephony refers to any phone system that uses an internet connection to send and receive voice data. Unlike a regular telephone that uses landlines to transmit analog signals, IP phones connect to the internet via a router and modem. IP telephone systems use the Internet Protocol (IP) or other digital protocols to transfer voice communications over the internet. IP telephony describes any system that fits within the internet-based telecommunications umbrella, including fax and other systems. VoIP has become the most popular IP telephony solution. VoIP telephony is taking over the business telecommunications market. Many businesses are making the switch to VoIP telephony as it cheaper than landlines. IP telephony also enables your business to access advanced features without having to invest in extra hardware. IP telephony has ushered in the development of unified communications solutions which can provide a complete communications package all in one, to be ran over a single network and on one platform.
                    </p>


                </div>
            </section>

            <FooterLinkServices services={ipTelephony} titles={ipTelephony[0]} />

            <KmBottom bottomSection={ipTelephony[0]} />
        </>
    )
}

export default IpTelephony