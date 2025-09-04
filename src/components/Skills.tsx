'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { getTranslation, getTranslationArray } from '@/lib/translations';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

export default function Skills() {
  const { language } = useLanguage();
  const skillsItems = getTranslationArray(language, 'skills.items');

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-full">
          <Code className="w-6 h-6 text-orange-600 dark:text-orange-400" />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            {getTranslation(language, 'skills.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillsItems.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-lg border border-orange-200 dark:border-orange-700 hover:shadow-md transition-shadow"
              >
                <p className="text-gray-700 dark:text-gray-300 font-medium">{skill}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
