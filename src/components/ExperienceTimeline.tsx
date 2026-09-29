import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronDown, CheckCircle2 } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>(experiences[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center space-x-3 mb-2">
            <span className="w-8 h-[1px] bg-[#FFB7C5]" />
            <span className="font-mono-code text-xs uppercase tracking-[0.3em] text-[#FFB7C5]">
              PROFESSIONAL WORK
            </span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            WORK <span className="text-[#FFB7C5]">EXPERIENCE</span>
          </h2>
          <p className="mt-3 text-gray-400 font-light max-w-xl text-base">
            Industry internship roles focused on Data Science, Artificial Intelligence, Machine Learning, and Network Infrastructure.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => {
            const isExpanded = expandedId === exp.id;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="rounded-3xl bg-[#0B0B0B] border border-white/10 overflow-hidden hover:border-[#FFB7C5]/30 transition-all duration-300"
              >
                {/* Header Toggle Bar */}
                <button
                  onClick={() => toggleExpand(exp.id)}
                  className="w-full p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left focus:outline-none group hover:bg-[#111111]/50 transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#111111] border border-white/10 flex items-center justify-center text-[#FFB7C5] group-hover:scale-105 transition-transform flex-shrink-0">
                      <Briefcase className="w-5 h-5" />
                    </div>

                    <div>
                      <div className="flex items-center space-x-3 mb-1">
                        <span className="font-mono-code text-xs text-[#FFB7C5] tracking-widest font-bold">
                          EXPERIENCE 0{idx + 1}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono-code uppercase bg-[#161616] text-gray-400 border border-white/5">
                          {exp.type}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-2xl text-white group-hover:text-[#FFB7C5] transition-colors">
                        {exp.company}
                      </h3>

                      <p className="font-mono-code text-sm text-gray-300 font-medium">
                        {exp.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end space-x-6 border-t md:border-t-0 pt-4 md:pt-0 border-white/5">
                    <div className="flex flex-col md:items-end text-xs font-mono-code text-gray-400 space-y-1">
                      <div className="flex items-center space-x-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#FFB7C5]" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1.5 text-gray-500">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <div className={`w-8 h-8 rounded-full bg-[#111111] flex items-center justify-center text-gray-400 group-hover:text-[#FFB7C5] transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-[#FFB7C5]/10 text-[#FFB7C5]' : ''}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                </button>

                {/* Expandable Body */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="border-t border-white/5 px-6 sm:px-8 py-6 bg-[#080808]"
                    >
                      <h4 className="font-mono-code text-xs uppercase tracking-widest text-[#FFB7C5] mb-4">
                        RESPONSIBILITIES & DELIVERABLES:
                      </h4>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <div key={rIdx} className="flex items-start space-x-2 text-sm text-gray-300 font-light">
                            <CheckCircle2 className="w-4 h-4 text-[#FFB7C5] shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                        <span className="text-xs font-mono-code text-gray-500 uppercase mr-2">
                          KEY SKILLS:
                        </span>
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 rounded-full text-xs font-mono-code bg-[#111111] text-[#FFB7C5] border border-[#FFB7C5]/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
