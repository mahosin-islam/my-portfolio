"use client";

import { motion } from "framer-motion";
import { stats } from "@/data";
import AnimatedSection from "./AnimatedSection";

export default function Stats() {
  return (
    <AnimatedSection className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center"
            >
              <p className="text-3xl sm:text-4xl font-bold text-white mb-1">
                {stat.number}
              </p>
              <p className="text-gray-400 text-sm font-medium tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}