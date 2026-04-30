import { Link } from "react-router-dom";
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

const destinations = [
  { name: "Anuradhapura", description: "The epicentre of Sinhalese civilization dating back to 4th century BC", img: "/Eco_Love_Tours/Anuradhapura.jpg", link: "#" },
  { name: "Arugam Bay", description: "Unspoilt beaches and magnificent waves: it’s the ultimate ‘hangout’ for surfers", img: "/Eco_Love_Tours/ArugamBay.jpg", link: "#" },
  { name: "Bentota", description: "Beautiful beaches, watersports and buzzing streets", img: "/Eco_Love_Tours/Bentota.jpg", link: "#" },
  { name: "Colombo", description: "A hotspot full of diverse attractions from malls to markets", img: "/Eco_Love_Tours/Colombo.jpg", link: "#" },
  { name: "Dambulla", description: "The sacred cave temples are the main highlight in Dambulla", img: "/Eco_Love_Tours/Dambulla.jpg", link: "#" },
  { name: "Ella", description: "Majestic waterfalls, caves, and breathtaking vistas", img: "/Eco_Love_Tours/Ella.jpg", link: "#" },
  { name: "Galle", description: "Cultural diversity and colonial charm in the Southern capital", img: "/Eco_Love_Tours/Galle.jpg", link: "#" },
  { name: "Habarana", description: "Strategic gateway to North and East Sri Lanka", img: "/Eco_Love_Tours/Habarana.jpg", link: "#" },
  { name: "Hatton", description: "Colonial legacy and tea plantation lifestyle", img: "/Eco_Love_Tours/Hatton.jpg", link: "#" },
  { name: "Hikkaduwa", description: "Popular beach town for relaxation and parties", img: "/Eco_Love_Tours/Hikkaduwa.jpg", link: "#" },
  { name: "Jaffna", description: "Rich culture and unique landscape in the North", img: "/Eco_Love_Tours/Jaffna.jpg", link: "#" },
  { name: "Kalpitiya", description: "Nature and watersports lovers’ paradise", img: "/Eco_Love_Tours/Kalpitiya.jpg", link: "#" },
  { name: "Kandy", description: "Cultural heart of Sri Lanka with heritage and tradition", img: "/Eco_Love_Tours/Kandy.jpg", link: "#" },
  { name: "Kitulgala", description: "Adventure hotspot: rafting, trekking, caving", img: "/Eco_Love_Tours/Kitulgala.jpg", link: "#" },
  { name: "Mirissa", description: "Charming beach town on the South coast", img: "/Eco_Love_Tours/Mirissa.jpg", link: "#" },
  { name: "Negombo", description: "Golden beaches and colonial heritage", img: "/Eco_Love_Tours/Negombo.jpg", link: "#" },
  { name: "Nuwara Eliya", description: "Mist-covered hills and tea country beauty", img: "/Eco_Love_Tours/Nuwara-Eliya.jpg", link: "#" },
  { name: "Passikudah", description: "Pristine beach ideal for relaxing and snorkeling", img: "/Eco_Love_Tours/Passikudah.jpg", link: "#" },
  { name: "Polonnaruwa", description: "Ancient ruins in the cultural triangle", img: "/Eco_Love_Tours/Polonnaruwa.jpg", link: "#" },
  { name: "Sigiriya", description: "Iconic rock fortress and UNESCO World Heritage Site", img: "/Eco_Love_Tours/Sigiriya.jpg", link: "#" },
  { name: "Sinharaja", description: "UNESCO rainforest rich in biodiversity", img: "/Eco_Love_Tours/Sinharaja.jpg", link: "#" },
  { name: "Tangalle", description: "Turtles, temples and fishing villages", img: "/Eco_Love_Tours/Tangalle.jpg", link: "#" },
  { name: "Trincomalee", description: "Historic port city with stunning beaches", img: "/Eco_Love_Tours/Trincomalee.jpg", link: "#" },
  { name: "Udawalawe", description: "Vast wildlife reserve in the south", img: "/Eco_Love_Tours/udawalawe.jpg", link: "#" },
  { name: "Unawatuna", description: "Relaxed beach with chilled vibes", img: "/Eco_Love_Tours/Unawatuna.jpg", link: "#" },
  { name: "Weligama", description: "Small town with great surf", img: "/Eco_Love_Tours/Waligama.jpg", link: "#" }, 
  { name: "Wellawaya", description: "Scenic rural beauty with waterfalls and paddy fields", img: "/Eco_Love_Tours/Wellawaya.jpg", link: "#" },
  { name: "Wilpattu", description: "Massive national park with diverse wildlife", img: "/Eco_Love_Tours/Wilpattu.jpg", link: "#" },
  { name: "Yala", description: "Sri Lanka’s top safari destination", img: "/Eco_Love_Tours/yala.jpg", link: "#" },
];

const DestinationPage: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = destinations.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(destinations.length / itemsPerPage);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
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
            Diverse Destinations
          </h1>
          <p className="text-white text-base sm:text-lg mb-6 max-w-3xl drop-shadow-md">
            With myriad places to visit, Sri Lanka is a little paradise isle full of surprising variety. From beach to jungle, history to wildlife, your dream escape awaits.
          </p>
        </div>
      </div>

      {/* Destination List */}
      <section className="bg-gradient-to-b from-green-50 to-white dark:from-gray-800 dark:to-gray-900 py-20 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 leading-tight">
            A new treasure awaits wherever you roam
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
            Fortresses, forests, temples, treasures — Magical destinations await.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {currentItems.map((dest, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
                <img src={dest.img} alt={dest.name} className="w-full h-48 object-cover" />
                <div className="bg-white dark:bg-gray-800 p-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{dest.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{dest.description}</p>
                  
                    <Link to={`/eco-love-tours/destinations/${dest.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        <span className="text-green-800 font-semibold hover:underline">View More</span>
                    </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-10 flex justify-center gap-2 flex-wrap">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  currentPage === i + 1
                    ? "bg-green-600 text-white"
                    : "bg-white text-green-600 border border-green-600 hover:bg-green-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationPage;
