import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";


const CallbackModal = ({ isOpen, onClose }) => {
  const [result, setResult] = useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "9ab246b2-ce01-4db8-96a8-fbafb99256ef");
  
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

  return isOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-lg">
        <h2 className="text-xl font-semibold mb-4">Request A Callback</h2>
        <form onSubmit={onSubmit} className="space-y-3">
        <input type="hidden" name="from_name" value="TechPappa Web"></input>
          <input
            type="text"
            name="name"
            placeholder="Name *"
            required
            className="w-full p-2 border rounded-md"
            
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            required
            className="w-full p-2 border rounded-md"
           
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            required
            className="w-full p-2 border rounded-md"
           
          />
          <textarea
            name="message"
            placeholder="Message *"
            required
            className="w-full p-2 border rounded-md"
           
          />
          <div className="flex justify-between items-center">
          <button
                type="submit"
                className="w-[50%] md:w-[30%] bg-primaryBlue text-white py-3 rounded-md hover:bg-blue-700 transition"
              >
                {result ? result : "Send Message"}
              </button>
            {/* <button
              type="submit"
              className="bg-primaryBlue text-white px-4 py-2 rounded-md"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Request"}
            </button> */}
            <button type="button" className="text-gray-500" onClick={onClose}>
              Close
            </button>
          </div>
        </form>

        
      </div>
    </div>
  ) : null;
};

export default CallbackModal;
