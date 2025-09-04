'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { getTranslation } from '@/lib/translations';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function About() {
  const { language } = useLanguage();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
          <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            {getTranslation(language, 'about.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {getTranslation(language, 'about.content')}
          </p>
        </div>
      </div>
    </motion.section>
  );
}
