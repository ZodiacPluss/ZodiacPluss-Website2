export type PageKey =
  | 'Home'
  | 'About Us'
  | 'Services'
  | 'Career'
  | 'Book'
  | 'Experts'
  | 'Portfolio'
  | 'Coming Soon'

export const PAGE_TO_PATH: Record<string, string> = {
  'Home': '/',
  'About Us': '/about-us',
  'About': '/about-us',
  'Services': '/services',
  'Career': '/career',
  'Book': '/book',
  'Contact': '/book',
  'For corporates': '/services',
  'Corporates': '/services',
  'Experts': '/experts',
  'Portfolio': '/portfolio',
  'Coming Soon': '/coming-soon',
  'ComingSoon': '/coming-soon',
  'coming soon': '/coming-soon',
}

export const PATH_TO_PAGE: Record<string, PageKey> = {
  '/': 'Home',
  '': 'Home',
  '/home': 'Home',
  '/about': 'About Us',
  '/about-us': 'About Us',
  '/aboutus': 'About Us',
  '/services': 'Services',
  '/for-corporates': 'Services',
  '/corporates': 'Services',
  '/career': 'Career',
  '/careers': 'Career',
  '/jobs': 'Career',
  '/book': 'Book',
  '/book-session': 'Book',
  '/contact': 'Book',
  '/contact-us': 'Book',
  '/connect': 'Book',
  '/experts': 'Experts',
  '/portfolio': 'Portfolio',
  '/coming-soon': 'Coming Soon',
  '/comingsoon': 'Coming Soon',
}

export const PAGE_TITLES: Record<string, string> = {
  'Home': 'ZodiacPluss - Your Personal Wellness Companion',
  'About Us': 'About Us - ZodiacPluss | Mind, Body & Spiritual Guidance',
  'Services': 'Services - ZodiacPluss | Astrology, Wellness & EAP Programs',
  'Career': 'Careers - ZodiacPluss | Join Our Team of Experts',
  'Book': 'Contact & Book a Session - ZodiacPluss',
  'Experts': 'Our Experts - ZodiacPluss',
  'Portfolio': 'Portfolio - ZodiacPluss',
  'Coming Soon': 'Coming Soon - ZodiacPluss App',
}

export function getCanonicalPath(page: string): string {
  return PAGE_TO_PATH[page] ?? '/'
}

export function getPageFromLocation(): PageKey {
  if (typeof window === 'undefined') return 'Home'

  // 1. Check hash if routing via hash (e.g. #/about-us or #services)
  const rawHash = window.location.hash.replace(/^#\/?/, '').toLowerCase().trim()
  if (rawHash) {
    const hashPath = '/' + rawHash.replace(/\/$/, '')
    if (PATH_TO_PAGE[hashPath]) {
      return PATH_TO_PAGE[hashPath]
    }
  }

  // 2. Check URL pathname
  const rawPath = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/'
  if (PATH_TO_PAGE[rawPath]) {
    return PATH_TO_PAGE[rawPath]
  }

  return 'Home'
}
