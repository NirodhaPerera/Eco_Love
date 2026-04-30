import React from 'react';
import { Link } from 'react-router-dom';
import { BedDouble, Leaf, Sunrise, Star } from 'lucide-react';

const StaySection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-white dark:from-gray-800 dark:to-gray-900 py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white mb-6">
          Your Peaceful Getaway Awaits
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
          Experience tranquil stays in the heart of Sri Lanka’s lush southern coast. Eco Love Lodge offers a perfect balance of comfort, sustainability, and soulful nature.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="flex flex-col items-center">
            <BedDouble className="w-10 h-10 text-green-600 mb-2" />
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Cozy Stays</h4>
            <p className="text-sm text-gray-500">Relax in handcrafted eco-cabins</p>
          </div>
          <div className="flex flex-col items-center">
            <Leaf className="w-10 h-10 text-green-600 mb-2" />
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Eco Friendly</h4>
            <p className="text-sm text-gray-500">Live harmoniously with nature</p>
          </div>
          <div className="flex flex-col items-center">
            <Sunrise className="w-10 h-10 text-green-600 mb-2" />
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Scenic Views</h4>
            <p className="text-sm text-gray-500">Wake up to tropical sounds</p>
          </div>
          <div className="flex flex-col items-center">
            <Star className="w-10 h-10 text-green-600 mb-2" />
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Top Rated</h4>
            <p className="text-sm text-gray-500">5-star hospitality experience</p>
          </div>
        </div>

        {/* Call to Action */}
        <Link
          to="/eco-love-lodge/booking"
          className="inline-block bg-green-800 text-white px-8 py-3 rounded-xl font-medium shadow hover:bg-green-700 transition"
        >
          Book Your Stay
        </Link>
      </div>
    </section>
  );
};

export default StaySection;
