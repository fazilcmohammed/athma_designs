import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import logo from '../assets/images/logo.png'


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-100 text-gray-700 py-16 px-20 relative">
      <button
        onClick={scrollToTop}
        className="absolute left-1/2 transform -translate-x-1/2 -top-6 bg-[#068f96] text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <IoIosArrowUp size={24} />
      </button>

      <div className="container mx-auto px-5 grid md:grid-cols-4 sm:grid-cols-2 gap-8 text-center md:text-left">
        <div>
          {/* <h3 className="text-xl font-semibold mb-3">Vegefoods</h3> */}
          <img src={logo} alt="" className="w-14 md:w-16"/> 
          <p className="text-gray-500">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia.
          </p>
          <div className="flex justify-center md:justify-start space-x-3 mt-3">
            <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-[#068f96] hover:text-white transition">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-[#068f96] hover:text-white transition">
              <FaFacebook size={18} />
            </a>
            <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-[#068f96] hover:text-white transition">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Menu</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#068f96]">Shop</a></li>
            <li><a href="#" className="hover:text-[#068f96]">About</a></li>
            <li><a href="#" className="hover:text-[#068f96]">Journal</a></li>
            <li><a href="#" className="hover:text-[#068f96]">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Help</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#068f96]">Shipping Information</a></li>
            <li><a href="#" className="hover:text-[#068f96]">Returns & Exchange</a></li>
            <li><a href="#" className="hover:text-[#068f96]">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-[#068f96]">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#068f96]">FAQs</a></li>
            <li><a href="#" className="hover:text-[#068f96]">Contact</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
  <h3 className="text-xl font-semibold mb-3">Have a Question?</h3>
  <ul className="space-y-3 text-gray-500">
    <li className="flex flex-col items-center md:flex-row md:items-start space-x-0 md:space-x-2 text-center md:text-left">
      <FaMapMarkerAlt className="text-[#068f96] mb-1 md:mb-0" />
      <span>203 Fake St. Mountain View, San Francisco, CA, USA</span>
    </li>
    <li className="flex flex-col items-center md:flex-row md:items-start space-x-0 md:space-x-2">
      <FaPhoneAlt className="text-[#068f96] mb-1 md:mb-0" />
      <span>+2 392 3929 210</span>
    </li>
    <li className="flex flex-col items-center md:flex-row md:items-start space-x-0 md:space-x-2">
      <FaEnvelope className="text-[#068f96] mb-1 md:mb-0" />
      <span>info@yourdomain.com</span>
    </li>
  </ul>
</div>
      </div>

      <div className="text-center mt-8 text-gray-500 text-sm">
        Copyright © {new Date().getFullYear()} All rights reserved 
        
      </div>
    </footer>
  );
};

export default Footer;
