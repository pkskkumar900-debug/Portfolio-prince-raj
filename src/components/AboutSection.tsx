import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { AboutCard } from './ui/about-card';

const Particles = () => {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-1 h-1 bg-cyan-400/40 rounded-full blur-[1px]"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          animate={{
            y: [0, -100],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 z-10 dark:bg-[#050505] bg-slate-50 overflow-hidden transition-colors duration-300">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <Particles />

      <div className="container px-4 md:px-6 mx-auto max-w-6xl relative z-10">
        <AboutCard />
      </div>
    </section>
  );
};
