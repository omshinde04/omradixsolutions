"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Working with Omadix Solutions was an amazing experience. They built a dynamic e-commerce website for The Thread Haus that truly reflects our brand. The site is fast, user-friendly, and has made it easier for us to connect with our customers online. We’re really happy with the result!",
    author: "The Thread Haus",
  },
  {
    text: "Omadix Solutions provided exceptional service and delivered a website beyond our expectations. Their attention to detail and commitment to quality is outstanding.",
    author: "Creative Agency",
  },
  {
    text: "From start to finish, the process was smooth and professional. Our business has grown tremendously since launching our new platform with Omadix Solutions.",
    author: "Startup Founder",
  },
];

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-[#FFEBEC] py-16 px-6 md:px-20 flex flex-col items-center justify-center">
      {/* Quote Icon */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-6"
      >
        <div className="w-12 h-12 rounded-full border-2 border-[#FC803A] flex items-center justify-center text-[#FC803A] mx-auto">
          <Quote className="w-6 h-6" />
        </div>
      </motion.div>

      {/* Testimonial Text */}
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl"
      >
        <p className="text-gray-800 text-lg md:text-xl leading-relaxed">
          <span className="text-[#FC803A] mr-1">“</span>
          {testimonials[activeIndex].text}
          <span className="text-[#FC803A] ml-1">”</span>
        </p>
        <p className="mt-4 font-medium text-[#FC803A]">
          ~ {testimonials[activeIndex].author}
        </p>
      </motion.div>

      {/* Pagination Dots */}
      <div className="flex mt-8 gap-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition ${
              activeIndex === index ? "bg-black" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
