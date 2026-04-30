import React, { useEffect, useState } from "react";
import BookingForm from "./BookingForm";
import { FaClock, FaUtensils, FaLeaf, FaGlassCheers, FaGift, FaDollarSign } from "react-icons/fa";

const sliderImages = ['/Eco_Love_Kitchen/slider1.jpeg', '/Eco_Love_Kitchen/slider2.jpeg', '/Eco_Love_Kitchen/slider3.jpeg','/Eco_Love_Kitchen/gallery/img_11.JPG','/Eco_Love_Kitchen/gallery/img_10.JPG'];

const SessionPage: React.FC = () => {
  const [current, setCurrent] = useState(0);

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
            Book Your Session With Eco Love Kitchen
          </h1>
          <p className="text-white text-base sm:text-lg mb-6 max-w-xl drop-shadow-md">
            Reserve your spot for an unforgettable cooking experience! Fill out the form below and we’ll confirm your booking via email and WhatsApp.
          </p>
        </div>
      </div>

      {/* About Section - Floating Up into Hero */}
      <section className="max-w-7xl mx-auto -mt-24 z-30 relative px-4 py-6 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-emerald-100">
        <h2 className="text-3xl font-bold text-black mb-8 text-center">About the Session</h2>
        <ul className="flex flex-wrap justify-center gap-8">
          <li className="flex flex-col items-center text-center w-36">
            <FaLeaf className="text-emerald-600 text-3xl mb-2" />
            <span className="text-base text-gray-800 dark:text-gray-200 font-semibold">Cooking with Locals</span>
            <span className="text-xs text-gray-600 dark:text-gray-400 mt-1">Hands-on Sri Lankan adventure</span>
          </li>
          <li className="flex flex-col items-center text-center w-36">
            <FaClock className="text-emerald-600 text-3xl mb-2" />
            <span className="text-base text-gray-800 dark:text-gray-200 font-semibold">2–3 Hours</span>
            <span className="text-xs text-gray-600 dark:text-gray-400 mt-1">Session Duration</span>
          </li>
          <li className="flex flex-col items-center text-center w-36">
            <FaUtensils className="text-emerald-600 text-3xl mb-2" />
            <span className="text-base text-gray-800 dark:text-gray-200 font-semibold">7 Curry Dishes</span>
            <span className="text-xs text-gray-600 dark:text-gray-400 mt-1">Meat &amp; Fish Included</span>
          </li>
          <li className="flex flex-col items-center text-center w-36">
            <FaGlassCheers className="text-emerald-600 text-3xl mb-2" />
            <span className="text-base text-gray-800 dark:text-gray-200 font-semibold">Welcome Drink</span>
            <span className="text-xs text-gray-600 dark:text-gray-400 mt-1">Hot or Cold</span>
          </li>
          <li className="flex flex-col items-center text-center w-36">
            <span className="text-emerald-600 text-3xl mb-2">🍬</span>
            <span className="text-base text-gray-800 dark:text-gray-200 font-semibold">Sweet Treats</span>
            <span className="text-xs text-gray-600 dark:text-gray-400 mt-1">Sri Lankan Sweets</span>
          </li>
          <li className="flex flex-col items-center text-center w-36">
            <FaGift className="text-emerald-600 text-3xl mb-2" />
            <span className="text-base text-gray-800 dark:text-gray-200 font-semibold">Take Home</span>
            <span className="text-xs text-gray-600 dark:text-gray-400 mt-1">Roasted Curry Powder</span>
          </li>
          <li className="flex flex-col items-center text-center w-36">
            <FaDollarSign className="text-emerald-600 text-3xl mb-2" />
            <span className="text-base text-gray-800 dark:text-gray-200 font-semibold">$25 / Person</span>
            <span className="text-xs text-gray-600 dark:text-gray-400 mt-1">All Inclusive</span>
          </li>
        </ul>
      </section>

      {/* Booking Form */}
      <BookingForm />
    </div>
  );
};

export default SessionPage;
