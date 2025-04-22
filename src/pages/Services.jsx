import HeroSection from '@/components/HeroSection';
import React from 'react';

const Services = () => {
  return (
  <div>
    <div>
      <HeroSection  titleOne="Our" titleTwo="Services" bgImage="src/assets/images (1).jpg"/>
    </div>
    <div>
    <div className="bg-gray-100 py-16 px-4 md:px-10">
      {/* Container for the services section */}
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-semibold text-gray-900 mb-12">Our Services</h2>
        
        {/* Service Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* VFX/CGI Service */}
          <div className="bg-white p-8 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl">
            <img 
              src="/path/to/vfx-image.jpg" 
              alt="VFX/CGI Production"
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">VFX/CGI Production</h3>
            <p className="text-lg text-gray-700 mb-6">
              Our VFX and CGI services bring creative concepts to life, offering high-quality visual effects and immersive digital environments tailored for film, TV, and digital media. From 3D modeling to realistic simulations, we provide innovative solutions that captivate audiences.
            </p>
            <a href="#vfx" className="text-blue-500 font-semibold hover:underline">Learn More</a>
          </div>

          {/* IT Software Solutions Service */}
          <div className="bg-white p-8 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl">
            <img 
              src="/path/to/it-solution-image.jpg" 
              alt="IT Software Solutions"
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">IT Software Solutions</h3>
            <p className="text-lg text-gray-700 mb-6">
              We provide cutting-edge IT software solutions that help businesses scale and optimize operations. From ERP systems to eCommerce platforms and mobile app development, our team ensures tailored solutions that drive efficiency and success in a digital-first world.
            </p>
            <a href="#itsolutions" className="text-blue-500 font-semibold hover:underline">Learn More</a>
          </div>
          
          {/* Additional Service (Example) */}
          <div className="bg-white p-8 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl">
            <img 
              src="/path/to/service3-image.jpg" 
              alt="Additional Service"
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Additional Service</h3>
            <p className="text-lg text-gray-700 mb-6">
              Brief description of another service your company offers. This can be anything like consulting, app development, system integrations, etc. 
            </p>
            <a href="#additionalservice" className="text-blue-500 font-semibold hover:underline">Learn More</a>
          </div>

        </div>
      </div>
    </div>
    </div>
  </div>
  );
};

export default Services;
