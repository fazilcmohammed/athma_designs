import React from 'react'
import { cloudNetworking } from '../../assets/constant'
import KmHeroSection from '../../components/KmComponents/KmHeroSection'
import KmServices from '../../components/KmComponents/KmServices'
import KmBottom from '../../components/KmComponents/KmBottom'

const CloudeNetworking = () => {
  return (
    <>
          <KmHeroSection heroSection={cloudNetworking[0]}/>

          <section className="container mx-auto px-6 py-12 md:flex md:items-center md:space-x-12">
      {/* Left - Image */}
      <div className="relative w-full md:w-1/2">
        <img
          src="https://www.ituonline.com/wp-content/uploads/2023/10/What-is-Cloud-Network-Technology.jpg"
          alt="Cloud Telephony"
          className="rounded-lg shadow-lg w-full"
        />
        {/* Decorative Dots */}
        <div className="absolute top-10 -left-6 w-16 h-24 border-l-4 border-dotted border-blue-500 hidden md:block"></div>
      </div>

      {/* Right - Text Content */}
      <div className="w-full md:w-1/2">
        <p className="text-blue-600 font-bold">// Cloud Solutions</p>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
        Cloud Managed Networking
        </h2>
        <p className="text-gray-700 mt-4 leading-relaxed">
        Choosing Emtech as your cloud-managed networking services provider offers a range of benefits for businesses looking to streamline their IT operations. With cloud-managed networking, you can remotely manage and control your network from the cloud, eliminating the need for on-site controllers or complex software. This approach simplifies tasks such as configuring and monitoring switches, wireless access points, and more, all through a user-friendly SaaS model. Emtech’s solution allows you to instantly configure thousands of switch ports, deploy network-wide changes, and manage remote sites with ease—all without needing physical connections or on-site visits. Additionally, our cloud-based services enable efficient control over PoE, voice VLANs, and access devices, ensuring seamless and scalable network management. Whether you’re overseeing a campus network or managing distributed sites, Emtech empowers you to do it all remotely and efficiently, with no prior training required.
        </p>
        <button
          className="px-6 py-3 mt-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition"
          onClick={() => setShowModal(true)}
        >
          REQUEST A CALLBACK
        </button>
      </div>
    </section>

    <KmServices services={cloudNetworking} titles = {cloudNetworking[0]}/>
    <KmBottom bottomSection = {cloudNetworking[0]}/>
    </>
  )
}

export default CloudeNetworking