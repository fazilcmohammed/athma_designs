import React from 'react';
import frame3 from '../assets/images/frame3.png';

const Newsletter = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-20 my-20 px-6"
      style={{ backgroundImage: `url(${frame3})` }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Subscribe to Our Newsletter
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-200">
          Stay updated with our latest collections, offers, and trends.
        </p>

        {/* Newsletter Form */}
        <form className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 w-full sm:w-auto max-w-md rounded-lg text-gray-900"
          />
          <button className="bg-green-600 px-6 py-3 w-full sm:w-auto rounded-lg text-lg font-semibold">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
