import React from 'react';
import wlcmImg from '../assets/images/abtwelcome.jpg';

const AboutWelcome = () => {
  return (
    <div className="container mx-auto px-6 sm:px-10 md:px-1 py-16 flex flex-col-reverse md:flex-row justify-between items-center">
      {/* Right - Text Section */}
      <div className="md:w-1/2 md:pl-10 text-center md:text-left mt-10 md:mt-0">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Welcome to Our Fresh Fruits & Vegetable Export Business
        </h2>
        <p className="text-gray-600 mt-4 leading-relaxed text-justify">
          We provide high-quality fresh fruits sourced directly from farms to ensure the best taste and nutrition.
          Our commitment is to deliver fresh and organic products worldwide.
        </p>
        <p className="text-gray-600 mt-4 leading-relaxed text-justify">At ALASHAB, we are dedicated to delivering the highest quality fresh fruits and vegetables, ensuring that our products consistently meet the needs of the UAE market and beyond. With years of experience in the industry, we have built an extensive network and developed a deep understanding of the global supply chain. This expertise allows us to source, import, export, and retail top-tier produce, establishing ourselves as a reliable partner for businesses across the region.
</p>
        <p className="text-gray-600 mt-4 leading-relaxed text-justify">
        Our commitment to excellence drives us to continually seek out the freshest, most nutritious produce from around the world. Whether it’s for wholesale supply, retail delivery, or global exports, ALASHAB is synonymous with quality, reliability, and unmatched customer service. Through strong relationships with growers, suppliers, and partners, we ensure that our clients have access to a diverse range of fruits and vegetables, all backed by our rigorous quality standards.
        </p>
      </div>

      {/* Left - Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={wlcmImg} 
          alt="About Us"
          className="w-[80%] max-w-sm md:max-w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default AboutWelcome;
