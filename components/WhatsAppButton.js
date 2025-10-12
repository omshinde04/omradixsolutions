"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { X, MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = "9373545169";
  const whatsappURL = `https://wa.me/91${whatsappNumber}?text=Hi%20OmRadix%20Solutions!%20I%20want%20to%20know%20more%20about%20your%20services.`;

  return (
    <div className="fixed bottom-20 right-4 z-50">
      {/* Main Floating Button */}
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          className="p-3 rounded-full shadow-lg bg-[#25D366] text-white flex items-center justify-center border border-green-400 hover:shadow-green-500/50 transition"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageCircle className="w-5 h-5 text-white" />
        </motion.button>
      )}

      {/* Popup Card */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-b from-green-600 via-green-700 to-green-800 
                     text-white p-4 rounded-2xl shadow-xl border border-green-500 
                     w-72 sm:w-80 relative"
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 p-1 rounded-full hover:bg-green-900/40 transition"
          >
            <X className="w-4 h-4 text-white" />
          </button>

          {/* Header */}
          <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
            💬 Chat on WhatsApp
          </h3>
          <p className="text-sm text-green-100 mb-4">
            Connect with <span className="font-semibold">OmRadix Solutions</span> instantly on WhatsApp.
          </p>

          {/* CTA Button */}
          <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white text-center 
                       py-2 rounded-lg font-medium transition"
          >
            Start Chat
          </a>
        </motion.div>
      )}
    </div>
  );
}
