'use client';

import { useApp } from '@/contexts/AppContext';
import { getTranslation, getTranslationArray } from '@/lib/translations';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

export default function Skills() {
  const { language } = useApp();
  const skillsItems = getTranslationArray(language, 'skills.items');

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-700/50 p-8"
    >
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-2xl mb-6"
        >
          <Code className="w-8 h-8 text-orange-600 dark:text-orange-400" />
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl font-bold text-slate-900 dark:text-slate-100"
        >
          {getTranslation(language, 'skills.title')}
        </motion.h2>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillsItems.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-slate-200/50 dark:border-slate-600/50 hover:bg-slate-100 dark:hover:bg-slate-700/70 transition-colors"
          >
            <div className="w-3 h-3 bg-orange-400 dark:bg-orange-500 rounded-full flex-shrink-0"></div>
            <p className="text-slate-600 dark:text-slate-300 font-medium">
              {skill}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
