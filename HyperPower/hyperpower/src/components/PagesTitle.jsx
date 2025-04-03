import React from "react";
import { motion } from "framer-motion";

const PagesTitle = ({ title }) => {
  return (
    <div className="text-center py-10 bg-gray-100">
      <motion.h1
        className="text-4xl font-bold text-gray-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {title}
      </motion.h1>
    </div>
  );
};

export default PagesTitle;
