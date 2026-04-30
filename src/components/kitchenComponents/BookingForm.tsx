import React, { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import { FaUser, FaEnvelope, FaWhatsapp, FaCalendarAlt, FaClock, FaLeaf, FaUtensils } from "react-icons/fa";

const WHATSAPP_NUMBER = "94767763437";

interface FormState {
  title: string;
  name: string;
  email: string;
  whatsapp: string;
  noOfPacks: number;
  date: string;
  time: string;
  diet: string;
  message: string;
}

const initialFormState: FormState = {
  title: "",
  name: "",
  email: "",
  whatsapp: "",
  noOfPacks: 1,
  date: "",
  time: "",
  diet: "",
  message: "",
};

const BookingForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>(initialFormState);
  const [amount, setAmount] = useState(20);

  useEffect(() => {
    setAmount(form.noOfPacks * 20);
  }, [form.noOfPacks]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "noOfPacks" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/kitchen-book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
        .then((res) => {
          if (res.ok) setSubmitted(true);
          else alert("Failed to send booking.");
        })
        .catch(() => alert("Failed to send booking."));

  };

  const whatsappMessage = encodeURIComponent(
    `Hi, I just booked a session!\n\nTitle: ${form.title}\nName: ${form.name}\nEmail: ${form.email}\nWhatsApp: ${form.whatsapp}\nNo. of Packs: ${form.noOfPacks}\nDate: ${form.date}\nTime: ${form.time}\nDietary Preference: ${form.diet}\nMessage: ${form.message}\nTotal Amount: $${amount}`
  );

  return (
    <div className="w-full max-w-7xl mx-auto bg-white dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl p-8 mt-8">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-3xl text-center font-extrabold mb-8 text-black tracking-tight">
            <span className="inline-flex items-center gap-2">
              <FaUtensils className="text-green-600" /> Book Your Session
            </span>
          </h2>
          {/* Title & Name */}
          <div className="flex gap-4">
            <div className="w-1/3">
              <label className="block font-semibold mb-1">Title <span className="text-red-500">*</span></label>
              <select
                name="title"
                value={form.title}
                onChange={handleChange}
                required
                className="w-full p-2 rounded-lg border border-green-800 focus:ring-2 focus:ring-green-800"
              >
                <option value="" disabled>Select</option>
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Miss">Miss</option>
                <option value="Ms.">Ms.</option>
                <option value="Dr.">Dr.</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block font-semibold mb-1">Name <span className="text-red-500">*</span></label>
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-green-500" />
                <input
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-2 pl-10 rounded-lg border border-green-800 focus:ring-2 focus:ring-green-800"
                  placeholder="Your full name"
                />
              </div>
            </div>
          </div>
          {/* WhatsApp & Email */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block font-semibold mb-1">WhatsApp <span className="text-red-500">*</span></label>
              <div className="relative">
                <FaWhatsapp className="absolute left-3 top-3 text-green-400" />
                <input
                  name="whatsapp"
                  type="tel"
                  required
                  value={form.whatsapp}
                  onChange={handleChange}
                  className="w-full p-2 pl-10 rounded-lg border border-green-800 focus:ring-2 focus:ring-green-800"
                  placeholder="e.g. 94712345678"
                />
              </div>
            </div>
            <div className="flex-1">
              <label className="block font-semibold mb-1">Email <span className="text-gray-400">(optional)</span></label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3 text-green-400" />
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-2 pl-10 rounded-lg border border-green-800 focus:ring-2 focus:ring-green-800"
                  placeholder="you@example.com"
                />
              </div>
            </div>
          </div>
          {/* Packs, Date, Time, Diet */}
          <div className="flex flex-wrap gap-4">
            <div className="w-1/4 min-w-[120px]">
              <label className="block font-semibold mb-1">No. of Packs <span className="text-red-500">*</span></label>
              <input
                name="noOfPacks"
                type="number"
                min={1}
                required
                value={form.noOfPacks}
                onChange={handleChange}
                className="w-full p-2 rounded-lg border border-green-800 focus:ring-2 focus:ring-green-800"
              />
            </div>
            <div className="w-1/4 min-w-[120px]">
              <label className="block font-semibold mb-1">Date <span className="text-red-500">*</span></label>
              <div className="relative">
                <FaCalendarAlt className="absolute left-3 top-3 text-emerald-400" />
                <input
                  name="date"
                  type="date"
                  required
                  value={form.date}
                  onChange={handleChange}
                  className="w-full p-2 pl-10 rounded-lg border border-green-800 focus:ring-2 focus:ring-green-800"
                />
              </div>
            </div>
            <div className="w-1/4 min-w-[120px]">
              <label className="block font-semibold mb-1">Time <span className="text-red-500">*</span></label>
              <div className="relative">
                <FaClock className="absolute left-3 top-3 text-green-500" />
                <select
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  required
                  className="w-full p-2 pl-10 rounded-lg border border-green-800 focus:ring-2 focus:ring-green-800"
                >
                  <option value="" disabled>Select</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                  <option value="5:00 PM">5:00 PM</option>
                  <option value="6:00 PM">6:00 PM</option>
                  <option value="7:00 PM">7:00 PM</option>
                </select>
              </div>
            </div>
            <div className="w-1/4 min-w-[120px]">
              <label className="block font-semibold mb-1">Diet <span className="text-red-500">*</span></label>
              <div className="relative">
                <FaLeaf className="absolute left-3 top-3 text-green-400" />
                <select
                  name="diet"
                  value={form.diet}
                  onChange={handleChange}
                  required
                  className="w-full p-2 pl-10 rounded-lg border border-green-800 focus:ring-2 focus:ring-green-800"
                >
                  <option value="" disabled>Select</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Non-Vegetarian">Non-Vegetarian</option>
                  <option value="Vegan">Vegan</option>
                </select>
              </div>
            </div>
          </div>
          {/* Message */}
          <div>
            <label className="block font-semibold mb-1">Message <span className="text-gray-400">(optional)</span></label>
            <textarea
              name="message"
              rows={3}
              value={form.message}
              onChange={handleChange}
              className="w-full p-2 rounded-lg border border-green-800 focus:ring-2 focus:ring-green-800"
              placeholder="Anything you'd like us to know?"
            ></textarea>
          </div>
          {/* Amount */}
          <div className="flex items-center justify-between mt-2">
            <span className="font-bold text-emerald-700 text-lg">Amount: ${amount}</span>
            <button
              type="submit"
              className="bg-gradient-to-r from-emerald-600 to-green-400 hover:from-emerald-700 hover:to-green-800 text-white font-bold py-2 px-8 rounded-lg shadow-md transition"
            >
              Book Now
            </button>
          </div>
        </form>
      ) : (
        <div className="text-center">
          <h3 className="text-2xl font-bold text-emerald-700 mb-4">Thank you for booking!</h3>
          <p className="mb-6">We have received your booking. For faster confirmation, you can also send us your details on WhatsApp:</p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-800 text-white px-8 py-3 rounded-lg font-bold text-lg shadow hover:bg-green-700 transition"
          >
            Confirm via WhatsApp
          </a>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
