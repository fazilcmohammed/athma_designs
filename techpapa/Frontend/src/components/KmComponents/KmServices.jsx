import React from 'react';

const KmServices = ({ services, titles }) => {
  return (
    <section className="container mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center">
        <p className="text-red-600 font-bold">{titles.serviceSubTitle}</p>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">
        {titles.serviceTitle}
        </h2>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
        {titles.serviceContent}
        </p>
      </div>

      {/* Service Cards */}
      <div className="mt-10 space-y-8">
        {/* Mapping over the services array */}
        {services[0].services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="md:w-1/2 p-6">
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-gray-700 mt-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KmServices;
