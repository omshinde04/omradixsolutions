"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const works = [
  {
    id: 1,
    title: "Project One",
    description: "Description for project one goes here.",
    image: "/images/work1.jpg",
  },
  {
    id: 2,
    title: "Project Two",
    description: "Description for project two goes here.",
    image: "/images/work2.jpg",
  },
  {
    id: 3,
    title: "Project Three",
    description: "Description for project three goes here.",
    image: "/images/work3.jpg",
  },
  {
    id: 4,
    title: "Project Four",
    description: "Description for project four goes here.",
    image: "/images/work4.jpg",
  },
  {
    id: 5,
    title: "Project Five",
    description: "Description for project five goes here.",
    image: "/images/work5.jpg",
  },
  {
    id: 6,
    title: "Project Six",
    description: "Description for project six goes here.",
    image: "/images/work6.jpg",
  },
];

export default function Works() {
  const [showAll, setShowAll] = useState(false);
  const router = useRouter();

  const visibleWorks = showAll ? works : works.slice(0, 3);

  return (
    <section className="bg-white py-16 px-6 md:px-16 lg:px-24 font-poppins">
      {/* Header */}
      <div className="text-center md:text-left mb-10">
        <span className="inline-block bg-[#458DC8] text-white px-4 py-1 rounded-full text-sm font-medium">
          Works
        </span>
        <h2 className="text-2xl md:text-3xl font-bold mt-4">
          Find Our <br className="hidden md:block" /> Latest Works
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleWorks.map((work) => (
          <div
            key={work.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition flex flex-col"
          >
            {/* Work Image */}
            <div className="relative w-full h-48">
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-lg font-semibold mb-2">{work.title}</h3>
              <p className="text-sm text-gray-700 mb-4 flex-1">
                {work.description}
              </p>
              <button
                onClick={() => router.push(`/projects/${work.id}`)}
                className="bg-[#FFBA37] text-black px-4 py-2 text-sm font-medium hover:bg-[#FC803A] transition w-full"
              >
                Get More Info
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-2 bg-[#FFBA37] text-black font-semibold shadow-md hover:bg-[#FC803A] transition"
        >
          {showAll ? "See Less Works" : "View All Projects"}
        </button>
      </div>
    </section>
  );
}
