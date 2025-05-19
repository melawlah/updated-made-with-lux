import React from "react"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import AboutUs from "./components/AboutUs"
import Projects from "./components/Projects"
import Testimonials from "./components/Testimonials"
import HowItWorks from "./components/HowItWorks"
import FaqSection from "./components/Faq"
import Footer from "./components/Footer"


function App() {
  return (
    <>
      <div className="min-h-screen">
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
       </div>
    </>
  )
}

export default App
