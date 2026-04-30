import React, { useEffect, useState } from "react";

const sliderImages = [
  '/Eco_Love_Tours/Tour_Images/image136.JPG',
  '/Eco_Love_Tours/Tour_Images/image119.JPG',
  '/Eco_Love_Tours/Tour_Images/image120.JPG',
  '/Eco_Love_Tours/Tour_Images/image7.JPG',
  '/Eco_Love_Tours/Tour_Images/image136.JPG',
  '/Eco_Love_Tours/Tour_Images/image119.JPG',
  '/Eco_Love_Tours/Tour_Images/image120.JPG',
  '/Eco_Love_Tours/Tour_Images/image175.JPG',
  '/Eco_Love_Tours/Tour_Images/image176.JPG',
];

const galleryImages = Array.from({ length: 100 }, (_, i) => `/Eco_Love_Tours/Tour_Images/image${i + 1}.JPG`);

const GalleryPage: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 20;

  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);
  const paginatedImages = galleryImages.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}, [currentPage]);

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Slider */}
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
            Welcome to Eco Love Lodge
          </h1>
          <p className="text-white text-base sm:text-lg mb-6 max-w-xl drop-shadow-md">
            A tranquil haven surrounded by nature. Experience relaxation, local culture, and unforgettable stays in the heart of Galle, Sri Lanka.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-screen-2xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
          Moments from the Lodge
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:gap-6">
          {paginatedImages.map((img, index) => (
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

        {/* Pagination */}
        <div className="flex justify-center mt-10 gap-2 flex-wrap">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-md border text-sm ${
                currentPage === page
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700"
              } hover:bg-green-100 dark:hover:bg-green-800 transition`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-full max-h-full object-contain rounded-lg shadow-lg transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
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
