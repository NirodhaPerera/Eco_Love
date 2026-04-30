import AboutKit from "../../components/kitchenComponents/AboutKit"
import ContactSection from "../../components/kitchenComponents/ContactSection"
import GalarySection from "../../components/kitchenComponents/GalarySection"
import HeroKit from "../../components/kitchenComponents/HeroKit"
import SessionSection from "../../components/kitchenComponents/SessionSection"
import TestimonialsSection from "../../components/kitchenComponents/TestimonialSection"



const HomePage = () => {

  const kitchenImages = [
    '/Eco_Love_Kitchen/slider1.jpeg',
    '/Eco_Love_Kitchen/slider2.jpeg',
    '/Eco_Love_Kitchen/slider3.jpeg',
    '/Eco_Love_Kitchen/slider4.jpeg',
    '/Eco_Love_Kitchen/slider5.jpeg',
    '/Eco_Love_Kitchen/slider6.jpeg',
    '/Eco_Love_Kitchen/slider7.jpeg',
    '/Eco_Love_Kitchen/gallery/img_11.JPG',
    '/Eco_Love_Kitchen/gallery/img_10.JPG',
  ];


  return (
    <>
     <HeroKit
      images={kitchenImages}
      title="Discover the Joy of Cooking"
      subtitle="Join our authentic kitchen sessions and experience the essence of Eco Love."
      buttonLabel="Book a Session"
      buttonLink="/eco-love-kitchen/session"
      downloadLink="/Recipe.pdf"
      downloadLabel="Download Recipe"
    />
      <AboutKit></AboutKit>
      <GalarySection></GalarySection>
      <SessionSection></SessionSection>
      <TestimonialsSection></TestimonialsSection>
      <ContactSection></ContactSection>
    </>
  )
}

export default HomePage
