import React from "react";
import {
  Globe,
  Mountain,
  HeartHandshake,
  Camera,
  Compass,
  Bike,
  Footprints,
} from "lucide-react";

const AboutTour: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-green-50 dark:bg-gray-900 py-20 px-6 sm:px-10 lg:px-20">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-100 dark:bg-green-900 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse -z-10"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* Text Content */}
        <div className="w-full">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6 leading-tight">
            Discover. Connect. Explore.
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
            At <span className="font-semibold text-green-700">Eco Love Tours</span>, we offer more than just trips — we create meaningful journeys that celebrate nature, culture, and connection.
            Whether you're chasing waterfalls, trekking through rainforests, or cooking with local grandmothers, every tour is a doorway into Sri Lanka’s soul.
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
            Our curated experiences are designed for mindful travelers seeking authenticity and adventure. Join us to travel gently, support local communities, and create memories that last a lifetime.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-3">
              <Compass className="text-green-800 w-6 h-6" />
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">Curated Itineraries</p>
                <p className="text-sm text-gray-500">Handpicked tours showcasing hidden gems</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <HeartHandshake className="text-green-800 w-6 h-6" />
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">Local Connections</p>
                <p className="text-sm text-gray-500">Guided by passionate locals and artisans</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mountain className="text-green-800 w-6 h-6" />
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">Nature Adventures</p>
                <p className="text-sm text-gray-500">Waterfalls, wildlife, and coastal treks</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Camera className="text-green-800 w-6 h-6" />
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">Photo Moments</p>
                <p className="text-sm text-gray-500">Instagram-worthy stops with real stories</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Globe className="text-green-800 w-6 h-6" />
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">Eco-Conscious Travel</p>
                <p className="text-sm text-gray-500">Leave only footprints, take only memories</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Bike className="text-green-800 w-6 h-6" />
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">Cycling Tours</p>
                <p className="text-sm text-gray-500">Explore scenic routes on two wheels</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Footprints className="text-green-800 w-6 h-6" />
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">Walking Tours</p>
                <p className="text-sm text-gray-500">Slow down and connect with the land</p>
              </div>
            </div>
          </div>

          <a
            href="/eco-love-tour/tours"
            className="inline-block px-6 py-3 bg-green-800 text-white rounded-xl font-semibold shadow hover:bg-green-700 transition"
          >
            Explore Our Tours
          </a>
        </div>

        {/* Images */}
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="col-span-2">
            <img
              src="/Eco_Love_Tours/Tour_Images/image136.JPG"
              alt="Tour adventure"
              className="w-full h-72 object-cover rounded-2xl shadow-md"
            />
          </div>
          <img
            src="/Eco_Love_Tours/Tour_Images/image119.JPG"
            alt="Nature trek"
            className="w-full h-56 object-cover rounded-2xl shadow-md"
          />
          <img
            src="/Eco_Love_Tours/about_all 2.jpg"
            alt="Local cooking experience"
            className="w-full h-56 object-cover rounded-2xl shadow-md"
          />
          <div className="col-span-2">
            <img
              src="/Eco_Love_Tours/Tour_Images/image7.JPG"
              alt="Happy travelers"
              className="w-full h-64 object-cover rounded-2xl shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTour;
