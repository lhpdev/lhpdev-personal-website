'use client';

import { motion } from 'framer-motion';

interface SkillGroup {
  label: string;
  skills: string[];
  badgeClass: string;
  labelClass: string;
}

const skillGroups: SkillGroup[] = [
  {
    label: 'Backend',
    skills: ['Ruby', 'Ruby on Rails', 'Sidekiq', 'GraphQL', 'Rest API', 'SQL', 'API Design', 'API Integration'],
    badgeClass: 'bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/50 hover:bg-cyan-100 dark:hover:bg-cyan-900/40',
    labelClass: 'text-cyan-600 dark:text-cyan-400',
  },
  {
    label: 'Frontend',
    skills: ['React.js', 'JavaScript', 'ES6', 'HTML', 'CSS', 'Tailwind', 'Bootstrap', 'Stimulus', 'jQuery', 'Redux'],
    badgeClass: 'bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800/50 hover:bg-violet-100 dark:hover:bg-violet-900/40',
    labelClass: 'text-violet-600 dark:text-violet-400',
  },
  {
    label: 'Databases & Cache',
    skills: ['Postgres', 'MongoDB', 'Redis', 'Elasticsearch', 'Caching'],
    badgeClass: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50 hover:bg-emerald-100 dark:hover:bg-emerald-900/40',
    labelClass: 'text-emerald-600 dark:text-emerald-400',
  },
  {
    label: 'Testing',
    skills: ['Rspec', 'Cucumber', 'Jest', 'Enzyme', 'Automated Testing'],
    badgeClass: 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/50 hover:bg-amber-100 dark:hover:bg-amber-900/40',
    labelClass: 'text-amber-600 dark:text-amber-400',
  },
  {
    label: 'DevOps & Cloud',
    skills: ['Docker', 'AWS', 'Heroku', 'CI/CD', 'Git', 'GitHub', 'Cloudflare'],
    badgeClass: 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50 hover:bg-blue-100 dark:hover:bg-blue-900/40',
    labelClass: 'text-blue-600 dark:text-blue-400',
  },
  {
    label: 'AI & Tools',
    skills: ['Windsurf', 'CodeRabbit', 'Agile Development'],
    badgeClass: 'bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800/50 hover:bg-rose-100 dark:hover:bg-rose-900/40',
    labelClass: 'text-rose-600 dark:text-rose-400',
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const badge = {
  hidden: { opacity: 0, scale: 0.75 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring' as const, stiffness: 300, damping: 20 } },
};

export default function Skills() {
  return (
    <section id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-10"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white whitespace-nowrap">
          Skills
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/60 to-transparent" />
      </motion.div>

      <div className="space-y-6">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: gi * 0.08 }}
            className="p-5 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80"
          >
            <p className={`text-xs font-semibold uppercase tracking-widest mb-4 ${group.labelClass}`}>
              {group.label}
            </p>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {group.skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={badge}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors duration-150 cursor-default ${group.badgeClass}`}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
