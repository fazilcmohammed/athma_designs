import React from 'react'
import { cloudEmailSecurity } from './constant'
import KmHeroSection from '../../../components/KmComponents/KmHeroSection'
import FooterLinkServices from '../../../components/KmComponents/FooterLinkServices'
import KmBottom from '../../../components/KmComponents/KmBottom'

const CloudEmailSecurity = () => {
  return (
    <>
      <KmHeroSection heroSection={cloudEmailSecurity[0]} />
      <section className="container mx-auto px-6 py-12 flex flex-col md:items-center ">
        {/* Left - Image */}
        <p className="text-gray-900 font-bold text-center uppercase text-sm">Cloud Solutions</p>
        <h2 className="text-4xl font-bold text-gray-900 mt-5 mb-10 text-center">
        Cloud Email Security
        </h2>
        <div className="relative w-full md:w-[40%]">

          <img
            src="https://wabbisoft.com/wp-content/uploads/2023/09/shutterstock_2117026061-1-scaled.jpg"
            alt="Cloud Email Security"
            className="rounded-lg shadow-lg w-full "
          />
          {/* Decorative Dots */}
        </div>

        {/* Right - Text Content */}
        <div className="w-full md:w-[80%] my-10 text-justify flex flex-col justify-center items-center">

          <p className="text-gray-700 mt-4 leading-relaxed">
          Cloud email security solutions are secure email platforms used to prevent phishing scams that trick users into divulging privileged information. Cloud email security solutions are the most cost-effective way to reduce spam levels and mitigate threats from phishing, malware, and ransomware. With no hardware to purchase and no software to install, cloud-based email security solutions are quick and easy to implement, simple to administer and inexpensive to operate. The platforms, hosted by the cloud email security vendor, also ensure emails containing links to malicious sites or trigger malware downloads are blocked before reaching the end user. Businesses use cloud email security solutions to prevent data loss and the release of privileges or credentials and increase endpoint security by blocking malware and other web-based threats. At the same time, businesses are migrating their email from on-premises servers to cloud-based systems such as Microsoft Office 365 and Google G Suite. Unfortunately, the basic, built-in security of these systems cannot fully protect against email threats.
        </p>


        </div>
      </section>

      <FooterLinkServices services={cloudEmailSecurity} titles={cloudEmailSecurity[0]} />
      <KmBottom bottomSection={cloudEmailSecurity[0]} />
    </>
  )
}

export default CloudEmailSecurity