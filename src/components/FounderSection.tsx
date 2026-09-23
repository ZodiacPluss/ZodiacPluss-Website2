/* ─────────────────────────────────────────────────────────────────
   FounderSection — "Meet Our Founder" editorial spread.

   Two columns on lg+: the story on the left, a photo card on the right
   carrying an overlapping experience badge, the vertical "same stars"
   caption, the orbit line-work, and the pull quote beneath it. Below
   lg the whole thing stacks and the decorative line-work drops away.
   ───────────────────────────────────────────────────────────────── */

/* ── colour tokens ─────────────────────────────────────────────── */
const PURPLE = '#7d5fd3'        // the heading + signature purple
const PURPLE_DEEP = '#6b4fbb'
const PURPLE_SOFT = '#a78bda'   // badge gradient top
const INK = '#1c1030'           // "Meet Our" near-black
const BODY_TEXT = '#4b4458'
const LAVENDER = '#efeafb'      // quote card / soft fills

const SERIF = "'Playfair Display', serif"
const SANS = "'Inter', sans-serif"
const SCRIPT = "'Playball', cursive"

const FOUNDER_IMG =
  'https://res.cloudinary.com/pp0lpskp/image/upload/v1788897780/Rasmi-1_prowmf_lvnvoz.jpg'

const PARAGRAPHS = [
  'I hold a Master’s degree from Mahatma Gandhi Kashi Vidyapith, Varanasi, and over 25+ years of experience in astrology.',
  'During my work with leading astrology platforms, I noticed that many people seeking astrological guidance were also struggling with stress, uncertainty, loneliness, and emotional challenges. This inspired me to create ZodiacPluss—a platform that combines the wisdom of astrology with professional mental well-being support.',
  'Our goal is simple: to help people gain clarity, understand themselves better, and make more confident life decisions.',
  'As a Delhi State Gold Medalist in Powerlifting and a lifelong advocate of wellness, I believe true growth comes from strengthening both the mind and the spirit.',
  'Welcome to ZodiacPluss, where self-awareness meets well-being.',
]

/** The four-pointed sparkle used on the badge and in the sub-eyebrow. */
function Sparkle({ size = 14, color = '#ffffff', opacity = 1 }: { size?: number; color?: string; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} opacity={opacity} aria-hidden="true">
      <path d="M12 0c.6 6.2 5.2 10.8 12 12-6.8 1.2-11.4 5.8-12 12-.6-6.2-5.2-10.8-12-12C6.8 10.8 11.4 6.2 12 0z" />
    </svg>
  )
}

/** Thin orbit rings, dots and the crescent behind the top-right corner. */
function OrbitLines({ color, className, style }: { color: string; className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 320 320" fill="none" className={className} style={style} aria-hidden="true">
      <g stroke={color} strokeWidth="1" opacity="0.55">
        <circle cx="160" cy="160" r="152" />
        <circle cx="160" cy="160" r="120" strokeDasharray="2 7" opacity="0.8" />
        <circle cx="160" cy="160" r="86" />
        <path d="M18 108 A 152 152 0 0 1 128 14" strokeWidth="1.6" opacity="0.9" />
      </g>
      <g fill={color} opacity="0.75">
        <circle cx="160" cy="8" r="3" />
        <circle cx="299" cy="212" r="2.4" />
        <circle cx="42" cy="236" r="2" />
        <circle cx="246" cy="52" r="1.8" />
      </g>
      {/* crescent */}
      <path
        d="M196 34 a 15 15 0 1 0 13 20 a 12 12 0 1 1 -13 -20 z"
        fill={color}
        opacity="0.85"
      />
    </svg>
  )
}

/** Small letterspaced caps used for both eyebrows. */
function Eyebrow({ children, color, className = '' }: { children: React.ReactNode; color: string; className?: string }) {
  return (
    <p
      className={`m-0 uppercase whitespace-nowrap ${className}`}
      style={{ color, fontFamily: SANS, fontSize: 10.5, fontWeight: 600, letterSpacing: '0.22em' }}
    >
      {children}
    </p>
  )
}

interface FounderSectionProps {
  dark?: boolean
}

export default function FounderSection({ dark = false }: FounderSectionProps) {
  const heading = dark ? '#f5f5f5' : INK
  const body = dark ? '#a1a1aa' : BODY_TEXT
  const accent = dark ? '#b79df0' : PURPLE
  const line = dark ? 'rgba(183,157,240,0.35)' : 'rgba(125,95,211,0.3)'
  const quoteBg = dark ? 'rgba(167,139,218,0.10)' : LAVENDER
  const frameLine = dark ? 'rgba(183,157,240,0.5)' : 'rgba(125,95,211,0.45)'
  const sectionBg = dark ? '#000000' : '#fbfaff'

  return (
    <section
      id="founder"
      className="relative overflow-hidden"
      style={{ background: sectionBg, transition: 'background 0.4s ease' }}
    >
      <div className="relative mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10 py-16 sm:py-20 lg:py-24 lg:pr-20">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] gap-12 lg:gap-14 items-start">

          {/* ══════════ left: the story ══════════ */}
          <div className="max-w-[520px]">
            {/* eyebrow + rule */}
            <div className="flex items-center gap-4">
              <Eyebrow color={accent}>People Behind Our Purpose</Eyebrow>
              <span className="hidden sm:block flex-1 h-px" style={{ background: line, maxWidth: 90 }} />
            </div>

            <h2
              className="m-0 mt-5 leading-[0.98]"
              style={{ fontFamily: SERIF, fontWeight: 700, fontSize: 'clamp(40px, 5.2vw, 66px)', letterSpacing: '-0.015em' }}
            >
              <span style={{ color: heading }}>Meet Our</span>
              <br />
              <span style={{ color: accent }}>Founder</span>
            </h2>

            <div className="mt-5 flex items-center gap-2.5" style={{ flexWrap: 'wrap' }}>
              <Eyebrow color={dark ? '#8f8f9a' : '#6f6880'}>A Stronger Mind</Eyebrow>
              <Sparkle size={10} color={accent} />
              <Eyebrow color={dark ? '#8f8f9a' : '#6f6880'}>A Brighter Tomorrow</Eyebrow>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              {PARAGRAPHS.map((text) => (
                <p key={text.slice(0, 24)} className="m-0" style={{ color: body, fontFamily: SANS, fontSize: 14.5, lineHeight: 1.72 }}>
                  {text}
                </p>
              ))}
            </div>

            {/* signature */}
            <div className="mt-9">
              <p className="m-0 leading-none" style={{ fontFamily: SCRIPT, color: accent, fontSize: 40 }}>
                Rashmi
              </p>
              <span className="block mt-3 mb-2 h-px" style={{ background: line, width: 148 }} />
              <p className="m-0" style={{ color: body, fontFamily: SANS, fontSize: 12.5 }}>
                Founder &amp; CEO, ZodiacPluss
              </p>
            </div>
          </div>

          {/* ══════════ right: portrait, badge, quote ══════════ */}
          <div className="relative">
            {/* orbit line-work behind the top-right corner */}
            <OrbitLines
              color={accent}
              className="absolute pointer-events-none hidden md:block"
              style={{ top: '-10%', right: '-8%', width: 'clamp(230px, 24vw, 310px)' }}
            />

            {/* vertical caption, top right */}
            <div
              className="absolute z-10 hidden lg:flex flex-col items-end gap-1.5 text-right"
              style={{ top: 4, right: 0 }}
            >
              {['Same', 'Stars', 'Brighter', 'Lives'].map((word) => (
                <Eyebrow key={word} color={dark ? '#8f8f9a' : '#6f6880'}>
                  {word}
                </Eyebrow>
              ))}
            </div>

            {/* portrait + badge. The right padding on lg is the gutter the
                vertical caption lives in, so the two never overlap. */}
            <div className="relative lg:pr-[86px]" style={{ paddingLeft: 'clamp(26px, 5vw, 52px)', paddingTop: 34 }}>
              {/* The portrait sits in a double frame: a hairline outline of the
                  same shape, nudged down and to the right, so it reads only
                  along the bottom and right edges — the photo covers the rest. */}
              <div className="relative">
                <span
                  aria-hidden="true"
                  className="absolute pointer-events-none"
                  style={{
                    top: 'clamp(10px, 2.4vw, 18px)',
                    left: 'clamp(10px, 2.4vw, 18px)',
                    right: 'calc(clamp(10px, 2.4vw, 18px) * -1)',
                    bottom: 'calc(clamp(10px, 2.4vw, 18px) * -1)',
                    border: `1px solid ${frameLine}`,
                    borderRadius: 26,
                  }}
                />
                <div
                  className="relative overflow-hidden"
                  style={{
                    borderRadius: 26,
                    aspectRatio: '420 / 430',
                    boxShadow: dark
                      ? '0 26px 60px rgba(0,0,0,0.6)'
                      : '0 26px 60px rgba(48,28,96,0.16)',
                  }}
                >
                  <img
                    src={FOUNDER_IMG}
                    alt="Rashmi, Founder and CEO of ZodiacPluss"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* experience badge, overlapping the portrait's left edge */}
              <div
                className="absolute flex flex-col items-center text-center"
                style={{
                  left: 0,
                  top: 'clamp(58px, 9%, 96px)',
                  width: 'clamp(84px, 12vw, 104px)',
                  padding: '20px 10px 18px',
                  borderRadius: 18,
                  background: `linear-gradient(180deg, ${PURPLE_SOFT} 0%, ${PURPLE_DEEP} 100%)`,
                  boxShadow: '0 18px 36px rgba(84,56,160,0.34)',
                }}
              >
                <Sparkle size={15} />
                <span
                  className="block mt-4"
                  style={{ fontFamily: SERIF, fontWeight: 600, color: '#ffffff', fontSize: 'clamp(24px, 3vw, 30px)', lineHeight: 1 }}
                >
                  25<span style={{ fontSize: '0.62em', verticalAlign: 'super' }}>+</span>
                </span>
                <span className="block h-px my-2.5" style={{ width: 22, background: 'rgba(255,255,255,0.6)' }} />
                <span
                  style={{ fontFamily: SANS, color: 'rgba(255,255,255,0.95)', fontSize: 10.5, lineHeight: 1.45, fontWeight: 500 }}
                >
                  Years of
                  <br />
                  Experience
                </span>

                <span className="block my-4 h-px" style={{ width: 28, background: 'rgba(255,255,255,0.35)' }} />

                <span className="flex flex-col gap-1.5 uppercase" style={{ fontFamily: SANS, fontSize: 8.5, fontWeight: 600, letterSpacing: '0.16em', color: 'rgba(255,255,255,0.9)' }}>
                  <span>Astrology</span>
                  <span>Wellness</span>
                  <span>People</span>
                  <span>Purpose</span>
                </span>

                <span className="block mt-5">
                  <Sparkle size={9} opacity={0.85} />
                </span>
              </div>
            </div>

            {/* pull quote */}
            <div
              className="relative flex items-start gap-3 lg:mr-[86px]"
              style={{
                marginTop: 38,
                marginLeft: 'clamp(26px, 8vw, 92px)',
                padding: '20px 24px 18px',
                borderRadius: 16,
                background: quoteBg,
              }}
            >
              <span
                aria-hidden="true"
                className="flex-shrink-0"
                style={{ fontFamily: SERIF, fontWeight: 700, color: accent, fontSize: 34, lineHeight: 0.9, opacity: 0.75 }}
              >
                “
              </span>
              <div className="flex-1">
                <p
                  className="m-0 italic"
                  style={{ fontFamily: SERIF, color: dark ? '#e4e4e7' : '#2f2447', fontSize: 15, lineHeight: 1.6 }}
                >
                  “True growth comes from strengthening both the mind and the spirit.”
                </p>
                <div className="flex items-center justify-end gap-2.5 mt-3">
                  <span className="h-px" style={{ width: 34, background: line }} />
                  <Eyebrow color={dark ? '#8f8f9a' : '#6f6880'}>Rashmi</Eyebrow>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
