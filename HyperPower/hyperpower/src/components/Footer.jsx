import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import logo from "../assets/images/Hypoz-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-10 md:px-20 ">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center sm:text-left">
        
        {/* Logo & Socials */}
        <div className="flex flex-col items-center sm:items-start">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-28 mb-4 cursor-pointer" />
          </Link>
          <p className="text-sm mb-2">Powering Your Printing Needs with Quality, Reliability, and Competitive Prices!</p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-gray-300 transition"><FaFacebookF size={20} /></a>
            <a href="#" className="hover:text-gray-300 transition"><FaInstagram size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-gray-300 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-300 transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Address (ALL UAE): </h2>
          
          <p className="text-sm">Shams Business Center, Sharjah Media City free Zone, Al Messaned, Sharjah, UAE</p>
          <p className="text-sm mb-2 mt-2">Tel: +971 553 377 320</p>
          <p className="text-sm mb-2">Fax: 04 2566638</p>
          <p className="text-sm">Email: info.hyperpower@gmail.com</p>
        </div>

        {/* Contact Info */}
        <div>
        <h2 className="font-semibold text-lg mb-4">Address (ALL INDIA): </h2>
          
          <p className="text-sm">Chalakudy, Kanjirappilly P.O</p>
          <p className="text-sm mb-2 mt-2">Tel: +91 9539 967 445</p>
          <p className="text-sm mb-2 mt-2">Tel: +91 8925 999 598</p>
          <p className="text-sm mb-2 mt-2">Tel: +91 9947 769 395</p>
          <p className="text-sm">Email: info.hyperpower@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
