import { useEffect, useState } from 'react';
import type { Language } from '../types/portfolio';

const STORAGE_KEY = 'alejandro_cv_lang';

export function useLanguage() {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'es';
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === 'en' ? 'en' : 'es';
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore storage errors in private browsing
    }
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  return { lang, setLang, toggleLanguage };
}
