import React from 'react'
import { motion } from "framer-motion";
import aboutImg from "../assets/images/aboutImg.webp"

const AboutFirst = () => {
  return (
    <section className=" mx-auto px-6 md:px-20 py-12">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img
            src={aboutImg}
            alt="About"
            className="rounded-2xl shadow-md"
          />
        </motion.div>

        {/* Right Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl font-bold mb-6 md:text-left ">About <span className='text-orange-600'>HyperPower</span></h1>
          <p className="text-gray-700 mb-4 leading-relaxed text-justify">
          Since its founding, HyperPower General Trading has successfully grown to become one of the leading importers, wholesalers, and retailers of toners and cartridges in the region. With a strong commitment to quality and customer satisfaction, HyperPower offers prompt and efficient solutions for all your toner and cartridge requirements. We stock a wide range of products from globally trusted brands such as HP, Canon, Brother, and many more — all at competitive prices and backed by our excellent customer service.

          </p>
          <p className="text-gray-700 mb-6 leading-relaxed text-justify">
          In addition to our extensive product range, HyperPower has built a reputation for providing reliable and cost-effective cartridge refilling services, ensuring that our customers receive the best value without compromising on performance. We also offer a comprehensive line of high-quality remanufactured and compatible cartridges, giving our clients sustainable and budget-friendly alternatives to meet their printing needs. Over the years, our dedication to service excellence and product reliability has earned us the trust of a growing customer base across various sectors.
          </p>
          
        </motion.div>
      </div>
    </section>
  )
}

export default AboutFirst