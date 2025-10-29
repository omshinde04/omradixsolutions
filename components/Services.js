"use client";

import Head from "next/head";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  TrendingUp,
  Cloud,
  Shield,
  PenTool
} from "lucide-react";

export default function Services() {
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      title: "Website Development",
      icon: <Globe className="w-7 h-7 text-white" />,
      desc: "Custom, modern, and responsive websites tailored to your business needs.",
    },
    {
      title: "E-Commerce Solutions",
      icon: <ShoppingCart className="w-7 h-7 text-white" />,
      desc: "Build powerful online stores with secure payments and smooth user experience.",
    },
    {
      title: "Digital Marketing",
      icon: <TrendingUp className="w-7 h-7 text-white" />,
      desc: "From SEO to Social Media, we ensure your brand reaches the right audience.",
    },
    {
      title: "UI/UX Design",
      icon: <PenTool className="w-7 h-7 text-white" />,
      desc: "Intuitive and user-friendly interfaces focused on enhancing user experience and engagement.",
    },
    {
      title: "Software & IT Solutions",
      icon: <Cloud className="w-7 h-7 text-white" />,
      desc: "Smart, scalable, and business-driven technology solutions for growth.",
    },
    {
      title: "Security & Support",
      icon: <Shield className="w-7 h-7 text-white" />,
      desc: "Reliable, secure, and ongoing IT support for modern businesses.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Development and IT Solutions",
    provider: {
      "@type": "Organization",
      name: "Omradix Solutions",
      url: "https://www.omradixsolutions.in",
      logo: "https://www.omradixsolutions.in/og-image.jpg",
    },
    areaServed: {
      "@type": "Place",
      name: "India",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Omradix Solutions Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.desc,
        },
      })),
    },
  };

  return (
    <>
      {/* ✅ SEO Head Section */}
      <Head>
        <title>Services | Omradix Solutions - Web Development & IT Services</title>
        <meta
          name="description"
          content="Explore professional services by Omradix Solutions including website development, e-commerce, digital marketing, UI/UX design, software solutions, and IT support."
        />
        <meta
          name="keywords"
          content="Omradix Solutions services, web development, e-commerce, UI/UX design, digital marketing, software solutions, IT support, India"
        />
        <meta name="author" content="Omradix Solutions" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Our Services | Omradix Solutions" />
        <meta
          property="og:description"
          content="Discover our professional services: website development, e-commerce, digital marketing, and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.omradixsolutions.in/services" />
        <meta property="og:image" content="https://www.omradixsolutions.in/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services | Omradix Solutions" />
        <meta
          name="twitter:description"
          content="Explore the top IT and digital services by Omradix Solutions that help your business grow online."
        />
        <meta name="twitter:image" content="https://www.omradixsolutions.in/og-image.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.omradixsolutions.in/services" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      {/* ✅ Services Section */}
      <section id="services" className="relative bg-black text-white px-6 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-14"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white">
                Providing Best Services
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-3 animate-pulse"></div>
              <p className="text-sm md:text-lg text-gray-400 mt-4">
                Service That Speaks Quality.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="mt-6 sm:mt-0 px-6 py-2 text-sm md:text-base font-medium text-white 
                bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-md 
                hover:shadow-[0_0_20px_rgba(139,92,246,0.7)] transition-all duration-500"
            >
              {showAll ? "View Less" : "View All"}
            </motion.button>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence>
              {(showAll ? services : services.slice(0, 3)).map((service, idx) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: idx * 0.15,
                    type: "spring",
                  }}
                  whileHover={{ y: -8 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group bg-[#1D1D1F]/90 backdrop-blur-md p-8 rounded-2xl 
                    border border-gray-800 hover:border-transparent 
                    hover:shadow-[0_0_35px_rgba(139,92,246,0.5)] transition-all duration-500"
                >
                  {/* Glow Behind Icon */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-500/30 rounded-full blur-2xl animate-pulse"></div>
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.15 }}
                    whileTap={{ rotate: -10, scale: 1.1 }}
                    className="w-14 h-14 flex items-center justify-center rounded-xl 
                      bg-gradient-to-r from-purple-600 to-blue-600 mb-6"
                  >
                    {service.icon}
                  </motion.div>

                  {/* Title */}
                  <h3
                    className="text-xl font-semibold mb-4 group-hover:text-purple-400 transition"
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
