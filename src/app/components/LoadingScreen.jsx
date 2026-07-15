"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 1800;
    let raf;

    const tick = () => {
      const p = Math.min(100, ((Date.now() - start) / duration) * 100);

      setProgress(p);

      if (p < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setVisible(false), 300);
      }
    };

    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg,#020617 0%,#0B1120 45%,#111827 100%)",
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Glow */}
          <motion.div
            className="absolute h-72 w-72 rounded-full"
            style={{
              background: "#3B82F6",
              filter: "blur(120px)",
              opacity: 0.15,
            }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />

          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 mb-8"
          >
            <h1 className="font-mono text-4xl font-bold tracking-wider text-white">
              <span className="text-[#3B82F6]">&lt;</span>
              Md Mahosin
              <span className="text-[#3B82F6]"> /&gt;</span>
            </h1>

            <p className="mt-3 text-center text-sm tracking-[0.4em] uppercase text-slate-400">
              Full Stack Developer
            </p>
          </motion.div>

          {/* Progress */}
          <div className="relative z-10 w-72">
            <div className="h-[6px] overflow-hidden rounded-full bg-slate-800">
              <motion.div
                className="h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  background:
                    "linear-gradient(90deg,#3B82F6,#60A5FA,#93C5FD)",
                  boxShadow: "0 0 18px #3B82F6",
                }}
              />
            </div>

            <div className="mt-4 flex items-center justify-between text-xs font-medium tracking-widest text-slate-400">
              <span>LOADING</span>
              <span>{Math.floor(progress)}%</span>
            </div>
          </div>

          {/* Animated Dots */}
          <motion.div
            className="mt-10 flex gap-3"
            initial="hidden"
            animate="visible"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="h-3 w-3 rounded-full bg-[#3B82F6]"
                variants={{
                  hidden: { opacity: 0.3, y: 0 },
                  visible: {
                    opacity: [0.3, 1, 0.3],
                    y: [0, -6, 0],
                  },
                }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}