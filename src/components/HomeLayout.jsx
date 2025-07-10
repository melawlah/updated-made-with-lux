import Nav from "./Nav";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import HowItWorks from "./HowItWorks";
// import FaqSection from "./Faq";
import FAQ from "./Faq";
import Footer from "./Footer";

export default function HomeLayout({ cityOverrides }) {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero cityOverrides={cityOverrides?.hero} />
        <AboutUs cityOverrides={cityOverrides?.about} />
        <Projects />
        <Testimonials />
        <HowItWorks />
        {/* <FaqSection /> */}
        {/* <FAQ city={city} /> */}
        <FAQ cityOverrides={cityOverrides?.faq ? { faq: cityOverrides.faq } : {}} />
        <Footer />
      </main>
    </div>
  );
}
