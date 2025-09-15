"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Blogs() {
  const [showAll, setShowAll] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
const blogs = [
  {
    title: "Artificial Intelligence: The Future of Smarter Businesses",
    image: "/blogs/blog1.png",
    desc: "AI is revolutionizing industries by automating workflows, enhancing customer experiences, and driving data-driven decisions. Discover how businesses can leverage AI to reduce costs, save time, and scale smarter.",
    category: "AI",
    date: "Sep 10, 2025",
  },
  {
    title: "Why Good Design Builds Trust",
    image: "/blogs/blog2.png",
    desc: "Design isn’t just about visuals—it’s about creating meaningful user experiences. Learn why clean, modern, and user-centric UI/UX design plays a crucial role in building trust and driving conversions.",
    category: "Design",
    date: "Aug 28, 2025",
  },
  {
    title: "Scaling Businesses with Cloud Technology",
    image: "/blogs/blog3.png",
    desc: "From AWS to Azure, cloud platforms are transforming how businesses scale. Explore how cloud hosting, databases, and applications enable flexibility, security, and efficiency in today’s digital age.",
    category: "Cloud",
    date: "Aug 5, 2025",
  },
  {
    title: "Why Mobile-First is the Future",
    image: "/blogs/blog4.png",
    desc: "With over 70% of users browsing on mobile, mobile-first design is no longer optional. Learn how responsive sites and mobile apps help businesses reach customers anywhere, anytime.",
    category: "Mobile",
    date: "Jul 22, 2025",
  },
  {
    title: "Digital Marketing: The Growth Engine of Modern Business",
    image: "/blogs/blog5.png",
    desc: "Marketing today is about trust and engagement. From SEO to social media strategies, discover how digital marketing connects brands with the right audience and drives real results.",
    category: "Marketing",
    date: "Jul 1, 2025",
  },
];

  const categories = ["All", "AI", "Design", "Cloud", "Mobile", "Marketing"];
  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category === activeCategory);

  return (
    <section
      id="blogs"
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
              Latest Blogs & Insights
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-3 animate-pulse"></div>
            <p className="text-sm md:text-lg text-gray-400 mt-4">
              Stay updated with trends, tips, and strategies ✨
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

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence>
            {(showAll ? filteredBlogs : filteredBlogs.slice(0, 3)).map(
              (blog, idx) => {
                const isExpanded = expandedIndex === idx;

                return (
                  <motion.div
                    key={blog.title}
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
                    {/* Image */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl mb-6">
                      <motion.img
                        src={blog.image}
                        alt={blog.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        whileHover={{ scale: 1.07 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-lg md:text-xl font-semibold mb-2 transition
                        group-hover:text-purple-400 
                        ${isExpanded ? "text-purple-400" : ""}`}
                    >
                      {blog.title}
                    </h3>

                    {/* Date & Category */}
                    <div className="text-xs text-gray-500 mb-3">
                      {blog.date} •{" "}
                      <span className="text-purple-400">{blog.category}</span>
                    </div>

                    {/* Description */}
                    <p
                      className={`text-gray-400 text-sm leading-relaxed transition-all duration-300
                        ${
                          isExpanded
                            ? "line-clamp-none"
                            : "line-clamp-3 group-hover:line-clamp-none"
                        }`}
                    >
                      {blog.desc}
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
