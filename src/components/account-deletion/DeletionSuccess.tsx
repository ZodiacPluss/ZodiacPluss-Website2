import { GRACE_PERIOD_DAYS, type AccountType } from '@/utils/accountDeletionApi'
import { GRADIENT_BG } from './AccountDeletionHeader'
import { CheckIcon } from './icons'

export default function DeletionSuccess({ accountType, onHome }: { accountType: AccountType; onHome: () => void }) {
  return (
    <div
      role="status"
      className="w-full max-w-[620px] rounded-[22px] lg:mx-auto border border-white bg-white/90 p-7 shadow-[0_18px_50px_-24px_rgba(40,100,140,.28)] sm:p-12"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full text-white" style={{ background: GRADIENT_BG }}>
        <CheckIcon width={28} height={28} />
      </span>
      <h2 className="mt-5 text-[22px] font-semibold text-[#10213a]">Your request has been submitted</h2>
      <p className="mt-2 text-[15px] leading-relaxed text-[#4d5b6b]">
        Your account will be permanently deleted after a {GRACE_PERIOD_DAYS[accountType]}-day grace period. To cancel the
        request, simply sign in to your account again before then.
      </p>
      <button
        type="button"
        onClick={onHome}
        className="mt-6 rounded-full border border-[#d6e2ea] px-6 py-2.5 text-[14px] font-medium text-[#10213a] hover:bg-[#f4f8fb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2a8fd8]"
      >
        Back to home
      </button>
    </div>
  )
}
