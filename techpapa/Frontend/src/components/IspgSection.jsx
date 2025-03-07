import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const IspgSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-28 bg-gray-100 p-8 md:p-16 rounded-lg">
      {/* Left Side Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-6xl font-black text-gray-900">ISPG</h2>
        <p className="text-gray-700 text-xl mt-4 w-[90%] font-medium leading-relaxed">
          ISPG Middle East Technologies is a Digital Transformation entity of
          EMTECH focusing on Web Applications development by using the latest in
          Web, AI, and Blockchain technologies.
        </p>
        <button className="mt-6 px-6 py-3 bg-red-700 text-white font-semibold rounded-lg flex items-center gap-2 hover:bg-gray-950 ease-in-out transition group">
          GO TO ISPG 
          <span className="transition-transform transform group-hover:rotate-[360deg] duration-500 ease-in-out">
            <FaArrowRight />
          </span>
        </button>
      </div>

      {/* Right Side - Image inside Circle */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden flex items-center justify-center shadow-lg">
          <img
            src="https://members.asicentral.com/media/29596/customer-service-guy-phone-616.jpg" 
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default IspgSection;
