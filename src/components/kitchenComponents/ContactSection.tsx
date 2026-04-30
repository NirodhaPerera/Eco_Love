import React from 'react';
import LottieAnimationContact from '../LottiAnimationContact';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-white py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Contact Us
          </h2>
          <p className="text-gray-700">
            We'd love to hear from you. Reach out through the form or contact us directly.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Lottie Animation */}
          <div className="w-full lg:w-1/2 h-[400px] max-w-md mx-auto">
            <LottieAnimationContact />
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2">
            <form
              action="https://formspree.io/f/mnnvppkq" // 👉 Replace with your real Formspree endpoint
              method="POST"
              className="space-y-6 bg-white p-6 rounded-xl shadow-lg border border-gray-200"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-150"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-150"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-green-800 transition duration-150 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-800 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition duration-200 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
