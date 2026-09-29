import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { educationList } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-12">
          <GraduationCap className="w-5 h-5 text-[#FFB7C5]" />
          <h2 className="font-mono-code text-xs uppercase tracking-[0.3em] text-[#FFB7C5]">
            ACADEMIC BACKGROUND
          </h2>
        </div>

        <div className="relative border-l border-white/10 pl-6 sm:pl-10 space-y-12 ml-4 sm:ml-6">
          {/* Animated vertical line overlay */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="absolute top-0 left-[-1px] w-[2px] bg-gradient-to-b from-[#FFB7C5] via-[#FFB7C5]/40 to-transparent"
          />

          {educationList.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative group"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#050505] border-2 border-[#FFB7C5] group-hover:bg-[#FFB7C5] transition-colors" />

              <div className="p-6 sm:p-8 rounded-2xl bg-[#0B0B0B] border border-white/10 hover:border-[#FFB7C5]/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <span className="font-mono-code text-xs text-[#FFB7C5] tracking-widest uppercase">
                    EDUCATION 0{idx + 1}
                  </span>
                  <div className="inline-flex items-center space-x-1.5 text-xs font-mono-code text-gray-400 bg-[#111111] px-3 py-1 rounded-full border border-white/5">
                    <Calendar className="w-3.5 h-3.5 text-[#FFB7C5]" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-[#FFB7C5] transition-colors">
                  {edu.institution}
                </h3>
                <p className="font-mono-code text-sm text-gray-300 mt-1 mb-3">
                  {edu.degree}
                </p>

                {edu.details && (
                  <p className="text-gray-400 font-light text-sm leading-relaxed">
                    {edu.details}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
