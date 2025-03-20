import React from 'react'
import { azureBackupSolutions } from './constant'
import KmHeroSection from '../../../components/KmComponents/KmHeroSection'
import FooterLinkServices from '../../../components/KmComponents/FooterLinkServices'
import KmBottom from '../../../components/KmComponents/KmBottom'

const AzureBackupSolution = () => {
  return (
    <>
          <KmHeroSection heroSection={azureBackupSolutions[0]} />
          <section className="container mx-auto px-6 py-12 flex flex-col md:items-center ">
            {/* Left - Image */}
            <p className="text-gray-900 font-bold text-center uppercase">Data Protection</p>
            <h2 className="text-5xl font-bold text-gray-900 mt-5 mb-10 text-center">
            Microsoft Azure Backup
            </h2>
            <div className="relative w-full md:w-[50%]">
    
              <img
                src="https://img.ccnull.de/1100000/preview/1100378_ba5f2cbec784b2b8916b5bf84558a2d1.jpg"
                alt="Cloud Telephony"
                className="rounded-lg shadow-lg w-full h-[350px]"
              />
              {/* Decorative Dots */}
            </div>
    
            {/* Right - Text Content */}
            <div className="w-full md:w-full my-10 text-center">
    
              <p className="text-gray-700 mt-4 leading-relaxed">
              The Azure Backup service provides simple, secure, and cost-effective solutions to back up your data and recover it from the Microsoft Azure cloud. Azure Backup offers a simple solution for backing up your on-premises resources to the cloud. It provides independent and isolated backups to guard against accidental destruction of original data. It uses the underlying power and unlimited scale of the Azure cloud to deliver high availability with no maintenance or monitoring overhead. An application-consistent backup means a recovery point has all required data to restore the backup copy. Azure Backup provides application-consistent backups, which ensure additional fixes aren’t required to restore the data. Restoring application-consistent data reduces the restoration time, allowing you to quickly return to a running state. The Azure integrated cloud services help you minimize the risks of data breaches, data loss and ransomware attacks with one broader data protection service for your organization.
              </p>
    
    
            </div>
          </section>
    
          <FooterLinkServices services={azureBackupSolutions} titles={azureBackupSolutions[0]} />
          <KmBottom bottomSection={azureBackupSolutions[0]} />
        </>
  )
}

export default AzureBackupSolution