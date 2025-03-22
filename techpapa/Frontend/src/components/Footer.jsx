import React, { useState } from "react";
import { Link } from "react-router-dom";
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
              className="text-md font-bold mb-4 cursor-pointer flex items-center justify-between md:block"
              onClick={() => setIsCompanyOpen(!isCompanyOpen)}
            >
              Company
              <span className="md:hidden">{isCompanyOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
            </h3>
            <ul className={`space-y-2 text-gray-300 text-sm ${isCompanyOpen ? "block" : "hidden"} md:block`}>
              <li><Link className="hover:text-primaryBlue transition-all ease-in-out" to="/about" >About us</Link></li>
              <li><Link className="hover:text-primaryBlue transition-all ease-in-out" to="/contact">Contact</Link></li>
              <li><Link className="hover:text-primaryBlue transition-all ease-in-out" to="/careers">Careers</Link></li>
              <li><Link className="hover:text-primaryBlue transition-all ease-in-out" to="/blogs">Blogs</Link></li>
              <li><Link className="hover:text-primaryBlue transition-all ease-in-out" to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* ICT Solutions Section */}
          <div>
            <h3
              className="text-md font-bold mb-4 cursor-pointer flex items-center justify-between md:block"
              onClick={() => setIsIctSolutionsOpen(!isIctSolutionsOpen)}
            >
              ICT Solutions
              <span className="md:hidden">{isIctSolutionsOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
            </h3>
            <ul className={`space-y-2 text-gray-300 text-sm ${isIctSolutionsOpen ? "block" : "hidden"} md:block`}>
              <li><Link className="hover:text-primaryBlue transition-all ease-in-out" to="/service/wifi-solutions/">Campus Wi-Fi Solution</Link></li>
              <li><Link className="hover:text-primaryBlue transition-all ease-in-out" to="/service/cctv-surveillance/">CCTV Surveillance</Link></li>
              <li><Link className="hover:text-primaryBlue transition-all ease-in-out" to="/service/hci-infrastructure/">HCI Infrastructure</Link></li>
              <li><Link className="hover:text-primaryBlue transition-all ease-in-out" to="/service/intelligent-switching/">Intelligent Switching</Link></li>
              <li><Link className="hover:text-primaryBlue transition-all ease-in-out" to="/service/ip-telephony-solutions/">IP Telephony Solutions</Link></li>
              <li><Link className="hover:text-primaryBlue transition-all ease-in-out" to="/service/next-generation-firewall/">Next Generation Firewall</Link></li>
              <li><Link className="hover:text-primaryBlue transition-all ease-in-out" to="/service/server-solutions/">Server Solutions</Link></li>
              <li><Link className="hover:text-primaryBlue transition-all ease-in-out" to="/service/storage-solutions/">Storage Solutions</Link></li>
              <li><Link className="hover:text-primaryBlue transition-all ease-in-out" to="/service/structured-cabling/">Structured Cabling</Link></li>
              <li><Link className="hover:text-primaryBlue transition-all ease-in-out" to="/service/virtualization-solutions/">Virtualization Solutions</Link></li>
            </ul>
          </div>

          {/* Cloud Solutions Section */}
          <div>
            <h3
              className="text-md font-bold mb-4 cursor-pointer flex items-center justify-between md:block"
              onClick={() => setIsCloudSolutionsOpen(!isCloudSolutionsOpen)}
            >
              Cloud Solutions
              <span className="md:hidden">{isCloudSolutionsOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
            </h3>
            <ul className={`space-y-2 text-gray-300 text-sm ${isCloudSolutionsOpen ? "block" : "hidden"} md:block`}>
              <li><Link className="hover:text-primaryBlue transition-all ease-in-out" to="/service/azure-cloud-solution/">Azure Cloud Solution</Link></li>
              <li><Link className="hover:text-primaryBlue transition-all ease-in-out" to="/service/microsoft-azure-backup/">Azure Backup Solution</Link></li>
              <li><Link className="hover:text-primaryBlue transition-all ease-in-out" to="/service/azure-active-directory/">Azure Active Directory</Link></li>
              <li><Link className="hover:text-primaryBlue transition-all ease-in-out" to="/service/cloud-managed-networking/">Cloud Managed Networking</Link></li>
              <li><Link className="hover:text-primaryBlue transition-all ease-in-out" to="/service/cloud-email-security/">Cloud Email Security</Link></li>
              <li><Link className="hover:text-primaryBlue transition-all ease-in-out" to="/service/cloud-optimization-service/">Cloud Optimization</Link></li>
              <li><Link className="hover:text-primaryBlue transition-all ease-in-out" to="/service/next-generation-cloud-firewall/">Cloud Firewall</Link></li>
              <li><Link className="hover:text-primaryBlue transition-all ease-in-out" to="/service/desktop-as-a-service/">Desktop as a Service</Link></li>
              <li><Link className="hover:text-primaryBlue transition-all ease-in-out" to="/service/wi-fi-as-a-service/">Wi-Fi as a Service</Link></li>
              <li><Link className="hover:text-primaryBlue transition-all ease-in-out" to="/service/telephony-as-a-service/">Telephony as a Service</Link></li>
            </ul>
          </div>

          {/* Professional Service Section */}
          <div>
            <h3
              className="text-md font-bold mb-4 cursor-pointer flex items-center justify-between md:block"
              onClick={() => setIsProfessionalServicesOpen(!isProfessionalServicesOpen)}
            >
              Professional Service
              <span className="md:hidden">{isProfessionalServicesOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
            </h3>
            <ul className={`space-y-2 text-gray-300 text-sm ${isProfessionalServicesOpen ? "block" : "hidden"} md:block`}>
              <li><Link className="hover:text-primaryBlue transition-all ease-in-out" to="/service/azure-management-service/">Azure Managed Services</Link></li>
              <li><Link className="hover:text-primaryBlue transition-all ease-in-out" to="/service/cloud-operations-center/">Cloud Operations Center</Link></li>
              <li><Link className="hover:text-primaryBlue transition-all ease-in-out" to="/service/digital-it-support/">Digital IT Support</Link></li>
              <li><Link className="hover:text-primaryBlue transition-all ease-in-out" to="/service/it-help-desk-service/">IT Help Desk Service</Link></li>
              <li><Link className="hover:text-primaryBlue transition-all ease-in-out" to="/service/managed-it-service/">Managed IT Services</Link></li>
              <li><Link className="hover:text-primaryBlue transition-all ease-in-out" to="/service/network-operation-center/">Network Operations Center</Link></li>
              <li><Link className="hover:text-primaryBlue transition-all ease-in-out" to="/service/on-site-engineer/">On-Site Engineer</Link></li>
              <li><Link className="hover:text-primaryBlue transition-all ease-in-out" to="/service/it-amc/">Premium AMC Support</Link></li>
              <li><Link className="hover:text-primaryBlue transition-all ease-in-out" to="/service/it-consultant/">Technology Consulting</Link></li>
              <li><Link className="hover:text-primaryBlue transition-all ease-in-out" to="/service/it-support/">24/7 Critical Support</Link></li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div>
            <h3 className="text-md font-bold mb-4">Subscribe</h3>
            <p className="text-gray-300 text-sm mb-4">
              Follow our newsletter to stay updated about the latest technology and solutions.
            </p>
            <div className="flex items-center rounded-none overflow-hidden">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 text-black outline-none"
              />
              <button className="bg-primaryBlue hover:bg-blue-600 transform duration-100 ease-in-out p-3 text-white">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-white px-6 md:px-20 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-xl font-bold text-red-600 mb-4 md:mb-0">
          <Link to="/"><img src={logo} alt="logo" className="w-32 md:w-36" /></Link>
        </div>
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-gray-700">Copyright © 2024 TECHPAPPA. All rights reserved.</p>
        </div>
        <div>
          <button
            className="px-6 py-3 bg-primaryBlue hover:bg-blue-700 text-white font-semibold rounded transition border md:border-none"
            onClick={() => setShowModal(true)}
          >
            REQUEST A CALLBACK
          </button>
          <CallbackModal isOpen={showModal} onClose={() => setShowModal(false)} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
