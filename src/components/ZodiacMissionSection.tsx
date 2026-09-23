/* ─────────────────────────────────────────────────────────────────
   ZodiacMissionSection
   Three stacked bands:
   1. Dark hero  – headline + cosmic woman + feature bullets
   2. White about – circular image + "We Create Experiences" copy
   3. Dark mission – "Empower. Heal. Guide." + 4-column icons
   ───────────────────────────────────────────────────────────────── */

import { Reveal, TextReveal } from '@/components/motion'

const DARK_BG = '#071e19'
const ACCENT = '#3ecfb3'   // bright teal headline accent
const TEAL = '#26b2a2ff'
const TEAL_D = '#40d0cbff'
const NAVY = '#1a1060'

const MEDITATION =
  'https://res.cloudinary.com/pp0lpskp/image/upload/v1786114130/9eb6def5a93718e462ce7c37dcb77329_k3rqji.jpg'



/* ══════════════════════════════════════════════════════════════════
   BAND 1 – Dark hero
   ══════════════════════════════════════════════════════════════════ */
function DarkHero({ onNavigate }: { onNavigate?: (p: string) => void; dark?: boolean }) {
  // Always pure white and soft white text in both dark and light mode
  const primaryText = '#ffffff'
  const mutedText = 'rgba(255, 255, 255, 0.70)'
  const featureMutedText = 'rgba(255, 255, 255, 0.65)'

  const features = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.8">
          <circle cx="12" cy="8" r="4" /><path d="M4 20c0-3.87 3.58-7 8-7s8 3.13 8 7" />
          <path d="m9 11 2 2 4-4" stroke={ACCENT} />
        </svg>
      ),
      title: 'Trusted Experts',
      desc: 'Verified astrologers and therapists',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.8">
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M8 11V7a4 4 0 0 1 8 0v4" />
          <circle cx="12" cy="16" r="1" fill={ACCENT} />
        </svg>
      ),
      title: 'Private & Secure',
      desc: 'Your conversations are 100% confidential',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.8">
          <path d="M12 2a9 9 0 0 1 9 9c0 3.5-2 6.6-5 8.2v.8a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-.8C5 17.6 3 14.5 3 11a9 9 0 0 1 9-9z" />
          <path d="M9 17h6M10 14h4" />
        </svg>
      ),
      title: 'Holistic Well-being',
      desc: 'Mind, emotions & destiny — all in one place',
    },
  ]

  return (
    <section style={{ background: 'transparent', position: 'relative', overflow: 'hidden', minHeight: 520 }}>

      {/* Radial glow from center */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 55% 80% at 50% 60%, rgba(70, 75, 78, 0.08) 0%, transparent 70%)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(48px,7vw,80px) 24px', position: 'relative', zIndex: 1 }}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 items-center">

          {/* LEFT – headline */}
          <div className="lg:col-span-1 order-1 lg:order-1">
            {/* ZodiacPluss wordmark */}
            <Reveal y={14} duration={0.6} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 28 }}>
              <span style={{ color: '#ffffff', fontSize: 14, fontWeight: 700, fontFamily: "'Inter', sans-serif", letterSpacing: '0.04em' }}>ZodiacPluss</span>
            </Reveal>

            <TextReveal as="h2" delay={0.1} style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 700, color: '#ffffff', lineHeight: 1.15,
              margin: '0 0 4px',
            }}>
              Guidance for<br />Your Stars.
            </TextReveal>
            <TextReveal as="h2" delay={0.25} style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(30px, 3.8vw, 48px)',
              fontWeight: 700, color: '#ffffff', lineHeight: 1.18,
              margin: '0 0 24px', fontStyle: 'italic',
            }}>
              Support for<br />Your Soul.
            </TextReveal>
            <Reveal y={20} delay={0.45}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(13px, 1.3vw, 15px)',
              color: mutedText,
              lineHeight: 1.75, margin: 0, maxWidth: 360,
            }}>
              ZodiacPluss is where ancient wisdom meets modern healing. Astrology to light your path, therapy to heal your heart.
            </p>
            </Reveal>
          </div>

          {/* CENTER – cosmic flatlay */}
          <Reveal
            className="order-2 lg:order-2 flex justify-center"
            y={0}
            scale={0.88}
            duration={1.1}
            style={{ position: 'relative' }}
          >
            <div className="zp-float-slow" style={{
              width: 'clamp(220px,32vw,320px)',
              height: 'clamp(220px,32vw,320px)',
              position: 'relative',
              filter: 'drop-shadow(0 0 40px rgba(54, 58, 57, 0.25))',
            }}>
              {/* Subtle glow behind */}
              <div style={{
                position: 'absolute', inset: 0, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(56, 62, 60, 0.3) 0%, transparent 70%)',
                boxShadow: '0 0 50px 15px rgba(44, 48, 47, 0.18)',
              }} />
              {/* Photo */}
              <div style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%', overflow: 'hidden',
                border: '2px solid rgba(212, 226, 223, 0.4)',
              }}>
                <img
                  src={MEDITATION}
                  alt="ZodiacPluss astrology consultation and wisdom"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(180deg, rgba(7,30,25,0.05) 0%, rgba(7,30,25,0.3) 100%)',
                }} />
              </div>
            </div>
          </Reveal>

          {/* RIGHT – feature bullets */}
          <Reveal stagger={0.12} y={26} className="order-3 lg:order-3 space-y-0">
            {features.map((f, i) => (
              <div key={i} className="zp-card-soft group" style={{
                display: 'flex', gap: 16, alignItems: 'center',
                padding: '20px 0',
                borderBottom: i < features.length - 1 ? '1px solid rgba(255,255,255,0.10)' : 'none',
              }}>
                <div className="zp-icon-tile" style={{
                  width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                  background: 'rgba(20,184,166,0.12)',
                  border: '1px solid rgba(20,184,166,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {f.icon}
                </div>
                <div>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 15, fontWeight: 700, color: '#ffffff', margin: '0 0 4px',
                  }}>{f.title}</p>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13, color: featureMutedText, margin: 0, lineHeight: 1.6,
                  }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </Reveal>

        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════════
   BAND 2 – White about
   ══════════════════════════════════════════════════════════════════ */
function AboutBand({ onNavigate, dark = false }: { onNavigate?: (p: string) => void; dark?: boolean }) {
  const headingColor = dark ? '#f5f5f5' : NAVY
  const bodyColor = dark ? '#a1a1aa' : '#6b7280'
  const cardBg = dark ? '#141416' : 'white'
  const outlineTextColor = dark ? '#2dd4bf' : TEAL_D

  return (
    <section style={{ background: dark ? '#000000' : 'white', padding: 'clamp(56px,7vw,88px) 24px', transition: 'background 0.4s ease' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT – circular image with zodiac ring + badge */}
          <Reveal x={-30} scale={0.93} duration={1} style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: 'clamp(260px,38vw,420px)', height: 'clamp(260px,38vw,420px)' }}>
              {/* Outer decorative ring */}
              <div style={{
                position: 'absolute', inset: -14,
                borderRadius: '50%',
                border: '1.5px dashed rgba(20,184,166,0.35)',
              }} />
              <div style={{
                position: 'absolute', inset: -28,
                borderRadius: '50%',
                border: '1px solid rgba(20,184,166,0.15)',
              }} />

              {/* Circle logo */}
              <div style={{
                width: '100%', height: '100%',
                borderRadius: '50%', overflow: 'hidden',
                boxShadow: dark ? '0 20px 60px rgba(0,0,0,0.5)' : '0 20px 60px rgba(7,30,25,0.12)',
                border: `4px solid ${cardBg}`,
                background: dark ? '#141416' : '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative', zIndex: 1,
                padding: 0,
              }}>
                <img
                  src="https://res.cloudinary.com/pp0lpskp/image/upload/v1786032742/Zodiac_Colored_Logo_croped-removebg-preview_appzet.png"
                  alt="ZodiacPluss Logo"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: 'scale(1.04)',
                    display: 'block',
                  }}
                />
              </div>

              {/* Happy souls badge */}
              <div style={{
                position: 'absolute', bottom: '8%', left: '-6%', zIndex: 3,
                background: cardBg,
                borderRadius: 12, padding: '10px 16px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                display: 'flex', alignItems: 'center', gap: 10,
                border: '1px solid rgba(184, 146, 20, 0.2)',
              }}>

                <div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, fontWeight: 900, color: headingColor, lineHeight: 1 }}>ZODIAC PLUSS</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: dark ? '#a1a1aa' : '#888', marginTop: 1 }}></div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* RIGHT – copy */}
          <div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
              color: TEAL, textTransform: 'uppercase', marginBottom: 16,
            }}></p>

            <TextReveal as="h2" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(28px,4vw,48px)',
              fontWeight: 700, color: headingColor, lineHeight: 1.15, margin: '0 0 8px',
            }}>
              We Create Experiences<br />That{' '}
              <span style={{ color: TEAL, fontStyle: 'italic' }}>Transform Lives</span>
            </TextReveal>

            <Reveal
              y={0}
              scale={0.02}
              delay={0.3}
              duration={0.7}
              style={{ width: 48, height: 3, background: TEAL, borderRadius: 2, margin: '16px 0 24px', transformOrigin: 'left center' }}
            >
              {null}
            </Reveal>

            <Reveal stagger={0.12} y={22} delay={0.15}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(13px,1.3vw,15.5px)',
              color: bodyColor, lineHeight: 1.8, margin: '0 0 16px',
            }}>
              ZodiacPluss was built with one simple belief — everyone deserves clarity and emotional well-being. We combine the timeless wisdom of astrology with professional mental health support to help you navigate life with confidence and peace.
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(13px,1.3vw,15.5px)',
              color: bodyColor, lineHeight: 1.8, margin: '0 0 36px',
            }}>
              From birth chart readings to one-on-one therapy sessions, {"we've"} created a safe, supportive space where guidance feels personal, private, and truly meaningful.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button
                className="zp-btn zp-sheen zp-arrow"
                onClick={() => onNavigate?.('About Us')}
                style={{
                  background: "linear-gradient(90deg, #5eb8e8 0%, #8fd06a 100%)",
                  border: 'none', borderRadius: 999,
                  padding: '12px 24px', color: 'white',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14, fontWeight: 700, cursor: 'pointer',
                  display: 'inline-flex', alignItems: 'center', gap: 7,
                  boxShadow: '0 6px 20px rgba(20,184,166,0.30)',
                  transition: 'transform 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'}
                onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.transform = 'none'}
              >
                Our Journey
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <button
                className="zp-btn zp-arrow"
                onClick={() => onNavigate?.('Services')}
                style={{
                  background: 'transparent',
                  border: `1.5px solid ${TEAL}`,
                  borderRadius: 999,
                  padding: '12px 24px', color: outlineTextColor,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14, fontWeight: 700, cursor: 'pointer',
                  display: 'inline-flex', alignItems: 'center', gap: 7,
                  transition: 'background 0.15s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(20,184,166,0.07)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent' }}
              >
                Our Services
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════════
   BAND 3 – Dark mission
   ══════════════════════════════════════════════════════════════════ */
function MissionBand({ onNavigate }: { onNavigate?: (p: string) => void; dark?: boolean }) {
  // Always pure white and soft white text in both dark and light mode
  const primaryText = '#ffffff'
  const mutedText = 'rgba(255, 255, 255, 0.70)'
  const pillarMutedText = 'rgba(255, 255, 255, 0.65)'

  const pillars = [
    {
      title: 'Authentic Guidance',
      desc: 'Rooted in knowledge and experience',
    },
    {
      title: 'Emotional Healing',
      desc: 'Professional support for your well-being',
    },
    {
      title: 'Safe & Confidential',
      desc: 'Your privacy is our highest priority',
    },
    {
      title: 'Community First',
      desc: 'We grow when you do — always in touch',
    },
  ]

  return (
    <section style={{
      background: 'transparent',
      position: 'relative', overflow: 'hidden',
      padding: 'clamp(52px,7vw,80px) 24px',
    }}>
      {/* Subtle glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 70% at 30% 50%, rgba(61,214,172,0.07) 0%, transparent 65%)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT – mission text */}
          <div>
            <Reveal y={16} duration={0.6}>
            <button
              className="zp-btn zp-arrow"
              onClick={() => onNavigate?.('About Us')}
              style={{
                background: 'none', border: `1px solid rgba(61,214,172,0.35)`,
                borderRadius: 999, padding: '5px 14px',
                color: ACCENT, fontFamily: "'Inter', sans-serif",
                fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', cursor: 'pointer', marginBottom: 24,
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}
            >
              Our Mission
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            </Reveal>

            <TextReveal as="h2" delay={0.1} stagger={0.12} style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(36px,5.5vw,68px)',
              fontWeight: 800, color: '#ffffff', lineHeight: 1.08,
              margin: '0 0 24px', letterSpacing: '-0.01em',
            }}>
              Empower.<br />Heal. Guide.
            </TextReveal>

            <Reveal y={22} delay={0.35}>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(13px,1.3vw,15.5px)',
              color: mutedText,
              lineHeight: 1.8, margin: 0, maxWidth: 440,
            }}>
              We empower individuals to understand themselves better, heal emotionally, and make conscious decisions. Through trusted experts and a compassionate community, we aim to provide balance, clarity, and growth in every life we touch.
            </p>
            </Reveal>
          </div>

          {/* RIGHT – 4 pillars */}
          <Reveal stagger={0.1} y={30} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <div key={i} className="zp-card-soft" style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.10)',
                borderRadius: 18, padding: '24px 22px',
                backdropFilter: 'blur(8px)',
              }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = 'rgba(61,214,172,0.08)'}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.05)'}
              >
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 15, fontWeight: 700, color: '#ffffff',
                  margin: '0 0 8px',
                }}>{p.title}</p>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13, color: pillarMutedText,
                  margin: 0, lineHeight: 1.6,
                }}>{p.desc}</p>
              </div>
            ))}
          </Reveal>

        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════════
   Export
   ══════════════════════════════════════════════════════════════════ */
interface Props { onNavigate?: (page: string) => void; dark?: boolean }

export default function ZodiacMissionSection({ onNavigate, dark = false }: Props) {
  return (
    <>
      <DarkHero onNavigate={onNavigate} dark={dark} />
      <AboutBand onNavigate={onNavigate} dark={dark} />
      <MissionBand onNavigate={onNavigate} dark={dark} />
    </>
  )
}
