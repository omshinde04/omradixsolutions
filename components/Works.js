"use client";

import { useState } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";

export default function Works() {
  const [showAll, setShowAll] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const works = [
    // 🔥 NEW PROJECT – ADDED AT TOP
    {
      title: "PhishScan — AI-Based Phishing Detection System",
      image: "/projects/img7.png", // make sure image exists
      desc: "PhishScan is a fully developed AI-powered phishing detection system that performs deep analysis of emails by evaluating sender and recipient details, embedded URLs, subject lines, email headers (mailed-by, signed-by), security warnings, attachments, and the complete email body. The system correlates multiple signals to detect phishing, spoofing, and social engineering attacks. The application is fully functional, with the frontend deployed and the backend AI analysis engine ready and pending deployment.",
      category: "AI",
      liveLink: "https://phishscan.vercel.app/",
      status: "Frontend Live · Backend In Progress",
    },

    {
      title: "MET College Leave Management System",
      image: "/projects/img3.jpeg",
      desc: "A comprehensive college management system for MET College, Nashik. Includes student and faculty management, attendance tracking, exam results, notifications, and automated alerts.",
      category: "Management System",
      liveLink: "https://lms-cyan-gamma.vercel.app/",
    },
    {
      title: "MindWell — AI-Powered Wellness Tracker",
      image: "/projects/img4.png",
      desc: "An AI-driven wellness tracker that monitors daily habits, provides health insights, and suggests personalized improvements for lifestyle balance.",
      category: "AI",
      liveLink: "https://a-iwellness.vercel.app/",
    },
    {
      title: "CertiGen — Automated Certificate Generator",
      image: "/projects/img5.png",
      desc: "Automated certificate creation platform. Users can instantly generate professional certificates with a responsive design and real-time preview.",
      category: "Automation",
      liveLink: "https://certificate-genertor.vercel.app/",
    },
    {
      title: "Vijay Kalantre — Personal Portfolio Website",
      image: "/projects/img2.png",
      desc: "Modern and responsive personal portfolio website built with elegant gradients and dynamic animations showcasing tech expertise.",
      category: "Web",
      liveLink: "#",
    },
    {
      title: "FurniStyle — Modern Furniture E-Commerce",
      image: "/projects/img1.png",
      desc: "Sleek, responsive e-commerce furniture platform featuring product filters, checkout flow, and seamless UI/UX experience.",
      category: "Web",
      liveLink: "#",
    },
    {
      title: "Thread Haus — E-Commerce & Brand Experience",
      image: "/projects/img6.png",
      desc: "Custom online store for Thread Haus Co, featuring sustainable fashion products, dynamic collections, and storytelling design.",
      category: "Web",
      liveLink: "https://thread-haus-xi.vercel.app/",
    },
  ];

  const categories = [
    "All",
    "Web",
    "AI",
    "Mobile",
    "Management System",
    "Automation",
  ];

  const filteredWorks =
    activeCategory === "All"
      ? works
      : works.filter((w) => w.category === activeCategory);

  const handleLiveClick = (link) => {
    if (!link || link === "#") {
      alert("Project is not live yet!");
    } else {
      window.open(link, "_blank");
    }
  };

  return (
    <>
      {/* ✅ SEO */}
      <Head>
        <title>Our Works & Projects | omradixsolutions</title>
        <meta
          name="description"
          content="Explore omradixsolutions' portfolio — modern web, AI, and automation projects including PhishScan, an AI-based phishing detection system."
        />
        <link rel="canonical" href="https://www.omradixsolutions.in/#works" />
      </Head>

      {/* ✅ Works Section */}
      <section
        id="works"
        className="relative bg-black text-white px-6 py-24 overflow-hidden font-[SF Pro]"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-14"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold">
                Our Works & Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-3 animate-pulse"></div>
              <p className="text-gray-400 mt-4">
                Showcasing Innovation & Real-World Solutions 🚀
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="mt-6 sm:mt-0 px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg"
            >
              {showAll ? "View Less" : "View All"}
            </motion.button>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence>
              {(showAll ? filteredWorks : filteredWorks.slice(0, 3)).map(
                (work, idx) => {
                  const isExpanded = expandedIndex === idx;

                  return (
                    <motion.article
                      key={work.title}
                      initial={{ opacity: 0, y: 80 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="bg-[#1D1D1F]/90 p-6 rounded-2xl border border-gray-800 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-all cursor-pointer"
                      onClick={() =>
                        setExpandedIndex(isExpanded ? null : idx)
                      }
                    >
                      <img
                        src={work.image}
                        alt={work.title}
                        className="rounded-xl mb-5 w-full h-44 object-cover"
                        loading="lazy"
                      />

                      <h3 className="text-xl font-semibold text-purple-400">
                        {work.title}
                      </h3>

                      {work.status && (
                        <p className="text-xs text-yellow-400 mt-1">
                          {work.status}
                        </p>
                      )}

                      <p
                        className={`text-gray-400 mt-3 text-sm ${
                          isExpanded ? "" : "line-clamp-3"
                        }`}
                      >
                        {work.desc}
                      </p>

                      <button
                        onClick={() => handleLiveClick(work.liveLink)}
                        className="mt-4 px-4 py-1.5 text-sm bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                      >
                        Live
                      </button>
                    </motion.article>
                  );
                }
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
