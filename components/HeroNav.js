"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Home, User, Briefcase, FileText, Phone, Menu, X } from "lucide-react";
import { Spotlight } from "../ui/spotlight";

export default function HeroSection() {
  const navLinks = [
    { href: "#home", label: "Home", icon: Home },
    { href: "#partner", label: "About", icon: User },
    { href: "#services", label: "Services", icon: Briefcase },
    { href: "#blogs", label: "Blogs", icon: FileText },
    { href: "#contact", label: "Contact", icon: Phone },
  ];

  const paths = useRef([]);
  const [width, setWidth] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);

  // Get window width safely
  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animate neon waves
  useEffect(() => {
    if (!width) return;
    paths.current.forEach((path) => {
      if (!path) return;
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
    });

    let startTime;
    const animate = (time) => {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;

      paths.current.forEach((path, i) => {
        if (!path) return;
        const length = path.getTotalLength();
        const speed = 8000 + i * 2000;
        path.style.strokeDashoffset = `${
          length - (elapsed / speed) * length
        }`;
      });

      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [width]);

  // Navbar hide on scroll down, show on scroll up or pause
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        // scrolling down
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;

      // Show navbar when scrolling pauses
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setShowNavbar(true);
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-screen flex flex-col items-center justify-between overflow-hidden pt-24 md:pt-0"
    >
      {/* Spotlight Background */}
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" />

      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: showNavbar ? 0 : -80 }}
        transition={{ duration: 0.4 }}
        className="hidden md:flex w-[90%] max-w-6xl mx-auto justify-between items-center px-6 py-3 bg-black/80 text-white rounded-full shadow-lg fixed top-6 left-1/2 -translate-x-1/2 backdrop-blur-sm z-50"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 font-semibold text-sm"
        >
          <span className="whitespace-nowrap">OMRADIX SOLUTIONS</span>
          <span className="h-5 w-px bg-white/40"></span>
        </motion.div>

        <ul className="flex gap-8 text-white font-medium">
          {navLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-2 hover:text-[#EEFF04] transition"
                >
                  <Icon className="h-4 w-4" />
                  <span>{link.label}</span>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </motion.nav>

      {/* Mobile Navbar with Hamburger */}
      <motion.div
        initial={{ y: -80 }}
        animate={{ y: showNavbar ? 0 : -80 }}
        transition={{ duration: 0.4 }}
        className="md:hidden fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-black/80 text-white flex items-center justify-between px-6 py-3 rounded-full shadow-lg backdrop-blur-sm z-50"
      >
        {/* Logo */}
        <div className="text-xs font-bold tracking-wide text-white whitespace-nowrap">
          OMRADIX SOLUTIONS
        </div>

        {/* Divider */}
        <span className="h-5 w-px bg-white/40 mx-3"></span>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.div>

      {/* Full-Screen Hamburger Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed inset-0 bg-black/95 text-white flex flex-col items-center justify-center space-y-8 z-40"
          >
            {navLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl font-semibold hover:text-[#EEFF04] transition flex items-center gap-3"
                  >
                    <Icon className="w-6 h-6" />
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center text-center px-4 mt-20 md:mt-40 z-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-white leading-snug"
        >
          Your Success Our <span className="text-[#EEFF04]">Mission</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-gray-200 text-lg md:text-xl"
        >
          Partner With Us To Unlock New Opportunities <br />
          And Grow Your Online Presence.
        </motion.p>
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 15px rgba(238, 255, 4, 0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          className="mt-6 px-8 py-3 bg-white text-black rounded-xl shadow-md font-semibold flex items-center gap-2 relative overflow-hidden"
        >
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-[#EEFF04]/20 via-transparent to-[#EEFF04]/20"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />
          <a href="#contact">
            <span className="relative z-10">Contact Now</span>
          </a>
          <motion.span
            className="relative z-10"
            whileHover={{ x: 6 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            ➝
          </motion.span>
        </motion.button>
      </div>

      {/* Neon Wave Animated Lines */}
      {width > 0 && (
        <div className="absolute inset-0 w-full h-full z-0">
          <svg width="100%" height="100%">
            {[0.2, 0.35, 0.5, 0.65].map((opacity, i) => {
              const y = 320 + i * 50;
              return (
                <path
                  key={i}
                  ref={(el) => (paths.current[i] = el)}
                  d={`M0,${y} C${width * 0.25},${y - 50} ${width * 0.5},${
                    y + 50
                  } ${width * 0.75},${y} ${width},${y - 50}`}
                  fill="transparent"
                  stroke="white"
                  strokeWidth="2"
                  strokeOpacity={opacity}
                  strokeLinecap="round"
                />
              );
            })}
          </svg>
        </div>
      )}

      {/* Trusted Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center px-4 mb-28 md:mb-20 mt-6 md:mt-0 z-20"
      >
        <h3 className="text-white font-bold text-lg">
          Trusted By 1,000+ Businesses.
        </h3>
        <p className="text-gray-300 max-w-2xl text-sm md:text-base mt-2">
          From Startups To Growing Enterprises, Companies Choose Omradix
          Solutions To Build Powerful Websites, Boost Their Online Presence,
          And Create Endless Growth Opportunities.
        </p>

        <div className="flex items-center mt-4">
          {["img1.png", "img2.png", "img3.png", "img4.png"].map((img, i) => (
            <div
              key={i}
              className={`w-10 h-10 rounded-full overflow-hidden border-2 border-white ${
                i === 0 ? "" : "-ml-4"
              }`}
            >
              <Image
                src={`/images/${img}`}
                alt="Client"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
          ))}
          <span className="ml-3 text-gray-300 text-sm">
            Trusted By 1,000+ Clients.
          </span>
        </div>
      </motion.div>
    </section>
  );
}
