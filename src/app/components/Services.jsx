"use client";
import { services } from "@/data";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import * as Icons from "react-icons/fi";

const iconMap = {
  FiMonitor: Icons.FiMonitor,
  FiHeart: Icons.FiHeart,
  FiShoppingBag: Icons.FiShoppingBag,
  FiMessageCircle: Icons.FiMessageCircle,
  FiCode: Icons.FiCode,
};

export default function Services() {
  return (
    <AnimatedSection id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            How I Can Help
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4">
            
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From full-stack development to real-time applications — I'm here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Icons.FiCode;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-blue-600/50 transition-all duration-300"
              >
                <div className="p-3 bg-blue-600/20 rounded-xl w-fit mb-4">
                  <IconComponent className="text-blue-400" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}