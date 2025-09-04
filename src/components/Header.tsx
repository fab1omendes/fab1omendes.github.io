'use client';

import { useApp } from '@/contexts/AppContext';
import { getTranslation } from '@/lib/translations';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  const { language, theme, changeLanguage, toggleTheme, mounted } = useApp();

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded w-80 mx-auto mb-3"></div>
              <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded w-64 mx-auto mb-2"></div>
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/50">
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3">
              {getTranslation(language, 'title')}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-2">
              {getTranslation(language, 'subtitle')}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-500 max-w-2xl mx-auto">
              {getTranslation(language, 'content')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mt-6"
          >
            {/* Language Selector */}
            <select
              value={language}
              onChange={(e) => changeLanguage(e.target.value as 'pt' | 'en' | 'es')}
              className="px-4 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-slate-400 dark:hover:border-slate-500"
            >
              <option value="pt">🇧🇷 Português</option>
              <option value="en">🇺🇸 English</option>
              <option value="es">🇪🇸 Español</option>
            </select>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:border-slate-400 dark:hover:border-slate-500"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              ) : (
                <Sun className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              )}
            </button>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
