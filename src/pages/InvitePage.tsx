import { useEffect, useRef, useState, type ReactNode } from 'react'

interface InvitePageProps {
  onNavigate?: (page: string) => void
}

const DEFAULT_CODE = 'ZP7K9A'

function readInviteCode() {
  if (typeof window === 'undefined') return DEFAULT_CODE

  const params = new URLSearchParams(window.location.search)
  const code = params.get('code') || params.get('invite') || params.get('ref')
  return (code || DEFAULT_CODE).trim().toUpperCase()
}

/* ── Icons (stroke icons, 24px grid) ────────────────────────────────── */

const iconProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

const CopyIcon = ({ className }: { className?: string }) => (
  <svg {...iconProps} className={className}>
    <rect x="8" y="8" width="12" height="12" rx="2" />
    <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
  </svg>
)

const CheckIcon = ({ className }: { className?: string }) => (
  <svg {...iconProps} className={className} strokeWidth={2.2}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
)

const InfoIcon = ({ className }: { className?: string }) => (
  <svg {...iconProps} className={className}>
    <circle cx="12" cy="12" r="9.25" />
    <path d="M12 11v5.5" />
    <path d="M12 7.6v.01" strokeWidth={2.4} />
  </svg>
)

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg {...iconProps} className={className} strokeWidth={2}>
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </svg>
)

const CalendarIcon = ({ className }: { className?: string }) => (
  <svg {...iconProps} className={className}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
    <path d="M7.5 14h.01M12 14h.01M16.5 14h.01M7.5 17h.01M12 17h.01" strokeWidth={2.2} />
  </svg>
)

const UsersIcon = ({ className }: { className?: string }) => (
  <svg {...iconProps} className={className}>
    <circle cx="9.5" cy="8" r="3.75" />
    <path d="M2.75 20c0-3.6 3-6.25 6.75-6.25S16.25 16.4 16.25 20" />
    <path d="M15.5 4.4a3.75 3.75 0 0 1 0 7.2" />
    <path d="M18.25 14.3c1.85.9 3 2.9 3 5.7" />
  </svg>
)

const HeartIcon = ({ className }: { className?: string }) => (
  <svg {...iconProps} className={className}>
    <path d="M12 20.3S3.5 15.4 3.5 9.1A4.6 4.6 0 0 1 12 6.6a4.6 4.6 0 0 1 8.5 2.5c0 6.3-8.5 11.2-8.5 11.2z" />
  </svg>
)

const SparkleIcon = ({ className }: { className?: string }) => (
  <svg {...iconProps} className={className}>
    <path d="M12 3c.6 4.6 2.4 6.4 7 7-4.6.6-6.4 2.4-7 7-.6-4.6-2.4-6.4-7-7 4.6-.6 6.4-2.4 7-7z" />
  </svg>
)

/* ── Decorative background ─────────────────────────────────────────── */

function LeafCluster({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 420 460" className={className} aria-hidden fill="none">
      <defs>
        <linearGradient id="zpLeafA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a9cdb4" />
          <stop offset="55%" stopColor="#5f9d78" />
          <stop offset="100%" stopColor="#2f6b4c" />
        </linearGradient>
        <linearGradient id="zpLeafB" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c6dfcd" />
          <stop offset="60%" stopColor="#77ac8a" />
          <stop offset="100%" stopColor="#3d7a58" />
        </linearGradient>
        <linearGradient id="zpLeafC" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#d9eadf" />
          <stop offset="100%" stopColor="#8dbb9c" />
        </linearGradient>
        <filter id="zpLeafSoft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <filter id="zpLeafSofter" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
      </defs>

      {/* Out-of-focus back leaves */}
      <path
        d="M40 470 C 10 380, 40 300, 120 250 C 140 330, 120 410, 40 470 Z"
        fill="url(#zpLeafC)"
        opacity="0.55"
        filter="url(#zpLeafSofter)"
      />
      <path
        d="M230 470 C 250 400, 320 360, 410 360 C 380 430, 310 470, 230 470 Z"
        fill="url(#zpLeafC)"
        opacity="0.5"
        filter="url(#zpLeafSofter)"
      />

      {/* Stem */}
      <path
        d="M150 470 C 160 420, 175 360, 200 300 C 215 262, 232 225, 255 190"
        stroke="#4f8a68"
        strokeWidth="2.2"
        opacity="0.6"
      />

      {/* Tall upright leaf */}
      <path
        d="M205 300 C 175 230, 180 140, 245 70 C 270 150, 258 240, 205 300 Z"
        fill="url(#zpLeafB)"
        opacity="0.92"
      />
      <path d="M205 300 C 220 220, 232 150, 245 70" stroke="#e8f3ec" strokeWidth="1.4" opacity="0.7" />

      {/* Large left leaf */}
      <path
        d="M175 360 C 95 345, 35 280, 20 190 C 105 205, 165 270, 175 360 Z"
        fill="url(#zpLeafA)"
        opacity="0.95"
      />
      <path d="M175 360 C 130 300, 75 240, 20 190" stroke="#e8f3ec" strokeWidth="1.4" opacity="0.65" />

      {/* Right leaf */}
      <path
        d="M195 330 C 235 270, 300 245, 370 255 C 335 320, 265 350, 195 330 Z"
        fill="url(#zpLeafB)"
        opacity="0.88"
      />
      <path d="M195 330 C 255 300, 310 275, 370 255" stroke="#e8f3ec" strokeWidth="1.3" opacity="0.6" />

      {/* Lower soft-focus leaf */}
      <path
        d="M160 430 C 100 440, 40 420, 0 380 C 60 360, 125 380, 160 430 Z"
        fill="url(#zpLeafA)"
        opacity="0.8"
        filter="url(#zpLeafSoft)"
      />
    </svg>
  )
}

/* ── Feature row ───────────────────────────────────────────────────── */

const FEATURES: { icon: ReactNode; label: [string, string] }[] = [
  { icon: <CalendarIcon className="h-7 w-7" />, label: ['Daily', 'Horoscopes'] },
  { icon: <UsersIcon className="h-7 w-7" />, label: ['Connect with', 'Astrologers'] },
  { icon: <HeartIcon className="h-7 w-7" />, label: ['Talk to', 'Therapists'] },
  { icon: <SparkleIcon className="h-7 w-7" />, label: ['Guidance for', 'a Better You'] },
]

export default function InvitePage({ onNavigate }: InvitePageProps) {
  const [inviteCode] = useState(readInviteCode)
  const [copied, setCopied] = useState(false)
  const resetTimer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(resetTimer.current), [])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(inviteCode)
    } catch {
      // Fallback for browsers / insecure contexts without the async clipboard API.
      const field = document.createElement('textarea')
      field.value = inviteCode
      field.setAttribute('readonly', '')
      field.style.position = 'fixed'
      field.style.opacity = '0'
      document.body.appendChild(field)
      field.select()
      document.execCommand('copy')
      document.body.removeChild(field)
    }

    setCopied(true)
    window.clearTimeout(resetTimer.current)
    resetTimer.current = window.setTimeout(() => setCopied(false), 2200)
  }

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#f7f6ef] font-['Inter',sans-serif] text-[#0f3d2e] antialiased">
      {/* ── Background wash ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-32 h-[520px] w-[520px] rounded-full bg-[#dfeadf] opacity-70 blur-3xl" />
        <div className="absolute -right-48 -top-24 h-[460px] w-[460px] rounded-[45%] bg-[#e7eee3] opacity-80 blur-2xl" />
        <div className="absolute -left-24 top-[38%] h-[360px] w-[360px] rounded-full bg-[#eef2ea] opacity-70 blur-3xl" />
        <div className="absolute -right-32 bottom-[-8%] h-[520px] w-[520px] rounded-full bg-[#e9efe6] opacity-80 blur-3xl" />
        <div className="absolute bottom-[-18%] left-1/2 h-[560px] w-[560px] -translate-x-[10%] rounded-full border border-[#d9c79a]/40" />
        <LeafCluster className="absolute -bottom-6 -left-10 w-[300px] sm:w-[360px] md:w-[420px]" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[600px] flex-col items-center px-5 pb-80 pt-14 sm:px-8 sm:pt-16 sm:pb-72">
        {/* Emblem */}
        <img
          src="/logo.png"
          alt="Zodiac Pluss emblem"
          width={260}
          height={260}
          className="zp-rise h-[150px] w-[150px] object-contain drop-shadow-[0_10px_24px_rgba(15,61,46,0.12)] sm:h-[170px] sm:w-[170px]"
        />

        {/* Headline */}
        <h1 className="zp-rise zp-d1 mt-7 text-center">
          <span className="block text-[22px] font-bold tracking-[-0.02em] text-[#0f3d2e] sm:text-[26px]">
            You’ve been invited to
          </span>
          <span className="mt-2 block text-[54px] font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-[72px]">
            <span className="text-[#0f3d2e]">Zodiac </span>
            <span className="bg-gradient-to-b from-[#5c9e7c] to-[#3f8463] bg-clip-text text-transparent">Pluss</span>
          </span>
        </h1>

        <p className="zp-rise zp-d2 mt-4 text-center text-[19px] font-semibold tracking-[-0.01em] text-[#0f3d2e] sm:text-[21px]">
          Zodiac Pluss is coming soon
        </p>
        <p className="zp-rise zp-d2 mt-2.5 max-w-[440px] text-center text-[15px] leading-[1.6] text-[#5f6b66] sm:text-base">
          A space for astrology, mental wellness and guidance — all in one place.
        </p>

        {/* Referral card */}
        <section
          aria-labelledby="referral-code-label"
          className="zp-rise zp-d3 mt-10 w-full rounded-[22px] border border-[#ebeee7] bg-white/90 p-5 shadow-[0_18px_50px_-18px_rgba(15,61,46,0.18),0_2px_6px_rgba(15,61,46,0.04)] backdrop-blur-sm sm:p-7"
        >
          <p
            id="referral-code-label"
            className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#6b7470] sm:text-xs"
          >
            Your referral code
          </p>

          <div className="mt-4 flex items-stretch gap-3">
            <div
              className="flex min-w-0 flex-1 items-center justify-center rounded-2xl bg-[#eef3ee] px-3 py-4 sm:py-[18px]"
              aria-live="polite"
            >
              <span className="select-all truncate text-[26px] font-extrabold tracking-[0.04em] text-[#0f3d2e] sm:text-[32px]">
                {inviteCode}
              </span>
            </div>

            <button
              type="button"
              onClick={handleCopy}
              aria-label={copied ? 'Referral code copied' : 'Copy referral code'}
              className="inline-flex shrink-0 items-center justify-center gap-2.5 rounded-2xl bg-[#0f3d2e] px-4 text-[14px] font-medium text-white shadow-[0_8px_20px_-8px_rgba(15,61,46,0.6)] transition-all duration-200 hover:bg-[#145240] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5c9e7c] focus-visible:ring-offset-2 sm:px-6 sm:text-[15px]"
            >
              {copied ? <CheckIcon className="h-[22px] w-[22px]" /> : <CopyIcon className="h-[22px] w-[22px]" />}
              <span className="min-w-[72px] whitespace-nowrap text-left sm:min-w-[80px]">{copied ? 'Copied!' : 'Copy Code'}</span>
            </button>
          </div>

          <div className="mt-5 flex items-start gap-3.5">
            <InfoIcon className="mt-0.5 h-[22px] w-[22px] shrink-0 text-[#2b3a34]" />
            <p className="text-[13.5px] leading-[1.6] text-[#5f6b66] sm:text-[14.5px]">
              Save this code and enter it while registering on Zodiac Pluss to claim your referral benefit.
            </p>
          </div>
        </section>

        {/* Primary CTA */}
        <button
          type="button"
          onClick={() => onNavigate?.('Coming Soon')}
          className="zp-rise zp-d4 group mt-8 inline-flex w-full max-w-[420px] items-center justify-center gap-3 rounded-full bg-[#0f3d2e] px-8 py-[18px] text-[17px] font-semibold text-white shadow-[0_14px_30px_-12px_rgba(15,61,46,0.55)] transition-all duration-200 hover:bg-[#145240] hover:shadow-[0_18px_36px_-12px_rgba(15,61,46,0.6)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5c9e7c] focus-visible:ring-offset-2 sm:text-lg"
        >
          Explore Zodiac Pluss App
          <ArrowRightIcon className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
        </button>

        {/* Features */}
        <ul className="zp-rise zp-d5 mt-14 grid w-full grid-cols-4">
          {FEATURES.map(({ icon, label }, index) => (
            <li
              key={label.join(' ')}
              className={`flex flex-col items-center px-1 text-center ${
                index > 0 ? 'border-l border-[#e3e7df]' : ''
              }`}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e9efe8] text-[#1f4d3c] sm:h-[60px] sm:w-[60px]">
                {icon}
              </span>
              <span className="mt-3 text-[12px] leading-[1.45] text-[#4b5853] sm:text-[14px]">
                {label[0]}
                <br />
                {label[1]}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @keyframes zpRise {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .zp-rise { animation: zpRise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .zp-d1 { animation-delay: 0.08s; }
        .zp-d2 { animation-delay: 0.16s; }
        .zp-d3 { animation-delay: 0.24s; }
        .zp-d4 { animation-delay: 0.32s; }
        .zp-d5 { animation-delay: 0.4s; }
        @media (prefers-reduced-motion: reduce) {
          .zp-rise { animation: none; }
        }
      `}</style>
    </main>
  )
}
