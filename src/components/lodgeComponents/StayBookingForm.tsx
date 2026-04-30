import React, { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import {
  FaUser, FaEnvelope, FaWhatsapp, FaCalendarAlt, FaLeaf, FaUtensils, FaUsers,
} from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { FaUserFriends, FaCalendarCheck } from "react-icons/fa";

const WHATSAPP_NUMBER = "94774191148";

interface FormState {
  title: string;
  name: string;
  email: string;
  whatsapp: string;
  noOfPacks: number;
  checkIn: string;
  checkOut: string;
  diet: string;
  message: string;
}

const initialFormState: FormState = {
  title: "",
  name: "",
  email: "",
  whatsapp: "",
  noOfPacks: 1,
  checkIn: "",
  checkOut: "",
  diet: "",
  message: "",
};

const bookedDates = ["2025-06-20", "2025-06-21", "2025-06-25"];

const StayBookingForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>(initialFormState);
  const [amount, setAmount] = useState(0);
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);

  useEffect(() => {
    if (checkInDate && checkOutDate) {
      const nights = Math.ceil(
        (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24)
      );
      const pricePerNight = form.noOfPacks === 1 ? 40 : 50;
      setAmount(nights * pricePerNight);
    }
  }, [form.noOfPacks, checkInDate, checkOutDate]);

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
    fetch("https://formspree.io/f/xvgrrane", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(e.currentTarget),
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
        } else {
          alert("Failed to send booking. Please try again.");
        }
      })
      .catch(() => alert("Failed to send booking. Please try again."));
  };

  const whatsappMessage = encodeURIComponent(
    `Hi, I just booked a stay!\n\n${form.title} ${form.name}\n${form.email}\nWhatsApp: ${form.whatsapp}\nNo. of Guests: ${form.noOfPacks}\nCheck-in: ${form.checkIn}\nCheck-out: ${form.checkOut}\nDietary Preference: ${form.diet}\nMessage: ${form.message}\nTotal Amount: $${amount}`
  );

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 mt-8">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-3xl text-center font-extrabold mb-6 text-green-700">
            <span className="inline-flex items-center gap-2">
              <FaUtensils /> Book Your Stay
            </span>
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1 text-sm text-gray-700">Title *</label>
              <select
                name="title"
                value={form.title}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-green-500 focus:ring-2 focus:ring-green-500"
              >
                <option value="" disabled>Select</option>
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Miss">Miss</option>
                <option value="Ms.">Ms.</option>
                <option value="Dr.">Dr.</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-1 text-sm text-gray-700">Name *</label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500" />
                <input
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-3 pl-10 rounded-lg border border-green-500 focus:ring-2 focus:ring-green-500"
                  placeholder="Your full name"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-1 text-sm text-gray-700">WhatsApp *</label>
              <div className="relative">
                <FaWhatsapp className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500" />
                <input
                  name="whatsapp"
                  type="tel"
                  required
                  value={form.whatsapp}
                  onChange={handleChange}
                  className="w-full p-3 pl-10 rounded-lg border border-green-500 focus:ring-2 focus:ring-green-500"
                  placeholder="e.g. 94712345678"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-1 text-sm text-gray-700">Email (optional)</label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500" />
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 pl-10 rounded-lg border border-green-500 focus:ring-2 focus:ring-green-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-1 text-sm text-gray-700">Guests *</label>
              <div className="relative">
                <FaUsers className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500" />
                <select
                  name="noOfPacks"
                  value={form.noOfPacks}
                  onChange={handleChange}
                  required
                  className="w-full p-3 pl-10 rounded-lg border border-green-500 focus:ring-2 focus:ring-green-500"
                >
                  <option value={1}>1 Guest</option>
                  <option value={2}>2 Guests</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-1 text-sm text-gray-700">Select Diet *</label>
              <div className="relative">
                <FaLeaf className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500" />
                <select
                  name="diet"
                  value={form.diet}
                  onChange={handleChange}
                  required
                  className="w-full p-3 pl-10 rounded-lg border border-green-500 focus:ring-2 focus:ring-green-500"
                >
                  <option value="" disabled>Select</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Non-Vegetarian">Non-Vegetarian</option>
                  <option value="Vegan">Vegan</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-1 text-sm text-gray-700">Check-in *</label>
              <div className="relative">
                <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500" />
                <DatePicker
                  name="checkIn"
                  selected={checkInDate}
                  onChange={(date) => {
                    setCheckInDate(date);
                    setForm((prev) => ({ ...prev, checkIn: date ? date.toISOString().split("T")[0] : "" }));
                  }}
                  excludeDates={bookedDates.map((d) => new Date(d))}
                  placeholderText="Select date"
                  dateFormat="yyyy-MM-dd"
                  className="w-full p-3 pl-10 rounded-lg border border-green-500 focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-1 text-sm text-gray-700">Check-out *</label>
              <div className="relative">
                <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500" />
                <DatePicker
                name="checkOut"
                  selected={checkOutDate}
                  onChange={(date) => {
                    setCheckOutDate(date);
                    setForm((prev) => ({ ...prev, checkOut: date ? date.toISOString().split("T")[0] : "" }));
                  }}
                  excludeDates={bookedDates.map((d) => new Date(d))}
                  placeholderText="Select date"
                  dateFormat="yyyy-MM-dd"
                  className="w-full p-3 pl-10 rounded-lg border border-green-500 focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm text-gray-700">Message (optional)</label>
            <textarea
              name="message"
              rows={3}
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-green-500 focus:ring-2 focus:ring-green-500"
              placeholder="Anything you'd like us to know?"
            ></textarea>
          </div>

         <div className="bg-white shadow-md rounded-xl p-6 mt-6 border border-green-300 max-w-3xl mx-auto">
            <h4 className="text-xl font-semibold mb-4 text-green-700 flex items-center gap-2">
                <FaCalendarCheck /> Booking Summary
            </h4>
            <div className="space-y-3 text-gray-800">
                <div className="flex items-center gap-3">
                <FaUserFriends className="text-green-500" />
                <span>
                    <strong>Guests:</strong> {form.noOfPacks} {form.noOfPacks > 1 ? "Guests" : "Guest"}
                </span>
                </div>
                <div className="flex items-center gap-3">
                <FaCalendarCheck className="text-green-500" />
                <span><strong>Check-in:</strong> {form.checkIn || "N/A"}</span>
                </div>
                <div className="flex items-center gap-3">
                <FaCalendarCheck className="text-green-500" />
                <span><strong>Check-out:</strong> {form.checkOut || "N/A"}</span>
                </div>
                <div className="flex items-center gap-3">
                <FaLeaf className="text-green-500" />
                <span><strong>Dietary Preference:</strong> {form.diet || "N/A"}</span>
                </div>
                <div className="flex items-center gap-3 border-t border-green-200 pt-3 mt-3 text-green-700 text-lg font-bold">
                <span>Total Amount: ${amount}</span>
                </div>

                 <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition"
                    >
                        Book Now
                </button>
            </div>
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
            className="inline-block bg-green-500 text-white px-8 py-3 rounded-lg font-bold text-lg shadow hover:bg-green-600 transition"
          >
            Confirm via WhatsApp
          </a>
        </div>
      )}
    </div>
  );
};

export default StayBookingForm;