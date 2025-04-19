import React from 'react'
import { privacyPolicy } from '../../assets/constant'
import KmHeroSection from '../../components/KmComponents/KmHeroSection'
import { privacyPolicyContent } from '../../assets/constant'

const PrivacyPolicy = () => {
  return (
    <>
    <KmHeroSection heroSection={privacyPolicy[0]} />
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      {/* Intro Section */}
      <p className="mb-8 text-lg">{privacyPolicyContent.intro}</p>

      {/* All Policy Sections */}
      {privacyPolicyContent.sections.map((section, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-xl font-semibold mb-4">{section.title}</h2>

          {section.description && (
            <p className="mb-4 text-base">{section.description}</p>
          )}

          {section.items.length > 0 && (
            <ul className="list-disc list-inside space-y-2">
              {section.items.map((item, i) => (
                <li key={i} className="text-base">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
    </>
  )
}

export default PrivacyPolicy