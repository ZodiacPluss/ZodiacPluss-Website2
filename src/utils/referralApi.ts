// Backend base URL. Override per environment with VITE_API_BASE_URL.
const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'https://zp-backend-mm0y.onrender.com').replace(
  /\/+$/,
  '',
)

const API_PREFIX = '/api/v1'

// Render cold starts can take ~50s, so give the first request room to wake the server.
const REQUEST_TIMEOUT_MS = 60_000

// Same rule the backend applies to referral codes on input.
const REFERRAL_CODE_PATTERN = /^[A-Z0-9]{4,12}$/

export type ReferralCheckResult = 'valid' | 'invalid' | 'error'

interface ApiEnvelope<T> {
  success: boolean
  data?: T
}

export function normalizeReferralCode(raw: string | null | undefined) {
  return (raw || '').trim().toUpperCase()
}

export function isWellFormedReferralCode(code: string) {
  return REFERRAL_CODE_PATTERN.test(code)
}

/**
 * Checks a referral code against POST /referrals/validate.
 * Resolves to 'error' (never 'invalid') when the server can't give an answer,
 * so a good code is never shown as rejected because of a network hiccup.
 */
export async function validateReferralCode(code: string, signal?: AbortSignal): Promise<ReferralCheckResult> {
  if (!isWellFormedReferralCode(code)) return 'invalid'

  const controller = new AbortController()
  const timeout = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)
  const abortFromCaller = () => controller.abort()
  signal?.addEventListener('abort', abortFromCaller)

  try {
    const response = await fetch(`${API_BASE_URL}${API_PREFIX}/referrals/validate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code }),
      signal: controller.signal,
    })

    const body = (await response.json().catch(() => null)) as ApiEnvelope<{ valid?: boolean }> | null

    // A 400 for this endpoint means the backend rejected the code itself.
    if (response.status === 400) return 'invalid'
    if (!response.ok || !body?.success || typeof body.data?.valid !== 'boolean') return 'error'

    return body.data.valid ? 'valid' : 'invalid'
  } catch {
    return 'error'
  } finally {
    window.clearTimeout(timeout)
    signal?.removeEventListener('abort', abortFromCaller)
  }
}
