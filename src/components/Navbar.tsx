import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { label: 'HOME', href: '#hero' },
  { label: 'ABOUT', href: '#about' },
  { label: 'JOURNEY', href: '#journey' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'HACKATHONS', href: '#hackathons' },
  { label: 'TEAM', href: '#team' },
  { label: 'CERTIFICATIONS', href: '#certifications' },
  { label: 'GITHUB', href: '#github' },
  { label: 'CONTACT', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Section observer logic
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#050505]/85 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center space-x-2 group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-[#111111] border border-white/10 flex items-center justify-center group-hover:border-[#FFB7C5]/50 transition-colors">
              <span className="font-display font-bold text-sm text-[#FFB7C5]">P</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-wider text-white group-hover:text-[#FFB7C5] transition-colors">
                PRAJITHA
              </span>
              <span className="text-[10px] font-mono-code text-gray-500 uppercase tracking-widest -mt-1">
                MARY.J
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden xl:flex items-center space-x-1 bg-[#0B0B0B]/80 p-1.5 rounded-full border border-white/10 backdrop-blur-sm">
            {navItems.map((item) => {
              const id = item.href.substring(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3 py-1.5 text-[11px] font-medium tracking-wider transition-colors duration-200 rounded-full focus:outline-none ${
                    isActive ? 'text-black font-semibold' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-[#FFB7C5] rounded-full -z-10 shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Connect / Resume Button Desktop */}
          <div className="hidden xl:flex items-center space-x-3">
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-4 py-2 text-xs font-mono-code text-gray-300 bg-[#111111] hover:bg-[#161616] border border-white/10 hover:border-[#FFB7C5]/40 rounded-full transition-all duration-200"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FFB7C5]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg bg-[#111111] border border-white/10 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#FFB7C5]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 bg-[#050505]/95 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col justify-between overflow-y-auto xl:hidden"
          >
            <div className="flex flex-col space-y-3">
              <span className="text-xs font-mono-code text-[#FFB7C5] tracking-widest mb-2">
                NAVIGATION
              </span>
              {navItems.map((item, idx) => {
                const id = item.href.substring(1);
                const isActive = activeSection === id;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    className={`text-xl font-display font-bold tracking-wide py-1 flex items-center justify-between border-b border-white/5 ${
                      isActive ? 'text-[#FFB7C5]' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#FFB7C5]" />}
                  </motion.a>
                );
              })}
            </div>

            <div className="pt-8 flex flex-col space-y-3">
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-center text-xs font-mono-code font-bold tracking-widest uppercase bg-[#FFB7C5] text-black rounded-lg hover:bg-white transition-colors"
              >
                CONNECT ON LINKEDIN
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
