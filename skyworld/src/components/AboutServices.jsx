import {services} from "../assets/constant"
import React from 'react';

const AboutServices = () => {
    return (
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 ">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-corporate-navy">
            Why Choose Us
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white flex flex-col items-center shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
               
                <img src={service.icon} className="flex justify-center mb-4 h-12 w-12 text-coral" alt="" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutServices;
  