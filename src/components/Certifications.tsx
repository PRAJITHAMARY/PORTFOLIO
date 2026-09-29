import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Shield, Search } from 'lucide-react';
import { certificationCategories } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['ALL', ...certificationCategories.map((c) => c.category)];

  const allCerts = certificationCategories.flatMap((cat) =>
    cat.certifications.map((cert) => ({ ...cert, category: cat.category }))
  );

  const filteredCerts = allCerts.filter((cert) => {
    const matchesCategory = selectedCategory === 'ALL' || cert.category === selectedCategory;
    const matchesSearch =
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getProviderColor = (provider: string) => {
    if (provider.includes('IBM')) return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
    if (provider.includes('Google')) return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
    if (provider.includes('Cisco')) return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20';
    if (provider.includes('NASSCOM')) return 'text-pink-400 bg-pink-500/10 border-pink-500/20';
    if (provider.includes('NPTEL')) return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
    return 'text-[#FFB7C5] bg-[#FFB7C5]/10 border-[#FFB7C5]/20';
  };

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#070707] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-[1px] bg-[#FFB7C5]" />
              <h2 className="font-mono-code text-xs uppercase tracking-[0.3em] text-[#FFB7C5]">
                CREDENTIALS & KNOWLEDGE
              </h2>
            </div>
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white">
              CERTIFICATIONS & SPECIALIZATIONS
            </h3>
            <p className="mt-3 text-gray-400 font-light max-w-xl text-sm sm:text-base">
              Verified certifications from industry leaders including IBM, Cisco, Google, NPTEL, and NASSCOM Foundation.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search credentials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#111111] border border-white/10 text-xs font-mono-code text-white placeholder-gray-500 focus:outline-none focus:border-[#FFB7C5]/50 transition-colors"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono-code whitespace-nowrap transition-all duration-200 border ${
                selectedCategory === cat
                  ? 'bg-[#FFB7C5] text-black font-semibold border-[#FFB7C5] shadow-sm'
                  : 'bg-[#111111] text-gray-400 border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredCerts.map((cert, index) => (
              <motion.div
                layout
                key={`${cert.title}-${cert.provider}-${index}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-2xl bg-[#0D0D0D] border border-white/10 hover:border-[#FFB7C5]/30 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono-code font-bold tracking-wider uppercase border ${getProviderColor(cert.provider)}`}>
                      {cert.provider}
                    </span>
                    <div className="flex items-center space-x-1 text-[#FFB7C5]">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  </div>

                  <h4 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-[#FFB7C5] transition-colors mb-2 leading-snug">
                    {cert.title}
                  </h4>

                  <p className="text-xs font-mono-code text-gray-400">
                    Category: <span className="text-gray-300">{cert.category}</span>
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono-code text-gray-500">
                  <span className="flex items-center space-x-1.5 text-gray-400">
                    <Shield className="w-3.5 h-3.5 text-[#FFB7C5]" />
                    <span>Verified Credential</span>
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#FFB7C5]/70">
                    COMPLETED
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredCerts.length === 0 && (
          <div className="text-center py-16 text-gray-500 font-mono-code text-xs">
            No certifications found matching your filter criteria.
          </div>
        )}
      </div>
    </section>
  );
};
