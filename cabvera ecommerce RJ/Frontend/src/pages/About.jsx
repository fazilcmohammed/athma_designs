import React from "react";
import { FaTruck, FaShoppingBag, FaHeadset, FaUndo } from "react-icons/fa";
import aboutImage from "../assets/images/frame2.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <section className="py-10 px-6 bg-green-100 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
          <p className="text-gray-600 mt-4">
            Discover high-quality furniture designed to transform your space
            with elegance and comfort. We focus on craftsmanship, durability,
            and exceptional service.
          </p>
          <div className="mt-6 flex justify-center space-x-1">
            <Link
              to="/"
              className="text-black "
            >
              Home /
            </Link>
            <Link
              to="/shop"
              className="text-black border-b-[1px] border-gray-400"
            >
              About
            </Link>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-16">
  <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
    {/* Left Side - Text and Icons */}
    <div className="md:w-1/2">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Why Choose Us
      </h2>
      <p className="text-gray-600 mt-4">
        We provide high-quality furniture that transforms your space with
        comfort and elegance. Experience top-notch service, seamless
        shopping, and reliable support.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-8">
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-gray-200 rounded-lg shadow-md">
            <FaTruck className="text-2xl text-gray-700" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-left text-gray-900">
              Fast & Free Shipping
            </h4>
            <p className="text-gray-600 text-sm text-left">
              Get your orders delivered quickly with no extra charges.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-5 ">
          <div className="p-3 bg-gray-200 rounded-lg shadow-md">
            <FaShoppingBag className="text-2xl text-gray-700" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 text-left">
              Easy to Shop
            </h4>
            <p className="text-gray-600 text-sm text-left">
              Our seamless online store ensures a hassle-free experience.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="p-3 bg-gray-200 rounded-lg shadow-md">
            <FaHeadset className="text-2xl text-gray-700" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 text-left">
              24/7 Support
            </h4>
            <p className="text-gray-600 text-sm text-left">
              Our support team is available around the clock to assist
              you.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="p-3 bg-gray-200 rounded-lg shadow-md">
            <FaUndo className="text-2xl text-gray-700" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 text-left">
              Hassle-Free Returns
            </h4>
            <p className="text-gray-600 text-sm text-left">
              Enjoy an easy and stress-free return policy.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Right Side - Image */}
    <div className="md:w-1/2">
      <img
        src={aboutImage}
        alt="Furniture"
        className="w-[80%] rounded-lg shadow-md mx-auto"
      />
    </div>
  </div>
</section>
    </div>
  );
};

export default About;
