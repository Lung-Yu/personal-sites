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
  const [, lang] = url.pathname.split('/');
  if (lang in languages) {
    return lang as Lang;
  }
  return defaultLang;
}

/**
 * Get translated URL path
 */
export function getTranslatedPath(path: string, lang: Lang): string {
  // Remove leading slash and any existing language prefix
  const cleanPath = path.replace(/^\//, '').replace(/^(en|zh-tw)\//, '');
  
  if (lang === defaultLang) {
    return `/${cleanPath}`;
  }
  
  return `/${lang}/${cleanPath}`;
}

/**
 * Get alternate language links for SEO
 */
export function getAlternateLinks(currentPath: string) {
  const cleanPath = currentPath.replace(/^\//, '').replace(/^(en|zh-tw)\//, '');
  
  return Object.keys(languages).map((lang) => ({
    lang,
    href: lang === defaultLang ? `/${cleanPath}` : `/${lang}/${cleanPath}`,
  }));
}
