import React, { useRef, useState, useEffect } from 'react'

interface Testimonial {
  name: string
  role: string
  avatar: string
  stars: number
  quote: string
  tag: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Rajangi ',
    role: ' · Bengaluru',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&h=120&fit=crop&crop=face',
    stars: 5,
    tag: '',
    quote: 'The therapy sessions helped me navigate my most challenging career transition. Compassionate, insightful, and genuinely transformative.',
  },
  {
    name: 'Priya Mehta',
    role: 'Entrepreneur · Mumbai',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face',
    stars: 5,
    tag: 'AI Astro Insights',
    quote: 'The AI astro insights were shockingly accurate! It felt like having a personalized celestial compass available whenever I needed direction.',
  },
  {
    name: 'Rahul Verma',
    role: 'Software Architect · Delhi NCR',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&h=120&fit=crop&crop=face',
    stars: 5,
    tag: 'Vedic Kundli',
    quote: 'My personalized planetary chart gave me clarity I had been searching for years. Truly life-changing advice from certified experts.',
  },
  {
    name: 'Ananya Deshmukh',
    role: 'Marketing Lead · Pune',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop&crop=face',
    stars: 5,
    tag: 'Mindfulness & Yoga',
    quote: 'ZodiacPluss blends ancient astrological wisdom with modern mental wellness seamlessly. Highly recommend for overall emotional balance!',
  },
  {
    name: 'Aditya Raj',
    role: 'Creative Director · Chandigarh',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face',
    stars: 5,
    tag: 'Live Consultation',
    quote: 'One-on-one consultation with the senior astrologer resolved so many doubts regarding my business roadmap. Authentic and empathetic guidance.',
  },
  {
    name: 'Sneha Patel',
    role: 'HR Business Partner · Ahmedabad',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=face',
    stars: 5,
    tag: 'Corporate Wellness',
    quote: 'Our team wellness workshops received stellar feedback. Stress levels dropped and positivity flourished across departments.',
  },
]

export default function TestimonialsSection({ dark = false }: { dark?: boolean }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  // Duplicated list for extended scroll depth
  const extendedList = [...testimonials, ...testimonials, ...testimonials]

  // Continuous smooth auto-scroll when not hovering
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    let animationFrameId: number
    const step = () => {
      if (!isPaused && el) {
        el.scrollLeft += 0.85
        // Seamless loop reset
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0
        }
      }
      animationFrameId = requestAnimationFrame(step)
    }

    animationFrameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationFrameId)
  }, [isPaused])

  // Manual scroll triggers
  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const scrollAmount = 360
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <section className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* 16:9 Aspect Ratio Container with Plain White Background */}
      <div
        className={`w-full relative overflow-hidden rounded-3xl shadow-xl border flex flex-col justify-between ${
          dark ? 'bg-[#141416] border-white/10' : 'bg-white border-gray-100'
        }`}
        style={{
          aspectRatio: '16 / 9',
          minHeight: '500px',
          transition: 'background 0.4s ease',
        }}
      >
        {/* Top Header Content */}
        <div className="pt-8 sm:pt-12 md:pt-14 px-6 text-center max-w-3xl mx-auto z-10">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase border mb-3 ${
              dark ? 'bg-teal-500/10 text-teal-300 border-teal-500/30' : 'bg-teal-50 text-teal-700 border-teal-200'
            }`}
          >
            <span className="text-teal-500"></span> Verified Seeker Stories
          </div>

          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-tight mb-3 ${
              dark ? 'text-[#f5f5f5]' : 'text-gray-900'
            }`}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Loved by Seekers,{' '}
            <span style={{
              background: 'linear-gradient(90deg, #14b8a6 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Guided by Stars
            </span>
          </h2>

          <p className={`text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-2 ${dark ? 'text-[#a1a1aa]' : 'text-gray-600'}`}>
            Real readings, real turning points. Discover how personalized cosmic insights and licensed therapies bring clarity to thousands of lives.
          </p>
        </div>

        {/* Scrollable Cards Container with Side Floating Arrows */}
        <div
          className="relative w-full pb-8 sm:pb-12 pt-3"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Gradient Fade Edges */}
          <div className={`absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r to-transparent z-10 pointer-events-none ${dark ? 'from-[#141416]' : 'from-white'}`} />
          <div className={`absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l to-transparent z-10 pointer-events-none ${dark ? 'from-[#141416]' : 'from-white'}`} />

          {/* Floating Left Arrow Button */}
          <button
            onClick={() => handleScroll('left')}
            aria-label="Scroll Left"
            className={`absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full backdrop-blur-md border shadow-lg hover:text-teal-600 hover:border-teal-400 hover:scale-110 active:scale-95 flex items-center justify-center transition-all cursor-pointer ${
              dark ? 'bg-[#141416]/95 border-white/15 text-gray-300' : 'bg-white/95 border-gray-200 text-gray-700'
            }`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Floating Right Arrow Button */}
          <button
            onClick={() => handleScroll('right')}
            aria-label="Scroll Right"
            className={`absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full backdrop-blur-md border shadow-lg hover:text-teal-600 hover:border-teal-400 hover:scale-110 active:scale-95 flex items-center justify-center transition-all cursor-pointer ${
              dark ? 'bg-[#141416]/95 border-white/15 text-gray-300' : 'bg-white/95 border-gray-200 text-gray-700'
            }`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable Track */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto px-6 sm:px-12 scroll-smooth select-none cursor-grab active:cursor-grabbing"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {extendedList.map((item, idx) => (
              <div
                key={idx}
                className={`w-[280px] sm:w-[340px] md:w-[380px] rounded-2xl p-5 sm:p-6 border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between shrink-0 ${
                  dark ? 'bg-white/[0.04] hover:bg-white/[0.07] border-white/10' : 'bg-slate-50 hover:bg-white border-slate-200/80'
                }`}
              >
                {/* Header: User Avatar + Name + Stars */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-teal-400/40"
                      />
                      <div>
                        <h4 className={`text-sm sm:text-base font-bold leading-tight ${dark ? 'text-[#f5f5f5]' : 'text-gray-900'}`}>
                          {item.name}
                        </h4>
                        <p className={`text-[11px] sm:text-xs ${dark ? 'text-[#a1a1aa]' : 'text-gray-500'}`}>{item.role}</p>
                      </div>
                    </div>
                    <span className={`text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full ${dark ? 'bg-teal-500/15 text-teal-300' : 'bg-teal-100/70 text-teal-800'}`}>
                      {item.tag}
                    </span>
                  </div>

                  {/* Stars Rating */}
                  <div className="flex items-center gap-1 mb-2.5">
                    {Array.from({ length: item.stars }).map((_, i) => (
                      <span key={i} className="text-amber-400 text-sm">★</span>
                    ))}
                    <span className={`text-xs font-bold ml-1 ${dark ? 'text-[#e4e4e7]' : 'text-gray-700'}`}>5.0</span>
                  </div>

                  {/* Quote */}
                  <p className={`text-xs sm:text-[13px] leading-relaxed italic ${dark ? 'text-[#c9c9ce]' : 'text-gray-700'}`}>
                    "{item.quote}"
                  </p>
                </div>

                {/* Verified badge */}
                <div className={`mt-4 pt-3 border-t flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 ${dark ? 'border-white/10' : 'border-slate-200/60'}`}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  Verified Member
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
