import React from 'react'
import KmHerosection from "../components/KmComponents/KmHeroSection"
import { aboutUs } from '../assets/constant'
import { aboutSolutions } from '../assets/constant';
import { FaHandPointRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <KmHerosection heroSection={aboutUs[0]} />
      <section className="container mx-auto px-6 py-12 flex flex-col md:items-center">
        {/* Left - Image */}
        <p className="text-gray-900 font-bold text-center uppercase">Managed IT Service</p>
        <h1 className="text-4xl md:w-[50%] font-bold text-gray-900 mt-5 mb-10 text-center">
          Serving your technology needs for more than three decades in the U.A.E
        </h1>

        {/* Right - Text Content */}
        <div className="w-full md:w-[70%] ">

          <p className="text-gray-700 mt-2 leading-relaxed text-justify ">
            We are a premier IT company serving Dubai, Abu Dhabi, Sharjah, and the wider UAE, specializing in IT solutions and integrated service management. Our expertise in technology enables us to tackle complex business challenges and deliver outstanding value to our clients. Recognized as one of the top IT companies in the UAE, we offer a wide range of services tailored to the diverse needs of our clientele.

            With over 30 years of experience, TECHPAPPA has built a reputation as a trusted leader in the industry. We excel in various technology sectors, including on-premises, hybrid, and multi-cloud platforms. Our team of certified professionals possesses extensive knowledge and hands-on expertise, allowing us to understand each client’s unique needs and create customized, scalable, and cost-effective solutions.

            As an ISO Certified, TRA Certified, SIRA Certified, and MCC Certified company, we maintain the highest standards of quality and security. Our strategic solutions are crafted to improve productivity, efficiency, and reliability. Adhering to a proven global delivery model, we ensure consistent service excellence. We are the preferred IT partner for businesses in Dubai, Abu Dhabi, Sharjah, and across the UAE.

            Our dedicated team is committed to providing exceptional customer service and addressing your technology needs. Partner with us, the leading IT company in the UAE, to unlock the full potential of your business. Discover our services and experience the difference of working with one of the most trusted IT companies in Sharjah, Abu Dhabi, and Dubai.
          </p>

          <p className="text-gray-700 mt-4 leading-relaxed text-justify">
            We offer IT Consultancy, Technology Solution Design, Project Implementation, and Support Services across various industry sectors, including on-site engineering and 24/7 on-site support. Our large team of dedicated and certified engineers specialize in diverse technology areas such as Networking, Security, Virtualization, Cloud, and Cyber Security. We assist our clients in overcoming the challenges of building and scaling a secure, reliable, and scalable enterprise infrastructure platform.
          </p>

          <p className="text-gray-700 mt-4 leading-relaxed text-justify">
            What sets us apart is our unwavering commitment to our customers. We have intentionally built a reputable organization and a sought-after workplace. Our goal is to create a positive impact on both our clients and the communities we serve through innovative technology solutions and collective efforts. We pursue this objective daily with passion, ensuring that we always deliver on our promises and act in the best interest of our customers. Our core value is simple: we do what we say. Our team goes the extra mile to respond swiftly and meet the needs of our clients. When you partner with TECHPAPPA, you gain the advantage of our organization's collective experience and expertise. Our people are deeply committed to our mission and values.</p>
        </div>
        <div className='text-center text-gray-900 mt-5'>
          <h1 className='text-3xl font-bold'>Why We are Unique:</h1>
          <div className='mt-4 space-y-4 text-justify'>
            {[
              "24/7 service desk provides round the clock critical support to all our customers",
              "Strict Service Level Agreements and Online Ticketing Tool",
              "Dedicated Account Managers to escalate high priority cases",
              "Certified engineers provides unlimited remote support and 24/7 onsite critical support",
              "Well defined call classification and escalation matrix",
              "As a CSR initiative, we extend support to non-customers (in case of any IT emergency)",
            ].map((item, index) => (
              <div key={index} className='flex items-start text-left text-gray-700 text-md gap-3'>
                <FaHandPointRight className='text-primaryBlue w-5 h-5 flex-shrink-0' />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-100 text-center">
        {/* <h2 className="text-blue-600 font-semibold">OUR SOLUTIONS</h2> */}
        <h1 className="text-3xl font-bold mb-8">Our Solutions</h1>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-8">
  {aboutSolutions.map((solution, index) => (
    <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center gap-6">
      {/* Image Container */}
      <div className="relative w-full md:w-80 md:h-32">
        <img
          src={solution.image}
          alt={solution.title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Text Content */}
      <div className="text-left">
        <h3 className="text-xl font-bold">{solution.title}</h3>
        <p className="text-gray-600 mt-2 text-justify ">{solution.description}</p>
        <Link to={solution.path} className="mt-4 px-4 py-2 bg-primaryBlue text-white rounded-lg flex items-center gap-2 w-[45%] hover:bg-blue-700 md:w-[40%]">
          Learn More <span><FaArrowRight /></span>
        </Link>
      </div>
    </div>
  ))}
</div>

      </section>

    </>
  )
}

export default AboutUs