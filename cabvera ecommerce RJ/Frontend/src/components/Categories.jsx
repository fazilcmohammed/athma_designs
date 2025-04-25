import React from "react";
import { categories } from "../assets/constant";

const Categories = () => {
  return (
    <section className="px-4 sm:px-6 md:px-16 py-12">
      {/* Section Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-20">
        <span className="border-b-2 border-black pb-1 ">Popular Products</span>
      </h2>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mt-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-100 p-4 rounded-xl shadow-sm hover:shadow-md transition"
          >
            {/* Circular Image Container */}
            <div className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full overflow-hidden flex items-center justify-center bg-gray-200">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-sm sm:text-lg font-semibold mt-3 sm:mt-4">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
