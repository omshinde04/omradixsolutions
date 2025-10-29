"use client";

import { useState } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";

export default function Works() {
  const [showAll, setShowAll] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const works = [
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

  const categories = ["All", "Web", "AI", "Mobile", "Management System", "Automation"];
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
      {/* ✅ SEO & Structured Data */}
      <Head>
        <title>Our Works & Projects | omradixsolutions</title>
        <meta
          name="description"
          content="Explore omradixsolutions' portfolio — modern web, AI, and automation projects. Showcasing innovation in web development, e-commerce, and digital solutions."
        />
        <meta
          name="keywords"
          content="omradixsolutions projects, web development portfolio, AI projects, e-commerce websites, automation tools, IT solutions, Next.js projects"
        />
        <meta name="author" content="omradixsolutions" />
        <meta property="og:title" content="Our Works & Projects | omradixsolutions" />
        <meta
          property="og:description"
          content="Discover innovative projects by omradixsolutions — AI tools, automation apps, and web development case studies."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.omradixsolutions.in/#works" />
        <meta property="og:image" content="https://www.omradixsolutions.in/og-image.jpg" />
        <link rel="canonical" href="https://www.omradixsolutions.in/#works" />

        {/* JSON-LD Structured Data for Projects */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "omradixsolutions Projects",
              description:
                "List of projects developed by omradixsolutions including AI, automation, and web solutions.",
              url: "https://www.omradixsolutions.in/#works",
              itemListElement: works.map((work, index) => ({
                "@type": "CreativeWork",
                position: index + 1,
                name: work.title,
                image: `https://www.omradixsolutions.in${work.image}`,
                url: work.liveLink,
                description: work.desc,
                genre: work.category,
                creator: {
                  "@type": "Organization",
                  name: "omradixsolutions",
                  url: "https://www.omradixsolutions.in",
                },
              })),
            }),
          }}
        />
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
              <h2 className="text-3xl md:text-5xl font-extrabold text-white">
                Our Works & Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-3 animate-pulse"></div>
              <p className="text-sm md:text-lg text-gray-400 mt-4">
                Showcasing Innovation & Excellence 🚀
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="mt-6 sm:mt-0 px-6 py-2 text-sm md:text-base font-medium text-white 
                bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-md 
                hover:shadow-[0_0_25px_rgba(139,92,246,0.8)] transition-all duration-500"
            >
              {showAll ? "View Less" : "View All"}
            </motion.button>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 mb-10">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Filter projects by ${cat}`}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md"
                    : "bg-gray-800/80 text-gray-300 hover:text-white hover:bg-gray-700/90 border border-gray-700"
                }`}
              >
                {cat}
              </motion.button>
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
                      transition={{
                        duration: 0.8,
                        delay: idx * 0.15,
                        type: "spring",
                      }}
                      whileHover={{ y: -10, rotate: 0.5 }}
                      whileTap={{ scale: 0.98 }}
                      className={`relative group bg-[#1D1D1F]/90 backdrop-blur-md p-6 rounded-2xl 
                        border transition-all duration-500 cursor-pointer
                        ${isExpanded
                          ? "border-transparent shadow-[0_0_35px_rgba(139,92,246,0.6)]"
                          : "border-gray-800 hover:border-transparent hover:shadow-[0_0_35px_rgba(139,92,246,0.6)]"
                        }`}
                      onClick={() =>
                        setExpandedIndex(isExpanded ? null : idx)
                      }
                    >
                      <figure className="relative w-full aspect-[4/3] overflow-hidden rounded-xl mb-6 bg-gray-900">
                        <motion.img
                          src={work.image}
                          alt={`${work.title} - ${work.category} project by omradixsolutions`}
                          className="absolute inset-0 w-full h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.5 }}
                          loading="lazy"
                        />
                      </figure>

                      <h3
                        className={`text-xl font-semibold mb-3 transition
                          group-hover:text-purple-400 
                          ${isExpanded ? "text-purple-400" : ""}`}
                      >
                        {work.title}
                      </h3>

                      <p
                        className={`text-gray-400 text-sm md:text-base leading-relaxed transition-all duration-300
                          ${isExpanded
                            ? "line-clamp-none"
                            : "line-clamp-3 group-hover:line-clamp-none"
                          }`}
                      >
                        {work.desc}
                      </p>

                      <motion.button
                        onClick={() => handleLiveClick(work.liveLink)}
                        whileHover={{
                          scale: 1.1,
                          boxShadow: "0 0 15px rgba(168,85,247,0.7)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block mt-3 px-3 py-1.5 text-xs md:text-sm font-semibold text-white 
                          bg-gradient-to-r from-purple-600 to-blue-600 rounded-full 
                          shadow-sm hover:shadow-[0_0_15px_rgba(168,85,247,0.7)] 
                          transition-all duration-300"
                        aria-label={`Visit live link for ${work.title}`}
                      >
                        Live
                      </motion.button>
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
