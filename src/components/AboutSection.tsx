import { useState, useEffect, useCallback, useRef } from "react"

interface AboutSectionProps {
  onNavigate: (page: string) => void
  dark?: boolean
}

const services = [
  {
    id: "01",
    title: "Personalized Horoscope",
    desc: "Get insights written just for you",
    bg: "https://res.cloudinary.com/pp0lpskp/image/upload/v1786017276/card-2_uf00jk.jpg",
  },
  {
    id: "02",
    title: "Live Sessions with Experts",
    desc: "Talk to top astrologers and therapists in real time",
    bg: "https://res.cloudinary.com/pp0lpskp/image/upload/v1786017357/card-11_osbl2y.jpg",
  },
  {
    id: "03",
    title: "AI-Powered Astro Insights",
    desc: "Smart technology meets astrology to reveal what matters most.",
    bg: "https://res.cloudinary.com/pp0lpskp/image/upload/v1786017278/card-4_pseunb.jpg",
  },
  {
    id: "04",
    title: "Therapy That Helps",
    desc: "Compassionate therapists for mental clarity and healing",
    bg: "https://res.cloudinary.com/pp0lpskp/image/upload/v1786017276/card-3_x8jb85.jpg",
  },
]

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2L13.5 8.5L20 7L15.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L8.5 12L4 7L10.5 8.5L12 2Z"/>
      </svg>
    ),
    label: "Trusted Experts",
    sub: "Verified astrologers and therapists",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    label: "Private & Secure",
    sub: "Your conversations are 100% confidential",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    label: "Holistic Support",
    sub: "Mind, emotions, and life guidance",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    label: "Instant Access",
    sub: "Connect in minutes, anytime, anywhere",
  },
]

export default function AboutSection({ onNavigate, dark = false }: AboutSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const total = services.length

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total)
  }, [total])

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total)
  }, [total])

  // Auto-scroll every 3s, pause on hover
  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(goNext, 3000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [paused, goNext])

  return (
    <section className="py-20 px-4 sm:px-6" style={{ background: dark ? "#000000" : "#f8f6ff", transition: "background 0.3s ease" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text content */}
          <div className="lg:w-[42%] flex-shrink-0">

            {/* Heading */}
            <h2
              className="text-[36px] sm:text-[42px] md:text-[50px] font-semibold leading-tight mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span style={{ color: dark ? '#f5f5f5' : '#1e0d40' }}>Guidance that</span>
              <br />
              <span style={{ color: dark ? 'linear-gradient(90deg, #5eb8e8 0%, #8fd06a 100%)' : '' }}>understands you</span>
            </h2>

            {/* Teal underline accent */}
            <div className="w-12 h-1 bg-teal-500 rounded mb-6" />

            <p className="text-base leading-relaxed mb-8 max-w-md" style={{ color: dark ? '#a1a1aa' : '#4a4a6a' }}>
              ZodiacPluss blends ancient astrology with modern psychological insights to help you understand yourself better and make confident decisions.
            </p>

            {/* Feature badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((f) => (
                <div key={f.label} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: dark ? 'rgba(20,184,166,0.12)' : '#f0fdfa', border: dark ? '1px solid rgba(20,184,166,0.28)' : '1px solid #99f6e4', color: '#0d9488' }}>
                    {f.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: dark ? '#e4e4e7' : '#1e0d40' }}>{f.label}</div>
                    <div className="text-xs leading-tight mt-0.5" style={{ color: dark ? '#a1a1aa' : '#6b5b8f' }}>{f.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="/services"
                onClick={(e) => { e.preventDefault(); onNavigate("Services") }}
                className="flex items-center gap-2 text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-md cursor-pointer no-underline"
               style={{ background: "linear-gradient(90deg, #5eb8e8 0%, #8fd06a 100%)"  }}
              >
                Explore Services
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a
                href="/about-us"
                onClick={(e) => { e.preventDefault(); onNavigate("About Us") }}
                className="flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 cursor-pointer no-underline"
                style={{ border: dark ? '1px solid rgba(255,255,255,0.3)' : '1px solid #1d6499ff', color: dark ? '#f5f5f5' : '#1d6499ff' }}
              >
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                   <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Auto-scrolling card carousel */}
          <div
            className="lg:w-[58%] w-full"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Carousel viewport */}
            <div
              className="relative overflow-hidden rounded-2xl shadow-xl w-full"
              style={{ height: "clamp(240px, 32vw, 420px)" }}
            >
              {/* Sliding track */}
              <div
                className="flex h-full"
                style={{
                  width: `${total * 100}%`,
                  transform: `translateX(-${(activeIndex * 100) / total}%)`,
                  transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {services.map((svc, i) => (
                  <div
                    key={svc.id}
                    className="h-full flex-shrink-0 px-1"
                    style={{ width: `${100 / total}%` }}
                  >
                    <div className="w-full h-full rounded-2xl overflow-hidden relative group cursor-pointer border border-white/20">
                      {/* Background image - edge-to-edge fit with zero black borders */}
                      <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url('${svc.bg}')` }}
                      />
                      {/* Gentle ambient gradient for card depth */}
                      <div
                        className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
                        style={{
                          background: i === activeIndex
                            ? "linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.25) 100%)"
                            : "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%)",
                        }}
                      />
                      {/* Minimalist index indicator */}
                      <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between pointer-events-none">
                        <span className="text-xs font-mono text-white/70 font-bold px-2 py-0.5 rounded bg-black/30 backdrop-blur-sm">
                          {svc.id}
                        </span>
                        {i === activeIndex && (
                          <div> 
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Nav arrows */}
              <button
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-black/60 transition-all z-20 shadow-lg cursor-pointer"
                aria-label="Previous slide"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <button
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-black/60 transition-all z-20 shadow-lg cursor-pointer"
                aria-label="Next slide"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>

            {/* Dots + counter */}
            <div className="flex items-center justify-center gap-2 mt-5">
              {services.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className="transition-all duration-300"
                  style={{
                    width: i === activeIndex ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    background: i === activeIndex ? "#35acaeff" : (dark ? "rgba(250, 250, 250, 0.25)" : "#afbfc0ff"),
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

