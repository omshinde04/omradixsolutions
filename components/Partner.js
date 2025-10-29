"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";

const stats = [
  { value: 50, label: "Projects That We Have Completed" },
  { value: 1, label: "Year Of Experience" },
  { value: 10, label: "The Products We Have Made" },
];

// ✅ Count-up hook
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
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(interval);
  }, [target, duration]);
  return count;
}

export default function Partner() {
  // ✅ Hooks for each stat
  const projectCount = useCountUp(stats[0].value);
  const experienceCount = useCountUp(stats[1].value);
  const productCount = useCountUp(stats[2].value);

  return (
    <>
      {/* ✅ SEO Meta Tags for Partner Section */}
      <Head>
        <title>Our Partners & Achievements | Omradix Solutions</title>
        <meta
          name="description"
          content="Omradix Solutions is your trusted digital partner with 50+ completed projects, innovative IT solutions, and a strong commitment to quality and growth."
        />
        <meta
          name="keywords"
          content="Omradix Solutions partners, web development agency, digital partner, IT services India, trusted IT company, business solutions, project delivery"
        />
        <meta name="author" content="Omradix Solutions Team" />
        <meta property="og:title" content="Omradix Solutions — Your Trusted Digital Partner" />
        <meta
          property="og:description"
          content="Delivering growth with creativity and precision. Explore our successful projects and services built for your business growth."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.omradixsolutions.in/#partner" />
        <meta property="og:image" content="https://www.omradixsolutions.in/og-partner.jpg" />
        <link rel="canonical" href="https://www.omradixsolutions.in/#partner" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Omradix Solutions",
            url: "https://www.omradixsolutions.in",
            description:
              "Omradix Solutions is a modern web and IT company helping businesses with websites, e-commerce, and software solutions.",
            sameAs: [
              "https://www.linkedin.com/company/omradixsolutions",
              "https://www.instagram.com/omradixsolutions",
              "https://www.omradixsolutions.in",
            ],
            foundingDate: "2024",
            founder: {
              "@type": "Person",
              name: "Om Vilas Shinde",
            },
            brand: {
              "@type": "Brand",
              name: "Omradix Solutions",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "120",
            },
          })}
        </script>
      </Head>

      {/* ✅ Partner Section */}
      <section
        id="partner"
        className="relative bg-black text-white px-6 md:px-12 py-20 overflow-hidden font-['SF Pro Display']"
      >
        {/* Floating circles */}
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
                Empowering Businesses With Innovative Digital Solutions And Seamless Technology
                Integration. At Omradix Solutions, We Deliver Growth With Creativity And Precision.
              </motion.p>
              <motion.p
                className="mt-4 font-semibold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                — Omradix Solutions, Founder
              </motion.p>
            </motion.div>

            {/* Right Stats */}
            <div className="flex flex-row gap-12 lg:justify-end">
              {/* Projects */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                className="text-center lg:text-left"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-[#EEFF04]">{projectCount}+</h3>
                <p className="text-gray-400 mt-2">{stats[0].label}</p>
              </motion.div>

              {/* Experience */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                className="text-center lg:text-left"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-[#EEFF04]">
                  {experienceCount} +
                </h3>
                <p className="text-gray-400 mt-2">{stats[1].label}</p>
              </motion.div>

              {/* Products */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.8, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                className="text-center lg:text-left"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-[#EEFF04]">{productCount}+</h3>
                <p className="text-gray-400 mt-2">{stats[2].label}</p>
              </motion.div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center font-['Inter']">
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
                We Deliver Innovative Solutions Tailored To Your Needs. Our Commitment To Quality And
                Timely Service Sets Us Apart. With Us, Excellence Isn’t A Promise—It’s A Standard.
              </p>
            </motion.div>

            {/* Right Images Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 grid-rows-2 gap-4"
            >
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
                  alt="Our team collaboration and work culture"
                  width={300}
                  height={420}
                  className="object-cover w-full h-full"
                />
              </motion.div>

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
                  alt="Creative workspace"
                  width={240}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </motion.div>

              <motion.div
                className="overflow-hidden relative flex items-center justify-center group"
                variants={{
                  hidden: { opacity: 0, x: 40 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4 } },
                }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/images/t4.jpg"
                  alt="Customer trust and successful project delivery"
                  width={240}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
