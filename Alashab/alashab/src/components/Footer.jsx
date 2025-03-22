import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import logo from '../assets/images/logo.png'
import { Link } from "react-router-dom";


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-100 text-gray-700 py-16 px-6 md:px-20 relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute left-1/2 transform -translate-x-1/2 -top-6 bg-[#068f96] text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <IoIosArrowUp size={24} />
      </button>

      {/* Footer Content */}
      <div className="container mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8 items-start text-center md:text-left">

        {/* Logo & Social Links */}
        <div>
          <img src={logo} alt="Logo" className="w-20 md:w-28 mx-auto md:mx-0" />
          <p className="text-gray-500 mt-3">
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

        {/* Menu Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Menu</h3>
          <ul className="space-y-2">
            <li><Link to="/" onClick={scrollToTop} className="hover:text-[#068f96]">Home</Link></li>
            <li><Link to="/about" onClick={scrollToTop} className="hover:text-[#068f96]">About</Link></li>
            <li><Link to="/products" onClick={scrollToTop} className="hover:text-[#068f96]">Products</Link></li>
            <li><Link to="/contact" onClick={scrollToTop} className="hover:text-[#068f96]">Contact Us</Link></li>
          </ul>
        </div>

        {/* Help Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Help</h3>
          <ul className="space-y-2">
            <li><Link to="/shipping-information" className="hover:text-[#068f96]">Shipping Information</Link></li>
            <li><Link to="/returns-exchange" className="hover:text-[#068f96]">Returns & Exchange</Link></li>
            <li><Link to="/terms-conditions" className="hover:text-[#068f96]">Terms & Conditions</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-[#068f96]">Privacy Policy</Link></li>
            <li><Link to="/faqs" className="hover:text-[#068f96]">FAQs</Link></li>
            <li><Link to="/contact" className="hover:text-[#068f96]">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <h3 className="text-xl font-semibold mb-3">Have a Question?</h3>
          <ul className="space-y-3 text-gray-500">
            <li className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
              <FaMapMarkerAlt className="text-[#068f96] text-2xl" />
              <span>Office No 166-107 Al Garhoud Bussiness Center, Al Garhoud</span>
            </li>
            <li className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
              <FaPhoneAlt className="text-[#068f96] text-xl" />
              <span>+971 58 2700427 <br /> +971 507576780 <br /> +971 50 6370154</span>
            </li>
            <li className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
              <FaEnvelope className="text-[#068f96] text-xl" />
              <span>info@alashab.net <br />sales@alashab.net <br />purchase@alashab.net</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8 text-gray-500 text-sm">
        Copyright © {new Date().getFullYear()} All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
