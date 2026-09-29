import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { githubRepos, personalInfo } from '../data/portfolioData';

export const GithubVault: React.FC = () => {
  const [filter, setFilter] = useState<string>('ALL');

  const categories = ['ALL', 'Data Analytics', 'Full Stack', 'FinTech', 'AI / ML Security', 'AI Automation', 'Data Science'];

  const filteredRepos = githubRepos.filter((repo) => {
    if (filter === 'ALL') return true;
    return repo.category === filter;
  });

  const getLanguageColor = (lang: string) => {
    if (lang === 'Python') return 'bg-blue-400';
    if (lang === 'JavaScript' || lang === 'TypeScript') return 'bg-yellow-400';
    if (lang === 'Java') return 'bg-orange-500';
    return 'bg-[#FFB7C5]';
  };

  return (
    <section id="github" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-[1px] bg-[#FFB7C5]" />
              <h2 className="font-mono-code text-xs uppercase tracking-[0.3em] text-[#FFB7C5]">
                OPEN SOURCE & CODE REPOSITORIES
              </h2>
            </div>
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white">
              GITHUB REPOSITORY VAULT
            </h3>
            <p className="mt-3 text-gray-400 font-light max-w-xl text-sm sm:text-base">
              Explore open-source codebases, algorithmic implementations, data science analytical engines, and full-stack repositories.
            </p>
          </div>

          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#111111] hover:bg-[#181818] border border-white/10 hover:border-[#FFB7C5]/40 text-xs font-mono-code text-white transition-all duration-300 self-start md:self-auto group"
          >
            <GithubIcon className="w-4 h-4 text-[#FFB7C5]" />
            <span>VISIT GITHUB PROFILE</span>
            <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-white" />
          </a>
        </div>

        {/* Filter Badges */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono-code whitespace-nowrap transition-all duration-200 border ${
                filter === cat
                  ? 'bg-[#FFB7C5] text-black font-semibold border-[#FFB7C5]'
                  : 'bg-[#111111] text-gray-400 border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredRepos.map((repo, idx) => (
              <motion.div
                key={repo.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-[#0B0B0B] border border-white/10 hover:border-[#FFB7C5]/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 rounded-lg bg-[#141414] text-[#FFB7C5] group-hover:scale-110 transition-transform">
                      <FolderGit2 className="w-5 h-5" />
                    </div>
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#FFB7C5] transition-colors p-1"
                      aria-label={`Open repository ${repo.name}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display font-bold text-base text-white group-hover:text-[#FFB7C5] transition-colors mb-2 block leading-snug break-all"
                  >
                    {repo.name}
                  </a>

                  <p className="text-xs text-gray-400 font-light leading-relaxed mb-6">
                    {repo.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono-code text-gray-400">
                  <div className="flex items-center space-x-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${getLanguageColor(repo.language)}`} />
                    <span className="text-gray-300">{repo.language}</span>
                  </div>

                  <span className="px-2 py-0.5 rounded bg-[#161616] text-[10px] text-gray-400 border border-white/5">
                    {repo.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
