import React from 'react';
import { motion } from 'framer-motion';
import { Database, LineChart, Cpu, Code2, ArrowUpRight } from 'lucide-react';
import { capabilities } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  '01': <Database className="w-6 h-6 text-[#FFB7C5]" />,
  '02': <LineChart className="w-6 h-6 text-[#FFB7C5]" />,
  '03': <Cpu className="w-6 h-6 text-[#FFB7C5]" />,
  '04': <Code2 className="w-6 h-6 text-[#FFB7C5]" />,
};

export const WhatIDo: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center space-x-3 mb-2">
            <span className="w-8 h-[1px] bg-[#FFB7C5]" />
            <span className="font-mono-code text-xs uppercase tracking-[0.3em] text-[#FFB7C5]">
              CORE CAPABILITIES
            </span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            WHAT I <span className="text-[#FFB7C5]">DO</span>
          </h2>
          <p className="mt-3 text-gray-400 font-light max-w-xl text-base">
            Bridging analytical data rigor with intelligent algorithmic solutions and intuitive modern web software.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={cap.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#0B0B0B] border border-white/10 hover:border-[#FFB7C5]/40 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle Card Background Glow on Hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB7C5]/5 rounded-full blur-2xl group-hover:bg-[#FFB7C5]/15 transition-all duration-500 pointer-events-none" />

              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#111111] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[#FFB7C5]/50 transition-all duration-300">
                      {iconMap[cap.number]}
                    </div>
                    <span className="font-mono-code text-2xl font-bold text-gray-600 group-hover:text-[#FFB7C5] transition-colors">
                      {cap.number}
                    </span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-[#FFB7C5] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-2xl text-white mb-4 group-hover:text-[#FFB7C5] transition-colors">
                  {cap.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 font-light text-base leading-relaxed mb-8">
                  {cap.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {cap.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-mono-code bg-[#111111] text-gray-400 border border-white/5 group-hover:border-[#FFB7C5]/20 group-hover:text-gray-200 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
