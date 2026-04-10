import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Mail } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-300 backdrop-blur-sm mb-4">
            <span className="flex h-2 w-2 rounded-full bg-amber-500 mr-2 animate-pulse"></span>
            Available for new projects
          </div>
          
          <div className="relative" style={{ perspective: 1000 }}>
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase italic relative z-10"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateX(10deg)',
              }}
            >
              {/* Blurred background glow layer (soft light) */}
              <span className="absolute inset-0 text-blue-500 blur-xl opacity-60">
                Hii I am Prince Raj | Ai developer
              </span>
              {/* Main 3D text layer (characteristic blue with dark shadow) */}
              <span className="relative text-3d-blue-texture">
                Hii I am Prince Raj | Ai developer
              </span>
            </motion.h1>
          </div>
          
          <div className="relative mt-4" style={{ perspective: 1000 }}>
            <motion.h2 
              className="text-2xl md:text-4xl font-bold tracking-tight uppercase italic relative z-10"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateX(5deg)',
              }}
            >
              {/* Blurred background glow layer */}
              <span className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent blur-lg animate-running-neon opacity-60">
                Let's Build future with Ai
              </span>
              {/* Main 3D text layer */}
              <span className="relative bg-gradient-to-r from-purple-300 via-pink-400 to-red-400 bg-clip-text text-transparent animate-running-neon text-3d-neon-sub">
                Let's Build future with Ai
              </span>
            </motion.h2>
          </div>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-[700px] drop-shadow-md mt-6">
            Building intelligent systems, automation frameworks, and data-driven solutions to simplify real-world problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
            <a href="#credentials" className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 overflow-hidden">
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
              <span className="relative flex items-center">
                View Credentials
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a href="#contact" className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full hover:bg-gray-800 hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 backdrop-blur-sm">
              <span className="relative flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
