import React from 'react';
import { Star } from 'lucide-react';
import LottieAnimationReview from '../LottieAnimationReview';

const testimonials = [
  {
    id: 1,
    name: "David – United Kingdom",
    role: "Guest",
    text: "Absolutely charming host who took us into her kitchen and we cooked a huge meal with about eight different dishes on two burners. Her skill was fascinating. And the food was delicious!",
    rating: 5,
  },
  {
    id: 2,
    name: "Rebecca – Germany",
    role: "Guest",
    text: "Was a great experience with a lovely family. We learned so much about Sri lankan cuisine and the food made was delicious. Can highly recommend",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily – United Kingdom",
    role: "Guest",
    text: "I had a fabulous time here, the food was amazing and I was welcomed into the home so nicely. Left having learnt how locals produce their family meals. All round an amazing experience and definitely worth the money. There was so much food!!!",
    rating: 5,
  },

  {
    id: 4,
    name: "Chanel Theunissen - South Africa",
    role: "Guest",
    text: "Delightful cooking and lunch My friend and I had so much fun cooking a traditional Sri Lankan lunch with this family. Such a wholesome experience with soul food and soul people! The kitchen is filled with aroma and laughter. Thank you for the special time!",
    rating: 5,
  },
  {
    id: 5,
    name: "Carmen T",
    role: "Guest",
    text: "Best local Sri Lanka food, I can only say that of all the local places I have been to in sri lanka without a doubt was the best! Their menu has all the local dishes that you cannot miss if you visit Sri Lanka. In addition to the fact that the food was incredible, the family that runs the restaurant will make you feel at home!",
    rating: 5,
  },
  {
    id: 6,
    name: "Katie - United Kingdom",
    role: "Guest",
    text: "Amazing cooking class We went here after being recommended by our driver. Our experience was excellent from start to finish. Authentic Sri Lankan cooking class. We were welcomed in and shown how to make Sri Lankan food and then got to eat it. Best curry we’d had and not just because we helped make it haha. The dog is very cute too",
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 sm:px-12 lg:px-24 text-gray-900">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
        What Our Guests Say
      </h2>

      {/* View More Reviews Button below title */}
      <div className="flex justify-center mb-12">
        <a
          href="/testimonials"
          className="bg-green-700 text-white font-semibold py-2 px-6 text-sm sm:text-base rounded-md hover:bg-green-800 transition"
        >
          View More Reviews
        </a>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {testimonials.map(({ id, name, role, text, rating }) => (
          <div
            key={id}
            className="bg-green-100 rounded-xl p-6 shadow-md flex flex-col justify-between"
          >
            <p className="mb-6 text-lg italic text-green-900">"{text}"</p>
            <div>
              <div className="flex items-center mb-3">
                {[...Array(rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" />
                ))}
                {[...Array(5 - rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gray-300" />
                ))}
              </div>
              <p className="font-semibold text-lg">{name}</p>
              <p className="text-green-700">{role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lottie Animation */}
      <div className="mt-16 mb-12 max-w-md mx-auto">
        <LottieAnimationReview />
      </div>

      {/* Review Platforms */}
      <div className="mt-12 flex flex-col items-center space-y-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Check Our Reviews On
        </h3>
        <div className="flex space-x-12">
          <a
            href="https://www.tripadvisor.com/Restaurant_Review-g297896-d19462729-Reviews-Eco_Love_Kitchen-Galle_Galle_District_Southern_Province.html#REVIEWS"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-green-700 hover:text-green-900 transition"
            aria-label="TripAdvisor Reviews"
          >
            <img src="tripadvisor.png" alt="TripAdvisor" className="w-12 h-12" />
          </a>

          <a
            href="https://www.google.com/search?sca_esv=3865a5c24f38e491&rlz=1C5CHFA_enLK1100LK1101&biw=1920&bih=1054&sxsrf=AE3TifOVajAQnMvZwDp4PEWUjtNjDyEtwQ:1749462340604&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-Ewzf4vgvzzHY1RDrCaWNDzD305lJOaVAnAZEiio_yP0sgu8PtXj20m3P7ptUrYPoLTtEBGMB9sJYhZkOOGMUvCo1YQsOCNGoyWFhcSoPxTN0Vvx-iw%3D%3D&q=Eco+Love+Kitchen+Reviews&sa=X&ved=2ahUKEwjbhvCKh-SNAxXszqACHVWNONQQ0bkNegQIHhAC&cshid=1749462375659329"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-blue-600 hover:text-blue-800 transition"
            aria-label="Google Reviews"
          >
            <img src="google.png" alt="Google" className="w-12 h-12" />
          </a>

          <a
            href="https://www.facebook.com/share/1AjgEvmJX3/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-blue-700 hover:text-blue-900 transition"
            aria-label="Facebook Page"
          >
            <img src="facebook.png" alt="Facebook" className="w-12 h-12" />
          </a>

          <a
            href="https://www.instagram.com/ecolovekitchen?igsh=NjFldTBoMW4xbmk2&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-pink-600 hover:text-pink-800 transition"
            aria-label="Instagram Profile"
          >
            <img src="intagram.png" alt="Instagram" className="w-12 h-12" />
          </a>
           <a
            href="https://www.getyourguide.com/galle-l1817/galle-traditional-sri-lankan-cooking-class-t811337/?utm_source=getyourguide&utm_medium=sharing&utm_campaign=activity_details"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-pink-600 hover:text-pink-800 transition"
            aria-label="Instagram Profile"
          >
            <img src="getYourGuide.png" alt="Instagram" className="w-12 h-12" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
