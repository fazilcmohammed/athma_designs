import React from "react";
import frame1 from "../assets/images/Frame 01.png";
import { qualityPoints } from "../assets/constant";
import { CheckCircle } from "lucide-react";

const Qualitysection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-10 px-4 sm:px-6 md:px-16 py-12 bg-white">
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Elevate Your Space <br className="hidden md:block" /> with Uncompromising Quality
        </h1>
        <p className="text-gray-600 mt-4 sm:mt-6 text-sm sm:text-base">
          Experience the epitome of furniture quality. Our products are
          meticulously crafted with an unwavering commitment to excellence.
          From the finest materials to expert craftsmanship, each piece
          embodies durability, comfort, and timeless style.
        </p>

        {/* Features (Centered on Small Screens) */}
        <div className="mt-6 space-y-3 flex flex-col items-center md:items-start">
          {qualityPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
              <CheckCircle className="text-green-600 w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-gray-700 font-medium">{point}</span>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center md:justify-start">
          <button className="mt-6 px-5 py-2 sm:px-6 sm:py-3 bg-green-600 text-white rounded-full text-sm sm:text-base font-medium hover:bg-gray-800 transition">
            Shop Now
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img
          src={frame1}
          alt="Quality Furniture"
          className="w-full h-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl rounded-3xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default Qualitysection;
