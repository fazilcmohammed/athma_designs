import React from 'react';
import wlcmImg from '../assets/images/abtwelcome.jpg';

const AboutWelcome = () => {
  return (
    <div className="container mx-auto px-6 sm:px-10 md:px-20 py-16 flex flex-col-reverse md:flex-row justify-between items-center">
      {/* Right - Text Section */}
      <div className="md:w-1/2 md:pl-10 text-center md:text-left mt-10 md:mt-0">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Welcome to Our Fresh Fruits Export Business
        </h2>
        <p className="text-gray-600 mt-4 leading-relaxed">
          We provide high-quality fresh fruits sourced directly from farms to ensure the best taste and nutrition.
          Our commitment is to deliver fresh and organic products worldwide.
        </p>
        <button className="mt-6 px-6 py-3 bg-[#068f96] text-white rounded-lg text-lg font-semibold shadow-md hover:bg-green-600 transition">
          Learn More
        </button>
      </div>

      {/* Left - Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={wlcmImg} 
          alt="About Us"
          className="w-[90%] max-w-sm md:max-w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default AboutWelcome;
