import React from 'react'

const FooterLinkServices = ({ services, titles }) => {
  return (
    <section className="container mx-auto px-6 md:w-[80%]">
          {/* Header */}
          <div className="text-center">
            <p className="text-primaryBlue font-bold uppercase">{titles.serviceSubTitle}</p>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">
            {titles.serviceTitle}
            </h2>
            <p className="text-gray-700 text-left mt-4 md:w-[90%]  mx-auto">
            {titles.serviceContent}
            </p>
          </div>
    
          {/* Service Cards */}
          <div className="mt-10 space-y-8 mx-5">
            {/* Mapping over the services array */}
            {services[0].services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center md:justify-between md:px-10 md:py-10 bg-white shadow-lg rounded-lg overflow-hidden ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Image */}
                {/* <div className="md:w-[40%]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div> */}
    
                {/* Text */}
                <div className="md:w-full p-10 md:p-2">
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="text-gray-700 my-3">{service.description}</p>
                  
    
            {/* <CallbackModal isOpen={showModal} onClose={() => setShowModal(false)} /> */}
                </div>
                
              </div>
              
            ))}
          </div>
        </section>
  )
}

export default FooterLinkServices