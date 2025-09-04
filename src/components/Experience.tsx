'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { getTranslation, getTranslationArrayOfObjects } from '@/lib/translations';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const { language } = useLanguage();
  const experienceItems = getTranslationArrayOfObjects(language, 'experience.items') as Array<{
    title: string;
    description: string;
  }>;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
          <Briefcase className="w-6 h-6 text-green-600 dark:text-green-400" />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            {getTranslation(language, 'experience.title')}
          </h2>
          <div className="space-y-6">
            {experienceItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-4 border-green-500 pl-6 relative"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full"></div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
