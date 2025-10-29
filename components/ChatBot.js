"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, User } from "lucide-react";

/**
 * 🤖 OmRadixSolutions ChatBot Component
 * Provides quick user support, FAQs, and project inquiries.
 * SEO Optimizations:
 * - ARIA roles for accessibility
 * - Schema markup (JSON-LD)
 * - Semantic HTML for better understanding
 * - Lazy interactions (to keep performance high)
 */

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hello! Welcome to OmRadixSolutions. How can I help you today?" },
  ]);

  const [options, setOptions] = useState([
    "Know about services",
    "About company",
    "Contact us",
    "Request a project/partnership",
    "Talk to a human",
  ]);

  const handleOptionClick = (option) => {
    setMessages((prev) => [...prev, { sender: "user", text: option }]);

    let reply = "";

    switch (option) {
      case "Know about services":
        reply =
          "We provide: 🌐 Web Development, 🎨 UI/UX Design, 📢 Social Media Marketing, 📊 Data Analytics, 🔍 SEO, and 🤝 Long-term Partnerships. Would you like me to explain any of these in detail?";
        setOptions([
          "Web Development",
          "UI/UX Design",
          "Social Media Marketing",
          "Data Analytics",
          "SEO",
          "Long-term Partnership",
          "Go back",
        ]);
        break;
      case "Web Development":
        reply = "🌐 We build responsive, scalable, and secure websites using modern tech stacks.";
        break;
      case "UI/UX Design":
        reply = "🎨 We craft beautiful, user-friendly designs focused on great experiences.";
        break;
      case "Social Media Marketing":
        reply = "📢 We create campaigns that boost your online presence and drive engagement.";
        break;
      case "Data Analytics":
        reply = "📊 We analyze your business data to provide insights and smarter decisions.";
        break;
      case "SEO":
        reply = "🔍 We optimize your site to rank higher on Google and attract more visitors.";
        break;
      case "Long-term Partnership":
        reply = "🤝 We offer ongoing support, updates, and improvements after deployment.";
        break;
      case "About company":
        reply =
          "We are OmRadixSolutions 🚀 — based in Pune & Ghoti (Nashik). Founder: Om Shinde (Full Stack Developer), Co-Founder: Vijay Kalantre (UI/UX). We focus on quality, innovation & long-term success.";
        setOptions(["Why choose you?", "Go back"]);
        break;
      case "Why choose you?":
        reply =
          "✅ We blend creativity, modern technology, and personalized strategies. Our goal: long-term success for our clients.";
        setOptions(["Go back"]);
        break;
      case "Contact us":
        reply = "✉️ Opening contact form for you...";
        setOptions(["Start a project", "Go back"]);
        setTimeout(() => {
          const contactSection = document.getElementById("contact");
          if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
        }, 1200);
        break;
      case "Request a project/partnership":
        reply =
          "Great choice 🚀 Please share:\n1️⃣ Which service you need\n2️⃣ Short project description\n3️⃣ Timeline\n👉 Our team will reach out to you!";
        setOptions([
          "Web Development",
          "UI/UX Design",
          "Social Media Marketing",
          "Go back",
        ]);
        break;
      case "Talk to a human":
        reply =
          "✅ Sure! Our team will connect with you soon. Meanwhile, you can call us at 9373545169.";
        setOptions(["Go back"]);
        break;
      case "Go back":
        reply = "Alright! What would you like to explore?";
        setOptions([
          "Know about services",
          "About company",
          "Contact us",
          "Request a project/partnership",
          "Talk to a human",
        ]);
        break;
      default:
        reply = "🤖 I’ll note that. Please choose an option below.";
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    }, 600);
  };

  return (
    <div
      className="fixed bottom-4 right-4 z-50"
      role="complementary"
      aria-label="OmRadixSolutions AI Chat Assistant"
    >
      {/* SEO Schema for ChatBot */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "OmRadixSolutions Chat Assistant",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
              "An interactive chatbot that helps users explore OmRadixSolutions services, contact options, and project inquiries.",
            author: {
              "@type": "Organization",
              name: "OmRadixSolutions",
              url: "https://www.omradixsolutions.in/",
            },
          }),
        }}
      />

      {/* Chat Icon */}
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          aria-label="Open OmRadix Chat Assistant"
          className="p-3 rounded-full shadow-lg bg-gradient-to-r from-black via-gray-800 to-gray-700 text-white flex items-center justify-center border border-gray-700 hover:shadow-gray-400/40 transition"
          whileHover={{ scale: 1.05, rotate: 3 }}
        >
          <MessageCircle className="w-5 h-5 text-white" />
        </motion.button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="w-80 md:w-96 h-[500px] bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white rounded-xl shadow-2xl flex flex-col border border-gray-800"
            aria-live="polite"
          >
            {/* Header */}
            <header className="flex justify-between items-center p-3 border-b border-gray-800 bg-gradient-to-r from-black via-gray-900 to-black rounded-t-xl">
              <h3 className="font-semibold text-md text-white flex items-center gap-2">
                🤖 OmRadix Assistant
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-red-500/20 transition"
                aria-label="Close Chat"
              >
                <X className="w-5 h-5 text-gray-400 hover:text-red-500 transition" />
              </button>
            </header>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3 custom-scrollbar">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex items-end gap-2 ${
                    msg.sender === "bot" ? "justify-start" : "justify-end"
                  }`}
                >
                  {msg.sender === "bot" && (
                    <div
                      className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-700 via-gray-800 to-black border border-gray-600 flex items-center justify-center"
                      aria-label="Chatbot Avatar"
                    >
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div
                    className={`px-3 py-1.5 rounded-xl max-w-[70%] text-[12px] leading-snug ${
                      msg.sender === "bot"
                        ? "bg-gray-900 text-white border border-gray-700"
                        : "bg-gradient-to-r from-white to-gray-200 text-black font-medium"
                    }`}
                    aria-label={`${msg.sender === "bot" ? "Bot" : "User"} message`}
                  >
                    {msg.text}
                  </div>
                  {msg.sender === "user" && (
                    <div
                      className="w-8 h-8 rounded-full bg-gradient-to-r from-white to-gray-300 border border-gray-400 flex items-center justify-center"
                      aria-label="User Avatar"
                    >
                      <User className="w-4 h-4 text-black" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Options */}
            <footer className="p-2 border-t border-gray-800 flex flex-wrap gap-2 bg-black/50 rounded-b-xl">
              {options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleOptionClick(opt)}
                  className="px-2 py-1.5 bg-gradient-to-r from-white to-gray-200 text-black text-[11px] rounded-lg font-medium hover:scale-105 transition-all duration-250"
                  aria-label={`Select option: ${opt}`}
                >
                  {opt}
                </button>
              ))}
            </footer>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
