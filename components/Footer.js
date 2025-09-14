"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-300 border-t border-gray-800 scroll-smooth">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          {/* Brand Info */}
          <div>
            <h2 className="text-lg font-bold text-white tracking-wide mb-3">
              OMRADIX SOLUTIONS
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              The future of business is digital © 2024 Omradix Solutions
            </p>
            <p className="text-gray-500 text-xs italic mt-2">
              {"Omradix Solutions is a web development & digital growth platform."}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 relative">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-10 h-[2px] bg-purple-500"></span>
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", id: "home" },
                { label: "About Us", id: "partner" },
                { label: "Services", id: "services" },
                { label: "Blogs", id: "blogs" },
                { label: "Contact", id: "contact" },
              ].map((link) => (
                <motion.li
                  key={link.id}
                  whileHover={{ x: 5, color: "#a78bfa" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href={`#${link.id}`}>{link.label}</a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 relative">
              Our Services
              <span className="absolute -bottom-1 left-0 w-10 h-[2px] bg-purple-500"></span>
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "Web Development",
                "Mobile Applications",
                "UI/UX Design",
                "Digital Marketing",
                "Cloud Solutions",
              ].map((service) => (
                <motion.li
                  key={service}
                  whileHover={{ x: 5, color: "#a78bfa" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.hr
          className="my-10 border-gray-800"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Bottom Row */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Email Button */}
          <motion.a
            href="mailto:omradixsolutions@gmail.com"
            className="flex items-center gap-2 px-5 py-3 rounded-full border border-gray-700 hover:border-purple-500 hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] transition duration-300 text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Mail className="w-4 h-4" />
            omradixsolutions@gmail.com
          </motion.a>

          {/* Social Icons */}
          <div className="flex gap-6 text-gray-400">
            <motion.a
              href="https://www.linkedin.com/company/omradix-solutions/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#0A66C2" }}
              className="transition"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/omradix_solutions?igsh=cHp4bzF6ZmNqeWow"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#E4405F" }}
              className="transition"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        className="bg-[#0c0c0c] text-center py-5 text-xs text-gray-500 border-t border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        © 2025 Developed by{" "}
        <span className="text-purple-400">omradixsolutions</span>. All rights
        reserved.
      </motion.div>
    </footer>
  );
}
