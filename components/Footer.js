"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram } from "lucide-react";
import Head from "next/head";

export default function Footer() {
  // Schema.org structured data (Organization)
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OmRadix Solutions",
    url: "https://omradixsolutions.vercel.app",
    logo: "https://omradixsolutions.vercel.app/logo.png",
    sameAs: [
      "https://www.linkedin.com/company/omradix-solutions/",
      "https://www.instagram.com/omradix_solutions/",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91 9373545169",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Marathi"],
        email: "omradixsolutions@gmail.com",
      },
    ],
    description:
      "OmRadix Solutions is a modern web development and digital innovation agency specializing in full-stack development, UI/UX, and AI-powered business growth.",
    foundingDate: "2025",
    founder: {
      "@type": "Person",
      name: "Om Vilas Shinde",
      jobTitle: "Founder & Full Stack Developer",
    },
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>OmRadix Solutions | Web Development & Digital Growth Agency</title>
        <meta
          name="description"
          content="OmRadix Solutions — a digital agency specializing in web development, AI, UI/UX design, and marketing solutions. Let's build the future together."
        />
        <meta
          name="keywords"
          content="OmRadix Solutions, web development, digital marketing, UI UX design, full stack developer, AI solutions, software agency India"
        />
        <meta name="author" content="Om Shinde" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="OmRadix Solutions | Digital Growth Agency" />
        <meta
          property="og:description"
          content="OmRadix Solutions — building digital experiences through design, code, and innovation. Get in touch today."
        />
        <meta property="og:url" content="https://omradixsolutions.vercel.app" />
        <meta property="og:type" content="organization" />
        <meta
          property="og:image"
          content="https://omradixsolutions.vercel.app/og-image.png"
        />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OmRadix Solutions" />
        <meta
          name="twitter:description"
          content="Empowering brands with modern web development, marketing, and AI-driven growth."
        />
        <meta
          name="twitter:image"
          content="https://omradixsolutions.vercel.app/og-image.png"
        />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </Head>

      {/* Footer Section */}
      <footer
        className="relative bg-black text-gray-300 border-t border-gray-800 scroll-smooth"
        aria-label="Footer"
      >
        {/* Top Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            {/* Brand Info */}
            <div itemScope itemType="https://schema.org/Organization">
              <h2
                className="text-lg font-bold text-white tracking-wide mb-3"
                itemProp="name"
              >
                OMRADIX SOLUTIONS
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed" itemProp="description">
                The future of business is digital © 2025 Omradix Solutions
              </p>
              <p className="text-gray-500 text-xs italic mt-2">
                OmRadix Solutions is a web development & digital growth platform.
              </p>
            </div>

            {/* Quick Links */}
            <nav aria-label="Quick links">
              <h3 className="text-white font-semibold text-sm mb-4 relative">
                Quick Links
                <span className="absolute -bottom-1 left-0 w-10 h-[2px] bg-purple-500"></span>
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: "Home", id: "home" },
                  { label: "About Us", id: "partner" },
                  { label: "Services", id: "services" },
                  { label: "Blogs", id: "blogs" },
                  { label: "Contact", id: "contact" },
                ].map((link) => (
                  <motion.li
                    key={link.id}
                    whileHover={{ x: 5, color: "#a78bfa" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a href={`#${link.id}`} aria-label={`Navigate to ${link.label}`}>
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Services */}
            <div aria-label="Our services">
              <h3 className="text-white font-semibold text-sm mb-4 relative">
                Our Services
                <span className="absolute -bottom-1 left-0 w-10 h-[2px] bg-purple-500"></span>
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  "Web Development",
                  "Mobile Applications",
                  "UI/UX Design",
                  "Digital Marketing",
                  "Cloud Solutions",
                ].map((service) => (
                  <motion.li
                    key={service}
                    whileHover={{ x: 5, color: "#a78bfa" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Divider */}
          <motion.hr
            className="my-10 border-gray-800"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
          />

          {/* Bottom Row */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Contact Email */}
            <address className="not-italic">
              <motion.a
                href="mailto:omradixsolutions@gmail.com"
                className="flex items-center gap-2 px-5 py-3 rounded-full border border-gray-700 hover:border-purple-500 hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] transition duration-300 text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                itemProp="email"
              >
                <Mail className="w-4 h-4" />
                omradixsolutions@gmail.com
              </motion.a>
            </address>

            {/* Social Links */}
            <div className="flex gap-6 text-gray-400">
              <motion.a
                href="https://www.linkedin.com/company/omradix-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#0A66C2" }}
                aria-label="Visit our LinkedIn page"
                itemProp="sameAs"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/omradix_solutions/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#E4405F" }}
                aria-label="Visit our Instagram page"
                itemProp="sameAs"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="bg-[#0c0c0c] text-center py-5 text-xs text-gray-500 border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          © 2025 Developed by{" "}
          <span className="text-purple-400 font-medium">OmRadix Solutions</span>. All rights
          reserved.
        </motion.div>
      </footer>
    </>
  );
}
