import { features } from "../assets/constant";
import React from "react";

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div
                className={`w-20 h-20 flex items-center justify-center rounded-full ${feature.bgColor}`}
              >
                <feature.icon size={40} className="text-white" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
