import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-gray-300 py-20 px-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between max-w-5xl">
        {/* Left Section: Title & Subtitle */}
        <div className="md:w-1/2">
          <h3 className="text-lg md:text-2xl font-semibold">
            Subscribe to our Newsletter
          </h3>
          <p className="text-gray-500 text-sm md:text-base mt-2">
            Get e-mail updates about our latest shops and special offers
          </p>
        </div>

        {/* Right Section: Input & Button */}
        <div className="w-full md:w-auto flex mt-4 md:mt-0">
          <input
            type="email"
            placeholder="Enter email address"
            className="p-3 w-full md:w-80 border border-gray-300 rounded-l-md text-gray-900 focus:outline-none"
          />
          <button className="bg-green-500 px-5 text-white rounded-r-md hover:bg-green-600 transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
