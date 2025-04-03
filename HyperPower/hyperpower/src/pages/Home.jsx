import React, { useRef } from "react";
import HeroSection from "../components/HeroSection";
import OurProducts from "../components/OurProducts";
import CustomerLogos from "../components/CustomerLogos";
import WhyChooseUs from "../components/WhyChooseUs";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const productsRef = useRef(null);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <HeroSection scrollToProducts={scrollToProducts} />
      {/* <CustomerLogos /> */}
      <OurProducts ref={productsRef} />
      <ProductCard/>
      <WhyChooseUs />
    </>
  );
};

export default Home;
