import React from 'react'
import { CiMail } from 'react-icons/ci'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { IoIosCall } from 'react-icons/io'

const HeroSection = ({titleOne, titleTwo, bgImage}) => {
  return (
    <div className="relative w-screen h-screen overflow-hidden overflow-x-hidden">
   {/* Image with Black Blur Overlay */}
<div className="absolute inset-0">
  <img
    src={bgImage}
    alt="Full Screen"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
</div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className='space-x-5'>
            <span className="text-white text-4xl md:text-6xl font-bold mb-4">{titleOne}</span>
            <span className="text-blue-700 text-4xl md:text-6xl font-bold mb-4">{titleTwo}</span>          
        </h1>
        <p className="text-white text-lg md:text-xl mb-6">
          We bring your digital vision to life
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full text-lg transition duration-300">
          Explore Our Work
        </button>
      </div>

      {/* Social Icons - Right Side */}
      <div className="absolute top-1/2 right-12 transform -translate-y-1/2 flex flex-col space-y-4 text-2xl">
      <div className="border border-white rounded-full p-2">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-300"
        >
          <FaFacebook />
        </a>
      </div>
      <div className="border border-white rounded-full p-2">
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-300"
        >
          <FaTwitter />
        </a>
</div>
<div className="border border-white rounded-full p-2">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-300"
        >
          <FaLinkedin />
        </a>
</div>
<div className="border border-white rounded-full p-2">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-300"
        >
          <FaInstagram />
        </a>
</div>
      </div>

      {/* contact icons - bottom side */}
      <div className="absolute bottom-0 left-12 transform -translate-y-1/2 flex flex-col space-y-3 text-2xl">
      <div className="flex space-x-2">
        <div className="border border-white rounded-full p-2">
        <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-300"
          >
            <CiMail />
          </a>
        </div>
        <div>
          <p className="text-white">info@infinityXdynamic.com</p>
        </div>
      </div>
      <div className="flex space-x-2">
        <div className="border border-white rounded-full p-2">
        <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-300"
          >
            <IoIosCall />
          </a>
        </div>
        <div>
          <p className="text-white"> +92 3128379812</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default HeroSection