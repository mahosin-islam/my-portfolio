"use client";
import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react"; // সুন্দর আইকনের জন্য

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-blue-600 dark:text-blue-500">
            PORTFOLIO.
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>


          </div>

          {/* Mobile Right Side (Toggle + Menu) */}
          <div className="md:hidden flex items-center gap-4">

            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-700 dark:text-gray-300">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#0f172a] border-b border-gray-200 dark:border-gray-800 px-2 pt-2 pb-3 space-y-1 shadow-lg">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;