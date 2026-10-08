/* ─────────────────────────────────────────────────────────────────
   seo.config.ts — SINGLE SOURCE OF TRUTH for canonical routing + SEO.

   Consumed by:
     • src/utils/routes.ts   → application routing / <a href> targets
     • src/hooks/useSEO.ts   → runtime <head> updates on SPA navigation
     • vite.config.ts        → build-time sitemap.xml + per-route HTML
     • vercel.json           → alias redirects (kept in sync by hand)

   Adding a page? Add it here once. Nothing else needs a second list.
   ───────────────────────────────────────────────────────────────── */

export const SITE_URL = 'https://zodiacpluss.com'
export const SITE_LOCALE = 'en-IN'
export const OG_IMAGE = `${SITE_URL}/og-image.png`

export type PageKey =
  | 'Home'
  | 'About Us'
  | 'Services'
  | 'Astrologers'
  | 'Career'
  | 'Blog'
  | 'Book'
  | 'Experts'
  | 'Portfolio'
  | 'Coming Soon'
  | 'Invite'
  | 'Delete Account'
  | 'Privacy Policy'
  | 'Terms & Conditions'
  | 'Refund Policy'
  | 'Wallet Policy'
  | 'Community Guidelines'
  | 'Expert Agreement'
  | 'Not Found'

export interface SeoPageConfig {
  /** Stable key used by the SPA router. */
  readonly key: PageKey
  /** The one canonical path for this page. Never an alias. */
  readonly path: string
  readonly title: string
  readonly description: string
  /** false → excluded from sitemap.xml AND served with `noindex, follow`. */
  readonly indexable: boolean
  /** Human label used for BreadcrumbList; omitted on Home. */
  readonly breadcrumb?: string
}

export const SEO_PAGE_CONFIG: readonly SeoPageConfig[] = [
  {
    key: 'Home',
    path: '/',
    title: 'ZodiacPluss | Astrology & Mental Wellness in India',
    description:
      'ZodiacPluss brings Vedic astrology together with modern mental wellness — personalised readings, counselling sessions and corporate wellness programmes in India.',
    indexable: true,
  },
  {
    key: 'About Us',
    path: '/about-us',
    title: 'About ZodiacPluss | Our Story, Mission & Values',
    description:
      'How ZodiacPluss began and what drives it: bridging ancient astrological wisdom with modern psychology. Read our mission, values and the team behind it.',
    indexable: true,
    breadcrumb: 'About Us',
  },
  {
    key: 'Services',
    path: '/services',
    title: 'Astrology & Mental Wellness Services | ZodiacPluss',
    description:
      'Vedic astrology consultations, tarot readings, one-on-one therapy and counselling, and Employee Assistance Programme plans for teams — the ZodiacPluss services.',
    indexable: true,
    breadcrumb: 'Services',
  },
  {
    key: 'Astrologers',
    path: '/astrologers',
    title: 'Talk to an Astrologer | ZodiacPluss',
    description:
      'Meet the ZodiacPluss astrologers and find a guide for your personal astrology session.',
    indexable: true,
    breadcrumb: 'Astrologers',
  },
  {
    key: 'Book',
    path: '/book',
    title: 'Book a Session | Contact ZodiacPluss',
    description:
      'Get in touch with ZodiacPluss to book an astrology reading or wellness session, or to ask about corporate programmes. Reach us by phone, email or the form.',
    indexable: true,
    breadcrumb: 'Book a Session',
  },
  {
    key: 'Career',
    path: '/career',
    title: 'Careers at ZodiacPluss | Join Our Team',
    description:
      'Work with ZodiacPluss. We hire astrologers, counsellors, therapists and technology professionals who care about mental and spiritual well-being at work.',
    indexable: true,
    breadcrumb: 'Careers',
  },
  {
    key: 'Blog',
    path: '/blog',
    title: 'Blog | Mental Wellness, Astrology & Workplace Insights | ZodiacPluss',
    description:
      'Thoughtful articles on mental wellness, astrology, relationships, personal growth and building healthier workplaces from the ZodiacPluss team.',
    indexable: true,
    breadcrumb: 'Blog',
  },
  {
    key: 'Portfolio',
    path: '/portfolio',
    title: 'Portfolio & Wellness Programmes | ZodiacPluss',
    description:
      'What ZodiacPluss builds: Vedic birth chart reports, the ZodiacPluss mobile experience, corporate EAP wellness programmes, tarot plans and our expert network.',
    indexable: true,
    breadcrumb: 'Portfolio',
  },
  {
    key: 'Experts',
    path: '/experts',
    title: 'ZodiacPluss Experts | Astrologers, Therapists & Counsellors',
    description:
      'The ZodiacPluss expert directory of astrologers, therapists and wellness counsellors.',
    // The experts listing is currently disabled in the app and renders no
    // content, so the URL must stay out of the index until it is restored.
    indexable: false,
    breadcrumb: 'Experts',
  },
  {
    key: 'Coming Soon',
    path: '/coming-soon',
    title: 'ZodiacPluss App | Coming Soon',
    description:
      'The ZodiacPluss mobile app is on the way. Sign up to be notified when daily horoscopes, wellness tools and expert sessions arrive on your phone.',
    // Renders the same section that already appears on the homepage — keeping
    // it indexable would create a duplicate of `/`.
    indexable: false,
    breadcrumb: 'Coming Soon',
  },
  {
    key: 'Invite',
    path: '/invite',
    title: "You've been invited to Zodiac Pluss",
    description:
      'Claim your Zodiac Pluss referral benefit. Save your invite code and enter it while registering.',
    // Per-user referral landing page; the code lives in the query string.
    indexable: false,
  },
  {
    key: 'Privacy Policy',
    path: '/policies/privacy',
    title: 'Privacy Policy | ZodiacPluss',
    description:
      'How ZodiacPluss collects, uses, shares and protects your personal information, and the rights you have over it.',
    indexable: true,
    breadcrumb: 'Privacy Policy',
  },
  {
    key: 'Terms & Conditions',
    path: '/policies/terms',
    title: 'Terms & Conditions | ZodiacPluss',
    description:
      'The terms and conditions that govern your use of the ZodiacPluss website, app and services.',
    indexable: true,
    breadcrumb: 'Terms & Conditions',
  },
  {
    key: 'Refund Policy',
    path: '/policies/refund',
    title: 'Refund Policy | ZodiacPluss',
    description:
      'When and how ZodiacPluss refunds money for booked appointments, instant sessions and wallet recharges.',
    indexable: true,
    breadcrumb: 'Refund Policy',
  },
  {
    key: 'Wallet Policy',
    path: '/policies/wallet',
    title: 'Wallet Policy | ZodiacPluss',
    description: 'How the ZodiacPluss wallet, recharges and Zodiac Coins work, and what you can use your balance for.',
    indexable: true,
    breadcrumb: 'Wallet Policy',
  },
  {
    key: 'Community Guidelines',
    path: '/policies/community-guidelines',
    title: 'Community Guidelines | ZodiacPluss',
    description:
      'How users and experts on ZodiacPluss are expected to behave to keep the community safe, honest and respectful.',
    indexable: true,
    breadcrumb: 'Community Guidelines',
  },
  {
    key: 'Expert Agreement',
    path: '/policies/expert-agreement',
    title: 'Expert Agreement | ZodiacPluss',
    description:
      'The agreement between ZodiacPluss and the astrologers, psychologists and counsellors who offer services on the platform.',
    indexable: true,
    breadcrumb: 'Expert Agreement',
  },
  {
    key: 'Delete Account',
    path: '/delete-account',
    title: 'Request Account Deletion | ZodiacPluss',
    description:
      'How to delete your ZodiacPluss or ZodiacPluss Expert account, what is deleted, what we may keep and what happens next.',
    indexable: true,
    breadcrumb: 'Delete Account',
  },
  {
    key: 'Not Found',
    path: '/404',
    title: 'Page Not Found | ZodiacPluss',
    description: 'This ZodiacPluss page could not be found.',
    indexable: false,
  },
] as const

/**
 * Alias path → canonical path.
 * These are served as HTTP 301s by Vercel (see vercel.json) and are also
 * normalised client-side as a fallback. They must never be indexable and must
 * never appear in sitemap.xml.
 */
export const ROUTE_ALIASES: Readonly<Record<string, string>> = {
  '/account-delete': '/delete-account',
  '/home': '/',
  '/about': '/about-us',
  '/aboutus': '/about-us',
  '/for-corporates': '/services',
  '/corporates': '/services',
  '/careers': '/career',
  '/jobs': '/career',
  '/book-session': '/book',
  '/contact': '/book',
  '/contact-us': '/book',
  '/connect': '/book',
  '/comingsoon': '/coming-soon',
  // Earlier website URLs for the policy pages; the canonical ones are the
  // backend's own /policies/<slug> links, so app and email links resolve as-is.
  '/privacy-policy': '/policies/privacy',
  '/terms-and-conditions': '/policies/terms',
  '/refund-policy': '/policies/refund',
  '/wallet-policy': '/policies/wallet',
  '/community-guidelines': '/policies/community-guidelines',
  '/expert-agreement': '/policies/expert-agreement',
}

export const NOT_FOUND_KEY: PageKey = 'Not Found'
export const HOME_KEY: PageKey = 'Home'

const BY_KEY = new Map<PageKey, SeoPageConfig>(
  SEO_PAGE_CONFIG.map((page) => [page.key, page]),
)

const BY_PATH = new Map<string, SeoPageConfig>(
  SEO_PAGE_CONFIG.map((page) => [page.path, page]),
)

export function getPageConfig(key: PageKey): SeoPageConfig {
  const config = BY_KEY.get(key)
  if (!config) throw new Error(`Unknown page key: ${key}`)
  return config
}

export function getPageConfigByPath(path: string): SeoPageConfig | undefined {
  return BY_PATH.get(path)
}

export function absoluteUrl(path: string): string {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
}

/** Canonical, indexable pages only — exactly what belongs in sitemap.xml. */
export function getIndexablePages(): readonly SeoPageConfig[] {
  return SEO_PAGE_CONFIG.filter((page) => page.indexable)
}

/** Every page that gets its own prerendered HTML file at build time. */
export function getPrerenderablePages(): readonly SeoPageConfig[] {
  return SEO_PAGE_CONFIG.filter((page) => page.key !== NOT_FOUND_KEY)
}

/** Normalises a raw pathname: lowercase, no trailing slash, alias-resolved. */
export function resolvePath(rawPath: string): string {
  const lowered = rawPath.toLowerCase().replace(/\/+$/, '') || '/'
  return ROUTE_ALIASES[lowered] ?? lowered
}
