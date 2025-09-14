"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Palette, Sparkles, Users2 } from "lucide-react";

export default function Team() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const team = [
    {
      name: "Om Shinde",
      role: "Full Stack Developer",
      desc: "Crafts powerful full-stack applications with expertise in AI, scalable backend systems, and modern UI engineering.",
      icon: (
        <Code2 className="w-10 h-10 text-purple-400 group-hover:scale-110 transition-transform" />
      ),
    },
    {
      name: "Vijay Kalantre",
      role: "UI/UX Developer & Marketing",
      desc: "Designs immersive digital experiences, blending creativity with strategy to drive impactful branding and engagement.",
      icon: (
        <Palette className="w-10 h-10 text-blue-400 group-hover:rotate-12 transition-transform" />
      ),
    },
  ];

  return (
    <section
      id="team"
      className="relative bg-black text-white px-6 py-24 overflow-hidden font-[SF Pro]"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start mb-14"
        >
          <span className="px-5 py-2 bg-white/10 text-sm rounded-full font-medium mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400" />
            TEAM MEMBER
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-snug">
            Meet Our Visionary Creators,
            <br /> Designers And Problem Solvers
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-4 animate-pulse"></div>
        </motion.div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimatePresence>
            {team.map((member, idx) => {
              const isExpanded = expandedIndex === idx;

              return (
                <motion.div
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
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  className={`relative group bg-[#1D1D1F]/90 backdrop-blur-xl p-8 rounded-3xl border transition-all duration-500 cursor-pointer overflow-hidden
                    ${
                      isExpanded
                        ? "border-transparent shadow-[0_0_45px_rgba(139,92,246,0.7)]"
                        : "border-gray-800 hover:border-transparent hover:shadow-[0_0_35px_rgba(59,130,246,0.6)]"
                    }`}
                >

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="mb-6">{member.icon}</div>

                    <h3
                      className={`text-2xl font-bold mb-2 transition
                      ${
                        isExpanded
                          ? "text-purple-400"
                          : "group-hover:text-purple-300"
                      }`}
                    >
                      {member.name}
                    </h3>

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
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
