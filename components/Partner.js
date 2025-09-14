"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const stats = [
  { value: 100, suffix: "+", label: "Project That We Have Completed" },
  { value: 1.5, suffix: "+", label: "Year Of Experience" },
  { value: 50, suffix: "+", label: "The Products We Have Made" },
];

// Count-up hook
function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = target;
    const increment = end / (duration / 16);
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Number(start.toFixed(1)));
      }
    }, 16);
    return () => clearInterval(interval);
  }, [target, duration]);
  return count;
}

export default function Partner() {
  return (
    <section
      id="partner"
      className="relative bg-black text-white px-6 md:px-12 py-20 overflow-hidden font-['SF Pro Display']"
    >
      {/* Subtle floating background circles */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-yellow-400 opacity-10 rounded-full animate-pulse-slow -z-10"></div>
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-[#EEFF04] opacity-10 rounded-full animate-pulse-slow -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
  className="font-['SF Pro Display'] text-2xl md:text-3xl font-bold leading-snug"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Your Trusted Partner In Delivering <br />
  Impactful Services, Every Time.
</motion.h2>

            <motion.p
              className="mt-4 text-gray-400 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              "Empowering Businesses With Innovative Digital Solutions And Seamless Technology
              Integration. At OMRADIX Solutions, We Deliver Growth With Creativity And Precision."
            </motion.p>
            <motion.p
              className="mt-4 font-semibold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              — OMRADIX Solutions, Founder
            </motion.p>
          </motion.div>

          {/* Right Stats */}
          <div className="flex flex-row gap-12 lg:justify-end">
            {stats.map((stat, i) => {
              const count = useCountUp(stat.value);
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: i * 0.2, duration: 0.8, type: "spring", stiffness: 100 }}
                  viewport={{ once: true }}
                  className="text-center lg:text-left"
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-[#EEFF04]">{count}
                    {stat.suffix}
                  </h3>
                  <p className="text-gray-400 mt-2">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Section */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center font-['Inter']">
  {/* All child elements inside this div will inherit the Inter font */}


          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="px-4 py-2 bg-white text-black rounded-md text-sm font-semibold">
              Who We Are Best
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mt-6 leading-snug">
              We Can Show You <br /> A Better Way…
            </h3>
            <p className="mt-4 text-gray-400 leading-relaxed">
              We Deliver Innovative Solutions Tailored To Your Needs. Our Commitment To Quality
              And Timely Service Sets Us Apart. With Us, Excellence Isn’t A Promise—It’s A
              Standard.
            </p>
          </motion.div>
{/* Right Images Grid */}
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="grid grid-cols-2 grid-rows-2 gap-4"
>
  {/* Left tall image (t1) */}
  <motion.div
    className="overflow-hidden row-span-2 group"
    variants={{
      hidden: { opacity: 0, x: 40 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    }}
    whileHover={{ scale: 1.05 }}
  >
    <Image
      src="/images/t1.png"
      alt="Team work vertical"
      width={300}
      height={420}
      className="object-cover w-full h-full"
    />
  </motion.div>

  {/* Top right image (t2) */}
  <motion.div
    className="overflow-hidden group"
    variants={{
      hidden: { opacity: 0, x: 40 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
    }}
    whileHover={{ scale: 1.05 }}
  >
    <Image
      src="/images/t2.png"
      alt="Collaboration"
      width={240}
      height={160}
      className="object-cover w-full h-full"
    />
  </motion.div>

  {/* Bottom right image (t3) with overlay */}
  <motion.div
    className="overflow-hidden relative flex items-center justify-center group"
    variants={{
      hidden: { opacity: 0, x: 40 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4 } },
    }}
    whileHover={{ scale: 1.05 }}
  >
    <Image
      src="/images/t3.png"
      alt="Customer Trust"
      width={240}
      height={160}
      className="object-cover w-full h-full"
    />
    <div className="absolute text-black text-center drop-shadow-xl animate-float">
      <h3 className="text-lg md:text-xl font-bold">{useCountUp(500)}+</h3>
      <p className="text-xs md:text-sm italic">Customer Trust Us</p>
    </div>
  </motion.div>
</motion.div>

        </div>
      </div>


    </section>
  );
}
