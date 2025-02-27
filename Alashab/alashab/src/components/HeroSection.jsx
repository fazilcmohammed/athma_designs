import { useState, useEffect } from "react";
import bgimg1 from '../assets/images/bg_1.jpg'
import bgimg2 from '../assets/images/bg_2.jpg'
const images = [
  bgimg1,  // Change to your actual image paths
  bgimg2,
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-7xl text-white font-bold">
          We Serve Fresh Vegetables & Fruits
        </h1>
        <p className="text-white text-lg mt-4">
          We deliver organic vegetables & fruits
        </p>
        <button className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-all">
          View Details
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
