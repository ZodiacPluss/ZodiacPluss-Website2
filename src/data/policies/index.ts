import type { PolicyRecord } from '@/utils/policyApi'
import snapshot from './snapshot.json'

/* ─────────────────────────────────────────────────────────────────
   Policy pages. Text comes from the backend (GET /policies/page/:slug);
   snapshot.json is a bundled copy shown instantly and used whenever the
   backend can't be reached. Refresh it with `npm run sync:policies`.
   ───────────────────────────────────────────────────────────────── */

export type PolicySlug = keyof typeof snapshot

export interface PolicyPageConfig {
  /** Backend slug for GET /policies/page/:slug. */
  slug: PolicySlug
  /** Short line under the page title (not part of the policy text). */
  subtitle: string
  snapshot: PolicyRecord
}

const SNAPSHOT = snapshot as Record<PolicySlug, PolicyRecord>

export const POLICY_PAGES = {
  'Privacy Policy': {
    slug: 'privacy',
    subtitle: 'We value your trust and are committed to protecting your personal information.',
    snapshot: SNAPSHOT.privacy,
  },
  'Terms & Conditions': {
    slug: 'terms',
    subtitle: 'Please read these terms carefully before using ZodiacPluss and its services.',
    snapshot: SNAPSHOT.terms,
  },
  'Refund Policy': {
    slug: 'refund',
    subtitle: 'When and how we refund money for sessions, bookings and wallet recharges.',
    snapshot: SNAPSHOT.refund,
  },
  'Wallet Policy': {
    slug: 'wallet',
    subtitle: 'How your ZodiacPluss wallet, recharges and Zodiac Coins work.',
    snapshot: SNAPSHOT.wallet,
  },
  'Community Guidelines': {
    slug: 'community-guidelines',
    subtitle: 'How everyone on ZodiacPluss, users and experts alike, keeps the community safe and respectful.',
    snapshot: SNAPSHOT['community-guidelines'],
  },
  'Expert Agreement': {
    slug: 'expert-agreement',
    subtitle: 'The terms for astrologers, psychologists and counsellors who offer services on ZodiacPluss.',
    snapshot: SNAPSHOT['expert-agreement'],
  },
} as const satisfies Record<string, PolicyPageConfig>

export type PolicyPageKey = keyof typeof POLICY_PAGES

export function isPolicyPage(key: string): key is PolicyPageKey {
  return Object.prototype.hasOwnProperty.call(POLICY_PAGES, key)
}
