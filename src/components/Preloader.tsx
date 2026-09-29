import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'initial' | 'full' | 'line' | 'exit'>('initial');

  useEffect(() => {
    // Stage 1: P logo appears (0ms)
    // Stage 2: Full name reveals (500ms)
    // Stage 3: Line animation expands (1000ms)
    // Stage 4: Fade out exit (1800ms)

    const timer1 = setTimeout(() => setStage('full'), 500);
    const timer2 = setTimeout(() => setStage('line'), 1100);
    const timer3 = setTimeout(() => setStage('exit'), 1800);
    const timer4 = setTimeout(() => onComplete(), 2300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage !== 'exit' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center pointer-events-auto select-none"
        >
          <div className="relative flex flex-col items-center">
            {/* Minimal glowing background aura */}
            <div className="absolute -inset-10 bg-[#FFB7C5]/10 rounded-full blur-3xl opacity-60 animate-pulse pointer-events-none" />

            {/* Letter P or Full Name reveal */}
            <div className="h-16 flex items-center justify-center">
              {stage === 'initial' ? (
                <motion.span
                  key="p-logo"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="font-display font-extrabold text-5xl md:text-6xl text-[#FFB7C5] tracking-tighter"
                >
                  P
                </motion.span>
              ) : (
                <motion.div
                  key="full-name"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="font-display font-bold text-2xl sm:text-3xl md:text-4xl tracking-[0.2em] text-white text-center"
                >
                  PRAJITHA <span className="text-[#FFB7C5]">MARY.J</span>
                </motion.div>
              )}
            </div>

            {/* Thin elegant line animation */}
            <div className="w-48 sm:w-64 h-[1px] bg-white/10 mt-6 relative overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{
                  x: stage === 'line' || stage === 'full' ? '0%' : '-100%'
                }}
                transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
                className="w-full h-full bg-gradient-to-r from-transparent via-[#FFB7C5] to-transparent"
              />
            </div>

            {/* Subtitle tag */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: stage === 'line' ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 text-xs font-mono-code text-gray-400 tracking-widest uppercase"
            >
              DATA SCIENCE • AI/ML • FULL-STACK
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
