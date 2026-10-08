import { useEffect, useId, useRef, useState } from 'react'
import {
  GRACE_PERIOD_DAYS,
  OTP_LENGTH,
  MOCK_OTP,
  isValidIndianMobile,
  sendDeletionOtp,
  verifyOtpAndRequestDeletion,
  type AccountType,
} from '@/utils/accountDeletionApi'
import { GRADIENT_BG } from './AccountDeletionHeader'
import { ArrowRightIcon, CapIcon, CheckIcon, LockIcon, UserIcon } from './icons'

type Step = 'details' | 'otp' | 'done'

const ACCOUNT_TYPES: readonly { value: AccountType; label: string; icon: React.ReactNode }[] = [
  { value: 'user', label: 'ZodiacPlus User', icon: <UserIcon width={22} height={22} /> },
  { value: 'expert', label: 'ZodiacPlus Expert', icon: <CapIcon width={24} height={24} /> },
]

const FOCUS_RING =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2a8fd8]'

function AccountTypeSelector({
  value,
  onChange,
  disabled,
}: {
  value: AccountType
  onChange: (v: AccountType) => void
  disabled?: boolean
}) {
  const labelId = useId()
  return (
    <div>
      <p id={labelId} className="text-[16px] font-semibold text-[#10213a]">
        I am a
      </p>
      <div role="radiogroup" aria-labelledby={labelId} className="mt-3 grid grid-cols-2 gap-3">
        {ACCOUNT_TYPES.map((t) => {
          const selected = t.value === value
          return (
            <button
              key={t.value}
              type="button"
              role="radio"
              aria-checked={selected}
              disabled={disabled}
              onClick={() => onChange(t.value)}
              className={`flex min-h-[64px] items-center justify-center gap-3 rounded-xl border px-3 text-left text-[14.5px] transition-colors sm:min-h-[70px] sm:text-[15px] ${FOCUS_RING} ${
                selected
                  ? 'border-[#4aa8e8] bg-[#e8f3fd] font-medium text-[#1a73d9] shadow-[0_0_0_1px_rgba(74,168,232,.25)]'
                  : 'border-[#e3e9ee] bg-white text-[#10213a] hover:border-[#c9d6df]'
              }`}
            >
              <span className={selected ? 'text-[#1a73d9]' : 'text-[#10213a]'}>{t.icon}</span>
              <span className="leading-tight">{t.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default function DeletionRequestForm() {
  const [step, setStep] = useState<Step>('details')
  const [accountType, setAccountType] = useState<AccountType>('user')
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const phoneId = useId()
  const otpId = useId()
  const errId = useId()
  const otpRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (step === 'otp') otpRef.current?.focus()
  }, [step])

  const submitDetails = async (e: React.FormEvent) => {
    e.preventDefault()
    if (busy) return
    if (!phone) return setError('Enter your registered phone number.')
    if (!isValidIndianMobile(phone)) return setError('Enter a valid 10-digit Indian mobile number.')
    setError('')
    setBusy(true)
    const res = await sendDeletionOtp(accountType, phone)
    setBusy(false)
    if (!res.ok) return setError(res.message)
    setOtp('')
    setStep('otp')
  }

  const submitOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    if (busy) return
    if (otp.length !== OTP_LENGTH) return setError(`Enter the ${OTP_LENGTH}-digit code we sent you.`)
    setError('')
    setBusy(true)
    const res = await verifyOtpAndRequestDeletion(accountType, phone, otp)
    setBusy(false)
    if (!res.ok) return setError(res.message)
    setStep('done')
  }

  const reset = () => {
    setStep('details')
    setOtp('')
    setError('')
  }

  const cta =
    'mt-6 flex h-[56px] w-full items-center justify-center gap-3 rounded-xl text-[18px] font-semibold text-white transition-[filter,transform] hover:brightness-105 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 sm:h-[60px] ' +
    FOCUS_RING

  return (
    <div className="mx-auto w-full max-w-[860px]">
      <div className="rounded-[22px] border border-white bg-white/90 p-5 shadow-[0_18px_50px_-24px_rgba(40,100,140,.28)] sm:p-9">
        {step === 'done' ? (
          <div role="status" className="py-4 text-center">
            <span
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-full text-white"
              style={{ background: GRADIENT_BG }}
            >
              <CheckIcon width={28} height={28} />
            </span>
            <h2 className="mt-5 text-[22px] font-semibold text-[#10213a]">Deletion request received</h2>
            <p className="mx-auto mt-2 max-w-md text-[15px] leading-relaxed text-[#4d5b6b]">
              Your account will be deleted after a {GRACE_PERIOD_DAYS[accountType]}-day grace period. If you sign in
              again during this time, the deletion is cancelled.
            </p>
            <button
              type="button"
              onClick={() => {
                setPhone('')
                reset()
              }}
              className={`mt-6 rounded-full border border-[#d6e2ea] px-6 py-2.5 text-[14px] font-medium text-[#10213a] hover:bg-[#f4f8fb] ${FOCUS_RING}`}
            >
              Submit another request
            </button>
          </div>
        ) : step === 'otp' ? (
          <form onSubmit={submitOtp} noValidate>
            <p className="text-[16px] font-semibold text-[#10213a]">Verify your number</p>
            <p className="mt-1 text-[14.5px] text-[#5b6877]">
              Enter the 6-digit OTP sent to +91 {phone}.{' '}
              <button
                type="button"
                onClick={reset}
                className={`font-medium text-[#1a73d9] underline-offset-2 hover:underline ${FOCUS_RING}`}
              >
                Change number
              </button>
            </p>
            <label htmlFor={otpId} className="mt-5 block text-[16px] font-semibold text-[#10213a]">
              One-time password
            </label>
            <input
              ref={otpRef}
              id={otpId}
              value={otp}
              onChange={(e) => {
                setOtp(e.target.value.replace(/\D/g, '').slice(0, OTP_LENGTH))
                setError('')
              }}
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={OTP_LENGTH}
              placeholder="••••••"
              aria-invalid={Boolean(error)}
              aria-describedby={error ? errId : undefined}
              className={`mt-3 h-[56px] w-full rounded-xl border bg-white px-5 text-center text-[22px] tracking-[0.5em] text-[#10213a] outline-none placeholder:text-[#b5c0ca] focus:border-[#4aa8e8] focus:ring-4 focus:ring-[#4aa8e8]/15 ${
                error ? 'border-[#e5484d]' : 'border-[#e3e9ee]'
              }`}
            />
            {error && (
              <p id={errId} role="alert" className="mt-2 text-[13.5px] text-[#d6363b]">
                {error}
              </p>
            )}
            {import.meta.env.DEV && (
              <p className="mt-2 text-[12px] text-[#8a97a4]">Dev mock: use {MOCK_OTP}. No SMS is sent yet.</p>
            )}
            <button type="submit" disabled={busy} className={cta} style={{ background: GRADIENT_BG }}>
              {busy ? 'Verifying…' : 'Verify & submit request'}
            </button>
          </form>
        ) : (
          <form onSubmit={submitDetails} noValidate>
            <AccountTypeSelector value={accountType} onChange={setAccountType} disabled={busy} />

            <label htmlFor={phoneId} className="mt-7 block text-[16px] font-semibold text-[#10213a]">
              Registered phone number
            </label>
            <div
              className={`mt-3 flex h-[56px] items-stretch overflow-hidden rounded-xl border bg-white transition-shadow focus-within:border-[#4aa8e8] focus-within:ring-4 focus-within:ring-[#4aa8e8]/15 sm:h-[60px] ${
                error ? 'border-[#e5484d]' : 'border-[#e3e9ee]'
              }`}
            >
              <span className="flex w-[72px] shrink-0 items-center justify-center border-r border-[#e3e9ee] text-[15px] font-medium text-[#10213a]">
                +91
              </span>
              <input
                id={phoneId}
                type="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))
                  setError('')
                }}
                inputMode="numeric"
                autoComplete="tel-national"
                maxLength={10}
                placeholder="Enter your phone number"
                aria-invalid={Boolean(error)}
                aria-describedby={`${errId} ${errId}-hint`}
                className="min-w-0 flex-1 bg-transparent px-5 text-[15px] text-[#10213a] outline-none placeholder:text-[#a3b0bc]"
              />
            </div>
            {error && (
              <p id={errId} role="alert" className="mt-2 text-[13.5px] text-[#d6363b]">
                {error}
              </p>
            )}
            <p id={`${errId}-hint`} className="mt-3 text-[14px] text-[#4d5b6b]">
              We’ll send a 6-digit OTP to verify your identity.
            </p>

            <button type="submit" disabled={busy} className={cta} style={{ background: GRADIENT_BG }}>
              {busy ? (
                'Sending OTP…'
              ) : (
                <>
                  Continue <ArrowRightIcon width={22} height={22} />
                </>
              )}
            </button>
          </form>
        )}
      </div>

      <p className="mx-auto mt-6 flex max-w-[860px] items-center gap-3 px-2 text-[14px] text-[#4d5b6b] sm:justify-center">
        <LockIcon width={26} height={26} className="shrink-0 text-[#6b7c8c]" />
        <span>Your information is secure and only used for account verification.</span>
      </p>
    </div>
  )
}
