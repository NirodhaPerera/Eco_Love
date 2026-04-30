import React, { useState } from "react";
import { Star } from "lucide-react";
import LottieAnimationReview from "../LottieAnimationReview";

const testimonials = [
  {
    id: 1,
    name: "Jip - Netherlands",
    role: "Lodge Guest",
    text: "The Lodge is very well made. Malik and his family are very welcoming. The breakfast provided is amazing. The location is very good, in a quiet area, close to Galle Fort. You can even borrow some bicycles. Malik also provides very good tours around Galle Fort - definitely a recommendation!",
    rating: 5,
  },
  {
    id: 2,
    name: "Martyn - United Kingdom",
    role: "Lodge Guest",
    text: "This was a gem of a find for me. First time to Sri Lanka and there was trepidation on my part about the trip. However Malik the owner and his family made it so easy for me. The accommodation is a clean, modern and comfortable bungalow set in the garden of the family home. The accommodation is 10 minutes from the centre of Galle but in a quiet location. An ideal location for trips to the beaches, Galle fort and other local attractions. Malik and his family are so helpful, nothing too much trouble. The home cooking, breakfast and dinner is delicious and they offer traditional cookery lessons in their home kitchen. Malik even sorted my transport from the airport to the accommodation and also had a SIM card sorted for me. Local transport to and from the bungalow is so easy to arrange, I used the pick me up app. I fully recommend this accommodation. Enjoy.",
    rating: 5,
  },
  {
    id: 3,
    name: "Nele - Germany",
    role: "Lodge Guest",
    text: "The lodge gave me “arriving at home” vibes. The host just opened that place near to his house. All details are very well selected, it starts with a nice lemon grass smell, over slippers/wonderful soap etc and ends with the most comfortable bed I have ever slept in. You can close all windows so in the night, if you wish, everything can be very dark - since this is very special for Asian countries, i should point that out. I had a delicious breakfast and I also booked a cooking class with the host mom, which was so delicious and interesting for me. I look forward to come back to this amazing place.",
    rating: 5,
  },
  {
    id: 4,
    name: "Leslie - Germany",
    role: "Lodge Guest",
    text: "I loved my time at the lodge. The accommodation is run by a family and has been opened just some weeks ago. Not only does it look really beautiful and stilish, every little detail has been planned with love. There is a warm shower with good water pressure, the bed is incredibly comfortable and the food prepared by the mother is simply delicious! I did a cooking class with her and Malik gave me a tour of Galle. The center is not far away and the way to get there is fantastic! You are on your own in the lodge and have plenty of peace and privacy, but the family always welcomes you and ensures you have an unforgettable time. I will definitely come back and stay longer!.",
    rating: 5,
  },
  {
    id: 5,
    name: "Julia - Germany",
    role: "Lodge Guest",
    text: "Meine Tochter und ich haben 3 Nächte in der Lodge übernachtet und haben es geliebt. Mal abgesehen davon, dass es uns in der Lodge an nichts gefehlt hat, haben wir Malik und seine Familie sehr ins Herz geschlossen. Alle waren so warmherzig und gastfreundlich, es fühlte sich beinahe an, Teil der Familie zu sein. Wenn ihr etwas Besonderes mit ganz viel Herz sucht, solltet ihr unbedingt in der Lodge übernachten.",
    rating: 5,
  },
  {
    id: 6,
    name: "Garvey - China",
    role: "Lodge Guest",
    text: "It is very convenient to go to the castle, and the landlord provides bicycles. The service is very good, providing dinner and breakfast, as well as unlimited free beer and frozen sparkling water. There is a refrigerator. Since there is only one room, you can experience all aspects of the service attached to you.",
    rating: 5,
  },
  {
    id: 7,
    name: "Claudia - Austria",
    role: "Lodge Guest",
    text: "We arrived, were warmly welcomed and were shown our room. It is beautiful, very big and modern. The bathroom is also modern, new and very clean. The bed is very comfortable! We felt right at home. The family lives in the building next door and no matter what questions we had, we were helped right away. The breakfast is very good, either traditional or English. We were also able to rent bikes and cycle through the rice fields. We also had a cooking class with the house manager and we were suggested many other activities that can be organized.A clear recommendation for Galle, if you want to stay a bit quieter and out of the way, but is right in the city by bus or TukTuk.",
    rating: 5,
  },
  {
    id: 8,
    name: "Alice - Germany",
    role: "Lodge Guest",
    text: "The lodge is beautiful and quietly located near Galle fort. The design is magical and invites you to linger.From the second one you are carried on your hands and you do not miss anything!Thanks to Malik and his family, we experienced 3 really great activities:We learned Sri Lankan cooked with mother, went on a walking tour of Galle (Malik knows everything about the history and the peculiarities on site) & were at a gold smith nearby to make your own rings.Staying at Malik and his family was the absolute highlight of our 14 day vacation.",
    rating: 5,
  },
  {
    id: 9,
    name: "Nele - Germany",
    role: "Lodge Guest",
    text: "The lodge gave me “arriving at home” vibes. The host just opened that place near to his house. All details are very well selected, it starts with a nice lemon grass smell, over slippers/wonderful soap etc and ends with the most comfortable bed I have ever slept in. You can close all windows so in the night, if you wish, everything can be very dark - since this is very special for Asian countries, i should point that out. I had a delicious breakfast and I also booked a cooking class with the host mom, which was so delicious and interesting for me. I look forward to come back to this amazing place.",
    rating: 5,
  },
  // Add other testimonials as needed...
];

const TestimonialsPage: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-6 sm:px-12 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          What Our Guests Say
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Real experiences from real travelers with Eco Love Tours.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {testimonials.map(({ id, name, role, text, rating }) => {
          const isExpanded = expandedId === id;
          return (
            <div
              key={id}
              className={`bg-green-50 dark:bg-gray-800 rounded-xl p-6 shadow-md overflow-hidden transition-all duration-300 cursor-pointer border border-green-200 dark:border-gray-700 flex flex-col justify-between ${
                isExpanded ? "h-auto" : "h-[250px]"
              }`}
              onClick={() => toggleCard(id)}
            >
              <p className="mb-4 text-sm sm:text-base text-gray-800 dark:text-gray-200">
               {isExpanded ? (
                  text
                ) : (
                  <>
                    {text.slice(0, 180)}
                    {text.length > 180 && (
                      <span className="text-green-800 font-semibold hover:underline cursor-pointer">
                        ...Read More
                      </span>
                    )}
                  </>
                )}
              </p>
              <div className="mt-auto">
                <div className="flex items-center mb-2">
                  {[...Array(rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                  {[...Array(5 - rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gray-300" />
                  ))}
                </div>
                <p className="font-semibold text-sm text-gray-800 dark:text-white">{name}</p>
                <p className="text-xs text-green-700 dark:text-green-300">{role}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lottie Animation */}
      <div className="mt-16 mb-12 max-w-md mx-auto">
        <LottieAnimationReview />
      </div>

<div className="mt-12 flex flex-col items-center space-y-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Check Our Reviews On
        </h3>
        <div className="flex space-x-12">
          <a
            href="https://www.tripadvisor.com/Attraction_Review-g297896-d19911120-Reviews-Eco_Love_Tours-Galle_Galle_District_Southern_Province.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-green-700 hover:text-green-900 transition"
            aria-label="TripAdvisor Reviews"
          >
            <img src="tripadvisor.png" alt="TripAdvisor" className="w-12 h-12" />
          </a>

          <a
            href="https://g.co/kgs/rnwAB63"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-blue-600 hover:text-blue-800 transition"
            aria-label="Google Reviews"
          >
            <img src="google.png" alt="Google" className="w-12 h-12" />
          </a>

          <a
            href="https://www.facebook.com/share/1Ce5zKiE1B/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-blue-700 hover:text-blue-900 transition"
            aria-label="Facebook Page"
          >
            <img src="facebook.png" alt="Facebook" className="w-12 h-12" />
          </a>

          <a
            href="https://www.instagram.com/ecolovetours?igsh=MWkyNXZ0cHZqMG5wMA=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-pink-600 hover:text-pink-800 transition"
            aria-label="Instagram Profile"
          >
            <img src="intagram.png" alt="Instagram" className="w-12 h-12" />
          </a>
          
        </div>
      </div>


    </section>
  );
};

export default TestimonialsPage;
