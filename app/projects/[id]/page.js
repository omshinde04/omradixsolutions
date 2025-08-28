"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";

const projectDetails = {
  1: {
    title: "Project One",
    description:
      "A cutting-edge solution designed to simplify workflows and boost productivity. Built with scalability in mind, it helps businesses streamline operations efficiently.",
    image: "/images/work1.jpg",
    technologies: ["React", "Next.js", "TailwindCSS", "Node.js"],
  },
  2: {
    title: "Project Two",
    description:
      "An immersive user experience with sleek UI design and robust backend support, crafted for high-performance and scalability.",
    image: "/images/work2.jpg",
    technologies: ["Vue", "Firebase", "TailwindCSS"],
  },
  // ...same as before
};

export default function ProjectDetails({ params }) {
  const project = projectDetails[params.id];

  if (!project) {
    notFound();
  }

  return (
    <section className="min-h-screen bg-white font-poppins">
      {/* Hero */}
      <div className="relative bg-gradient-to-r from-[#458DC8]/10 to-[#FC803A]/10 py-28 px-6 md:px-20 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#458DC8] to-[#FC803A] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {project.title}
        </motion.h1>
        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          {project.description}
        </motion.p>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center py-20 px-6 md:px-20 lg:px-32">
        {/* Image */}
        <motion.div
          className="relative rounded-3xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-96 md:h-[32rem] object-cover transform hover:scale-105 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Project Overview
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-4">
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-6 py-2 bg-gray-50 border border-gray-200 rounded-full font-medium text-gray-800 shadow-sm hover:bg-[#FFBA37] hover:text-black transition"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-6">
            <a
              href="/projects"
              className="px-8 py-3 bg-[#458DC8] text-white rounded-xl font-semibold shadow-lg hover:bg-[#326FA1] transition transform hover:scale-105"
            >
              ← Back to Projects
            </a>
            <a
              href="#"
              className="px-8 py-3 bg-[#FFBA37] text-black rounded-xl font-semibold shadow-lg hover:bg-[#FC803A] transition transform hover:scale-105"
            >
              🚀 View Live Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
