"use client";
import { motion } from "framer-motion";
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub 
} from "react-icons/fa";
import { 
  SiMongodb, SiExpress, SiNextdotjs, SiTypescript, 
  SiTailwindcss, SiJavascript, SiVercel, SiFirebase 
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
    { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]" },
    { name: "Express", icon: SiExpress, color: "text-[#000000] dark:text-gray-400" },
    { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
    { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
    { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
    { name: "GitHub", icon: FaGithub, color: "text-[#181717] dark:text-white" },
    { name: "Vercel", icon: SiVercel, color: "text-black dark:text-white" },
    { name: "HTML5", icon: FaHtml5, color: "text-[#E34F26]" },
  ];

  return (
    <section id="skills" className="py-14 px-6 bg-background transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Skills</span>
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto italic">
           In the past year, I have gained proficiency in the following technologies and regularly use them.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -10 }}
              className="group p-6 rounded-3xl bg-card border border-border dark:border-purple-500/20 shadow-sm hover:shadow-xl dark:hover:shadow-purple-500/10 transition-all flex flex-col items-center justify-center gap-4 text-center"
            >
              {/* Icon Container */}
              <div className={`text-4xl md:text-5xl transition-transform duration-300 group-hover:scale-110 ${skill.color}`}>
                <skill.icon />
              </div>
              
              {/* Skill Name */}
              <span className="text-sm font-bold tracking-wider text-foreground opacity-80 group-hover:opacity-100 transition-opacity">
                {skill.name}
              </span>

              {/* Decorative Dot - শুধু ডার্ক মোডে গ্লো দিবে */}
              <div className="w-1 h-1 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 dark:shadow-[0_0_8px_#9333ea] transition-all"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;