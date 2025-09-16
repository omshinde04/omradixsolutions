"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Works() {
  const [showAll, setShowAll] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const works = [
    {
      title: "Thread Haus — E-Commerce & Brand Experience",
      image: "/projects/img1.png",
      desc: "Built a customised online store for Thread Haus Co with emphasis on sustainable fashion and community impact. Key features: upcycled material products, drop-collections, trending items shown dynamically, and strong social proof & mission narrative.",
      category: "Web",
    },
    {
      title: "Leave Desk — Smart Leave Management System",
      image: "/projects/img2.png",
      desc: "Designed and developed a digital leave management platform for MET College, Adgaon Nashik. The system enables both students and faculty to apply for leave seamlessly with automated email notifications and real-time tracking.",
      category: "Web",
    },
    {
      title: "Business Dashboard",
      image: "/projects/img3.png",
      desc: "Interactive analytics dashboard with real-time data and charts.",
      category: "Web",
    },
    {
      title: "Social Media App",
      image: "/projects/img4.png",
      desc: "Mobile-first app for connecting and sharing with modern UI.",
      category: "Mobile",
    },
    {
      title: "Lost & Found System",
      image: "/projects/img5.png",
      desc: "AI-powered system for reporting and finding lost items with notifications.",
      category: "AI",
    },
    {
      title: "Finance Tracker",
      image: "/projects/img6.png",
      desc: "AI-driven finance tracker with insights, expense tracking, and goals.",
      category: "AI",
    },
  ];

  const categories = ["All", "Web", "AI", "Mobile"];
  const filteredWorks =
    activeCategory === "All"
      ? works
      : works.filter((w) => w.category === activeCategory);

  return (
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
                  <motion.div
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
                      ${
                        isExpanded
                          ? "border-transparent shadow-[0_0_35px_rgba(139,92,246,0.6)]"
                          : "border-gray-800 hover:border-transparent hover:shadow-[0_0_35px_rgba(139,92,246,0.6)]"
                      }`}
                    onClick={() =>
                      setExpandedIndex(isExpanded ? null : idx)
                    }
                  >
                   <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl mb-6 bg-gray-900">
  <motion.img
    src={work.image}
    alt={work.title}
    className="absolute inset-0 w-full h-full object-contain"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.5 }}
  />
</div>


                    {/* Title */}
                    <h3
                      className={`text-xl font-semibold mb-3 transition
                        group-hover:text-purple-400 
                        ${isExpanded ? "text-purple-400" : ""}`}
                    >
                      {work.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`text-gray-400 text-sm md:text-base leading-relaxed transition-all duration-300
                        ${
                          isExpanded
                            ? "line-clamp-none"
                            : "line-clamp-3 group-hover:line-clamp-none"
                        }`}
                    >
                      {work.desc}
                    </p>
                  </motion.div>
                );
              }
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
