import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Terminal } from 'lucide-react';
import { skillNodes, type SkillNode } from '../data/portfolioData';

const categories = ['ALL', 'PROGRAMMING', 'DATA', 'AI / ML', 'WEB DEVELOPMENT', 'TOOLS'] as const;

export const SkillsConstellation: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeSkill, setActiveSkill] = useState<SkillNode | null>(null);

  const filteredSkills = selectedCategory === 'ALL'
    ? skillNodes
    : skillNodes.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050505] relative border-t border-white/5 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FFB7C5]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="w-8 h-[1px] bg-[#FFB7C5]" />
              <span className="font-mono-code text-xs uppercase tracking-[0.3em] text-[#FFB7C5]">
                SKILL MATRIX & CONSTELLATION
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
              TECHNICAL <span className="text-[#FFB7C5]">SKILLS</span>
            </h2>
            <p className="mt-3 text-gray-400 font-light max-w-xl text-base">
              An interactive technology constellation mapping core engineering languages, data science frameworks, and full-stack web architectures.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono-code uppercase transition-all duration-300 focus:outline-none ${
                  selectedCategory === cat
                    ? 'bg-[#FFB7C5] text-black font-bold shadow-md shadow-[#FFB7C5]/20'
                    : 'bg-[#0B0B0B] text-gray-400 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Constellation Container Grid */}
        <div className="relative min-h-[480px] rounded-3xl bg-[#0B0B0B] border border-white/10 p-6 sm:p-10 flex flex-col justify-between overflow-hidden">
          {/* Constellation SVG Lines Background */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFB7C5" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Connecting lines from center to nodes */}
            {filteredSkills.map((_, idx) => {
              const total = filteredSkills.length;
              const angle = (idx / total) * 2 * Math.PI;
              const cx = 50 + 35 * Math.cos(angle);
              const cy = 50 + 35 * Math.sin(angle);
              return (
                <line
                  key={idx}
                  x1="50%"
                  y1="50%"
                  x2={`${cx}%`}
                  y2={`${cy}%`}
                  stroke="url(#lineGrad)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              );
            })}
          </svg>

          {/* Center Core Node */}
          <div className="relative z-10 flex flex-col items-center justify-center py-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-full bg-[#111111] border-2 border-[#FFB7C5] glow-pink-sm flex items-center space-x-2 text-center shadow-2xl"
            >
              <Sparkles className="w-4 h-4 text-[#FFB7C5] animate-spin" style={{ animationDuration: '8s' }} />
              <span className="font-display font-extrabold tracking-widest text-sm text-white">
                PRAJITHA CORE
              </span>
            </motion.div>
          </div>

          {/* Tech Nodes Floating Wrap */}
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 my-auto py-8">
            {filteredSkills.map((skill) => {
              const isHovered = activeSkill?.name === skill.name;
              return (
                <motion.button
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  onMouseEnter={() => setActiveSkill(skill)}
                  onMouseLeave={() => setActiveSkill(null)}
                  onClick={() => setActiveSkill(activeSkill?.name === skill.name ? null : skill)}
                  className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-mono-code transition-all duration-300 flex items-center space-x-2 border focus:outline-none ${
                    isHovered
                      ? 'bg-[#FFB7C5] text-black font-bold border-[#FFB7C5] glow-pink-sm shadow-xl'
                      : 'bg-[#111111]/90 text-gray-200 border-white/10 hover:border-[#FFB7C5]/50 hover:text-white'
                  }`}
                >
                  <Terminal className={`w-3.5 h-3.5 ${isHovered ? 'text-black' : 'text-[#FFB7C5]'}`} />
                  <span>{skill.name}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Active Skill Information Bar */}
          <div className="relative z-10 min-h-[64px] border-t border-white/10 pt-4 flex items-center justify-between">
            <AnimatePresence mode="wait">
              {activeSkill ? (
                <motion.div
                  key={activeSkill.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div className="flex items-center space-x-3">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono-code font-bold uppercase bg-[#FFB7C5]/20 text-[#FFB7C5] border border-[#FFB7C5]/30">
                      {activeSkill.category}
                    </span>
                    <span className="font-display font-bold text-white text-base">
                      {activeSkill.name}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-light text-gray-300">
                    {activeSkill.description}
                  </p>
                </motion.div>
              ) : (
                <motion.p
                  key="default-prompt"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xs font-mono-code text-gray-500 uppercase tracking-widest text-center w-full"
                >
                  HOVER OR TAP ANY TECHNOLOGY NODE TO EXPLORE DETAILS
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
