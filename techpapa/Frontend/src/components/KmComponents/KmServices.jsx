import React, { useState } from 'react';
import CallbackModal from '../CallBackModal';

const KmServices = ({ services, titles }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="container mx-auto px-6 py-12 md:w-[80%]">
      {/* Header */}
      <div className="text-center">
        <p className="text-primaryBlue font-bold uppercase">{titles.serviceSubTitle}</p>
        <h2 className="text-3xl font-bold text-gray-900 my-3 text-center ">
          {titles.serviceTitle}
        </h2>
        <p className="text-gray-700 md:w-[90%] text-justify  mx-auto">
          {titles.serviceContent}
        </p>
      </div>

      {/* Service Cards */}
      <div className="mt-10  space-y-8">
        {/* Mapping over the services array */}
        {services[0].services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center md:justify-between md:px-10 md:py-10 bg-white shadow-lg rounded-lg overflow-hidden ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
          >
            {/* Image */}
            <div className="md:w-[40%]">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="md:w-[58%] p-6">
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className="text-gray-700 mt-3 mb-6 text-justify">{service.description}</p>
              <a href="https://wa.me/971569000801" // Replace with your WhatsApp number
                target="_blank"
                className="px-6 py-3 bg-primaryBlue hover:bg-blue-800 text-white font-semibold rounded transition"
              >
                Know More
              </a>

              <CallbackModal isOpen={showModal} onClose={() => setShowModal(false)} />
            </div>

          </div>

        ))}
      </div>
    </section>


  );
};

export default KmServices;
