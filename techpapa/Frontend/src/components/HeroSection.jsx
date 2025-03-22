import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import herobg from "../assets/images/heroImg.jpg";
import { Link } from "react-router-dom";


const HeroSection = () => {
  return (
    <div className="bg-blue-50 px-6 pt-32 pb-16 sm:px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

        {/* Left Section - Text & Buttons */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-4">
            Innovative IT Solutions for Business Growth in UAE
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Tech Pappa delivers cutting-edge IT solutions, enhancing business efficiency, security, and growth across the UAE.
          </p>
          <div className="flex flex-col lg:flex-row items-center lg:space-x-4 space-y-3 lg:space-y-0">
            <Link to="/about" className="px-5 sm:px-6 py-2 bg-[#079DDA] text-white font-semibold rounded-lg shadow-md hover:bg-cyan-600 transition">
              Learn More
            </Link>
            <a href="https://wa.me/919876543210" // Replace with your WhatsApp number
              target="_blank"
              rel="noopener noreferrer" className="px-5 sm:px-6 py-2 flex items-center gap-2 bg-transparent text-[#079DDA] font-semibold border-2 border-[#079DDA] rounded-lg shadow-md hover:bg-blue-50 transition">
              Let's Talk
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowRightIcon className="w-5 h-5 text-[#079DDA]" />
              </motion.span>
            </a>
          </div>
        </div>

        {/* Right Section - Image (Placed Below on Mobile) */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none">
            <img src={herobg} alt="Hero" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
