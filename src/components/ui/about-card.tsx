import React from 'react';
import { motion } from 'motion/react';
import { BrainCircuit } from 'lucide-react';
import { SpotlightCard } from './spotlight-card';

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export const AboutCard = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover="hover"
      className="relative group max-w-5xl mx-auto w-full"
    >
      {/* Outer Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-50 transition-opacity duration-500" />

      {/* Main Container */}
      <SpotlightCard 
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 md:p-12 dark:bg-[#050505]/80 bg-white/80 backdrop-blur-xl rounded-[2rem] border dark:border-white/10 border-black/10 overflow-hidden shadow-2xl"
      >
        
        {/* Glass Shine Effect */}
        <motion.div
          variants={{
            hover: { x: ["-100%", "200%"], transition: { duration: 1.5, ease: "easeInOut" } }
          }}
          className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent dark:via-white/10 via-black/5 to-transparent skew-x-12 pointer-events-none"
        />

        {/* Left: Icon */}
        <motion.div 
          variants={itemVariants}
          className="flex-shrink-0 relative"
        >
          <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full" />
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative p-6 dark:bg-white/[0.02] bg-black/[0.02] border dark:border-white/10 border-black/10 rounded-full shadow-[0_0_30px_rgba(6,182,212,0.15)]"
          >
            <BrainCircuit className="w-20 h-20 md:w-28 md:h-28 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]" aria-label="AI Brain Icon" />
          </motion.div>
        </motion.div>

        {/* Right: Text Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold dark:text-white text-slate-900 tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
          >
            About Me
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="dark:text-gray-300 text-slate-600 text-lg md:text-xl leading-relaxed"
          >
            As an AI Developer, I build agentic automation tools, intelligent personal assistants, and data-driven systems.
          </motion.p>

          <motion.p 
            variants={itemVariants}
            className="dark:text-gray-300 text-slate-600 text-lg md:text-xl leading-relaxed"
          >
            Currently advancing my expertise through a <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]">BS in CSDA from IIT Patna</span>, acquiring deep technical expertise in data-driven decision making, complex algorithm design, and scalable AI infrastructure.
          </motion.p>

          <motion.div variants={itemVariants} className="pt-2">
            <motion.blockquote 
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 drop-shadow-[0_0_12px_rgba(250,204,21,0.5)] text-xl md:text-2xl font-medium border-l-4 border-yellow-500/50 pl-6 py-2"
            >
              "Merging technology and finance into a self-sustaining intelligent ecosystem."
            </motion.blockquote>
          </motion.div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
};
