import en from './en.json';
import zhTw from './zh-tw.json';

export const languages = {
  en: 'English',
  'zh-tw': '繁體中文',
} as const;

export const defaultLang = 'en' as const;

export type Lang = keyof typeof languages;

export const translations = {
  en,
  'zh-tw': zhTw,
} as const;

// Base path for GitHub Pages deployment (must match astro.config.mjs)
const BASE_PATH = import.meta.env.BASE_URL || '/';

/**
 * Get translations for a specific language
 */
export function useTranslations(lang: Lang) {
  return translations[lang] || translations[defaultLang];
}

/**
 * Get the current language from URL path
 */
export function getLangFromUrl(url: URL): Lang {
  // Remove base path before extracting language
  const pathWithoutBase = url.pathname.replace(BASE_PATH.replace(/\/$/, ''), '');
  const segments = pathWithoutBase.split('/').filter(Boolean);
  const lang = segments[0];
  
  if (lang in languages) {
    return lang as Lang;
  }
  return defaultLang;
}

/**
 * Get translated URL path (includes base path)
 */
export function getTranslatedPath(path: string, lang: Lang): string {
  // Remove leading slash and any existing language prefix
  const cleanPath = path.replace(/^\//, '').replace(/^(en|zh-tw)\//, '');
  
  // Normalize base path
  const base = BASE_PATH.replace(/\/$/, '');
  
  if (lang === defaultLang) {
    return cleanPath ? `${base}/${cleanPath}` : `${base}/`;
  }
  
  return cleanPath ? `${base}/${lang}/${cleanPath}` : `${base}/${lang}/`;
}

/**
 * Get alternate language links for SEO
 */
export function getAlternateLinks(currentPath: string) {
  // Remove base path and language prefix
  const base = BASE_PATH.replace(/\/$/, '');
  const pathWithoutBase = currentPath.replace(base, '');
  const cleanPath = pathWithoutBase.replace(/^\//, '').replace(/^(en|zh-tw)\//, '');
  
  return Object.keys(languages).map((lang) => ({
    lang,
    href: lang === defaultLang 
      ? (cleanPath ? `${base}/${cleanPath}` : `${base}/`)
      : (cleanPath ? `${base}/${lang}/${cleanPath}` : `${base}/${lang}/`),
  }));
}
