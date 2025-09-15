"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Home, User, Briefcase, FileText, Phone } from "lucide-react";
import { Spotlight } from "../ui/spotlight"; // Updated Spotlight component

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
    paths.current.forEach((path, i) => {
      if (!path) return;
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
    });

    let startTime;
    const animate = (time) => {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;

      paths.current.forEach((path, i) => {
        if (!path) return;
        const length = path.getTotalLength();
        const speed = 8000 + i * 2000;
        path.style.strokeDashoffset = length - (elapsed / speed) * length;
      });

      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [width]);

  return (
    <section
      id="home"
      className="relative w-full h-screen flex flex-col items-center justify-between overflow-hidden"
    >
      {/* Spotlight Background */}
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" />

      {/* Optional Background Image
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero1.png" 
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20 -z-10"></div>
      </div> */}

      {/* Navbar */}
      <nav className="hidden md:flex w-[90%] max-w-6xl mx-auto justify-between items-center px-6 py-3 bg-black/80 text-white rounded-full shadow-lg absolute top-6 left-1/2 -translate-x-1/2 backdrop-blur-sm z-10">
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
      </nav>

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center text-center px-4 mt-10 md:mt-40 z-20">
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

      {/* Mobile Navbar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-black/95 text-white flex justify-around items-center py-2 border-t border-white/10 z-50">
        {navLinks.map((link, i) => {
          const Icon = link.icon;
          return (
            <Link key={i} href={link.href} scroll={true}>
              <motion.div
                initial={{
                  y: 50,
                  scale: 0,
                  opacity: 0,
                  x: i % 2 === 0 ? -20 : 20,
                }}
                animate={{
                  y: [50, -10, 0],
                  scale: [0, 1.2, 1],
                  x: [i % 2 === 0 ? -20 : 20, 0],
                  opacity: [0, 1],
                }}
                transition={{
                  type: "tween",
                  ease: "easeOut",
                  duration: 0.8,
                  delay: i * 0.15,
                }}
                whileHover={{
                  scale: 1.3,
                  y: -5,
                  transition: { type: "spring", stiffness: 300, damping: 12 },
                }}
                className="flex flex-col items-center justify-center text-xs font-medium text-white/70 hover:text-[#EEFF04] cursor-pointer"
              >
                <Icon className="h-5 w-5 mb-1" />
                {link.label}
              </motion.div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
