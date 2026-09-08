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
  'Home':        'ZodiacPluss India - Your Personal Wellness & Astrology Companion',
  'About Us':    'About ZodiacPluss India | Our Story, Mission & Wellness Team',
  'Services':    'Astrology, Mental Wellness & EAP Services in India | ZodiacPluss',
  'Career':      'Careers at ZodiacPluss India | Join Our Wellness Experts Team',
  'Book':        'Book a Session | Connect with ZodiacPluss Astrologers & Therapists',
  'Experts':     'Meet Our Experts | Astrologers, Therapists & Counselors | ZodiacPluss',
  'Portfolio':   'Portfolio | ZodiacPluss Wellness Impact & Case Studies',
  'Coming Soon': 'ZodiacPluss App - Coming Soon | Stay Tuned',
}

export const PAGE_DESCRIPTIONS: Record<string, string> = {
  'Home':
    'ZodiacPluss India blends ancient astrological wisdom with modern psychology. Get personalised astrology readings, mental wellness sessions, and AI-powered spiritual guidance across India.',
  'About Us':
    'Learn about ZodiacPluss India - founded in 2026 to bridge astrology and modern psychology. Meet our certified astrologers, licensed therapists, and wellness experts in India.',
  'Services':
    'Explore ZodiacPluss services: Vedic astrology consultations, mental wellness therapy, corporate EAP programs, tarot readings, and personalised wellness plans. Your holistic journey starts here.',
  'Career':
    'Join the ZodiacPluss team. We are hiring certified astrologers, wellness counsellors, therapists, and tech professionals passionate about transforming mental and spiritual health.',
  'Book':
    'Book a personalised session with ZodiacPluss experts. Connect with certified astrologers and licensed therapists for astrology readings, mental wellness counselling, and spiritual guidance.',
  'Experts':
    'Meet our team of certified astrologers, licensed therapists, and wellness counsellors at ZodiacPluss. Experts with 2 to 25+ years of experience in astrology and mental wellness.',
  'Portfolio':
    'Discover the impact of ZodiacPluss wellness programs. View client success stories, corporate wellness outcomes, and testimonials from our astrology and mental health sessions.',
  'Coming Soon':
    'The ZodiacPluss mobile app is launching soon. Get personalised daily horoscopes, mental wellness tools, and expert consultations on the go. Sign up for early access.',
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
