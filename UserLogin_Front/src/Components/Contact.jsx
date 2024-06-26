import { useState } from "react";
import Registration from "./Registration";
import { CiMail } from "react-icons/ci";
import { IoLocation } from "react-icons/io5";
import { CiMobile1 } from "react-icons/ci";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  // const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = () => {
    const subject = encodeURIComponent(`Message from ${name}`);
    // const subject = encodeURIComponent(`Message from ${name} (${number})`);
    const body = encodeURIComponent(message);
    const mailtoLink = `mailto:mathtrainerkarthik@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col md:flex-row relative">
      {/* Left Section */}
      <div className="flex flex-col justify-center space-y-6 items-center w-full md:w-1/2 p-6">
        <h2 className="text-2xl font-bold text-center mb-4">
          Contact Information
        </h2>
        <p className="text-lg text-center flex items-center gap-4">
          <CiMobile1 size={35} /> +91-8220202457
        </p>
        <p className="text-lg text-center mb-4 flex items-center gap-4">
          <IoLocation size={40} />123, Xyz street, <br />
          Abc, <br />
          Chennai
        </p>
        <h2 className="text-2xl font-bold text-center flex items-center gap-4 mb-4">
          <CiMail size={35} /> Mail Us
        </h2>
        <input
          className="w-full max-w-xs p-2 h-10 rounded-md text-black mb-2"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className="w-full max-w-xs p-2 h-32 rounded-md text-black mb-2"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="w-full max-w-xs px-4 py-2 bg-blue-500 text-white rounded-md mt-2 hover:bg-blue-600"
          onClick={handleSendEmail}
        >
          Send
        </button>
      </div>

      {/* Right Section */}
      <div className="flex justify-center items-center w-full md:w-1/2 p-6">
        <Registration />
      </div>

      {/* Social Media Links */}
      <div className="absolute bottom-0 left-0 right-0 w-full py-4 flex justify-center">
        Follow us on :
        <a href="" target="_blank" rel="noopener noreferrer" className="mx-4">
          <FaFacebookF
            size={25}
            className="text-blue-600 hover:text-blue-800"
          />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer" className="mx-4">
          <FaTwitter size={25} className="text-blue-400 hover:text-blue-600" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer" className="mx-4">
          <FaInstagram
            size={25}
            className="text-pink-500 hover:text-pink-700"
          />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer" className="mx-4">
          <FaLinkedinIn
            size={25}
            className="text-blue-700 hover:text-blue-900"
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
