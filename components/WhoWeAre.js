"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function WhoWeAre() {
  return (
    <section className="bg-white py-16 px-6 md:px-16 lg:px-24 font-poppins overflow-hidden">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6 text-center md:text-left"
        >
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            className="inline-block bg-[#FC803A] text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            Who We Are Best
          </motion.span>

          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-black leading-snug"
          >
            We Can Show You A <br /> Better Way...
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-600 leading-relaxed text-sm md:text-base"
          >
            We Deliver Innovative Solutions Tailored To Your Needs.
            <br />
            Our Commitment To Quality And Timely Service Sets Us Apart.
            <br />
            With Us, Excellence Isn’t A Promise—It’s A Standard.
          </motion.p>

          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6, type: "spring" }}
            viewport={{ once: true }}
            className="bg-[#FFBA37] hover:bg-[#FC803A] transition px-6 py-3  text-black font-semibold shadow-md w-full md:w-auto"
          >
            Get Started Now
          </motion.button>
        </motion.div>

        {/* Right Images */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex gap-6 items-stretch"
        >
          {/* First (Tall) Image */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-1/2"
          >
            <Image
              src="/images/Rectangle.png"
              alt="Team work"
              width={500}
              height={600}
              className="w-full h-full object-cover shadow-lg"
            />
          </motion.div>

          {/* Right Column (Image + Card) */}
          <div className="w-1/2 flex flex-col gap-6">
            {/* Second Image */}
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <Image
                src="/images/image2.png"
                alt="Team discussion"
                width={500}
                height={300}
                className="w-full h-full object-cover shadow-lg"
              />
            </motion.div>

            {/* Third Image (Card-like) */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <Image
                src="/images/image3.png"
                alt="Customer Trust"
                width={500}
                height={200}
                className="w-full h-full object-cover shadow-lg"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
