"use client";
import { projectsData } from "@/data/projectsData";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

const ProjectCard = ({ project }) => (
  <div className=" backdrop-blur-xl border border-purple-500/50 rounded-3xl   transition-all duration-500 group relative p-4">
    {/* Image Container */}
    <div className="relative overflow-hidden rounded-2xl ">
      <img 
        src={project.image} 
        alt={project.name} 
        className="w-full h-60  md:h-70 object-cover group-hover:scale-110 transition duration-500" 
      />
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
        <a href={project.liveLink} target="_blank" className="p-3 bg-white text-black rounded-full hover:bg-purple-500 hover:text-white transition">
          <FaExternalLinkAlt size={18} />
        </a>
        <a href={project.githubLink} target="_blank" className="p-3 bg-white text-black rounded-full hover:bg-purple-500 hover:text-white transition">
          <FaGithub size={18} />
        </a>
      </div>
    </div>

    {/* Content */}
    <h3 className="text-xl font-bold mb-2 text-purple-400  transition">
      {project.name}
    </h3>
    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
      {project.description}
    </p>

    {/* Tech Stack Tags */}
    <div className="flex flex-wrap gap-2 mb-6">
      {project.stack.map((s) => (
        <span key={s} className="text-[10px] uppercase tracking-wider bg-white/5 px-3 py-1 rounded-full border border-white/10 text-gray-300">
          {s}
        </span>
      ))}
    </div>

    {/* View Details Button (Requirement #9) */}
    <Link 
      href={`/projects/${project.id}`}
      className="w-full block text-center py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-sm hover:opacity-90 transition shadow-lg shadow-purple-500/20"
    >
      View Details
    </Link>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-10 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Projects</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto italic">
          আমার তৈরি করা সেরা কিছু প্রজেক্ট যা আমার স্কিল এবং লজিক প্রকাশ করে।
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;