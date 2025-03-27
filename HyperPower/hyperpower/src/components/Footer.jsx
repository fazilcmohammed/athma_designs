import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import logo from "../assets/images/Hypoz-logo_bg_white.png"

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 px-10">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

      <div className="flex flex-col items-start text-left">
          <img src={logo} alt="Logo" className="w-28 mb-4" /> {/* change logo path */}
          <p className="text-sm mb-2">We provide GST invoices for B2B customers.</p>
          <p className="text-sm mb-2">Special bulk pricing also available</p>
          <div className="flex gap-4">
            <a href="#"><FaFacebookF size={20} /></a>
            <a href="#"><FaInstagram size={20} /></a>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h2 className="font-semibold text-lg mb-4 text-left">Quick Links</h2>
          <ul className="space-y-2 text-sm text-left">
            <li><a href="#">Search</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Shipping & Returns Policy</a></li>
            <li><a href="#">Complete Catalog</a></li>
          </ul>
        </div>

        {/* Logo & Info */}
        

        {/* Contact Info */}
        <div className='text-left'>
          <h2 className="font-semibold text-lg mb-4">Address</h2>
          <p className="text-sm mb-2">Premier Computers:</p>
          <p className="text-sm mb-2">Gala No 103, Building No. 69,</p>
          <p className="text-sm mb-2">Indian Corporation, Mankoli,</p>
          <p className="text-sm mb-2">Bhiwandi - 421302</p>
          
        </div>

        <div className='text-left'>
          <h2 className="font-semibold text-lg mb-4">Contact Us</h2>
          <p className="text-sm mt-4">Tel: 04 2566637</p>
          <p className="text-sm">Fax: 04 2566638</p>
          <p className="text-sm">Email: hyperpoweruae1@gmail.com</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
