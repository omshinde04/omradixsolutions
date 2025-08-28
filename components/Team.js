"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // ✅ Import Next.js Image

const team = [
  {
    name: "OM Shinde",
    role: "Developer",
    img: "/images/team/developer.jpg",
  },
  {
    name: "Vijay Kalantre",
    role: "UI Designer",
    img: "/images/team/ui-designer.jpg",
  },
  {
    name: "Pranav Kadam",
    role: "Project Manager",
    img: "/images/team/project-manager.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Badge */}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md inline-block mb-4"
        >
          TEAM MEMBER
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-gray-900 mb-12"
        >
          Meet Our Team Of Creators, Designers{" "}
          <br className="hidden md:block" />
          And Problem Solvers
        </motion.h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <InteractiveTeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

/** Interactive card (same sizing as ServicesSection cards) */
function InteractiveTeamCard({ member }) {
  const [active, setActive] = useState(false);

  const onActiveStart = () => setActive(true);
  const onActiveEnd = () => setActive(false);

  return (
    <motion.div
      onPointerDown={onActiveStart}
      onPointerUp={onActiveEnd}
      onPointerCancel={onActiveEnd}
      onMouseEnter={onActiveStart}
      onMouseLeave={onActiveEnd}
      animate={active ? { y: -10, scale: 1.03 } : { y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="relative bg-white rounded-2xl border border-gray-100 shadow-md transition-all duration-300 flex flex-col items-center text-center p-6 w-full h-full min-h-[360px]"
      style={{
        boxShadow: active
          ? "0 20px 40px rgba(0,0,0,0.12), 0 10px 25px rgba(252,128,58,0.18)"
          : "0 8px 20px rgba(0,0,0,0.06)",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      {/* Image */}
      <div
        className={`w-28 h-28 mb-6 rounded-full overflow-hidden border-4 border-[#FC803A]/20 transition-transform duration-300 ${
          active ? "scale-105" : ""
        }`}
      >
        <Image
          src={member.img}
          alt={member.name}
          width={112} // 28 * 4px (tailwind w-28)
          height={112}
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Name */}
      <h3
        className={`text-xl font-bold ${
          active ? "text-[#FC803A]" : "text-gray-900"
        } transition-colors duration-200`}
      >
        {member.name}
      </h3>

      {/* Role */}
      <p className="text-gray-600 mt-2 text-sm md:text-base">{member.role}</p>

      {/* Decorative underline */}
      <div
        className={`mt-6 w-12 h-1 bg-gradient-to-r from-[#FC803A] to-[#FF5C00] rounded-full transition-opacity duration-300 ${
          active ? "opacity-100" : "opacity-0"
        }`}
      />
    </motion.div>
  );
}
