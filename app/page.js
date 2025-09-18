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

export default function Home() {
  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Head>
        {/* Basic SEO */}
        <title>My Company | Web Development & IT Solutions</title>
        <meta
          name="description"
          content="We provide website development, e-commerce solutions, UI/UX design, digital marketing, and IT support for businesses worldwide. Service that speaks quality."
        />
        <meta
          name="keywords"
          content="web development, e-commerce solutions, UI/UX design, digital marketing, IT solutions, SEO, responsive websites"
        />
        <meta name="author" content="My Company" />

        {/* Open Graph (for social sharing) */}
        <meta property="og:title" content="My Company | Web Development & IT Solutions" />
        <meta
          property="og:description"
          content="Custom websites, e-commerce stores, SEO, IT support & more. Empowering businesses with technology and design."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mycompany.com" />
        <meta property="og:image" content="https://mycompany.com/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My Company | Web Development & IT Solutions" />
        <meta
          name="twitter:description"
          content="We build responsive websites, powerful e-commerce platforms, and provide digital marketing & IT solutions."
        />
        <meta name="twitter:image" content="https://mycompany.com/og-image.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://mycompany.com" />
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
    </>
  );
}
