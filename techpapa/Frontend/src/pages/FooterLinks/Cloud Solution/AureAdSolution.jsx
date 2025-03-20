import React from 'react'
import KmHeroSection from '../../../components/KmComponents/KmHeroSection'
import FooterLinkServices from '../../../components/KmComponents/FooterLinkServices'
import KmBottom from '../../../components/KmComponents/KmBottom'
import { azureAdSolutions } from './constant'

const AureAdSolution = () => {
  return (
    <>
      <KmHeroSection heroSection={azureAdSolutions[0]} />
      <section className="container mx-auto px-6 py-12 flex flex-col md:items-center ">
        {/* Left - Image */}
        <p className="text-gray-900 font-bold text-center uppercase">Cloud Solutions</p>
        <h2 className="text-5xl font-bold text-gray-900 mt-5 mb-10 text-center">
        Azure Active Directory (Azure AD)
        </h2>
        <div className="relative w-full md:w-[50%]">

          <img
            src="https://live.staticflickr.com/65535/50120101806_7869a6e079_b.jpg"
            alt="Azure Active Directory (Azure AD)"
            className="rounded-lg shadow-lg w-full h-[350px]"
          />
          {/* Decorative Dots */}
        </div>

        {/* Right - Text Content */}
        <div className="w-full md:w-[90%] my-10 text-center">

          <p className="text-gray-700 mt-4 leading-relaxed">
          Azure Active Directory (Azure AD) is Microsoft’s cloud-based identity and access management service, which helps your employees sign in and access resources in. It’s the digital infrastructure that allows your employees to sign in and access external resources held in Office 365 and an ever-growing list of other SaaS applications, as well as those held on a corporate network or intranet. Azure Active Directory either act as an organization’s only directory, or it can sync with an on-premises directory via Azure AD Connect. It enables both on-premises and cloud-based users to access the same apps and resources. Azure AD is intended for IT admin, who can use Azure AD to control access to apps and app resources, based on the business requirements. App developers can use Azure AD as a standards-based approach for adding single sign-on (SSO) to your app, allowing it to work with a user’s pre-existing credentials. Each Microsoft 365, Office 365, Azure, and Dynamics CRM Online tenant is automatically an Azure AD tenant.
        </p>


        </div>
      </section>

      <FooterLinkServices services={azureAdSolutions} titles={azureAdSolutions[0]} />
      <KmBottom bottomSection={azureAdSolutions[0]} />
    </>
  )
}

export default AureAdSolution