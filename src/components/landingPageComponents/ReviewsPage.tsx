import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, UserCircle, ChevronDown, ChevronUp } from 'lucide-react';


// --- DATA ---
const sliderImages = Array.from({ length: 10 }, (_, i) => `/Landing_Page_Images/IMG_${i + 1}.JPG`);

// Reuse your reviewsData array here...
const reviewsData = [
  // --- LATEST REVIEWS (JULY - SEPTEMBER 2026) ---
  {
    id: 1,
    name: "Selina Poglonik",
    country: "Local Guide",
    category: "Kitchen",
    rating: 5,
    text: "It was just spactaculare! The owner and chef was so so nice and we were included in making all these fantastic sri lankan disces! Afterwards everything was brought to the table, where we ate the most insanly good disces eeeever!!! 9 different disces were made and every one of it tasted so so good. After eating and enjoying the things we made we got our own roasted curry powder and all the recipes. I would highly recommend spending an evening/day here!",
    date: "September 2026"
  },
  {
    id: 2,
    name: "Amandine Contreras",
    country: "Traveler",
    category: "Kitchen",
    rating: 5,
    text: "I can’t say enough good things about this cooking class! I love to do cooking classes in every country I go to. It’s a great way to get to know and appreciate a new culture. This was by far my favourite for many reasons. They were not rigid, they were flexible with timing and last minute I wanted to bring a friend- they welcomed her with open arms. Even though my friend is a local, I felt included with both Sinhala and English being used. It didn’t feel like a structured lesson, it was the full cultural experience. I felt like I was in the kitchen with family getting ready for a big family dinner. It was so fun! And the biggest reason to do this class was the food! It was unbelievable! So so soooo good! Normally in cooking classes you do maybe 1-3 dishes. We did 9 in a short amount of time. This made Sri Lankan cooking feel accessible, realistic and fun to make at home. It was very healthy but full of flavour. Every dish tasted vastly different but equally as delicious. While we were eating (enough for 10 people…) they were kind enough to give us mangoes and avocados from their tree to try. Don’t overthink it- this was my highlight in Sri Lanka! Thank you so much guys!",
    date: "July 2026"
  },
  {
    id: 3,
    name: "Марина Илюхина",
    country: "Local Guide",
    category: "Kitchen",
    rating: 5,
    text: "I just love this experience! Amazing and friendly people, thoughtful class and great food!",
    date: "July 2026"
  },
  {
    id: 4,
    name: "RoshK",
    country: "Melbourne, Australia",
    category: "Tours",
    rating: 5,
    text: "If you are like us—seasoned, highly independent travellers who usually prefer to figure everything out on your own—you might hesitate to hire a driver. We had spent a lot of time planning our Sri Lanka trip, with every intention of travelling independently. We had never hired a driver before. Choosing to hire Malik was, without a doubt, the single best decision we made for our holiday.\n\nMalik enriched our entire experience. Having a driver allowed us to sit back, relax, and soak in every moment, turning a busy trip into a genuine holiday. Having Malik was invaluable: we experienced things we would have completely missed or never gotten around to on our own.\n\nHere is why you should book Malik without hesitation:\nTotal Integrity & Zero Pushiness: Malik is deeply ethical, honest, moral, and trustworthy. He operates with total transparency, never takes kick-backs, and never pushes you into anything. He tells it to you straight and leaves every choice up to you.\n\nSafety & Seamless Planning: He is a safe, highly experienced driver/guide with great English. Long before we landed, his communication was fantastic—he helped recommend great places to visit, accommodation options and areas to stay. He made our itinerary all the better, tweaking the order in which we visited places and suggested some additions that turned out to be some of the highlights of our trip.\n\nUnrivalled Knowledge & Local Perspective: Malik is a wealth of history, facts, and local insights. He gave us deep context everywhere we went, shared his favourite Sri Lankan music, and taught us how to play Carrom! He also possesses the perfect splash of fun and cheekiness that makes you feel right at home.\n\nSensory & Intuitive Service: He reads people brilliantly—knowing exactly when to give you space and when to step in. He even seems to have a sixth sense for when you need a coffee break! He is patient and genuinely caring and always makes you feel comfortable.\n\nIncredible Eagle-Eye for Wildlife & Birdlife: Before we travelled, we had zero interest in birds. But Malik’s deep passion for Sri Lanka’s nature and wildlife was completely contagious, and before long, we were passionately bird-spotting right alongside him! He has an unbelievable eye for spotting things you would otherwise miss, pointing out incredible wildlife throughout our journey—from wild elephants and lizards to eagles and all sorts of colourful birds.\n\nAuthentic Culinary Experiences: We love local food, and thanks to Malik, we ate authentic meals we never would have found ourselves—often ordering off-menu items, trying new dishes, eating with our hands like locals, and practising the Sinhalese he taught us along the way.\n\nUltimate Flexibility & Going the Extra Mile: Nothing was ever too much trouble. From roadside coffee, tea, and market stops to handling rainy days in Trincomalee by organizing an impromptu Batik workshop in Sigiriya (where we even spotted wild elephants on the drive back!), he made every day an adventure.\n\nAbove all, Malik is kind, patient, and passionate about Sri Lanka and nature. He quickly became far more than just a driver/guide—he became a true friend whom we consider part of our family. Saying good bye to him at the end of our journey was incredibly hard.\n\nHe is one of those rare, exceptional humans. If you want a fun, stress-free, deeply authentic, and completely tailored experience in Sri Lanka, book Malik. You will be so glad you did!",
    date: "July 2026"
  },
  {
    id: 5,
    name: "Debbie K",
    country: "United Kingdom",
    category: "Tours",
    rating: 5,
    text: "I had the most amazing and awe inspiring experience with Nihal at his jewellery class. Nihal is the most dedicated and talented Artisan. He was so patient with me as I asked many questions about what he was doing during the process of making me the most exquisite ring. His knowledge of gems is unlimited. I would recommend this experience as an absolute must on anyone’s trip to Sri Lanka. Thanks you Nihal, Nipur and Tutu. I will always remember this experience as the best I had on my trip to Sri Lanka.",
    date: "August 2026"
  },
  {
    id: 6,
    name: "Pau M",
    country: "Spain",
    category: "Tours",
    rating: 5,
    text: "It has been a totally unique experience. We did the jewelry activity and we could not be happier. We arrived at their workshop where there was a man with a lot of experience and another who was quite a bit younger. They made us some beautiful custom rings with good materials and taking care of every detail precisely. They were very nice, they explained how it works to us, and they let us participate in the manual process they use to make the jewelry. We are taking home a beautiful memory of Sri Lanka that is totally worth it. Thank you very much!",
    date: "July 2026"
  },
  {
    id: 7,
    name: "Eli S",
    country: "United Kingdom",
    category: "Tours",
    rating: 5,
    text: "We are just at the end of a fantastic 2 week tour around Sri Lanka with Malik as a family of 4 with 2 teens. Malik really helped to make our trip relaxing and totally hassle free. He was reliable, a very safe driver, the van was very comfortable and spacious with very welcome aircon. What stood out was Malik's professionalism, intimate knowledge and pride of his country, the history and religion and especially the wildlife and birds. Malik was flexible with our itinerary, seamlessly organised safaris, surfing lessons and snorkelling at short notice and always had suggestions for good places to eat and visit. Another highlight was the cooking lesson at his house with his mother and Malik showing us around his hometown of Galle at dusk.",
    date: "July 2026"
  },

  // --- 2026 REVIEWS ---
  {
    id: 8,
    name: "GetYourGuide traveler",
    country: "United Kingdom",
    category: "Kitchen",
    rating: 5,
    text: "It was a really fun evening learning to cook Sri Lankan food. The hosts were really accommodating of us being vegetarian and very friendly. Must do when in Galle!",
    date: "April 2026"
  },
  {
    id: 9,
    name: "Mitch",
    country: "Australia",
    category: "Kitchen",
    rating: 5,
    text: "Amazing cooking experience with Eco Love kitchen. Very traditional, we were welcomed into the family's home and taught how to cook 7 recipes. She was incredibly detailed, patient and skillful at cooking. We sat down and had a big feast at the end. All the food was fantastic. Highly recommend this cooking activity!",
    date: "April 2026"
  },
  {
    id: 10,
    name: "Belinda",
    country: "Sydney, Australia",
    category: "Tours",
    rating: 5,
    text: "Malik was very helpful from the moment I enquired about a safari in udawalawe or yala and assisted me with which safari to choose. He also made sure that I would make the airport on time and arranged a custom itinerary for the day. I had the jeep to myself, with just the driver and Malik during the safari. He is easy to talk to, friendly, knowledgeable about all of sri lanka and professional. The car was also very comfortable and air-conditioned. Highly recommend Malik!",
    date: "March 2026"
  },
  {
    id: 11,
    name: "sevvi",
    country: "United Kingdom",
    category: "Tours",
    rating: 5,
    text: "We contacted Malik about organising a private 2 hour boat tour of Koggala Lake for us (4 adults), and he happily was free to help us on the day we desired. Organising the tour and the meet up location with Malik was so easy using WhatsApp. We were really happy when he said his tours are eco conscious so wouldn't include things like feeding monkeys, which we quite agreed with! Malik was friendly and easy to talk to and very knowledgable about the area and could answer all our questions. His boat driver was also very friendly and safe and experienced. The Koggala Lake tour included a stop on Cinnamon Island to have a demonstration on the Cinnamon being harvested from the tree and an opportunity to purchase direct from the family there, and whilst we did want to buy from them there was no pushy sales tactics and we could have refused if we did not wish to. We were so happy with our tour and pleased we chose Eco Love Tours, even if it was just for this one short excursion. I see that other people have used Malik to organise much longer tours for their complete holiday in Sri Lanka, and I imagine these are very interesting. Would highly recommend this company, and if we return for another holiday to Sri Lanka we would certainly reach out to help plan our itinerary and some tours for us. Many thanks Malik 😊",
    date: "March 2026"
  },
  {
    id: 12,
    name: "Christina R",
    country: "Hamburg, Germany",
    category: "Kitchen",
    rating: 5,
    text: "Our two-week tour of Sri Lanka with Malik from Eco Love Tours was simply unforgettable – and we owe that above all to him. From the first minute to the last, Malik did his job not only professionally, but with an incredible amount of passion. He didn't just take us from place to place, he really made us feel his country. Each stop – whether Sigiriya, Kandy, Nuwara Eliya, Ella, Udawalawa National Park or Galle – became something very special through his stories, knowledge and affectionate nature. In addition to all the exciting insights and good conversations, we also laughed an infinite amount together – that’s exactly what made the trip so special for us. An absolute highlight was the visit to the local market followed by cooking together at his mother's. We will never forget this warmth, openness and hospitality – it was one of the most authentic moments of our trip. The jewellery workshop in Galle was also unique and gave us a whole new insight into the culture and craft of the country. Malik always felt what we needed – whether it was small spontaneous stops, special views or just a good conversation. We felt safe, well looked after and welcomed at all times. Sri Lanka has taken our hearts by storm – but Malik was the reason why this journey got so deep under our skin. We carry the memories not only in our hearts, but also on our hands and on our skin. We are so in love with this wonderful country that it is already clear to us: We will be back next year – because there is still so much to discover. We would always travel again with Malik from Eco Love Tours and can recommend him wholeheartedly. Thank you Malik – I’ll see you again very soon! 🤍",
    date: "March 2026"
  },
  {
    id: 13,
    name: "Julie H",
    country: "United Kingdom",
    category: "Tours",
    rating: 5,
    text: "Eco Tours and Malik was originally recommended to me by a friend who came to Sri Lanka last year. In terms of pre tour preparation, Malik was supportive, communicative, flexible and informative. When I arrived in Sri Lanka we began the tour with the incredibly awesome Manusith as our driver and guide. He was so patient and kind and nothing was too much trouble for him to ensure we had the best time. He made sure that we could see as much as possible without wearing us out! Manusith went beyond expectations in every way. He seems to know so much about the country no matter where we went. We wanted to watch the England v NZ T20 cricket in Colombo. Both Malik and Manusith went out of their way to make this happen for us. I would wholeheartedly recommend EcoLove Tours if you want a bespoke and caring experience. Absolutely amazing and thank you so much Malik and Manusith.",
    date: "February 2026"
  },
  {
    id: 14,
    name: "Ruth C",
    country: "Udaipur, India",
    category: "Kitchen",
    rating: 5,
    text: "We had an amazing diverse trip around Sri Lanka with Malik. Malik suggested the itinerary according to our wants. He introduced us to the history of Sri Lanka and Buddhism. He was excellent on the nature. We had a great trip around Horton Plains, fantastic safari at Udelwella and a lagoon trip in Katemylaka. We also had an amazing sunset boat ride around Habarama lake. Malik was very knowlegeable about the flora and fauna. I saw an amazing collection of birds and lizards. The elephants were amazing. The leopard unfortunately was elusive although did find a fresh poo and footprint! We enjoyed the beaches around Dickwella and around Galle. Malik looked after so well and made us confident to try local cafes and fruits. We also had a cookery lesson with his mum which was amazing from the shopping to the cooking techniques. I would loved that Malik was aware of the environmental impacts of tourism and helped us to minimise our impact when we could. I would recommend this company to all my family and friends without reservation.",
    date: "February 2026"
  },
  {
    id: 15,
    name: "Jeremy",
    country: "United Kingdom",
    category: "Kitchen",
    rating: 5,
    text: "Wow. What a fantastic activity. We both loved it - understanding how food is prepared and cooked, and of course the tasting! Don’t eat breakfast/lunch beforehand, as the output of the session is sensational. Highly recommended, for the food, teaching & the wonderful hostess. Thank you, Tanya & Jeremy",
    date: "February 2026"
  },
  {
    id: 16,
    name: "Jacqueline Taylor",
    country: "United Kingdom",
    category: "Kitchen",
    rating: 5,
    text: "The BEST EXPERIENCE EVER!!!! Outstanding in every way! I wanted to find a warm, welcoming, and authentic cooking class - and WOW, this is exactly what we found. From the moment we turned up, we were treated like friends. Great English spoken, lovely interaction and super conversation and stories shared throughout the evening. Real authentic cooking displayed (and learnt) History and traditions shared with us with was superb and so very interesting. My gosh! I really don't expect to taste anything better during our time in Sri Lanka! Yruly exceptional , cooked with love and heart! Hands on! Shown techniques, everything explained, very interesting and wonderful teaching! An experience that will last a lifetime! Honestly fell in love with this cooking class, the food BUT more importantly the nicest family/people! You truly went above and beyond, completely exceeded our expectations and had the most incredible time!",
    date: "February 2026"
  },
  {
    id: 17,
    name: "Thomas Dres Nielsen",
    country: "Odense, Denmark",
    category: "Tours",
    rating: 5,
    text: "We have had the pleasure of having Shehan as our guide on our family trip around Sri Lanka for 21 days. Shehan is very welcoming and sweet. We had an experience that really would help and do so much to give us the best experience in Sri Lanka. Shehan was so sweet and attentive that on my wife’s birthday he had arranged a nice birthday cake for her. When we travel as a family with 2 boys (9 and 12) there are days when you need a break. We all found a good understanding from Shehan. Thanks. Overall we are very happy for our days with him and we will miss him.",
    date: "January 2026"
  },
  {
    id: 18,
    name: "Svenja K",
    country: "Germany",
    category: "Tours",
    rating: 5,
    text: "We booked a safari tour in Udawalawe National Park through Malik. The organization and communication was very good and we were able to book at very short notice. Overall a great service. The safari itself was incredibly great. Harsha our safari guide, put a lot of effort into it, we were picked up on time and all our wishes were taken care of. We have seen many different animals and learned a lot. He had a pair of binoculars with which we observed some birds. I would recommend everyone to organize a safari about Malik.",
    date: "January 2026"
  },
  {
    id: 19,
    name: "Bianca A",
    country: "Australia",
    category: "Kitchen",
    rating: 5,
    text: "So grateful that a friend of mine recommended Malik, when I told him we were heading to Sri Lanka. From the moment we reached out Malik made everything super easy! We spent almost three weeks with Malik, travelling all across Sri Lanka. Not only was everything incredibly comfortable but Malik always went above and beyond to recommend experiences or stops along the way, making our trip all the more memorable. We also had the opportunity to do a cooking class with Malik and his family! Which was so much fun, even when his mum, questioned my chopping skills! 😂 I highly recommend Malik for anyone looking to head to Sri Lanka!",
    date: "January 2026"
  },
  {
    id: 20,
    name: "Friederike",
    country: "Germany",
    category: "Lodge",
    rating: 5,
    text: "We stayed at Malik’s place for a total of two weeks, and it was the perfect starting point for our Sri Lanka journey. The place itself is absolutely beautiful. Our room was spotlessly clean, very well maintained, and lovingly decorated with great attention to detail. Everything felt fresh, comfortable, and thoughtfully arranged. Malik and his family welcomed us incredibly warmly, and we immediately felt at home. The breakfast was without a doubt the best we had during our entire trip in Sri Lanka. Every morning, Malik’s mother, Malody, prepared fresh, delicious meals for us with so much love. Unfortunately, during our time in Sri Lanka, a cyclone hit the country... Throughout this difficult situation, Malik was incredibly supportive. Malik, his mother, and his brother are truly amazing people – warm-hearted, generous, and genuine. It was an absolute honor to stay with them.",
    date: "January 2026"
  },

  // --- 2025 REVIEWS ---
  {
    id: 21,
    name: "Maps26321823710",
    country: "Bolanos de Calatrava, Spain",
    category: "Tours",
    rating: 5,
    text: "We took our family trip. It was an amazing experience through Sri Lanka, amazing landscapes, unique monuments and lovely people, a wonderful trip to which our driver Dinesh contributed, he moved us around the country effectively and safely, helped us in anything we need and led us to discover restaurants and places that without him we would never have known. If you are thinking of visiting Sri Lanka you will not find a better driver than Dinesh.",
    date: "December 2025"
  },
  {
    id: 22,
    name: "Grace Martin",
    country: "United Kingdom",
    category: "Tours",
    rating: 5,
    text: "I had THE best day - we made two rings, with a great selection of stones to choose from. I brought two photos of rings (not the easiest designs) and have left with two rings which look identical. Lovely family run business, in the home - you can really see the care and love that put into this and it was such a special day for me",
    date: "December 2025"
  },
  {
    id: 23,
    name: "GetYourGuide traveler",
    country: "Germany",
    category: "Kitchen",
    rating: 5,
    text: "My boyfriend and I had an absolutely amazing time at this cooking class. Malik and his mother were incredibly kind, warm, and welcoming, and this was by far the coolest experience we had during our Sri Lanka vacation. We cooked eight different vegan (on our request) dishes, all using fresh local ingredients, and everything was explained with so much passion and knowledge. We even learned how to make the spice mixes. Malik and his mother also shared a lot about Sri Lankan cuisine and local culture, which made the experience even more special. Also, the family atmosphere was truly unique and authentic, as we were cooking in their own kitchen. And finally the food was simply exceptional. We have been traveling around Sri Lanka for a while now, and this was hands down the best food we have eaten so far. We can truly recommend this cooking class to everyone. It was a real enrichment for us and an unforgettable experience. ☀️🌼",
    date: "December 2025"
  },
  {
    id: 24,
    name: "Klemens",
    country: "Germany",
    category: "Lodge",
    rating: 5,
    text: "Very friendly host family! Clean room, cozy bed and nice clean bathroom. Quiet at night. Incredible Sri Lankan breakfast! Everything perfect! The family offers for free bicycles to get into Galle. Distance to Galle Fort is manageable. There is nothing to dislike!",
    date: "December 2025"
  },
  {
    id: 25,
    name: "Carlo S",
    country: "Italy",
    category: "Tours",
    rating: 5,
    text: "Malik Perera from EcoTours is an outstanding guide and driver. We were traveling with Malik for 11 days in November 2025. His deep knowledge, warm personality, and exceptional professionalism made our tour unforgettable. He always ensured our comfort, was very reliable, shared fascinating insights, and went above and beyond to create a truly memorable experience. Highly recommended!",
    date: "November 2025"
  },
  {
    id: 26,
    name: "Nithya",
    country: "Australia",
    category: "Kitchen",
    rating: 5,
    text: "This was one of the best activities I’ve done in Sri Lanka and the best cooking class I’ve been to. The hosts are so welcoming and knowledgeable, we had the best experience and learnt so much. We recommended this to our friends as well who also had an amazing time, and I would so recommend them to anyone!!! We also booked a jewellery workshop through them which was also fantastic. 100% recommend!",
    date: "November 2025"
  },
  {
    id: 27,
    name: "Seaside20605213969",
    country: "Australia",
    category: "Tours",
    rating: 5,
    text: "We've just arrived home to Australia after a two week tour around Sri Lanka with Malik, who was a wonderful tour guide and driver throughout our adventure. Malik was a very clear and courteous communicator from the moment we started discussing the trip, providing wonderful itinerary advice right through to the days before the trip letting us know about local conditions and tips about packing. He collected us from the airport and was a welcoming face to the country, of which he is very passionate and proud of. Throughout the journey, he provided wonderful tour information, often joining us on hikes and some activities. He is incredibly connected and knew each area we visited extremely well. He also gave us insider knowledge about certain activities, tourist attractions and local providers which really elevated the trip. He was also extremely patient with three kids on board and their numerous toilet stops and had a great sense of humour and generous spirit. He's also a very talented photographer and knows all the spots to get those perfect family photos. The saddest part was saying goodbye at the airport and while we feel like we're a little less of a family without our new friend; we're already looking forward to our next trip to Sri Lanka. We can't recommend Malik enough.",
    date: "October 2025"
  },
  {
    id: 28,
    name: "Smawds81",
    country: "Australia",
    category: "Tours",
    rating: 5,
    text: "From the moment I made contact with Malik (who had been recommended to me by a friend) I was impressed. He took the time to understand the sort of holiday myself and my parents wanted, and then developed a 2.5 week itinerary for us around beautiful Sri Lanka. He was responsive and helpful, but also gave me time to think about my options without pressuring me to make a decision. We then arrived in Sri Lanka and had the most wonderful 2.5 weeks with Shehan as our driver / tour guide. He was very kind and thoughtful, and took very good care of us. He was so knowledgable about Sri Lanka, he has a keen eye for wildlife, and he shared so many stories & facts about Sri Lankan culture and way of life. He was flexible and adapted our itinerary to suit our needs and interests as our holiday progressed & as we got to know each other more. We always felt very safe and looked after. And we had so many laughs along the way! Thank you Eco Love Tours - we will be back!",
    date: "September 2025"
  },
  {
    id: 29,
    name: "Ràimon S",
    country: "Spain",
    category: "Tours",
    rating: 5,
    text: "The experience has been unbeatable. We did the workshop 3 friends and we could see how the process of creating a personalized ring is in the first person. The boys have been very friendly and attentive throughout, explaining all the steps and doing their best to make us feel at home. We have been able to choose how we wanted the ring, what I draw and what I write. It has been a 100% recommended experience that also allows you to take a very beautiful memory.",
    date: "August 2025"
  },
  {
    id: 30,
    name: "J S",
    country: "USA",
    category: "Tours",
    rating: 5,
    text: "Our trip through Sri Lanka with Dinesh was absolutely amazing. We spent almost three weeks traveling around the country with him as our driver, and it was truly an unforgettable experience. We explored so many beautiful places, including Galle, Mirissa, Yala National Park, Ella, Horton Plains National Park, Kandy, and Sigiriya, as well as several stunning tea plantations along the way. Every destination had its own charm, and traveling by car allowed us to experience the country in a very authentic and relaxed way. We booked all our hotels independently, and Dinesh was our driver throughout the entire journey. Everything went smoothly from start to finish. Even though some of the roads were a bit bumpy at times, we always felt safe and well taken care of. Dinesh was reliable, professional, and always punctual. He navigated the routes confidently and made the long drives comfortable for us. Thanks to this wonderful journey, we were able to create truly special memories that we will cherish forever. We are incredibly grateful for this experience and can wholeheartedly recommend traveling through Sri Lanka with Dinesh. Thank you for everything!",
    date: "August 2025"
  },
  {
    id: 31,
    name: "Nelle",
    country: "Australia",
    category: "Lodge",
    rating: 5,
    text: "Best place we’ve stayed in all of our travels around Asia!! We were welcomed with open arms and felt like part of the family! TuTu and his mum were so kind and generous as well as giving us great recommendations for things to do while we visited Galle. Location was perfect, out of the busy town but close enough to bike ride or get a local tuk tuk into either Galle or Unawatuna! The room was huge and the bed was so comfy! We chose the Sri Lankan breakfast which was delicious and filling! We didn’t want to leave and would stay again in a heartbeat!",
    date: "July 2025"
  },
  {
    id: 32,
    name: "Jip",
    country: "Netherlands",
    category: "Lodge",
    rating: 5,
    text: "The Lodge is very well made. Malik and his family are very welcoming. The breakfast provided is amazing. The location is very good, in a quiet area, close to Galle Fort. You can even borrow some bicycles. Malik also provides very good tours around Galle Fort - definitely a recommendation!",
    date: "February 2025"
  },
  {
    id: 33,
    name: "Martyn",
    country: "United Kingdom",
    category: "Lodge",
    rating: 5,
    text: "This was a gem of a find for me. First time to Sri Lanka and there was trepidation on my part about the trip. However Malik the owner and his family made it so easy for me. The accommodation is a clean, modern and comfortable bungalow set in the garden of the family home. Malik and his family are so helpful, nothing too much trouble. The home cooking, breakfast and dinner is delicious and they offer traditional cookery lessons in their home kitchen. Malik even sorted my transport from the airport and also had a SIM card sorted for me. I fully recommend this accommodation. Enjoy.",
    date: "February 2025"
  }
];

const categories = ['All', 'Kitchen', 'Tours', 'Lodge'];

const ReviewsPage = () => {
  const [filter, setFilter] = useState('All');
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const filteredReviews = filter === 'All' 
    ? reviewsData 
    : reviewsData.filter(r => r.category === filter);

  return (
    <div className="bg-[#FDFCFB] min-h-screen font-sans">

      {/* HERO SECTION */}
      <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
        {sliderImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Review Background ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-[2500ms] ease-in-out ${
              index === current ? "opacity-100 scale-110" : "opacity-0 scale-100"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#FDFCFB] z-10" />
        
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-white/60" />
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-white/90">Real Experiences</span>
            <div className="h-[1px] w-12 bg-white/60" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-5xl md:text-8xl font-serif italic text-white leading-tight mb-8 drop-shadow-2xl">
            Guest <br /> Stories
          </motion.h1>
        </div>
      </section>

      {/* FILTER & CONTENT SECTION */}
      <main className="max-w-7xl mx-auto px-6 -mt-10 relative z-30 pb-32">
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-4 text-[10px] font-black uppercase tracking-widest rounded-full transition-all duration-500 shadow-xl ${
                filter === cat ? 'bg-emerald-900 text-white shadow-emerald-900/30' : 'bg-white text-slate-400 border border-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid Fix: Using columns instead of grid for varying heights */}
        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          <AnimatePresence mode='popLayout'>
            {filteredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </AnimatePresence>
        </motion.div>
      </main>

      <section className="bg-emerald-900 py-32 px-6 text-center rounded-[5rem] mb-2 mx-4">
        <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-10">Have a story to share?</h2>
        <a href="https://wa.me/94774191148" className="inline-block bg-white text-emerald-900 px-12 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl active:scale-95">
          Message us on WhatsApp
        </a>
      </section>

      
    </div>
  );
};

// --- SUB-COMPONENT FOR THE CARD ---
const ReviewCard = ({ review }: { review: any }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const characterLimit = 220; // Adjust this to decide when "Read More" appears

  const shouldShowReadMore = review.text.length > characterLimit;
  const displayedText = isExpanded ? review.text : review.text.slice(0, characterLimit);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="break-inside-avoid bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col hover:shadow-2xl transition-all duration-500"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="flex gap-1">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} size={12} className="fill-emerald-800 text-emerald-800" />
          ))}
        </div>
        <Quote size={28} className="text-emerald-800/5" />
      </div>

      <div className="flex-grow">
        <p className="text-slate-700 font-serif italic text-base md:text-lg leading-relaxed transition-all duration-300">
          "{displayedText}{!isExpanded && shouldShowReadMore ? '...' : ''}"
        </p>
        
        {shouldShowReadMore && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-emerald-800 hover:text-emerald-900 transition-colors"
          >
            {isExpanded ? (
              <>Show Less <ChevronUp size={14} /></>
            ) : (
              <>Read More <ChevronDown size={14} /></>
            )}
          </button>
        )}
      </div>

      <div className="flex items-center gap-4 pt-8 mt-8 border-t border-slate-50">
        <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 border border-slate-100">
          <UserCircle size={32} strokeWidth={1} />
        </div>
        <div>
          <h4 className="text-xs font-black text-slate-900 uppercase tracking-tight">{review.name}</h4>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">{review.country}</span>
            <span className="w-1 h-1 rounded-full bg-slate-200" />
            <span className="text-[9px] font-black uppercase tracking-widest text-emerald-800 ">{review.category}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewsPage;