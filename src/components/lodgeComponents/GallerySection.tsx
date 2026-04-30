import React, { useRef, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import { useNavigate } from "react-router-dom";
import "keen-slider/keen-slider.min.css";

const images = [
  "/Eco_Love_Lodge/img_1.JPG",
  "/Eco_Love_Lodge/IMG_7120.JPG",
  "/Eco_Love_Lodge/IMG_7153.JPG",
  "/Eco_Love_Lodge/IMG_7144.JPG",       
  "/Eco_Love_Lodge/IMG_7130.JPG",
  "/Eco_Love_Lodge/IMG_7131.JPG",
  "/Eco_Love_Lodge/IMG_7132.JPG",
  "/Eco_Love_Lodge/IMG_7133.JPG",

];

const GallerySection: React.FC = () => {
  const navigate = useNavigate();
  const timer = useRef<number | null>(null);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
  });

  // Auto-play logic
  useEffect(() => {
    if (!slider) return;

    const autoPlay = () => {
      if (slider.current) {
        slider.current.next();
      }
    };

    timer.current = setInterval(autoPlay, 3000);

    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [slider]);

  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Lodge Gallery</h2>
        <p className="text-gray-500 dark:text-gray-300 mt-4">
          Take a glimpse into our serene world of comfort and nature.
        </p>
      </div>

      <div ref={sliderRef} className="keen-slider mb-10">
        {images.map((src, index) => (
          <div
            key={index}
            className="keen-slider__slide rounded-2xl overflow-hidden shadow-md"
          >
            <img
              src={src}
              alt={`Eco Love Lodge view ${index + 1}`}
              className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="text-center">
        <button
          onClick={() => navigate("/eco-love-lodge/gallery")}
          className="inline-block px-6 py-3 bg-green-800 text-white rounded-xl font-semibold shadow hover:bg-green-700 transition"
        >
          See More Photos
        </button>
      </div>
    </section>
  );
};

export default GallerySection;
