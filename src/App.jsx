import React from "react"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import AboutUs from "./components/AboutUs"
import ProjectsSection from "./components/Projects"

function App() {
 

  return (
    <>
      <div className="min-h-screen">
        <Nav />
        <main>
          <Hero />
          <AboutUs /> 
          <ProjectsSection />
          {/* <Testimonials />
          <HowItWorks />
          <Footer /> */}
        </main>
       </div>
    </>
  )
}

export default App
