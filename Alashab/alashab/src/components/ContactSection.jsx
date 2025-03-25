import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactSection = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "0700f983-8ebe-424a-989b-454ca672f6cc");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            toast.success("Form Submitted Successfully")
            event.target.reset();
        } else {
            console.log("Error", data);
            toast.error(data.message)

            setResult("");
        }
    };

    return (
        <div className="max-w-6xl mx-auto py-16 px-6">
            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-10">
                <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold">Address (Head Office):</h3>
                    <a href="https://www.google.com/maps/place/Al+Garhoud+Business+Center/@25.2513392,55.3085574,14z/data=!4m10!1m2!2m1!1soffice+No+166-107+Al+Garhoud+Business+Center,+Al+Garhoud,+Dubai,+UAE.!3m6!1s0x3e5f5db432aa90d3:0x285c5a0db5187ab8!8m2!3d25.2513392!4d55.3395762!15sCkVvZmZpY2UgTm8gMTY2LTEwNyBBbCBHYXJob3VkIEJ1c2luZXNzIENlbnRlciwgQWwgR2FyaG91ZCwgRHViYWksIFVBRS6SAQ9idXNpbmVzc19jZW50ZXLgAQA!16s%2Fg%2F11fmknplpt?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D" className="text-[#068f96] font-semibold mb-2">Office No 166-107 Al Garhoud Business Center, Al Garhoud, Dubai, UAE.</a> <br />
                    </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold">Address (Branch Office):</h3>
                    <a href="https://www.google.com/maps/place/Al+Aweer+Market+Building/@25.2048493,54.9823917,11z/data=!4m10!1m2!2m1!1sOffice+No+22,+1st+Floor,+Al+Aweer+Fruits+%26+Vegetable+Market+Union+Coop+Society+Building,+Dubai,+UAE!3m6!1s0x3e5f677ab12427e3:0x10711ab0ea10a7a2!8m2!3d25.1780596!4d55.3884397!15sCmNPZmZpY2UgTm8gMjIsIDFzdCBGbG9vciwgQWwgQXdlZXIgRnJ1aXRzICYgVmVnZXRhYmxlIE1hcmtldCBVbmlvbiBDb29wIFNvY2lldHkgQnVpbGRpbmcsIER1YmFpLCBVQUUiA4gBAZIBFmZvb2RfcHJvZHVjdHNfc3VwcGxpZXLgAQA!16s%2Fg%2F11k728wnl8?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D" className="text-[#068f96] font-semibold">Office No 22, 1st Floor, Al Aweer Fruits & Vegetable Market Union Coop Society Building, Dubai, UAE</a>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold">Phone:</h3>
                    <a href="tel:+971582700427" className="text-[#068f96] font-bold">+971 58 2700427 </a><br />
                    <a href="tel:+971507576780" className="text-[#068f96] font-bold"> +971 507576780</a><br />
                    <a href="tel:+971506370154" className="text-[#068f96] font-bold">+971 50 6370154</a>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold">Email:</h3>
                    <p className="text-gray-600">
                        <a href="mailto:info@alashab.net" className="text-[#068f96] font-bold">
                            info@alashab.net
                        </a> <br />
                        <a href="mailto:sales@alashab.net" className="text-[#068f96] font-bold">
                            sales@alashab.net
                        </a><br />
                        <a href="mailto:purchase@alashab.net" className="text-[#068f96] font-bold">
                            purchase@alashab.net
                        </a>
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
                    <form onSubmit={onSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                            required
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            className="w-full p-3 border border-gray-300 rounded-lg mb-4 h-28"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-[#068f96] text-white font-semibold py-3 px-6 rounded-lg w-full hover:bg-[#20d6e0]"
                        >
                            {result ? result : "Send Message"}
                        </button>
                    </form>
                    {/* {statusMessage && <p className="text-center mt-4 text-gray-700">{statusMessage}</p>} */}
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
