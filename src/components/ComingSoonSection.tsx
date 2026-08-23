/* ─────────────────────────────────────────────────────────────────
   ComingSoonSection
   Clean plain white background "Something Extraordinary is Arriving" banner —
   headline, live countdown, notify-me form, app showcase mockup,
   and store badges.
   ───────────────────────────────────────────────────────────────── */
import { useState, useEffect } from 'react'

const UI_IMAGE =
  'https://res.cloudinary.com/pp0lpskp/image/upload/v1787500714/app_showcase_ui_wsc2kc.png'

interface ComingSoonSectionProps {
  onNavigate?: (page: string) => void
}

export default function ComingSoonSection({ onNavigate }: ComingSoonSectionProps) {
  // Target launch date: 7th of October 2026
  const LAUNCH_DATE = new Date('2026-10-07T00:00:00+05:30').getTime()

  const calculateTimeLeft = () => {
    const now = new Date().getTime()
    const distance = LAUNCH_DATE - now

    if (distance <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    return { days, hours, minutes, seconds }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft)

  useEffect(() => {
    setTimeLeft(calculateTimeLeft())
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formatNum = (num: number) => String(num).padStart(2, '0')

  return (
    <section className="relative w-full overflow-hidden bg-white text-gray-900">
      {/* Main Content Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 xl:gap-8 items-center">
          {/* Left Column: Heading, description, countdown, notify form */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center">
            {/* Main Headline */}
            <h2
              className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-bold leading-[1.12] text-[#141c2e] tracking-tight mb-5 select-none"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Something<br />
              Extraordinary<br />
              is Arriving.
            </h2>

            {/* Description */}
            <p
              className="text-sm sm:text-[15px] lg:text-base text-gray-600 leading-relaxed max-w-xl mb-7 font-light"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Zodiacpluss: India&apos;s first platform connecting trusted astrologers and licensed therapists for holistic wellness. Get Guidance Under Professional Assistance.
            </p>

            {/* Live Countdown Timer */}
            <div className="flex items-center gap-2.5 sm:gap-4 lg:gap-5 mb-7 select-none">
              {/* Days */}
              <div className="flex flex-col items-center">
                <span
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#b8860b]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {formatNum(timeLeft.days)}
                </span>
                <span className="text-[11px] sm:text-xs text-gray-500 mt-1 font-medium tracking-wider">
                  Days
                </span>
              </div>

              <span className="text-2xl sm:text-3xl text-[#b8860b] font-light pb-4 sm:pb-5 select-none">:</span>

              {/* Hours */}
              <div className="flex flex-col items-center">
                <span
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#b8860b]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {formatNum(timeLeft.hours)}
                </span>
                <span className="text-[11px] sm:text-xs text-gray-500 mt-1 font-medium tracking-wider">
                  Hours
                </span>
              </div>

              <span className="text-2xl sm:text-3xl text-[#b8860b] font-light pb-4 sm:pb-5 select-none">:</span>

              {/* Minutes */}
              <div className="flex flex-col items-center">
                <span
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#b8860b]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {formatNum(timeLeft.minutes)}
                </span>
                <span className="text-[11px] sm:text-xs text-gray-500 mt-1 font-medium tracking-wider">
                  Minutes
                </span>
              </div>

              <span className="text-2xl sm:text-3xl text-[#b8860b] font-light pb-4 sm:pb-5 select-none">:</span>

              {/* Seconds */}
              <div className="flex flex-col items-center">
                <span
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#b8860b]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {formatNum(timeLeft.seconds)}
                </span>
                <span className="text-[11px] sm:text-xs text-gray-500 mt-1 font-medium tracking-wider">
                  Seconds
                </span>
              </div>
            </div>

            {/* Tagline */}
            <p
              className="text-sm sm:text-[15px] font-bold mb-3.5 tracking-wide"
              style={{ color: '#0d9488', fontFamily: "'Inter', sans-serif" }}
            >
              We Care Your Life!
            </p>

            {/* Download CTA Bar */}
            <div className="relative max-w-lg w-full mb-3">
              <div
                className="flex items-center justify-between rounded-full p-1.5 sm:p-2 border border-gray-200/90 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.09)] transition-all duration-300"
              >
                <span
                  className="flex-1 min-w-0 text-slate-500 text-xs sm:text-sm pl-4 sm:pl-5 pr-2 font-normal select-none truncate"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Be the first to download after launching!
                </span>
                <button
                  type="button"
                  onClick={() => onNavigate?.('Coming Soon')}
                  className="shrink-0 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-white font-bold text-xs sm:text-sm transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-md hover:shadow-lg cursor-pointer border-0 select-none"
                  style={{
                    background: 'linear-gradient(90deg, #4eafe9 0%, #76cb68 100%)',
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Download Now
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: App Showcase Mockups + App Store Badges */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-center lg:items-end justify-center">
            {/* 3D Mobile App Showcase Image (Large & Prominent) */}
            <div className="relative w-full max-w-[560px] sm:max-w-[640px] md:max-w-[700px] lg:max-w-none flex justify-center lg:justify-end">
              <img
                src={UI_IMAGE}
                alt="ZodiacPluss Mobile App Interface Preview"
                className="w-full max-w-[580px] sm:max-w-[640px] lg:max-w-[680px] xl:max-w-[760px] 2xl:max-w-[820px] h-auto object-contain drop-shadow-[0_28px_60px_rgba(0,0,0,0.13)] hover:scale-[1.02] transition-transform duration-500 origin-center lg:origin-right"
              />
            </div>

            {/* Coming Soon to App Stores */}
            <div className="mt-6 sm:mt-8 flex flex-col items-center lg:items-end gap-2.5">
              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600 font-medium tracking-wide">
                <span>Coming Soon to...</span>
                <span className="text-amber-500 text-sm">✦</span>
              </div>

              <div className="flex items-center gap-3">
                {/* Apple App Store Badge */}
                <a
                  href="#apple-store"
                  onClick={(e) => e.preventDefault()}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black text-white hover:bg-gray-800 transition-all duration-200 shadow-sm"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.66-.82 1.11-1.96.99-3.1-.96.04-2.12.64-2.8 1.44-.6.69-1.12 1.83-1 2.95 1.07.08 2.16-.47 2.81-1.29z"/>
                  </svg>
                  <div className="flex flex-col text-left leading-none">
                    <span className="text-[8px] text-gray-300 uppercase tracking-tight">Download on the</span>
                    <span className="text-[12px] font-bold text-white tracking-tight">App Store</span>
                  </div>
                </a>

                {/* Google Play Store Badge */}
                <a
                  href="#google-play"
                  onClick={(e) => e.preventDefault()}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black text-white hover:bg-gray-800 transition-all duration-200 shadow-sm"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186c-.365-.37-.61-.925-.61-1.606V3.42c0-.68.245-1.236.61-1.606zm11.238 11.241l2.483 2.483-11.45 6.47 8.967-8.953zm2.483-2.11l-2.483 2.483L5.88 4.474l11.45 6.471zm1.053.595l2.673 1.512c.791.448.791 1.177 0 1.625l-2.673 1.512-2.148-2.324 2.148-2.325z"/>
                  </svg>
                  <div className="flex flex-col text-left leading-none">
                    <span className="text-[8px] text-gray-300 uppercase tracking-tight">GET IT ON</span>
                    <span className="text-[12px] font-bold text-white tracking-tight">Google Play</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
