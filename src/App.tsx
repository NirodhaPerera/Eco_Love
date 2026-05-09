import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import KitchenHome from './pages/kitchen/HomePage'
import KitchenMain from './pages/kitchen/KitchenMain'
import KitchenSession from './components/kitchenComponents/SessionPage'
import KitchenGallery from './components/kitchenComponents/GalaryPage'
import KitchenContact from './components/kitchenComponents/ContactPage'
import ToursHome from './pages/tours/Home'
import TourLayout from './pages/tours/TourLayout'
import LodgeHome from './pages/lodge/HomePage'

import './index.css';
import ScrollToTop from './ScrollToTop'
import LodgeLayout from './pages/lodge/LodgeLayout'
import StaysPage from './components/lodgeComponents/StayPage'
import GalleryPage from './components/lodgeComponents/GalleryPage'
import ContactPage from './components/lodgeComponents/ContactPage'
import DestinationsPage from './components/TourComponents/DestinationsPage'
import TourPage from './components/TourComponents/TourPage'
import TourContact from './components/TourComponents/ContactPage'
import GalleryPage1 from './components/TourComponents/GalleryPage'
import AuthenticExperiences from './components/TourComponents/ExpriencePage'
import ExperienceDetail from './components/TourComponents/ExprienceDetails'
import DestinationDetail from './components/TourComponents/DestinationDetailPage'


import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}


// 1. Create the helper component
const AnalyticsTracker = () => {
  const location = useLocation();

 useEffect(() => {
  if (typeof window.gtag === 'function') {
    window.gtag('config', 'G-HS9DC0TJRN', { 
      page_path: location.pathname,
    });
  }
}, [location]);

  return null;
};




function App() {
  return (
    <Router>
      <ScrollToTop></ScrollToTop>

      <AnalyticsTracker /> {/* 2. Include the tracker in your app */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="eco-love-kitchen" element={<KitchenMain />}>
          <Route index element={<KitchenHome />} />           {/* /eco-love-kitchen */}
          <Route path="gallery" element={<KitchenGallery />} />     {/* /eco-love-kitchen/lesson */}
          <Route path="session" element={<KitchenSession />} />   {/* /eco-love-kitchen/gallery */}
          <Route path="contact" element={<KitchenContact />} />   {/* /eco-love-kitchen/contact */}
        </Route>
        <Route path="/eco-love-tours/*" element={<TourLayout />} >
          <Route index element={<ToursHome />} />           {/* /eco-love-tours */}
          <Route path="stays" element={<StaysPage />} />     {/* /eco-love-tours/stays */}
          <Route path="destinations" element={<DestinationsPage />} />     {/* /eco-love-tours/destinations */}
          <Route path="destinations/:name" element={<DestinationDetail />} />
          <Route path="experiences" element={<AuthenticExperiences />} />     {/* /eco-love-tours/experiences */}
          <Route path="experiences/:slug" element={<ExperienceDetail />} />

          
          <Route path="tours" element={<TourPage />} />     {/* /eco-love-tours/tours */}
          <Route path="gallery" element={<GalleryPage1 />} />     {/* /eco-love-tours/gallery */}
          <Route path="contact" element={<TourContact />} />     {/* /eco-love-tours/contact */}
          {/* Add other nested routes for tours here if needed */}
        </Route>
        <Route path="/eco-love-lodge/*" element={<LodgeLayout />} >
          <Route index element={<LodgeHome />} />           {/* /eco-love-lodge */}
          <Route path="stays" element={<StaysPage />} />     {/* /eco-love-lodge/stay */}
          <Route path="gallery" element={<GalleryPage></GalleryPage>} />   {/* /eco-love-lodge/gallery */}
          <Route path="contact" element={<ContactPage />} />   {/* /eco-love-lodge/contact */}
          {/* Add other nested routes for lodge here if needed */}
        </Route>


      </Routes>
    </Router>
  )
}

export default App
