"use client";

import { useState } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Palette, Sparkles, Users2 } from "lucide-react";

export default function Team() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const team = [
    {
      name: "Om Shinde",
      role: "Founder & Full Stack Developer",
      desc: "Leads OmRadix Solutions with a vision for innovation. Expert in full-stack development, AI integration, and scalable systems — building powerful solutions that help businesses grow.",
      icon: (
        <Code2 className="w-10 h-10 text-purple-400 group-hover:scale-110 transition-transform" />
      ),
    },
    {
      name: "Vijay Kalantre",
      role: "Co-Founder, UI/UX & Marketing",
      desc: "Brings ideas to life with creative UI/UX design and impactful marketing strategies. Focused on building engaging digital experiences and driving brand success.",
      icon: (
        <Palette className="w-10 h-10 text-blue-400 group-hover:rotate-12 transition-transform" />
      ),
    },
  ];

  // JSON-LD Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OmRadix Solutions",
    url: "https://www.omradixsolutions.in/",
    logo: "https://www.omradixsolutions.in/logo.png",
    sameAs: [
      "https://www.linkedin.com/company/omradixsolutions",
      "https://github.com/omradixsolutions",
    ],
    employee: team.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.role,
      description: member.desc,
    })),
  };

  return (
    <>
      {/* 🧠 SEO Meta Tags */}
      <Head>
        <title>Our Team | OmRadix Solutions</title>
        <meta
          name="description"
          content="Meet the talented minds behind OmRadix Solutions — experts in Full Stack Development, UI/UX Design, and Digital Marketing driving innovation for global clients."
        />
        <meta
          name="keywords"
          content="OmRadix Solutions team, Om Shinde, Vijay Kalantre, full stack developers, UI/UX designers, tech company India"
        />
        <meta name="author" content="OmRadix Solutions" />
        <meta property="og:title" content="Meet Our Team | OmRadix Solutions" />
        <meta
          property="og:description"
          content="Get to know the passionate creators and developers behind OmRadix Solutions who bring ideas to life."
        />
        <meta property="og:url" content="https://www.omradixsolutions.in/team" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="OmRadix Solutions" />
        <meta
          property="og:image"
          content="https://www.omradixsolutions.in/og-team-banner.jpg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      {/* 🌟 Team Section */}
      <section
        id="team"
        className="relative bg-black text-white px-6 py-24 overflow-hidden font-[SF Pro]"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start mb-14"
          >
            <span className="px-5 py-2 bg-white/10 text-sm rounded-full font-medium mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              TEAM MEMBER
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-snug">
              Meet Our Visionary Creators,
              <br /> Designers And Problem Solvers
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-4 animate-pulse"></div>
          </motion.header>

          {/* Team Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <AnimatePresence>
              {team.map((member, idx) => {
                const isExpanded = expandedIndex === idx;

                return (
                  <motion.article
                    key={member.name}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: idx * 0.2,
                      type: "spring",
                    }}
                    whileHover={{ y: -8 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() =>
                      setExpandedIndex(isExpanded ? null : idx)
                    }
                    className={`relative group bg-[#1D1D1F]/90 backdrop-blur-xl p-8 rounded-3xl border transition-all duration-500 cursor-pointer overflow-hidden
                      ${
                        isExpanded
                          ? "border-transparent shadow-[0_0_45px_rgba(139,92,246,0.7)]"
                          : "border-gray-800 hover:border-transparent hover:shadow-[0_0_35px_rgba(59,130,246,0.6)]"
                      }`}
                  >
                    {/* Card Content */}
                    <div className="relative z-10">
                      <div className="mb-6">{member.icon}</div>
                      <h2
                        className={`text-2xl font-bold mb-2 transition
                        ${
                          isExpanded
                            ? "text-purple-400"
                            : "group-hover:text-purple-300"
                        }`}
                      >
                        {member.name}
                      </h2>

                      <p className="text-purple-400 text-sm font-medium mb-4 flex items-center gap-2">
                        <Users2 className="w-4 h-4" /> {member.role}
                      </p>

                      <p
                        className={`text-gray-400 text-sm md:text-base leading-relaxed transition-all duration-300
                          ${
                            isExpanded
                              ? "line-clamp-none"
                              : "line-clamp-3 group-hover:line-clamp-none"
                          }`}
                      >
                        {member.desc}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
