"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Service data
const services = [
  {
    title: "Web Development",
    description:
      "We provide scalable, responsive, and high-performance web applications tailored to your business.",
    image: "/images/web-dev.png",
  },
  {
    title: "Mobile App Development",
    description:
      "Innovative and user-friendly mobile solutions designed for both iOS and Android platforms.",
    image: "/images/mobile-app.png",
  },
  {
    title: "UI/UX Design",
    description:
      "Creative and intuitive design solutions that deliver seamless digital experiences.",
    image: "/images/ui-ux.png",
  },
  {
    title: "Cloud Solutions",
    description:
      "Secure and scalable cloud services to keep your business future-ready.",
    image: "/images/cloud.png",
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven strategies to maximize your brand visibility and customer engagement.",
    image: "/images/marketing.png",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Custom online store development to help your business grow digitally.",
    image: "/images/ecommerce.png",
  },
];

// Entry / container variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const entryCardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: { opacity: 0, y: 40, scale: 0.96, transition: { duration: 0.45 } },
};

export default function ServicesSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? services : services.slice(0, 3);

  return (
    <section
      id="services"
      className="relative w-full pt-20 pb-40 bg-gradient-to-b from-white via-[#F8FBFF] to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
              Providing <span className="text-[#FC803A]">Best Services</span>
            </h2>
            <p className="text-gray-600 mt-2 text-base md:text-lg">
              Service That Speaks Quality.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowAll((s) => !s)}
            className="bg-gradient-to-r from-[#FC803A] to-[#FF5C00] text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition"
          >
            {showAll ? "Show Less" : "View All Services"}
          </motion.button>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {visibleServices.map((service) => (
              <motion.div
                key={service.title}
                variants={entryCardVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="flex"
              >
                <InteractiveCard service={service} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Background decorations */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute top-20 left-[-100px] w-[300px] h-[300px] bg-[#FC803A] rounded-full blur-[150px] opacity-20"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute bottom-10 right-[-120px] w-[350px] h-[350px] bg-[#5CC6FF] rounded-full blur-[160px] opacity-20"
      />
    </section>
  );
}

/** Interactive card component */
function InteractiveCard({ service }) {
  const [active, setActive] = useState(false);

  const onActiveStart = () => setActive(true);
  const onActiveEnd = () => setActive(false);

  return (
    <motion.div
      // pointer / touch / mouse handlers
      onPointerDown={onActiveStart}
      onPointerUp={onActiveEnd}
      onPointerCancel={onActiveEnd}
      onTouchStart={onActiveStart}
      onTouchEnd={onActiveEnd}
      onMouseEnter={onActiveStart}
      onMouseLeave={onActiveEnd}
      animate={active ? { y: -10, scale: 1.03 } : { y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="relative bg-white rounded-2xl border border-gray-100 shadow-md transition-all duration-300 flex flex-col items-center text-center p-8 w-full h-full min-h-[360px]"
      style={{
        boxShadow: active
          ? "0 20px 40px rgba(0,0,0,0.12), 0 10px 25px rgba(252,128,58,0.18)"
          : "0 8px 20px rgba(0,0,0,0.06)",
        WebkitTapHighlightColor: "transparent",
        touchAction: "manipulation",
      }}
    >
      {/* Image placeholder */}
      <div
        className={`w-24 h-24 mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#E9F6FF] to-[#D6EDFF] transition-transform duration-300 ${
          active ? "scale-105" : ""
        }`}
      >
        <span className="text-gray-400 text-sm">Image</span>
      </div>

      {/* Title */}
      <h3
        className={`text-xl font-bold ${
          active ? "text-[#FC803A]" : "text-gray-900"
        } transition-colors duration-200`}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed flex-grow">
        {service.description}
      </p>

      {/* Decorative underline */}
      <div
        className={`mt-6 w-12 h-1 bg-gradient-to-r from-[#FC803A] to-[#FF5C00] rounded-full transition-opacity duration-300 ${
          active ? "opacity-100" : "opacity-0"
        }`}
      />
    </motion.div>
  );
}
