interface HeroSectionProps {
  onNavigate: (page: string) => void
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <div className="px-3 sm:px-6 pt-3 pb-4">
      {/* Hero card container — rounded, contained */}
      <div
        className="relative overflow-hidden w-full flex flex-col justify-between"
        style={{
          height: "calc(100dvh - 72px)",
          minHeight: "520px",
          borderRadius: "28px",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.08)",
        }}
      >
        {/* Background video (PRESERVED) */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="https://res.cloudinary.com/pp0lpskp/video/upload/v1787393149/169025-840244222_medium_us3ejw.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
  
        {/* Soft gradient washes for readability matching lotus video theme */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              110deg,
              rgba(61, 59, 62, 0.85) 12%,
              rgba(30, 30, 28, 0.72) 55%,
              rgba(54, 51, 55, 0.45) 10%,
              transparent 50%
            )`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
          
          }}
        />

        {/* Hero Content — original Figma style */}
        <div
          className="relative z-10 flex flex-col justify-center flex-1 max-w-3xl"
          style={{
            paddingLeft: "clamp(20px, 6vw, 90px)",
            paddingRight: "clamp(20px, 4vw, 40px)",
            paddingTop: "clamp(80px, 10vw, 120px)",
            paddingBottom: "clamp(20px, 3vw, 40px)",
          }}
        >
          {/* Giant "ZODIAC PLUSS" masked with live video */}
          <div className="relative mb-4 sm:mb-6 select-none max-w-[620px] w-full">
            <h1 className="sr-only">ZODIAC PLUSS</h1>
            <svg
              viewBox="0 0 620 230"
              className="w-full h-auto block"
              style={{ overflow: 'visible' }}
              aria-hidden="true"
            >
              <defs>
                <clipPath id="zodiacVideoClip">
                  <text
                    x="0"
                    y="100"
                    fontFamily="'Inter', sans-serif"
                    fontWeight="900"
                    fontSize="116"
                    letterSpacing="-0.03em"
                  >
                    ZODIAC
                  </text>
                  <text
                    x="0"
                    y="210"
                    fontFamily="'Inter', sans-serif"
                    fontWeight="900"
                    fontSize="116"
                    letterSpacing="-0.03em"
                  >
                    PLUSS
                  </text>
                </clipPath>
              </defs>
              <foreignObject x="0" y="0" width="620" height="230" clipPath="url(#zodiacVideoClip)">
                <video
                  src="https://res.cloudinary.com/pp0lpskp/video/upload/v1787393142/141454-777657300_medium_tgotgs.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                  }}
                />
              </foreignObject>
            </svg>
          </div>

          {/* Tagline */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-base" style={{ color: "#5eb8e8" }}></span>
            <span
              className="text-sm sm:text-base font-bold tracking-wide"
              style={{ color: "#2a7d6e", fontFamily: "'Inter', sans-serif" }}
            >We Care Your Life!
            </span>
          </div>

          {/* Subtitle */}
          <p
            className="text-xl sm:text-2xl font-semibold leading-snug mb-8 max-w-md"
            style={{ color: "#c7c7d6ff", fontFamily: "'Inter', sans-serif" }}
          >
            Take Guidance under<br />Professional assistance
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate("Services")}
              className="flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full text-white font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.03] cursor-pointer border-0"
              style={{ background: "linear-gradient(90deg, #5eb8e8 0%, #8fd06a 100%)" }}
            >
              Explore Services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button
              onClick={() => onNavigate("About Us")}
              className="flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 hover:scale-[1.03] cursor-pointer bg-transparent"
              style={{
                border: "2px solid #428cab",
                color: "#428cabff",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Visit Our Portfolio
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>


      </div>
    </div>
  )
}
