import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const SessionSection: React.FC = () => {
  return (
    <div className="bg-green-800 py-16 px-4 sm:px-8 lg:px-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-6">
        Discover the Joy of Cooking with Us
      </h2>
      <p className="text-center text-white max-w-3xl mx-auto mb-4 text-lg">
        Whether you're a beginner or a passionate foodie, our cooking sessions offer an authentic taste of Sri Lankan culinary culture.
        Learn to prepare traditional dishes using fresh, local ingredients — guided by experienced local chefs in a warm and welcoming environment.
      </p>
      <p className="text-center text-white max-w-3xl mx-auto mb-10 text-lg">
        Join us for an unforgettable experience filled with flavors, culture, and connection. Book your spot today and cook like a local!
      </p>

      <div className="flex justify-center">
                <Link
            to="/eco-love-kitchen/session"
            className="bg-white text-green-700 font-semibold py-3 px-6 rounded-xl text-lg hover:bg-green-200 transition flex items-center justify-center gap-2"
            >
            <Calendar className="w-5 h-5" />
            Book a Cooking Session
            </Link>
      </div>
    </div>
  );
};

export default SessionSection;
