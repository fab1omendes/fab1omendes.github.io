'use client';

import { useApp } from '@/contexts/AppContext';
import { getTranslation } from '@/lib/translations';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function About() {
  const { language } = useApp();

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-700/50 p-8"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl mb-6"
        >
          <User className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4"
        >
          {getTranslation(language, 'about.title')}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg max-w-3xl mx-auto"
        >
          {getTranslation(language, 'about.content')}
        </motion.p>
      </div>
    </motion.section>
  );
}
