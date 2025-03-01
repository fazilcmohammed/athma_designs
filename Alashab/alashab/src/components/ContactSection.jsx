import React from "react";

const ContactSection = () => {
    return (
        <div className="max-w-6xl mx-auto py-16 px-6">
            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold">Address:</h3>
                    <p className="text-[#068f96] font-bold">Head office : office No 166-107 Al Garhoud Bussiness Center, Al Garhoud, Dubai, UAE.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold">Phone:</h3>
                    <p className="text-[#068f96] font-bold">+971 58 2700427 <br /> +971 507576780 <br /> +971 50 6370154</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold">Email:</h3>
                    <p className="text-gray-600">
                        <a href="mailto:info@yoursite.com" className="text-[#068f96] font-bold">info@alashab.net <br />sales@alashab.net <br />purchase@alashab.net</a>
                    </p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold">Website:</h3>
                    <p className="text-gray-600">
                        <a href="https://yoursite.com" className="text-[#068f96] font-bold">alashab.net</a>
                    </p>
                </div>
            </div>

            {/* Contact Form & Google Map */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Google Map */}
                <div className="rounded-lg overflow-hidden h-[100%]">
                    <iframe
                        className="w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14434.287713042622!2d55.32683099301029!3d25.25133919999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5db432aa90d3%3A0x285c5a0db5187ab8!2sAl%20Garhoud%20Business%20Center!5e0!3m2!1sen!2sin!4v1740809283406!5m2!1sen!2sin"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>

                {/* Contact Form */}
                <div className="bg-white shadow-md p-8 rounded-lg">
                    <form>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                            required
                        />
                        <textarea
                            placeholder="Message"
                            className="w-full p-3 border border-gray-300 rounded-lg mb-4 h-28"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-[#068f96] text-white font-semibold py-3 px-6 rounded-lg w-full hover:bg-[#20d6e0]"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
