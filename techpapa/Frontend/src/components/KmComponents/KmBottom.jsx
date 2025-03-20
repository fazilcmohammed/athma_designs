import React from 'react'

const KmBottom = ({bottomSection}) => {
  return (
    <section className="text-center py-16 px-4">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 w-[80%] mx-auto ">
        {bottomSection.bottomTitle}
      </h2>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919876543210" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block bg-primaryBlue text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-800 transition duration-300"
      >
        TALK TO US
      </a>
    </section>
  )
}

export default KmBottom