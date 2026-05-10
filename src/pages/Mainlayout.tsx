import { Outlet } from 'react-router-dom';
import Header from '../components/landingPageComponents/Header';
import Footer from '../components/landingPageComponents/Footer';

const MainLayout = () => (
  <>
    <Header />
    <main><Outlet /></main>
    <Footer />
  </>
);


export default MainLayout;