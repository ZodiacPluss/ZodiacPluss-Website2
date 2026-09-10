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
          {/* Giant "ZODIAC PLUSS" masked with live video.

              Two renderings of the same wordmark — identical viewBox, font,
              size and glyph positions, so the layout is the same either way:

                • .zodiac-wordmark-video — SVG <foreignObject> video clipped
                  by an SVG <clipPath>. Chromium and Firefox.
                • .zodiac-wordmark-still + .zodiac-wordmark-live — WebKit.
                  WebKit ignores clip-path on <foreignObject> (bug 23113), so
                  the video painted as a bare rectangle in Safari and every
                  iOS browser. Here a plain HTML <video> sits on top of the
                  wordmark and is clipped with CSS `clip-path: url(#…)`, which
                  WebKit does honour. The <text> underneath is filled with a
                  still frame of the same video, so the letters are already
                  correct before playback starts (or if autoplay is refused).

              index.css picks the pair per engine. */}
          <div className="relative mb-4 sm:mb-6 select-none max-w-[620px] w-full">
            <h1 className="sr-only">ZODIAC PLUSS</h1>

            <svg
              viewBox="0 0 620 230"
              className="zodiac-wordmark-video w-full h-auto block"
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

            {/* WebKit: SVG wordmark, three layers deep so it can never come
                out blank —
                  1. <text> with a gradient fill (always renders);
                  2. an animated-WebP <image> of the video, clipped to the
                     glyphs with an SVG-native clipPath (WebKit honours that;
                     only <foreignObject> clipping is broken);
                  3. the real <video> in the HTML overlay below, on top.
                Whichever of 2/3 the engine renders, the letters move. */}
            <svg
              viewBox="0 0 620 230"
              className="zodiac-wordmark-still w-full h-auto"
              style={{ overflow: 'visible' }}
              aria-hidden="true"
            >
              <defs>
                {/* Native SVG clip, viewBox units, for the <image> layer. */}
                <clipPath id="zodiacWordmarkTextClip">
                  <text x="0" y="100" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="116" letterSpacing="-0.03em">
                    ZODIAC
                  </text>
                  <text x="0" y="210" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="116" letterSpacing="-0.03em">
                    PLUSS
                  </text>
                </clipPath>
                {/* Clip for the HTML <video> below. objectBoundingBox units map
                    0–1 onto the video's own box; the scale() brings the 620×230
                    glyph coordinates into that range. The video box keeps the
                    same 620:230 ratio as this SVG, so the mapping is uniform. */}
                <clipPath id="zodiacWordmarkClipBox" clipPathUnits="objectBoundingBox">
                  <g transform={`scale(${1 / 620}, ${1 / 230})`}>
                    <text x="0" y="100" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="116" letterSpacing="-0.03em">
                      ZODIAC
                    </text>
                    <text x="0" y="210" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="116" letterSpacing="-0.03em">
                      PLUSS
                    </text>
                  </g>
                </clipPath>
                <linearGradient id="zodiacWordmarkGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#8a6a1f" />
                  <stop offset="45%" stopColor="#e6c877" />
                  <stop offset="100%" stopColor="#6f5518" />
                </linearGradient>
              </defs>
              {(
                [
                  { text: 'ZODIAC', y: 100 },
                  { text: 'PLUSS', y: 210 },
                ] as const
              ).map(({ text, y }) => (
                <text
                  key={text}
                  x="0"
                  y={y}
                  fill="url(#zodiacWordmarkGradient)"
                  fontFamily="'Inter', sans-serif"
                  fontWeight="900"
                  fontSize="116"
                  letterSpacing="-0.03em"
                >
                  {text}
                </text>
              ))}
              {/* 5 s / 12 fps animated WebP rendered by Cloudinary from the
                  same clip (~350 KB, vs 8.8 MB for the MP4). */}
              <image
                href="https://res.cloudinary.com/pp0lpskp/video/upload/w_620,h_230,c_fill,du_5,fps_12,fl_animated,fl_awebp,q_50/v1787393142/141454-777657300_medium_tgotgs.webp"
                x="0"
                y="0"
                width="620"
                height="230"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#zodiacWordmarkTextClip)"
              />
            </svg>

            {/* WebKit: live video, clipped to the letterforms by the clipPath
                above. The clip is applied to the WRAPPER, not the <video>:
                WebKit paints video in its own accelerated layer and drops an
                SVG-referenced clip-path set directly on it (the video simply
                disappears). Clipping the parent works. */}
            <div className="zodiac-wordmark-live" aria-hidden="true">
              <video
                src="https://res.cloudinary.com/pp0lpskp/video/upload/v1787393142/141454-777657300_medium_tgotgs.mp4"
                poster="https://res.cloudinary.com/pp0lpskp/video/upload/so_2,w_620,h_230,c_fill/v1787393142/141454-777657300_medium_tgotgs.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />
            </div>
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
            <a
              href="/services"
              onClick={(e) => { e.preventDefault(); onNavigate("Services") }}
              className="flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full text-white font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.03] cursor-pointer border-0 no-underline"
              style={{ background: "linear-gradient(90deg, #5eb8e8 0%, #8fd06a 100%)" }}
            >
              Explore Services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/about-us"
              onClick={(e) => { e.preventDefault(); onNavigate("About Us") }}
              className="flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 hover:scale-[1.03] cursor-pointer bg-transparent no-underline"
              style={{
                border: "2px solid #428cab",
                color: "#428cabff",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              About Us
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>


      </div>
    </div>
  )
}
