import { motion } from "framer-motion";
import heroBg from "../assets/images/heroBg.webp";

const HeroSection = ({ scrollToProducts }) => {
  return (
    <section className="relative h-[500px] md:h-[550px] bg-black/40 flex items-center justify-center">
      {/* Background Image */}
      <img
        src={heroBg}
        alt="Printer Banner"
        className="absolute w-full h-full object-cover opacity-90"
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
          <button
            onClick={scrollToProducts}
            className="bg-white text-black px-8 py-3 rounded-md hover:bg-gray-100 transition-all"
          >
            Shop All
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
