'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { HiLocationMarker, HiDownload } from 'react-icons/hi';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb-1 absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/8 dark:bg-cyan-500/12 rounded-full blur-3xl" />
        <div className="orb-2 absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/8 dark:bg-violet-500/12 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/3 dark:bg-cyan-500/4 rounded-full blur-[120px]" />
      </div>

      {/* Subtle dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(34,211,238,0.06)_1px,transparent_1px)] [background-size:32px_32px] dark:opacity-100 opacity-40" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center text-center">
        {/* Profile photo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring', bounce: 0.3 }}
          className="mb-8 relative"
        >
          <div className="relative w-36 h-36 sm:w-44 sm:h-44">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 p-[3px] glow-ring">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                <Image
                  src="/profile.jpeg"
                  alt="Lucas Hauptmann Pereira"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-[-10px] rounded-full border border-dashed border-cyan-400/25"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-3 leading-tight"
        >
          Lucas{' '}
          <span className="gradient-text">Hauptmann</span>{' '}
          Pereira
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="text-lg sm:text-xl text-cyan-600 dark:text-cyan-400 font-medium mb-4"
        >
          Senior Full Stack Ruby on Rails Engineer
        </motion.p>

        {/* Location */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm mb-8"
        >
          <HiLocationMarker className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
          <span>Sao Paulo, SP, Brazil</span>
        </motion.div>

        {/* Contact & social links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          <a
            href="https://github.com/lhpdev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-300 text-sm font-medium transition-all duration-200 hover:scale-105 border border-slate-200 dark:border-slate-700/80"
          >
            <FaGithub className="w-4 h-4" />
            github.com/lhpdev
          </a>
          <a
            href="https://www.linkedin.com/in/lhpdev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium transition-all duration-200 hover:scale-105 border border-blue-200 dark:border-blue-800/50"
          >
            <FaLinkedin className="w-4 h-4" />
            linkedin.com/in/lhpdev
          </a>
          <a
            href="mailto:lucass.hauptmann@gmail.com"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-300 text-sm font-medium transition-all duration-200 hover:scale-105 border border-slate-200 dark:border-slate-700/80"
          >
            <FaEnvelope className="w-4 h-4" />
            lucass.hauptmann@gmail.com
          </a>
          <a
            href="tel:+5511973194440"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-300 text-sm font-medium transition-all duration-200 hover:scale-105 border border-slate-200 dark:border-slate-700/80"
          >
            <FaPhone className="w-4 h-4" />
            +55 11 97319-4440
          </a>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="/lucas-hauptmann-cv.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 hover:scale-105"
          >
            <HiDownload className="w-4 h-4" />
            Download CV
          </a>
          <a
            href="#experience"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 hover:scale-105"
          >
            View Experience
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border-2 border-slate-400/30 flex items-start justify-center pt-2"
          >
            <div className="w-1 h-2 bg-cyan-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
