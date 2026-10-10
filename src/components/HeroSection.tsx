import { Reveal } from "@/components/motion"

interface HeroSectionProps {
  onNavigate: (page: string) => void
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <div className="px-3 pt-3 pb-4 sm:px-6">
      <section
        className="relative flex w-full flex-col justify-between overflow-hidden"
        style={{
          height: "calc(100dvh - 72px)",
          minHeight: "520px",
          borderRadius: "28px",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.08)",
        }}
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="https://res.cloudinary.com/o6laufzn/video/upload/v1790936025/back-hero.mp4"
          aria-hidden="true"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            clipPath: "polygon(0 0, 63% 0, 47% 100%, 0 100%)",

            background:
              "linear-gradient(110deg, rgba(43,43,47,0.97), rgba(43,43,47,0.91))",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, transparent 42%, rgba(10,10,16,0.08) 100%)",
          }}
        />

        <div
          className="relative z-10 flex flex-col justify-center flex-1 max-w-3xl"
          style={{
            paddingLeft: "clamp(20px, 6vw, 90px)",

            paddingRight: "clamp(20px, 4vw, 40px)",

            paddingTop: "clamp(80px, 10vw, 120px)",

            paddingBottom: "clamp(20px, 3vw, 40px)",
          }}
        >
          <Reveal
            className="relative mb-4 sm:mb-6 select-none max-w-[620px] w-full"
            y={26}
            scale={0.96}
            duration={1.1}
            delay={0.1}
          >
            <h1 className="sr-only">ZodiacPluss</h1>

            <svg
              viewBox="0 0 620 230"
              className="zodiac-wordmark-video w-full h-auto block"
              style={{ overflow: "visible" }}
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
              <foreignObject
                x="0"
                y="0"
                width="620"
                height="230"
                clipPath="url(#zodiacVideoClip)"
              >
                <video
                  src="https://res.cloudinary.com/o6laufzn/video/upload/v1790938090/Zodiac.textoverlay.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  style={{
                    width: "100%",

                    height: "100%",

                    objectFit: "cover",

                    objectPosition: "center",

                    display: "block",
                  }}
                />
              </foreignObject>
            </svg>

            <svg
              viewBox="0 0 620 230"
              className="zodiac-wordmark-still w-full h-auto"
              style={{ overflow: "visible" }}
              aria-hidden="true"
            >
              <defs>
                <clipPath
                  id="zodiacWordmarkClipBox"
                  clipPathUnits="objectBoundingBox"
                >
                  <g transform={`scale(${1 / 620}, ${1 / 230})`}>
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
                  </g>
                </clipPath>
                <linearGradient
                  id="zodiacWordmarkGradient"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#8a6a1f" />
                  <stop offset="45%" stopColor="#e6c877" />
                  <stop offset="100%" stopColor="#6f5518" />
                </linearGradient>
              </defs>
              {([
                { text: "ZODIAC", y: 100 },

                { text: "PLUSS", y: 210 },
              ] as const)

                .map(({ text, y }) => (
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
            </svg>

            <div className="zodiac-wordmark-live" aria-hidden="true">
              <video
                src="https://res.cloudinary.com/o6laufzn/video/upload/v1790938090/Zodiac.textoverlay.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />
            </div>
          </Reveal>

          <Reveal
            className="mb-3 flex items-center gap-2"
            y={16}
            delay={0.45}
            duration={0.6}
          >
            <span
              className="text-sm font-bold tracking-wide sm:text-base"
              style={{ color: "#2a9b89", fontFamily: "'Inter', sans-serif" }}
            >
              We Care Your Life!
            </span>
          </Reveal>

          <Reveal y={20} delay={0.6}>
            <p
              className="mb-8 max-w-md text-xl font-semibold leading-snug sm:text-2xl"
              style={{
                color: "#c7c7d6",

                fontFamily: "'Inter', sans-serif",
              }}
            >
              Take Guidance under
              <br />
              Professional assistance
            </p>
          </Reveal>

          {/* CTA Buttons */}
          <Reveal
            className="flex flex-wrap items-center gap-4"
            y={18}
            delay={0.78}
            stagger={0.12}
          >
            <a
              href="/services"
              onClick={(e) => {
                e.preventDefault()
                onNavigate("Services")
              }}
              className="zp-btn zp-sheen zp-arrow flex items-center gap-2 rounded-full px-6 py-3.5 text-xs font-semibold text-white no-underline shadow-md hover:shadow-lg sm:px-7 sm:text-sm"
              style={{
                background: "linear-gradient(90deg, #5eb8e8 0%, #8fd06a 100%)",
              }}
            >
              Explore Services
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/about-us"
              onClick={(e) => {
                e.preventDefault()
                onNavigate("About Us")
              }}
              className="zp-btn zp-arrow flex items-center gap-2 rounded-full bg-transparent px-6 py-3.5 text-xs font-semibold no-underline sm:px-7 sm:text-sm"
              style={{
                border: "2px solid #5eb8e8",

                color: "#428cab",

                fontFamily: "'Inter', sans-serif",
              }}
            >
              About Us
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
