import ja from './ja.json';
import en from './en.json';

export type Lang = 'ja' | 'en';

const dicts = { ja, en } as const;

export type Dict = typeof ja;

export function getDict(lang: Lang): Dict {
  return (dicts[lang] ?? dicts.ja) as Dict;
}

/**
 * Get the language for the current URL pathname.
 * Anything under `/en/` is English; everything else is Japanese.
 */
export function getLangFromUrl(url: URL): Lang {
  const [, maybeLocale] = url.pathname.split('/').filter(Boolean).slice(
    // strip the base prefix segment if present
    url.pathname.startsWith(import.meta.env.BASE_URL)
      ? Math.max(0, import.meta.env.BASE_URL.split('/').filter(Boolean).length - 0)
      : 0
  );
  return maybeLocale === 'en' ? 'en' : 'ja';
}

/** Build a localized in-site path that respects Astro's `base`. */
export function localizedPath(lang: Lang, path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'ja') return `${base}${clean}`;
  // for English, prefix /en/
  if (clean === '/' || clean === '') return `${base}/en/`;
  return `${base}/en${clean}`;
}

/** Convenience translator with dot-paths, e.g. t(d, 'hero.title'). */
export function t(dict: Dict, key: string): string {
  return key
    .split('.')
    .reduce<unknown>((acc, k) => (acc && typeof acc === 'object' ? (acc as Record<string, unknown>)[k] : undefined), dict) as string ?? key;
}
