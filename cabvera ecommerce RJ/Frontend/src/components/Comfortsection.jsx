import React from "react";
import frame2 from "../assets/images/frame2.png";
import { comfortPoints } from "../assets/constant";
import { CheckCircle } from "lucide-react";

const ComfortSection = () => {
  return (
    <section className="px-6 md:px-16 py-20">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left - Image */}
        <div className="w-full md:w-1/2">
          <img
            src={frame2}
            alt="Comfortable Furniture"
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* Right - Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Elevate Your Mood <br /> with Comfortable <br /> Furniture
          </h2>
          <p className="mt-4 text-gray-600">
            Your surroundings have a profound impact on your mood. Discover how
            our high-quality furniture can transform your space into a haven of
            comfort and happiness.
          </p>

          {/* Features List */}
          <ul className="mt-6 space-y-3">
            {comfortPoints.map((point, index) => (
              <li key={index} className="flex items-center justify-center md:justify-start gap-3">
                <CheckCircle className="text-green-600" />
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>

          {/* Button */}
          <div className="w-full flex justify-center md:justify-start">
            <button className="mt-6 px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComfortSection;
