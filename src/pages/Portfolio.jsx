import HeroSection from '@/components/HeroSection';
import React from 'react';

const portfolioData = [
    {
        id:1,
        title: "title 01",
        description: "lorem",
        image: "abc",
        viewButon: "abc" 
    },
    {
        id:1,
        title: "title 01",
        description: "lorem",
        image: "abc",
        viewButon: "abc" 
    },
    {
        id:1,
        title: "title 01",
        description: "lorem",
        image: "abc",
        viewButon: "abc" 
    },
    {
        id:1,
        title: "title 01",
        description: "lorem",
        image: "abc",
        viewButon: "abc" 
    },
    {
        id:1,
        title: "title 01",
        description: "lorem",
        image: "abc",
        viewButon: "abc" 
    },
    {
        id:1,
        title: "title 01",
        description: "lorem",
        image: "abc",
        viewButon: "abc" 
    },
    {
        id:1,
        title: "title 01",
        description: "lorem",
        image: "abc",
        viewButon: "abc" 
    },
]

const Portfolio = () => {
  return (
    <div>
      <div>
        <HeroSection titleOne="Our" titleTwo="Clients" bgImage=""/>
      </div>
      <div>
      <div className="bg-gray-100 py-16 px-4 md:px-10">
      {/* Container for the portfolio section */}
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-semibold text-gray-900 mb-12">Our Portfolio</h2>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          
          {/* Portfolio Item 1 */}
          {
            portfolioData.map((items,index)=>(
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl">
            <img 
              src="/path/to/project1-image.jpg" 
              alt="Project 1"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{items.title}</h3>
              <p className="text-lg text-gray-700 mb-4">
               {items.description}
              </p>
              <a href="#project1" className="text-blue-500 font-semibold hover:underline">{items.viewButon}</a>
            </div>
          </div>
            ))
          }

          {/* Portfolio Item 2 */}
          {/* <div className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl">
            <img 
              src="/path/to/project2-image.jpg" 
              alt="Project 2"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Project Title 2</h3>
              <p className="text-lg text-gray-700 mb-4">
                Brief description of the project. Highlight key features and the impact it had on the client’s business.
              </p>
              <a href="#project2" className="text-blue-500 font-semibold hover:underline">View Case Study</a>
            </div>
          </div> */}

          {/* Portfolio Item 3 */}
          {/* <div className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl">
            <img 
              src="/path/to/project3-image.jpg" 
              alt="Project 3"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Project Title 3</h3>
              <p className="text-lg text-gray-700 mb-4">
                Brief description of the project. Discuss the challenges faced and how your team overcame them.
              </p>
              <a href="#project3" className="text-blue-500 font-semibold hover:underline">View Case Study</a>
            </div>
          </div> */}

          {/* Additional Portfolio Item 4 (Optional) */}
          {/* <div className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl">
            <img 
              src="/path/to/project4-image.jpg" 
              alt="Project 4"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Project Title 4</h3>
              <p className="text-lg text-gray-700 mb-4">
                Short description highlighting the value this project brought to the client. Focus on results.
              </p>
              <a href="#project4" className="text-blue-500 font-semibold hover:underline">View Case Study</a>
            </div>
          </div> */}

        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Portfolio;
