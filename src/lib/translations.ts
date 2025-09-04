import ptTranslations from '../../public/locales/pt/common.json';
import enTranslations from '../../public/locales/en/common.json';
import esTranslations from '../../public/locales/es/common.json';

export type Language = 'pt' | 'en' | 'es';

export const translations = {
  pt: ptTranslations,
  en: enTranslations,
  es: esTranslations,
};

export function getTranslation(language: Language, key: string): string {
  const keys = key.split('.');
  let value: unknown = translations[language];
  
  for (const k of keys) {
    value = (value as Record<string, unknown>)?.[k];
  }
  
  return (value as string) || key;
}

export function getTranslationArray(language: Language, key: string): string[] {
  const keys = key.split('.');
  let value: unknown = translations[language];
  
  for (const k of keys) {
    value = (value as Record<string, unknown>)?.[k];
  }
  
  return (value as string[]) || [];
}

export function getTranslationObject(language: Language, key: string): Record<string, unknown> {
  const keys = key.split('.');
  let value: unknown = translations[language];
  
  for (const k of keys) {
    value = (value as Record<string, unknown>)?.[k];
  }
  
  return (value as Record<string, unknown>) || {};
}

export function getTranslationArrayOfObjects(language: Language, key: string): Array<Record<string, unknown>> {
  const keys = key.split('.');
  let value: unknown = translations[language];
  
  for (const k of keys) {
    value = (value as Record<string, unknown>)?.[k];
  }
  
  return (value as Array<Record<string, unknown>>) || [];
}
