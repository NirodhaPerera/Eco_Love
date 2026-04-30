import React from "react";

const destinations = [
  {
    name: "Galle",
    description: "Colonial charm meets coastal bliss",
    img: "/Eco_Love_Tours/Galle.jpg",
    link: "/eco-love-tour/destinations/galle",
  },
  {
    name: "Ella",
    description: "Lush hills and breathtaking views",
    img: "/Eco_Love_Tours/Ella.jpg",
    link: "/eco-love-tour/destinations/ella",
  },
  {
    name: "Sigiriya",
    description: "The Lion Rock fortress of legends",
    img: "/Eco_Love_Tours/Sigiriya.jpg",
    link: "/eco-love-tour/destinations/sigiriya",
  },
  {
    name: "Kandy",
    description: "Temple of the Sacred Tooth & cultural soul",
    img: "/Eco_Love_Tours/Kandy.jpg",
    link: "/eco-love-tour/destinations/kandy",
  },
  {
    name: "Anuradhapura",
    description: "The ancient heart of Sri Lanka",
    img: "/Eco_Love_Tours/Anuradhapura.jpg",
    link: "/eco-love-tour/destinations/anuradhapura",
  },
  {
    name: "Nuwara Eliya",
    description: "Mist-covered hills and tea estates",
    img: "/Eco_Love_Tours/Nuwara-Eliya.jpg",
    link: "/eco-love-tour/destinations/nuwara-eliya",
  },
];

const DestinationsShowcase: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white dark:from-gray-800 dark:to-gray-900 py-20 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 leading-tight">
          A land of places like no other
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
          Fortresses, forests, temples, treasures — Magical destinations await.
        </p>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <img
                src={dest.img}
                alt={dest.name}
                className="w-full h-48 object-cover"
              />
              <div className="bg-white dark:bg-gray-800 p-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {dest.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {dest.description}
                </p>
                <a
                  href={dest.link}
                  className="text-green-800 font-semibold hover:underline"
                >
                  View More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <a
            href="/eco-love-tour/destinations"
            className="inline-block px-6 py-3 bg-green-800 text-white rounded-full font-semibold shadow hover:bg-green-700 transition"
          >
            View All Destinations
          </a>
        </div>
      </div>
    </section>
  );
};

export default DestinationsShowcase;
