"use client";

import { motion } from "framer-motion";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import { personalInfo } from "@/data";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-blue-400 font-medium text-sm uppercase tracking-wider mb-2">
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3">
              {personalInfo.name}
            </h1>
            
            {/* Typewriter Effect Container */}
            <div className="text-xl sm:text-2xl font-medium mb-6 text-blue-400 h-[40px] flex items-center">
              <span>I am a&nbsp;</span>
              <span className="text-white  pb-1">
                <Typewriter
                  words={[
                    "MERN Stack Developer",
                    "React.js Specialist",
                    "Next.js Developer",
                    "Full-Stack Enthusiast"
                  ]}
                  loop={0} // 0 দিলে এটি আনলিমিটেড বার চলতে থাকবে
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </div>

            <p className="text-gray-400 text-base sm:text-lg max-w-lg leading-relaxed mb-8">
              {personalInfo.tagline}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/MERN Developer.pdf"
                download="Mahosin_Islam_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 shadow-lg shadow-blue-600/30"
              >
                <FiDownload size={18} />
                Download CV
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-all duration-200"
              >
                View Projects
                <FiArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-blue-600/20 rounded-[30%] blur-3xl"></div>
              
              {/* Profile Image */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-2xl shadow-blue-600/20">
                <img
                  src="https://i.ibb.co.com/VYWsqrpS/beast.png"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 bg-blue-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg"
              >
                🚀 Available for Work
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}