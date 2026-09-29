import React, { useState } from "react";
import { Star, Quote, ChevronDown, ChevronUp } from "lucide-react";
import LottieAnimationReview from "../LottieAnimationReview";

// Testimonial data remains consistent with your provided source
export const testimonials = [
  {
    id: 1,
    name: "Thelma R",
    country: "Australia",
    category: "Tours",
    rating: 5,
    text: "Malik was highly recommended to us, by 2 other families and we felt really safe choosing him to take us around beautiful Sri Lanka for 25 days - he helped us with the itinerary and choosing hotels along the way….always totally reliable, punctual and good company. We would happily recommend him to any age group. He definitely understood our needs and limitations, being in our 70’s and we never felt rushed. We learnt so much from him about the country. Thank You!",
    date: "August 2026"
  },
  {
    id: 2,
    name: "RoshK",
    country: "Melbourne, Australia",
    category: "Tours",
    rating: 5,
    text: "If you are like us—seasoned, highly independent travellers who usually prefer to figure everything out on your own—you might hesitate to hire a driver. We had spent a lot of time planning our Sri Lanka trip, with every intention of travelling independently. We had never hired a driver before. Choosing to hire Malik was, without a doubt, the single best decision we made for our holiday.\n\nMalik enriched our entire experience. Having a driver allowed us to sit back, relax, and soak in every moment, turning a busy trip into a genuine holiday. Having Malik was invaluable: we experienced things we would have completely missed or never gotten around to on our own.\n\nHere is why you should book Malik without hesitation:\nTotal Integrity & Zero Pushiness: Malik is deeply ethical, honest, moral, and trustworthy. He operates with total transparency, never takes kick-backs, and never pushes you into anything. He tells it to you straight and leaves every choice up to you.\n\nSafety & Seamless Planning: He is a safe, highly experienced driver/guide with great English. Long before we landed, his communication was fantastic—he helped recommend great places to visit, accommodation options and areas to stay. He made our itinerary all the better, tweaking the order in which we visited places and suggested some additions that turned out to be some of the highlights of our trip.\n\nUnrivalled Knowledge & Local Perspective: Malik is a wealth of history, facts, and local insights. He gave us deep context everywhere we went, shared his favourite Sri Lankan music, and taught us how to play Carrom! He also possesses the perfect splash of fun and cheekiness that makes you feel right at home.\n\nSensory & Intuitive Service: He reads people brilliantly—knowing exactly when to give you space and when to step in. He even seems to have a sixth sense for when you need a coffee break! He is patient and genuinely caring and always makes you feel comfortable.\n\nIncredible Eagle-Eye for Wildlife & Birdlife: Before we travelled, we had zero interest in birds. But Malik’s deep passion for Sri Lanka’s nature and wildlife was completely contagious, and before long, we were passionately bird-spotting right alongside him! He has an unbelievable eye for spotting things you would otherwise miss, pointing out incredible wildlife throughout our journey—from wild elephants and lizards to eagles and all sorts of colourful birds.\n\nAuthentic Culinary Experiences: We love local food, and thanks to Malik, we ate authentic meals we never would have found ourselves—often ordering off-menu items, trying new dishes, eating with our hands like locals, and practising the Sinhalese he taught us along the way.\n\nUltimate Flexibility & Going the Extra Mile: Nothing was ever too much trouble. From roadside coffee, tea, and market stops to handling rainy days in Trincomalee by organizing an impromptu Batik workshop in Sigiriya (where we even spotted wild elephants on the drive back!), he made every day an adventure.\n\nAbove all, Malik is kind, patient, and passionate about Sri Lanka and nature. He quickly became far more than just a driver/guide—he became a true friend whom we consider part of our family. Saying good bye to him at the end of our journey was incredibly hard.\n\nHe is one of those rare, exceptional humans. If you want a fun, stress-free, deeply authentic, and completely tailored experience in Sri Lanka, book Malik. You will be so glad you did!",
    date: "July 2026"
  },
  {
    id: 3,
    name: "Debbie K",
    country: "United Kingdom",
    category: "Tours",
    rating: 5,
    text: "I had the most amazing and awe inspiring experience with Nihal at his jewellery class. Nihal is the most dedicated and talented Artisan. He was so patient with me as I asked many questions about what he was doing during the process of making me the most exquisite ring. His knowledge of gems is unlimited. I would recommend this experience as an absolute must on anyone’s trip to Sri Lanka. Thanks you Nihal, Nipur and Tutu. I will always remember this experience as the best I had on my trip to Sri Lanka.",
    date: "August 2026"
  },
  {
    id: 4,
    name: "Pau M",
    country: "Spain",
    category: "Tours",
    rating: 5,
    text: "It has been a totally unique experience. We did the jewelry activity and we could not be happier. We arrived at their workshop where there was a man with a lot of experience and another who was quite a bit younger. They made us some beautiful custom rings with good materials and taking care of every detail precisely. They were very nice, they explained how it works to us, and they led us participate in the manual process they use to make the jewelry. We are taking home a beautiful memory of Sri Lanka that is totally worth it. Thank you very much!",
    date: "July 2026"
  },
  {
    id: 5,
    name: "Eli S",
    country: "United Kingdom",
    category: "Tours",
    rating: 5,
    text: "We are just at the end of a fantastic 2 week tour around Sri Lanka with Malik as a family of 4 with 2 teens. Malik really helped to make our trip relaxing and totally hassle free. He was reliable, a very safe driver, the van was very comfortable and spacious with very welcome aircon. What stood out was Malik's professionalism, intimate knowledge and pride of his country, the history and religion and especially the wildlife and birds. Malik was flexible with our itinerary, seamlessly organised safaris, surfing lessons and snorkelling at short notice and always had suggestions for good places to eat and visit. Another highlight was the cooking lesson at his house with his mother and Malik showing us around his hometown of Galle at dusk.",
    date: "July 2026"
  },
  {
    id: 6,
    name: "Belinda",
    country: "Sydney, Australia",
    category: "Tours",
    rating: 5,
    text: "Malik was very helpful from the moment I enquired about a safari in udawalawe or yala and assisted me with which safari to choose. He also made sure that I would make the airport on time and arranged a custom itinerary for the day. I had the jeep to myself, with just the driver and Malik during the safari. He is easy to talk to, friendly, knowledgeable about all of sri lanka and professional. The car was also very comfortable and air-conditioned. Highly recommend Malik!",
    date: "March 2026"
  },
  {
    id: 7,
    name: "sevvi",
    country: "United Kingdom",
    category: "Tours",
    rating: 5,
    text: "We contacted Malik about organising a private 2 hour boat tour of Koggala Lake for us (4 adults), and he happily was free to help us on the day we desired. Organising the tour and the meet up location with Malik was so easy using WhatsApp. We were really happy when he said his tours are eco conscious so wouldn't include things like feeding monkeys, which we quite agreed with! Malik was friendly and easy to talk to and very knowledgable about the area and could answer all our questions. His boat driver was also very friendly and safe and experienced. The Koggala Lake tour included a stop on Cinnamon Island to have a demonstration on the Cinnamon being harvested from the tree and an opportunity to purchase direct from the family there, and whilst we did want to buy from them there was no pushy sales tactics and we could have refused if we did not wish to. We were so happy with our tour and pleased we chose Eco Love Tours, even if it was just for this one short excursion. I see that other people have used Malik to organise much longer tours for their complete holiday in Sri Lanka, and I imagine these are very interesting. Would highly recommend this company, and if we return for another holiday to Sri Lanka we would certainly reach out to help plan our itinerary and some tours for us. Many thanks Malik 😊",
    date: "March 2026"
  },
  {
    id: 8,
    name: "Julie H",
    country: "United Kingdom",
    category: "Tours",
    rating: 5,
    text: "Eco Tours and Malik was originally recommended to me by a friend who came to Sri Lanka last year. In terms of pre tour preparation, Malik was supportive, communicative, flexible and informative. When I arrived in Sri Lanka we began the tour with the incredibly awesome Manusith as our driver and guide. He was so patient and kind and nothing was too much trouble for him to ensure we had the best time. He made sure that we could see as much as possible without wearing us out! Manusith went beyond expectations in every way. He seems to know so much about the country no matter where we went. We wanted to watch the England v NZ T20 cricket in Colombo. Both Malik and Manusith went out of their way to make this happen for us. I would wholeheartedly recommend EcoLove Tours if you want a bespoke and caring experience. Absolutely amazing and thank you so much Malik and Manusith.",
    date: "February 2026"
  },
  {
    id: 9,
    name: "Thomas Dres Nielsen",
    country: "Odense, Denmark",
    category: "Tours",
    rating: 5,
    text: "We have had the pleasure of having Shehan as our guide on our family trip around Sri Lanka for 21 days. Shehan is very welcoming and sweet. We had an experience that really would help and do so much to give us the best experience in Sri Lanka. Shehan was so sweet and attentive that on my wife’s birthday he had arranged a nice birthday cake for her. When we travel as a family with 2 boys (9 and 12) there are days when you need a break. We all found a good understanding from Shehan. Thanks. Overall we are very happy for our days with him and we will miss him.",
    date: "January 2026"
  },
  {
    id: 10,
    name: "Svenja K",
    country: "Germany",
    category: "Tours",
    rating: 5,
    text: "We booked a safari tour in Udawalawe National Park through Malik. The organization and communication was very good and we were able to book at very short notice. Overall a great service. The safari itself was incredibly great. Harsha our safari guide, put a lot of effort into it, we were picked up on time and all our wishes were taken care of. We have seen many different animals and learned a lot. He had a pair of binoculars with which we observed some birds. I would recommend everyone to organize a safari about Malik.",
    date: "January 2026"
  },
  {
    id: 11,
    name: "Maps26321823710",
    country: "Bolanos de Calatrava, Spain",
    category: "Tours",
    rating: 5,
    text: "We took our family trip. It was an amazing experience through Sri Lanka, amazing landscapes, unique monuments and lovely people, a wonderful trip to which our driver Dinesh contributed, he moved us around the country effectively and safely, helped us in anything we need and led us to discover restaurants and places that without him we would never have known. If you are thinking of visiting Sri Lanka you will not find a better driver than Dinesh.",
    date: "December 2025"
  },
  {
    id: 12,
    name: "Grace Martin",
    country: "United Kingdom",
    category: "Tours",
    rating: 5,
    text: "I had THE best day - we made two rings, with a great selection of stones to choose from. I brought two photos of rings (not the easiest designs) and have left with two rings which look identical. Lovely family run business, in the home - you can really see the care and love that put into this and it was such a special day for me",
    date: "December 2025"
  },
  {
    id: 13,
    name: "Carlo S",
    country: "Italy",
    category: "Tours",
    rating: 5,
    text: "Malik Perera from EcoTours is an outstanding guide and driver. We were traveling with Malik for 11 days in November 2025. His deep knowledge, warm personality, and exceptional professionalism made our tour unforgettable. He always ensured our comfort, was very reliable, shared fascinating insights, and went above and beyond to create a truly memorable experience. Highly recommended!",
    date: "November 2025"
  },
  {
    id: 14,
    name: "Seaside20605213969",
    country: "Australia",
    category: "Tours",
    rating: 5,
    text: "We've just arrived home to Australia after a two week tour around Sri Lanka with Malik, who was a wonderful tour guide and driver throughout our adventure. Malik was a very clear and courteous communicator from the moment we started discussing the trip, providing wonderful itinerary advice right through to the days before the trip letting us know about local conditions and tips about packing. He collected us from the airport and was a welcoming face to the country, of which he is very passionate and proud of. Throughout the journey, he provided wonderful tour information, often joining us on hikes and some activities. He is incredibly connected and knew each area we visited extremely well. He also gave us insider knowledge about certain activities, tourist attractions and local providers which really elevated the trip. He was also extremely patient with three kids on board and their numerous toilet stops and had a great sense of humour and generous spirit. He's also a very talented photographer and knows all the spots to get those perfect family photos. The saddest part was saying goodbye at the airport and while we feel like we're a little less of a family without our new friend; we're already looking forward to our next trip to Sri Lanka. We can't recommend Malik enough.",
    date: "October 2025"
  },
  {
    id: 15,
    name: "Smawds81",
    country: "Australia",
    category: "Tours",
    rating: 5,
    text: "From the moment I made contact with Malik (who had been recommended to me by a friend) I was impressed. He took the time to understand the sort of holiday myself and my parents wanted, and then developed a 2.5 week itinerary for us around beautiful Sri Lanka. He was responsive and helpful, but also gave me time to think about my options without pressuring me to make a decision. We then arrived in Sri Lanka and had the most wonderful 2.5 weeks with Shehan as our driver / tour guide. He was very kind and thoughtful, and took very good care of us. He was so knowledgable about Sri Lanka, he has a keen eye for wildlife, and he shared so many stories & facts about Sri Lankan culture and way of life. He was flexible and adapted our itinerary to suit our needs and interests as our holiday progressed & as we got to know each other more. We always felt very safe and looked after. And we had so many laughs along the way! Thank you Eco Love Tours - we will be back!",
    date: "September 2025"
  },
  {
    id: 16,
    name: "Ràimon S",
    country: "Spain",
    category: "Tours",
    rating: 5,
    text: "The experience has been unbeatable. We did the workshop 3 friends and we could see how the process of creating a personalized ring is in the first person. The boys have been very friendly and attentive throughout, explaining all the steps and doing their best to make us feel at home. We have been able to choose how we wanted the ring, what I draw and what I write. It has been a 100% recommended experience that also allows you to take a very beautiful memory.",
    date: "August 2025"
  },
  {
    id: 17,
    name: "J S",
    country: "USA",
    category: "Tours",
    rating: 5,
    text: "Our trip through Sri Lanka with Dinesh was absolutely amazing. We spent almost three weeks traveling around the country with him as our driver, and it was truly an unforgettable experience. We explored so many beautiful places, including Galle, Mirissa, Yala National Park, Ella, Horton Plains National Park, Kandy, and Sigiriya, as well as several stunning tea plantations along the way. Every destination had its own charm, and traveling by car allowed us to experience the country in a very authentic and relaxed way. We booked all our hotels independently, and Dinesh was our driver throughout the entire journey. Everything went smoothly from start to finish. Even though some of the roads were a bit bumpy at times, we always felt safe and well taken care of. Dinesh was reliable, professional, and always punctual. He navigated the routes confidently and made the long drives comfortable for us. Thanks to this wonderful journey, we were able to create truly special memories that we will cherish forever. We are incredibly grateful for this experience and can wholeheartedly recommend traveling through Sri Lanka with Dinesh. Thank you for everything!",
    date: "August 2025"
  }
];

const TestimonialsPage: React.FC = () => {
  // Holds only the ID of the ONE currently expanded card
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId((currentId) => (currentId === id ? null : id));
  };

  return (
    <section className="bg-[#FDFCFB] py-24 md:py-40 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24 md:mb-32">
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-12 bg-emerald-800" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-800">
                Guest Chronicles
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif italic text-slate-900 leading-tight">
              What Our <br /> Guests Say.
            </h2>
            <p className="text-slate-500 text-sm uppercase tracking-widest leading-loose">
              Real experiences from travelers who discovered the soul of Sri Lanka.
            </p>
          </div>
        </div>

        {/* Row Grid: items-start prevents neighboring cards in the same row from stretching */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              isExpanded={expandedId === testimonial.id}
              onToggle={() => toggleExpand(testimonial.id)}
            />
          ))}
        </div>

        {/* Interactive Verification Section */}
        <div className="mt-40 border-t border-slate-100 pt-24 text-center">
          <div className="max-w-md mx-auto mb-16">
             <LottieAnimationReview />
          </div>
          
          <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 mb-12">
            Verified On Global Platforms
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 hover:opacity-100 transition-opacity duration-700">
            <SocialLink href="https://www.tripadvisor.com/Attraction_Review-g297896-d19911120-Reviews-Eco_Love_Tours-Galle_Galle_District_Southern_Province.html" img="tripadvisor.png" label="TripAdvisor" />
            <SocialLink href="https://g.co/kgs/rnwAB63" img="google.png" label="Google" />
            <SocialLink href="https://www.facebook.com/share/1Ce5zKiE1B/" img="facebook.png" label="Facebook" />
            <SocialLink href="https://www.instagram.com/ecolovetours" img="intagram.png" label="Instagram" />
          </div>
        </div>
      </div>
    </section>
  );
};

// Sub-component: Controlled individually by the parent's expandedId
const TestimonialCard: React.FC<{
  testimonial: typeof testimonials[0];
  isExpanded: boolean;
  onToggle: () => void;
}> = ({ testimonial, isExpanded, onToggle }) => {
  const characterLimit = 220;
  const isLongText = testimonial.text.length > characterLimit;

  const displayedText = isExpanded
    ? testimonial.text
    : testimonial.text.slice(0, characterLimit);

  return (
    <div className="self-start flex flex-col bg-white border border-slate-100 p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)] transition-all duration-300 group">
      <div className="flex flex-col">
        <Quote className="text-emerald-900/10 mb-6 group-hover:text-emerald-900/20 transition-colors" size={40} />
        
        {/* Review body */}
        <div>
          <p className="text-slate-600 text-sm leading-relaxed font-light italic whitespace-pre-line">
            "{displayedText}{!isExpanded && isLongText ? "..." : ""}"
          </p>

          {isLongText && (
            <button
              onClick={onToggle}
              className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-emerald-800 hover:text-emerald-950 transition-colors py-1"
            >
              {isExpanded ? (
                <>
                  Show Less <ChevronUp size={14} />
                </>
              ) : (
                <>
                  See More <ChevronDown size={14} />
                </>
              )}
            </button>
          )}
        </div>

        {/* Footer */}
        <div className="pt-8 mt-6 border-t border-slate-50 flex flex-col gap-4">
          <div className="flex gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} size={12} className="fill-emerald-800 text-emerald-800" />
            ))}
          </div>
          <div>
            <h4 className="text-sm font-serif italic text-slate-900">{testimonial.name}</h4>
            <p className="text-[9px] font-black uppercase tracking-widest text-emerald-800/40 mt-0.5">
              • {testimonial.country} • {testimonial.date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialLink = ({ href, img, label }: { href: string; img: string; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col items-center gap-4 transition-all"
    aria-label={label}
  >
    <img src={img} alt={label} className="w-10 h-10 grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" />
    <span className="text-[8px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">{label}</span>
  </a>
);

export default TestimonialsPage;