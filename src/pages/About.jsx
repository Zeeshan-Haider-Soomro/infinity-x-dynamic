import HeroSection from '@/components/HeroSection';
import React from 'react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection titleOne="About" titleTwo="Us" bgImage="src/assets/images (2).jpg" />

      {/* Main Section with Background */}
      <div className="relative w-full">
        {/* Background Image */}
        <img
          src="src/assets/about.png"
          alt="About Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* All Content */}
        <div className="relative z-10 py-20 px-4 text-black">
          {/* CEO Message */}
          <div className="flex flex-col items-center justify-center text-center space-y-12 mb-20 max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold">
              CEO's <span className="text-blue-700">Message</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-10 items-center text-left">
              {/* Text */}
              <div className="md:w-2/3 space-y-4">
                <p className="text-lg leading-relaxed">
                  At ICE Animations, we believe in the global impact of animation services.
                  Over the past 15 years, we've diligently sourced the right talent,
                  fostering a skillset that empowers us to compete successfully on the world stage.
                  <br /><br />
                  Our commitment to excellence drives our journey into the future of animation.
                </p>
                <p className="font-semibold">— CEO, <span className="text-blue-700">JahanZaib Akram</span></p>
              </div>
              {/* Image */}
              <div className="md:w-1/3">
                <img
                  src="src/assets/ceo.jpg"
                  alt="CEO"
                  className="rounded-xl shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* What We Do Section */}
          <section className="text-center max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              What We Do
            </h2>
            <p className="text-gray-800 text-lg mb-12">
              Since 2008, ICE Animations has been a pioneer in the animation industry.
              Over the years, our dedication and creativity have earned us numerous
              prestigious awards, showcasing our commitment to excellence.
            </p>

            {/* Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((_, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl border border-gray-300 bg-white bg-opacity-90 shadow-md hover:bg-blue-100 transition duration-300 group"
                >
                  <h3 className="text-4xl font-bold text-black group-hover:text-blue-600 transition mb-2">
                    7+
                  </h3>
                  <p className="text-gray-700 text-lg">awards won</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        {/* location section */}
        <div className="relative w-full">
  {/* Background Image */}
  <img
    src="src/assets/worldMap.jpg"
    alt="Map Background"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

  {/* Content Layer */}
  <div className="relative z-10 py-20 px-4 text-black">
    {/* Heading */}
    <div className="text-center mb-12">
      <h1 className="text-3xl md:text-4xl font-bold">
        Infinity X Dynamic - <span className="text-blue-700">Location</span>
      </h1>
    </div>

    {/* Locations Grid */}
    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {/* Location Box */}
      <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-md text-center transition-all duration-300 border border-transparent hover:border-blue-500">
        <img
          src="src/assets/pakistan-flag.png"
          alt="Pakistan Flag"
          className="w-12 h-8 mx-auto mb-4 object-cover rounded"
        />
        <h2 className="text-xl font-semibold mb-1">Karachi</h2>
        <p className="text-gray-700">Pakistan Office</p>
      </div>

      {/* Duplicate more boxes if needed */}
      <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-md text-center transition-all duration-300 border border-transparent hover:border-blue-500">
        <img
          src="src/assets/uae-flag.png"
          alt="UAE Flag"
          className="w-12 h-8 mx-auto mb-4 object-cover rounded"
        />
        <h2 className="text-xl font-semibold mb-1">Dubai</h2>
        <p className="text-gray-700">UAE Office</p>
      </div>

      <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-md text-center transition-all duration-300 border border-transparent hover:border-blue-500">
        <img
          src="src/assets/uk-flag.png"
          alt="UK Flag"
          className="w-12 h-8 mx-auto mb-4 object-cover rounded"
        />
        <h2 className="text-xl font-semibold mb-1">London</h2>
        <p className="text-gray-700">UK Office</p>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default About;
