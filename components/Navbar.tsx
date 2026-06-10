'use client';

import { useTheme } from '@/context/ThemeContext';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSun, HiMoon, HiDownload } from 'react-icons/hi';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setVisible(y < lastY || y < 80);
      setLastY(y);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastY]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled
              ? 'bg-white/80 dark:bg-[#06070d]/85 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-800/60 shadow-sm'
              : 'bg-transparent'
          }`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <span className="text-lg font-bold gradient-text tracking-tight">LHP</span>

            <div className="flex items-center gap-3">
              <a
                href="/lucas-hauptmann-cv.pdf"
                download
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-500 dark:text-cyan-400 border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-200"
              >
                <HiDownload className="w-4 h-4" />
                <span className="hidden sm:inline">Download CV</span>
              </a>

              <button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-all duration-200 cursor-pointer"
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? (
                  <HiSun className="w-5 h-5 text-amber-400" />
                ) : (
                  <HiMoon className="w-5 h-5 text-slate-600" />
                )}
              </button>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
