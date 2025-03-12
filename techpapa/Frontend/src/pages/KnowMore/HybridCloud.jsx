import React from 'react'
import KmHeroSection from '../../components/KmComponents/KmHeroSection'
import KmFirstSection from '../../components/KmComponents/KmFirstSection'
import KmServices from '../../components/KmComponents/KmServices'
import KmBottom from '../../components/KmComponents/KmBottom'
import { hybridCloudServices } from '../../assets/constant' 
import { azureContent } from '../../assets/constant'

const HybridCloud = () => {
  
  return (
    <>
      <KmHeroSection heroSection={hybridCloudServices[0]}/>
      {/* Pass the first entry of hybridCloudServices as a prop */}
      <KmFirstSection firstSection={hybridCloudServices[0]} />
      <KmServices 
        services={hybridCloudServices} titles = {hybridCloudServices[0]}
      />
      <section className="py-12 px-6 bg-white">
      {/* Subheading */}
      <p className="text-blue-600 font-bold text-center uppercase text-sm">
        // Your Partner of Choice for Microsoft Azure
      </p>

      {/* Main Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center max-w-4xl mx-auto mt-2">
        Migrate your Infrastructure to Azure local cloud with Managed Service
        from Emtech and stay compliant!
      </h2>

      {/* Paragraphs */}
      <p className="text-gray-700 text-lg text-center max-w-5xl mx-auto mt-6">
        <strong>Microsoft Azure</strong> offers unparalleled cloud computing
        capabilities, yet effectively managing this environment requires
        expertise and strategic insight. Emtech’s Cloud Management for Azure
        provides operational support and maintenance, guiding your journey to
        Azure with a focus on efficiency and optimization. Our team of experts
        offers in-depth guidance on cloud operations and financial governance,
        with dedicated support for all your questions and concerns. Purchase
        Azure directly from Emtech without a long-term commitment, benefiting
        from a seamless service that optimizes your cloud environment, enabling
        you to focus on your business goals.
      </p>

      <p className="text-gray-700 text-lg text-center max-w-5xl mx-auto mt-4">
        <strong>Streamline your Azure</strong> environment and operations with a
        single expert partner for all your support, billing, and governance
        needs.
      </p>

      {/* Mapping over content */}
      <div className="mt-8 space-y-6 max-w-5xl mx-auto">
        {azureContent.map((item, index) => (
          <div key={index}>
            <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
            <p className="text-gray-700 text-lg">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
      <KmBottom bottomSection = {hybridCloudServices[0]}/>
    </>
  )
}

export default HybridCloud
