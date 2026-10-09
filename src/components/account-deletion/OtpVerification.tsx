import { useCallback, useEffect, useRef, useState } from 'react'
import {
  MOCK_OTP,
  OTP_LENGTH,
  maskPhone,
  sendDeletionOtp,
  verifyDeletionOtp,
  type AccountType,
} from '@/utils/accountDeletionApi'
import { GRADIENT_BG } from './AccountDeletionHeader'
import { FOCUS_RING } from './DeletionRequestForm'
import { ArrowRightIcon } from './icons'

const RESEND_SECONDS = 30

interface OtpVerificationProps {
  accountType: AccountType
  phone: string
  onVerified: () => void
}

const clock = (s: number) => `00:${String(s).padStart(2, '0')}`

/** OTP is held in component state only: never persisted, never in the URL. */
export default function OtpVerification({ accountType, phone, onVerified }: OtpVerificationProps) {
  const [digits, setDigits] = useState<string[]>(() => Array(OTP_LENGTH).fill(''))
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')
  const [busy, setBusy] = useState(false)
  const [resending, setResending] = useState(false)
  const [seconds, setSeconds] = useState(RESEND_SECONDS)
  const refs = useRef<(HTMLInputElement | null)[]>([])

  const focusBox = (i: number) => refs.current[Math.max(0, Math.min(OTP_LENGTH - 1, i))]?.focus()

  useEffect(() => focusBox(0), [])

  // Countdown ticks once per second until it reaches zero.
  useEffect(() => {
    if (seconds <= 0) return
    const id = window.setTimeout(() => setSeconds((s) => s - 1), 1000)
    return () => window.clearTimeout(id)
  }, [seconds])

  const fill = useCallback((start: number, chars: string) => {
    setDigits((prev) => {
      const next = [...prev]
      chars.split('').forEach((c, k) => {
        if (start + k < OTP_LENGTH) next[start + k] = c
      })
      return next
    })
    focusBox(start + chars.length >= OTP_LENGTH ? OTP_LENGTH - 1 : start + chars.length)
  }, [])

  const onChange = (i: number, raw: string) => {
    setError('')
    const clean = raw.replace(/\D/g, '')
    if (!clean) {
      setDigits((d) => d.map((v, k) => (k === i ? '' : v)))
      return
    }
    // Typing over a filled box keeps only the newly typed digit.
    fill(i, clean.length > 1 ? clean.slice(0, OTP_LENGTH - i) : clean.slice(-1))
  }

  const onKeyDown = (i: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !digits[i] && i > 0) {
      e.preventDefault()
      setDigits((d) => d.map((v, k) => (k === i - 1 ? '' : v)))
      focusBox(i - 1)
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      focusBox(i - 1)
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      focusBox(i + 1)
    }
  }

  const onPaste = (e: React.ClipboardEvent) => {
    const clean = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, OTP_LENGTH)
    if (!clean) return e.preventDefault()
    e.preventDefault()
    setError('')
    fill(0, clean)
  }

  const verify = async (e: React.FormEvent) => {
    e.preventDefault()
    if (busy) return
    const code = digits.join('')
    if (code.length !== OTP_LENGTH) return setError(`Enter all ${OTP_LENGTH} digits of the code.`)
    setError('')
    setNotice('')
    setBusy(true)
    const res = await verifyDeletionOtp(accountType, phone, code)
    setBusy(false)
    if (!res.ok) {
      setError(res.message)
      setDigits(Array(OTP_LENGTH).fill(''))
      focusBox(0)
      return
    }
    onVerified()
  }

  const resend = async () => {
    if (seconds > 0 || resending) return
    setResending(true)
    setError('')
    setNotice('')
    const res = await sendDeletionOtp(accountType, phone)
    setResending(false)
    if (!res.ok) return setError(res.message)
    setDigits(Array(OTP_LENGTH).fill(''))
    setNotice('A new code has been sent.')
    setSeconds(RESEND_SECONDS)
    focusBox(0)
  }

  return (
    <form
      onSubmit={verify}
      noValidate
      className="w-full max-w-[620px] rounded-[22px] border border-white bg-white/90 p-6 shadow-[0_18px_50px_-24px_rgba(40,100,140,.28)] sm:p-12 lg:mx-auto"
    >
      <h2 className="text-[20px] font-semibold text-[#10213a]">Enter OTP</h2>
      <p className="mt-1.5 text-[14.5px] leading-snug text-[#5b6877]">
        We have sent a 6-digit OTP to <span className="whitespace-nowrap">{maskPhone(phone)}</span>
      </p>

      <div role="group" aria-label="6-digit one-time password" className="mt-6 flex gap-2 sm:gap-3" onPaste={onPaste}>
        {digits.map((d, i) => (
          <input
            key={i}
            ref={(el) => {
              refs.current[i] = el
            }}
            value={d}
            onChange={(e) => onChange(i, e.target.value)}
            onKeyDown={(e) => onKeyDown(i, e)}
            onFocus={(e) => e.target.select()}
            inputMode="numeric"
            pattern="[0-9]*"
            autoComplete={i === 0 ? 'one-time-code' : 'off'}
            aria-label={`Digit ${i + 1} of ${OTP_LENGTH}`}
            aria-invalid={Boolean(error)}
            disabled={busy}
            className={`h-[52px] min-w-0 flex-1 rounded-xl border bg-white text-center text-[22px] font-semibold text-[#10213a] outline-none transition-shadow focus:border-[#2a8fd8] focus:ring-4 focus:ring-[#2a8fd8]/15 sm:h-[64px] sm:w-[60px] sm:flex-none ${
              error ? 'border-[#e5484d]' : 'border-[#dfe7ee]'
            }`}
          />
        ))}
      </div>

      <div aria-live="polite" className="mt-3 min-h-[20px] text-[13.5px]">
        {error ? (
          <p role="alert" className="text-[#d6363b]">
            {error}
          </p>
        ) : notice ? (
          <p className="text-[#1f9a5a]">{notice}</p>
        ) : null}
      </div>

      <p className="mt-3 text-center text-[14px] leading-relaxed text-[#4d5b6b] sm:mt-4">
        Didn’t receive the OTP?{' '}
        <button
          type="button"
          onClick={resend}
          disabled={seconds > 0 || resending}
          className={`font-medium text-[#1a73d9] enabled:hover:underline disabled:cursor-not-allowed disabled:opacity-70 ${FOCUS_RING}`}
        >
          {resending ? 'Sending…' : 'Resend OTP'}
        </button>{' '}
        {seconds > 0 && (
          <>
            in <span className="font-semibold text-[#10213a]">{clock(seconds)}</span>
          </>
        )}
      </p>

      <button
        type="submit"
        disabled={busy}
        className={`mt-6 flex h-[56px] w-full items-center justify-center gap-3 rounded-xl text-[17px] font-semibold text-white transition-[filter,transform] hover:brightness-105 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 sm:h-[58px] ${FOCUS_RING}`}
        style={{ background: GRADIENT_BG }}
      >
        {busy ? (
          'Verifying…'
        ) : (
          <>
            Verify OTP <ArrowRightIcon width={20} height={20} />
          </>
        )}
      </button>

      {import.meta.env.DEV && (
        <p className="mt-3 text-center text-[12px] text-[#8a97a4]">Dev mock: code {MOCK_OTP}. No SMS is sent yet.</p>
      )}
    </form>
  )
}
