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
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
  { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'AWS', icon: FaAws, color: '#FF9900' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'C++', icon: SiCplusplus, color: '#00599C' },
  { name: 'Redis', icon: SiRedis, color: '#DC382D' },
  { name: 'Linux', icon: SiLinux, color: '#FCC624' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
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
            <div 
              className="px-4 py-1.5 rounded-lg bg-black/90 backdrop-blur-md border whitespace-nowrap"
              style={{ 
                borderColor: `${skill.color}80`, 
                boxShadow: `0 0 15px ${skill.color}60` 
              }}
            >
              <span 
                className="font-bold text-sm tracking-wide"
                style={{ 
                  color: skill.color,
                  textShadow: `0 0 8px ${skill.color}90`
                }}
              >
                {skill.name}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative group cursor-pointer"
        aria-label={skill.name}
      >
        {/* Pulse Ring */}
        <div 
          className={`absolute inset-0 rounded-full blur-xl transition-all duration-500 ease-out ${
            isHovered ? 'scale-[1.6] opacity-100 animate-pulse' : 'scale-100 opacity-0'
          }`}
          style={{ backgroundColor: `${skill.color}40` }}
        />
        
        {/* Card Container */}
        <div 
          className={`relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/[0.03] backdrop-blur-md border transition-all duration-300 z-10 ${
            isHovered ? 'shadow-lg' : 'border-white/10 shadow-none'
          }`}
          style={{
            borderColor: isHovered ? `${skill.color}80` : 'rgba(255,255,255,0.1)',
            boxShadow: isHovered ? `0 0 25px ${skill.color}50` : 'none',
            backgroundColor: isHovered ? `${skill.color}15` : 'rgba(255,255,255,0.03)'
          }}
        >
          <skill.icon 
            className="w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300"
            style={{ 
              color: skill.color,
              filter: isHovered ? `drop-shadow(0 0 12px ${skill.color}90)` : 'grayscale(30%) brightness(0.8)'
            }}
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
