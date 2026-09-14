/**
 * ScrollVideoParallax
 * A sticky looping video background behind scrollable section content.
 * No GSAP / ScrollTrigger — sections scroll naturally over the fixed video.
 */
import { type ReactNode } from 'react'

interface ScrollVideoParallaxProps {
  videoUrl: string
  /** Dark overlay opacity (0–1). Default 0.35 */
  overlayOpacity?: number
  children: ReactNode
}

export default function ScrollVideoParallax({
  videoUrl,
  overlayOpacity = 0.35,
  children,
}: ScrollVideoParallaxProps) {
  return (
    <div
      style={{
        position: 'relative',
        isolation: 'isolate',
        background: '#060412',
      }}
    >

      {/* ── Sticky video background ─────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          marginBottom: '-100vh',
          zIndex: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        <video
          src={videoUrl}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
        {/* Dark overlay for text readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `rgba(6,4,18,${overlayOpacity})`,
          }}
        />
      </div>

      {/* ── Scrollable content sits above video ─────────────────── */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  )
}
