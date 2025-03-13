import React from "react";
import { productsByCountry } from "../assets/constant";
import { Link } from "react-router-dom";

const Products = () => {
  const uniqueProducts = [...new Map(productsByCountry.map(item => [item.name, item])).values()].slice(0, 9);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">Our Products</h2>
        <p className="text-center text-gray-500 mb-8">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {uniqueProducts.map((product, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-md bg-white transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <img src={product.img} alt={product.name} className="w-full h-60 object-cover rounded-md" />
              <h3 className="text-lg font-semibold text-gray-700 mt-2">{product.name}</h3>
              {/* <p className="text-sm text-gray-500">{product.country}</p> */}
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <Link 
            to="/products" 
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
