import AboutUs from "../components/landingPageComponents/AboutUs"

import Hero from "../components/landingPageComponents/Hero"
import StayInKnow from "../components/landingPageComponents/StayInKnow"
import { Outlet, useLocation } from "react-router-dom"

const LandingPage = () => {
    const location = useLocation();
    
    // Check if we are exactly on the home path "/"
    const isHome = location.pathname === "/";

    return (
      <div className="flex flex-col min-h-screen">
      
        
        {/* If you ever decide to nest routes under "/" again, 
           the Outlet will handle it. If not, the home components 
           render as usual.
        */}
        {isHome ? (
            <>
                <Hero />
                <AboutUs />
                <StayInKnow />
            </>
        ) : (
            <main className="flex-grow">
                <Outlet />
            </main>
        )}

        
      </div>
    )
}

export default LandingPage