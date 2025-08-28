"use client";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full bg-[#E4F4F1] py-20 px-6 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative">
        {/* Yellow background offset */}
        <div className="absolute top-6 left-6 w-full h-full bg-[#FCB739] rounded-md hidden md:block"></div>

        {/* Main Box */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative bg-white border border-gray-200 shadow-lg rounded-md p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {/* Left Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FC803A] text-black font-semibold px-6 py-2 rounded-full shadow-md w-fit mb-6"
            >
              Get Estimate
            </motion.button>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
              Let’s Talk With <br /> Experience <br /> Creative Agency!
            </h2>
          </motion.div>

          {/* Right Form */}
          <motion.form
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FC803A] transition"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FC803A] transition"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FC803A] transition"
            ></textarea>

            <motion.button
              whileHover={{ y: -2, boxShadow: "0px 4px 10px rgba(0,0,0,0.15)" }}
              whileTap={{ y: 0 }}
              className="bg-[#FCB739] text-black font-semibold px-6 py-3 rounded-md border border-black shadow-md transition"
            >
              Submit
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
