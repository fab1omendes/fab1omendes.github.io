'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { getTranslation, getTranslationArrayOfObjects } from '@/lib/translations';
import { motion } from 'framer-motion';
import { FolderOpen } from 'lucide-react';

export default function Projects() {
  const { language } = useLanguage();
  const projectsItems = getTranslationArrayOfObjects(language, 'projects.items') as Array<{
    title: string;
    description: string;
  }>;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full">
          <FolderOpen className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            {getTranslation(language, 'projects.title')}
          </h2>
          <div className="space-y-6">
            {projectsItems.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 rounded-lg border border-indigo-200 dark:border-indigo-700 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-indigo-800 dark:text-indigo-200 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
