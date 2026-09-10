import { useEffect, useRef, useState } from 'react'
import { DotLottieReact, setWasmUrl, type DotLottie } from '@lottiefiles/dotlottie-react'
import splashAnimation from '@/assets/splash.lottie?url'

// Serve the renderer's WASM from our own build instead of the player's
// default CDN, so the splash has no third-party runtime dependency.
setWasmUrl(
  new URL(
    '../../node_modules/@lottiefiles/dotlottie-web/dist/dotlottie-player.wasm',
    import.meta.url,
  ).href,
)

const PLAYBACK_SPEED = 1.5 // 4 s animation → ~2.7 s
const EXIT_DURATION = 400 // ms fade-out transition
// The site must never stay stuck behind the splash: if the animation has not
// finished (or failed to load) by then, dismiss it anyway.
const SAFETY_TIMEOUT = 6000 // ms

interface SplashScreenProps {
  onFinish: () => void
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const [exiting, setExiting] = useState(false)
  const finishedRef = useRef(false)

  const finish = () => {
    if (finishedRef.current) return
    finishedRef.current = true
    setExiting(true)
    setTimeout(onFinish, EXIT_DURATION)
  }

  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const safety = setTimeout(finish, SAFETY_TIMEOUT)
    return () => {
      clearTimeout(safety)
      document.body.style.overflow = prevOverflow
    }
  }, [])

  const handleRef = (instance: DotLottie | null) => {
    if (!instance) return
    instance.addEventListener('complete', finish)
    instance.addEventListener('loadError', finish)
  }

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
      <div className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px]" aria-hidden="true">
        <DotLottieReact
          src={splashAnimation}
          autoplay
          loop={false}
          speed={PLAYBACK_SPEED}
          dotLottieRefCallback={handleRef}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  )
}
