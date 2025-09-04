'use client';

import { useApp } from '@/contexts/AppContext';
import { getTranslation, getTranslationArrayOfObjects } from '@/lib/translations';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const { language } = useApp();
  const experienceItems = getTranslationArrayOfObjects(language, 'experience.items') as Array<{
    title: string;
    description: string;
  }>;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200/50 dark:border-slate-700/50 p-8"
    >
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl mb-6"
        >
          <Briefcase className="w-8 h-8 text-green-600 dark:text-green-400" />
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl font-bold text-slate-900 dark:text-slate-100"
        >
          {getTranslation(language, 'experience.title')}
        </motion.h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {experienceItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-6 border border-slate-200/50 dark:border-slate-600/50"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
              {item.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
