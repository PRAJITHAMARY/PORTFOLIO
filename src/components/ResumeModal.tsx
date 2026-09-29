import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Mail, MapPin, Briefcase, GraduationCap, Award, FileText } from 'lucide-react';
import { personalInfo, educationList, experiences, projectsList, featuredAchievements } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#0A0A0A] border border-white/15 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
        >
          {/* Modal Header Bar */}
          <div className="px-6 py-4 bg-[#111111] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-[#FFB7C5]" />
              <span className="font-display font-bold text-sm text-white tracking-wider">
                CURRICULUM VITAE — PRAJITHA MARY.J
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrint}
                className="p-2 rounded-lg bg-[#181818] hover:bg-[#222222] text-gray-300 hover:text-white transition-colors text-xs font-mono-code flex items-center space-x-1.5"
                title="Print Resume"
              >
                <Printer className="w-4 h-4 text-[#FFB7C5]" />
                <span className="hidden sm:inline">PRINT</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-[#181818] hover:bg-[#222222] text-gray-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Content / Scrollable Resume */}
          <div className="p-6 sm:p-8 md:p-10 overflow-y-auto space-y-8 text-gray-300 font-light print:p-0 print:bg-white print:text-black">
            {/* Resume Header */}
            <div className="border-b border-white/10 pb-6">
              <h1 className="font-display font-extrabold text-2xl sm:text-4xl text-white mb-2">
                PRAJITHA MARY.J
              </h1>
              <p className="font-mono-code text-sm text-[#FFB7C5] mb-4">
                Computer Science Engineering Student • Data Science Enthusiast • AI/ML Explorer
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-mono-code text-gray-400">
                <span className="flex items-center space-x-1">
                  <Mail className="w-3.5 h-3.5 text-[#FFB7C5]" />
                  <span>{personalInfo.socials.email}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-[#FFB7C5]" />
                  <span>{personalInfo.metadata.location}</span>
                </span>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#FFB7C5] hover:underline"
                >
                  LinkedIn Profile
                </a>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#FFB7C5] hover:underline"
                >
                  GitHub Profile
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-xs font-mono-code uppercase tracking-widest text-[#FFB7C5] mb-3 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#FFB7C5]" />
                <span>PROFESSIONAL SUMMARY</span>
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                {personalInfo.aboutParagraphs.join(' ')}
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-mono-code uppercase tracking-widest text-[#FFB7C5] mb-4 flex items-center space-x-2">
                <GraduationCap className="w-4 h-4 text-[#FFB7C5]" />
                <span>EDUCATION</span>
              </h2>
              <div className="space-y-4">
                {educationList.map((edu) => (
                  <div key={edu.id} className="p-4 rounded-xl bg-[#111111] border border-white/5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                      <h3 className="font-display font-bold text-white text-sm sm:text-base">
                        {edu.institution}
                      </h3>
                      <span className="text-xs font-mono-code text-[#FFB7C5]">{edu.period}</span>
                    </div>
                    <p className="text-xs font-mono-code text-gray-400 mb-1">{edu.degree}</p>
                    {edu.details && <p className="text-xs text-gray-400 font-light">{edu.details}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* Internships & Experience */}
            <div>
              <h2 className="text-xs font-mono-code uppercase tracking-widest text-[#FFB7C5] mb-4 flex items-center space-x-2">
                <Briefcase className="w-4 h-4 text-[#FFB7C5]" />
                <span>EXPERIENCE & INTERNSHIPS</span>
              </h2>
              <div className="space-y-4">
                {experiences.map((exp) => (
                  <div key={exp.id} className="p-4 rounded-xl bg-[#111111] border border-white/5 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <h3 className="font-display font-bold text-white text-sm sm:text-base">
                        {exp.role} — <span className="text-[#FFB7C5]">{exp.company}</span>
                      </h3>
                      <span className="text-xs font-mono-code text-gray-400">{exp.period}</span>
                    </div>
                    <ul className="list-disc list-inside text-xs text-gray-300 space-y-1 pl-1 font-light">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Projects */}
            <div>
              <h2 className="text-xs font-mono-code uppercase tracking-widest text-[#FFB7C5] mb-4 flex items-center space-x-2">
                <Award className="w-4 h-4 text-[#FFB7C5]" />
                <span>KEY PROJECTS</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projectsList.slice(0, 4).map((p) => (
                  <div key={p.id} className="p-4 rounded-xl bg-[#111111] border border-white/5">
                    <h3 className="font-display font-bold text-white text-sm mb-1">{p.title}</h3>
                    <p className="text-xs text-gray-400 font-light mb-2">{p.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {p.technologies.slice(0, 3).map((t, idx) => (
                        <span key={idx} className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-[#181818] text-[#FFB7C5]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hackathon Honours */}
            <div>
              <h2 className="text-xs font-mono-code uppercase tracking-widest text-[#FFB7C5] mb-3 flex items-center space-x-2">
                <Award className="w-4 h-4 text-[#FFB7C5]" />
                <span>HONOURS & RECOGNITIONS</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {featuredAchievements.map((ach) => (
                  <div key={ach.id} className="p-3.5 rounded-xl bg-[#111111] border border-white/5">
                    <span className="text-[10px] font-mono-code text-[#FFB7C5] font-bold block mb-1">
                      {ach.badgeType}
                    </span>
                    <p className="font-display font-bold text-white text-xs mb-1">{ach.title}</p>
                    <p className="text-[11px] text-gray-400">{ach.award}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
