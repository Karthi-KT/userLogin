import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../Redux/loginSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear message before new request
    try {
      const response = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });

      if (response.data.token) {
        setMessage("Login successful!");
        // Save token to local storage or a cookie for later use
        localStorage.setItem("authToken", response.data.token);

        // Dispatch to Redux store if needed
        dispatch(loginSuccess({ user: response.data.user }));
        navigate("/home"); // Navigate to home on successful login
        onClose();
        // Clear the form
        setEmail("");
        setPassword("");
      } else {
        setMessage(`Login failed: ${response.data.message}`);
        navigate("/register"); // Navigate to register if login fails
        alert("You are not registered to this service");
      }
    } catch (error) {
      // Check if the error has a response with data to show server message
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setMessage(`Login failed: ${error.response.data.message}`);
      } else {
        setMessage(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
        <button
          onClick={onClose}
          className="mt-4 w-full bg-gray-300 text-black py-2 rounded-md hover:bg-gray-400 transition duration-300"
        >
          Back to home
        </button>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default LoginForm;
