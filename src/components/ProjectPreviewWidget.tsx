import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  Layers, 
  ShieldAlert, 
  Terminal, 
  Sliders, 
  CheckCircle2, 
  AlertCircle, 
  Compass, 
  PieChart 
} from 'lucide-react';

interface ProjectPreviewWidgetProps {
  visualType: 'chart' | 'map' | 'fintech' | 'security' | 'code' | 'dashboard' | 'analytics';
  title: string;
}

export const ProjectPreviewWidget: React.FC<ProjectPreviewWidgetProps> = ({ visualType, title }) => {
  // WhatsApp Chat Analyzer State
  const [chatTab, setChatTab] = useState<'activity' | 'sentiment' | 'lexical'>('activity');

  // Bangalore Tech Salary Decoder State
  const [expTier, setExpTier] = useState<'Junior' | 'Mid' | 'Senior'>('Mid');
  const [techDomain, setTechDomain] = useState<'Data Science' | 'AI / ML' | 'Full Stack'>('Data Science');

  // Fraud Detection Simulator State
  const [fraudSimType, setFraudSimType] = useState<'standard' | 'anomaly'>('standard');

  // SpendDNA Tab State
  const [spendTab, setSpendTab] = useState<'categories' | 'patterns'>('categories');

  return (
    <div className="w-full bg-[#090909] border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden select-none shadow-xl transition-all duration-300 group-hover:border-[#FFB7C5]/30 group-hover:shadow-[#FFB7C5]/5">
      {/* Background Soft Radial Glow */}
      <div className="absolute top-0 right-0 w-56 h-56 bg-[#FFB7C5]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Widget Window Title Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3.5 mb-5 z-10">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
          <span className="ml-2 font-mono-code text-[11px] text-gray-400 uppercase tracking-wider truncate max-w-[200px] sm:max-w-[300px]">
            {title}
          </span>
        </div>
        <span className="text-[10px] font-mono-code text-[#FFB7C5] bg-[#FFB7C5]/10 px-2.5 py-1 rounded-md border border-[#FFB7C5]/20 uppercase tracking-widest font-semibold">
          PROJECT PREVIEW
        </span>
      </div>

      {/* Widget Dynamic Visual Content Canvas */}
      <div className="z-10 w-full flex-grow flex flex-col justify-center min-h-[260px] sm:min-h-[290px]">
        {/* 01. GROUPDNA_WHATSAPP_CHAT_ANALYZER */}
        {visualType === 'chart' && (
          <div className="w-full space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs font-mono-code text-gray-300 flex items-center gap-1.5">
                <BarChart3 className="w-4 h-4 text-[#FFB7C5]" />
                <span>Chat Dataset Visualizer</span>
              </span>
              <div className="flex rounded-lg bg-[#141414] p-1 border border-white/5 text-[10px] font-mono-code">
                <button
                  type="button"
                  onClick={() => setChatTab('activity')}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    chatTab === 'activity' ? 'bg-[#FFB7C5] text-black font-bold' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Activity
                </button>
                <button
                  type="button"
                  onClick={() => setChatTab('sentiment')}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    chatTab === 'sentiment' ? 'bg-[#FFB7C5] text-black font-bold' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Sentiment
                </button>
                <button
                  type="button"
                  onClick={() => setChatTab('lexical')}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    chatTab === 'lexical' ? 'bg-[#FFB7C5] text-black font-bold' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Lexicon
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {chatTab === 'activity' && (
                <motion.div
                  key="act"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="p-4 rounded-xl bg-[#0E0E0E] border border-white/5 space-y-3"
                >
                  <div className="flex justify-between text-[11px] font-mono-code text-gray-400">
                    <span>24-Hour Message Distribution</span>
                    <span className="text-[#FFB7C5]">Peak: 18:00 – 22:00</span>
                  </div>
                  <div className="h-28 flex items-end justify-between gap-1.5 pt-4 px-1">
                    {[25, 15, 10, 8, 12, 30, 45, 60, 55, 70, 85, 95, 90, 75, 65, 80, 100, 85].map((val, idx) => (
                      <div key={idx} className="w-full flex flex-col items-center gap-1 group/bar">
                        <div
                          style={{ height: `${val}%` }}
                          className="w-full rounded-t bg-gradient-to-t from-[#1A1A1A] via-[#FFB7C5]/40 to-[#FFB7C5] group-hover/bar:brightness-125 transition-all"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-[9px] font-mono-code text-gray-500 pt-1 border-t border-white/5">
                    <span>00:00</span>
                    <span>06:00</span>
                    <span>12:00</span>
                    <span>18:00</span>
                    <span>23:59</span>
                  </div>
                </motion.div>
              )}

              {chatTab === 'sentiment' && (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="p-4 rounded-xl bg-[#0E0E0E] border border-white/5 space-y-3"
                >
                  <div className="text-[11px] font-mono-code text-gray-400">
                    NLP Sentiment Polarity Classification
                  </div>
                  <div className="space-y-2.5">
                    <div>
                      <div className="flex justify-between text-[10px] font-mono-code text-gray-300 mb-1">
                        <span>Positive Discourse</span>
                        <span className="text-[#FFB7C5]">Dominant</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-[#181818]">
                        <div className="h-full rounded-full bg-[#FFB7C5] w-[62%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[10px] font-mono-code text-gray-300 mb-1">
                        <span>Neutral / Informational</span>
                        <span className="text-gray-400">Moderate</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-[#181818]">
                        <div className="h-full rounded-full bg-white/40 w-[28%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[10px] font-mono-code text-gray-300 mb-1">
                        <span>Disagreement / Inquiry</span>
                        <span className="text-gray-500">Low</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-[#181818]">
                        <div className="h-full rounded-full bg-red-400/40 w-[10%]" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {chatTab === 'lexical' && (
                <motion.div
                  key="lex"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="p-4 rounded-xl bg-[#0E0E0E] border border-white/5 min-h-[140px] flex flex-wrap items-center justify-center gap-2.5"
                >
                  <span className="px-3 py-1.5 rounded-lg bg-[#FFB7C5]/15 text-[#FFB7C5] border border-[#FFB7C5]/30 text-xs font-mono-code font-bold">
                    #dataset
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#161616] text-gray-300 text-[11px] font-mono-code">
                    #timeline
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-white/10 text-white text-xs font-mono-code font-semibold">
                    #analytics
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#141414] text-gray-400 text-[10px] font-mono-code">
                    #frequency
                  </span>
                  <span className="px-3 py-1 rounded-md bg-[#FFB7C5]/20 text-[#FFB7C5] text-xs font-mono-code">
                    #nlp_tokens
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#161616] text-gray-300 text-[11px] font-mono-code">
                    #group_dynamics
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* 02. BUS_DRIVER_STUDENT_TRACKING_SYSTEM */}
        {visualType === 'map' && (
          <div className="w-full space-y-4">
            <div className="p-3.5 bg-[#0E0E0E] rounded-xl border border-white/10 flex items-center justify-between text-xs font-mono-code">
              <div className="flex items-center space-x-2 text-gray-300">
                <Compass className="w-4 h-4 text-[#FFB7C5] animate-spin" style={{ animationDuration: '10s' }} />
                <span>TRANSIT TELEMETRY: <strong className="text-emerald-400">ACTIVE ROUTE</strong></span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#1A1A1A] text-gray-400 border border-white/5">
                GPS LINKED
              </span>
            </div>

            {/* Route Schematic Visualizer */}
            <div className="p-4 rounded-xl bg-[#0A0A0E] border border-white/5 space-y-4">
              <div className="text-[10px] font-mono-code text-gray-400 uppercase tracking-widest">
                Transit Waypoints & Check-in Pipeline
              </div>

              {/* Waypoint nodes line */}
              <div className="relative flex items-center justify-between px-2 pt-2">
                <div className="absolute left-4 right-4 top-5 h-[2px] bg-white/10" />
                <div className="absolute left-4 w-1/2 top-5 h-[2px] bg-[#FFB7C5]" />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-[#111111] border-2 border-emerald-400 flex items-center justify-center text-[10px] text-emerald-400">
                    ✓
                  </div>
                  <span className="text-[9px] font-mono-code text-gray-400 mt-1">Terminal</span>
                </div>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-[#111111] border-2 border-emerald-400 flex items-center justify-center text-[10px] text-emerald-400">
                    ✓
                  </div>
                  <span className="text-[9px] font-mono-code text-gray-400 mt-1">Sector 4</span>
                </div>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-[#FFB7C5] text-black font-bold flex items-center justify-center text-[10px] animate-pulse">
                    ●
                  </div>
                  <span className="text-[9px] font-mono-code text-[#FFB7C5] font-semibold mt-1">In Transit</span>
                </div>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-[#111111] border-2 border-white/20 flex items-center justify-center text-[10px] text-gray-500">
                    ○
                  </div>
                  <span className="text-[9px] font-mono-code text-gray-500 mt-1">Campus Hub</span>
                </div>
              </div>

              {/* Notification feed */}
              <div className="p-2.5 rounded-lg bg-[#121212] border border-white/5 flex items-center justify-between text-[10px] font-mono-code">
                <span className="text-gray-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Student Boarding Notification Dispatched</span>
                </span>
                <span className="text-gray-500">Real-Time Sync</span>
              </div>
            </div>
          </div>
        )}

        {/* 03. SpendDNA_INDUSTRY_GRADED */}
        {visualType === 'fintech' && (
          <div className="w-full space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2 text-xs font-mono-code">
              <span className="text-gray-300 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#FFB7C5]" />
                <span>Expense Intelligence Engine</span>
              </span>
              <div className="flex rounded-lg bg-[#141414] p-1 border border-white/5 text-[10px] font-mono-code">
                <button
                  type="button"
                  onClick={() => setSpendTab('categories')}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    spendTab === 'categories' ? 'bg-[#FFB7C5] text-black font-bold' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Categories
                </button>
                <button
                  type="button"
                  onClick={() => setSpendTab('patterns')}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    spendTab === 'patterns' ? 'bg-[#FFB7C5] text-black font-bold' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Anomalies
                </button>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0E0E0E] border border-white/5 space-y-3.5">
              {spendTab === 'categories' ? (
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-[11px] font-mono-code text-gray-300 mb-1">
                      <span>Cloud Infrastructure & Hosting</span>
                      <span className="text-[#FFB7C5]">Primary Expense</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#181818]">
                      <div className="h-full rounded-full bg-[#FFB7C5] w-[52%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[11px] font-mono-code text-gray-300 mb-1">
                      <span>Developer Software & Tooling</span>
                      <span className="text-gray-400">Regular</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#181818]">
                      <div className="h-full rounded-full bg-white/50 w-[30%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[11px] font-mono-code text-gray-300 mb-1">
                      <span>Recurring API Subscriptions</span>
                      <span className="text-gray-500">Optimized</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#181818]">
                      <div className="h-full rounded-full bg-pink-300/40 w-[18%]" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-2 text-[11px] font-mono-code">
                  <div className="p-2.5 rounded-lg bg-[#141414] border border-amber-500/20 flex items-center justify-between text-amber-300">
                    <span className="flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Recurring Subscription Renewal Flagged</span>
                    </span>
                    <span className="text-[10px] text-gray-400">Review</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#141414] border border-emerald-500/20 flex items-center justify-between text-emerald-300">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>No Duplicate Transaction Anomalies</span>
                    </span>
                    <span className="text-[10px] text-gray-400">Healthy</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 04. REDFLAG_THE_FRAUD_FILES */}
        {visualType === 'security' && (
          <div className="w-full space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2 text-xs font-mono-code">
              <span className="text-gray-300 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-[#FFB7C5]" />
                <span>ML Fraud Classification Pipeline</span>
              </span>
              <div className="flex rounded-lg bg-[#141414] p-1 border border-white/5 text-[10px] font-mono-code">
                <button
                  type="button"
                  onClick={() => setFraudSimType('standard')}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    fraudSimType === 'standard' ? 'bg-[#FFB7C5] text-black font-bold' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Normal Sample
                </button>
                <button
                  type="button"
                  onClick={() => setFraudSimType('anomaly')}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    fraudSimType === 'anomaly' ? 'bg-[#FFB7C5] text-black font-bold' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Anomaly Sample
                </button>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0E0E0E] border border-white/5 space-y-3 font-mono-code">
              <div className="text-[10px] text-gray-400 uppercase tracking-widest">
                Feature Weights & Decision Boundary
              </div>

              <div className="space-y-2 text-[11px]">
                <div className="flex justify-between items-center text-gray-300">
                  <span>Transaction Velocity Variance:</span>
                  <span className={fraudSimType === 'anomaly' ? 'text-red-400 font-bold' : 'text-gray-400'}>
                    {fraudSimType === 'anomaly' ? 'High Outlier' : 'Baseline'}
                  </span>
                </div>
                <div className="flex justify-between items-center text-gray-300">
                  <span>Geolocation Delta Distance:</span>
                  <span className={fraudSimType === 'anomaly' ? 'text-red-400 font-bold' : 'text-gray-400'}>
                    {fraudSimType === 'anomaly' ? 'Suspicious Jump' : 'Expected Range'}
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-gray-400">Classifier Output:</span>
                {fraudSimType === 'anomaly' ? (
                  <span className="px-2.5 py-1 rounded bg-red-500/20 text-red-300 border border-red-500/30 text-[10px] font-bold">
                    FLAGGED ANOMALY
                  </span>
                ) : (
                  <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold">
                    LEGITIMATE TRANSACTION
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* 05. SENTINEL-X */}
        {visualType === 'code' && (
          <div className="w-full space-y-3 font-mono-code">
            <div className="p-4 bg-[#0A0A0C] rounded-xl border border-white/10 space-y-3">
              <div className="flex items-center justify-between border-b border-white/5 pb-2 text-xs">
                <div className="flex items-center space-x-2 text-[#FFB7C5]">
                  <Terminal className="w-4 h-4" />
                  <span className="font-bold">SENTINEL-X TELEMETRY</span>
                </div>
                <span className="text-[10px] text-emerald-400">DIAGNOSTICS ONLINE</span>
              </div>

              <div className="space-y-1.5 text-[11px] text-gray-300 leading-relaxed">
                <div className="flex items-center space-x-2 text-gray-400">
                  <span className="text-[#FFB7C5] font-bold">&gt;</span>
                  <span>Ingesting infrastructure log stream telemetry...</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <span className="text-emerald-400 font-bold">&gt;</span>
                  <span>Signature analysis scan: <span className="text-emerald-400 font-semibold">Zero Anomaly Violations</span></span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <span className="text-[#FFB7C5] font-bold">&gt;</span>
                  <span>System health check status: <span className="text-white font-medium">Optimal Baseline</span></span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 06. BANGALORE_TECH_SALARY_DECODER */}
        {visualType === 'analytics' && (
          <div className="w-full space-y-4">
            <div className="flex items-center justify-between text-xs font-mono-code text-gray-300">
              <span className="flex items-center gap-1.5">
                <Sliders className="w-4 h-4 text-[#FFB7C5]" />
                <span>Salary Estimation Workflow</span>
              </span>
              <span className="text-[10px] text-gray-400">Regression Model</span>
            </div>

            <div className="p-4 bg-[#0E0E0E] rounded-xl border border-white/5 space-y-3.5">
              {/* Experience Tier Selector */}
              <div>
                <span className="text-[10px] font-mono-code text-gray-400 block mb-1.5 uppercase">
                  Select Experience Tier
                </span>
                <div className="grid grid-cols-3 gap-2 text-[10px] font-mono-code">
                  {(['Junior', 'Mid', 'Senior'] as const).map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => setExpTier(tier)}
                      className={`py-1.5 rounded-lg border transition-all ${
                        expTier === tier
                          ? 'bg-[#FFB7C5] text-black font-bold border-[#FFB7C5]'
                          : 'bg-[#141414] text-gray-400 border-white/5 hover:text-white'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Domain Selector */}
              <div>
                <span className="text-[10px] font-mono-code text-gray-400 block mb-1.5 uppercase">
                  Target Domain
                </span>
                <div className="grid grid-cols-3 gap-2 text-[10px] font-mono-code">
                  {(['Data Science', 'AI / ML', 'Full Stack'] as const).map((dom) => (
                    <button
                      key={dom}
                      type="button"
                      onClick={() => setTechDomain(dom)}
                      className={`py-1.5 rounded-lg border transition-all truncate px-1 ${
                        techDomain === dom
                          ? 'bg-[#FFB7C5] text-black font-bold border-[#FFB7C5]'
                          : 'bg-[#141414] text-gray-400 border-white/5 hover:text-white'
                      }`}
                    >
                      {dom}
                    </button>
                  ))}
                </div>
              </div>

              {/* Neutral Estimation Output */}
              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs font-mono-code">
                <span className="text-gray-400">Model Output:</span>
                <span className="text-[#FFB7C5] font-semibold">
                  {expTier} • {techDomain} Regression Curve
                </span>
              </div>
            </div>
          </div>
        )}

        {/* 07. SALES_OPERATION_ANALYTICS */}
        {visualType === 'dashboard' && (
          <div className="w-full space-y-4">
            <div className="flex items-center justify-between text-xs font-mono-code text-gray-300">
              <span className="flex items-center gap-1.5">
                <PieChart className="w-4 h-4 text-[#FFB7C5]" />
                <span>Executive Operations Dashboard</span>
              </span>
              <span className="text-[10px] text-[#FFB7C5] font-semibold">Power BI Model</span>
            </div>

            <div className="p-4 bg-[#0E0E0E] rounded-xl border border-white/5 space-y-3 font-mono-code">
              <div className="grid grid-cols-2 gap-2 text-center">
                <div className="p-2.5 bg-[#141414] rounded-lg border border-white/5">
                  <span className="text-[9px] text-gray-500 block uppercase">Operational Velocity</span>
                  <span className="text-xs font-bold text-white">Continuous</span>
                </div>
                <div className="p-2.5 bg-[#141414] rounded-lg border border-white/5">
                  <span className="text-[9px] text-gray-500 block uppercase">Data Dimensions</span>
                  <span className="text-xs font-bold text-[#FFB7C5]">Multi-Regional</span>
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <div className="flex justify-between text-[10px] text-gray-400">
                  <span>Regional KPI Performance</span>
                  <span className="text-emerald-400">Positive Trend</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#181818] flex overflow-hidden">
                  <div className="bg-[#FFB7C5] h-full w-[40%]" />
                  <div className="bg-white/40 h-full w-[35%]" />
                  <div className="bg-pink-300/40 h-full w-[25%]" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
