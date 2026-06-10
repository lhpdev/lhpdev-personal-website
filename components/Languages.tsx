'use client';

import { motion } from 'framer-motion';

const languages = [
  { name: 'Portuguese', level: 'Native', percent: 100, color: 'from-cyan-400 to-cyan-500' },
  { name: 'English', level: 'Proficient', percent: 80, color: 'from-violet-400 to-violet-500' },
  { name: 'Spanish', level: 'Intermediate', percent: 40, color: 'from-blue-400 to-blue-500' },
];

export default function Languages() {
  return (
    <section id="languages">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-10"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white whitespace-nowrap">
          Languages
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/60 to-transparent" />
      </motion.div>

      <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 space-y-7">
        {languages.map((lang, i) => (
          <motion.div
            key={lang.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                {lang.name}
              </span>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full">
                {lang.level}
              </span>
            </div>
            <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${lang.percent}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.15 + 0.3, ease: 'easeOut' }}
                className={`h-full rounded-full bg-gradient-to-r ${lang.color}`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
