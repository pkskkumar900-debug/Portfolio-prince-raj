import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Award } from 'lucide-react';

const credentials = [
  {
    course: "Connect and Protect: Networks and Network Security",
    company: "Google",
    date: "Jan 16, 2026",
    url: "https://coursera.org/verify/4OYZNCAMLVNB"
  },
  {
    course: "Machine Learning with Python",
    company: "IBM",
    date: "Dec 20, 2025",
    url: "https://coursera.org/verify/XMWSP1OIM1R2"
  },
  {
    course: "Develop Generative AI Applications: Get Started",
    company: "IBM",
    date: "Dec 12, 2025",
    url: "https://coursera.org/verify/YMFCRD9D750W"
  },
  {
    course: "AWS Artificial Intelligence Practitioner",
    company: "AWS",
    date: "Dec 11, 2025",
    url: "https://coursera.org/verify/HG4W9BZK9BLI"
  },
  {
    course: "Introduction to Large Language Models",
    company: "Google Cloud",
    date: "Dec 2, 2025",
    url: "https://coursera.org/verify/0LBYP4FDCQT4"
  },
  {
    course: "Python for Data Science, AI & Development",
    company: "IBM",
    date: "Nov 17, 2025",
    url: "https://coursera.org/verify/TE0ACYVR0G0G"
  },
  {
    course: "Introduction to Generative AI",
    company: "Google Cloud",
    date: "Oct 25, 2025",
    url: "https://coursera.org/verify/WYBIO9D7RH8Z"
  }
];

export const CredentialsSection: React.FC = () => {
  return (
    <section id="credentials" className="relative py-24 z-10">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4"
          >
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Credentials</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-blue-500 mx-auto rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentials.map((cred, idx) => (
            <motion.a
              href={cred.url}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative block h-full"
            >
              {/* Liquid hover effect background */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500"></div>
              
              <div className="relative h-full bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col overflow-hidden transition-all duration-300 group-hover:bg-white/[0.02] group-hover:border-white/20">
                {/* Subtle inner glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-blue-500/10 blur-[50px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-shadow">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="p-2 rounded-full bg-white/5 text-gray-400 group-hover:text-white group-hover:bg-blue-500/20 transition-all duration-300">
                    <ExternalLink className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-blue-300 transition-colors">
                  {cred.course}
                </h3>
                
                <div className="mt-auto pt-4 flex items-center justify-between text-sm">
                  <span className="font-medium text-gray-300">{cred.company}</span>
                  <span className="text-gray-500">{cred.date}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
