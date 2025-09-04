'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { useTheme } from '@/hooks/useTheme';
import { getTranslation } from '@/lib/translations';
import { Sun, Moon, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  const { language, changeLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-gray-100 dark:bg-gray-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {getTranslation(language, 'title')}
            </h1>
            <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">
              {getTranslation(language, 'subtitle')}
            </p>
            <p className="text-xs mt-1 text-gray-500 dark:text-gray-400">
              {getTranslation(language, 'content')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            {/* Language Selector */}
            <div className="relative">
              <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
              <select
                value={language}
                onChange={(e) => changeLanguage(e.target.value as 'pt' | 'en' | 'es')}
                className="border rounded-lg px-10 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              >
                <option value="pt">PT</option>
                <option value="en">EN</option>
                <option value="es">ES</option>
              </select>
            </div>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Sun className="w-5 h-5 text-yellow-500" />
              )}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
