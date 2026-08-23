import { useEffect, useState } from 'react'

const LOGO_URL =
  'https://res.cloudinary.com/pp0lpskp/image/upload/v1786032742/Zodiac_Colored_Logo_croped-removebg-preview_appzet.png'

const LOAD_DURATION = 1100 // ms — progress goes 0 -> 100%
const EXIT_DELAY = 160 // ms pause at 100% before fading out
const EXIT_DURATION = 400 // ms fade-out transition

interface SplashScreenProps {
  onFinish: () => void
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const [progress, setProgress] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    let frameId = 0
    let start: number | null = null
    let exitTimer: ReturnType<typeof setTimeout>
    let finishTimer: ReturnType<typeof setTimeout>

    const tick = (t: number) => {
      if (start === null) start = t
      const elapsed = t - start
      const pct = Math.min(100, (elapsed / LOAD_DURATION) * 100)
      setProgress(pct)
      if (pct < 100) {
        frameId = requestAnimationFrame(tick)
      } else {
        exitTimer = setTimeout(() => setExiting(true), EXIT_DELAY)
        finishTimer = setTimeout(onFinish, EXIT_DELAY + EXIT_DURATION)
      }
    }
    frameId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frameId)
      clearTimeout(exitTimer)
      clearTimeout(finishTimer)
      document.body.style.overflow = prevOverflow
    }
  }, [onFinish])

  const radius = 34
  const stroke = 3.5
  const normalizedRadius = radius - stroke * 0.5
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden select-none"
      style={{
        background: '#ffffff',
        opacity: exiting ? 0 : 1,
        transition: `opacity ${EXIT_DURATION}ms ease-out`,
        pointerEvents: exiting ? 'none' : 'auto',
      }}
    >
      {/* Side-by-side Layout: Large Circular Animated Logo + Brand & Percentage */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Circular Logo with Animated Progress Ring */}
        <div className="relative w-[68px] h-[68px] sm:w-[76px] sm:h-[76px] flex items-center justify-center shrink-0">
          <svg
            className="w-full h-full transform -rotate-90"
            viewBox={`0 0 ${radius * 2} ${radius * 2}`}
          >
            {/* Background Track */}
            <circle
              stroke="#e5e7eb"
              fill="transparent"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
            {/* Animated Progress Circle */}
            <circle
              stroke="#3bb2ca"
              fill="transparent"
              strokeWidth={stroke}
              strokeDasharray={`${circumference} ${circumference}`}
              style={{
                strokeDashoffset,
                transition: 'stroke-dashoffset 40ms linear',
              }}
              strokeLinecap="round"
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
          </svg>

          {/* Centered Logo Inside Ring */}
          <div className="absolute inset-[4px] rounded-full overflow-hidden flex items-center justify-center bg-white">
            <img
              src={LOGO_URL}
              alt="ZodiacPluss"
              className="w-24 h-24 sm:w-18 sm:h-18 object-contain"
            />
          </div>
        </div>

        {/* Text Details: Brand Title & Percentage */}
        <div className="flex flex-col justify-center leading-tight">
          <h1
            className="text-[19px] sm:text-[21px] font-bold text-gray-900 tracking-tight"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            ZodiacPluss
          </h1>
          <span
            className="text-[14px] sm:text-[15px] font-normal text-gray-400 tabular-nums mt-0.5"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {Math.round(progress)}%
          </span>
        </div>
      </div>
    </div>
  )
}
