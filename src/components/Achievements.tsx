import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, Medal, Users, Sparkles, Users2, ShieldCheck } from 'lucide-react';
import { featuredAchievements, secondaryAchievements, teamMembers } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hackathons' | 'team'>('hackathons');

  return (
    <section id="hackathons" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050505] relative border-t border-white/5 overflow-hidden">
      {/* Background ambient blush glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#FFB7C5]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-[1px] bg-[#FFB7C5]" />
              <h2 className="font-mono-code text-xs uppercase tracking-[0.3em] text-[#FFB7C5]">
                RECOGNITION & COLLABORATION
              </h2>
            </div>
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white">
              HACKATHONS & ACHIEVEMENTS
            </h3>
            <p className="mt-3 text-gray-400 font-light max-w-xl text-sm sm:text-base">
              Competitive coding sprints, panel recognitions, nationwide rankings, and collaborative project leadership.
            </p>
          </div>

          {/* Toggle Tab */}
          <div className="flex p-1 bg-[#111111] rounded-full border border-white/10 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('hackathons')}
              className={`px-5 py-2 rounded-full text-xs font-mono-code font-semibold tracking-wider transition-all duration-300 flex items-center space-x-2 ${
                activeTab === 'hackathons'
                  ? 'bg-[#FFB7C5] text-black shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>HACKATHONS</span>
            </button>
            <button
              onClick={() => setActiveTab('team')}
              id="team"
              className={`px-5 py-2 rounded-full text-xs font-mono-code font-semibold tracking-wider transition-all duration-300 flex items-center space-x-2 ${
                activeTab === 'team'
                  ? 'bg-[#FFB7C5] text-black shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>CORE TEAM</span>
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'hackathons' ? (
            <motion.div
              key="hackathons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-16"
            >
              {/* Featured Achievements */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredAchievements.map((item, idx) => {
                  const getBadgeColor = () => {
                    switch (item.badgeType) {
                      case 'PANEL WINNER':
                        return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30';
                      case 'RANK':
                        return 'bg-[#FFB7C5]/15 text-[#FFB7C5] border-[#FFB7C5]/40';
                      case 'TOP 50':
                        return 'bg-amber-500/10 text-amber-300 border-amber-500/30';
                      default:
                        return 'bg-purple-500/10 text-purple-300 border-purple-500/30';
                    }
                  };

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.15 }}
                      className="relative p-8 rounded-2xl bg-gradient-to-b from-[#111111] to-[#0A0A0A] border border-white/10 hover:border-[#FFB7C5]/40 transition-all duration-300 group flex flex-col justify-between"
                    >
                      {/* Top Accent line glow */}
                      <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#FFB7C5]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div>
                        {/* Badge */}
                        <div className="flex items-center justify-between mb-6">
                          <span className={`px-3 py-1 rounded-full text-[11px] font-mono-code font-bold tracking-wider border ${getBadgeColor()}`}>
                            {item.badgeType}
                          </span>
                          <div className="w-9 h-9 rounded-xl bg-[#181818] border border-white/5 flex items-center justify-center text-[#FFB7C5] group-hover:scale-110 transition-transform">
                            {idx === 0 && <Trophy className="w-4 h-4" />}
                            {idx === 1 && <Medal className="w-4 h-4" />}
                            {idx === 2 && <Award className="w-4 h-4" />}
                          </div>
                        </div>

                        {/* Title */}
                        <h4 className="font-display font-bold text-xl text-white mb-2 group-hover:text-[#FFB7C5] transition-colors leading-snug">
                          {item.title}
                        </h4>

                        {/* Award / Organization */}
                        <div className="mb-4">
                          <p className="text-base font-semibold text-[#FFB7C5]">
                            {item.award}
                          </p>
                          <p className="text-xs font-mono-code text-gray-400">
                            {item.organization}
                          </p>
                        </div>

                        {/* Details */}
                        <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                          {item.details}
                        </p>
                      </div>

                      {/* Extra Meta Tags (Participants, Duration) */}
                      {(item.participants || item.duration) && (
                        <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-3 text-xs font-mono-code text-gray-400">
                          {item.participants && (
                            <span className="px-2.5 py-1 rounded-md bg-[#161616] text-gray-300">
                              ⚡ {item.participants}
                            </span>
                          )}
                          {item.duration && (
                            <span className="px-2.5 py-1 rounded-md bg-[#161616] text-gray-300">
                              ⏱️ {item.duration}
                            </span>
                          )}
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Additional Hackathons & Sprints */}
              <div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/10">
                <div className="flex items-center space-x-2 mb-6">
                  <Sparkles className="w-4 h-4 text-[#FFB7C5]" />
                  <h4 className="text-xs font-mono-code text-gray-300 tracking-widest uppercase">
                    ADDITIONAL HACKATHONS & INNOVATION SPRINTS PARTICIPATED
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {secondaryAchievements.map((hackathon) => (
                    <div
                      key={hackathon.id}
                      className="p-4 rounded-xl bg-[#111111]/70 border border-white/5 hover:border-[#FFB7C5]/30 transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-[#FFB7C5]" />
                        <div>
                          <p className="font-display font-medium text-white text-sm group-hover:text-[#FFB7C5] transition-colors">
                            {hackathon.name}
                          </p>
                          <p className="text-[11px] font-mono-code text-gray-500">
                            {hackathon.type}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-mono-code text-gray-400 px-2 py-1 bg-[#181818] rounded">
                        {hackathon.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="team"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {/* Team Spotlight Intro */}
              <div className="p-6 rounded-2xl bg-[#111111]/80 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FFB7C5]/10 border border-[#FFB7C5]/30 flex items-center justify-center text-[#FFB7C5]">
                    <Users2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg text-white">
                      COLLABORATIVE HACKATHON & PROJECT SQUAD
                    </h4>
                    <p className="text-xs font-mono-code text-gray-400">
                      Cross-functional developer squad leading technical hackathon builds & production projects
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-xs font-mono-code text-[#FFB7C5] bg-[#181818] px-4 py-2 rounded-full border border-white/10">
                  <ShieldCheck className="w-4 h-4" />
                  <span>HIGH-IMPACT TEAMWORK</span>
                </div>
              </div>

              {/* Team Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-[#0C0C0C] border border-white/10 hover:border-[#FFB7C5]/40 transition-all duration-300 group flex flex-col items-center text-center"
                  >
                    {/* Initials Avatar */}
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.avatarBg} border border-white/15 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-lg`}>
                      <span className="font-display font-extrabold text-2xl text-white tracking-wider">
                        {member.initials}
                      </span>
                    </div>

                    <h5 className="font-display font-bold text-base text-white group-hover:text-[#FFB7C5] transition-colors mb-1">
                      {member.name}
                    </h5>

                    <p className="text-xs font-mono-code text-gray-400 mb-4">
                      {member.role}
                    </p>

                    {member.name.includes("PRAJITHA") && (
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono-code font-bold tracking-wider bg-[#FFB7C5] text-black uppercase shadow-xs">
                        TEAM LEAD & ARCHITECT
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
