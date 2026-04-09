import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Globe, MessageCircle, Zap } from 'lucide-react';

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const ContactRow = ({ icon: Icon, label, value, href }: { icon: any, label: string, value: string, href?: string }) => {
  const content = (
    <>
      <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:bg-cyan-500/20 transition-all duration-300">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-sm text-gray-400 font-medium">{label}</p>
        <p className="text-lg font-semibold text-gray-200 group-hover:text-cyan-300 transition-colors">{value}</p>
      </div>
    </>
  );
  
  const className = "group flex items-center gap-4 p-3 -ml-3 rounded-2xl hover:bg-white/[0.04] transition-all duration-300 cursor-pointer";
  
  return href ? (
    <motion.a 
      href={href} 
      target={href.startsWith('http') ? "_blank" : undefined} 
      rel={href.startsWith('http') ? "noopener noreferrer" : undefined} 
      whileHover={{ x: 10 }} 
      className={className} 
      aria-label={label}
    >
      {content}
    </motion.a>
  ) : (
    <motion.div whileHover={{ x: 10 }} className={className} aria-label={label}>
      {content}
    </motion.div>
  );
};

const ContactCard = () => (
  <motion.div variants={itemVariants} className="relative group">
    {/* Outer Glow */}
    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
    
    {/* Main Container */}
    <div className="relative flex flex-col md:flex-row items-center p-8 md:p-12 bg-[#050505]/80 backdrop-blur-xl rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl">
      
      {/* Abstract Neon Shape */}
      <div className="absolute right-0 top-0 w-full md:w-1/2 h-full pointer-events-none overflow-hidden flex items-center justify-end opacity-20 group-hover:opacity-40 transition-opacity duration-700">
        <div className="absolute right-10 w-64 h-64 bg-cyan-500/30 rounded-full blur-[80px]"></div>
        <Zap className="w-80 h-80 text-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.8)] transform rotate-12 translate-x-12 opacity-50" strokeWidth={1} />
      </div>

      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-6 relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          LET'S BUILD <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
            THE FUTURE.
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-md leading-relaxed">
          Have a project in mind or want to discuss AI solutions? Drop me a message.
        </p>
      </div>

      {/* Right Content (Contact Items) */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex flex-col gap-2 relative z-10 md:pl-10">
        <ContactRow icon={Mail} label="Email" value="developer@imprince.me" href="mailto:developer@imprince.me" />
        <ContactRow icon={Phone} label="Phone" value="+91 8252995548" href="tel:+918252995548" />
        <ContactRow icon={MapPin} label="Location" value="India" />
        <ContactRow icon={Globe} label="Website" value="Coming Soon" />
      </div>
    </div>
  </motion.div>
);

const WhatsAppCard = () => (
  <motion.div variants={itemVariants} className="relative group">
    {/* Outer Glow */}
    <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-400 rounded-[2rem] blur-xl opacity-10 group-hover:opacity-30 transition-opacity duration-500" />
    
    {/* Main Container */}
    <div className="relative flex flex-col items-center text-center p-8 md:p-12 bg-[#050505]/80 backdrop-blur-xl rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl">
      
      <motion.div 
        animate={{ y: [-5, 5, -5] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full" />
        <div className="relative p-5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.2)] mb-6">
          <MessageCircle className="w-10 h-10 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
        </div>
      </motion.div>

      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-wide">
        Fastest Response
      </h3>
      <p className="text-gray-400 max-w-md mb-8 text-lg">
        For urgent inquiries or quick discussions, reach out directly on WhatsApp.
      </p>
      
      <motion.a 
        href="https://wa.me/918252995548" 
        target="_blank" 
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-green-500/10 border border-green-500/50 text-green-400 font-bold tracking-wide hover:bg-green-500/20 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all duration-300 overflow-hidden group/btn"
      >
        {/* Pulse effect inside button */}
        <span className="absolute inset-0 w-full h-full bg-green-400/20 blur-md opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
        <MessageCircle className="w-5 h-5 relative z-10" />
        <span className="relative z-10">CHAT DIRECTLY ON WhatsApp</span>
      </motion.a>
    </div>
  </motion.div>
);

export const ContactFooter = () => {
  return (
    <section id="contact" className="relative pt-24 pb-12 bg-[#050505] overflow-hidden z-10">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(6,182,212,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
        className="container px-4 md:px-6 mx-auto max-w-5xl space-y-8 relative z-10"
      >
        <ContactCard />
        <WhatsAppCard />
      </motion.div>
      
      {/* Copyright / Small Footer Bottom */}
      <div className="mt-24 border-t border-white/10 pt-8 text-center relative z-10">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Prince Raj. All rights reserved.
        </p>
        <div className="text-gray-600 text-xs mt-2 flex items-center justify-center gap-1">
          Designed with <span className="text-cyan-500 animate-pulse">❤</span> for the future
        </div>
      </div>
    </section>
  );
};
