import React from 'react';
import { customerLogos } from '../assets/constant';
import { motion } from 'framer-motion';

const CustomerLogos = () => {
  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.h1
          className="text-center text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Prestigious Customers
        </motion.h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {customerLogos.map((logos, index) => (
            <motion.div
              key={logos.id}
              className="bg-white flex justify-center items-center p-6 shadow-sm transition"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <img
                src={logos.logo}
                alt={logos.name}
                className="h-12 object-contain transition duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerLogos;
