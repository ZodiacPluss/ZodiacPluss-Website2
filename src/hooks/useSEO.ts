import { useEffect } from 'react'
import { PAGE_TITLES, PAGE_DESCRIPTIONS } from '@/utils/routes'

/**
 * useSEO — dynamically updates <title> and <meta name="description">
 * on every client-side page navigation in the state-based SPA router.
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

    // 3. Update / create <meta name="robots"> (ensure pages are indexable)
    let robotsMeta = document.querySelector<HTMLMetaElement>('meta[name="robots"]')
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta')
      robotsMeta.name = 'robots'
      document.head.appendChild(robotsMeta)
    }
    robotsMeta.content = 'index, follow'

    // 4. Ensure <html lang="en"> for accessibility and SEO
    document.documentElement.lang = 'en'
  }, [page])
}
