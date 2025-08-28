"use client";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link"; // ✅ Import Next.js Link

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">🌐 Omradix</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Empowering businesses with creative digital solutions. 
            Let’s build something amazing together.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-white transition">
                Blogs
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Web Development</li>
            <li>Mobile Applications</li>
            <li>UI/UX Design</li>
            <li>Digital Marketing</li>
            <li>Cloud Solutions</li>
          </ul>
        </motion.div>

        {/* Newsletter & Social */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 w-full rounded-md focus:outline-none text-black"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-blue-600 text-white rounded-md shadow-md"
            >
              Subscribe
            </motion.button>
          </form>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="#"
              className="text-gray-400 hover:text-white"
            >
              <Facebook size={22} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="#"
              className="text-gray-400 hover:text-white"
            >
              <Twitter size={22} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="#"
              className="text-gray-400 hover:text-white"
            >
              <Linkedin size={22} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.instagram.com/omradix_solutions?igsh=MWY1MmQxOWxwMzFq&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <Instagram size={22} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Developed by{" "}
        <span className="text-blue-500 font-medium">omradixsolutions</span>. All rights reserved.
      </div>
    </footer>
  );
}
