"use client";

import { skills } from "@/data";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const skillColors = {
  React: "text-cyan-400",
  "Next.js": "text-white",
  "Node.js": "text-green-400",
  "Express.js": "text-gray-400",
  MongoDB: "text-green-500",
  "Tailwind CSS": "text-cyan-500",
  JavaScript: "text-yellow-400",
  TypeScript: "text-blue-400",
  Git: "text-orange-500",
  GitHub: "text-white",
  "REST API": "text-purple-400",
  "Framer Motion": "text-pink-400",
  HTML: "text-orange-500",
  CSS: "text-blue-500",
  Figma: "text-purple-400",
  Vercel: "text-white",
};

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            {skills.title}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">{skills.description}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.tools.map((tool, index) => (
            <motion.span
              key={tool}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className={`px-4 py-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full text-sm font-medium transition-all duration-200 cursor-default ${
                skillColors[tool] || "text-gray-300"
              }`}
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}