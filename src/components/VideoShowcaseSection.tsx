import React, { useState, useEffect, useRef, useCallback } from 'react'

export interface ShowcaseVideo {
  id: string
  title: string
  subtitle?: string
  videoUrl: string
  poster?: string
}

/* ─────────────────────────────────────────────────────────────────
   DEFAULT VIDEO LIST
   👉 Easily replace these URLs with your Cloudinary video links!
   ───────────────────────────────────────────────────────────────── */
export const DEFAULT_SHOWCASE_VIDEOS: ShowcaseVideo[] = [

  {
    id: '1',
    title: 'Signs of an Exhausted mind',
    subtitle: 'Authentic Information',
    videoUrl: 'https://res.cloudinary.com/pp0lpskp/video/upload/v1789419814/WhatsApp_Video_2026-09-15_at_2.17.23_AM_1_pwnhfu.mp4',
  },
  {
    id: '2',
    title: 'Sagittarius Must Listen',
    subtitle: 'Traditional approach for Zodiac Signs',
    videoUrl: 'https://res.cloudinary.com/pp0lpskp/video/upload/v1789419841/WhatsApp_Video_2026-09-15_at_2.24.26_AM_1_ya0rqj.mp4',
  },
  {
    id: '3',
    title: 'Reality Behind Life & Death',
    subtitle: 'Wellness Advice',
    videoUrl: 'https://res.cloudinary.com/pp0lpskp/video/upload/v1789419370/WhatsApp_Video_2026-09-15_at_2.21.51_AM_mcw2u2.mp4',
  },
  {
    id: '4',
    title: 'Relationship Truth',
    subtitle: 'Truth Or Faith?',
    videoUrl: 'https://res.cloudinary.com/pp0lpskp/video/upload/v1789419383/WhatsApp_Video_2026-09-15_at_2.23.38_AM_rceu1v.mp4',
  },
  {
    id: '5',
    title: 'Truth About Indian Society',
    subtitle: 'Authentic Transformations',
    videoUrl: 'https://res.cloudinary.com/pp0lpskp/video/upload/v1789421055/WhatsApp_Video_2026-09-15_at_2.52.47_AM_rzljni.mp4',
  },
  {
    id: '6',
    title: 'Root Cause of Depression',
    subtitle: 'Wellness Advice',
    videoUrl: 'https://res.cloudinary.com/pp0lpskp/video/upload/v1789421055/WhatsApp_Video_2026-09-15_at_2.52.48_AM_feqsu0.mp4',
  },
  {
    id: '7',
    title: 'Providing Traditional Astrology',
    subtitle: 'As an Experienced Astologer',
    videoUrl: 'https://res.cloudinary.com/pp0lpskp/video/upload/v1789421055/WhatsApp_Video_2026-09-15_at_2.52.47_AM_rzljni.mp4',
  },
]

interface VideoShowcaseSectionProps {
  dark?: boolean
  videos?: ShowcaseVideo[]
  title?: string
  subtitle?: string
}

export default function VideoShowcaseSection({
  dark = false,
  videos = DEFAULT_SHOWCASE_VIDEOS,
  title = 'What Our Founder Says',
  subtitle = 'Solving the real life Problems, Developing upcoming Generation with Traditional knowledge and Special Care',
}: VideoShowcaseSectionProps) {
  const [activeIndex, setActiveIndex] = useState(3) // Start centered on a middle item
  const [isMuted, setIsMuted] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const [expandedVideo, setExpandedVideo] = useState<ShowcaseVideo | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Drag / swipe states
  const [isDragging, setIsDragging] = useState(false)
  const dragStartX = useRef(0)
  const currentDragDelta = useRef(0)

  // Carousel container ref
  const containerRef = useRef<HTMLDivElement>(null)
  const activeVideoRef = useRef<HTMLVideoElement | null>(null)

  // Screen size detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const total = videos.length

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total)
  }, [total])

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total)
  }, [total])

  // Auto-move carousel every 4 seconds (pauses on hover, drag, unmuted audio, or modal open)
  useEffect(() => {
    if (isHovered || isDragging || expandedVideo || !isMuted) return
    const interval = setInterval(() => {
      nextSlide()
    }, 3000)
    return () => clearInterval(interval)
  }, [isHovered, isDragging, expandedVideo, isMuted, nextSlide])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (expandedVideo) {
        if (e.key === 'Escape') setExpandedVideo(null)
        if (e.key === 'ArrowRight') {
          const currentIndex = videos.findIndex((v) => v.id === expandedVideo.id)
          setExpandedVideo(videos[(currentIndex + 1) % total])
        }
        if (e.key === 'ArrowLeft') {
          const currentIndex = videos.findIndex((v) => v.id === expandedVideo.id)
          setExpandedVideo(videos[(currentIndex - 1 + total) % total])
        }
        return
      }

      if (e.key === 'ArrowRight') nextSlide()
      if (e.key === 'ArrowLeft') prevSlide()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [expandedVideo, nextSlide, prevSlide, total, videos])

  // Update muted state of active center video
  useEffect(() => {
    if (activeVideoRef.current) {
      activeVideoRef.current.muted = isMuted
      if (!isMuted) {
        activeVideoRef.current.play().catch(() => { })
      }
    }
  }, [isMuted, activeIndex])

  // Drag / Swipe handlers
  const handlePointerDown = (clientX: number) => {
    setIsDragging(true)
    dragStartX.current = clientX
    currentDragDelta.current = 0
  }

  const handlePointerMove = (clientX: number) => {
    if (!isDragging) return
    currentDragDelta.current = clientX - dragStartX.current
  }

  const handlePointerUp = () => {
    if (!isDragging) return
    setIsDragging(false)
    if (currentDragDelta.current > 45) {
      prevSlide()
    } else if (currentDragDelta.current < -45) {
      nextSlide()
    }
    currentDragDelta.current = 0
  }

  // Calculate shortest cyclic distance offset: -2, -1, 0, 1, 2
  const getOffset = (index: number) => {
    let diff = index - activeIndex
    while (diff > total / 2) diff -= total
    while (diff < -total / 2) diff += total
    return diff
  }

  return (
    <section
      className="relative w-full py-16 md:py-24 overflow-hidden select-none transition-colors duration-300"
      style={{
        background: dark
          ? 'radial-gradient(ellipse at 50% 30%, rgba(30, 13, 64, 0.4) 0%, #000000 70%)'
          : 'radial-gradient(ellipse at 50% 30%, rgba(240, 248, 255, 0.8) 0%, #ffffff 75%)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setIsDragging(false)
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Title & Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 transition-colors"
            style={{
              color: dark ? '#ffffff' : '#1e0d40',
              fontFamily: "'Playfair Display', serif",
            }}
          >
            {title}
          </h2>
          <p
            className="text-sm sm:text-base leading-relaxed transition-colors"
            style={{ color: dark ? '#9ca3af' : '#6b5b8f' }}
          >
            {subtitle}
          </p>
        </div>

        {/* 3D Coverflow Stage */}
        <div
          ref={containerRef}
          className="relative w-full flex items-center justify-center cursor-grab active:cursor-grabbing"
          style={{
            height: isMobile ? '430px' : '530px',
            perspective: '1200px',
            perspectiveOrigin: '50% 50%',
          }}
          onMouseDown={(e) => handlePointerDown(e.clientX)}
          onMouseMove={(e) => handlePointerMove(e.clientX)}
          onMouseUp={handlePointerUp}
          onTouchStart={(e) => handlePointerDown(e.touches[0].clientX)}
          onTouchMove={(e) => handlePointerMove(e.touches[0].clientX)}
          onTouchEnd={handlePointerUp}
        >
          {videos.map((item, index) => {
            const offset = getOffset(index)
            const isActive = offset === 0
            const isVisible = Math.abs(offset) <= 2

            // Desktop vs Mobile spacing & 3D transformations
            let translateX = 0
            let translateZ = 0
            let rotateY = 0
            let scale = 1
            let opacity = 0
            let zIndex = 1

            if (offset === 0) {
              translateX = 0
              translateZ = 0
              rotateY = 0
              scale = 1
              opacity = 1
              zIndex = 30
            } else if (offset === 1) {
              translateX = isMobile ? 90 : 240
              translateZ = isMobile ? -50 : -130
              rotateY = isMobile ? -16 : -26
              scale = isMobile ? 0.82 : 0.86
              opacity = 0.88
              zIndex = 20
            } else if (offset === -1) {
              translateX = isMobile ? -90 : -240
              translateZ = isMobile ? -50 : -130
              rotateY = isMobile ? 16 : 26
              scale = isMobile ? 0.82 : 0.86
              opacity = 0.88
              zIndex = 20
            } else if (offset === 2) {
              translateX = isMobile ? 175 : 430
              translateZ = isMobile ? -110 : -260
              rotateY = isMobile ? -24 : -36
              scale = isMobile ? 0.68 : 0.72
              opacity = isMobile ? 0 : 0.65
              zIndex = 10
            } else if (offset === -2) {
              translateX = isMobile ? -175 : -430
              translateZ = isMobile ? -110 : -260
              rotateY = isMobile ? 24 : 36
              scale = isMobile ? 0.68 : 0.72
              opacity = isMobile ? 0 : 0.65
              zIndex = 10
            } else {
              translateX = offset > 0 ? (isMobile ? 250 : 580) : isMobile ? -250 : -580
              translateZ = -380
              rotateY = offset > 0 ? -45 : 45
              scale = 0.5
              opacity = 0
              zIndex = 1
            }

            return (
              <div
                key={item.id}
                onClick={(e) => {
                  if (isActive) {
                    // Check if clicked the volume toggle
                    const target = e.target as HTMLElement
                    if (!target.closest('[data-volume-btn]')) {
                      setExpandedVideo(item)
                    }
                  } else {
                    setActiveIndex(index)
                  }
                }}
                className="absolute select-none will-change-transform"
                style={{
                  width: isMobile ? '185px' : '270px',
                  height: isMobile ? '330px' : '480px',
                  transform: `translateX(calc(-50% + ${translateX}px)) translateY(-50%) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  top: '50%',
                  left: '50%',
                  zIndex,
                  opacity,
                  pointerEvents: isVisible ? 'auto' : 'none',
                  cursor: isActive ? 'pointer' : 'pointer',
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transition: 'transform 260ms cubic-bezier(0.2, 0.9, 0.35, 1), opacity 200ms ease, filter 200ms ease',
                }}
              >
                <div
                  className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden group shadow-2xl transition-all duration-200"
                  style={{
                    boxShadow: isActive
                      ? dark
                        ? '0 25px 60px -10px rgba(0, 0, 0, 0.9), 0 0 35px rgba(94, 184, 232, 0.35)'
                        : '0 25px 60px -10px rgba(30, 13, 64, 0.35), 0 0 25px rgba(94, 184, 232, 0.3)'
                      : dark
                        ? '0 15px 35px -5px rgba(0,0,0,0.7)'
                        : '0 15px 35px -5px rgba(30, 13, 64, 0.15)',
                    border: isActive
                      ? '2px solid rgba(94, 184, 232, 0.6)'
                      : '1px solid rgba(255, 255, 255, 0.15)',
                    background: '#09090b',
                  }}
                >
                  {/* Video Player / Poster */}
                  <video
                    ref={isActive ? activeVideoRef : null}
                    src={item.videoUrl}
                    poster={item.poster}
                    autoPlay={isActive}
                    loop
                    playsInline
                    muted={isActive ? isMuted : true}
                    preload={isActive ? 'auto' : 'metadata'}
                    className="w-full h-full object-cover pointer-events-none"
                  />

                  {/* Gradient overlay on all cards */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10 pointer-events-none transition-opacity duration-300"
                    style={{ opacity: isActive ? 0.75 : 0.85 }}
                  />

                  {/* Top-Right: Volume / Audio Toggle Button (Only on Active Center Card) */}
                  {isActive && (
                    <button
                      type="button"
                      data-volume-btn="true"
                      onClick={(e) => {
                        e.stopPropagation()
                        setIsMuted((prev) => !prev)
                      }}
                      className="absolute top-3.5 right-3.5 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white shadow-lg transition-transform active:scale-95 cursor-pointer"
                      title={isMuted ? 'Click to listen with sound' : 'Mute sound'}
                    >
                      {isMuted ? (
                        /* Mute / Volume-X Icon */
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                          <line x1="23" y1="9" x2="17" y2="15" />
                          <line x1="17" y1="9" x2="23" y2="15" />
                        </svg>
                      ) : (
                        /* Sound wave / Volume-2 Icon */
                        <svg className="w-5 h-5 text-[#5eb8e8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                        </svg>
                      )}
                    </button>
                  )}

                  {/* Top-Left: Expand indicator badge (Active Card) */}
                  {isActive && (
                    <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-white/80 text-[10px] font-medium tracking-wide uppercase">
                      <svg className="w-3 h-3 text-[#5eb8e8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="15 3 21 3 21 9" />
                        <polyline points="9 21 3 21 3 15" />
                        <line x1="21" y1="3" x2="14" y2="10" />
                        <line x1="3" y1="21" x2="10" y2="14" />
                      </svg>
                      Expand
                    </div>
                  )}

                  {/* Bottom: Card Label / Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10">
                    <h3 className="text-white font-bold text-sm sm:text-base leading-tight drop-shadow-md">
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <p className="text-gray-300 text-xs mt-0.5 font-normal line-clamp-1 opacity-80">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Navigation: < and > circular buttons */}
        <div className="flex items-center justify-center gap-6 mt-6 md:mt-8">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous video"
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm cursor-pointer"
            style={{
              background: dark ? 'rgba(30, 13, 64, 0.4)' : '#ffffff',
              border: '1.5px solid rgba(94, 184, 232, 0.55)',
              color: dark ? '#5eb8e8' : '#2ba4dc',
              boxShadow: '0 4px 14px rgba(94, 184, 232, 0.15)',
            }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next video"
            className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm cursor-pointer"
            style={{
              background: dark ? 'rgba(30, 13, 64, 0.4)' : '#ffffff',
              border: '1.5px solid rgba(94, 184, 232, 0.55)',
              color: dark ? '#5eb8e8' : '#2ba4dc',
              boxShadow: '0 4px 14px rgba(94, 184, 232, 0.15)',
            }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Drag · Click · Arrow Keys indicator */}
        <div className="text-center mt-3 sm:mt-4">
          <span
            className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.28em] transition-colors duration-300"
            style={{ color: dark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(30, 13, 64, 0.4)' }}
          >
            DRAG &nbsp;·&nbsp; CLICK &nbsp;·&nbsp; ARROW KEYS
          </span>
        </div>
      </div>

      {/* Fullscreen Video Expansion Lightbox Modal */}
      {expandedVideo && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setExpandedVideo(null)}
        >
          {/* Modal Content */}
          <div
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col items-center justify-center bg-zinc-950 rounded-3xl border border-white/15 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Title and Close Button */}
            <div className="w-full flex items-center justify-between px-6 py-4 border-b border-white/10 bg-zinc-900/60">
              <div>
                <h3 className="text-white text-base sm:text-lg font-bold">
                  {expandedVideo.title}
                </h3>
                {expandedVideo.subtitle && (
                  <p className="text-xs sm:text-sm text-gray-400">
                    {expandedVideo.subtitle}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setExpandedVideo(null)}
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                title="Close modal"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Video Player */}
            <div className="relative w-full flex items-center justify-center bg-black p-2 sm:p-4">
              <video
                src={expandedVideo.videoUrl}
                poster={expandedVideo.poster}
                controls
                autoPlay
                playsInline
                className="max-h-[70vh] w-auto max-w-full rounded-xl shadow-lg"
              />
            </div>

            {/* Modal Bottom Controls: Previous / Next buttons */}
            <div className="w-full flex items-center justify-between px-6 py-3 border-t border-white/10 bg-zinc-900/60 text-xs text-gray-400">
              <button
                type="button"
                onClick={() => {
                  const currentIndex = videos.findIndex((v) => v.id === expandedVideo.id)
                  setExpandedVideo(videos[(currentIndex - 1 + total) % total])
                }}
                className="flex items-center gap-2 text-white hover:text-[#5eb8e8] font-medium transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                Previous
              </button>
              <span className="hidden sm:inline text-gray-500">
                Press ESC to close · Arrow keys to browse
              </span>
              <button
                type="button"
                onClick={() => {
                  const currentIndex = videos.findIndex((v) => v.id === expandedVideo.id)
                  setExpandedVideo(videos[(currentIndex + 1) % total])
                }}
                className="flex items-center gap-2 text-white hover:text-[#5eb8e8] font-medium transition-colors cursor-pointer"
              >
                Next
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
