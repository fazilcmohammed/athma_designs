import React from 'react'

const VirtualizationSolutions = () => {
  return (
    <>
      <KmHeroSection heroSection={campusWifi[0]} />
      <section className="container mx-auto px-6 py-12 flex flex-col md:items-center ">
        {/* Left - Image */}
        <p className="text-gray-900 font-bold text-center uppercase">Infrastructure Solutions</p>
        <h2 className="text-5xl font-bold text-gray-900 mt-5 mb-10 text-center">
        Virtualization Solutions, Design, and Deployment
        </h2>
        <div className="relative w-full md:w-[50%]">

          <img
            src="https://media.freemalaysiatoday.com/wp-content/uploads/2020/10/wifi-lifestyle-rawpixel-301020-1.jpg"
            alt="Cloud Telephony"
            className="rounded-lg shadow-lg w-full h-[350px]"
          />
          {/* Decorative Dots */}
        </div>

        {/* Right - Text Content */}
        <div className="w-full md:w-full my-10 text-center">

          <p className="text-gray-700 mt-4 leading-relaxed">
          Many IT organizations deploy servers that are only running at a fraction of their capacity, often because they are dedicating their physical server to a specific application. This is usually an inefficient mechanism because there is an excess capacity that is not being consumed, which leads to higher operating costs. Our Virtualization solutions can benefit your organization in several ways, with a single server, you are able to create several virtual machines. Virtualization enables more efficient utilization of computer hardware and enables a greater return on an organization’s hardware investment. Virtualization uses software to create an abstraction layer over the physical hardware. In doing so, it creates a virtual compute system, known as virtual machines (VMs). This allows organizations to run multiple virtual computers, operating systems, and applications on a single physical server. Simply put, it is a more efficient use of the physical computer hardware; this, in turn, provides a greater return on a company’s investment.
          </p>


        </div>
      </section>

      <FooterLinkServices services={campusWifi} titles={campusWifi[0]} />

      <KmBottom bottomSection={campusWifi[0]} />
    </>
  )
}

export default VirtualizationSolutions