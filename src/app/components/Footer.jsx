// src/app/components/Footer.jsx
"use client";

import { personalInfo } from "@/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-800/50 bg-[#0B1120]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400 text-sm">
          Designed &amp; built by{" "}
          <span className="text-blue-400 font-medium">
            {personalInfo.name}
          </span>{" "}
          — crafted with React, Next.js, and Tailwind CSS.
        </p>
        <p className="text-gray-500 text-xs mt-2">
          &copy; {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
}