import React from 'react';

const newsItems = [
  {
    title: "🌿 Yoga & Meditation Mornings Now Available",
    date: "June 2025",
    summary: "Start your day with peace and energy. Join our new guided yoga sessions under the palm canopy every morning at 7AM.",
  },
  {
    title: "🍅 Eco Kitchen Garden Harvest Festival",
    date: "May 2025",
    summary: "Celebrate the joy of harvesting with us. Participate in our garden-to-plate festival and taste organic freshness.",
  },
  {
    title: "🦉 Rainforest Night Walks Launched",
    date: "April 2025",
    summary: "Experience the magic of the rainforest after sunset. Join our guided nocturnal nature walks and meet its hidden life.",
  },
];

const NewsAndUpdates: React.FC = () => {
  return (
    <section className="bg-green-50 py-20 px-6 sm:px-12 lg:px-24 text-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-green-900">
          News & Updates
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-14">
          Stay up to date with the latest happenings at The Lodge by Eco Love.
        </p>

        {/* News Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {newsItems.map(({ title, date, summary }, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition"
            >
              <p className="text-sm text-green-800 mb-2">{date}</p>
              <h3 className="text-xl font-semibold text-green-900 mb-2">{title}</h3>
              <p className="text-gray-700">{summary}</p>
            </div>
          ))}
        </div>

        {/* Optional: View More News */}
        <div className="mt-16">
          <a
            href="/eco-love-lodge/news"
            className="inline-block bg-green-800 text-white py-3 px-8 rounded-xl font-medium shadow hover:bg-green-800 transition"
          >
            View All News
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsAndUpdates;
