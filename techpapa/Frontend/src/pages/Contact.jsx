import React from "react";
import { contactUs } from "../assets/constant";
import KmHeroSection from "../components/KmComponents/KmHeroSection";

const Contact = () => {
  return (
    <>
     <KmHeroSection heroSection={contactUs[0]}/>   
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-6 mt-10">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg p-8">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Get in Touch
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Have questions or need assistance? Fill out the form below, and we’ll get back to you shortly.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryBlue"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryBlue"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryBlue"
                rows="4"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primaryBlue text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Google Map */}
          <div className="w-full">
            <iframe
              className="w-full h-full rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093686!2d144.95565181556758!3d-37.817326979751575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2sus!4v1634137055672!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
