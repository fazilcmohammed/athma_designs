import React from "react";
import hero_img from "../assets/images/hero_img.png";

const Herosection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-20 bg-white">
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight md:leading-tight">
          Perfect Harmony: <br /> Comfort & <br /> Style
        </h1>
        <p className="text-gray-600 my-6 md:my-8 text-sm sm:text-base">
          Explore furniture that harmoniously combines comfort and style <br className="hidden md:block" />
          to elevate your home.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center md:justify-start">
          <button className="px-6 py-3 bg-green-700 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition">
            Explore Our Offers
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
        <img
          src={hero_img}
          alt="Furniture"
          className="w-[90%] sm:w-[80%] md:w-[600px] h-auto rounded-3xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default Herosection;
