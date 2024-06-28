import { useState } from "react";
import { CiMail } from "react-icons/ci";
import { CiMobile1 } from "react-icons/ci";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = () => {
    const subject = encodeURIComponent(`Message from ${name} (${number})`);
    const body = encodeURIComponent(message);
    const mailtoLink = `mailto:mathtrainerkarthik@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col md:flex-row relative">
      {/* Left Section with Google Map */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-6">
        <h2 className="text-2xl font-bold text-center mb-4">
          Contact Information
        </h2>
        <div className="w-full md:w-3/4 space-y-6">
          <p className="text-lg text-center flex items-center gap-4">
            <CiMobile1 size={35} /> +91-8220202457
          </p>
          <p className="text-lg text-center flex items-center gap-4">
            <CiMail size={35} /> mathtrainerkarthik@gmail.com
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126744.33385201912!2d80.2098992!3d13.0495805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52662463a93f3b%3A0xb6e6b45cb39afc9e!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1688810396539!5m2!1sen!2sus"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
            className="rounded-lg border border-gray-300"
          ></iframe>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center space-y-12 items-center w-full md:w-1/2 p-6">
        <h2 className="text-2xl font-bold text-center flex items-center gap-4 mb-4">
          <CiMail size={35} /> Mail Us
        </h2>
        <input
          className="w-full md:w-3/4 p-2 h-12 rounded-md text-black mb-2 border-2 border-gray-300"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full md:w-3/4 p-2 h-12 border-2 border-gray-300 rounded-md text-black mb-4"
          placeholder="Your Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <textarea
          className="w-full md:w-3/4 p-2 h-48 rounded-md text-black mb-2 border-2 border-gray-300"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="w-full md:w-3/4 px-4 py-2 bg-blue-500 text-white rounded-md mt-2 hover:bg-blue-600"
          onClick={handleSendEmail}
        >
          Send
        </button>
      </div>

      {/* Social Media Links */}
      <div className="absolute bottom-0 left-0 right-0 w-full py-4 flex justify-center">
        Follow us on :
        <a href="#" target="_blank" rel="noopener noreferrer" className="mx-4">
          <FaFacebookF
            size={25}
            className="text-blue-600 hover:text-blue-800"
          />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="mx-4">
          <FaTwitter size={25} className="text-blue-400 hover:text-blue-600" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="mx-4">
          <FaInstagram
            size={25}
            className="text-pink-500 hover:text-pink-700"
          />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="mx-4">
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
