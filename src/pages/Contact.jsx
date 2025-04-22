import HeroSection from "@/components/HeroSection";
import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
// Top of your Contact.jsx file
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    setIsLoading(true); // Start loading
    e.preventDefault();

    emailjs
      .sendForm(
        'service_8a7bgjg',     // Your EmailJS service ID
        'template_hl0sg28',    // Your EmailJS template ID
        form.current,
        'a_7qwpFc7SFYprP-h'    // Your EmailJS public key
      )
      .then(
        (result) => {
          toast.success('Message sent successfully!');
          console.log(result.text);
          setFormData({
            name: '',
            email: '',
            contact: '',
            message: '',
          });
          setIsLoading(false); // Stop loading
        },
        (error) => {
          toast.error('Something went wrong. Please try again!');
          console.error(error.text);
          setIsLoading(false); // Stop loading
        }
      );
  };

  return (
    <div>
      <ToastContainer position="top-center" autoClose={3000} />
      <HeroSection
        titleOne="Contact"
        titleTwo="Us"
        bgImage="src/assets/images (3).jpg"
      />

      <div className="bg-gray-100 py-16 px-4 md:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12">
            <span className="text-black">Have A</span>{" "}
            <span className="text-blue-600">Project?</span>
          </h2>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="text-start">
                <label htmlFor="name" className="text-lg text-gray-800 mb-2">
                  Full Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Contact & Email Fields */}
              <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="flex-1 text-start">
                  <label htmlFor="contact" className="text-lg text-gray-800 mb-2">
                    Contact:
                  </label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex-1 text-start">
                  <label htmlFor="email" className="text-lg text-gray-800 mb-2">
                    Email Address:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="text-start">
                <label htmlFor="message" className="text-lg text-gray-800 mb-2">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full p-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 ${
                  isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
                } text-white text-lg font-semibold rounded-lg shadow-md focus:outline-none`}
              >
                {isLoading ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>

          {/* Location Section */}
          <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold text-gray-900 mb-6">
              Our Location
            </h3>
            <div className="text-lg text-gray-700 mb-4">
              <p><strong>Infinity X Dynamics</strong></p>
              <p>1234 Business Park Road, Suite 100</p>
              <p>City Name, Country</p>
            </div>

            <div className="w-full h-64 mb-4">
              <iframe
                title="Location Map"
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14474.813227534267!2d67.11767758352279!3d24.9080999463666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3391d1a2c1e8f%3A0x9ed540c1e4a38f95!2sBlock%2018%20Gulistan-e-Johar%2C%20Karachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1745316509187!5m2!1sen!2s"
                frameBorder="0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <a
              href="https://maps.app.goo.gl/Q6UXXaUwrz94SBQFA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-semibold hover:underline"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
