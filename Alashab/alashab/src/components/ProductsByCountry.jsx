import React from 'react'
import { countrys } from '../assets/constant'
import { Link } from "react-router-dom";

const ProductsByCountry = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-12">Products By Country</h2>
        

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {countrys.map((prod, index) => (
            <Link key={index} to={`/products/${prod.country.toLowerCase()}`} onClick={scrollToTop}>
              <div className="relative h-52 md:h-64 w-full bg-cover bg-no-repeat bg-center rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
                style={{ backgroundImage: `url(${prod.img})` }}>
                <h3 className="text-black font-semibold absolute bottom-5 left-5 bg-white py-1 rounded-none cursor-pointer px-5">
                  {prod.country}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsByCountry