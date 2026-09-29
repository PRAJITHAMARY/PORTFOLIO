import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Target } from 'lucide-react';

const educationItems = [
  {
    year: 'PRESENT',
    category: 'UNDERGRADUATE',
    institution: "St. Joseph's College of Engineering",
    degree: 'B.E. Computer Science and Engineering',
    isCurrent: true,
  },
  {
    year: 'PREVIOUSLY',
    category: 'HIGHER SECONDARY',
    institution: 'Holy Family Convent Matriculation Higher Secondary School',
    degree: 'Higher Secondary Education',
    isCurrent: false,
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050505] relative border-t border-white/5 overflow-hidden">
      {/* Soft Ambient Background Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#FFB7C5]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-3 mb-10 sm:mb-14"
        >
          <span className="w-8 h-[1px] bg-[#FFB7C5]" />
          <h2 className="font-mono-code text-xs uppercase tracking-[0.3em] text-[#FFB7C5]">
            ABOUT ME
          </h2>
        </motion.div>

        {/* Editorial 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN: Large Statement (50% on Desktop) */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[2.6rem] xl:text-[3.1rem] text-white leading-[1.18] tracking-tight select-none">
                I TURN <br />
                IDEAS INTO <br />
                <span className="text-[#FFB7C5]">INTELLIGENT</span> <br />
                SOLUTIONS.
              </h3>
            </motion.div>

            {/* Quick Metadata Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 sm:mt-16 flex flex-wrap gap-4 pt-8 border-t border-white/10"
            >
              <div className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-[#0B0B0B] border border-white/5 text-xs font-mono-code text-gray-300">
                <MapPin className="w-3.5 h-3.5 text-[#FFB7C5]" />
                <span>Chennai, India</span>
              </div>
              <div className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-[#0B0B0B] border border-white/5 text-xs font-mono-code text-gray-300">
                <Target className="w-3.5 h-3.5 text-[#FFB7C5]" />
                <span>Data Science & AI/ML</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: About Paragraphs (50% on Desktop) */}
          <div className="lg:col-span-6 flex flex-col space-y-8">
            {/* About Narrative Paragraphs */}
            <div className="space-y-6 text-gray-300 font-light text-base sm:text-lg leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="pl-4 border-l border-white/15 hover:border-[#FFB7C5]/50 transition-colors"
              >
                I'm a Computer Science Engineering student at St. Joseph's College of Engineering, passionate about Data Science, Artificial Intelligence, Machine Learning, and Full-Stack Development.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="pl-4 border-l border-white/15 hover:border-[#FFB7C5]/50 transition-colors"
              >
                I enjoy working with data, building intelligent applications, and transforming ideas into practical digital solutions.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pl-4 border-l border-white/15 hover:border-[#FFB7C5]/50 transition-colors"
              >
                I'm continuously learning, experimenting with new technologies, and building projects that strengthen my technical and problem-solving skills.
              </motion.p>
            </div>
          </div>
        </div>

        {/* ─── Education Timeline (Journey-style) ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 sm:mt-28"
        >
          {/* Education Header — same style as Journey section */}
          <div className="flex flex-col items-start mb-12">
            <div className="flex items-center space-x-3 mb-2">
              <span className="w-8 h-[1px] bg-[#FFB7C5]" />
              <span className="font-mono-code text-xs uppercase tracking-[0.3em] text-[#FFB7C5]">
                ACADEMIC BACKGROUND
              </span>
            </div>
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              <GraduationCap className="inline-block w-8 h-8 mr-3 text-[#FFB7C5] -mt-1" />
              EDUCATION
            </h3>
          </div>

          {/* Timeline with animated vertical line */}
          <div className="relative border-l border-white/10 pl-6 sm:pl-10 space-y-10 ml-2 sm:ml-6">
            {/* Animated vertical drawn line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="absolute top-0 left-[-1px] w-[2px] bg-gradient-to-b from-[#FFB7C5] via-[#FFB7C5]/50 to-transparent"
            />

            {educationItems.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="relative group"
              >
                {/* Point Node */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#050505] border-2 border-[#FFB7C5] group-hover:scale-125 group-hover:bg-[#FFB7C5] transition-all duration-300" />

                <div className="p-6 sm:p-8 rounded-2xl bg-[#0B0B0B] border border-white/10 hover:border-[#FFB7C5]/40 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  {/* Year & Category */}
                  <div className="md:col-span-3 flex flex-col">
                    <span className="font-mono-code text-xs text-[#FFB7C5] tracking-widest font-bold">
                      {edu.year}
                    </span>
                    <span className="text-[11px] font-mono-code text-gray-500 uppercase mt-0.5">
                      {edu.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-9">
                    <h4 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-[#FFB7C5] transition-colors">
                      {edu.institution}
                    </h4>
                    <p className="mt-2 text-gray-300 font-light text-sm sm:text-base leading-relaxed">
                      {edu.degree}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
