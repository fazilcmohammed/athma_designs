import React from 'react'
import { cloudOptimization } from './constant'
import KmHeroSection from '../../../components/KmComponents/KmHeroSection'
import FooterLinkServices from '../../../components/KmComponents/FooterLinkServices'
import KmBottom from '../../../components/KmComponents/KmBottom'

const CloudOptimization = () => {
  return (
    <>
          <KmHeroSection heroSection={cloudOptimization[0]} />
          <section className="container mx-auto px-6 py-12 flex flex-col md:items-center ">
            {/* Left - Image */}
            <p className="text-gray-900 font-bold text-center uppercase text-sm">Cloud Solutions</p>
            <h2 className="text-4xl font-bold text-gray-900 mt-5 mb-10 text-center">
            Cloud Optimization Service
            </h2>
            <div className="relative w-full md:w-[50%]">
    
              <img
                src="https://performanceonedatasolutions.com/wp-content/uploads/2024/07/shutterstock_2261367581-scaled-e1720406097885.jpg"
                alt="Cloud Optimization Service"
                className="rounded-lg shadow-lg w-full "
              />
              {/* Decorative Dots */}
            </div>
    
            {/* Right - Text Content */}
            <div className="w-full md:w-[80%] my-10 text-justify flex flex-col justify-center items-center">
    
              <p className="text-gray-700 mt-4 leading-relaxed">
              Cloud optimization is the process of properly allocating and selecting right resources that power workloads to maximize performance and minimize waste due to over-provisioning. Over the time, requirements of the application and workloads evolve. Using domain knowledge for the selected resource the baseline performance can be achieved. But manually matching the workloads to cloud resources can benefit and be further optimized using machine intelligence.  Apps which are dynamically matched to the optimal cloud supply run better, require fewer resources to manage and less supporting infrastructure on-premises and in the cloud, and deliver maximum value for amount spent. IT teams are responsible for resource allocation of CloudOps or DevOps. They are often caught between requirements leveled by Finance departments who want to control cloud spend, and application owners, who never want to hear that the resources for their apps are being reduced. Using Cloud optimization, you can maximize cloud value-for-spend and deliver topmost app performance and reporting thereof making application owners and their end users happy.
            </p>
    
    
            </div>
          </section>
    
          <FooterLinkServices services={cloudOptimization} titles={cloudOptimization[0]} />
          <KmBottom bottomSection={cloudOptimization[0]} />
        </>
  )
}

export default CloudOptimization