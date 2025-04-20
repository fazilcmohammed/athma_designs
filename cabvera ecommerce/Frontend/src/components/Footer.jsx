import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../assets/cabvera-logo.png';

const Footer = () => {
  return (
    <footer className="text-black py-10 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10 text-center md:text-left">
        
        {/* Company Info */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
          <img src={logo} alt="Company Logo" className="w-44" />
          <p className="my-4 text-gray-500">
            Providing high-quality furniture that transforms spaces and enhances lifestyles.
          </p>
        </div>

        {/* Quick Links - Centered */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-gray-800">About Us</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-end">
          <h3 className="text-xl font-bold">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-gray-600 hover:text-gray-800 text-2xl"><FaFacebook /></a>
            <a href="#" className="text-gray-600 hover:text-gray-800 text-2xl"><FaTwitter /></a>
            <a href="#" className="text-gray-600 hover:text-gray-800 text-2xl"><FaInstagram /></a>
            <a href="#" className="text-gray-600 hover:text-gray-800 text-2xl"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-300 pt-4">
        © {new Date().getFullYear()} Cabvera. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
