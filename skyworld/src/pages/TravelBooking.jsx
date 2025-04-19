import React from 'react'
import { toast } from "react-toastify";

const TravelBooking = () => {
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
        <>
            <div className="min-h-screen">
                <div className="pt-24 pb-16">
                    <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
                        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-corporate-navy">
                            Book Your Travel
                        </h1>

                        {/* Text + Image Section */}
                        <div className="min-h-screen  flex items-center justify-center px-4">
                            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl">
                                

                                <form onSubmit={onSubmit}  className="space-y-6">
                                    <div>
                                        <input type="hidden" name="from_name" value="SkyWorld Web"></input>
                                        <label className="block text-gray-700 font-medium mb-1">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Enter your full name"
                                            required
                                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-1">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Enter your email"
                                                required
                                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-1">Phone</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone number"
                                                required
                                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-1">Travel Date</label>
                                            <input
                                                type="date"
                                                name="travel_date"
                                                required
                                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-1">Number of People</label>
                                            <input
                                                type="number"
                                                name="people"
                                                placeholder="e.g., 2"
                                                min="1"
                                                required
                                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-medium mb-1">Destination</label>
                                        <input
                                            type="text"
                                            name="destination"
                                            placeholder="Where do you want to go?"
                                            required
                                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-medium mb-1">Additional Notes</label>
                                        <textarea
                                            name="message"
                                            placeholder="Any special requests or questions?"
                                            rows="4"
                                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-corporate-coral text-white font-semibold py-3 px-6 rounded-lg hover:bg-corporate-coral/90 transition"
                                    >
                                         {result ? result : "Submit Booking"}
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}

export default TravelBooking