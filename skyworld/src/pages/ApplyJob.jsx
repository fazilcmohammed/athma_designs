import React, { useRef } from 'react';
import { toast } from "react-toastify";

const ApplyJob = () => {
    const [result, setResult] = React.useState("");
    
      const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "8982cc52-89fd-4e67-ac54-9cdee3fec2a1");
    
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
          setResult(data.message);
        }
      };

    return (
        <div className="min-h-screen">
            <div className="pt-24 pb-16">
                <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
                    <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-corporate-navy">
                        Apply For A Job
                    </h1>

                    <form
                        
                        onSubmit={onSubmit}
                        className="space-y-6 bg-white p-8 rounded-xl shadow-md max-w-xl mx-auto"
                    >
                        <div>
                        <input type="hidden" name="from_name" value="SkyWorld Web"></input>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Interested Role</label>
                            <input
                                
                                name="role"
                                placeholder="Interested Role"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Describe Yourself</label>
                            <textarea
                                name="message"
                                placeholder="Write your message here..."
                                rows="4"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            ></textarea>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full bg-corporate-coral text-white font-medium py-2 px-4 rounded-md hover:bg-corporate-coral/90 transition"
                            >
                                {result ? result : "Submit Application"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ApplyJob;
