import React from 'react';
import { motion } from 'motion/react';

export const EducationCard = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative group w-full rounded-3xl overflow-hidden mb-12"
      style={{ perspective: 1000 }}
    >
      {/* Outer Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-3xl blur opacity-20 group-hover:opacity-50 transition duration-500" />

      {/* Liquid Glass Container */}
      <motion.div
        className="relative h-full w-full p-8 md:p-10 backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl overflow-hidden"
        whileHover={{ rotateX: 2, rotateY: -2 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Animated inner gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Shimmer Light Effect */}
        <motion.div
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
          variants={{
            hover: { translateX: "200%", transition: { duration: 1.5, ease: "easeInOut" } }
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="flex-1 space-y-6">
            {/* Header & Badges */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-bold text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                  IIT Patna
                </span>
                <span className="px-3 py-1 text-xs font-bold text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full">
                  2026 - 2030
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight drop-shadow-md">
                BS in Computer Science & Data Analytics
              </h3>
            </div>

            <p className="text-gray-300 leading-relaxed max-w-2xl">
              Acquiring deep technical expertise in data-driven decision making, complex algorithm design, and scalable AI infrastructure at IIT Patna.
            </p>

            {/* Focus Areas */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["Machine Learning", "Big Data Engineering", "Statistical Analysis", "Computational Mathematics"].map((area, i) => (
                <span key={i} className="px-3 py-1.5 text-sm font-medium text-gray-200 bg-white/5 border border-white/10 rounded-lg shadow-[0_0_10px_rgba(255,255,255,0.02)] group-hover:border-cyan-500/30 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300">
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Status Badge */}
          <div className="flex-shrink-0">
            <div className="relative flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-bold text-cyan-400 tracking-wider">ACTIVE</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
