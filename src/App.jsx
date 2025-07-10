import Nav from "./components/Nav"
import Hero from "./components/Hero"
import AboutUs from "./components/AboutUs"
import Projects from "./components/Projects"
import Testimonials from "./components/Testimonials"
import HowItWorks from "./components/HowItWorks"
import FaqSection from "./components/Faq"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLayout from "./components/HomeLayout";
import TorontoPage from "./pages/locations/TorontoPage";
import KitchenerPage from "./pages/locations/KitchenerPage";
import VancouverPage from "./pages/locations/VancouverPage";
import MontrealPage from "./pages/locations/MontrealPage";
import CalgaryPage from "./pages/locations/CalgaryPage";
import OttawaPage from "./pages/locations/OttawaPage";
import EdmontonPage from "./pages/locations/EdmontonPage";
import HalifaxPage from "./pages/locations/HalifaxPage"


function App() {
  return (
    <>
      <div className="min-h-screen">
        <Router>
          <Routes>
            <Route path="/" element={<HomeLayout />} />
            <Route path="/web-design-toronto" element={<TorontoPage />} />
            <Route path="/web-design-kitchener" element={<KitchenerPage />} />
            <Route path="/web-design-vancouver" element={<VancouverPage />} />
            <Route path="/web-design-montreal" element={<MontrealPage />} />
            <Route path="/web-design-calgary" element={<CalgaryPage />} />
            <Route path="/web-design-ottawa" element={<OttawaPage />} />
            <Route path="/web-design-edmonton" element={<EdmontonPage />} />
            <Route path="/web-design-halifax" element={<HalifaxPage />} />
            {/* Add more cities as needed */}
          </Routes>
        </Router>
      </div>
      {/* <div className="min-h-screen">
        <Nav />
        <main>
          <Hero />
          <AboutUs /> 
          <Projects />
          <Testimonials />
          <HowItWorks />
          <FaqSection />
          <Footer /> 
        </main>
       </div> */}
    </>
  )
}

export default App

