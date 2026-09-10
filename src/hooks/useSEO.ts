import { useEffect } from 'react'
import {
  absoluteUrl,
  getPageConfig,
  NOT_FOUND_KEY,
  OG_IMAGE,
  SITE_LOCALE,
  type PageKey,
} from '@/utils/seo.config'

const ROBOTS_INDEXABLE =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
const ROBOTS_NOINDEX = 'noindex, follow'

function setMeta(
  attribute: 'name' | 'property',
  key: string,
  content: string,
): void {
  const selector = `meta[${attribute}="${key}"]`
  let element = document.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.content = content
}

function removeMeta(attribute: 'name' | 'property', key: string): void {
  document
    .querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
    ?.remove()
}

/**
 * Sets the canonical link, or removes it entirely when `url` is null — which
 * is what the Not Found page needs: it is served for arbitrary unknown paths,
 * so any canonical it declared would be wrong.
 */
function setCanonical(url: string | null): void {
  const existing = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (url === null) {
    existing?.remove()
    return
  }
  const link = existing ?? document.createElement('link')
  link.rel = 'canonical'
  link.href = url
  if (!existing) document.head.appendChild(link)
}

/**
 * useSEO — keeps <head> in sync with the current page during client-side
 * navigation. The same values are baked into the prerendered HTML at build
 * time (see the `seo-prerender` plugin in vite.config.ts), so crawlers get
 * correct metadata from the raw server response too; this hook only covers
 * in-app navigation after hydration.
 */
export function useSEO(page: PageKey): void {
  useEffect(() => {
    const config = getPageConfig(page)
    const isNotFound = page === NOT_FOUND_KEY
    const canonicalUrl = isNotFound ? null : absoluteUrl(config.path)

    document.title = config.title
    document.documentElement.lang = SITE_LOCALE

    setMeta('name', 'description', config.description)
    setMeta(
      'name',
      'robots',
      config.indexable ? ROBOTS_INDEXABLE : ROBOTS_NOINDEX,
    )
    setCanonical(canonicalUrl)

    if (canonicalUrl === null) {
      removeMeta('property', 'og:url')
    } else {
      setMeta('property', 'og:url', canonicalUrl)
    }
    setMeta('property', 'og:title', config.title)
    setMeta('property', 'og:description', config.description)
    setMeta('property', 'og:image', OG_IMAGE)

    setMeta('name', 'twitter:title', config.title)
    setMeta('name', 'twitter:description', config.description)
    setMeta('name', 'twitter:image', OG_IMAGE)
  }, [page])
}
