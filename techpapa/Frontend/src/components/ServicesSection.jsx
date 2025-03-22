import { services } from "../assets/constant";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const ServicesSection = () => {
  return (
    <div 
      className="text-white py-16 px-6 md:px-16 bg-cover bg-center bg-no-repeat relative" 
      style={{ backgroundImage: "url('https://imgs.search.brave.com/mU4ertPEbFQvWQArV1bYxJTxVfM7a2YDbtlWnTs8xbA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzIyLzY4LzM5/LzM2MF9GXzIyMjY4/MzkzMF9tWFdmSG5P/azlzcENZT3lFaHFY/TlNXYldoWmQ0ZEZL/Ri5qcGc')" }}
    >
      <div className="container mx-auto px-6 text-center  bg-opacity-50 p-10 rounded-lg">
        {/* <p className="text-sm uppercase text-gray-300">Modernize Your IT</p> */}
        <h2 className="text-3xl sm:text-4xl font-bold mt-2">
          Enabling Technology For Modern Business
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-8  shadow-lg transition-all duration-300 bg-white text-black cursor-pointer hover:bg-[#079DDA] hover:text-white hover:scale-105 relative flex flex-col justify-between h-[300px]"
            >
              
              <div>
                <h3 className="text-lg font-bold mb-3 text-left">{service.title}</h3>
                <p className="text-sm mb-4 text-left">{service.description}</p>
              </div>
              <div className="flex justify-between items-center mt-auto">
              <Link to={service.link} className="text-sm font-bold flex items-center">
                  <FaArrowRight className="mr-1" />KNOW MORE
                </Link>
                <div className="text-2xl">
                  {service.icon && <service.icon />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
