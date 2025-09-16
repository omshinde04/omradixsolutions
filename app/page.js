import HeroNav from "@/components/HeroNav";
import Partner from "@/components/Partner";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Faq from "@/components/Faq";
import Team from "@/components/Team";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot"; // ✅ Correct

export default function Home() {
  return (
    <>
      <HeroNav />
      <Services />
      <Partner />
      <Works />
      <Faq />
      <Team />
      <Blogs />
      <Contact />
      <Footer />
      <ChatBot /> {/* ✅ Always visible */}
    </>
  );
}
