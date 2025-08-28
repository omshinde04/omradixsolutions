import Hero from "../components/Hero.js";
import ServicesSection from "../components/ServicesSection.js";
import About from "../components/About.js";
import WhoWeAre from "../components/WhoWeAre.js";
import Works from "../components/Works.js";
import Testimonial from "../components/Testimonial.js";
import Faq from "../components/Faq.js";
import Team from "../components/Team.js";
import Contact from "../components/Contact.js";
import Blog from "../components/Blog.js";
import Footer from "../components/Footer.js";


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
