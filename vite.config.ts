import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import fs from 'node:fs'
import {
  SITE_URL,
  absoluteUrl,
  getIndexablePages,
  getPageConfig,
  getPrerenderablePages,
  NOT_FOUND_KEY,
  OG_IMAGE,
  type SeoPageConfig,
} from './src/utils/seo.config.ts'

const SEO_BLOCK_RE = /<!-- SEO:START[\s\S]*?SEO:END -->/

const ROBOTS_INDEXABLE =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
const ROBOTS_NOINDEX = 'noindex, follow'

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/** `/about-us` → `about-us.html`, `/` → `index.html`. */
function outputFileName(page: SeoPageConfig): string {
  if (page.path === '/') return 'index.html'
  return `${page.path.replace(/^\//, '')}.html`
}

function breadcrumbJsonLd(page: SeoPageConfig): string {
  if (!page.breadcrumb) return ''
  const payload = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ZodiacPluss',
        item: `${SITE_URL}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: page.breadcrumb,
        item: absoluteUrl(page.path),
      },
    ],
  }
  return `\n    <script type="application/ld+json">\n${JSON.stringify(payload, null, 2)}\n    </script>`
}

function seoBlock(page: SeoPageConfig): string {
  const url = absoluteUrl(page.path)
  const title = escapeHtml(page.title)
  const description = escapeHtml(page.description)
  const robots = page.indexable ? ROBOTS_INDEXABLE : ROBOTS_NOINDEX

  // The 404 document is served for arbitrary unknown paths, so it must not
  // declare a canonical or an og:url — either would advertise `/404` as a
  // real, self-referencing URL.
  const isNotFound = page.key === NOT_FOUND_KEY
  const canonicalTag = isNotFound
    ? ''
    : `\n    <link rel="canonical" href="${url}" />`
  const ogUrlTag = isNotFound
    ? ''
    : `\n    <meta property="og:url" content="${url}" />`

  return `<!-- SEO:START — generated at build time from src/utils/seo.config.ts -->
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="robots" content="${robots}" />${canonicalTag}

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="ZodiacPluss" />
    <meta property="og:locale" content="en_IN" />${ogUrlTag}
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${OG_IMAGE}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="ZodiacPluss" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@zodiacpluss" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${OG_IMAGE}" />${breadcrumbJsonLd(page)}
    <!-- SEO:END -->`
}

function buildSitemap(): string {
  const urls = getIndexablePages()
    .map((page) => `  <url>\n    <loc>${absoluteUrl(page.path)}</loc>\n  </url>`)
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
}

/**
 * Emits one static HTML file per canonical route with that route's <head>
 * baked in, plus a generated sitemap.xml. The SPA bundle is untouched: each
 * file is byte-identical to dist/index.html apart from the SEO block, so React
 * boots and renders exactly as before. This gives crawlers (and link
 * unfurlers, which do not run JavaScript at all) the correct title,
 * description, canonical and Open Graph data in the raw HTTP response.
 */
function seoPrerender(): Plugin {
  return {
    name: 'seo-prerender',
    apply: 'build',
    enforce: 'post',
    closeBundle: {
      order: 'post',
      handler() {
        const outDir = path.resolve(import.meta.dirname, 'dist')
        const indexPath = path.join(outDir, 'index.html')
        const template = fs.readFileSync(indexPath, 'utf8')

        if (!SEO_BLOCK_RE.test(template)) {
          throw new Error(
            'seo-prerender: SEO:START/SEO:END markers not found in dist/index.html. ' +
              'Restore them in index.html — per-route metadata cannot be generated without them.',
          )
        }

        const emit = (page: SeoPageConfig): void => {
          const html = template.replace(SEO_BLOCK_RE, seoBlock(page))
          const file = path.join(outDir, outputFileName(page))
          fs.mkdirSync(path.dirname(file), { recursive: true })
          fs.writeFileSync(file, html)
        }

        for (const page of getPrerenderablePages()) emit(page)

        // Vercel serves 404.html with an HTTP 404 status for unmatched paths.
        const notFound = getPageConfig(NOT_FOUND_KEY)
        fs.writeFileSync(
          path.join(outDir, '404.html'),
          template.replace(SEO_BLOCK_RE, seoBlock(notFound)),
        )

        fs.writeFileSync(path.join(outDir, 'sitemap.xml'), buildSitemap())

        const routes = getPrerenderablePages().map((p) => p.path).join(', ')
        this.info?.(`seo-prerender: emitted ${routes}, 404.html and sitemap.xml`)
      },
    },
  }
}

export default defineConfig(({ mode }) => {
  const emitSourcemaps = mode === 'development'
  const port = Number.parseInt(process.env.PORT || '8450', 10)

  return {
    base: '/',
    build: {
      sourcemap: emitSourcemaps ? 'inline' : false,
      minify: !emitSourcemaps,
    },
    plugins: [
      react(),
      tailwindcss(),
      seoPrerender(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, './src'),
      },
    },
    server: {
      host: '0.0.0.0',
      port,
      strictPort: false,
    },
    preview: {
      host: '0.0.0.0',
      port,
      strictPort: false,
    },
  }
})
