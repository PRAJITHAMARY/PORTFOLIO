import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Sparkles, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, careerOpportunities } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [selectedOpportunity, setSelectedOpportunity] = useState<string>('DATA SCIENCE');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050505] relative border-t border-white/5 overflow-hidden">
      {/* Background glow circle */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FFB7C5]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-white/10 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB7C5]" />
            <span className="text-xs font-mono-code text-[#FFB7C5] uppercase tracking-widest">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white mb-6">
            LET'S BUILD SOMETHING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFB7C5] to-white">
              EXTRAORDINARY
            </span>
          </h2>
          <p className="text-gray-400 font-light text-base sm:text-lg leading-relaxed">
            Open for internships, full-time engineering opportunities, AI/ML research collaborations, and high-impact hackathon projects.
          </p>
        </div>

        {/* Opportunity Matrix Cards */}
        <div className="mb-16">
          <h3 className="text-xs font-mono-code text-gray-400 uppercase tracking-widest text-center mb-6">
            AREAS OF COLLABORATION & ROLES
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {careerOpportunities.map((opp) => {
              const isSelected = selectedOpportunity === opp.title;
              return (
                <button
                  key={opp.title}
                  type="button"
                  onClick={() => setSelectedOpportunity(opp.title)}
                  className={`p-4 rounded-xl text-left transition-all duration-300 border flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#FFB7C5]/15 border-[#FFB7C5] text-white shadow-lg shadow-[#FFB7C5]/5'
                      : 'bg-[#0E0E0E] border-white/5 text-gray-400 hover:border-white/20 hover:text-white'
                  }`}
                >
                  <span className={`text-[11px] font-mono-code font-bold tracking-wider uppercase mb-2 ${isSelected ? 'text-[#FFB7C5]' : 'text-gray-400'}`}>
                    {opp.title}
                  </span>
                  <span className="text-[10px] font-light text-gray-500 leading-tight">
                    {opp.desc}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Contact Grid: Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Direct Details */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="p-8 rounded-2xl bg-[#0B0B0B] border border-white/10 space-y-6">
              <h4 className="font-display font-bold text-xl text-white">
                Direct Contact Information
              </h4>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Feel free to reach out directly via email or connect with me on LinkedIn and GitHub. I respond promptly.
              </p>

              {/* Email One-click copy box */}
              <div className="p-4 rounded-xl bg-[#141414] border border-white/10 flex items-center justify-between">
                <div className="flex items-center space-x-3 overflow-hidden">
                  <div className="p-2 rounded-lg bg-[#1F1F1F] text-[#FFB7C5] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <p className="text-[10px] font-mono-code text-gray-500 uppercase tracking-wider">
                      EMAIL ADDRESS
                    </p>
                    <p className="text-xs sm:text-sm font-mono-code text-white truncate">
                      {personalInfo.socials.email}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-lg bg-[#1F1F1F] hover:bg-[#FFB7C5] text-gray-300 hover:text-black transition-colors shrink-0 ml-2"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {copied && (
                <p className="text-xs font-mono-code text-[#FFB7C5] flex items-center space-x-1 animate-fadeIn">
                  <Check className="w-3.5 h-3.5" />
                  <span>Email copied to clipboard!</span>
                </p>
              )}

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/5 space-y-3">
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#141414] hover:bg-[#1A1A1A] border border-white/5 hover:border-[#FFB7C5]/30 transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <LinkedinIcon className="w-4 h-4 text-[#FFB7C5]" />
                    <span className="text-xs font-mono-code text-gray-300 group-hover:text-white">
                      LinkedIn Profile
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-[#FFB7C5] transition-colors" />
                </a>

                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#141414] hover:bg-[#1A1A1A] border border-white/5 hover:border-[#FFB7C5]/30 transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <GithubIcon className="w-4 h-4 text-[#FFB7C5]" />
                    <span className="text-xs font-mono-code text-gray-300 group-hover:text-white">
                      GitHub Profile
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-[#FFB7C5] transition-colors" />
                </a>
              </div>
            </div>

            {/* Quick Status Callout */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#FFB7C5]/10 to-transparent border border-[#FFB7C5]/20 flex items-center space-x-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFB7C5] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FFB7C5]"></span>
              </span>
              <p className="text-xs font-mono-code text-gray-300">
                Currently open for <span className="text-[#FFB7C5] font-semibold">2026 Developer & Data Roles</span>
              </p>
            </div>
          </div>

          {/* Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-[#0B0B0B] border border-white/10 relative">
              <h4 className="font-display font-bold text-xl text-white mb-2">
                Send a Message
              </h4>
              <p className="text-xs font-mono-code text-gray-400 mb-6">
                Selected Focus Area: <span className="text-[#FFB7C5]">{selectedOpportunity}</span>
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono-code text-gray-400 uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/10 text-xs font-mono-code text-white placeholder-gray-600 focus:outline-none focus:border-[#FFB7C5] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono-code text-gray-400 uppercase tracking-wider mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/10 text-xs font-mono-code text-white placeholder-gray-600 focus:outline-none focus:border-[#FFB7C5] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono-code text-gray-400 uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder={`Discussion regarding ${selectedOpportunity}`}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/10 text-xs font-mono-code text-white placeholder-gray-600 focus:outline-none focus:border-[#FFB7C5] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono-code text-gray-400 uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project, team opportunity, or question..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/10 text-xs font-mono-code text-white placeholder-gray-600 focus:outline-none focus:border-[#FFB7C5] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full py-4 rounded-xl bg-[#FFB7C5] text-black font-display font-bold text-xs tracking-widest uppercase hover:bg-white transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-[#FFB7C5]/10 disabled:opacity-50"
                >
                  {isSubmitted ? (
                    <span className="flex items-center space-x-2 text-black">
                      <Check className="w-4 h-4" />
                      <span>MESSAGE SENT SUCCESSFULLY!</span>
                    </span>
                  ) : (
                    <span className="flex items-center space-x-2">
                      <span>TRANSMIT MESSAGE</span>
                      <Send className="w-4 h-4" />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
