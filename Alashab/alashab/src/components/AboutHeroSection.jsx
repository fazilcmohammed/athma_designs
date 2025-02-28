import React from "react";
import { Link } from "react-router-dom";
import aboutBg from "../assets/images/bg_1.jpg";

const AboutHeroSection = ({ page }) => {
  return (
    <div
      className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Text Content */}
      <div className="relative text-center text-white z-10 px-4">
        <p className="text-sm md:text-lg tracking-wide mt-14">
          <Link to="/" className="cursor-pointer  transition">Home</Link> / {page}
        </p>
        <h1 className="text-2xl md:text-4xl font-bold mt-2">{page}</h1>
      </div>
    </div>
  );
};

export default AboutHeroSection;
