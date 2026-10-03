// Downloads the current policy texts from the backend into
// src/data/policies/snapshot.json. The website shows this snapshot instantly
// and then swaps in the live text, so re-run this before a deploy whenever
// the admin panel has changed a policy:  npm run sync:policies
import { writeFile, mkdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const API_BASE_URL = (process.env.VITE_API_BASE_URL || 'https://zp-backend-mm0y.onrender.com').replace(/\/+$/, '')
const SLUGS = ['privacy', 'terms', 'refund', 'wallet', 'community-guidelines', 'expert-agreement']
const OUT_FILE = resolve(dirname(fileURLToPath(import.meta.url)), '../src/data/policies/snapshot.json')

async function fetchPolicy(slug) {
  const response = await fetch(`${API_BASE_URL}/api/v1/policies/page/${slug}`, {
    signal: AbortSignal.timeout(90_000),
  })
  if (!response.ok) throw new Error(`${slug}: HTTP ${response.status}`)

  const { data } = await response.json()
  const { title, version, effectiveFrom, updatedAt, format, content } = data?.policy ?? {}
  if (format !== 'markdown' || typeof content !== 'string' || !content.trim()) {
    throw new Error(`${slug}: unexpected response shape`)
  }
  return { title, version, effectiveFrom, updatedAt, content }
}

const snapshot = {}
for (const slug of SLUGS) {
  snapshot[slug] = await fetchPolicy(slug)
  console.log(`✓ ${slug} (v${snapshot[slug].version}, ${snapshot[slug].content.length} chars)`)
}

await mkdir(dirname(OUT_FILE), { recursive: true })
await writeFile(OUT_FILE, `${JSON.stringify(snapshot, null, 2)}\n`)
console.log(`Saved ${OUT_FILE}`)
