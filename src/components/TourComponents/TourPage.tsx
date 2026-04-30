import { useEffect, useRef, useState } from "react";
import { CalendarDays, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const sliderImages = [
  "/Eco_Love_Tours/Tour_Images/image136.JPG",
  "/Eco_Love_Tours/Tour_Images/image119.JPG",
  "/Eco_Love_Tours/Tour_Images/image7.JPG",
  "/Eco_Love_Tours/Tour_Images/image175.JPG",
];

const itineraries = [
 {
    title: "21-Day Adventure Around Sri Lanka",
    days: 21,
    image: "/Eco_Love_Tours/Adventure.png",
    details: [
      "Day 01 - Airport to Bentota - Beach relax - Sunset at Barberyn lighthouse island",
      "Day 02 - Bentota to Galle - Hikkaduwa - Galle Fort - Cooking session",
      "Day 03 - Kanneliya rainforest trek - Cinnamon plantation",
      "Day 04 - Cycling tour - Beach visits - Stay in Dickwella",
      "Day 05 - Beach relax - Stay in Dickwella",
      "Day 06 - Mulkirigala rock temple - Stay in Udawalawe",
      "Day 07 - Safari - Little Adams peak - Stay in Ella",
      "Day 08 - Ella rock - Nine arches bridge",
      "Day 09 - Lipton seat - Adisham bungalow",
      "Day 10 - Gartmore Falls",
      "Day 11 - Grand Adams Peak hike",
      "Day 12 - Waterfalls en route - Nuwara Eliya",
      "Day 13 - Horton Plains - Tea factory - Ramboda - Kandy",
      "Day 14 - Nalanda Gedige - Habarana lake ride - Sigiriya",
      "Day 15 - Pidurangala sunrise - Polonnaruwa village tour",
      "Day 16 - Jaffna Fort - Point Pedro",
      "Day 17 - Delft Island",
      "Day 18 - Casuarina Beach",
      "Day 19 - Mannar Fort - Vankalai Sanctuary",
      "Day 20 - Wilpattu NP safari or ancient city",
      "Day 21 - Airport drop",
    ],
  },
  {
    title: "8-Day Southern Discovery",
    days: 8,
    image: "/Eco_Love_Tours/Img-t.png",
    details: [
      "Day 01 - Airport to Bentota - Madu river - Turtle conservation",
      "Day 02 - Beach relax - Galle Fort",
      "Day 03 - Folk museum - Udawalawe",
      "Day 04 - Safari - Buduruwagala - Ella",
      "Day 05 - Train ride - Gregory Lake - Nuwara Eliya",
      "Day 06 - Ambuluwawa tower - Temple of Tooth - Kandy",
      "Day 07 - Pinnawala Elephant Orphanage - Colombo",
      "Day 08 - Colombo city tour - Airport drop",
    ],
  },
  {
    title: "6-Day Cultural & Nature Escape",
    days: 6,
    image: "/Eco_Love_Tours/Img-tm.png",
    details: [
      "Day 01 - Habarana lake night ride - Sigiriya",
      "Day 02 - Pidurangala sunrise - Tea factory - Nuwara Eliya",
      "Day 03 - Train ride - Little Adams Peak - Ella",
      "Day 04 - Ella rock hike - Pallewela waterfall",
      "Day 05 - Safari - Udawalawe",
      "Day 06 - Galle Fort & beaches - Airport drop",
    ],
  },
];

const TourPage = () => {
  const [current, setCurrent] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [dayPlans, setDayPlans] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  const [days, setDays] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const toggleDetails = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(formRef.current!);

    const data = {
      title: formData.get("title"),
      name: formData.get("name"),
      whatsapp: formData.get("whatsapp"),
      email: formData.get("email"),
      people: formData.get("people"),
      days: formData.get("days"),
      start_date: formData.get("start_date"),
      places: formData.get("places"),
      message: formData.get("message"),
      daily_plan: dayPlans.join("\n")
    };

    emailjs
      .send("your_service_id", "your_template_id", data, "your_public_key")
      .then(() => {
        alert("Itinerary request sent via email!");

        const whatsappMessage = `Eco Love Tour Inquiry:
                                Title: ${data.title}
                                Name: ${data.name}
                                WhatsApp: ${data.whatsapp}
                                Email: ${data.email}
                                No. of People: ${data.people}
                                Days in Sri Lanka: ${data.days}
                                Start Date: ${data.start_date}
                                Places to Visit: ${data.places}
                                \nDaily Plan:\n${data.daily_plan}
                                \nMessage: ${data.message}`;

        window.open(`https://wa.me/94774191148?text=${encodeURIComponent(whatsappMessage)}`, "_blank");

        formRef.current?.reset();
        setDays(0);
        setDayPlans([]);
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Failed to send. Try again later.");
      });
  };

  return (
    <div className=" bg-gradient-to-b from-green-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {sliderImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Let’s Build Your Sri Lanka Experience
          </h1>
          <p className="text-lg text-white max-w-2xl mb-6">
            Choose a ready-made itinerary or customize your own dream adventure.
          </p>
          
        </div>
      </div>

      {/* Itineraries */}
      <section className="py-16 px-6  dark:bg-gray-800" id="itineraries">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Itineraries</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {itineraries.map((tour, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl shadow transition-all ${
                activeIndex === index ? "h-auto" : "h-[340px]"
              }`}
            >
              <img src={tour.image} alt={tour.title} className="w-full h-48 object-cover rounded-t-xl" />
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg">{tour.title}</h3>
                  <button
                    onClick={() => toggleDetails(index)}
                    className="text-green-800 hover:underline text-sm"
                  >
                    {activeIndex === index ? "Hide Details" : "Show Details"}
                  </button>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2 mt-1">
                  <CalendarDays size={16} />
                  {tour.days} Days
                </p>
                {activeIndex === index && (
                  <div className="mt-3 space-y-1 max-h-[200px] overflow-y-auto text-sm">
                    <p className="flex items-center gap-1 text-gray-500">
                      <MapPin size={14} />
                      {tour.details.length} Stops
                    </p>
                    {tour.details.map((day, i) => (
                      <div key={i} className="border-l-4 border-green-800 pl-3 text-gray-600 dark:text-gray-300">
                        {day}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Form */}
      <section id="form-section" className="bg-white dark:bg-gray-900 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Create Your Own Itinerary</h2>
            <form ref={formRef} onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg space-y-8">
  {/* Personal Details */}
  <div>
    <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">👤 Personal Information</h3>
    <div className="grid sm:grid-cols-2 gap-4">
      <div className="relative">
        <label className="text-sm text-gray-500 dark:text-gray-300">Title</label>
        <select name="title" className="w-full mt-1 p-3 rounded-lg border dark:bg-gray-900">
          <option value="Mr.">Mr.</option>
          <option value="Ms.">Ms.</option>
          <option value="Mrs.">Mrs.</option>
          <option value="Dr.">Dr.</option>
        </select>
      </div>
      <div className="relative">
        <label className="text-sm text-gray-500 dark:text-gray-300">Full Name</label>
        <input name="name" type="text" required className="w-full mt-1 p-3 rounded-lg border dark:bg-gray-900" />
      </div>
      <div className="relative">
        <label className="text-sm text-gray-500 dark:text-gray-300">WhatsApp Number</label>
        <input name="whatsapp" type="tel" className="w-full mt-1 p-3 rounded-lg border dark:bg-gray-900" />
      </div>
      <div className="relative">
        <label className="text-sm text-gray-500 dark:text-gray-300">Email</label>
        <input name="email" type="email" required className="w-full mt-1 p-3 rounded-lg border dark:bg-gray-900" />
      </div>
    </div>
  </div>

  {/* Itinerary Details */}
  <div>
    <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">🗺️ Itinerary Details</h3>
    <div className="grid sm:grid-cols-2 gap-4">
      <div>
        <label className="text-sm text-gray-500 dark:text-gray-300">Number of People</label>
        <input name="people" type="number" min="1" className="w-full mt-1 p-3 rounded-lg border dark:bg-gray-900" />
      </div>
      <div>
        <label className="text-sm text-gray-500 dark:text-gray-300">Trip Duration (Days)</label>
        <input
          name="days"
          type="number"
          min="1"
          value={days}
          onChange={(e) => setDays(Number(e.target.value))}
          className="w-full mt-1 p-3 rounded-lg border dark:bg-gray-900"
        />
      </div>
      <div>
        <label className="text-sm text-gray-500 dark:text-gray-300">Starting Date</label>
        <input name="start_date" type="date" className="w-full mt-1 p-3 rounded-lg border dark:bg-gray-900" />
      </div>
      <div>
        <label className="text-sm text-gray-500 dark:text-gray-300">Main Places to Visit</label>
        <input
          name="places"
          type="text"
          className="w-full mt-1 p-3 rounded-lg border dark:bg-gray-900"
          placeholder="e.g. Ella, Sigiriya, Mirissa"
        />
      </div>
    </div>

    {/* Dynamic Days Planner */}
    {days > 0 && (
      <div className="mt-6">
        <label className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300">
          ✍️ Your Daily Plan
        </label>
        <div className="space-y-3">
          {[...Array(days)].map((_, index) => (
            <div key={index}>
              <label className="text-sm text-gray-500 dark:text-gray-400 block mb-1">
                Day {index + 1} Plan
              </label>
              <input
                name={`day_${index + 1}`}
                type="text"
                placeholder={`e.g. Colombo to Kandy via Pinnawala`}
                className="w-full p-3 rounded-lg border dark:bg-gray-900"
              />
            </div>
          ))}
        </div>
      </div>
    )}
  </div>

  {/* Message Box */}
  <div>
    <label className="text-sm text-gray-500 dark:text-gray-300 mb-1 block">📝 Additional Notes</label>
    <textarea
      name="message"
      rows={4}
      className="w-full p-3 rounded-lg border dark:bg-gray-900"
      placeholder="Let us know any specific interests, activities, or needs..."
    />
  </div>

  {/* Info */}
  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
    Not sure where to start? Check our{" "}
    <Link to="/eco-love-tours/destinations" className="text-green-800 font-medium hover:underline">
      Destination Page
    </Link>
    .
  </p>

  {/* Submit */}
  <div className="text-center pt-4">
    <button
      type="submit"
      className="bg-green-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-800 transition-all shadow-md"
    >
      🚀 Submit Itinerary Request
    </button>
  </div>
</form>

        </div>
      </section>


            {/* CTA Section with Images */}
      <section className="bg-green-900 dark:bg-gray-800 py-12 px-6 rounded-xl max-w-6xl mx-auto my-16 text-center">
        <h3 className="text-3xl font-semibold mb-6 text-white dark:text-white">
          Ready to start your unforgettable Sri Lanka adventure?
        </h3>
        <p className="mb-8 text-gray-100 dark:text-gray-300 max-w-3xl mx-auto">
          Contact us today or browse our popular itineraries to find your perfect trip.  
          Experience breathtaking landscapes, rich culture, and unforgettable memories.
        </p>
        <div className="flex justify-center gap-6 mb-10">
          <Link
            to="/contact"
            className="bg-green-500 hover:bg-green-100 text-black font-semibold px-8 py-3 rounded-lg shadow transition"
          >
            Contact Us
          </Link>
         
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
          <img
            src="/Eco_Love_Tours/Tour_Images/image119.JPG"
            alt="Sri Lanka beach"
            className="rounded-lg object-cover h-40 w-full shadow-md"
          />
          <img
            src="/Eco_Love_Tours/Tour_Images/image175.JPG"
            alt="Sri Lanka nature"
            className="rounded-lg object-cover h-40 w-full shadow-md"
          />
          <img
            src="/Eco_Love_Tours/Tour_Images/image7.JPG"
            alt="Sri Lanka mountains"
            className="rounded-lg object-cover h-40 w-full shadow-md"
          />
        </div>
      </section>


    </div>
  );
};

export default TourPage;
