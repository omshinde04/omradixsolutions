import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import About from "../components/About";
import WhoWeAre from "../components/WhoWeAre";
import Works from "../components/Works";
import Testimonial from "../components/Testimonial";
import Faq from "../components/Faq";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection/>
      <About/>
      <WhoWeAre/>
      <Works/>
      <Testimonial/>
      <Faq/>
      <Team/>
      <Contact/>
      <Blog/>
      <Footer/>
    </>
  );
}
