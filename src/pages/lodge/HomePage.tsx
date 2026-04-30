
import HeroKit from "../../components/kitchenComponents/HeroKit"
import AboutLodge from "../../components/lodgeComponents/AboutLodge";
import GallerySection from "../../components/lodgeComponents/GallerySection";

import StaySection from "../../components/lodgeComponents/StaySection";
import TestimonialsSection from "../../components/lodgeComponents/TestimonialSection";
import ContactSection from "../../components/kitchenComponents/ContactSection";



const HomePage = () => {

  const lodgeImages = [
    '/Eco_Love_Lodge/img_1.JPG',
    '/Eco_Love_Lodge/IMG_7120.JPG',
    '/Eco_Love_Lodge/IMG_7153.JPG',
    '/Eco_Love_Lodge/IMG_7144.JPG',
  ];

  return (
   <>
     <HeroKit
      images={lodgeImages}
      title="Stay Close to Nature"
      subtitle="Experience calm, comfort, and Eco Love hospitality at our private lodge."
      buttonLabel="Book a Stay"
      buttonLink="/eco-love-lodge/booking"
    />

    <AboutLodge></AboutLodge>
    <GallerySection></GallerySection>
    <StaySection></StaySection>
    <TestimonialsSection></TestimonialsSection>
    <ContactSection></ContactSection>

   </>
  )
}

export default HomePage