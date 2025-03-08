import React from "react";

const KmHeroSection = ({heroSection}) => {
  return (
    <div className="relative w-full h-56 md:h-56 lg:h-80">
      {/* Background Image */}
      <img
        src="https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2020/12/aboutusbg.jpg"
        alt="Hybrid Cloud Solutions"
        className="w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* Text */}
      <div className="absolute inset-0 flex items-center px-6 md:px-12">
        <h1 className="text-white text-3xl md:text-3xl lg:text-5xl font-bold mt-20  md:mt-24">
          {heroSection.heroTitle}
        </h1>
      </div>
    </div>
  );
};

export default KmHeroSection;
