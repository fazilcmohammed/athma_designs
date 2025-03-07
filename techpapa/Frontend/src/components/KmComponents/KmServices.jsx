import React from 'react'
import { hybridServices } from '../../assets/constant'

const KmServices = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center">
        <p className="text-red-600 font-bold">// AZURE MANAGED SERVICE</p>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">
          What Microsoft Azure services do we provide?
        </h2>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
          Cloud adoption services: Consultancy, planning, and deployment services to ensure a
          smooth transition from on-premise IT systems to Microsoft Azure.
        </p>
      </div>

      {/* Service Cards */}
      <div className="mt-10 space-y-8">
        {hybridServices.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
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
  )
}

export default KmServices