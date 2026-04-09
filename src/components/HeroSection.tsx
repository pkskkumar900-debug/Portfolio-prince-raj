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
          <div className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-300 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-amber-500 mr-2 animate-pulse"></span>
            Available for new projects
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white drop-shadow-lg">
            Building the future <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">with AI.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-[700px] drop-shadow-md">
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
