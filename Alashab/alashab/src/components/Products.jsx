import React from "react";
import { productsByCountry } from "../assets/constant";
import { Link } from "react-router-dom";

const Products = () => {
  const uniqueProducts = [...new Map(productsByCountry.map(item => [item.name, item])).values()].slice(0, 8);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
        

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {uniqueProducts.map((product, index) => (
            <div key={index} className="shadow-md bg-white transform transition duration-300 hover:cursor-pointer hover:scale-105 hover:shadow-xl">
              <img src={product.img} alt={product.name} className="w-full h-28 md:h-60 object-cover rounded-t-md" />
              <h3 className="text-lg px-3 py-2 font-semibold text-gray-700 mt-2">{product.name}</h3>
              {/* <p className="text-sm text-gray-500">{product.country}</p> */}
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <Link 
            to="/products" onClick={scrollToTop}
            className="px-6 py-3 bg-[#068f96] text-white font-medium rounded-full shadow-md hover:bg-[#21c7cf] transition duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
