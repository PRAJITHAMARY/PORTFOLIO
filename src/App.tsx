import React, { useState } from 'react';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';

import { JourneyTimeline } from './components/JourneyTimeline';
import { WhatIDo } from './components/WhatIDo';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsConstellation } from './components/SkillsConstellation';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Certifications } from './components/Certifications';
import { GithubVault } from './components/GithubVault';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#FFB7C5] selection:text-black font-sans antialiased overflow-x-hidden">
      {/* Preloader Animation */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Trailing Custom Glow Cursor */}
      <CustomCursor />

      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Sticky Glassmorphic Header Navigation */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="relative">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />

        <JourneyTimeline />
        <WhatIDo />
        <ExperienceTimeline />
        <SkillsConstellation />
        <Projects />
        <Achievements />
        <Certifications />
        <GithubVault />
        <Contact />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Interactive Printable Curriculum Vitae Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
};

export default App;

