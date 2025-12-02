/**
 * Date formatting utilities with i18n support
 */

import type { Lang } from '../i18n';

const MONTH_NAMES = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  'zh-tw': ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
} as const;

const PRESENT_TEXT = {
  en: 'Present',
  'zh-tw': '至今',
} as const;

/**
 * Format a date string (YYYY or YYYY-MM) to localized format
 */
export function formatDate(dateStr: string, locale: Lang = 'en'): string {
  if (!dateStr) return '';
  
  // Year only format
  if (dateStr.length === 4) {
    return dateStr;
  }
  
  const [year, month] = dateStr.split('-');
  const monthNum = parseInt(month, 10);
  const monthName = MONTH_NAMES[locale][monthNum - 1];
  
  if (locale === 'zh-tw') {
    return `${year}年${monthName}`;
  }
  
  return `${monthName} ${year}`;
}

/**
 * Format a date range with optional end date
 */
export function formatDateRange(
  startDate: string,
  endDate?: string,
  locale: Lang = 'en'
): string {
  const start = formatDate(startDate, locale);
  const end = endDate ? formatDate(endDate, locale) : PRESENT_TEXT[locale];
  return `${start} - ${end}`;
}

/**
 * Format date for display in event lists (full date)
 */
export function formatFullDate(dateStr: string, locale: Lang = 'en'): string {
  const date = new Date(dateStr);
  
  if (locale === 'zh-tw') {
    return date.toLocaleDateString('zh-TW', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
  
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
