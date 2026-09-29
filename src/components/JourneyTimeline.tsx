import React from 'react';
import { motion } from 'framer-motion';
import { journeyTimeline } from '../data/portfolioData';

export const JourneyTimeline: React.FC = () => {
  return (
    <section id="journey" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center space-x-3 mb-2">
            <span className="w-8 h-[1px] bg-[#FFB7C5]" />
            <span className="font-mono-code text-xs uppercase tracking-[0.3em] text-[#FFB7C5]">
              MILESTONES & EVOLUTION
            </span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            MY <span className="text-[#FFB7C5]">JOURNEY</span>
          </h2>
          <p className="mt-3 text-gray-400 font-light max-w-xl text-base">
            Exploring the chronological evolution of my academic background, technical mastery, real-world experience, and future ambitions.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l border-white/10 pl-6 sm:pl-10 space-y-10 ml-2 sm:ml-6">
          {/* Animated vertical drawn line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute top-0 left-[-1px] w-[2px] bg-gradient-to-b from-[#FFB7C5] via-[#FFB7C5]/50 to-transparent"
          />

          {journeyTimeline.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="relative group"
            >
              {/* Point Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#050505] border-2 border-[#FFB7C5] group-hover:scale-125 group-hover:bg-[#FFB7C5] transition-all duration-300" />

              <div className="p-6 sm:p-8 rounded-2xl bg-[#0B0B0B] border border-white/10 hover:border-[#FFB7C5]/40 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                {/* Year & Category */}
                <div className="md:col-span-3 flex flex-col">
                  <span className="font-mono-code text-xs text-[#FFB7C5] tracking-widest font-bold">
                    {item.year}
                  </span>
                  <span className="text-[11px] font-mono-code text-gray-500 uppercase mt-0.5">
                    {item.category}
                  </span>
                </div>

                {/* Content */}
                <div className="md:col-span-9">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-[#FFB7C5] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-300 font-light text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
