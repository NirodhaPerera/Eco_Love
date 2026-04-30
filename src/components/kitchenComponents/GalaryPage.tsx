import React, { useEffect, useState } from "react";

const sliderImages = ['/Eco_Love_Kitchen/slider1.jpeg', '/Eco_Love_Kitchen/slider2.jpeg', '/Eco_Love_Kitchen/slider3.jpeg','/Eco_Love_Kitchen/gallery/img_11.JPG','/Eco_Love_Kitchen/gallery/img_10.JPG'];  
const galleryImages = [
  '/Eco_Love_Kitchen/slider1.jpeg', '/Eco_Love_Kitchen/slider2.jpeg', '/Eco_Love_Kitchen/slider3.jpeg', '/Eco_Love_Kitchen/slider4.jpeg',
  '/Eco_Love_Kitchen/slider5.jpeg', '/Eco_Love_Kitchen/slider6.jpeg', '/Eco_Love_Kitchen/slider7.jpeg',
  '/Eco_Love_Kitchen/about1.jpeg', '/Eco_Love_Kitchen/about2.jpeg', '/Eco_Love_Kitchen/about3.jpeg', '/Eco_Love_Kitchen/about4.jpeg',
  '/Eco_Love_Kitchen/about5.jpeg',
  '/Eco_Love_Kitchen/gallery/img_1.JPG', '/Eco_Love_Kitchen/gallery/img_2.JPG', '/Eco_Love_Kitchen/gallery/img_3.JPG',
 '/Eco_Love_Kitchen/gallery/img_5.JPG', '/Eco_Love_Kitchen/gallery/img_6.JPG',
  '/Eco_Love_Kitchen/gallery/img_7.JPG', '/Eco_Love_Kitchen/gallery/img_8.JPG', '/Eco_Love_Kitchen/gallery/img_9.JPG',
  '/Eco_Love_Kitchen/gallery/img_10.JPG', '/Eco_Love_Kitchen/gallery/img_11.JPG', '/Eco_Love_Kitchen/gallery/img_12.JPG',
  '/Eco_Love_Kitchen/gallery/img_13.JPG', '/Eco_Love_Kitchen/gallery/img_14.JPG', '/Eco_Love_Kitchen/gallery/img_15.JPG',
  // Add more images up to 30...
];

const GalleryPage: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Slider */}
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
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg">
            Step into the heart of Sri Lankan Cuisines


          </h1>
          <p className="text-white text-base sm:text-lg mb-6 max-w-xl drop-shadow-md">
            Discover the vibrant energy of our cooking sessions — where fresh garden ingredients, cultural traditions, and joyful moments come together.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-screen-2xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Moments from the Kitchen
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:gap-6">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(img)}
              className="group relative flex h-48 sm:h-56 md:h-64 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg cursor-pointer"
            >
              <img
                src={img}
                alt={`Gallery Image ${index + 1}`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center transition duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30" />
            </div>
          ))}
        </div>
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center" onClick={() => setSelectedImage(null)}>
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-full max-h-full object-contain rounded-lg shadow-lg transition-transform duration-300"
            onClick={(e) => e.stopPropagation()} // prevent modal close on image click
          />
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold bg-black/50 px-3 py-1 rounded-full"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
