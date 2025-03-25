import React from 'react';
import { aboutTimeline } from '../assets/constant';

const AboutTimeline = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-extrabold text-center mb-8">About Our Journey</h1>
      {aboutTimeline.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} items-center mb-8`}
        >
          <div className="w-full md:w-1/2 p-4">
            <img src={item.img} alt={item.title} className="w-full rounded-lg shadow-md" />
          </div>
          <div className="w-full md:w-1/2 p-4 text-justify">
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutTimeline;