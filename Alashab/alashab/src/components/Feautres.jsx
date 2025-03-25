import { features } from "../assets/constant";
import React from "react";

const Features = () => {
  return (
    <section className="py-10 md:py-20 bg-white">
      <h1 className='text-4xl font-bold text-center mb-10'>Why Choose Us</h1>
  <div className="container mx-auto px-6 md:px-12">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center text-center cursor-pointer group"
        >
          {/* Icon Wrapper */}
          <div
            className={`w-20 h-20 flex items-center justify-center rounded-full ${feature.bgColor} transition-all duration-300 group-hover:bg-green-400`}
          >
            <feature.icon size={40} className="text-white" />
          </div>
          
          {/* Title */}
          <h3 className="mt-4 text-lg mb-2 font-bold text-gray-800">
            {feature.title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-500 text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Features;
