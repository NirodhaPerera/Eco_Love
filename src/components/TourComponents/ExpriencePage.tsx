import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const sliderImages = [
  "/Eco_Love_Tours/Tour_Images/image136.JPG",
  "/Eco_Love_Tours/Tour_Images/image119.JPG",
  "/Eco_Love_Tours/Tour_Images/image7.JPG",
  "/Eco_Love_Tours/Tour_Images/image175.JPG",
];


const experiences = [
  {
    title: "Traditional Jewelry Workshop",
    image: "/Eco_Love_Tours/Jewellry /image50.JPG",
    slug: "jewelry-workshop",
    description: "Craft your own unique jewelry with local artisans using traditional Sri Lankan methods.",
  },
  {
    title: "Traditional Cookery Session",
    image: "/Eco_Love_Tours/coockery/slider5.jpeg",
    slug: "cookery-session",
    description: "Learn to cook authentic Sri Lankan dishes with hands-on guidance from local chefs.",
  },
  {
    title: "Wood Carving",
    image: "/Eco_Love_Tours/wood carving/image1.avif",
    slug: "wood-carving",
    description: "Explore the ancient art of wood carving with master craftsmen in a serene setting.",
  },
  {
    title: "Cycling Tours",
    image: "/Eco_Love_Tours/cycling/image5.jpg",
    slug: "cycling-tours",
    description: "Ride through scenic routes and local villages on guided eco-friendly cycling tours.",
  },
  
  {
    title: "Walking Tours",
    image: "/public/Eco_Love_Tours/Walking Tours Images/image4.JPG",
    slug: "walking-tours",
    description: "Join a relaxed walking tour through culturally rich towns and natural landscapes.",
  },
   {
    title: "Wildlife Safari",
    image: "/public/Eco_Love_Tours/safari/image8.JPG",
    slug: "wildlife-safari",
    description: "Embark on an unforgettable safari adventure to witness Sri Lanka's incredible wildlife in their natural habitat.",
  },{
    title: "Traditional Handloom Factory",
    image: "/public/Eco_Love_Tours/handloom/image16.JPG",
    slug: "traditional-handloom-factory",
    description: "Experience the intricate process of handloom weaving and create your own textile masterpiece.",
  },
];

const ExperiencePage: React.FC = () => {

    const [current, setCurrent] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrent((prev) => (prev + 1) % sliderImages.length);
        }, 4000);
        return () => clearInterval(interval);
      }, []);
    
  return (
    <section className="bg-gradient-to-b from-green-50 dark:bg-gray-900 text-gray-800 dark:text-white">

        <div className="relative h-screen w-full overflow-hidden">
        {sliderImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/50 z-10" />
       <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Discover Authentic Sri Lankan Experiences
            </h1>
            <p className="text-lg text-white max-w-2xl mb-6">
                Dive deep into culture, craft, and connection—choose a curated experience or create your own adventure.
            </p>
            </div>
        </div>
      <div className="max-w-7xl mx-auto">
        <h1 className="py-16 px-6 text-4xl font-bold text-center mb-10">Our Authentic Experiences</h1>
     
        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-green-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-[1.02]"
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{exp.title}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
                <Link
                  to={`/eco-love-tours/experiences/${exp.slug}`}
                  className="inline-block text-green-700 dark:text-green-400 font-semibold hover:underline"
                >
                  See More Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
