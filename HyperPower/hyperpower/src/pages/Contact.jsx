import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import PagesTitle from "../components/PagesTitle";


const Contact = () => {
  return (
    <>
      <PagesTitle title="Contact Us" />
      <section className="py-16 px-6 md:px-20 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h2 className="text-4xl font-bold mb-4  text-center md:text-left text-orange-500">Get In Touch</h2>
            <p className="text-gray-600 mb-6 text-center md:text-left">
              Feel free to reach out to us for any inquiries, support, or feedback. We are here to assist you with the best possible solutions.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 flex-col md:flex-row">
                <div className="bg-orange-500 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-white text-sm" />
                </div>
                <p><strong>Address:</strong> Shams Business Center, Sharjah Media City free Zone, Al Messaned, Sharjah, UAE</p>
              </div>
              <div className="flex items-center gap-3 flex-col md:flex-row">
                <div className="bg-orange-500 p-3 rounded-full">
                  <FaPhoneAlt className="text-white text-sm" />
                </div>
                <p><strong>Phone Number:</strong> +971 553 377 320</p>
              </div>
              <div className="flex items-center gap-3 flex-col md:flex-row">
                <div className="bg-orange-500 p-3 rounded-full">
                  <FaEnvelope className="text-white text-sm" />
                </div>
                <p><strong>E-Mail:</strong> info.hyperpower@gmail.com</p>
              </div>
            </div>
            {/* Social Media */}
            <div className="mt-6 text-center md:text-left">
              <h3 className="text-gray-800 font-semibold mb-2">Follow Us:</h3>
              <div className="flex gap-4 justify-center md:justify-start">
                {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, index) => (
                  <div key={index} className="bg-orange-500 p-3 rounded-full text-white cursor-pointer hover:bg-orange-600">
                    <Icon className="text-sm" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-lg rounded-lg p-6"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Send a Message</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-orange-500" />
              <input type="email" placeholder="E-mail address" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-orange-500" />
              <textarea placeholder="Message" rows="4" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-orange-500"></textarea>
              <p className="text-xs text-gray-500">
                By submitting, you agree to the processing of your personal data as described in our Privacy Statement.
              </p>
              <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 w-full">
                Submit
              </button>
            </form>
          </motion.div>
        </div>
        {/* Google Map */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl underline font-bold mb-4  text-center md:text-left text-black">ALL UAE:</h2>
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.791250040762!2d55.677869475384455!3d25.277606777659315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef59333cdc4230d%3A0x619b40557215b586!2sShams%20Business%20Center!5e0!3m2!1sen!2sin!4v1743742046550!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;