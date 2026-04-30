import React from "react";
import { Link } from "react-router-dom";

const GalarySection: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 min-h-screen py-6 sm:py-8 lg:py-12  ">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-12">
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
              Gallery
            </h2>

           
          </div>

          <Link
              to="/eco-love-kitchen/gallery"
              className="inline-block rounded-lg border bg-white dark:bg-green-700 dark:border-none mt-4 px-12 py-4 text-center text-sm font-semibold text-green-800 dark:text-green-200 outline-none ring-indigo-300 transition duration-100 hover:bg-green-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
            >
              
              More
            </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {/* Image 1 */}
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src='/Eco_Love_Kitchen/slider1.jpeg'
              loading="lazy"
              alt="Fresh ingredients"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
             
            </span>
          </a>

          {/* Image 2 */}
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src='/Eco_Love_Kitchen/slider2.jpeg'
              loading="lazy"
              alt="Cooking Session"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
             
            </span>
          </a>

          {/* Image 3 */}
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src='/Eco_Love_Kitchen/slider4.jpeg'
              loading="lazy"
              alt="Chef in action"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              
            </span>
          </a>

          {/* Image 4 */}
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src='/Eco_Love_Kitchen/slider3.jpeg'
              loading="lazy"
              alt="Sri Lankan Dish"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
             
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GalarySection;
