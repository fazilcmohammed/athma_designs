import React from 'react'
import { productsByCountry } from '../assets/constant';
import AboutHeroSection from '../components/AboutHeroSection';
import { Link } from "react-router-dom";


const EgyptProd = () => {
  const egyptianProducts = productsByCountry.filter(product => product.country === "Egypt");
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
      return (
          <>
              <AboutHeroSection page="Egyptian Fruits & Vegetables" />
  
              {/* Display Products */}
              <div className="px-6 md:px-20 py-6">
                  <h1 className="text-3xl font-semibold text-center text-gray-800 ">Egyptian Products</h1>
  
                  {/* Products Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 my-10">
                      {egyptianProducts.map((product, index) => (
                          <div
                              key={index}
                              className="shadow-md bg-white transform transition duration-300 hover:cursor-pointer hover:scale-105 hover:shadow-xl"
                          >
                              <img
                                  src={product.img}
                                  alt={product.name}
                                  className="w-full h-28 md:h-60 object-cover"
                              />
                              <h3 className="text-md font-semibold text-gray-700 px-3 py-2">{product.name}</h3>
                          </div>
                      ))}
                  </div>
              </div>

              <h2 className="text-2xl font-semibold text-center text-gray-700 mt-10 mb-5">Browse by Country</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-20">
                {[...new Set(productsByCountry.map((product) => product.country))].map((country, index) => (
                    <Link
                        key={index} onClick={scrollToTop}
                        to={`/products/${country.toLowerCase()}`}
                        className="px-4 py-2 bg-white text-gray-700 font-medium rounded-md shadow hover:bg-primaryColor hover:text-white transition duration-300"
                    >
                        {country}
                    </Link>
                ))}
            </div>
          </>
      )
}

export default EgyptProd