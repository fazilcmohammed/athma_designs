import React from "react";
import { products } from "../assets/constant";
import { motion } from "framer-motion";

const OurProducts = React.forwardRef((props, ref) => {
  const whatsappNumber = "971525440610"; // Change this to your number

  return (
    <section ref={ref} className="px-6 md:px-20 py-10  mx-auto">
      <h1 className="font-bold text-3xl mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 cursor-pointer">
        {products.map((item, index) => (
          <motion.div
            key={item.id}
            className="relative group overflow-hidden rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[250px] object-cover group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-blue-800 bg-opacity-30 flex flex-col items-start justify-end p-4">
              <h2 className="text-white text-2xl font-semibold">{item.title}</h2>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi, I am interested in ${item.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-md text-white underline mt-2"
              >
                Shop Now
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
});

export default OurProducts;
