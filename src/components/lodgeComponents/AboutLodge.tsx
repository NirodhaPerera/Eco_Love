import React from "react";
import { Leaf, Home, Star, Utensils, Bike } from "lucide-react";

const AboutLodge: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-green-50 dark:bg-gray-900 py-20 px-6 sm:px-10 lg:px-20">
      {/* Decorative background shape */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-100 dark:bg-green-900 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse -z-10"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* Modern Image Collage Section */}
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="col-span-2">
            <img
              src="/Eco_Love_Lodge/IMG_7153.JPG"
              alt="Lodge main view"
              className="w-full h-72 object-cover rounded-2xl shadow-md"
            />
          </div>
          <img
            src="/Eco_Love_Lodge/img_3.JPG"
            alt="Delicious local breakfast"
            className="w-full h-56 object-cover rounded-2xl shadow-md"
          />
          <img
            src="/Eco_Love_Lodge/IMG_7973.jpg"
            alt="Bicycles for exploring"
            className="w-full h-56 object-cover rounded-2xl shadow-md"
          />
          <div className="col-span-2">
            <img
              src="/Eco_Love_Lodge/IMG_7140.JPG"
              alt="Private eco-designed interior"
              className="w-full h-64 object-cover rounded-2xl shadow-md"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6 leading-tight">
            Escape. Relax. Reconnect.
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
            Tucked away in the lush landscapes of Sri Lanka’s southern coast, <span className="font-semibold text-green-700">Eco Love Lodge</span> invites you to unwind in style and comfort.
            Designed for the conscious traveler, our lodge blends rustic charm with modern sustainability.
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
            Wake up to birdsong and enjoy a complimentary breakfast — choose from authentic <em>Sri Lankan favorites</em> like string hoppers and sambol, or a comforting <em>English breakfast</em> with toast, eggs, and freshly brewed tea or coffee.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-3">
              <Home className="text-green-600 w-6 h-6" />
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">Private Cabins</p>
                <p className="text-sm text-gray-500">Eco-designed spaces with authentic local style</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Leaf className="text-green-600 w-6 h-6" />
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">Sustainable Living</p>
                <p className="text-sm text-gray-500">Built with natural materials and eco practices</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Utensils className="text-green-600 w-6 h-6" />
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">Delightful Breakfasts</p>
                <p className="text-sm text-gray-500">Sri Lankan and English options included</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Bike className="text-green-600 w-6 h-6" />
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">Complimentary Cycles</p>
                <p className="text-sm text-gray-500">Explore the scenic surroundings on two wheels</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Star className="text-green-600 w-6 h-6" />
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">Global Reviews</p>
                <p className="text-sm text-gray-500">5-star guest feedback from around the world</p>
              </div>
            </div>
          </div>

          <a
            href="/eco-love-lodge/booking"
            className="inline-block px-6 py-3 bg-green-800 text-white rounded-xl font-semibold shadow hover:bg-green-800 transition"
          >
            Book Your Stay
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutLodge;
