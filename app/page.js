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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Omradix Solutions",
    image: "https://www.omradixsolutions.in/og-image.jpg",
    "@id": "https://www.omradixsolutions.in",
    url: "https://www.omradixsolutions.in",
    telephone: "+91-9373545169",
    email: "omradixsolutions@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Pune, Maharashtra, India",
      addressLocality: "Pune",
      addressRegion: "MH",
      postalCode: "411001",
      addressCountry: "IN",
    },
    openingHours: "Mo-Sa 09:00-18:00",
    sameAs: [
      "https://www.linkedin.com/company/omradixsolutions",
      "https://www.instagram.com/omradixsolutions",
      "https://twitter.com/omradixsol",
    ],
    description:
      "Omradix Solutions provides modern web development, e-commerce, IT, and digital solutions to help businesses grow online.",
    priceRange: "$$",
    founder: {
      "@type": "Person",
      name: "Om Vilas Shinde",
    },
  };

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Head>
        {/* Basic SEO */}
        <title>Omradix Solutions | Web Development & IT Solutions</title>
        <meta
          name="description"
          content="Omradix Solutions provides modern web development, e-commerce, IT services, UI/UX design, and digital solutions to help businesses grow online."
        />
        <meta
          name="keywords"
          content="Omradix Solutions, web development, e-commerce, IT solutions, UI/UX design, digital solutions, responsive websites, business growth"
        />
        <meta name="author" content="Omradix Solutions" />

        {/* Open Graph (for social sharing) */}
        <meta property="og:title" content="Omradix Solutions | Web Development & IT Solutions" />
        <meta
          property="og:description"
          content="Empowering businesses with modern websites, e-commerce platforms, digital solutions, and IT services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.omradixsolutions.in" />
        <meta property="og:image" content="https://www.omradixsolutions.in/og-image.jpg" />
        <meta property="og:site_name" content="Omradix Solutions" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Omradix Solutions | Web Development & IT Solutions" />
        <meta
          name="twitter:description"
          content="Omradix Solutions builds responsive websites, e-commerce platforms, and provides IT & digital solutions to grow your business."
        />
        <meta name="twitter:image" content="https://www.omradixsolutions.in/og-image.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.omradixsolutions.in" />

        {/* Sitemap + Robots */}
        <link rel="sitemap" type="application/xml" href="https://www.omradixsolutions.in/sitemap.xml" />
        <meta name="robots" content="index, follow" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      {/* ✅ Website Components */}
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
