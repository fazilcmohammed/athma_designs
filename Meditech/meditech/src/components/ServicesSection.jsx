import { services } from "../assets/constant";

const ServicesSection = () => {
  return (
    <div className="py-16 bg-gray-50 text-center px-6 md:px-12 lg:px-20">
      {/* Subtitle */}
      <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-md uppercase">
        Our Services
      </span>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 leading-tight">
        We Provide Various Directions
      </h2>

      {/* Services Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg hover:shadow-xl rounded-lg p-6 flex flex-col items-center text-center transition duration-300 group"
          >
            {/* Icon with Flip Effect on Hover */}
            <service.icon
              size={50}
              className="text-blue-600 transition-transform duration-300 group-hover:rotate-180"
            />
            <h3 className="text-lg md:text-xl font-semibold mt-4 text-gray-900">{service.title}</h3>
            <p className="text-gray-600 text-sm md:text-base mt-2">{service.description}</p>
            <a href="#" className="text-blue-600 text-sm md:text-base font-semibold mt-3 hover:underline">
              READ MORE +
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
