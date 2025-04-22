import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import HeroSection from "@/components/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection titleOne="Explore" titleTwo="Home" bgImage="src/assets/images.jpg"/>
    </div>

    //   <div className="min-h-screen bg-gradient-to-b from-[#e5f1f9] to-white text-[#191d2a] font-sans flex flex-col">
    //   {/* Header/Navbar */}
    //   <header className="w-full bg-[#191d2a] px-6 sm:px-12 py-2 flex items-center justify-between">
    //     <img src="" alt="Ice Animations Logo" className="h-10 sm:h-14" />
    //     <nav className="flex-1 flex justify-center hidden md:flex">
    //       <ul className="flex space-x-7 text-white text-sm font-medium">
    //         <li className="hover:text-[#299cf3] transition">ABOUT US</li>
    //         <li className="hover:text-[#299cf3] transition">OUR WORK</li>
    //         <li className="hover:text-[#299cf3] transition">OUR SERVICES</li>
    //         <li className="hover:text-[#299cf3] transition">OUR CLIENTS</li>
    //         <li className="hover:text-[#299cf3] transition">AWARDS</li>
    //         <li className="hover:text-[#299cf3] transition">CAREER</li>
    //         <li className="hover:text-[#299cf3] transition">CONTACT US</li>
    //       </ul>
    //     </nav>
    //     <button className="bg-[#299cf3] text-white font-semibold rounded-full px-5 py-2 ml-4 hover:bg-[#217dc4] transition hidden sm:block">LET'S TALK</button>
    //   </header>

    //   {/* Hero Section */}
    //   <section className="flex flex-col md:flex-row px-6 sm:px-12 mt-8 md:mt-16 items-center gap-10 md:gap-16">
    //     <motion.div
    //       initial={{ opacity: 0, y: 50 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.8 }}
    //       className="flex-1 flex flex-col items-start justify-center"
    //     >
    //       <h1
    //         className="uppercase text-3xl sm:text-5xl font-bold text-[#a0bcfa] tracking-tight leading-tight mb-3 select-none"
    //         style={{ WebkitTextStroke: "1px #299cf3", color: "transparent" }}
    //       >
    //         CARTOON
    //       </h1>
    //       <h2 className="uppercase text-3xl sm:text-5xl font-extrabold text-[#299cf3] tracking-tight leading-tight mb-5 select-none">
    //         ANIMATION
    //       </h2>
    //       <div className="flex gap-3 mb-7">
    //         <button className="bg-[#299cf3] text-white px-5 py-2 rounded-full font-medium shadow hover:bg-[#217dc4] transition">
    //           Get Started
    //         </button>
    //         <button className="bg-black text-white px-5 py-2 rounded-full font-medium shadow hover:opacity-90 transition">
    //           View Portfolio
    //         </button>
    //       </div>
    //       <p className="text-[#191d2a] text-lg mb-1 font-semibold">
    //         WELCOME TO <span className="text-[#299cf3]">ICE ANIMATIONS</span>,
    //       </p>
    //       <p className="text-[1.35rem] font-bold mb-2 max-w-lg">
    //         THE <span className="text-[#299cf3]">LARGEST</span>{" "}
    //         <span className="text-[#98493f]">VFX</span>{" "}
    //         <span className="text-[#299cf3]">AND ANIMATION HOUSE</span> IN
    //         PAKISTAN!
    //       </p>
    //       <p className="max-w-xl text-[#444] mb-4">
    //         With its decade of experience, we are proud to showcase our work for
    //         several prestigious national and international clients. Our vision
    //         is to bring amazing imagination and creativity to your screens.
    //       </p>
    //       <button className="bg-[#299cf3] text-white rounded-full px-6 py-2 hover:bg-[#217dc4] font-semibold transition">
    //         Read More
    //       </button>
    //     </motion.div>
    //     <motion.div
    //       initial={{ opacity: 0, y: -50 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.8, delay: 0.3 }}
    //       className="flex-1 flex items-center justify-center relative"
    //     >
    //       <img
    //         src="https://ext.same-assets.com/2445439657/2319752637.webp"
    //         alt="Superhero"
    //         className="max-w-xs md:max-w-md rounded-2xl shadow-xl"
    //       />
    //     </motion.div>
    //   </section>
    // </div>
  );
};

export default Home;
