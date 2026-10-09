import { useId, useState } from 'react'
import { isValidIndianMobile, sendDeletionOtp, type AccountType } from '@/utils/accountDeletionApi'
import { GRADIENT_BG } from './AccountDeletionHeader'
import { ArrowRightIcon, CapIcon, LockIcon, UserIcon } from './icons'

export const FOCUS_RING =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2a8fd8]'

const ACCOUNT_TYPES: readonly { value: AccountType; label: string; icon: React.ReactNode }[] = [
  { value: 'user', label: 'ZodiacPluss User', icon: <UserIcon width={22} height={22} /> },
  { value: 'expert', label: 'ZodiacPluss Expert', icon: <CapIcon width={24} height={24} /> },
]

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

interface DeletionRequestFormProps {
  initialType: AccountType
  initialPhone: string
  /** Called once the OTP has been sent. */
  onOtpSent: (accountType: AccountType, phone: string) => void
}

/** Entry screen: pick account type, enter phone, request an OTP. */
export default function DeletionRequestForm({ initialType, initialPhone, onOtpSent }: DeletionRequestFormProps) {
  const [accountType, setAccountType] = useState<AccountType>(initialType)
  const [phone, setPhone] = useState(initialPhone)
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const phoneId = useId()
  const errId = useId()

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (busy) return
    if (!phone) return setError('Enter your registered phone number.')
    if (!isValidIndianMobile(phone)) return setError('Enter a valid 10-digit Indian mobile number.')
    setError('')
    setBusy(true)
    const res = await sendDeletionOtp(accountType, phone)
    setBusy(false)
    if (!res.ok) return setError(res.message)
    onOtpSent(accountType, phone)
  }

  return (
    <div className="mx-auto w-full max-w-[860px]">
      <div className="rounded-[22px] border border-white bg-white/90 p-5 shadow-[0_18px_50px_-24px_rgba(40,100,140,.28)] sm:p-9">
        <form onSubmit={submit} noValidate>
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

          <button
            type="submit"
            disabled={busy}
            className={`mt-6 flex h-[56px] w-full items-center justify-center gap-3 rounded-xl text-[18px] font-semibold text-white transition-[filter,transform] hover:brightness-105 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 sm:h-[60px] ${FOCUS_RING}`}
            style={{ background: GRADIENT_BG }}
          >
            {busy ? (
              'Sending OTP…'
            ) : (
              <>
                Continue <ArrowRightIcon width={22} height={22} />
              </>
            )}
          </button>
        </form>
      </div>

      <p className="mx-auto mt-6 flex max-w-[860px] items-center gap-3 px-2 text-[14px] text-[#4d5b6b] sm:justify-center">
        <LockIcon width={26} height={26} className="shrink-0 text-[#6b7c8c]" />
        <span>Your information is secure and only used for account verification.</span>
      </p>
    </div>
  )
}
