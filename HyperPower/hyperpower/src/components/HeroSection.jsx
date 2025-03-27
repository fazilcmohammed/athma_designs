import { motion } from "framer-motion";
import heroBg from "../assets/images/heroBg.jpg"

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-black/40 flex items-center justify-center">
      {/* Background Image */}
      <img
        src={heroBg}
        alt="Printer Banner"
        className="absolute w-full h-full object-cover opacity-70"
      />

      {/* Overlay Content */}
      <div className="relative text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Your Trusted Source For <br /> Printer Spares & Consumables
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <button className="bg-white text-black px-8 py-3 rounded-md hover:bg-gray-100">
            Shop All
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
