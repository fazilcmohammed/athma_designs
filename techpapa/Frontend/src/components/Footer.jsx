import React, { useState } from "react";
import { FaPaperPlane, FaChevronDown, FaChevronUp } from "react-icons/fa";
import logo from '../assets/images/logo.png';
import CallbackModal from "./CallBackModal";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isIctSolutionsOpen, setIsIctSolutionsOpen] = useState(false);
  const [isCloudSolutionsOpen, setIsCloudSolutionsOpen] = useState(false);
  const [isProfessionalServicesOpen, setIsProfessionalServicesOpen] = useState(false);

  return (
    <footer>
      <div className="bg-gray-800 text-white py-10 px-6 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {/* Company Section */}
          <div>
            <h3
              className="text-lg font-bold mb-4 cursor-pointer flex items-center justify-between md:block"
              onClick={() => setIsCompanyOpen(!isCompanyOpen)}
            >
              Company
              <span className="md:hidden">{isCompanyOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
            </h3>
            {/* Dropdown for Mobile */}
            <ul className={`space-y-2 text-gray-300 ${isCompanyOpen ? "block" : "hidden"} md:block`}>
              <li>About us</li>
              <li>ISPG Middle East Technologies</li>
              <li>Weba Learn</li>
              <li>Industries</li>
              <li>News</li>
              <li>Contact</li>
              <li>Careers</li>
              <li>Blogs</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* ICT Solutions Section */}
          <div>
            <h3
              className="text-lg font-bold mb-4 cursor-pointer flex items-center justify-between md:block"
              onClick={() => setIsIctSolutionsOpen(!isIctSolutionsOpen)}
            >
              ICT Solutions
              <span className="md:hidden">{isIctSolutionsOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
            </h3>
            {/* Dropdown for Mobile */}
            <ul className={`space-y-2 text-gray-300 ${isIctSolutionsOpen ? "block" : "hidden"} md:block`}>
              <li>Campus Wi-Fi Solution</li>
              <li>CCTV Surveillance</li>
              <li>HCI Infrastructure</li>
              <li>Intelligent Switching</li>
              <li>IP Telephony Solutions</li>
              <li>Next Generation Firewall</li>
              <li>Server Solutions</li>
              <li>Storage Solutions</li>
              <li>Structured Cabling</li>
              <li>Virtualization Solutions</li>
            </ul>
          </div>

          {/* Cloud Solutions Section */}
          <div>
            <h3
              className="text-lg font-bold mb-4 cursor-pointer flex items-center justify-between md:block"
              onClick={() => setIsCloudSolutionsOpen(!isCloudSolutionsOpen)}
            >
              Cloud Solutions
              <span className="md:hidden">{isCloudSolutionsOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
            </h3>
            {/* Dropdown for Mobile */}
            <ul className={`space-y-2 text-gray-300 ${isCloudSolutionsOpen ? "block" : "hidden"} md:block`}>
              <li>Azure Cloud Solution</li>
              <li>Azure Backup Solution</li>
              <li>Azure Active Directory</li>
              <li>Cloud Managed Networking</li>
              <li>Cloud Email Security</li>
              <li>Cloud Optimization</li>
              <li>Cloud Firewall</li>
              <li>Desktop as a Service</li>
              <li>Wi-Fi as a Service</li>
              <li>Telephony as a Service</li>
            </ul>
          </div>

          {/* Professional Service Section */}
          <div>
            <h3
              className="text-lg font-bold mb-4 cursor-pointer flex items-center justify-between md:block"
              onClick={() => setIsProfessionalServicesOpen(!isProfessionalServicesOpen)}
            >
              Professional Service
              <span className="md:hidden">{isProfessionalServicesOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
            </h3>
            {/* Dropdown for Mobile */}
            <ul className={`space-y-2 text-gray-300 ${isProfessionalServicesOpen ? "block" : "hidden"} md:block`}>
              <li>Azure Managed Services</li>
              <li>Cloud Operations Center</li>
              <li>Digital IT Support</li>
              <li>IT Help Desk Service</li>
              <li>Managed IT Services</li>
              <li>Network Operations Center</li>
              <li>On-Site Engineer</li>
              <li>Premium AMC Support</li>
              <li>Technology Consulting</li>
              <li>24/7 Critical Support</li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe</h3>
            <p className="text-gray-300 mb-4">
              Follow our newsletter to stay updated about latest technology and solutions
            </p>
            <div className="flex items-center  rounded-none overflow-hidden">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 text-black outline-none"
              />
              <button className="bg-red-700 hover:bg-red-900 transform duration-100 ease-in-out p-3 text-white">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-white px-6 md:px-20 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-xl font-bold text-red-600 mb-4 md:mb-0">
          <img src={logo} alt="logo" className="w-32 md:w-36" />
        </div>
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-gray-700">Copyright © 2024 TECHPAPPA. All rights reserved.</p>
        </div>
        <div>
          <button
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded transition border md:border-none"
            onClick={() => setShowModal(true)}
          >
            REQUEST A CALLBACK
          </button>

          {/* Callback Modal */}
          <CallbackModal isOpen={showModal} onClose={() => setShowModal(false)} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
