"use client";

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Blogs() {
  const [showAll, setShowAll] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const siteUrl = "https://yourdomain.com"; // ⚙️ change to your domain

  const blogs = [
    {
      title: "Artificial Intelligence: The Future of Smarter Businesses",
      image: "/blogs/blog1.jpeg",
      desc: "AI is revolutionizing industries by automating workflows, enhancing customer experiences, and driving data-driven decisions. Discover how businesses can leverage AI to reduce costs, save time, and scale smarter.",
      category: "AI",
      date: "2025-09-10",
      slug: "artificial-intelligence-future-of-business",
    },
    {
      title: "Why Good Design Builds Trust",
      image: "/blogs/blog2.jpeg",
      desc: "Design isn’t just about visuals—it’s about creating meaningful user experiences. Learn why clean, modern, and user-centric UI/UX design plays a crucial role in building trust and driving conversions.",
      category: "Design",
      date: "2025-08-28",
      slug: "why-good-design-builds-trust",
    },
    {
      title: "Scaling Businesses with Cloud Technology",
      image: "/blogs/blog3.jpeg",
      desc: "From AWS to Azure, cloud platforms are transforming how businesses scale. Explore how cloud hosting, databases, and applications enable flexibility, security, and efficiency in today’s digital age.",
      category: "Cloud",
      date: "2025-08-05",
      slug: "scaling-businesses-with-cloud-technology",
    },
    {
      title: "Why Mobile-First is the Future",
      image: "/blogs/blog4.jpeg",
      desc: "With over 70% of users browsing on mobile, mobile-first design is no longer optional. Learn how responsive sites and mobile apps help businesses reach customers anywhere, anytime.",
      category: "Mobile",
      date: "2025-07-22",
      slug: "why-mobile-first-is-the-future",
    },
    {
      title: "Digital Marketing: The Growth Engine of Modern Business",
      image: "/blogs/blog5.jpeg",
      desc: "Marketing today is about trust and engagement. From SEO to social media strategies, discover how digital marketing connects brands with the right audience and drives real results.",
      category: "Marketing",
      date: "2025-07-01",
      slug: "digital-marketing-growth-engine",
    },
  ];

  const categories = ["All", "AI", "Design", "Cloud", "Mobile", "Marketing"];
  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category === activeCategory);

  // ✅ JSON-LD structured data for Google Rich Results
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Omradix Blogs",
    url: `${siteUrl}/blogs`,
    description:
      "Explore the latest insights on AI, Design, Cloud, Mobile, and Marketing from Omradix Solutions.",
    author: {
      "@type": "Organization",
      name: "Omradix Solutions",
    },
    publisher: {
      "@type": "Organization",
      name: "Omradix Solutions",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    blogPost: blogs.map((blog) => ({
      "@type": "BlogPosting",
      headline: blog.title,
      image: `${siteUrl}${blog.image}`,
      datePublished: blog.date,
      dateModified: blog.date,
      articleSection: blog.category,
      url: `${siteUrl}/blogs/${blog.slug}`,
      author: {
        "@type": "Organization",
        name: "Omradix Solutions",
      },
    })),
  };

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Head>
        <title>Blogs & Insights | Omradix Solutions</title>
        <meta
          name="description"
          content="Explore the latest blogs and insights on AI, Design, Cloud, Mobile, and Marketing — helping businesses grow smarter and faster with digital innovation."
        />
        <meta
          name="keywords"
          content="AI blogs, UI UX design, Cloud technology, Mobile-first design, Digital marketing, Omradix Solutions"
        />
        <meta name="robots" content="index, follow" />

        {/* ✅ OpenGraph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blogs & Insights | Omradix Solutions" />
        <meta
          property="og:description"
          content="Stay updated with trends, tips, and strategies in AI, Cloud, Design, Mobile, and Marketing."
        />
        <meta property="og:url" content={`${siteUrl}/blogs`} />
        <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blogs & Insights | Omradix Solutions" />
        <meta
          name="twitter:description"
          content="Trends, tips, and insights from Omradix Solutions — empowering smarter business decisions."
        />
        <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />

        {/* ✅ JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
        />
      </Head>

      {/* ✅ Main Blog Section */}
      <section
        id="blogs"
        className="relative bg-black text-white px-6 py-24 overflow-hidden font-[SF Pro]"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-14"
          >
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white">
                Latest Blogs & Insights
              </h1>
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
          </motion.header>

          {/* Category Filter */}
          <nav className="flex flex-wrap gap-4 mb-10" aria-label="Blog Categories">
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
          </nav>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence>
              {(showAll ? filteredBlogs : filteredBlogs.slice(0, 3)).map(
                (blog, idx) => {
                  const isExpanded = expandedIndex === idx;

                  return (
                    <motion.article
                      key={blog.slug}
                      initial={{ opacity: 0, y: 80 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: idx * 0.15,
                        type: "spring",
                      }}
                      whileHover={{ y: -10 }}
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
                      <div className="w-full overflow-hidden rounded-xl mb-6">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          width={600}
                          height={400}
                          className="w-full h-[300px] sm:h-[320px] md:h-[340px] lg:h-[300px] xl:h-[320px] object-cover object-center rounded-xl"
                        />
                      </div>

                      {/* Title */}
                      <h2
                        className={`text-lg md:text-xl font-semibold mb-2 transition
                          group-hover:text-purple-400 
                          ${isExpanded ? "text-purple-400" : ""}`}
                      >
                        {blog.title}
                      </h2>

                      {/* Date & Category */}
                      <div className="text-xs text-gray-500 mb-3">
                        {new Date(blog.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}{" "}
                        • <span className="text-purple-400">{blog.category}</span>
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
