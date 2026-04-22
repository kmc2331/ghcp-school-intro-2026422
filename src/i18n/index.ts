import { ja } from './ja';
import { en } from './en';

export type Lang = 'ja' | 'en';

export const dictionaries = { ja, en } as const;

export function useTranslations(lang: Lang) {
  return dictionaries[lang];
}

/** ロケール別 URL を組み立てる（base path は Astro が自動付与） */
export function localePath(lang: Lang, path = ''): string {
  const clean = path.replace(/^\//, '');
  return lang === 'ja' ? `/${clean}` : `/en/${clean}`;
}
