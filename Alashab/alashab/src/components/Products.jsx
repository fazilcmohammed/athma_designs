import React from "react";
import { products } from "../assets/constant";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-4">Our Products</h2>
        <p className="text-center text-gray-500 mb-8">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
