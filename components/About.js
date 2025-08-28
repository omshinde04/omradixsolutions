"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-[#E9F6FF] overflow-visible z-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 items-center">
        {/* Left image - overlaps only */}
        <motion.div
          initial={{ opacity: 0, x: -60, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative flex justify-center md:justify-start"
        >
          <motion.img
            src="/images/man.png"
            alt="Founder"
            className="w-[320px] md:w-[400px] lg:w-[450px] -mt-28 md:-mt-40 drop-shadow-2xl relative z-30"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Right text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center md:text-left"
        >
          {/* Overlapping top block */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="-mt-[80px] md:-mt-[140px] relative z-30"
          >
           <motion.span
  initial={{ scale: 0.8, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  viewport={{ once: true }}
  className="bg-[#FC803A] text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4 shadow-md mt-12 md:mt-0"
>
  Who We Are
</motion.span>


            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl font-bold text-gray-900 leading-snug mb-6"
            >
              Your Trusted Partner In Delivering <br />
              Impactful Services, Every Time.
            </motion.h2>
          </motion.div>

          {/* Normal flow below */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true }}
              className="italic text-gray-600 border-l-4 border-[#FC803A] pl-4 mb-6 mt-6 max-w-lg"
            >
              “Empowering Businesses With Innovative Digital Solutions And
              Seamless Technology Integration. At OMRADIX Solutions, We Deliver
              Growth With Creativity And Precision.”
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="font-semibold text-gray-900 mb-6"
            >
              — OMRADIX Solutions,{" "}
              <span className="text-[#FC803A]">Founder</span>
            </motion.p>

            {/* Stats */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.2, duration: 0.8 },
                },
              }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-4 w-full text-center md:text-left"
            >
              {[
                { value: "50+", label: "Projects That We Have Completed" },
                { value: "100", label: "Products We Have Made" },
                { value: "1.5+", label: "Years Of Experience" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <h3 className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

           {/* Button */}
{/* Button */}
<motion.button
  whileHover={{ scale: 1.05, boxShadow: "0px 6px 16px rgba(255,186,55,0.3)" }}
  whileTap={{ scale: 0.95 }}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut", delay: 1 }}
  viewport={{ once: true }}
  className="mt-4 -translate-y-2 px-4 py-2 bg-[#FFBA37] text-black text-sm font-bold shadow-md hover:shadow-lg transition"
>
  More About Us
</motion.button>


          </div>
        </motion.div>
      </div>
    </section>
  );
}
