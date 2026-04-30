import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaFacebookF, FaInstagram, FaTripadvisor } from "react-icons/fa";
import LottieAnimationContact from "../LottiAnimationContact";

const sliderImages = ['/Eco_Love_Kitchen/slider1.jpeg', '/Eco_Love_Kitchen/slider2.jpeg', '/Eco_Love_Kitchen/slider3.jpeg','/Eco_Love_Kitchen/gallery/img_11.JPG','/Eco_Love_Kitchen/gallery/img_10.JPG'];

const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5444.987139418722!2d80.23091297621761!3d6.062435593923488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1734e5ee6d3d9%3A0x70dbce6ac78efce1!2sEco%20Love%20Kitchen!5e1!3m2!1sen!2slk!4v1749459793694!5m2!1sen!2slk";
// Replace with your real Google Maps embed URL

const ContactPage: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      window.location.href = `mailto:pereraadithya1@gmail.com?subject=Message from ${form.name}&body=${form.message} (from ${form.email})`;
    };

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
           We’d Love to Hear from You
          </h1>
          <p className="text-white text-base sm:text-lg mb-6 max-w-xl drop-shadow-md">
            We’d love to hear from you! Find us on the map or reach out using the details below.
          </p>
        </div>
      </div>


      {/* Contact Info and Map */}
      <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col lg:flex-row gap-8 items-stretch  relative z-30">
        {/* Map */}
        <div className="w-full lg:w-2/3 rounded-2xl overflow-hidden shadow-lg border border-emerald-100">
          <iframe
            src={GOOGLE_MAPS_EMBED_URL}
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
            className="w-full h-80 lg:h-full border-0"
            title="Eco Love Kitchen Location"
          ></iframe>
        </div>
        {/* Details */}
        <div className="w-full lg:w-1/3 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-emerald-700 mb-4 flex items-center gap-2">
              <FaMapMarkerAlt className="text-emerald-600" /> Our Location
            </h2>
            <p className="text-gray-700 dark:text-gray-200 mb-6">
              No.227/12 Mories Road,Ambalawatta,<br />
              Galle,<br />
              Sri Lanka
            </p>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-emerald-700 mb-2">Contact Details</h3>
              <div className="flex items-center gap-2 mb-2">
                <FaPhoneAlt className="text-emerald-600" />
                <a href="tel:+94774191148" className="text-gray-800 dark:text-gray-100 hover:underline">+94 77 41 91 148</a>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <FaWhatsapp className="text-green-500" />
                <a href="https://wa.me/94774191148" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-100 hover:underline">
                  WhatsApp Chat
                </a>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <FaEnvelope className="text-emerald-600" />
                <a href="mailto:info@ecolovekitchen.com" className="text-gray-800 dark:text-gray-100 hover:underline">
                  ecolovetours@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-emerald-700 mb-2">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/1AjgEvmJX3/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 text-2xl">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/ecolovekitchen?igsh=NjFldTBoMW4xbmk2&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 text-2xl">
                <FaInstagram />
              </a>
              <a href="https://wa.me/94774191148" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 text-2xl">
                <FaWhatsapp />
              </a>
              <a href="https://www.tripadvisor.com/Restaurant_Review-g297896-d19462729-Reviews-Eco_Love_Kitchen-Galle_Galle_District_Southern_Province.html?m=69573" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-800 text-2xl">
                <FaTripadvisor />
              </a>
            </div>
          </div>
        </div>
      </div>


      <section id="contact" className="bg-white py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Content: Left and Right */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side - Animation */}
          <div className="w-full lg:w-1/2 h-[400px] max-w-md mx-auto">
            <LottieAnimationContact />
          </div>

          {/* Right Side - Contact Info & Form */}
          <div className="w-full lg:w-1/2">
            
            <form
              onSubmit={handleSubmit}
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
                  value={form.name}
                  onChange={handleChange}
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
                  value={form.email}
                  onChange={handleChange}
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
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-150 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition duration-200 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default ContactPage;
