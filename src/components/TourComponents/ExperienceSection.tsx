import React from "react";
import { Link } from "react-router-dom";

const experiences = [
  {
    title: "Traditional Jewelry Workshop",
    image: "/Eco_Love_Tours/Jewellry /image50.JPG",
   
  },
  {
    title: "Traditional Cookery Session",
    image: "/Eco_Love_Tours/coockery/slider5.jpeg",
   
  },
  {
    title: "Wood Carving",
    image: "/Eco_Love_Tours/wood carving/image1.avif",
   
  },
  {
    title: "Cycling Tours",
    image: "/Eco_Love_Tours/cycling/image5.jpg",
   
  },
  
  {
    title: "Walking Tours",
    image: "/public/Eco_Love_Tours/Walking Tours Images/image4.JPG",
   
  },
   {
    title: "Wildlife Safari",
    image: "/public/Eco_Love_Tours/safari/image8.JPG",
   
  },{
    title: "Traditional Handloom Factory",
    image: "/public/Eco_Love_Tours/handloom/image16.JPG",
    
  },
];

const AuthenticExperiences: React.FC = () => {
  return (
    <section
      className="py-16 px-6 bg-green-50 dark:bg-gray-900 text-gray-800 dark:text-white"
      id="authentic-experiences"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Authentic Experiences</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Immerse yourself in Sri Lanka’s traditions with our handpicked, real-life experiences.
        </p>

        {/* See All Button */}
        <div className="mb-12">
          <Link
            to="/eco-love-tours/experiences"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full shadow transition"
          >
            See All Experiences
          </Link>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-800"
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-50 transition duration-300">
                <h3 className="text-green-100 text-xl font-semibold mb-2">
                  {exp.title}
                </h3>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthenticExperiences;
