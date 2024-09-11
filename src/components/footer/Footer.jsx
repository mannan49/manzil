import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="flex justify-center items-center space-x-6">
        {/* Facebook Icon */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={30} className="text-white hover:text-gray-400" />
        </a>

        {/* Instagram Icon */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} className="text-white hover:text-gray-400" />
        </a>

        {/* Twitter Icon */}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} className="text-white hover:text-gray-400" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
