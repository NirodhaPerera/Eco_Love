import React, { useState } from "react";
import { Star } from "lucide-react";
import LottieAnimationReview from "../LottieAnimationReview";

const testimonials = [
  {
    id: 1,
    name: "Wendy – Australia",
    role: "Apr 2025 • Family",
    text: "High quality and fabulous experience. Fabulous company and great quality experience.Malika picked us up at Colombo airport and drove my daughter and I, around Sri Lanka.He knew exactly the best spots and is a good driver. We even went for a dinner with his family. I highly recommend him and his company for any travels excellent holiday.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sine – Switzerland",
    role: "Mar 2025 • Couples",
    text: "Amazing Trip in South Sri Lanka, our experience was absolutely fantastic. Our guide, Shehan, was super friendly, a safe driver, super knowledgeable and making our trip truly unforgettable. Shehan provided us with fascinating insights into history, culture, and showed us amazing nature sides.The sites we visited created lasting memories.If you are looking for a tour guide who combines professionalism with a personal touch this is would be for you. I would highly recommend the service.",
    rating: 5,
  },
  {
    id: 3,
    name: "Lynn Francis – United Kingdom",
    role: "Feb 2025 • Friends",
    text: "First class tour company..If you want to make the most of your trip to Sri Lanka I can highly recommend Eco love tours. Malik is a first class Guide and Driver. He’s straightforward to deal with, honest, attentive, kind, speaks excellent English and is a genuinely nice guy. He can suggest an itinerary which takes you to all the best sites in the country.If you need accommodation then Ecolove Tours have a beautiful self contained villa for rent and cooking classes on site.You will not be disappointed by Eco Love Tours",
    rating: 5,
  },

  {
    id: 4,
    name: "Jason F - Australia",
    role: "Guest",
    text: "We had an excellent experience with Eco Love Tours. Our driver Shehan was with us for 10 days and I can’t recommend him highly enough.We sent our itinerary to Malik prior to arriving in Sri Lanka & Shehan was able to accommodate all our requirements.As well as being a great driver Shehan was extremely knowledgeable about Sri Lankan culture, wildlife & interesting attractions.Thanks again to Shehan & everyone at Eco Love tours.",
    rating: 5,
  },
  {
    id: 5,
    name: "Claudia S - Austria ",
    role: "Jan 2025 • Couples",
    text: "Absolute heart recommendation!.Malik has suggested a varied and great itinerary that perfectly suited our interests.We had a great time with Dinesh and can highly recommend him. On our 13-day round trip, we were able to spontaneously change plans for the next day if the weather required it. Dinesh was super flexible and also advised us when we were unsure. Due to the unusually high rainfall, some activities were only possible spontaneously and Dinesh clarified everything for us so we could enjoy the trip.Malik was always available with all questions and we felt very comfortable.Dinesh became a friend over time, whom we met again even after our trip, which made us very happy. We were subsequently still in Malik's beautiful accommodation and had a wonderful time. His family is very warm and we have never lacked anythingDuring Malik's time with his family, we did a cooking class with his mom, went to a silversmith and cycled through rice fields. It was an unforgettable trip and definitely not our last with Dinesh, Malik & his family!",
    rating: 5,
  },
  {
    id: 6,
    name: "Bumpy - Auckland",
    role: "Dec 2024 • Family",
    text: "Five stars for Eco Love - a highlight of our trip!. Malik and Eco Love Tours made our trip around the southern part of Sri Lanka seamless and totally enjoyable. As a driver, Malik is calm, communicative and safety conscious. As a guide, he's extremely well-connected, and has a deep understanding and knowledge of his country. And as a person, he's so kind, considerate and fun to be around. A fantastic holiday for our family - thank you Malik!",
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
    <section className="bg-gradient-to-b from-green-50 to-white dark:bg-gray-900 py-16 px-6 sm:px-12 lg:px-24">
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
