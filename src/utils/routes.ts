/* ─────────────────────────────────────────────────────────────────
   routes.ts — thin routing layer over the canonical SEO config.
   All page/path knowledge lives in seo.config.ts; nothing is duplicated
   here, which is what previously let sitemap.xml drift to `/about`
   while the app served `/about-us`.
   ───────────────────────────────────────────────────────────────── */
import {
  SEO_PAGE_CONFIG,
  getPageConfig,
  getPageConfigByPath,
  resolvePath,
  HOME_KEY,
  NOT_FOUND_KEY,
  type PageKey,
} from '@/utils/seo.config'

export type { PageKey }
export { NOT_FOUND_KEY, HOME_KEY }

/**
 * Label → canonical path. Includes the display labels used by the Navbar,
 * Footer and mobile nav so `<a href>` always points at a canonical URL.
 */
export const PAGE_TO_PATH: Record<string, string> = {
  ...Object.fromEntries(SEO_PAGE_CONFIG.map((page) => [page.key, page.path])),
  // Display-label synonyms used in the UI.
  'About': '/about-us',
  'Contact': '/book',
  'For corporates': '/services',
  'Corporates': '/services',
  'ComingSoon': '/coming-soon',
  'coming soon': '/coming-soon',
}

export function getCanonicalPath(page: string): string {
  return PAGE_TO_PATH[page] ?? '/'
}

/**
 * Resolves the current browser location to a page key.
 * Unknown paths resolve to 'Not Found' — never silently to 'Home', which
 * would make every mistyped URL a soft 404 duplicate of the homepage.
 */
export function getPageFromLocation(): PageKey {
  if (typeof window === 'undefined') return HOME_KEY

  // Hash routing support (e.g. #/about-us), kept for backwards compatibility.
  const rawHash = window.location.hash.replace(/^#\/?/, '').trim()
  if (rawHash) {
    const fromHash = getPageConfigByPath(resolvePath(`/${rawHash}`))
    if (fromHash) return fromHash.key
  }

  const fromPath = getPageConfigByPath(resolvePath(window.location.pathname))
  return fromPath ? fromPath.key : NOT_FOUND_KEY
}

export const PAGE_TITLES: Record<string, string> = Object.fromEntries(
  SEO_PAGE_CONFIG.map((page) => [page.key, page.title]),
)

export const PAGE_DESCRIPTIONS: Record<string, string> = Object.fromEntries(
  SEO_PAGE_CONFIG.map((page) => [page.key, page.description]),
)

export { getPageConfig }
