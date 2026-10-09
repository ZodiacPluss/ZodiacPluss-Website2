import { ChevronRightIcon, ClockIcon, DocIcon, LockIcon, MailIcon, PhoneIcon, ShieldIcon } from './icons'

const SUPPORT_EMAIL = 'info@zodiacpluss.com'

type Tone = 'blue' | 'green' | 'purple'

const TONES: Record<Tone, string> = {
  blue: 'bg-[#e4f0fc] text-[#1a73d9]',
  green: 'bg-[#dff3e6] text-[#2f9e62]',
  purple: 'bg-[#ece8fb] text-[#6a4fd6]',
}

function InfoItem({ icon, tone, title, children }: { icon: React.ReactNode; tone: Tone; title: string; children: React.ReactNode }) {
  return (
    // Mobile: each item is its own card. Desktop: items sit inside the shared column card.
    <div className="flex gap-4 rounded-2xl border border-[#e8eef2] bg-white/85 p-5 max-lg:shadow-[0_10px_30px_-22px_rgba(40,100,140,.3)] sm:gap-5 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0">
      <span className={`flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full sm:h-[60px] sm:w-[60px] ${TONES[tone]}`}>
        {icon}
      </span>
      <div className="min-w-0">
        <h3 className="text-[18px] font-semibold leading-snug text-[#10213a] lg:text-[19px]">{title}</h3>
        <div className="mt-1.5 text-[14.5px] leading-[1.6] text-[#56626f]">{children}</div>
      </div>
    </div>
  )
}

export default function DeletionInformation() {
  return (
    <section aria-label="About account deletion" className="mx-auto w-full max-w-[1320px] px-5 sm:px-8">
      <p className="border-t border-[#e6eef2] pt-6 text-[15px] leading-relaxed text-[#3b4a5c] lg:pt-5">
        This page explains how to delete your account in the ZodiacPluss and ZodiacPluss Expert apps (operated by
        ZodiacPluss Services Private Limited).
      </p>

      <div className="mt-6 grid gap-5 lg:grid-cols-2 lg:gap-6">
        <div className="flex flex-col gap-5 lg:gap-7 lg:rounded-2xl lg:border lg:border-[#e8eef2] lg:bg-white/70 lg:p-9">
          <InfoItem icon={<PhoneIcon width={24} height={24} />} tone="blue" title="How to delete your account in the app">
            <ol className="list-decimal space-y-1 pl-5 marker:text-[#56626f]">
              <li>Open the app and go to Profile &gt; Privacy &amp; Security (Experts: menu &gt; Privacy &amp; legal).</li>
              <li>Tap Delete account and confirm.</li>
            </ol>
          </InfoItem>
          <InfoItem icon={<MailIcon width={24} height={24} />} tone="green" title="Can’t open the app?">
            <p>
              Email{' '}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold text-[#1a9a6c] hover:underline">
                {SUPPORT_EMAIL}
              </a>{' '}
              from your registered email address or write from your registered phone number, and we will verify you and
              start the deletion.
            </p>
          </InfoItem>
          <InfoItem icon={<ClockIcon width={24} height={24} />} tone="purple" title="What happens next">
            <p>
              Deletion starts a grace period: 60 days for users and 30 days for experts. If you sign in again during
              this period, the deletion is cancelled. When the period ends, your account and personal data are
              permanently deleted.
            </p>
          </InfoItem>
        </div>

        <div className="flex flex-col gap-5 lg:gap-7 lg:rounded-2xl lg:border lg:border-[#e8eef2] lg:bg-white/70 lg:p-9">
          <InfoItem icon={<DocIcon width={24} height={24} />} tone="blue" title="What we delete">
            <p>
              Your profile, birth details, chat messages, journal and mood entries, assessment answers, saved
              preferences, and call recordings associated with your account.
            </p>
          </InfoItem>
          <InfoItem icon={<ShieldIcon width={24} height={24} />} tone="green" title="What we may keep">
            <p>
              Records we must keep by law, such as payment, invoice and tax records, and information needed for an open
              dispute or legal claim. Any wallet balance and Zodiac Coins remaining at deletion are forfeited. We cannot
              delete an account while a session is live, a booking is confirmed, or a payout is unsettled.
            </p>
          </InfoItem>
        </div>

        {/* Mobile-only help card, as in the mobile design. */}
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="flex items-center gap-4 rounded-2xl border border-[#e8eef2] bg-white/85 p-5 no-underline lg:hidden"
        >
          <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#e4f0fc] text-[#1a73d9]">
            <LockIcon width={24} height={24} />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[17px] font-semibold text-[#10213a]">Need help?</span>
            <span className="block text-[14px] text-[#56626f]">For any questions, contact</span>
            <span className="block text-[14.5px] font-medium text-[#1a73d9]">{SUPPORT_EMAIL}</span>
          </span>
          <ChevronRightIcon width={20} height={20} className="shrink-0 text-[#6b7c8c]" />
        </a>
      </div>
    </section>
  )
}
