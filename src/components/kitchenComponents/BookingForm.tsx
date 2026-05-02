import React, { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import { User, Mail, MessageSquare, Calendar, Clock, Leaf, Users, CheckCircle, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "94774191148"; // Verified primary contact

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
  const [amount, setAmount] = useState(25);

  useEffect(() => {
    // Standard $25 per person pricing
    setAmount(form.noOfPacks * 25);
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // INTEGRATION: Sending details to ecolovetours@gmail.com via Formspree
    try {
      const response = await fetch("https://formspree.io/f/mnnvppkq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            ...form,
            totalAmount: `$${amount}` // Adding the calculated total to the email report
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Failed to send booking email. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please check your connection.");
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Eco Love! \n\n` +
    `*Culinary Experience Inquiry: Eco Love Kitchen*\n\n` +
    `I would like to request a traditional cookery session with the following details:\n\n` +
    `• *Guest:* ${form.title} ${form.name}\n` +
    `• *Date:* ${form.date}\n` +
    `• *Time:* ${form.time}\n` +
    `• *Participants:* ${form.noOfPacks} Guest(s)\n` +
    `• *Dietary Preference:* ${form.diet}\n` +
    `• *Estimated Total:* $${amount}\n\n` +
    `Could you please confirm the availability for this session? We look forward to learning with you.`
  );

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.05)] p-8 md:p-16">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Section Header */}
          <div className="text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-800 block mb-4">Reservation</span>
            <h2 className="text-4xl font-serif italic text-slate-900">Secure Your Session</h2>
          </div>

          <div className="space-y-10">
            {/* Row 1: Title & Name */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Title</label>
                <select
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-slate-200 py-3 focus:outline-none focus:border-emerald-800 transition-colors text-sm"
                >
                  <option value="" disabled>Select</option>
                  <option value="Mr.">Mr.</option>
                  <option value="Mrs.">Mrs.</option>
                  <option value="Ms.">Ms.</option>
                  <option value="Dr.">Dr.</option>
                </select>
              </div>
              <div className="md:col-span-9">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Full Name</label>
                <div className="relative group">
                  <User className="absolute right-0 top-3 text-slate-200 group-focus-within:text-emerald-800 transition-colors" size={16} />
                  <input
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-slate-200 py-3 focus:outline-none focus:border-emerald-800 transition-colors text-sm"
                    placeholder="Enter your name"
                  />
                </div>
              </div>
            </div>

            {/* Row 2: WhatsApp & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">WhatsApp Number</label>
                <FaWhatsapp className="absolute right-0 top-10 text-slate-200 group-focus-within:text-emerald-800 transition-colors" size={16} />
                <input
                  name="whatsapp"
                  type="tel"
                  required
                  value={form.whatsapp}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-slate-200 py-3 focus:outline-none focus:border-emerald-800 transition-colors text-sm"
                  placeholder="e.g. 94771234567"
                />
              </div>
              <div className="relative group">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Email Address (Optional)</label>
                <Mail className="absolute right-0 top-10 text-slate-200 group-focus-within:text-emerald-800 transition-colors" size={16} />
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-slate-200 py-3 focus:outline-none focus:border-emerald-800 transition-colors text-sm"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Row 3: Details Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="relative">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Guests</label>
                <Users className="absolute right-0 top-10 text-slate-200" size={14} />
                <input
                  name="noOfPacks"
                  type="number"
                  min={1}
                  required
                  value={form.noOfPacks}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-slate-200 py-3 focus:outline-none focus:border-emerald-800 transition-colors text-sm"
                />
              </div>
              <div className="relative">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Date</label>
                <Calendar className="absolute right-0 top-10 text-slate-200" size={14} />
                <input
                  name="date"
                  type="date"
                  required
                  value={form.date}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-slate-200 py-3 focus:outline-none focus:border-emerald-800 transition-colors text-sm"
                />
              </div>
              <div className="relative">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Time</label>
                <Clock className="absolute right-0 top-10 text-slate-200" size={14} />
                <select
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-slate-200 py-3 focus:outline-none focus:border-emerald-800 transition-colors text-sm"
                >
                  <option value="" disabled>Select</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                  <option value="6:00 PM">6:00 PM</option>
                </select>
              </div>
              <div className="relative">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Diet</label>
                <Leaf className="absolute right-0 top-10 text-slate-200" size={14} />
                <select
                  name="diet"
                  value={form.diet}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-slate-200 py-3 focus:outline-none focus:border-emerald-800 transition-colors text-sm"
                >
                  <option value="" disabled>Select</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Non-Vegetarian">Non-Vegetarian</option>
                  <option value="Vegan">Vegan</option>
                </select>
              </div>
            </div>

            {/* Row 4: Message */}
            <div className="relative group">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Special Notes</label>
              <MessageSquare className="absolute right-0 top-10 text-slate-200" size={16} />
              <textarea
                name="message"
                rows={2}
                value={form.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-slate-200 py-3 focus:outline-none focus:border-emerald-800 transition-colors text-sm resize-none"
                placeholder="Allergies or preferences..."
              />
            </div>
          </div>

          {/* Footer: Amount & Submit */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-slate-50">
            <div className="text-center md:text-left">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Total All-Inclusive</p>
              <span className="text-3xl font-serif italic text-emerald-900">${amount}</span>
            </div>
            <button
              type="submit"
              className="group flex items-center gap-4 bg-emerald-950 text-white font-black uppercase tracking-[0.3em] text-[10px] py-4 px-10 rounded-full transition-all hover:bg-emerald-800 shadow-xl active:scale-95"
            >
              <span>Confirm Booking</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>
      ) : (
        <div className="text-center py-12 space-y-8 animate-fade-in">
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
               <CheckCircle size={40} />
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl font-serif italic text-slate-900">Thank you, {form.name}</h3>
            <p className="text-slate-500 text-sm max-w-sm mx-auto leading-relaxed">
              We have received your reservation. For faster confirmation, please reach out to us on WhatsApp.
            </p>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-3.5 rounded-full font-black uppercase tracking-widest text-[9px] shadow-md hover:shadow-xl transition-all"
          >
            <FaWhatsapp size={16} />
            Verify via WhatsApp
          </a>
        </div>
      )}
    </div>
  );
};

export default BookingForm;