import { useEffect, useRef, useState } from 'react'
import { GRACE_PERIOD_DAYS, submitDeletionRequest, type AccountType } from '@/utils/accountDeletionApi'
import { GRADIENT_BG } from './AccountDeletionHeader'
import { FOCUS_RING } from './DeletionRequestForm'
import { ArrowLeftIcon, ArrowRightIcon, DocIcon, ShieldIcon, TrashIcon } from './icons'

interface DeletionConfirmationProps {
  accountType: AccountType
  phone: string
  onBack: () => void
  onSubmitted: () => void
}

function Section({ icon, tone, title, children }: { icon: React.ReactNode; tone: string; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 py-6 sm:gap-6 sm:py-7">
      <span className={`flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full sm:h-[62px] sm:w-[62px] ${tone}`}>
        {icon}
      </span>
      <div className="min-w-0">
        <h2 className="text-[17px] font-semibold leading-snug text-[#10213a] sm:text-[19px]">{title}</h2>
        <div className="mt-1.5 text-[14px] leading-[1.65] text-[#56626f] sm:text-[14.5px]">{children}</div>
      </div>
    </div>
  )
}

export default function DeletionConfirmation({ accountType, phone, onBack, onSubmitted }: DeletionConfirmationProps) {
  const [asking, setAsking] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const d = dialogRef.current
    if (!d) return
    if (asking && !d.open) d.showModal()
    if (!asking && d.open) d.close()
  }, [asking])

  const submit = async () => {
    if (busy) return
    setBusy(true)
    setError('')
    const res = await submitDeletionRequest(accountType, phone)
    setBusy(false)
    setAsking(false)
    if (!res.ok) return setError(res.message)
    onSubmitted()
  }

  const days = GRACE_PERIOD_DAYS[accountType]
  const noun = accountType === 'user' ? 'user' : 'expert'

  return (
    <div className="w-full max-w-[1000px] lg:mx-auto">
      <div className="rounded-[22px] border border-white bg-white/90 px-5 shadow-[0_18px_50px_-24px_rgba(40,100,140,.28)] sm:px-10">
        <div className="divide-y divide-[#edf1f4]">
          <Section icon={<TrashIcon width={26} height={26} />} tone="bg-[#fde3e3] text-[#e03a3a]" title="Your account will be deleted after a grace period.">
            <p>
              Deletion starts a grace period of 60 days for users and 30 days for experts. If you sign in again during
              this period, the deletion is cancelled. When the period ends, your account and personal data are
              permanently deleted.
            </p>
            <p className="mt-2 font-medium text-[#10213a]">
              As a ZodiacPluss {noun}, your grace period is {days} days.
            </p>
          </Section>
          <Section icon={<DocIcon width={24} height={24} />} tone="bg-[#e4f0fc] text-[#1a73d9]" title="What we delete">
            <p>
              Your profile, birth details, chat messages, journal and mood entries, assessment answers, saved
              preferences, and call recordings associated with your account.
            </p>
          </Section>
          <Section icon={<ShieldIcon width={24} height={24} />} tone="bg-[#dff3e6] text-[#2f9e62]" title="What we may keep">
            <p>
              We may keep certain records where required by law, such as payment, invoice and tax records, and
              information needed for an open dispute or legal claim. Any wallet balance and Zodiac Coins remaining at
              deletion are forfeited. We cannot delete an account while a session is live, a booking is confirmed, or a
              payout is unsettled.
            </p>
          </Section>
        </div>

        {error && (
          <p role="alert" className="mb-4 rounded-lg bg-[#fdecec] px-4 py-3 text-[14px] text-[#b42323]">
            {error}
          </p>
        )}

        <div className="flex flex-col-reverse gap-3 pb-6 sm:flex-row sm:items-center sm:justify-between sm:pb-9">
          <button
            type="button"
            onClick={onBack}
            disabled={busy}
            className={`flex h-[56px] items-center justify-center gap-3 rounded-xl border border-[#dfe7ee] bg-white px-8 text-[16px] font-semibold text-[#10213a] transition-colors hover:bg-[#f6f9fb] disabled:opacity-60 sm:h-[60px] ${FOCUS_RING}`}
          >
            <ArrowLeftIcon width={20} height={20} /> Back
          </button>
          <button
            type="button"
            onClick={() => setAsking(true)}
            disabled={busy}
            className={`flex h-[56px] items-center justify-center gap-3 rounded-xl px-6 text-[16px] font-semibold text-white transition-[filter,transform] hover:brightness-105 active:scale-[0.99] disabled:opacity-60 sm:h-[60px] sm:min-w-[340px] ${FOCUS_RING}`}
            style={{ background: GRADIENT_BG }}
          >
            Submit Deletion Request <ArrowRightIcon width={20} height={20} />
          </button>
        </div>
      </div>

      {/* Last-chance confirmation so nobody requests deletion by accident. */}
      <dialog
        ref={dialogRef}
        onCancel={(e) => {
          e.preventDefault()
          if (!busy) setAsking(false)
        }}
        aria-labelledby="ad-confirm-title"
        className="m-auto w-[calc(100%-40px)] max-w-[440px] rounded-2xl border-0 p-0 shadow-2xl backdrop:bg-[#10213a]/40"
      >
        <div className="p-6 sm:p-8">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fde3e3] text-[#e03a3a]">
            <TrashIcon width={24} height={24} />
          </span>
          <h2 id="ad-confirm-title" className="mt-4 text-[20px] font-semibold text-[#10213a]">
            Delete your account?
          </h2>
          <p className="mt-2 text-[14.5px] leading-relaxed text-[#56626f]">
            Your account will be scheduled for deletion. After {days} days your account and personal data will be
            permanently deleted. You can cancel by signing in again before then.
          </p>
          <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => setAsking(false)}
              disabled={busy}
              className={`h-12 rounded-xl border border-[#dfe7ee] px-6 text-[15px] font-semibold text-[#10213a] hover:bg-[#f6f9fb] disabled:opacity-60 ${FOCUS_RING}`}
            >
              Keep my account
            </button>
            <button
              type="button"
              onClick={submit}
              disabled={busy}
              className={`h-12 rounded-xl bg-[#d93636] px-6 text-[15px] font-semibold text-white hover:bg-[#c42d2d] disabled:opacity-70 ${FOCUS_RING}`}
            >
              {busy ? 'Submitting…' : 'Yes, delete my account'}
            </button>
          </div>
        </div>
      </dialog>
    </div>
  )
}
