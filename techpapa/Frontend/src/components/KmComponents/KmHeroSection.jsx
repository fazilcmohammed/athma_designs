import React from "react";

const KmHeroSection = ({heroSection}) => {
  return (
    <div className=" mt-32 ">
      {/* Background Image */}
      {/* <img
        src="https://cdn-ioeej.nitrocdn.com/YmndllJeXYDrJZhQjYQYRcvDxfdvvQhr/assets/images/optimized/rev-e69c88e/emtech.ae/wp-content/uploads/2020/12/aboutusbg.jpg"
        alt="Hybrid Cloud Solutions"
        className="w-full h-full object-cover"
      />
      
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-20"></div>  */}

      {/* Text */}
      <div className="text-center  px-6 md:px-12">
        <h1 className="bg-gray-100 text-primaryBlue px-4 py-1 rounded-full font-medium inline-block uppercase">
          {heroSection.heroTitle}
        </h1>
      </div>
    </div>
  );
};

export default KmHeroSection;
