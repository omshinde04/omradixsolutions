"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What Is Your Hourly Rate?",
    answer:
      "We're Sorry You Are Experiencing Some Trouble. Open The Help Chat In The Bottom Right Corner To Chat With Someone Directly Or We Might Have Some Helpful Information In Our Knowledge Base Here.",
  },
  {
    question: "What Type Of Projects Do You Take On?",
    answer:
      "We work on a wide variety of projects including web applications, mobile apps, branding, UI/UX design, and more.",
  },
  {
    question: "How Do You Charge For Projects?",
    answer:
      "Our pricing depends on the project scope, complexity, and duration. Contact us for a tailored quote.",
  },
  {
    question: "What Time-Zone Do You Work In?",
    answer:
      "We primarily work in IST (Indian Standard Time), but we are flexible to overlap with clients across different time zones.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-black text-white py-16 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-green-500 text-black font-semibold text-sm px-5 py-2 rounded-full shadow-md inline-block"
        >
          FAQs
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mt-6 mb-10"
        >
          Frequently Asked Questions
        </motion.h2>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="border-b border-gray-700 pb-4"
            >
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-sm md:text-base">
                  {faq.question}
                </span>
                <span className="ml-4 flex-shrink-0 w-8 h-8 flex items-center justify-center border border-gray-500 rounded-full">
                  {activeIndex === index ? (
                    <Minus size={16} className="text-white" />
                  ) : (
                    <Plus size={16} className="text-white" />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="text-gray-400 text-sm mt-3 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact box */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white text-black shadow-lg mt-16 relative z-10 p-6 rounded-lg flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
        >
          {/* Text */}
          <h3 className="font-bold text-lg md:text-xl leading-snug">
            Also More <br className="hidden md:block" /> Questions? Let Us Know
          </h3>

          {/* Input + Button */}
          <div className="flex w-full md:w-1/2 border border-gray-200 rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Enter Your Question"
              className="flex-1 px-3 py-2 text-sm outline-none"
            />
            <button className="bg-[#FCB739] text-black font-semibold text-sm px-5 py-2 hover:bg-[#e6a826] transition">
              Submit Now
            </button>
          </div>
        </motion.div>

        {/* Yellow underline shadow effect */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-[#FCB739] h-2 w-full max-w-5xl mt-[-8px] ml-1 origin-left"
        ></motion.div>
      </div>
    </section>
  );
}
