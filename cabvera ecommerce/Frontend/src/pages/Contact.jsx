import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <Navbar />

      {/* Contact Header Section */}
      <section className="py-10 px-6 bg-green-100 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
          <p className="text-gray-600 mt-4">
            Have questions? Reach out to us—we’re happy to help!
          </p>
          <div className="mt-6 flex justify-center space-x-1">
            <Link to="/" className="text-black">
              Home /
            </Link>
            <Link
              to="/contact"
              className="text-black border-b-[1px] border-gray-400"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-100 p-6 rounded-lg shadow-md mb-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-600 p-3 rounded-full text-white mb-3">
                <FaMapMarkerAlt size={20} />
              </div>
              <p className="text-gray-800">
                Kottakkal, Malappuram Dist. <br />
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-600 p-3 rounded-full text-white mb-3">
                <FaEnvelope size={20} />
              </div>
              <p className="text-gray-800">info@cabvera.com</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-600 p-3 rounded-full text-white mb-3">
                <FaPhone size={20} />
              </div>
              <p className="text-gray-800">+91 7510 444 222</p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-500 transition duration-300 text-lg font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
