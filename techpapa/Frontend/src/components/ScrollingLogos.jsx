import React, { useEffect, useRef, useState } from "react";
import { companyLogos } from "../assets/constant";

const ScrollingLogos = () => {
    return (
        <div className="overflow-hidden w-full bg-white py-10">
          <div className="relative flex items-center">
            <div className="flex animate-scroll gap-16 w-max">
              {/* Display the logos twice for infinite looping */}
              {[...companyLogos, ...companyLogos].map((logo, index) => (
                <div key={index} className="w-28 flex-shrink-0">
                  <img src={logo} alt={`Company ${index}`} className="h-16 object-contain grayscale-logo" />
                </div>
              ))}
            </div>
          </div>
        </div>
  );
};

export default ScrollingLogos;
