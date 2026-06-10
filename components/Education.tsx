'use client';

import { motion } from 'framer-motion';
import { HiCalendar, HiLocationMarker, HiAcademicCap } from 'react-icons/hi';

const education = [
  {
    degree: 'Bachelor of Computer Science',
    institution: 'UFSCar',
    period: '2014 – 2018',
    location: 'São Carlos, SP, Brazil',
    note: null,
    accent: 'from-cyan-400 to-violet-500',
    dotClass: 'bg-cyan-400',
  },
  {
    degree: 'Bachelor of Computer Science',
    institution: 'RMIT University',
    period: '2016',
    location: 'Melbourne, Australia',
    note: 'University exchange in Computer Science and Business',
    accent: 'from-violet-400 to-blue-500',
    dotClass: 'bg-violet-400',
  },
];

export default function Education() {
  return (
    <section id="education">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-10"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white whitespace-nowrap">
          Education
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/60 to-transparent" />
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-5">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700/80 transition-colors duration-200 relative overflow-hidden"
          >
            {/* Gradient accent bar at top */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.accent}`} />

            <div className="flex items-start gap-4 mt-2">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${edu.accent} flex items-center justify-center shrink-0`}>
                <HiAcademicCap className="w-5 h-5 text-white" />
              </div>

              <div className="min-w-0">
                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug mb-1">
                  {edu.degree}
                </h3>
                <p className={`text-sm font-semibold mb-2 bg-gradient-to-r ${edu.accent} bg-clip-text text-transparent`}>
                  {edu.institution}
                </p>
                {edu.note && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 italic mb-2">{edu.note}</p>
                )}
                <div className="flex flex-col gap-1 text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <HiCalendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <HiLocationMarker className="w-3.5 h-3.5" />
                    {edu.location}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
