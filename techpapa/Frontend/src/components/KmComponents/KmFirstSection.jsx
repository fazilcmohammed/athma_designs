import React from 'react'

const KmFirstSection = () => {
  return (
    <section className="container mx-auto px-6 py-12 md:flex md:items-center md:space-x-12">
      {/* Left - Image */}
      <div className="relative w-full md:w-1/2">
        <img
          src="https://ss71.vzw.com/is/image/VerizonWireless/tcl-tab-disneyedition-tcl-9050s-adaptive-sound-kf6?scl=1&scl=2"
          alt="Cloud Telephony"
          className="rounded-lg shadow-lg w-full"
        />
        {/* Decorative Dots */}
        <div className="absolute top-10 -left-6 w-16 h-24 border-l-4 border-dotted border-red-500 hidden md:block"></div>
      </div>

      {/* Right - Text Content */}
      <div className="w-full md:w-1/2">
        <p className="text-red-600 font-bold">// CLOUD SOLUTIONS</p>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">
          Hybrid Cloud Telephony Solutions
        </h2>
        <p className="text-gray-700 mt-4 leading-relaxed">
          Hybrid Cloud IP Telephony is the communications technology where all communication 
          devices and applications are hosted at the service provider’s premises. Hybrid Cloud 
          telephony streamlines your business communications and grows with your business. 
          Whether you’re opening new offices, hiring remote workers, or expanding in-house teams, 
          cloud telephony will make expansion effortless and cost-effective.
        </p>
        <p className="text-gray-700 mt-4 leading-relaxed">
          You can now save yourself from the hassles of installing and setting up physical 
          telephony settings in your business by moving everything to the cloud for a better 
          communication experience for you, your customers, clients, and suppliers alike.
        </p>
      </div>
    </section>
  )
}

export default KmFirstSection