import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CallbackModal from "./CallBackModal";
 // Import the modal component

const slides = [
  { image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994" },
  { image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308" },
  { image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" },
  { image: "https://images.unsplash.com/photo-1493612276216-ee3925520721" },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background while image loads */}
      <div className="absolute inset-0 w-full h-full bg-black"></div>

      {/* Image Slider */}
      <AnimatePresence>
        <motion.img
          key={currentSlide}
          src={slides[currentSlide].image}
          alt={`Slide ${currentSlide + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-5xl font-bold mb-6">
          <span className="text-red-500">enable.</span> empower. evolve.
        </h1>
        <button
          className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded transition"
          onClick={() => setShowModal(true)}
        >
          REQUEST A CALLBACK
        </button>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-6 text-white">
        <button onClick={prevSlide} className="hover:text-gray-300">
          <FaArrowLeft size={20} />
        </button>
        <span className="text-lg">
          {currentSlide + 1}/{slides.length}
        </span>
        <button onClick={nextSlide} className="hover:text-gray-300">
          <FaArrowRight size={20} />
        </button>
      </div>

      {/* Callback Modal */}
      <CallbackModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default HeroSection;
