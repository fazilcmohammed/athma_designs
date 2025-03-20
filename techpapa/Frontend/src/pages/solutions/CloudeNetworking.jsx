import React from 'react'
import { cloudNetworking } from '../../assets/constant'
import KmHeroSection from '../../components/KmComponents/KmHeroSection'
import KmServices from '../../components/KmComponents/KmServices'
import KmBottom from '../../components/KmComponents/KmBottom'

const CloudeNetworking = () => {
  return (
    <>
          <KmHeroSection heroSection={cloudNetworking[0]}/>

          <section className="container mx-auto px-6 py-12 flex flex-col md:items-center md:space-x-12">
      {/* Left - Image */}
      <div className="relative w-full md:w-[50%]">
      <p className="text-gray-900 font-bold text-center uppercase">Cloud Solutions</p>
        <h2 className="text-5xl font-bold text-gray-900 mt-5 mb-10 text-center">
        Cloud Managed Networking
        </h2>
        <img
          src="https://www.ituonline.com/wp-content/uploads/2023/10/What-is-Cloud-Network-Technology.jpg"
          alt="Cloud Telephony"
          className="rounded-lg shadow-lg w-full h-[350px]"
        />
        {/* Decorative Dots */}
      </div>

      {/* Right - Text Content */}
      <div className="w-full md:w-full my-10 text-center">
        
        <p className="text-gray-700 mt-4 leading-relaxed">
        Choosing Techpappa as your cloud-managed networking services provider offers a range of benefits for businesses looking to streamline their IT operations. With cloud-managed networking, you can remotely manage and control your network from the cloud, eliminating the need for on-site controllers or complex software. This approach simplifies tasks such as configuring and monitoring switches, wireless access points, and more, all through a user-friendly SaaS model. Techpappa’s solution allows you to instantly configure thousands of switch ports, deploy network-wide changes, and manage remote sites with ease—all without needing physical connections or on-site visits. Additionally, our cloud-based services enable efficient control over PoE, voice VLANs, and access devices, ensuring seamless and scalable network management. Whether you’re overseeing a campus network or managing distributed sites, Techpappa empowers you to do it all remotely and efficiently, with no prior training required.
        </p>
        <button
          className="px-6 py-3 mt-5 bg-primaryBlue hover:bg-blue-700 text-white font-semibold rounded transition"
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