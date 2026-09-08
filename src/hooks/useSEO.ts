import { useEffect } from 'react'
import { PAGE_TITLES, PAGE_DESCRIPTIONS, getCanonicalPath } from '@/utils/routes'

const DOMAIN = 'https://zodiacpluss.com'

/**
 * useSEO — dynamically updates <title>, <meta name="description">,
 * <link rel="canonical">, and Open Graph tags on every page navigation.
 *
 * @param page - The current PageKey (e.g. 'Home', 'About Us', 'Services')
 */
export function useSEO(page: string) {
  useEffect(() => {
    // 1. Update document title
    const title = PAGE_TITLES[page] || PAGE_TITLES['Home']
    document.title = title

    // 2. Update / create <meta name="description">
    const description = PAGE_DESCRIPTIONS[page] || PAGE_DESCRIPTIONS['Home']
    let descMeta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!descMeta) {
      descMeta = document.createElement('meta')
      descMeta.name = 'description'
      document.head.appendChild(descMeta)
    }
    descMeta.content = description

    // 3. Update / create dynamic <link rel="canonical">
    const path = getCanonicalPath(page)
    const canonicalUrl = `${DOMAIN}${path === '/' ? '/' : path}`
    let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.rel = 'canonical'
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.href = canonicalUrl

    // 4. Update / create <meta property="og:url">
    let ogUrlMeta = document.querySelector<HTMLMetaElement>('meta[property="og:url"]')
    if (ogUrlMeta) {
      ogUrlMeta.content = canonicalUrl
    }

    // 5. Update / create <meta name="robots"> (ensure pages are indexable)
    let robotsMeta = document.querySelector<HTMLMetaElement>('meta[name="robots"]')
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta')
      robotsMeta.name = 'robots'
      document.head.appendChild(robotsMeta)
    }
    robotsMeta.content = 'index, follow'

    // 6. Ensure <html lang="en"> for accessibility and SEO
    document.documentElement.lang = 'en'
  }, [page])
}

