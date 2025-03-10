import React from 'react'
import KmHerosection from "../components/KmComponents/KmHeroSection"
import { aboutUs } from '../assets/constant'
import { aboutSolutions } from '../assets/constant';
import { FaHandPointRight } from "react-icons/fa";


const AboutUs = () => {
  return (
    <>
      <KmHerosection heroSection={aboutUs[0]}/>
      <section className="container mx-auto px-6 py-12  md:items-center">
      {/* Left - Image */}
      

      {/* Right - Text Content */}
      <div className="w-full md:w-full">
        <p className="text-red-600 font-bold">// Managed IT Service</p>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">
        Serving your technology needs for more than three decades in the U.A.E
        </h1>
        <p className="text-gray-700 mt-4 leading-relaxed">
        We are a leading IT company in Dubai, Abu Dhabi, Sharjah, and across the UAE, specializing in IT solutions and integrated service management. Our focus on technology allows us to solve complex business challenges and deliver exceptional value to our clients. As one of the top IT companies in the UAE, we provide comprehensive services to meet the needs of our diverse clientele.With over 30 years of experience, EMTECH has become a trusted name in the industry. We have gained excellence across various technology verticals, from on-premises to hybrid and multi-cloud platforms. Our team consists of certified professionals with in-depth knowledge and practical expertise. This enables us to understand each client’s unique requirements and design tailor-made solutions that are cost-effective and scalable.As an ISO Certified, TRA Certified, SIRA Certified, and MCC Certified company, we adhere to the highest quality and security standards. Our strategic solutions are designed to enhance productivity, efficiency, and reliability. We follow a proven global delivery standard to ensure consistent service excellence. We are the preferred choice among IT companies for businesses in Dubai, Abu Dhabi, Sharjah, and across the UAE. Our expert team is dedicated to providing exceptional customer service and addressing your technology needs. Partner with us, the leading IT company in the UAE, to unlock the full potential of your business. Explore our services and experience the difference of working with one of the most reputable IT companies in Sharjah, Abu Dhabi, and Dubai
        </p>
        
        <p className="text-gray-700 mt-4 leading-relaxed">
        We provide IT Consultancy, Technology Solution Design , Project implementation and Support Services to various industry verticals including on-site engineer and 24/7 on-site support. We have a BIG team of dedicated and certified engineers on different technology streams like Networking, Security, Virtualization, Cloud and Cyber Security. We help our clients to meet the challenge of implementing and growing a secure, scalable and reliable enterprise infrastructure platform.
        </p>

        <p className="text-gray-700 mt-4 leading-relaxed">
        Our Commitment to Customers is what makes us unique. We have consciously set out to build a reputable organization and a desirable place to work. We strive to have a positive impact on our clients and on our communities through our collective efforts and innovative use of technology services. We work towards this objective every day to make it happen. We are passionate about delivering on our commitments and doing what’s right for our customers. Our most fundamental core value is that we do what we say. Our team go out of their way to respond quickly and accommodate our customer needs. When you engage Emtech you benefit from the collective experience and expertise of our entire organization. Our people strongly believe in who we are.
        </p>
      </div>
      <div className='text-left text-gray-900 mt-5'>
        <h1 className='text-3xl font-bold'>Why We are Unique:</h1>
        <div>
        <div className='flex items-center text-gray-700 my-4 text-md gap-2'>
        <FaHandPointRight />24/7 service desk provides round the clock critical support to all our customers <br />
        </div>
        <div className='flex items-center text-gray-700 my-4 text-md gap-2'>
        <FaHandPointRight />Strict Service Level Agreements and Online Ticketing Tool <br />
        </div>
        <div className='flex items-center text-gray-700 my-4 text-md gap-2'>
        <FaHandPointRight />Dedicated Account Managers to escalate high priority cases <br />
        </div>
        <div className='flex items-center text-gray-700 my-4 text-md gap-2'>
        <FaHandPointRight />Certified engineers provides unlimited remote support and 24/7 onsite critical support <br />
        </div>
        <div className='flex items-center text-gray-700 my-4 text-md gap-2'>
        <FaHandPointRight />Well defined call classification and escalation matrix <br />
        </div>
        <div className='flex items-center text-gray-700 my-4 text-md gap-2'>
        <FaHandPointRight />As a CSR initiative , we extend support to non-customers ( in case of any IT emergency ) <br />
        </div>
        </div>
      </div>
    </section>
    <section className="py-12 bg-gray-100 text-center">
      <h2 className="text-red-600 font-semibold">//OUR SOLUTIONS</h2>
      <h1 className="text-3xl font-bold mb-8">Our Solutions</h1>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {aboutSolutions.map((solution, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex items-center gap-6">
            <img src={solution.image} alt={solution.title} className="w-32 h-32 rounded-md" />
            <div className="text-left">
              <h3 className="text-xl font-bold">{solution.title}</h3>
              <p className="text-gray-600 mt-2">{solution.description}</p>
              <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg flex items-center gap-2 hover:bg-red-700">
                Learn More <span>&rarr;</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default AboutUs