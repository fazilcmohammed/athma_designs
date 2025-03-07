import React from 'react'

const KmBottom = () => {
  return (
    <section className="text-center py-12 px-4 bg-white">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 max-w-3xl mx-auto">
        Upgrade Your Business for a Newer, Better Communication Experience for
        Everyone. Talk to Our Customer Support Desk for a Free Consultation!
      </h2>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919876543210" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block bg-red-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-800 transition duration-300"
      >
        TALK TO US
      </a>
    </section>
  )
}

export default KmBottom