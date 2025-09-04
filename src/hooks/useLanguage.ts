'use client';

import { useEffect, useState } from 'react';

type Language = 'pt' | 'en' | 'es';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('pt');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('language', language);
    }
  }, [language, mounted]);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  return { language, changeLanguage, mounted };
}
