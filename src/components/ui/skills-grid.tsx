import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  SiPython, SiPytorch, SiTensorflow, SiReact, SiNodedotjs, 
  SiTypescript, SiTailwindcss, SiDocker, 
  SiPostgresql, SiMongodb, SiGit, SiNextdotjs, SiCplusplus,
  SiRedis, SiLinux, SiFigma, SiGraphql
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const skillsData = [
  { name: 'Python', icon: SiPython },
  { name: 'PyTorch', icon: SiPytorch },
  { name: 'TensorFlow', icon: SiTensorflow },
  { name: 'React', icon: SiReact },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Docker', icon: SiDocker },
  { name: 'AWS', icon: FaAws },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Git', icon: SiGit },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'C++', icon: SiCplusplus },
  { name: 'Redis', icon: SiRedis },
  { name: 'Linux', icon: SiLinux },
  { name: 'Figma', icon: SiFigma },
  { name: 'GraphQL', icon: SiGraphql },
];

interface SkillCardProps {
  skill: typeof skillsData[0];
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Idle animation values - staggered floating effect
  const yOffset = (index % 2 === 0) ? [-6, 6, -6] : [6, -6, 6];
  const duration = 3 + (index % 3) * 0.5;

  const handleInteractionStart = () => {
    setIsHovered(true);
    // Subtle vibration for mobile devices
    if (typeof window !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(15);
    }
  };

  const handleInteractionEnd = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      className="relative flex items-center justify-center"
      animate={{ y: yOffset }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      onHoverStart={handleInteractionStart}
      onHoverEnd={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
      onTouchEnd={() => setTimeout(handleInteractionEnd, 1000)} // Keep tooltip visible briefly on mobile
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: -70, scale: 1 }}
            exit={{ opacity: 0, y: 0, scale: 0.8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute z-50 pointer-events-none"
          >
            <div className="px-4 py-1.5 rounded-lg bg-black/90 backdrop-blur-md border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.6)] whitespace-nowrap">
              <span className="text-cyan-300 font-bold text-sm tracking-wide drop-shadow-[0_0_8px_rgba(6,182,212,0.9)]">
                {skill.name}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative group cursor-pointer"
        aria-label={skill.name}
      >
        {/* Pulse Ring */}
        <div 
          className={`absolute inset-0 rounded-full bg-cyan-500/30 blur-xl transition-all duration-500 ease-out ${
            isHovered ? 'scale-[1.8] opacity-100' : 'scale-100 opacity-0'
          }`} 
        />
        
        {/* Card Container */}
        <div 
          className={`relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/[0.03] backdrop-blur-md border transition-all duration-300 z-10 ${
            isHovered 
              ? 'border-cyan-400/80 shadow-[0_0_25px_rgba(6,182,212,0.5)] bg-cyan-950/40' 
              : 'border-white/10 shadow-none'
          }`}
        >
          <skill.icon 
            className={`w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 ${
              isHovered 
                ? 'text-cyan-300 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]' 
                : 'text-gray-400'
            }`} 
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export const SkillsGrid = () => {
  return (
    <div className="relative w-full py-10">
      {/* Subtle radial gradient background for the grid area */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-12 gap-x-8 place-items-center max-w-6xl mx-auto relative z-10">
        {skillsData.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
};
