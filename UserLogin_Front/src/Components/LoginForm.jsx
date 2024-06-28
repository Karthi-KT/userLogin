import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../Redux/loginSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:3001/user/login", {
        email,
        password,
      });

      if (response.data.token) {
        setMessage("Login successful!");
        localStorage.setItem("authToken", response.data.token);
        dispatch(loginSuccess({ user: response.data.user }));
        navigate("/home");
        setEmail("");
        setPassword("");
      } else {
        setMessage(`Login failed: ${response.data.message}`);
        navigate("/register");
        alert("You are not registered to this service");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setMessage(`Login failed: ${error.response.data.message}`);
      } else {
        setMessage(`Error: ${error.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Function to navigate to home
  const goToHome = () => {
    navigate("/");
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
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
        <button
          onClick={goToHome}
          className="mt-4 w-full bg-gray-300 text-black py-2 rounded-md hover:bg-gray-400 transition duration-300"
        >
          Back to home
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
