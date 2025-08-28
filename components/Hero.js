"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-[#FFF7EC] overflow-hidden pt-16"> 
      {/* 👆 Added pt-16 so content sits below navbar (h-16 = 64px) */}
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* no gap, top-aligned so image sticks closer */}
        <div className="grid md:grid-cols-2 items-start gap-0 py-8 md:py-12">
          {/* Left Content */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-red-600 font-semibold text-sm tracking-widest mb-3">
              WARM WELCOME
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight text-black">
              Your Success <br /> Our Mission
            </h1>
            <p className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed">
              Partner With Us To Unlock New Opportunities <br />
              And Grow Your Online Presence.
            </p>

            <button className="mt-8 inline-block bg-[#FBB03B] text-black font-semibold px-6 py-3 rounded-sm shadow-[0_4px_0_0_rgba(0,0,0,0.25)] hover:translate-y-[1px] transition">
              Request Access
            </button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative w-full max-w-[800px] aspect-[4/3]">
              <Image
                src="/images/hero.png"
                alt="Hero"
                fill
                priority
                className="object-cover translate-20"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
