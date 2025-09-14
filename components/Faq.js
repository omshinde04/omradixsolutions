"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [question, setQuestion] = useState("");


  const faqs = [
    {
      q: "What Is Your Hourly Rate?",
      a: "We’re sorry you are experiencing some trouble. Open the help chat in the bottom right corner to chat with someone directly or we might have some helpful information in our knowledge base here.",
    },
    {
      q: "What Type Of Projects Do You Take On?",
      a: "We take on web, mobile, and AI-driven projects — from idea validation to full-scale production apps.",
    },
    {
      q: "How Do You Charge For Projects?",
      a: "We charge based on the scope and complexity. Typically, we offer both fixed-price and hourly models depending on the requirements.",
    },
    {
      q: "What Time-Zone Do You Work In?",
      a: "We primarily work in the IST (Indian Standard Time) zone but are flexible and adjust to client time zones when required.",
    },
  ];

  const toggleFAQ = (idx) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section className="bg-black text-white px-6 py-20 font-[SF Pro] relative overflow-hidden">
      

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          className="flex flex-col items-start mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="px-5 py-2 bg-white/10 text-sm rounded-full font-medium mb-4">
            FAQs
          </span>
          <h2 className="text-3xl md:text-5xl font-bold leading-snug">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          className="space-y-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {faqs.map((faq, idx) => {
            const isActive = activeIndex === idx;
            return (
              <motion.div
                key={idx}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className={`border-b border-gray-700 pb-5 cursor-pointer group relative`}
              >
                {/* Hover glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* Question */}
                <div
                  className="flex justify-between items-center relative z-10"
                  onClick={() => toggleFAQ(idx)}
                >
                  <h3
                    className={`text-base md:text-lg font-medium transition-colors ${
                      isActive ? "text-purple-400" : "text-white group-hover:text-purple-300"
                    }`}
                  >
                    {faq.q}
                  </h3>
                  <motion.div
                    initial={false}
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-center w-7 h-7 rounded-full border border-gray-500 group-hover:border-purple-400 transition"
                  >
                    {isActive ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </motion.div>
                </div>

                {/* Answer */}
                <AnimatePresence>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-gray-400 text-sm md:text-base mt-3 leading-relaxed"
                    >
                      {faq.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

       {/* Bottom Question Box */}
<motion.div
  className="mt-20 bg-white text-black rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between p-6 md:p-10 gap-4 relative overflow-hidden"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
>
  {/* Subtle purple glow */}
  <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-purple-500/20 blur-3xl"></div>

  <div className="flex-1 text-center md:text-left">
    <h4 className="text-xl font-bold text-gray-900">
      Also More Questions?{" "}
      <span className="text-purple-700">Let Us Know</span>
    </h4>
  </div>

  <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto relative z-10">
    <input
      type="text"
      value={question}
      onChange={(e) => setQuestion(e.target.value)}
      placeholder="Enter Your Question"
      className="flex-1 md:w-80 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
    />
    <button
      onClick={() => {
        if (!question.trim()) return;
        console.log("User Question:", question);
        setQuestion(""); // clear input
      }}
      className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-medium rounded-md shadow-md hover:shadow-purple-500/30 transition-transform hover:scale-105"
    >
      Submit Now
    </button>
  </div>
</motion.div>

      </div>
    </section>
  );
}
