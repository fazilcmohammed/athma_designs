import React from 'react'
import KmHerosection from "../components/KmComponents/KmHeroSection"
import { aboutUs } from '../assets/constant'
import { aboutSolutions } from '../assets/constant';
import { FaHandPointRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


const AboutUs = () => {
  return (
    <>
      <KmHerosection heroSection={aboutUs[0]}/>
      <section className="container mx-auto px-6 py-12  md:items-center">
      {/* Left - Image */}
      

      {/* Right - Text Content */}
      <div className="w-full md:w-full">
        <p className="text-blue-600 font-bold">// Managed IT Service</p>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">
        Serving your technology needs for more than three decades in the U.A.E
        </h1>
        <p className="text-gray-700 mt-4 leading-relaxed">
        We are a premier IT company serving Dubai, Abu Dhabi, Sharjah, and the wider UAE, specializing in IT solutions and integrated service management. Our expertise in technology enables us to tackle complex business challenges and deliver outstanding value to our clients. Recognized as one of the top IT companies in the UAE, we offer a wide range of services tailored to the diverse needs of our clientele.

With over 30 years of experience, TECHPAPPA has built a reputation as a trusted leader in the industry. We excel in various technology sectors, including on-premises, hybrid, and multi-cloud platforms. Our team of certified professionals possesses extensive knowledge and hands-on expertise, allowing us to understand each client’s unique needs and create customized, scalable, and cost-effective solutions.

As an ISO Certified, TRA Certified, SIRA Certified, and MCC Certified company, we maintain the highest standards of quality and security. Our strategic solutions are crafted to improve productivity, efficiency, and reliability. Adhering to a proven global delivery model, we ensure consistent service excellence. We are the preferred IT partner for businesses in Dubai, Abu Dhabi, Sharjah, and across the UAE.

Our dedicated team is committed to providing exceptional customer service and addressing your technology needs. Partner with us, the leading IT company in the UAE, to unlock the full potential of your business. Discover our services and experience the difference of working with one of the most trusted IT companies in Sharjah, Abu Dhabi, and Dubai.
        </p>
        
        <p className="text-gray-700 mt-4 leading-relaxed">
        We offer IT Consultancy, Technology Solution Design, Project Implementation, and Support Services across various industry sectors, including on-site engineering and 24/7 on-site support. Our large team of dedicated and certified engineers specialize in diverse technology areas such as Networking, Security, Virtualization, Cloud, and Cyber Security. We assist our clients in overcoming the challenges of building and scaling a secure, reliable, and scalable enterprise infrastructure platform.
        </p>

        <p className="text-gray-700 mt-4 leading-relaxed">
        What sets us apart is our unwavering commitment to our customers. We have intentionally built a reputable organization and a sought-after workplace. Our goal is to create a positive impact on both our clients and the communities we serve through innovative technology solutions and collective efforts. We pursue this objective daily with passion, ensuring that we always deliver on our promises and act in the best interest of our customers. Our core value is simple: we do what we say. Our team goes the extra mile to respond swiftly and meet the needs of our clients. When you partner with TECHPAPPA, you gain the advantage of our organization's collective experience and expertise. Our people are deeply committed to our mission and values.</p>
      </div>
      <div className='text-left text-gray-900 mt-5'>
        <h1 className='text-3xl font-bold'>Why We are Unique:</h1>
        <div>
        <div className='flex items-center text-gray-700 my-4 text-md gap-2'>
        <FaHandPointRight className='text-blue-600 text-xl' />24/7 service desk provides round the clock critical support to all our customers <br />
        </div>
        <div className='flex items-center text-gray-700 my-4 text-md gap-2'>
        <FaHandPointRight className='text-blue-600 text-xl' />Strict Service Level Agreements and Online Ticketing Tool <br />
        </div>
        <div className='flex items-center text-gray-700 my-4 text-md gap-2'>
        <FaHandPointRight className='text-blue-600 text-xl' />Dedicated Account Managers to escalate high priority cases <br />
        </div>
        <div className='flex items-center text-gray-700 my-4 text-md gap-2'>
        <FaHandPointRight className='text-blue-600 text-xl' />Certified engineers provides unlimited remote support and 24/7 onsite critical support <br />
        </div>
        <div className='flex items-center text-gray-700 my-4 text-md gap-2'>
        <FaHandPointRight className='text-blue-600 text-xl' />Well defined call classification and escalation matrix <br />
        </div>
        <div className='flex items-center text-gray-700 my-4 text-md gap-2'>
        <FaHandPointRight className='text-blue-600 text-xl' />As a CSR initiative , we extend support to non-customers ( in case of any IT emergency ) <br />
        </div>
        </div>
      </div>
    </section>
    <section className="py-12 bg-gray-100 text-center">
  <h2 className="text-blue-600 font-semibold">//OUR SOLUTIONS</h2>
  <h1 className="text-3xl font-bold mb-8">Our Solutions</h1>
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-8">
    {aboutSolutions.map((solution, index) => (
      <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex items-center gap-6">
        <img src={solution.image} alt={solution.title} className="w-32 h-32 rounded-md" />
        <div className="text-left">
          <h3 className="text-xl font-bold">{solution.title}</h3>
          <p className="text-gray-600 mt-2">{solution.description}</p>
          <a href={solution.path} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700 md:w-[40%]">
            Learn More <span><FaArrowRight /></span>
          </a>
        </div>
      </div>
    ))}
  </div>
</section>

    </>
  )
}

export default AboutUs