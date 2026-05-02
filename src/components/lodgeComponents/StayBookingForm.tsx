import React, { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import { Calendar, Leaf, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const WHATSAPP_NUMBER = "94774191148"; 
const EMAIL_RECIPIENT = "ecolovetours@gmail.com"; 

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
  diet: "Vegetarian",
  message: "",
};

// Reserved dates for the 2026 season
const bookedDates = ["2026-06-20", "2026-06-21", "2026-06-25"];

const StayBookingForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>(initialFormState);
  const [amount, setAmount] = useState(0);
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);

  // Helper to format date based on Local Time to prevent timezone shifts
  const formatDateLocal = (date: Date | null) => {
    if (!date) return "";
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    if (checkInDate && checkOutDate) {
      const nights = Math.ceil(
        (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24)
      );
      // Pricing: $50 for 2 guests, $40 for single guest
      const pricePerNight = form.noOfPacks === 1 ? 40 : 50; 
      setAmount(nights * pricePerNight);
    }
  }, [form.noOfPacks, checkInDate, checkOutDate]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "noOfPacks" ? Number(value) : value,
    }));
  };

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello Eco Love! \n\n*Reservation Inquiry: The Lodge by Eco Love*\n\n` +
    `I would like to request a stay with the following details:\n\n` +
    `*Guest:* ${form.title} ${form.name}\n` +
    `*Dates:* ${form.checkIn} to ${form.checkOut}\n` +
    `*Occupancy:* ${form.noOfPacks} Guest(s)\n` +
    `*Dietary Preference:* ${form.diet}\n` +
    `*Estimated Total:* $${amount}\n\n` +
    `Could you please confirm the availability for these dates? Thank you.`
  )}`;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Sends details to ecolovetours@gmail.com via Formspree
    fetch("https://formspree.io/f/xvgrrane", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(e.currentTarget),
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          // Automatically open WhatsApp for confirmation
          window.open(whatsappLink, "_blank");
        } else {
          alert("Email submission failed. Please try again.");
        }
      })
      .catch(() => alert("Network error. Please try again."));
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.04)] border border-slate-50 overflow-hidden my-20 font-sans">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row min-h-[700px]">
          
          {/* Main Input Section */}
          <div className="lg:w-[60%] p-10 md:p-16 space-y-12">
            <header>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-emerald-800" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-800">Reservation</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif italic text-slate-900 leading-tight">Request Your Stay.</h2>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Guest Name *</label>
                <div className="flex gap-2">
                  <select name="title" value={form.title} onChange={handleChange} required className="w-24 p-4 bg-slate-50 border-none rounded-2xl text-xs font-bold focus:ring-2 focus:ring-emerald-800 outline-none">
                    <option value="" disabled>Title</option>
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Ms.">Ms.</option>
                    <option value="Dr.">Dr.</option>
                  </select>
                  <input name="name" type="text" required value={form.name} onChange={handleChange} className="flex-1 p-4 bg-slate-50 border-none rounded-2xl text-xs focus:ring-2 focus:ring-emerald-800 outline-none" placeholder="Full Name" />
                </div>
              </div>

              <Field label="WhatsApp Number *" icon={<FaWhatsapp size={14}/>}>
                <input name="whatsapp" type="tel" required value={form.whatsapp} onChange={handleChange} className="w-full p-4 pl-12 bg-slate-50 border-none rounded-2xl text-xs focus:ring-2 focus:ring-emerald-800 outline-none" placeholder="e.g. 94774191148" />
              </Field>

              <Field label="Guest Count *" icon={<Users size={14}/>}>
                <select name="noOfPacks" value={form.noOfPacks} onChange={handleChange} className="w-full p-4 pl-12 bg-slate-50 border-none rounded-2xl text-xs font-bold focus:ring-2 focus:ring-emerald-800 outline-none">
                  <option value={1}>1 Guest ($40/night)</option>
                  <option value={2}>2 Guests ($50/night)</option>
                </select>
              </Field>

              <Field label="Dietary Preference *" icon={<Leaf size={14}/>}>
                <select name="diet" value={form.diet} onChange={handleChange} className="w-full p-4 pl-12 bg-slate-50 border-none rounded-2xl text-xs font-bold focus:ring-2 focus:ring-emerald-800 outline-none">
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Vegan">Vegan</option>
                  <option value="Non-Vegetarian">Non-Vegetarian</option>
                </select>
              </Field>

              <Field label="Check-in *" icon={<Calendar size={14}/>}>
                <DatePicker 
                  selected={checkInDate} 
                  onChange={(date) => { 
                    setCheckInDate(date); 
                    setForm({...form, checkIn: formatDateLocal(date)}); 
                  }} 
                  excludeDates={bookedDates.map(d => new Date(d))} 
                  dateFormat="yyyy-MM-dd" 
                  className="w-full p-4 pl-12 bg-slate-50 border-none rounded-2xl text-xs focus:ring-2 focus:ring-emerald-800 outline-none" 
                  placeholderText="Select Date" 
                />
              </Field>

              <Field label="Check-out *" icon={<Calendar size={14}/>}>
                <DatePicker 
                  selected={checkOutDate} 
                  onChange={(date) => { 
                    setCheckOutDate(date); 
                    setForm({...form, checkOut: formatDateLocal(date)}); 
                  }} 
                  excludeDates={bookedDates.map(d => new Date(d))} 
                  dateFormat="yyyy-MM-dd" 
                  className="w-full p-4 pl-12 bg-slate-50 border-none rounded-2xl text-xs focus:ring-2 focus:ring-emerald-800 outline-none" 
                  placeholderText="Select Date" 
                />
              </Field>
            </div>
            
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Special Notes</label>
              <textarea name="message" rows={3} value={form.message} onChange={handleChange} className="w-full p-5 bg-slate-50 border-none rounded-[2rem] text-xs focus:ring-2 focus:ring-emerald-800 outline-none" placeholder="Tell us about arrival details..."></textarea>
            </div>
          </div>

          {/* Bill-style Summary Section */}
          <div className="lg:w-[40%] bg-slate-50/50 p-10 md:p-16 flex flex-col justify-between border-l border-slate-100">
            <div className="space-y-10">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-900/50">Summary of Stay</h3>
              
              <div className="space-y-6">
                <SummaryItem label="Accommodation" value="The Lodge by Eco Love" />
                <SummaryItem label="Guests" value={`${form.noOfPacks} ${form.noOfPacks > 1 ? "Guests" : "Guest"}`} />
                <SummaryItem label="Schedule" value={form.checkIn && form.checkOut ? `${form.checkIn} — ${form.checkOut}` : "Awaiting Dates"} />
              </div>

              <div className="pt-10 border-t border-slate-200">
                <div className="flex justify-between items-end mb-3">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total Investment</span>
                  <span className="text-4xl font-serif italic text-emerald-900">${amount}</span>
                </div>
                <p className="text-[10px] text-slate-400 italic">Includes complimentary traditional breakfast.</p>
              </div>
            </div>

            <button type="submit" className="w-full bg-emerald-900 text-white font-black uppercase tracking-[0.4em] text-[10px] py-6 rounded-2xl shadow-xl hover:bg-emerald-950 transition-all flex items-center justify-center gap-3 active:scale-95">
              Confirm Reservation <ArrowRight size={14} />
            </button>
          </div>
        </form>
      ) : (
        <div className="p-24 text-center space-y-10">
          <CheckCircle2 size={64} className="mx-auto text-emerald-800/20" />
          <h3 className="text-5xl font-serif italic text-slate-900">Ayubowan!</h3>
          <p className="text-slate-500 text-sm max-w-md mx-auto uppercase tracking-widest font-light">
            Request sent to {EMAIL_RECIPIENT}. Please confirm via WhatsApp below.
          </p>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-[#25D366] text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-[#128C7E] transition-all">
            <FaWhatsapp size={18} /> Confirm via WhatsApp
          </a>
        </div>
      )}
    </div>
  );
};

const Field = ({ label, icon, children }: any) => (
  <div className="space-y-3">
    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">{label}</label>
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-800/30">{icon}</div>
      {children}
    </div>
  </div>
);

const SummaryItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col gap-1">
    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">{label}</span>
    <span className="text-sm font-medium text-slate-900">{value}</span>
  </div>
);

export default StayBookingForm;