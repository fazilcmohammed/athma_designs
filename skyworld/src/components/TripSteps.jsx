import React from "react";
import { MapPin, CalendarCheck, Plane } from "lucide-react";
import { Link } from "react-router-dom";


const steps = [
  {
    icon: <MapPin size={56} className="text-corporate-coral mb-4" />,
    title: "Choose Your Interest",
    description: "Fill out a 2-minute questionnaire about how you like to travel",
  },
  {
    icon: <CalendarCheck size={56} className="text-corporate-coral mb-4" />,
    title: "Share Your Travel Preference & Dates",
    description: "It all happens online. We recommend everything to your vision",
  },
  {
    icon: <Plane size={56} className="text-corporate-coral mb-4" />,
    title: "Get Recommendations",
    description: "Once you're happy with your final plan, we handle everything for you",
  },
];

const TripSteps = () => {
  return (
    <section className="py-16 bg-white text-center px-4 ">
      <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">
        3 steps to the perfect trip
      </p>
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
        Find travel perfection, with the wisdom of experts
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10 ">
        Naturally head of the class when it comes to luxury travel planning,
        because we do more homework than anyone else, with a few little
        sweeteners thrown in! Travel to the four corners of the world, without
        going around in circles.
      </p>

      <div className="grid gap-10 md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {step.icon}
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <button className="bg-corporate-navy hover:bg-corporate-navy/90 text-white font-semibold py-3 px-8 rounded-md shadow-lg transition">
          <Link to="/booktravel">LET’S PLAN YOUR TRIP</Link>
        </button>
      </div>
    </section>
  );
};

export default TripSteps;
