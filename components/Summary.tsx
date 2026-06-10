'use client';

import { motion } from 'framer-motion';

export default function Summary() {
  return (
    <section id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-10"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white whitespace-nowrap">
          About
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/60 to-transparent" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 backdrop-blur-sm overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-violet-500 rounded-l-2xl" />
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg pl-4">
          A Senior Software Engineer with a deep passion for leveraging technology to drive
          sustainability, equity, and long-term prosperity. With a diverse academic background
          shaped by international experiences in the{' '}
          <span className="text-cyan-600 dark:text-cyan-400 font-medium">USA and Australia</span>,
          he holds a Bachelor of Computer Science and brings over{' '}
          <span className="text-cyan-600 dark:text-cyan-400 font-medium">
            eight years of hands-on experience
          </span>{' '}
          delivering high-impact solutions for international clients. His work is focused on{' '}
          <span className="text-cyan-600 dark:text-cyan-400 font-medium">
            Ruby on Rails and React.js
          </span>
          , complemented by a strong command of modern development practices and a proactive
          adoption of AI-assisted engineering tools to accelerate delivery, enhance code quality,
          and maintain high standards of reliability and maintainability.
        </p>
        {/* Decorative corner glow */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-violet-500/5 rounded-full blur-2xl pointer-events-none" />
      </motion.div>
    </section>
  );
}
