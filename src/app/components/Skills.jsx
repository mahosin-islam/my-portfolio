"use client";
import { skills } from "@/data";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
const skillColors = {
  // Frontend
  React: "text-cyan-400 border-cyan-500/20 hover:border-cyan-400/50 hover:bg-cyan-500/5",
  "Next.js": "text-white border-white/20 hover:border-white/60 hover:bg-white/5",
  TypeScript: "text-blue-400 border-blue-500/20 hover:border-blue-400/50 hover:bg-blue-500/5",
  JavaScript: "text-yellow-400 border-yellow-500/20 hover:border-yellow-400/50 hover:bg-yellow-500/5",
  "Tailwind CSS": "text-cyan-500 border-cyan-600/20 hover:border-cyan-500/50 hover:bg-cyan-500/5",
  "Framer Motion": "text-pink-400 border-pink-500/20 hover:border-pink-400/50 hover:bg-pink-500/5",
  HTML: "text-orange-500 border-orange-600/20 hover:border-orange-500/50 hover:bg-orange-500/5",
  CSS: "text-blue-500 border-blue-600/20 hover:border-blue-500/50 hover:bg-blue-500/5",

  // Backend & Data
  "Node.js": "text-green-400 border-green-500/20 hover:border-green-400/50 hover:bg-green-500/5",
  "Express.js": "text-gray-400 border-gray-700/50 hover:border-gray-400/50 hover:bg-gray-400/5",
  MongoDB: "text-green-500 border-green-600/20 hover:border-green-500/50 hover:bg-green-500/5",
  "REST API": "text-purple-400 border-purple-500/20 hover:border-purple-400/50 hover:bg-purple-500/5",
  Redux: "text-purple-500 border-purple-600/20 hover:border-purple-500/50 hover:bg-purple-500/5",
  "TanStack Query": "text-red-400 border-red-500/20 hover:border-red-400/50 hover:bg-red-500/5",
  "Pusher (WebSockets)": "text-indigo-400 border-indigo-500/20 hover:border-indigo-400/50 hover:bg-indigo-500/5",

  // Auth, Payments & Tools
  JWT: "text-amber-500 border-amber-600/20 hover:border-amber-500/50 hover:bg-amber-500/5",
  "Firebase Auth": "text-orange-400 border-orange-500/20 hover:border-orange-400/50 hover:bg-orange-500/5",
  BetterAuth: "text-yellow-500 border-yellow-600/20 hover:border-yellow-500/50 hover:bg-yellow-500/5",
  Stripe: "text-indigo-500 border-indigo-600/20 hover:border-indigo-500/50 hover:bg-indigo-500/5",
  Git: "text-orange-500 border-orange-600/20 hover:border-orange-500/50 hover:bg-orange-500/5",
  GitHub: "text-white border-white/20 hover:border-white/60 hover:bg-white/5",
  Figma: "text-rose-400 border-rose-500/20 hover:border-rose-400/50 hover:bg-rose-400/5",
  Vercel: "text-white border-white/20 hover:border-white/60 hover:bg-white/5",
  Netlify: "text-teal-400 border-teal-500/20 hover:border-teal-400/50 hover:bg-teal-400/5",
  "CI/CD": "text-blue-300 border-blue-400/20 hover:border-blue-300/50 hover:bg-blue-300/5",
};


export default function Skills() {
  return (
    <AnimatedSection id="skills" className="py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            {skills.title}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">{skills.description}</p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.categories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0b1120]/60 backdrop-blur-md border border-gray-800/60 rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-xl"
            >
              {/* Category Title */}
              <h3 className="text-xl font-semibold text-gray-100 tracking-wide">
                {category.name}
              </h3>

              {/* Tools Badges */}
              <div className="flex flex-wrap gap-2.5">
                {category.tools.map((tool, toolIndex) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: toolIndex * 0.03 }}
                    whileHover={{ scale: 1.05, y: -1 }}
                    className={`px-3.5 py-1.5 bg-[#0f172a]/80 border rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-default ${
                      skillColors[tool] || "text-gray-300 border-gray-800 hover:border-gray-700"
                    }`}
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}