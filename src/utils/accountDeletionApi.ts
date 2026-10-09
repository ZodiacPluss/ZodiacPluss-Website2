/* ─────────────────────────────────────────────────────────────────
   Account-deletion service.

   MOCK: nothing here calls the backend yet. The real flow will be the MSG91
   OTP widget → POST /auth/otp/widget/verify → DELETE /user/account (or
   /expert/account). The UI only talks to the three functions below, so the
   real implementation can replace the bodies without touching components.
   ───────────────────────────────────────────────────────────────── */

export type AccountType = 'user' | 'expert'

/** Days an account stays recoverable after a deletion request. */
export const GRACE_PERIOD_DAYS: Record<AccountType, number> = { user: 60, expert: 30 }

export const OTP_LENGTH = 6

/** Dev-only code the mock accepts, so the error path can be exercised too. */
export const MOCK_OTP = '123456'

// Valid Indian mobile numbers: 10 digits starting 6-9.
const INDIAN_MOBILE = /^[6-9]\d{9}$/

export function isValidIndianMobile(digits: string): boolean {
  return INDIAN_MOBILE.test(digits)
}

export type ServiceResult = { ok: true } | { ok: false; message: string }

const delay = (ms: number) => new Promise<void>((resolve) => window.setTimeout(resolve, ms))

/** Sends a 6-digit OTP to the registered number. */
export async function sendDeletionOtp(_accountType: AccountType, phone: string): Promise<ServiceResult> {
  await delay(900)
  if (!isValidIndianMobile(phone)) return { ok: false, message: 'Enter a valid 10-digit mobile number.' }
  return { ok: true }
}

/** Step 1 of 2: verifies the OTP. Success is the only way to reach the confirm screen. */
export async function verifyDeletionOtp(_accountType: AccountType, _phone: string, otp: string): Promise<ServiceResult> {
  await delay(900)
  if (otp !== MOCK_OTP) return { ok: false, message: 'That code is incorrect. Please try again.' }
  return { ok: true }
}

/** Step 2 of 2: registers the deletion request for the verified account. */
export async function submitDeletionRequest(_accountType: AccountType, _phone: string): Promise<ServiceResult> {
  await delay(1000)
  return { ok: true }
}

/** "98765 43210" → "+91 ••••• ••210": enough to recognise the number, not to expose it. */
export function maskPhone(digits: string): string {
  return `+91 ••••• ••${digits.slice(-3)}`
}
