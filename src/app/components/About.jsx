"use client";

import { motion } from "framer-motion";
import { FiUser, FiMapPin, FiBookOpen, FiCode, FiAward } from "react-icons/fi";
import { FaGraduationCap, FaCode as FaCodeIcon, FaRocket } from "react-icons/fa";


export default function About() {

  const aboutData = {
    name: "Md Mahosin",
    location: "Barishal, Bangladesh",
    education: "Bachelor of Honours (2023–2027) - Barguna National University",
    completed: "HSC Completed",
    learning: "Self-taught MERN Stack Development (1+ year)",
    about: "I'm a self-taught MERN Stack Developer from Bangladesh. Currently studying Bachelor of Honours at Barguna National University. I build responsive, user-friendly web interfaces with React, Tailwind, and JavaScript — with a focus on clean UI, reliable backends, and problem solving. Still learning, still shipping, and enjoying every step.",
    skills: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind", "JavaScript"]
  };

  
  const journeySteps = [
    {
      id: "STEP 01",
      icon: <FaGraduationCap className="text-3xl" />,
      title: "HSC & Bachelor of Honours",
      status: "ONGOING · BANGLADESH",
      desc: "Completed HSC and currently pursuing Bachelor of Honours at Barguna National University (2023–2027). Building academic foundations while learning programming.",
      color: "text-blue-400",
      iconBg: "bg-blue-500/20",
      statusBg: "bg-blue-500/10",
      statusText: "text-blue-300",
      borderHover: "hover:border-blue-500/30",
      shadowHover: "hover:shadow-blue-500/20",
      bgHover: "hover:bg-blue-500/5"
    },
    {
      id: "STEP 02",
      icon: <FaCodeIcon className="text-3xl" />,
      title: "Self-taught MERN Stack Development",
      status: "ONGOING",
      desc: "Learning full-stack development — React, Node.js, Express, and MongoDB. Built projects like E-Commerce, Restaurant, and Quran Digital platforms.",
      color: "text-purple-400",
      iconBg: "bg-purple-500/20",
      statusBg: "bg-purple-500/10",
      statusText: "text-purple-300",
      borderHover: "hover:border-purple-500/30",
      shadowHover: "hover:shadow-purple-500/20",
      bgHover: "hover:bg-purple-500/5"
    },
    {
      id: "STEP 03",
      icon: <FaRocket className="text-3xl" />,
      title: "Open to Opportunities",
      status: "NOW",
      desc: "Ready for junior/entry-level developer roles and freelance projects — eager to contribute and grow with real-world experience.",
      color: "text-green-400",
      iconBg: "bg-green-500/20",
      statusBg: "bg-green-500/10",
      statusText: "text-green-300",
      borderHover: "hover:border-green-500/30",
      shadowHover: "hover:shadow-green-500/20",
      bgHover: "hover:bg-green-500/5"
    }
  ];

  return (
    <section id="about" className="min-h-screen bg-[#0B1120] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* হেডার */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-xs font-medium tracking-[0.2em] uppercase">
            ABOUT & JOURNEY
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2">
            Who I am, <span className="text-blue-500">where I'm headed</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm">
            A self-taught developer and Bachelor student, blending academic foundations with hands-on project work — always shipping, always learning.
          </p>
        </motion.div>

        {/* ===== About Info - উপরে ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 mb-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* বাম পাশে - নাম + বিবরণ */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-600/20 rounded-lg">
                  <FiUser className="text-blue-400" size={18} />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {aboutData.name}
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm">
                {aboutData.about}
              </p>
            </div>

            {/* ডান পাশে - ডিটেইল ইনফো */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-800/50 rounded-xl p-3">
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <FiMapPin size={14} />
                  <span>Location</span>
                </div>
                <p className="text-white text-sm font-medium mt-1">{aboutData.location}</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-3">
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <FiBookOpen size={14} />
                  <span>Education</span>
                </div>
                <p className="text-white text-sm font-medium mt-1">{aboutData.education}</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-3">
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <FiCode size={14} />
                  <span>Learning</span>
                </div>
                <p className="text-white text-sm font-medium mt-1">{aboutData.learning}</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-3">
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <FiAward size={14} />
                  <span>Status</span>
                </div>
                <p className="text-white text-sm font-medium mt-1">Open to Work</p>
              </div>
            </div>

          </div>

          {/* স্কিলস - নিচে */}
          <div className="mt-4 pt-4 border-t border-gray-800">
            <h4 className="text-white text-sm font-medium mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {aboutData.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1 bg-gray-800 rounded-full text-gray-300 text-xs hover:bg-blue-600/20 hover:text-blue-400 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ===== Journey কার্ড - নিচে ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                bg-[#0B1120] 
                border border-gray-800 
                rounded-2xl 
                p-6 
                ${step.bgHover}
                ${step.borderHover}
                ${step.shadowHover}
                hover:shadow-lg 
                hover:scale-[1.02] 
                transition-all 
                duration-300
              `}
            >
              <div className="flex flex-col items-start">
                
                {/* আইকন */}
                <div className={`${step.iconBg} p-4 rounded-xl mb-4`}>
                  <span className={step.color}>{step.icon}</span>
                </div>

                {/* আইডি + স্ট্যাটাস */}
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className="text-sm font-bold text-gray-500">
                    {step.id}
                  </span>
                  <span className={`px-3 py-1 ${step.statusBg} ${step.statusText} rounded-full text-xs font-medium`}>
                    {step.status}
                  </span>
                </div>

                {/* টাইটেল */}
                <h3 className={`text-lg font-bold ${step.color} mb-2`}>
                  {step.title}
                </h3>

                {/* ডেসক্রিপশন */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.desc}
                </p>

              </div>
            </motion.div>
          ))}
        </div>
        {/* ফুটার */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            🚀 Currently open to <span className="text-blue-400 font-medium">junior developer roles</span> and <span className="text-blue-400 font-medium">freelance projects</span>
          </p>
        </div>
 
      </div>
    </section>
  );
}