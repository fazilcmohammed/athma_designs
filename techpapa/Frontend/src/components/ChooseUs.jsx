import React from "react";

const ChooseUs = () => {
  return (
    <section className="py-12 bg-white text-center">
      {/* Heading */}
      <h4 className="text-red-600 text-sm font-semibold">// WHY CHOOSE US</h4>
      <h2 className="text-3xl font-bold mt-2">We Are Trusted Nationwide Across</h2>

      {/* Background Section */}
      <div className="relative mt-6 w-full max-w-5xl mx-auto">
        <div className="relative">
          <img 
            src="https://imgs.search.brave.com/S3cGZTOysDYGMs-nmAcHfAaAQn6ZStMPAGFWQVKMkrw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODYz/NDk3NDk4L3Bob3Rv/L2ktbmVlZC1ldmVy/eW9uZS10by1naXZl/LW1lLXRoZWlyLWJl/c3QtaWRlYXMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPU50/dXhVOTk5OGJXTURz/Wk44UUIwT3gtNUFs/cFE3Tm9pZk9oYnVY/UVdjcG89" 
            alt="Background"
            className="w-full h-60 object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Stats Section */}
        <div className="absolute inset-0 flex items-center justify-around text-white px-6">
          {[
            { number: "750+", text: "KEY PROJECTS DELIVERED" },
            { number: "TRA", text: "CERTIFIED" },
            { number: "SIRA", text: "CERTIFIED" },
            { number: "MCC", text: "CERTIFIED" },
            { number: "4000+", text: "HAPPY CUSTOMERS" }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <h3 className="text-3xl font-bold">{item.number}</h3>
              <p className="text-xs mt-1">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
