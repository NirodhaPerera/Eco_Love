import React, { useEffect, useState } from "react";
import { FaBed, FaShower, FaWifi, FaUtensils, FaMapMarkerAlt, FaDollarSign, FaClock } from "react-icons/fa";
import StayBookingForm from "./StayBookingForm";

const sliderImages = [
  '/Eco_Love_Lodge/IMG_7153.JPG',
  '/Eco_Love_Lodge/IMG_7140.JPG',
  '/Eco_Love_Lodge/IMG_7141.JPG',
  '/Eco_Love_Lodge/IMG_7144.JPG',
  '/Eco_Love_Lodge/IMG_7142.JPG'
];

const StaysPage: React.FC = () => {
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
            Book Your Stay at The Lodge by Eco Love
          </h1>
          <p className="text-white text-base sm:text-lg mb-6 max-w-xl drop-shadow-md">
            Experience the peace of Galle in our cozy eco-lodge. Fill the form below to reserve your getaway.
          </p>
        </div>
      </div>

      {/* About Section */}
      <section className="max-w-7xl mx-auto -mt-24 z-30 relative px-4 py-6 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-emerald-100">
        <h2 className="text-3xl font-bold text-black mb-8 text-center">About Your Stay</h2>
        <ul className="flex flex-wrap justify-center gap-8">
          <li className="flex flex-col items-center text-center w-36">
            <FaBed className="text-emerald-600 text-3xl mb-2" />
            <span className="text-base font-semibold">Private Lodge</span>
            <span className="text-xs mt-1">Sleeps 2 guests</span>
          </li>
          <li className="flex flex-col items-center text-center w-36">
            <FaShower className="text-emerald-600 text-3xl mb-2" />
            <span className="text-base font-semibold">Private Bathroom</span>
            <span className="text-xs mt-1">Hot & Cold Water</span>
          </li>
          <li className="flex flex-col items-center text-center w-36">
            <FaWifi className="text-emerald-600 text-3xl mb-2" />
            <span className="text-base font-semibold">Free WiFi</span>
            <span className="text-xs mt-1">High-speed Internet</span>
          </li>
          <li className="flex flex-col items-center text-center w-36">
            <FaUtensils className="text-emerald-600 text-3xl mb-2" />
            <span className="text-base font-semibold">Breakfast Included</span>
            <span className="text-xs mt-1">Cooked by locals</span>
          </li>
          <li className="flex flex-col items-center text-center w-36">
            <FaMapMarkerAlt className="text-emerald-600 text-3xl mb-2" />
            <span className="text-base font-semibold">Located in Galle</span>
            <span className="text-xs mt-1">Quiet & Eco-Friendly</span>
          </li>
          <li className="flex flex-col items-center text-center w-36">
            <FaDollarSign className="text-emerald-600 text-3xl mb-2" />
            <span className="text-base font-semibold">$50 / Night</span>
            <span className="text-xs mt-1">2 Guests | $40 for Single Guest</span>
          </li>
          <li className="flex flex-col items-center text-center w-36">
            <FaClock className="text-emerald-600 text-3xl mb-2" />
            <span className="text-base font-semibold">Check-in / Check-out</span>
            <span className="text-xs mt-1">2:00 PM - 11:00 AM</span>
          </li>
        </ul>
      </section>

      {/* Booking Form */}
      <StayBookingForm></StayBookingForm>
    </div>
  );
};

export default StaysPage;
