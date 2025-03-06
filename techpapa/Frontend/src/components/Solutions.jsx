import React, { useState, useEffect } from "react";
import { solutions } from "../assets/constant";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Solutions = () => {
  const [columns, setColumns] = useState(3); // Default: 3 columns
  const rows = 2; // Always 2 rows
  const [index, setIndex] = useState(0);

  // Adjust columns based on screen size
  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) setColumns(1); // Small: 1 column
      else if (window.innerWidth < 1024) setColumns(2); // Medium: 2 columns
      else setColumns(3); // Large: 3 columns
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const itemsPerPage = columns * rows; // Dynamic visible items
  const totalSlides = Math.max(0, Math.ceil(solutions.length / itemsPerPage) - 1);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? totalSlides : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === totalSlides ? 0 : prev + 1));
  };

  return (
    <div className="py-16 px-6 md:px-28 bg-white text-black relative overflow-hidden">
      <div className="container mx-auto text-center">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <div className="text-left">
            <p className="text-sm uppercase text-red-600 font-bold">// OUR SOLUTIONS</p>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              We Have The <span className="text-red-600">Right Expertise</span>
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="space-x-1">
            <button
              onClick={handlePrev}
              className="p-2 border border-gray-300 rounded-lg hover:bg-red-600 hover:text-white transition duration-300"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="p-2 border border-gray-300 rounded-lg hover:bg-red-600 hover:text-white transition duration-300"
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
              <div key={slideIndex} className="flex min-w-full px-3">
                <div className={`grid gap-6 grid-cols-${columns} grid-rows-2 w-full `}>
                  {solutions
                    .slice(slideIndex * itemsPerPage, (slideIndex + 1) * itemsPerPage)
                    .map((item) => (
                      <div
                        key={item.id}
                        className="p-10 border border-gray-200 shadow-md hover:shadow-lg hover:bg-red-600 hover:text-white hover:cursor-pointer h-[280px] transition-all duration-300"
                      >
                        <item.icon className="text-red-600 text-5xl mx-auto mb-4 " />
                        <h3 className="text-xl font-bold my-4 ">{item.title}</h3>
                        <p className=" text-sm">{item.description}</p>
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
              className={`w-3 h-3 rounded-full ${index === i ? "bg-red-600" : "bg-gray-300"}`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
