import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const nameRef = useRef(null);
  const clgRef = useRef(null);
  const depRef = useRef(null);
  const yearRef = useRef(null);
  const mobRef = useRef(null);
  const mailRef = useRef(null);
  const pwdRef = useRef(null); // New reference for password
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // State for loading indication

  const studentData = async (e) => {
    e.preventDefault(); // Prevent form submission

    // Reset loading state
    setLoading(true);

    const studentDetails = {
      name: nameRef.current.value,
      college: clgRef.current.value,
      department: depRef.current.value,
      year: yearRef.current.value,
      mobile: mobRef.current.value,
      email: mailRef.current.value,
      password: pwdRef.current.value,
    };
    axios.post("http://localhost:3001/signup", studentDetails);
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center w-full h-full p-6">
      <form className="w-full max-w-md space-y-4" onSubmit={studentData}>
        <h2 className="text-2xl font-bold text-center mb-6">
          Register to create an account
        </h2>
        <div>
          <label htmlFor="userName" className="block text-sm font-medium  mb-1">
            Name
          </label>
          <input
            type="text"
            id="userName"
            ref={nameRef}
            className="w-full p-2 h-10 rounded-md text-black"
            required
          />
        </div>
        <div>
          <label
            htmlFor="userCollege"
            className="block text-sm font-medium  mb-1"
          >
            College Name
          </label>
          <input
            type="text"
            id="userCollege"
            ref={clgRef}
            className="w-full p-2 h-10 rounded-md text-black"
            required
          />
        </div>
        <div>
          <label htmlFor="userDept" className="block text-sm font-medium  mb-1">
            Department
          </label>
          <input
            type="text"
            id="userDept"
            ref={depRef}
            className="w-full p-2 h-10 rounded-md text-black"
            required
          />
        </div>
        <div>
          <label htmlFor="userYr" className="block text-sm font-medium  mb-1">
            Year
          </label>
          <input
            type="text"
            id="userYr"
            ref={yearRef}
            className="w-full p-2 h-10 rounded-md text-black"
            required
          />
        </div>
        <div>
          <label
            htmlFor="userContact"
            className="block text-sm font-medium  mb-1"
          >
            Mobile
          </label>
          <input
            type="tel"
            id="userContact"
            ref={mobRef}
            className="w-full p-2 h-10 rounded-md text-black"
            required
          />
        </div>
        <div>
          <label
            htmlFor="userEmail"
            className="block text-sm font-medium  mb-1"
          >
            Email-Id
          </label>
          <input
            type="email"
            id="userEmail"
            ref={mailRef}
            className="w-full p-2 h-10 rounded-md text-black"
            required
          />
        </div>
        <div>
          <label
            htmlFor="userPassword"
            className="block text-sm font-medium  mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="userPassword"
            ref={pwdRef}
            className="w-full p-2 h-10 rounded-md text-black"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4 hover:bg-blue-600"
            disabled={loading} // Disable button when loading
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
