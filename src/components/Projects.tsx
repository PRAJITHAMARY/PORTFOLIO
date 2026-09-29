import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsList } from '../data/portfolioData';
import { ProjectPreviewWidget } from './ProjectPreviewWidget';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-20 sm:mb-28">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-8 h-[1px] bg-[#FFB7C5]" />
            <span className="font-mono-code text-xs uppercase tracking-[0.3em] text-[#FFB7C5]">
              VERIFIED PORTFOLIO
            </span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none">
            FEATURED <span className="text-[#FFB7C5]">PROJECTS</span>
          </h2>
          <p className="mt-4 text-gray-400 font-light max-w-2xl text-base sm:text-lg leading-relaxed">
            In-depth case studies of analytical engines, full-stack systems, machine learning pipelines, and threat intelligence software.
          </p>
        </div>

        {/* Full-Screen Project Showcase Stream */}
        <div className="space-y-28 sm:space-y-36">
          {projectsList.map((project) => {
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="relative min-h-[70vh] lg:min-h-[80vh] flex flex-col justify-center p-6 sm:p-10 lg:p-12 rounded-3xl bg-[#080808] border border-white/10 hover:border-[#FFB7C5]/30 transition-all duration-500 group"
              >
                {/* Subtle Ambient Radial Glow on Card */}
                <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FFB7C5]/[0.03] group-hover:bg-[#FFB7C5]/[0.07] rounded-full blur-[100px] pointer-events-none transition-all duration-500" />

                {/* 2-Column Responsive Layout: Left 42% (Preview) | Right 58% (Details) */}
                <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 sm:gap-12 lg:gap-14 relative z-10">
                  {/* LEFT: Interactive Project Preview Mockup (42% Desktop) */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full lg:w-[42%] flex items-center justify-center order-2 lg:order-1"
                  >
                    <div className="w-full transition-transform duration-500 group-hover:-translate-y-1">
                      <ProjectPreviewWidget visualType={project.visualType} title={project.title} />
                    </div>
                  </motion.div>

                  {/* RIGHT: Project Information & Case Study Narrative (58% Desktop) */}
                  <div className="w-full lg:w-[58%] flex flex-col justify-between order-1 lg:order-2">
                    <div>
                      {/* Project Number & Category Badge */}
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="font-mono-code font-extrabold text-3xl sm:text-4xl text-[#FFB7C5]/40 tracking-wider">
                          {project.number}
                        </span>
                        <span className="w-6 h-[1px] bg-white/10" />
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono-code font-semibold uppercase tracking-wider bg-[#121212] text-[#FFB7C5] border border-white/10">
                          {project.category}
                        </span>
                      </div>

                      {/* Project Title — Unclipped with Natural Wrapping */}
                      <h3
                        className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] text-white group-hover:text-[#FFB7C5] transition-colors mb-5 tracking-tight leading-[1.15] break-words overflow-visible"
                        style={{
                          wordBreak: 'break-word',
                          overflowWrap: 'break-word',
                        }}
                      >
                        {project.title}
                      </h3>

                      {/* Description Narrative */}
                      <p className="text-gray-300 font-light text-base sm:text-lg leading-relaxed mb-6 max-w-2xl">
                        {project.description}
                      </p>

                      {/* Compact Technology Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full text-xs font-mono-code bg-[#111111] text-gray-300 border border-white/10 group-hover:border-[#FFB7C5]/20 group-hover:text-white transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Divider & Clean GitHub CTA */}
                    <div className="pt-6 border-t border-white/10 flex items-center">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-3 px-6 py-3.5 rounded-full bg-[#121212] hover:bg-[#FFB7C5] text-white hover:text-black border border-white/10 hover:border-[#FFB7C5] font-display font-bold text-xs uppercase tracking-widest transition-all duration-300 group/btn shadow-lg"
                      >
                        <GithubIcon className="w-4 h-4 text-[#FFB7C5] group-hover/btn:text-black transition-colors" />
                        <span>VIEW ON GITHUB</span>
                        <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
