import { useState } from "react";
import emailjs from "emailjs-com";

const CallbackModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_9f7w7df", // Replace with your EmailJS Service ID
        "template_3oomaar", // Replace with your EmailJS Template ID
        formData,
        "xAScJam9vqfyv2QwX" // Replace with your EmailJS Public Key
      )
      .then(() => {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          onClose(); // Close modal after success
        }, 2000);
      })
      .catch((err) => console.error("Failed to send email:", err))
      .finally(() => setLoading(false));
  };

  return isOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-lg">
        <h2 className="text-xl font-semibold mb-4">Request A Callback</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Name *"
            required
            className="w-full p-2 border rounded-md"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            required
            className="w-full p-2 border rounded-md"
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            required
            className="w-full p-2 border rounded-md"
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message *"
            required
            className="w-full p-2 border rounded-md"
            onChange={handleChange}
          />
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-primaryBlue text-white px-4 py-2 rounded-md"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Request"}
            </button>
            <button type="button" className="text-gray-500" onClick={onClose}>
              Close
            </button>
          </div>
        </form>

        {/* Success Message */}
        {success && <p className="text-green-600 mt-2">Request sent successfully!</p>}
      </div>
    </div>
  ) : null;
};

export default CallbackModal;
