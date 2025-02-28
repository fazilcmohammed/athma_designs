import { useState, useEffect } from "react";
import bgimg1 from "../assets/images/bg_1.jpg";
import bgimg2 from "../assets/images/bg_2.jpg";

const slides = [
  {
    image: bgimg1,
    title: "We Serve Fresh Vegetables & Fruits",
    description: "We deliver organic vegetables & fruits",
  },
  {
    image: bgimg2,
    title: "100% Organic & Fresh Foods",
    description: "Directly from farms to your home",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length); // Change image & text
        setFade(true); // Start fade-in after change
      }, 500); // Allow fade-out before switching
    }, 4000); // Total cycle: 4s (3.5s visible + 0.5s fade)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image - Fades with Text */}
      <div
        className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
      ></div>

      {/* Overlay & Text */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-6">
        <h1
          key={slides[currentIndex].title} // Forces React to animate text
          className={`text-5xl md:w-[50%] md:text-6xl mt-12 text-white font-bold transition-opacity duration-1000 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {slides[currentIndex].title}
        </h1>
        <p
          key={slides[currentIndex].description}
          className={`text-white text-lg my-3 transition-opacity duration-1000 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {slides[currentIndex].description}
        </p>
        <button className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-all">
          View Details
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
