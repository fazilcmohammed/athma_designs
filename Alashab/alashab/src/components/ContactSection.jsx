import React from "react";

const ContactSection = () => {
    return (
        <div className="max-w-6xl mx-auto py-16 px-6">
            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold">Address:</h3>
                    <p className="text-gray-600">198 West 21th Street, Suite 721 New York, NY 10016</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold">Phone:</h3>
                    <p className="text-gray-600 font-bold">+ 1235 2355 98</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold">Email:</h3>
                    <p className="text-gray-600">
                        <a href="mailto:info@yoursite.com" className="text-blue-500 font-bold">info@yoursite.com</a>
                    </p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold">Website:</h3>
                    <p className="text-gray-600">
                        <a href="https://yoursite.com" className="text-blue-500 font-bold">yoursite.com</a>
                    </p>
                </div>
            </div>

            {/* Contact Form & Google Map */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Google Map */}
                <div className="rounded-lg overflow-hidden h-[100%]">
                    <iframe
                        className="w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508517!2d144.9537353153183!3d-37.81627974202112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20CBD%2C%20VIC!5e0!3m2!1sen!2sau!4v1619654188970!5m2!1sen!2sau"
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
                            className="bg-green-500 text-white font-semibold py-3 px-6 rounded-lg w-full hover:bg-green-600"
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
