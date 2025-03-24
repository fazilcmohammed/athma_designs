import React from "react";
import { contactUs } from "../assets/constant";
import KmHeroSection from "../components/KmComponents/KmHeroSection";
import { BiSupport } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";


const Contact = () => {
  return (
    <>
      <KmHeroSection heroSection={contactUs[0]} />
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
                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d568687.4345114183!2d55.33358111023866!3d25.24593925782691!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5dbcc3d82ebf%3A0xba95c726f18bcda6!2sCity%20Avenue%20Building!5e0!3m2!1sen!2sus!4v1742794908127!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Support & Contact Section - Moved Outside */}
        <div className="max-w-6xl w-full grid md:grid-cols-3 gap-6 mt-6">
          {/* Support Card */}
          <div className="w-full bg-white shadow-lg rounded-lg p-8 text-center">
            <div className="flex justify-center">
              <div className="bg-blue-100 p-3 rounded-full">
                <BiSupport className="text-primaryBlue text-3xl" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mt-4">Support</h3>
            <p className="text-gray-600">Contact our fast support team</p>
            <a href="mailto:info@techpappa.com" className="text-primaryBlue hover:underline">
              info@techpappa.com
            </a><br />
            <a href="mailto:techpappa.com@outlook.com" className="text-primaryBlue hover:underline">
              techpappa.com@outlook.com
            </a>
          </div>

          {/* Phone Card */}
          <div className="w-full bg-white shadow-lg rounded-lg p-8 text-center">
            <div className="flex justify-center">
              <div className="bg-blue-100 p-3 rounded-full">
                <FaPhoneAlt className="text-primaryBlue text-3xl" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mt-4">Phone</h3>
            <p className="text-gray-600">Mon-Fri from 9am to 6pm.</p>
            <a href="tel:+97143519944" className="text-primaryBlue hover:underline mr-1">
              +97143519944,
            </a>
            <a href="tel:+971043522991" className="text-primaryBlue hover:underline">
              +971043522991
            </a><br />
            <a href="tel:+971043519944" className="text-primaryBlue hover:underline">
              +971043519944
            </a>
          </div>
          <div className="w-full bg-white shadow-lg rounded-lg p-8 text-center">
            <div className="flex justify-center">
              <div className="bg-blue-100 p-3 rounded-full">
                <HiLocationMarker className="text-primaryBlue text-3xl" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mt-4">Address</h3>
            <p className="text-gray-600">Visit our office</p>
            <a href="https://www.google.com/maps/place/City+Avenue+Building/@25.2459393,55.3335811,9.7z/data=!4m6!3m5!1s0x3e5f5dbcc3d82ebf:0xba95c726f18bcda6!8m2!3d25.2524682!4d55.3347643!16s%2Fg%2F11kpvwv799?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primaryBlue hover:underline mr-1">
              PO Box: 21934 <br /> City Avenue Building, 4th Floor, 1401,<br /> Dubai, United Arab Emirates

            </a>

          </div>
        </div>
      </div>
    </>
  );
};


export default Contact;
