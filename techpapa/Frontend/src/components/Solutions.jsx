import React, { useState, useEffect } from "react";
import { solutions } from "../assets/constant";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Solutions = () => {
  const [columns, setColumns] = useState(3);
  const rows = 2;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) setColumns(1);
      else if (window.innerWidth < 1024) setColumns(2);
      else setColumns(3);
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const itemsPerPage = columns * rows;
  const totalSlides = Math.max(0, Math.ceil(solutions.length / itemsPerPage) - 1);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? totalSlides : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === totalSlides ? 0 : prev + 1));
  };

  return (
    <div className="py-16 px-6 md:px-28 bg-white text-black relative overflow-hidden">
      <div className="container mx-auto text-left">
        
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm uppercase text-[#079DDA] font-bold">OUR SOLUTIONS</p>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              We Have The <span className="text-[#079DDA]">Right Expertise</span>
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="space-x-1">
            <button
              onClick={handlePrev}
              className="p-2 border border-gray-300 rounded-lg hover:bg-[#079DDA] hover:text-white transition duration-300"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="p-2 border border-gray-300 rounded-lg hover:bg-[#079DDA] hover:text-white transition duration-300"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Services Grid with Sliding Effect */}
        <div className="overflow-hidden mt-10">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(solutions.length / itemsPerPage) }).map((_, slideIndex) => (
              <div key={slideIndex} className="flex min-w-full">
                <div className={`grid gap-8 w-full`}
                  style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, gridTemplateRows: "repeat(2, 1fr)" }}
                >
                  {solutions
                    .slice(slideIndex * itemsPerPage, (slideIndex + 1) * itemsPerPage)
                    .map((item) => (
                      <div 
                        key={item.id} 
                        className="p-2 h-auto flex flex-col gap-5 transition-all duration-300"
                        style={{ minHeight: "250px" }} // Ensures uniform height
                      >
                        {/* Icon and Title in same row */}
                        <div className="flex items-center ">
                          <item.icon className="text-3xl text-primaryBlue mr-3" />
                          <h3 className="text-xl font-extrabold">{item.title}</h3>
                        </div>

                        {/* Description with blue vertical line */}
                        <div className="mt- flex flex-grow-0 py-">
                          <div className="w-1 bg-primaryBlue mr-4 h-20"></div>
                          <p className="text-md">{item.description}</p>
                        </div>

                        {/* Button aligned at bottom */}
                        <div className="mt-1">
                          <Link 
                            to={item.path} 
                            className="inline-block px-5 py-3  bg-gray-100 font-semibold text-primaryBlue rounded-md hover:bg-primaryBlue hover:text-white transition-all"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalSlides + 1 }).map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full ${index === i ? "bg-cyan-600" : "bg-gray-300"}`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
