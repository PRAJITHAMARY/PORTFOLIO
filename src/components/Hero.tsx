import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Mail, FileText, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [currentRoleIdx, setCurrentRoleIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIdx((prev) => (prev + 1) % personalInfo.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenResume) {
      onOpenResume();
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 sm:pt-32 pb-16 flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8 bg-grid-pattern overflow-hidden"
    >
      {/* Soft Background Radial Blush Glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FFB7C5]/[0.08] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#FFB7C5]/[0.06] rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Floating Node Graphic Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10%" cy="20%" r="2" fill="#FFB7C5" />
          <circle cx="90%" cy="30%" r="2" fill="#FFB7C5" />
          <line x1="10%" y1="20%" x2="90%" y2="30%" stroke="#FFB7C5" strokeDasharray="4 4" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Main Hero Content — Full-Width Centered Editorial */}
      <div className="my-auto max-w-4xl w-full z-10 flex flex-col items-center text-center">
        {/* Subtitle tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#111111]/90 border border-white/10 mb-6 backdrop-blur-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#FFB7C5] animate-pulse" />
          <span className="text-xs font-mono-code text-gray-300 tracking-wider uppercase">
            HI, I'M
          </span>
        </motion.div>

        {/* Main Name Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mb-3 select-none"
        >
          <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-white leading-none">
            PRAJITHA <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFB7C5] to-white">
              MARY.J
              <span className="absolute bottom-1 left-0 right-0 h-1 bg-[#FFB7C5]/40 rounded-full blur-xs" />
            </span>
          </h1>
        </motion.div>

        {/* Rotating Roles Container */}
        <div className="h-9 sm:h-11 mb-6 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentRoleIdx}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="font-mono-code font-bold text-xs sm:text-base md:text-lg text-[#FFB7C5] tracking-[0.2em] uppercase"
            >
              {personalInfo.roles[currentRoleIdx]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Short intro statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl text-base sm:text-lg text-gray-300 font-light leading-relaxed mb-10"
        >
          "{personalInfo.intro}"
        </motion.p>

        {/* Primary CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
        >
          <a
            href="#projects"
            onClick={handleScrollToProjects}
            className="px-8 py-4 rounded-full bg-[#FFB7C5] text-black font-display font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-white transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-[#FFB7C5]/10 flex items-center justify-center space-x-2"
          >
            <span>EXPLORE MY WORK</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={handleResumeClick}
            className="px-8 py-4 rounded-full bg-[#111111] hover:bg-[#161616] text-white border border-white/10 hover:border-[#FFB7C5]/40 font-display font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <FileText className="w-4 h-4 text-[#FFB7C5]" />
            <span>VIEW RESUME</span>
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex items-center space-x-4 text-gray-400"
        >
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-full bg-[#0B0B0B] border border-white/10 text-gray-300 hover:text-[#FFB7C5] hover:border-[#FFB7C5]/40 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-full bg-[#0B0B0B] border border-white/10 text-gray-300 hover:text-[#FFB7C5] hover:border-[#FFB7C5]/40 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalInfo.socials.email}`}
            aria-label="Email Prajitha"
            className="p-2.5 rounded-full bg-[#0B0B0B] border border-white/10 text-gray-300 hover:text-[#FFB7C5] hover:border-[#FFB7C5]/40 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="mt-8 z-10"
      >
        <a
          href="#about"
          className="flex flex-col items-center text-xs font-mono-code text-gray-500 hover:text-[#FFB7C5] transition-colors group"
        >
          <span className="tracking-widest uppercase mb-2">SCROLL TO EXPLORE</span>
          <ArrowDown className="w-4 h-4 text-[#FFB7C5] animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};
