"use client";

import { motion } from "framer-motion";
import { LuRocket, LuBrain, LuActivity } from "react-icons/lu";

const AboutSection = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="space-y-4"
  >
    <div className="flex items-center gap-3">
      <div className="text-purple-600 dark:text-purple-400 text-3xl transition-colors duration-500">
        <Icon />
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 transition-colors duration-500">
        {title}
      </h3>
    </div>
    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed pl-1 transition-colors duration-500">
      {description}
    </p>
  </motion.div>
);

const About = () => {
  return (
    <section
      id="about"
      className=" transition-colors duration-500"
    >
      <div className="px-10 md:px-0 max-w-6xl mx-auto mx-2 md:mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white transition-colors duration-500">
            Abouts <span className="text-purple-600 dark:text-purple-400">Me</span>
          </h2>
          <div className="w-16 h-1 bg-purple-600 dark:bg-purple-400 mx-auto mt-4 rounded-full transition-all duration-500" />
          <p className="text-slate-500 dark:text-slate-400 mt-4 text-lg max-w-xl mx-auto">
            A passionate Full Stack Developer from Dhaka, Bangladesh — building real-world solutions with modern web technologies.
          </p>
        </motion.div>

        {/* Content */}
        <div className="space-y-16">
          <AboutSection
            delay={0.1}
            icon={LuRocket}
            title="The Journey So Far"
            description="With 1+ years of hands-on experience, I specialize in building modern, scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). I also work extensively with Next.js, TypeScript, and Tailwind CSS to deliver fast, production-ready frontends — with clean code and attention to detail at every step."
          />
          <AboutSection
            delay={0.2}
            icon={LuBrain}
            title="How I Think & Work"
            description="I thrive on turning complex problems into simple, elegant solutions. Whether it's architecting a real-time chat system with Pusher and WebSockets or implementing role-based authentication with BetterAuth — I stay composed under pressure and always keep the end-user experience at the center of every decision."
          />
          <AboutSection
            delay={0.3}
            icon={LuActivity}
            title="Beyond the Code"
            description="When I'm not coding, I enjoy long-distance walking in nature to reset my mind and fuel my creativity. I believe a healthy life-work balance is what keeps both the developer and the code performing at their best."
          />
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { value: "1+", label: "Years Experience" },
            { value: "10+", label: "Projects Built" },
            { value: "MERN", label: "Core Stack" },
            { value: "Next.js", label: "Frontend Focus" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 transition-colors duration-500"
            >
              <p className="text-2xl font-extrabold text-purple-600 dark:text-purple-400">
                {stat.value}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default About;