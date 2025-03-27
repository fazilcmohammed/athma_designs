import React from "react";
import { features } from "../assets/constant";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const WhyChooseUs = () => {
  return (
    <section className="py-12 bg-white px-4 max-w-[1200px] mx-auto">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Why Choose Us?
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-gray-50 p-6 rounded-lg shadow-sm text-center hover:shadow-md transition duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold mb-2 text-red-600">
              {item.title}
            </h3>
            <p className="text-gray-700 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
