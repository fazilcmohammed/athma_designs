import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    const templateParams = {
      user_email: email, // The email entered by the user
    };

    emailjs
      .send("service_9f7w7df", "template_vnv1jvp", templateParams, "xAScJam9vqfyv2QwX")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setMessage("✅ Subscribed successfully!");
          setEmail(""); // Clear input field
        },
        (err) => {
          console.error("FAILED...", err);
          setMessage("❌ Failed to subscribe. Try again.");
        }
      );
  };

  return (
    <div className="bg-gray-300 py-20 px-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between max-w-5xl">
        {/* Left Section: Title & Subtitle */}
        <div className="md:w-1/2">
          <h3 className="text-lg md:text-2xl font-semibold">
            Subscribe to our Newsletter
          </h3>
          <p className="text-gray-500 text-sm md:text-base mt-2">
            Get e-mail updates about our latest shops and special offers
          </p>
        </div>

        {/* Right Section: Input & Button */}
        <form onSubmit={handleSubmit} className="w-full md:w-auto flex mt-4 md:mt-0">
          <input
            type="email"
            placeholder="Enter email address"
            className="p-3 w-full md:w-80 border border-gray-300 rounded-l-md text-gray-900 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-[#068f96] px-5 text-white rounded-r-md hover:bg-[#21c7cf] transition"
          >
            Subscribe
          </button>
        </form>
      </div>
      {message && <p className="text-center mt-4 text-gray-700">{message}</p>}
    </div>
  );
};

export default Newsletter;
