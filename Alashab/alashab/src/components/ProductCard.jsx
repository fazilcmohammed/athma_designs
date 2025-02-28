import React from "react";
import { FaShoppingCart, FaHeart, FaExchangeAlt } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="relative border p-4 rounded-lg shadow-md hover:shadow-lg transition-all group">
      {/* Discount Badge */}
      {product.discount && (
        <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
          {product.discount}
        </span>
      )}

      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover transform transition-all duration-300 group-hover:scale-105"
        />

        {/* Hover Buttons */}
        <div className="absolute inset-0 flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-green-500 hover:text-white transition">
            <FaShoppingCart size={16} />
          </button>
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-red-500 hover:text-white transition">
            <FaHeart size={16} />
          </button>
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition">
            <FaExchangeAlt size={16} />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="text-center mt-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-green-600 font-bold">
          ${product.price.toFixed(2)}
          {product.oldPrice && (
            <span className="text-gray-400 line-through ml-2">
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
