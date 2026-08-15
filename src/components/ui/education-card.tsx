import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { SpotlightCard } from './spotlight-card';

export const EducationCard: React.FC = () => {
  const focusAreas = [
    "Machine Learning & Deep Neural Nets",
    "Big Data Pipelines & Distributed Systems",
    "Quantitative Statistical Modeling",
    "Computational Mathematics & Algorithms"
  ];

  return (
    <SpotlightCard
      className="relative group w-full rounded-[2.5rem] overflow-hidden mb-12"
      spotlightColor="rgba(6, 182, 212, 0.25)"
    >
      {/* Outer Prismatic Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 rounded-[2.5rem] blur-2xl opacity-15 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none" />

      <div className="relative h-full w-full p-7 sm:p-10 md:p-12 bg-transparent">
        {/* Top Floating Glass Highlight Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pb-6 mb-6 border-b border-black/5 dark:border-white/10">
          {/* Top Specular Edge Line */}
          <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent pointer-events-none" />

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-extrabold text-cyan-600 dark:text-cyan-300 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.25)]">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>INDIAN INSTITUTE OF TECHNOLOGY PATNA</span>
            </div>
            
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-600 dark:text-blue-300 backdrop-blur-md">
              <Calendar className="w-3.5 h-3.5" />
              <span>2026 – 2030</span>
            </div>

            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-500/10 border border-slate-500/20 text-xs font-semibold text-slate-600 dark:text-slate-400 backdrop-blur-md">
              <MapPin className="w-3.5 h-3.5" />
              <span>Patna, India</span>
            </div>
          </div>

          {/* Active Enrollment Indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)] backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 tracking-wider">
              CURRENTLY ENROLLED
            </span>
          </div>
        </div>

        {/* Major Degree Title & Narrative */}
        <div className="space-y-4">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black dark:text-white text-slate-900 tracking-tight leading-tight">
            Bachelor of Science in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500">Computer Science & Data Analytics</span>
          </h3>

          <p className="dark:text-slate-300 text-slate-700 text-base md:text-lg leading-relaxed max-w-3xl font-normal">
            Advancing rigorous core theoretical foundations, high-throughput computational architectures, and mathematical intelligence systems tailored for next-generation algorithmic frameworks.
          </p>

          {/* Core Specialization Pillars */}
          <div className="pt-3">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                Key Specialization Modules
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {focusAreas.map((area, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-white/60 dark:border-white/10 hover:border-cyan-400/40 shadow-[0_4px_15px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_25px_rgba(6,182,212,0.2)] backdrop-blur-xl transition-all duration-300 group/pill"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 group-hover/pill:scale-110 group-hover/pill:text-cyan-400 transition-all" />
                  <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                    {area}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
};

