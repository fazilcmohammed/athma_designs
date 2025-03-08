import React from 'react'

const KmFirstSection = ({ firstSection }) => {
  return (
    <section className="container mx-auto px-6 py-12 md:flex md:items-center md:space-x-12">
      {/* Left - Image */}
      <div className="relative w-full md:w-1/2">
        <img
          src={firstSection.contentImg}
          alt="Cloud Telephony"
          className="rounded-lg shadow-lg w-full"
        />
        {/* Decorative Dots */}
        <div className="absolute top-10 -left-6 w-16 h-24 border-l-4 border-dotted border-red-500 hidden md:block"></div>
      </div>

      {/* Right - Text Content */}
      <div className="w-full md:w-1/2">
        <p className="text-red-600 font-bold">// {firstSection.contentSubTitle}</p>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">
          {firstSection.contentTitle}
        </h2>
        <p className="text-gray-700 mt-4 leading-relaxed">
        Emtech is a Microsoft Gold Cloud Platform Partner, recognized as a leading Azure provider with deep knowledge of cloud strategy, platform deployment, and ongoing management. Our provision includes migration assessments, deployment plans, and cloud optimization, ensuring the best performance from your infrastructure. We keep ahead of the latest Azure developments from Microsoft so that our customers can adopt best practices, enable innovation, and future-proof their businesses. Emtech offers tailored Azure solutions to align with your unique business goals, driving productivity and efficiency. Our team of certified experts provides end-to-end support, from planning to deployment, ensuring a smooth and secure cloud transition. Emtech’s managed Azure services allow your business to scale seamlessly while controlling costs and enhancing agility. Partnering with Emtech means reliable, scalable, and secure cloud infrastructure that empowers your business to thrive.
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
