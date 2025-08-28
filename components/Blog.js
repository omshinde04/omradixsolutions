"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BlogSection() {
  const [expanded, setExpanded] = useState(null);

  const blogs = [
    {
      id: 1,
      title: "5 Strategies to Boost Your Business Online",
      excerpt:
        "Learn how to grow your digital presence and reach more customers with these proven strategies.",
      fullText:
        "Learn how to grow your digital presence and reach more customers with these proven strategies. From SEO optimization, social media marketing, content creation, paid advertising, to customer engagement — these strategies will help you achieve long-term online growth.",
      image: "/images/blog1.jpg",
    },
    {
      id: 2,
      title: "The Future of AI in Everyday Life",
      excerpt:
        "Discover how artificial intelligence is shaping industries and making our daily lives easier.",
      fullText:
        "Discover how artificial intelligence is shaping industries and making our daily lives easier. AI is revolutionizing healthcare, transportation, finance, and even our homes with smart assistants. The impact of AI will continue to expand, creating opportunities and challenges for the future.",
      image: "/images/blog2.jpg",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-10 lg:px-20 bg-white" id="blog">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <span className="px-6 py-1.5 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-md">
          Blog
        </span>
        <h2 className="mt-4 text-2xl md:text-3xl font-bold leading-snug">
          Stay Learn From <br /> Our Latest News
        </h2>
      </motion.div>

      {/* Blog Cards */}
      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {blogs.map((blog, idx) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            {/* Blog Image */}
            <div className="relative h-52 w-full">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Blog Content */}
            <div className="p-6">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                {blog.title}
              </h3>

              {/* Collapsible Text */}
              <motion.div
                initial={false}
                animate={{
                  height: expanded === blog.id ? "auto" : "3.5rem",
                }}
                className="overflow-hidden text-gray-600 text-sm md:text-base"
              >
                <p>
                  {expanded === blog.id ? blog.fullText : blog.excerpt}
                </p>
              </motion.div>

              {/* Toggle Button */}
              <button
                onClick={() =>
                  setExpanded(expanded === blog.id ? null : blog.id)
                }
                className="mt-4 text-blue-600 font-medium hover:underline"
              >
                {expanded === blog.id ? "Show Less ↑" : "Read More →"}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
