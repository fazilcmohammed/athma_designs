// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import axios from "../utils/axiosInstance";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/accounts/login/", formData);
      localStorage.setItem("access", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      toast.success("Login successful!");
      navigate("/"); // ✅ Redirect to home page
    } catch (err) {
      console.error(err);
      toast.error("Login failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Login Here
        </h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              name="username"
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-200"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Don’t have an account?{" "}
            <Link to='/register' className="text-black font-medium hover:underline">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
