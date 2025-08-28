"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Info, Briefcase, FileText, Phone, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const panelRef = useRef(null);
  const pathname = usePathname();

  // Track scroll direction
  useEffect(() => {
    let lastScroll = 0;
    function handleScroll() {
      const current = window.scrollY;
      if (current > lastScroll && current > 60) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScroll = current;
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close sidebar on route change
  useEffect(() => setOpen(false), [pathname]);

  // Close on outside click
  useEffect(() => {
    function onDown(e) {
      if (panelRef.current && !panelRef.current.contains(e.target))
        setOpen(false);
    }
    if (open) document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  // Close on ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Generic smooth scroll
  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home", icon: <Home size={20} /> },
    { href: "#about", label: "About", icon: <Info size={20} /> },
    {
      href: "#services",
      label: "Services",
      icon: <Briefcase size={20} />,
      onClick: (e) => handleSmoothScroll(e, "services"),
    },
   

{
      href: "#blog",
      label: "Blogs",
      icon: <Phone size={20} />,
      onClick: (e) => handleSmoothScroll(e, "blog"),
    },

    {
      href: "#contact",
      label: "Contact",
      icon: <Phone size={20} />,
      onClick: (e) => handleSmoothScroll(e, "contact"),
    },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: visible ? 0 : -80 }}
      transition={{ duration: 0.35 }}
      className="fixed top-0 left-0 right-0 bg-[#FFF7EC] shadow z-50"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8 h-16 flex items-center justify-between">
        <h1 className="text-sm font-semibold tracking-wide">
          {/* OMRADIX SOLUTIONS */}
        </h1>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              {link.onClick ? (
                <a
                  href={link.href}
                  onClick={link.onClick}
                  className="flex items-center gap-1 hover:text-red-600 transition"
                >
                  {link.icon}
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="flex items-center gap-1 hover:text-red-600 transition"
                  onClick={() => setOpen(false)}
                >
                  {link.icon}
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Sidebar toggle button */}
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex flex-col gap-1.5"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-0.5 w-6 bg-black"></span>
          <span className="h-0.5 w-6 bg-black"></span>
          <span className="h-0.5 w-6 bg-black"></span>
        </button>
      </div>

      {/* Mobile sidebar menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 md:hidden z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              ref={panelRef}
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 left-0 bottom-0 w-72 bg-white md:hidden z-50 flex flex-col shadow-lg"
            >
              {/* Close button */}
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-lg font-semibold">Menu</h2>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="p-2"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Nav links */}
              <motion.ul
                className="flex flex-col gap-6 p-6 text-lg font-medium"
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.12 },
                  },
                }}
              >
                {navLinks.map((link) => (
                  <motion.li
                    key={link.href}
                    variants={{
                      hidden: { x: -30, opacity: 0 },
                      show: { x: 0, opacity: 1 },
                    }}
                  >
                    {link.onClick ? (
                      <a
                        href={link.href}
                        onClick={link.onClick}
                        className="flex items-center gap-3 hover:text-red-600 transition"
                      >
                        {link.icon}
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="flex items-center gap-3 hover:text-red-600 transition"
                        onClick={() => setOpen(false)}
                      >
                        {link.icon}
                        {link.label}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
