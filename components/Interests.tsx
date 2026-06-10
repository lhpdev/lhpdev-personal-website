'use client';

import { motion } from 'framer-motion';
import { FaMusic, FaPlane, FaMountain } from 'react-icons/fa';

const interests = [
  {
    label: 'Playing Music',
    Icon: FaMusic,
    description: 'Guitar, bass and exploring different genres',
    bgClass: 'bg-cyan-50 dark:bg-cyan-900/20',
    borderClass: 'border-cyan-200 dark:border-cyan-800/50',
    iconClass: 'text-cyan-500 dark:text-cyan-400',
    glowClass: 'group-hover:shadow-cyan-500/20',
  },
  {
    label: 'Traveling',
    Icon: FaPlane,
    description: 'Exploring new cultures and perspectives',
    bgClass: 'bg-violet-50 dark:bg-violet-900/20',
    borderClass: 'border-violet-200 dark:border-violet-800/50',
    iconClass: 'text-violet-500 dark:text-violet-400',
    glowClass: 'group-hover:shadow-violet-500/20',
  },
  {
    label: 'Hiking',
    Icon: FaMountain,
    description: 'Trails, nature and the great outdoors',
    bgClass: 'bg-emerald-50 dark:bg-emerald-900/20',
    borderClass: 'border-emerald-200 dark:border-emerald-800/50',
    iconClass: 'text-emerald-500 dark:text-emerald-400',
    glowClass: 'group-hover:shadow-emerald-500/20',
  },
];

export default function Interests() {
  return (
    <section id="interests">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-10"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white whitespace-nowrap">
          Interests
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/60 to-transparent" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {interests.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className={`group p-6 rounded-2xl border ${item.bgClass} ${item.borderClass} transition-all duration-200 hover:shadow-lg ${item.glowClass} cursor-default`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-white dark:bg-slate-900/60 shadow-sm`}>
              <item.Icon className={`w-6 h-6 ${item.iconClass}`} />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">{item.label}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800/80 text-center text-xs text-slate-400 dark:text-slate-600"
      >
        © {new Date().getFullYear()} Lucas Hauptmann Pereira
      </motion.div>
    </section>
  );
}
