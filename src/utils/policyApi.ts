import { apiUrl, type ApiEnvelope } from '@/utils/apiConfig'

// Render cold starts can take ~50s; the page already shows the bundled
// snapshot meanwhile, so waiting this long costs the visitor nothing.
const REQUEST_TIMEOUT_MS = 60_000

/** One policy as served by GET /policies/page/:slug (and stored in the snapshot). */
export interface PolicyRecord {
  title: string
  version: string
  effectiveFrom: string
  updatedAt: string
  content: string
}

export interface PolicySection {
  id: string
  /** Heading as written, e.g. "1. What we collect". */
  heading: string
  /** Heading without its leading number, for the table of contents. */
  label: string
  /** Leading number from the heading ("1."), if any. */
  number?: string
  /** Markdown body of the section. */
  markdown: string
}

export interface ParsedPolicy {
  title?: string
  /** Markdown that appears before the first section heading. */
  intro: string
  sections: PolicySection[]
}

/** Fetches the live policy text. Resolves to null on any failure so callers keep their fallback. */
export async function fetchPolicy(slug: string, signal?: AbortSignal): Promise<PolicyRecord | null> {
  const controller = new AbortController()
  const timeout = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)
  const abortFromCaller = () => controller.abort()
  signal?.addEventListener('abort', abortFromCaller)

  try {
    const response = await fetch(apiUrl(`/policies/page/${encodeURIComponent(slug)}`), {
      signal: controller.signal,
    })
    if (!response.ok) return null

    const body = (await response.json().catch(() => null)) as ApiEnvelope<{
      policy?: Partial<PolicyRecord> & { format?: string }
    }> | null
    const policy = body?.data?.policy

    if (!body?.success || !policy || policy.format !== 'markdown') return null
    if (typeof policy.content !== 'string' || !policy.content.trim()) return null

    return {
      title: policy.title ?? '',
      version: policy.version ?? '',
      effectiveFrom: policy.effectiveFrom ?? '',
      updatedAt: policy.updatedAt ?? '',
      content: policy.content,
    }
  } catch {
    return null
  } finally {
    window.clearTimeout(timeout)
    signal?.removeEventListener('abort', abortFromCaller)
  }
}

function slugify(text: string) {
  return (
    text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'section'
  )
}

/**
 * Splits policy Markdown into the page title (`# …`), the intro text before
 * the first `## …` heading, and one section per `## …` heading.
 * Headings inside fenced code blocks are left alone.
 */
export function parsePolicyMarkdown(markdown: string): ParsedPolicy {
  const lines = markdown.replace(/\r\n?/g, '\n').split('\n')
  const sections: PolicySection[] = []
  const usedIds = new Set<string>()
  const introLines: string[] = []
  let title: string | undefined
  let current: { heading: string; lines: string[] } | null = null
  let inFence = false

  const flush = () => {
    if (!current) return
    const heading = current.heading
    const match = heading.match(/^(\d+(?:\.\d+)*\.?)\s+(.*)$/)
    const label = match ? match[2] : heading
    let id = slugify(label)
    for (let n = 2; usedIds.has(id); n++) id = `${slugify(label)}-${n}`
    usedIds.add(id)

    sections.push({
      id,
      heading,
      label,
      number: match ? (match[1].endsWith('.') ? match[1] : `${match[1]}.`) : undefined,
      markdown: current.lines.join('\n').trim(),
    })
  }

  for (const line of lines) {
    if (/^\s*(```|~~~)/.test(line)) inFence = !inFence

    if (!inFence && title === undefined && !current && /^#\s+/.test(line)) {
      title = line.replace(/^#\s+/, '').trim()
      continue
    }

    if (!inFence && /^##\s+/.test(line)) {
      flush()
      current = { heading: line.replace(/^##\s+/, '').replace(/\s+#+\s*$/, '').trim(), lines: [] }
      continue
    }

    if (current) current.lines.push(line)
    else introLines.push(line)
  }
  flush()

  return { title, intro: introLines.join('\n').trim(), sections }
}

/** "2026-10-03T17:09:08.513Z" → "03 October 2026" (India time). */
export function formatPolicyDate(iso: string | undefined) {
  if (!iso) return undefined
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return undefined

  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    timeZone: 'Asia/Kolkata',
  }).format(date)
}
