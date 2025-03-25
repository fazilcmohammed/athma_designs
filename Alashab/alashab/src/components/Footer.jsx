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
      <div className="container mx-auto flex flex-col  md:flex-row  gap-10 md:items-start text-center md:text-left">

        {/* Logo & Social Links */}
        <div className="lg:w-[50%]">
          <img src={logo} alt="Logo" className="w-20 md:w-28 mx-auto md:mx-0" />
          <p className=" mt-3">
            Importing of high quality fresh fruits and vegetables all over the world.
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
        <div className="lg:w-[20%]">
          <h3 className="text-xl font-semibold mb-3">Menu</h3>
          <ul className="space-y-2">
            <li><Link to="/" onClick={scrollToTop} className="hover:text-[#068f96]">Home</Link></li>
            <li><Link to="/about" onClick={scrollToTop} className="hover:text-[#068f96]">About</Link></li>
            <li><Link to="/products" onClick={scrollToTop} className="hover:text-[#068f96]">Products</Link></li>
            <li><Link to="/contact" onClick={scrollToTop} className="hover:text-[#068f96]">Contact Us</Link></li>
          </ul>
        </div>

        {/* Help Links */}
        {/* <div>
          <h3 className="text-xl font-semibold mb-3">Help</h3>
          <ul className="space-y-2">
            <li><Link to="/shipping-information" className="hover:text-[#068f96]">Shipping Information</Link></li>
            <li><Link to="/returns-exchange" className="hover:text-[#068f96]">Returns & Exchange</Link></li>
            <li><Link to="/terms-conditions" className="hover:text-[#068f96]">Terms & Conditions</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-[#068f96]">Privacy Policy</Link></li>
            <li><Link to="/faqs" className="hover:text-[#068f96]">FAQs</Link></li>
            <li><Link to="/contact" className="hover:text-[#068f96]">Contact</Link></li>
          </ul>
        </div> */}

        {/* Contact Information */}
        <div className="lg:w-[60%] flex flex-col items-center text-center sm:items-start sm:text-left">
          <h3 className="text-xl font-semibold mb-3">Have a Question?</h3>
          <ul className="space-y-3 ">
            <li className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
              <FaMapMarkerAlt className="text-[#068f96] text-2xl" />
              <a href="https://www.google.com/maps/place/Al+Garhoud+Business+Center/@25.2513392,55.3085574,14z/data=!4m10!1m2!2m1!1soffice+No+166-107+Al+Garhoud+Business+Center,+Al+Garhoud,+Dubai,+UAE.!3m6!1s0x3e5f5db432aa90d3:0x285c5a0db5187ab8!8m2!3d25.2513392!4d55.3395762!15sCkVvZmZpY2UgTm8gMTY2LTEwNyBBbCBHYXJob3VkIEJ1c2luZXNzIENlbnRlciwgQWwgR2FyaG91ZCwgRHViYWksIFVBRS6SAQ9idXNpbmVzc19jZW50ZXLgAQA!16s%2Fg%2F11fmknplpt?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D" className=""><span className="font-bold">Head office :</span>Office No 166-107 Al Garhoud Business Center, Al Garhoud, Dubai, UAE.</a> <br />
            </li>
            <li className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
              <FaMapMarkerAlt className="text-[#068f96] text-2xl" />
              <a href="https://www.google.com/maps/place/Al+Aweer+Market+Building/@25.2048493,54.9823917,11z/data=!4m10!1m2!2m1!1sOffice+No+22,+1st+Floor,+Al+Aweer+Fruits+%26+Vegetable+Market+Union+Coop+Society+Building,+Dubai,+UAE!3m6!1s0x3e5f677ab12427e3:0x10711ab0ea10a7a2!8m2!3d25.1780596!4d55.3884397!15sCmNPZmZpY2UgTm8gMjIsIDFzdCBGbG9vciwgQWwgQXdlZXIgRnJ1aXRzICYgVmVnZXRhYmxlIE1hcmtldCBVbmlvbiBDb29wIFNvY2lldHkgQnVpbGRpbmcsIER1YmFpLCBVQUUiA4gBAZIBFmZvb2RfcHJvZHVjdHNfc3VwcGxpZXLgAQA!16s%2Fg%2F11k728wnl8?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D" className=""><span className="font-bold">Branch Office:</span> Office No 22, 1st Floor, Al Aweer Fruits & Vegetable Market Union Coop Society Building, Dubai, UAE</a>
            </li>
            <li className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
              <FaPhoneAlt className="text-[#068f96] text-xl" />
              <a href="tel:+971582700427" className="">+971 58 2700427, </a>
              <a href="tel:+971507576780" className=""> +971 507576780,</a>
              <a href="tel:+971506370154" className="">+971 50 6370154</a>
            </li>
            <li className="flex flex-col items-center md:flex-row gap-3">
              <FaEnvelope className="text-[#068f96]  text-xl " />
              <a href="mailto:info@alashab.net" className="m-0">
                info@alashab.net
              </a> 
              <a href="mailto:sales@alashab.net" className="m-0">
                sales@alashab.net
              </a>
              <a href="mailto:purchase@alashab.net" className="">
                purchase@alashab.net
              </a>
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
