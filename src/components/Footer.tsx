import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, currentlyExploringTags } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030303] text-gray-400 border-t border-white/5 relative overflow-hidden">
      {/* Continuous Marquee Ticker */}
      <div className="py-4 border-b border-white/5 bg-[#060606] overflow-hidden whitespace-nowrap">
        <div className="animate-marquee items-center space-x-8">
          {currentlyExploringTags.concat(currentlyExploringTags).map((tag, idx) => (
            <div key={idx} className="flex items-center space-x-3 text-xs font-mono-code text-gray-500">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFB7C5]" />
              <span className="tracking-widest uppercase text-gray-400 hover:text-[#FFB7C5] transition-colors">
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start justify-between">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#111111] border border-white/10 flex items-center justify-center">
                <span className="font-display font-bold text-lg text-[#FFB7C5]">P</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white tracking-wider">
                  PRAJITHA MARY.J
                </h3>
                <p className="text-xs font-mono-code text-[#FFB7C5]">
                  Data Science • AI/ML • Full-Stack
                </p>
              </div>
            </div>

            <p className="text-sm font-light text-gray-400 max-w-md leading-relaxed">
              Computer Science Engineering student at St. Joseph's College of Engineering. Focused on turning complex data and algorithmic intelligence into elegant digital solutions.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-full bg-[#111111] border border-white/5 text-gray-400 hover:text-[#FFB7C5] hover:border-[#FFB7C5]/30 transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-full bg-[#111111] border border-white/5 text-gray-400 hover:text-[#FFB7C5] hover:border-[#FFB7C5]/30 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.socials.email}`}
                aria-label="Email"
                className="p-2.5 rounded-full bg-[#111111] border border-white/5 text-gray-400 hover:text-[#FFB7C5] hover:border-[#FFB7C5]/30 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono-code text-[#FFB7C5] uppercase tracking-widest mb-4">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-mono-code">
              <li>
                <a href="#about" className="hover:text-[#FFB7C5] transition-colors">
                  // About & Education
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-[#FFB7C5] transition-colors">
                  // Journey & Capabilities
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#FFB7C5] transition-colors">
                  // Professional Internships
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#FFB7C5] transition-colors">
                  // Skills Constellation
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#FFB7C5] transition-colors">
                  // Featured Case Studies
                </a>
              </li>
              <li>
                <a href="#hackathons" className="hover:text-[#FFB7C5] transition-colors">
                  // Hackathons & Achievements
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-[#FFB7C5] transition-colors">
                  // Certifications
                </a>
              </li>
            </ul>
          </div>

          {/* Right Action & Status */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between space-y-6">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2.5 rounded-full bg-[#111111] hover:bg-[#181818] border border-white/10 hover:border-[#FFB7C5]/40 text-xs font-mono-code text-gray-300 hover:text-white transition-all group"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-4 h-4 text-[#FFB7C5] group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <div className="text-left md:text-right space-y-1">
              <p className="text-xs font-mono-code text-gray-400">
                ST. JOSEPH'S COLLEGE OF ENGINEERING
              </p>
              <p className="text-[11px] font-mono-code text-gray-500">
                CHENNAI, INDIA
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-gray-500">
          <p>© {new Date().getFullYear()} Prajitha Mary.J • All rights reserved.</p>
          <div className="flex items-center space-x-2 text-gray-400">
            <span>Crafted with</span>
            <span className="text-[#FFB7C5]">♥</span>
            <span>React + TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
