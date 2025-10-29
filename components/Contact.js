"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Head from "next/head"; // SEO Head

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70 } },
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setStatusType("info");

    try {
      const res = await fetch("https://formspree.io/f/myznbgkl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("✅ Message Sent Successfully!");
        setStatusType("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message.");
        setStatusType("error");
      }
    } catch (err) {
      setStatus("❌ Error sending message.");
      setStatusType("error");
    }
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  // Structured data for SEO (JSON-LD)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact OmRadix Solutions",
    "description":
      "Contact OmRadix Solutions — a full-stack development and creative agency led by Om Shinde. Reach us for web development, AI, and marketing solutions.",
    "url": "https://omradixsolutions.vercel.app/#contact",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91 9373545169",
        "contactType": "customer service",
        "availableLanguage": "English, Hindi, Marathi",
        "areaServed": "IN",
      },
    ],
  };

  return (
    <>
      {/* SEO Head Section */}
      <Head>
        <title>Contact Us | OmRadix Solutions</title>
        <meta
          name="description"
          content="Get in touch with OmRadix Solutions for web development, UI/UX, AI, and marketing projects. Reach our team directly via phone or email."
        />
        <meta
          name="keywords"
          content="OmRadix Solutions, contact Om Shinde, web development agency, full stack developer, UI UX, AI integration, software company India"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Om Shinde" />
        <meta property="og:title" content="Contact | OmRadix Solutions" />
        <meta
          property="og:description"
          content="Let's collaborate on your next project! Reach OmRadix Solutions — experts in full-stack development, UI/UX, and AI."
        />
        <meta
          property="og:image"
          content="https://omradixsolutions.vercel.app/og-image.png"
        />
        <meta
          property="og:url"
          content="https://omradixsolutions.vercel.app/#contact"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact OmRadix Solutions" />
        <meta
          name="twitter:description"
          content="Let's build something innovative together. Contact OmRadix Solutions today."
        />
        <meta
          name="twitter:image"
          content="https://omradixsolutions.vercel.app/og-image.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative bg-black text-white px-6 py-28 overflow-hidden font-[SF Pro]"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-6xl mx-auto relative z-10 bg-[#1D1D1F]/90 backdrop-blur-md 
                     rounded-2xl shadow-xl p-10 md:p-16 border border-white/5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.button
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgb(168,85,247)",
                  color: "#fff",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-white text-black text-sm font-semibold rounded shadow-lg relative overflow-hidden"
              >
                <span className="relative z-10">Get Estimate</span>
              </motion.button>

              <h1 className="text-3xl md:text-5xl font-extrabold leading-snug">
                Contact OmRadix Solutions <br /> Your Creative Digital Partner
              </h1>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
                className="w-28 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full origin-left"
              />

              <address className="not-italic space-y-2 text-gray-300 text-sm md:text-base flex flex-col gap-1">
                <p className="flex items-center gap-2">
                  📞
                  <a href="tel:+919373545169" className="text-gray-300 ">
                    +91 9373545169
                  </a>
                  <span>/</span>
                  <a href="tel:+917378534650" className="text-gray-300 ">
                    +91 7378534650
                  </a>
                </p>
                <p>⏰ 9 AM to 7 PM, Monday to Saturday</p>
                <p>
                  📧{" "}
                  <a
                    href="mailto:omradixsolutions@gmail.com"
                    className="text-gray-300"
                  >
                    omradixsolutions@gmail.com
                  </a>
                </p>
              </address>
            </motion.div>

            {/* Right Section - Form */}
            <motion.form
              variants={container}
              initial="hidden"
              whileInView="show"
              onSubmit={handleSubmit}
              className="space-y-4 relative"
              aria-label="Contact form for OmRadix Solutions"
            >
              <motion.input
                variants={item}
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                aria-label="Your name"
                className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-sm focus:outline-none focus:border-purple-500 transition"
              />
              <motion.input
                variants={item}
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                required
                aria-label="Your email"
                className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-sm focus:outline-none focus:border-purple-500 transition"
              />
              <motion.textarea
                variants={item}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                rows="4"
                required
                aria-label="Your message"
                className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-sm focus:outline-none focus:border-purple-500 transition resize-none"
              />
              <motion.button
                variants={item}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(168,85,247,0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-md font-semibold shadow-md transition"
              >
                Submit
              </motion.button>

              {/* Status Message */}
              <AnimatePresence>
                {status && (
                  <motion.p
                    key="status"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className={`text-sm font-medium mt-2 ${
                      statusType === "success"
                        ? "text-green-400"
                        : statusType === "error"
                        ? "text-red-400"
                        : "text-gray-400"
                    }`}
                  >
                    {status}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.form>
          </div>
        </motion.div>
      </section>
    </>
  );
}
