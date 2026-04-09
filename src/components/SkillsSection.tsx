import React from 'react';
import { motion } from 'motion/react';
import { SkillsGrid } from './ui/skills-grid';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="relative py-24 z-10 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4"
          >
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Stack</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-blue-500 mx-auto rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          ></motion.div>
        </div>

        <SkillsGrid />
      </div>
    </section>
  );
};
