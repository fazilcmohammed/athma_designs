import React from 'react'
import { azureCloudSolutions } from './constant'
import KmHeroSection from '../../../components/KmComponents/KmHeroSection'
import FooterLinkServices from '../../../components/KmComponents/FooterLinkServices'
import KmBottom from '../../../components/KmComponents/KmBottom'

const AzureCloudSolution = () => {
  return (
    <>
      <KmHeroSection heroSection={azureCloudSolutions[0]} />
      <section className="container mx-auto px-6 py-12 flex flex-col md:items-center ">
        {/* Left - Image */}
        <p className="text-gray-900 font-bold text-center uppercase text-sm">Cloud Solutions</p>
        <h2 className="text-4xl font-bold text-gray-900 mt-5 mb-10 text-center">
        Azure Cloud Solutions
        </h2>
        <div className="relative w-full md:w-[40%]">

          <img
            src="https://media.freemalaysiatoday.com/wp-content/uploads/2024/03/93dd374a-microsoft-lifestyle-1.webp"
            alt="Azure Cloud Solutions"
            className="rounded-lg shadow-lg w-full "
          />
          {/* Decorative Dots */}
        </div>

        {/* Right - Text Content */}
        <div className="w-full md:w-[80%] my-10 text-justify flex flex-col justify-center items-center">

          <p className="text-gray-700 mt-4 leading-relaxed">
          Techpappa being the gold partner of Microsoft Azure, has the technical capabilities in deploying, migrating, and maintaining cloud applications and services on Microsoft Azure, helping our customers make use of secure, scalable, and reliable cloud solutions. The Azure cloud platform is a service designed to help you bring new solutions to life to solve today’s challenges and create the future. Build, run, and manage applications across multiple clouds, on-premises, and at the edge, with the tools and frameworks of your choice. Using Azure, you can get security from the ground up, backed by a team of experts, and proactive compliance trusted by enterprises, governments, and startups. Azure Cloud computing solutions supports all languages and frameworks. With this, you can build your apps and workloads how you want and deploy where you want to. From DevOps to business analytics to the Internet of Things, you will be up and running quickly with a scalable, cost-effective solution that works with your existing investments. Azure is a fast, flexible, and affordable platform and its pricing and capabilities make it the best public cloud offering on the market.
          </p>


        </div>
      </section>

      <FooterLinkServices services={azureCloudSolutions} titles={azureCloudSolutions[0]} />
      <KmBottom bottomSection={azureCloudSolutions[0]} />
    </>
  )
}

export default AzureCloudSolution