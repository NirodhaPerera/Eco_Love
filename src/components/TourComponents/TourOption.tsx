import React, { useState } from "react";
import { CalendarDays, ChevronRight, MapPin } from "lucide-react";

const itineraries = [
  {
    title: "21-Day Adventure Around Sri Lanka",
    days: 21,
    image: "Eco_Love_Tours/Adventure.png", // replace with your image path
    details: [
      "Day 01 - Airport to Bentota - Beach relax - Sunset at Barberyn lighthouse island",
      "Day 02 - Bentota to Galle - Hikkaduwa - Galle Fort - Cooking session",
      "Day 03 - Kanneliya rainforest trek - Cinnamon plantation",
      "Day 04 - Cycling tour - Beach visits - Stay in Dickwella",
      "Day 05 - Beach relax - Stay in Dickwella",
      "Day 06 - Mulkirigala rock temple - Stay in Udawalawe",
      "Day 07 - Safari - Little Adams peak - Stay in Ella",
      "Day 08 - Ella rock - Nine arches bridge",
      "Day 09 - Lipton seat - Adisham bungalow",
      "Day 10 - Gartmore Falls",
      "Day 11 - Grand Adams Peak hike",
      "Day 12 - Waterfalls en route - Nuwara Eliya",
      "Day 13 - Horton Plains - Tea factory - Ramboda - Kandy",
      "Day 14 - Nalanda Gedige - Habarana lake ride - Sigiriya",
      "Day 15 - Pidurangala sunrise - Polonnaruwa village tour",
      "Day 16 - Jaffna Fort - Point Pedro",
      "Day 17 - Delft Island",
      "Day 18 - Casuarina Beach",
      "Day 19 - Mannar Fort - Vankalai Sanctuary",
      "Day 20 - Wilpattu NP safari or ancient city",
      "Day 21 - Airport drop",
    ],
  },
  {
    title: "8-Day Southern Discovery",
    days: 8,
    image: "Eco_Love_Tours/Img-t.png", // replace with your image path
    details: [
      "Day 01 - Airport to Bentota - Madu river - Turtle conservation",
      "Day 02 - Beach relax - Galle Fort",
      "Day 03 - Folk museum - Udawalawe",
      "Day 04 - Safari - Buduruwagala - Ella",
      "Day 05 - Train ride - Gregory Lake - Nuwara Eliya",
      "Day 06 - Ambuluwawa tower - Temple of Tooth - Kandy",
      "Day 07 - Pinnawala Elephant Orphanage - Colombo",
      "Day 08 - Colombo city tour - Airport drop",
    ],
  },
  {
    title: "6-Day Cultural & Nature Escape",
    days: 6,
    image: "Eco_Love_Tours/Img-tm.png",
    details: [
      "Day 01 - Habarana lake night ride - Sigiriya",
      "Day 02 - Pidurangala sunrise - Tea factory - Nuwara Eliya",
      "Day 03 - Train ride - Little Adams Peak - Ella",
      "Day 04 - Ella rock hike - Pallewela waterfall",
      "Day 05 - Safari - Udawalawe",
      "Day 06 - Galle Fort & beaches - Airport drop",
    ],
  },
];

const ItineraryList: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleDetails = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-6 sm:px-10 lg:px-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">Eco Love Tour Itineraries</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">Click an itinerary to view details</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 max-w-7xl mx-auto">
        {itineraries.map((tour, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                isActive ? "h-auto" : "h-[340px]"
              }`}
            >
              <div className="relative">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-60 object-cover"
                />
                <button
                  onClick={() => toggleDetails(index)}
                  className="w-full flex justify-between items-center p-4 bg-white dark:bg-gray-800 z-10"
                >
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{tour.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <CalendarDays size={16} />
                      {tour.days} Days
                    </div>
                  </div>
                  <ChevronRight
                    className={`transition-transform duration-200 text-green-600 ${
                      isActive ? "rotate-90" : ""
                    }`}
                  />
                </button>
              </div>

              {isActive && (
                <div className="p-4 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300 space-y-2 max-h-[300px] overflow-y-auto">
                  <div className="flex items-center gap-2 mb-2 text-gray-500">
                    <MapPin size={16} />
                    {tour.details.length} Stops
                  </div>
                  {tour.details.map((line, i) => (
                    <div key={i} className="pl-3 border-l-4 border-green-500">{line}</div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ItineraryList;
