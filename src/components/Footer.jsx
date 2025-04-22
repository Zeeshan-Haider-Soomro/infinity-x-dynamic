import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-8">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        {/* Logo Section */}
        <div className="flex justify-center">
          {/* <img
            src={logo} // Replace with the actual path to your logo image
            alt="Infinity X Dynamics Logo"
            className="h-12"
          /> */}
        </div>

        {/* Navigation Links */}
        <div className="space-x-8 text-white">
          <a href="#home" className="hover:text-purple-300 font-semibold">
            Home
          </a>
          <a href="#about" className="hover:text-purple-300 font-semibold">
            About Us
          </a>
          <a href="#services" className="hover:text-purple-300 font-semibold">
            Services
          </a>
          <a href="#portfolio" className="hover:text-purple-300 font-semibold">
            Portfolio
          </a>
          <a href="#team" className="hover:text-purple-300 font-semibold">
            Team
          </a>
          <a href="#contact" className="hover:text-purple-300 font-semibold">
            Contact Us
          </a>
          <a href="#contact" className="hover:text-purple-300 font-semibold">
            Clients 
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 text-2xl">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-300">
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-300">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-300">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-300">
            <FaInstagram />
          </a>
        </div>

        {/* Copyright Section */}
        <p className="text-sm text-gray-300 mt-4">© 2025 Infinity X Dynamics. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
