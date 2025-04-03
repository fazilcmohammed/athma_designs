import React from "react";
import { motion } from "framer-motion";
import { aboutPageProducts } from "../assets/constant";
import { FaWhatsapp } from "react-icons/fa";

const AboutPageProducts = () => {
  return (
    <section className="py-16 px-6 md:px-20 mx-auto">
      {/* Title with scroll animation */}
      <motion.h2
        className="text-3xl font-bold text-center mb-10 text-gray-800"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Our Products Range From...
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
        {aboutPageProducts.map((item, i) => (
          <motion.div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={item.img} alt={item.title} className="w-40 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-orange-600 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* WhatsApp Button with scroll animation */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true }}
      >
        <a
          href="https://wa.me/971525246185"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 w-fit mx-auto hover:bg-green-600 transition"
        >
          <FaWhatsapp size={24} />
          Chat with Us
        </a>
      </motion.div>
    </section>
  );
};

export default AboutPageProducts;
