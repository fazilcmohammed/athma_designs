import React from 'react'
import KmHeroSection from '../../components/KmComponents/KmHeroSection'
import KmServices from '../../components/KmComponents/KmServices'
import { managedItService } from '../../assets/constant'
import KmFirstSection from '../../components/KmComponents/KmFirstSection'
import KmBottom from '../../components/KmComponents/KmBottom'

const ManagedItService = () => {
  return (
    <>
      <KmHeroSection heroSection={managedItService[0]}/>
      <section className="container mx-auto px-6 py-12 flex flex-col md:items-center ">
      <p className="text-gray-900 font-bold text-center uppercase text-sm">Managed IT Service</p>
        <h2 className="text-4xl font-bold text-gray-900 mt-5 mb-10 text-center">
        A catalyst in business transformation
        </h2>
      {/* Left - Image */}
      <div className="relative w-full md:w-[40%]">
        <img
          src="https://imgs.search.brave.com/yVpitjjq6AfsqAjXgsLkevIg5Sr74fJSEGFQFq5D58s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM1/NDE5Mjc3Ni9waG90/by9zaG90LW9mLXR3/by10ZWNobmljaWFu/cy13b3JraW5nLXRv/Z2V0aGVyLWluLWEt/c2VydmVyLXJvb20u/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUlsenRJVFpnTE5E/MGlKczRNQ3dnOFI2/N1pzb29Kelo4NUlN/R3VuVV9wS289"
          alt="Cloud Telephony"
          className="rounded-lg shadow-lg w-full"
        />
        
      </div>

      {/* Right - Text Content */}
      <div className="w-full md:w-[80%] my-10 text-justify flex flex-col justify-center items-center">
        
        <p className="text-gray-700 mt-4 leading-relaxed">
        Our Managed IT Service is based on modern digital solutions and services that use innovative technology solutions to solve business problems, delivering exceptional value. Specializing in digital transformation and cloud-based technologies, we imagine, build, and empower IT-enabled business solutions. From essential reactive monitoring to overall  IT infrastructure management, Techpappa’s managed services ensure that all our customers delegate their routine maintenance tasks to us whilst investing their capital and resources on other mission-critical tasks requiring domain expertise.
        </p>
        
        <p className="text-gray-700 mt-4 leading-relaxed">
          You can now save yourself from the hassles of installing and setting up physical 
          telephony settings in your business by moving everything to the cloud for a better 
          communication experience for you, your customers, clients, and suppliers alike.
        </p>
      </div>
    </section>
      <KmServices 
        services={managedItService} titles = {managedItService[0]}
      />

      <KmBottom bottomSection = {managedItService[0]}/>

    </>
  )
}

export default ManagedItService