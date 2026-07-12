"use client";
import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaTwitter, 
  FaFacebookF, 
  FaArrowUp 
} from "react-icons/fa"; // React Icons (Font Awesome)

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { 
      icon: FaGithub, 
      href: "https://github.com/mahosin-islam", 
      hoverColor: "hover:bg-slate-800 dark:hover:bg-white dark:hover:text-black hover:text-white" 
    },
    { 
      icon: FaLinkedinIn, 
      href: "https://www.linkedin.com/in/mahosindb", 
      hoverColor: "hover:bg-[#0077b5] hover:text-white" 
    },
    { 
      icon: FaTwitter, 
      href: "https://twitter.com/yourusername", 
      hoverColor: "hover:bg-[#1DA1F2] hover:text-white" 
    },
    { 
      icon: FaFacebookF, 
      href: "https://www.facebook.com", 
      hoverColor: "hover:bg-[#1877F2] hover:text-white" 
    },
  ];

  return (
    <footer className="relative py-10 px-6 bg-background  border-t border-slate-200 dark:border-purple-500/20 transition-colors duration-500 overflow-hidden mt-20">
      
      {/* Background Glow - প্রজেক্ট সেকশনের মতো হালকা গ্লো */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[100px] bg-purple-600/10 dark:bg-purple-600/20 blur-[80px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* Logo Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white"
          >
            Mahosin<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Islam</span>
          </motion.div>

          {/* Social Links - কার্ড স্টাইলের আইকন */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className={`w-11 h-11 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-400 transition-all duration-300 ${social.hoverColor} shadow-sm`}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Scroll to Top - গ্লোয়িং বাটন */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)" }}
            whileTap={{ scale: 0.9 }}
            className="group p-4 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-lg transition-all"
          >
            <FaArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>

        {/* Bottom copyright section */}
        <div className="mt-4 pt-8 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-slate-500 dark:text-gray-500 text-sm font-medium tracking-wide">
            © {currentYear} <span className="text-slate-900 dark:text-gray-300 font-bold">Siam Khan</span>. All Rights Reserved.
          </p>
          <p className="text-slate-400 dark:text-gray-600 text-xs">
            Built with comonsta<span className="text-purple-500 font-bold">Next.js</span> & <span className="text-blue-500 font-bold">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;