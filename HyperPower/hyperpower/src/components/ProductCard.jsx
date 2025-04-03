import React from 'react';
import { motion } from 'framer-motion';
import { productCards } from '../assets/constant';

const ProductCard = () => {
  const whatsappNumber = "971525440610";

  return (
    <div className="px-6 md:px-20 py-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {productCards.map((product, index) => (
        <motion.div
          key={product.id}
          className="border border-gray-300 p-4 max-w-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="mb-2">
            <img src={product.image} alt={product.title} className="w-full h-72 object-cover" />
          </div>
          <h2 className="text-[17px] text-gray-900 font-semibold my-3 uppercase">{product.title}</h2>

          <button className="bg-orange-500 text-white px-4 py-2 mt-2 w-full hover:bg-orange-600">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi, I am interested in ${product.title}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-md text-white  mt-2"
            >
              SHOP NOW
            </a>
          </button>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductCard;
