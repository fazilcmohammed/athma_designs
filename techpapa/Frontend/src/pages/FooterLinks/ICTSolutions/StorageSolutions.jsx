import React from 'react'
import { storageSolutions } from './constant'
import KmHeroSection from '../../../components/KmComponents/KmHeroSection'
import FooterLinkServices from '../../../components/KmComponents/FooterLinkServices'
import KmBottom from '../../../components/KmComponents/KmBottom'

const StorageSolutions = () => {
  return (
    <>
      <KmHeroSection heroSection={storageSolutions[0]} />
      <section className="container mx-auto px-6 py-12 flex flex-col md:items-center ">
        {/* Left - Image */}
        <p className="text-gray-900 font-bold text-center uppercase">Infrastructure Solutions</p>
        <h2 className="text-5xl font-bold text-gray-900 mt-5 mb-10 text-center">
        Storage
        </h2>
        <div className="relative w-full md:w-[50%]">

          <img
            src="https://images.unsplash.com/photo-1636347172071-6d17b1139816?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Cloud Telephony"
            className="rounded-lg shadow-lg w-full h-[350px]"
          />
          {/* Decorative Dots */}
        </div>

        {/* Right - Text Content */}
        <div className="w-full md:w-full my-10 text-center">

          <p className="text-gray-700 mt-4 leading-relaxed">
          Data storage refers to the use of recording media to retain data using computers or other devices. It also describes what type of, where, and how hardware or software holds, deletes, backs up, organizes, and secures information. Data is growing at an exponential rate. By 2025, the amount of information produced annually will be more than 200 zettabytes. As the volume of data increases, storing it securely and cost-effectively has become mission-critical for businesses of every size. Small businesses have access to the same storage options as bigger organizations. Before you start thinking to buy or upgrade any storage for your organization you need to take the few points into considerations such as Block Storage or object storage, Structured data or unstructured, Primary production data, Backup data Storage, Archival data Storage, Scale out NAS for video footage, Disk IOPS (RPM / SSD), Capacity and Scalability. There are lot of the options available for the aforesaid.
          </p>


        </div>
      </section>

      <FooterLinkServices services={storageSolutions} titles={storageSolutions[0]} />

      <KmBottom bottomSection={storageSolutions[0]} />
    </>
  )
}

export default StorageSolutions