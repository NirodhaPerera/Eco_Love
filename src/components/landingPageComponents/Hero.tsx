import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';


const sliderImages = [
  '/Eco_Love_Lodge/img_1.JPG',
  '/Eco_Love_Lodge/IMG_4278.JPG',
  '/Eco_Love_Lodge/IMG_7124.JPG',
  '/Eco_Love_Lodge/IMG_7125.JPG',
  '/Eco_Love_Lodge/IMG_7126.JPG',
  '/Eco_Love_Lodge/IMG_7127.JPG'
];

const Hero: React.FC = () => {



  const [current, setCurrent] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % sliderImages.length);
      }, 4000);
      return () => clearInterval(interval);
    }, []);
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center mb-10">

       <div className="relative w-full h-screen overflow-hidden">
        {sliderImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/30 z-10" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center px-5 sm:px-18 md:px-18 max-w-7xl">
        <motion.section
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <h1 className="text-white text-2xl sm:text-2xl md:text-5xl font-bold mb-4">
            Eco Living, <span className="text-green-800">the Love Way.</span>
          </h1>
          <p className="text-white text-sm sm:block hidden sm:text-balance  md:text-lg">
            Savor the flavors of wholesome cooking, embrace the beauty of mindful travel, and unwind
            in the gentle comfort of eco-conscious living — all under one soulful experience.
          </p>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8"
        >
          <button
            className="bg-green-900 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition duration-300"
            onClick={() => {
              const aboutSection = document.getElementById('about-section');
              aboutSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get Explore
          </button>
        </motion.div>
      </div>
       
      </div>
      {/* Scroll Indicator */}
      <div className="absolute top-1/2 right-6 transform -translate-y-1/2 flex flex-col items-center gap-2 z-10">
        <div className="text-white font-medium text-sm rotate-90 mb-5">Scroll</div>
        <div className="w-1 h-10 bg-white rounded-full animate-pulse"></div>
        <div className="w-1 h-10 bg-white rounded-full animate-pulse"></div>
        <div className="w-1 h-10 bg-white rounded-full animate-pulse"></div>
      </div>

      {/* Floating Icons and Animations */}
     
     

      {/* Center Content */}
    
    </div>
  )
}

export default Hero
