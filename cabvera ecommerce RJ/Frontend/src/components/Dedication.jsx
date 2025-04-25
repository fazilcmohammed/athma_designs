import React from 'react';
import { FaStar } from "react-icons/fa";
import { FaTools, FaHammer, FaHeadset } from "react-icons/fa";

const Dedication = () => {
  return (
    <section className="px-6 md:px-16 py-20 bg-green-600 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        {/* Left Side */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Our Dedication to <br /> Your Satisfaction
          </h2>
          <p className="my-5 text-gray-200">
            We take pride in our unwavering commitment to quality and customer satisfaction.
            With a track record of excellence, we provide you with the finest furniture and
            a service you can trust.
          </p>

          {/* Star Ratings */}
          <div className="mt-6 flex flex-col sm:flex-row items-center md:items-start gap-6">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-lg font-semibold mt-2">4.9 / 5 rating</p>
              <p className="text-gray-300">Quality</p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-lg font-semibold mt-2">4.8 / 5 rating</p>
              <p className="text-gray-300">Customer Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* Features */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <FaTools className="text-white text-3xl" />
            <div>
              <h3 className="text-xl font-bold">Quality Craftsmanship</h3>
              <p className="text-gray-200">
                Our furniture is meticulously handcrafted to stand the test of time, ensuring
                it can be enjoyed for generations to come.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <FaHammer className="text-white text-3xl" />
            <div>
              <h3 className="text-xl font-bold">Extensive Selection</h3>
              <p className="text-gray-200">
                Discover a wide variety of styles and options to suit your unique
                preferences and needs.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <FaHeadset className="text-white text-3xl" />
            <div>
              <h3 className="text-xl font-bold">Dedicated Customer Support</h3>
              <p className="text-gray-200">
                Quickly navigate and engage with your audience through seamless
                support.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Dedication;
