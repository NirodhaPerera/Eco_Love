import React from 'react';

const AboutKit: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-white dark:bg-gray-900">
      <div className="flex flex-col md:flex-row items-center gap-12">
        
        {/* Left side: Static Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/Eco_Love_Kitchen/about_all 2.jpg"
            alt="Guests cooking in kitchen"
            className="w-xl h-2xl object-cover rounded-xl shadow-xl"
          />
        </div>

        {/* Right side: Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Experience the Joy of Cooking,
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            <span className="font-semibold text-gray-800 dark:text-white">Eco Love Kitchen</span> is a hands-on culinary experience rooted in Sri Lankan tradition and sustainability.
            From picking herbs in our garden to preparing meals with local chefs, every step is a journey into flavor and culture.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            We celebrate local ingredients, eco-conscious methods, and the power of food to bring people together. Whether you're a curious traveler or a local foodie,
            our workshops and events are designed to delight your senses and nourish your soul.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Join us in creating stories around the table — where nature, community, and culture meet in every dish.
          </p>

          {/* Stats Section */}
          <div className="flex justify-center md:justify-start gap-10 mb-6">
            <div>
              <p className="text-3xl font-bold text-green-700">50+</p>
              <p className="text-sm text-gray-500">Cooking Sessions</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-700">30+</p>
              <p className="text-sm text-gray-500">Local Ingredients</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-700">100%</p>
              <p className="text-sm text-gray-500">Eco-Friendly</p>
            </div>
          </div>

          <button className="mt-4 px-6 py-2 bg-green-800 text-white rounded-lg hover:bg-green-700 transition shadow-md">
            learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutKit;
