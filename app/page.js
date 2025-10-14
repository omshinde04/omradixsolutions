import Head from "next/head";
import HeroNav from "@/components/HeroNav";
import Partner from "@/components/Partner";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Faq from "@/components/Faq";
import Team from "@/components/Team";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Head>
        {/* Basic SEO */}
        <title>omradixsolutions | Web Development & IT Solutions</title>
        <meta
          name="description"
          content="omradixsolutions provides modern web development, e-commerce, IT services, UI/UX design, and digital solutions to help businesses grow online."
        />
        <meta
          name="keywords"
          content="omradixsolutions, web development, e-commerce, IT solutions, UI/UX design, digital solutions, responsive websites, business growth"
        />
        <meta name="author" content="omradixsolutions" />

        {/* Open Graph (for social sharing) */}
        <meta property="og:title" content="omradixsolutions | Web Development & IT Solutions" />
        <meta
          property="og:description"
          content="Empowering businesses with modern websites, e-commerce platforms, digital solutions, and IT services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.omradixsolutions.in" />
        <meta property="og:image" content="https://www.omradixsolutions.in/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="omradixsolutions | Web Development & IT Solutions" />
        <meta
          name="twitter:description"
          content="omradixsolutions builds responsive websites, e-commerce platforms, and provides IT & digital solutions to grow your business."
        />
        <meta name="twitter:image" content="https://www.omradixsolutions.in/og-image.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.omradixsolutions.in" />
      </Head>

      {/* ✅ Your Components */}
      <HeroNav />
      <Services />
      <Partner />
      <Works />
      <Faq />
      <Team />
      <Blogs />
      <Contact />
      <Footer />
      <ChatBot />
      <WhatsAppButton />
    </>
  );
}
