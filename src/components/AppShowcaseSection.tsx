import appShowcaseImg from '@/imports/image-8.png'

/* ─────────────────────────────────────────────────────────────────
   AppShowcaseSection  –  "A seamless experience, designed for clarity"
   Left: marketing copy + feature pills
   Right: app screenshot image (image-8.png) displayed as-is
   ───────────────────────────────────────────────────────────────── */

const TEAL = '#14b8a6'
const TEAL_DARK = '#065350'
const NAVY = '#1a1060'

/* ── Feature items ──────────────────────────────────────────────── */
const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={18} height={18}>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-3.87 3.58-7 8-7s8 3.13 8 7" />
      </svg>
    ),
    title: 'User-Friendly',
    desc: 'Simple, intuitive interface for all ages and backgrounds',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={18} height={18}>
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
        <circle cx="12" cy="16" r="1" fill="currentColor" />
      </svg>
    ),
    title: 'Secure & Private',
    desc: 'Confidential sessions and encrypted data protection',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={18} height={18}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'Expert Guidance',
    desc: 'Verified astrologers and certified wellness experts',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={18} height={18}>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
    title: 'All-In-One',
    desc: 'Everything for your spiritual wellness, one place',
  },
]

/* ── Phone screen components ────────────────────────────────────── */

function StatusBar() {
  return (
    <div style={{
      paddingTop: 28, paddingBottom: 5,
      paddingLeft: 16, paddingRight: 16,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      fontSize: 9, fontWeight: 700, color: '#1a1060',
      fontFamily: "'Inter', sans-serif",
    }}>
      <span>9:41</span>
      <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
        <svg width="11" height="8" viewBox="0 0 11 8">
          <rect x="0" y="4" width="2" height="4" rx="0.5" fill="#1a1060" />
          <rect x="3" y="2.5" width="2" height="5.5" rx="0.5" fill="#1a1060" />
          <rect x="6" y="1" width="2" height="7" rx="0.5" fill="#1a1060" />
          <rect x="9" y="0" width="2" height="8" rx="0.5" fill="#1a1060" fillOpacity="0.35" />
        </svg>
        <svg width="15" height="9" viewBox="0 0 15 9">
          <rect x="0.5" y="1.5" width="12" height="6" rx="1.5" stroke="#1a1060" strokeWidth="1" fill="none" />
          <rect x="12.5" y="3" width="2" height="3" rx="1" fill="#1a1060" />
          <rect x="2" y="3" width="7.5" height="3" rx="0.5" fill={TEAL} />
        </svg>
      </div>
    </div>
  )
}

function BottomNav({ active }: { active: number }) {
  const tabs = [
    { icon: '🏠', label: 'Home' },
    { icon: '⭐', label: 'Experts' },
    { icon: '📅', label: 'Sessions' },
    { icon: '👤', label: 'Profile' },
  ]
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-around', alignItems: 'center',
      padding: '7px 0 18px', borderTop: '1px solid #f0eef8',
      background: 'white', flexShrink: 0,
    }}>
      {tabs.map((t, i) => (
        <div key={i} style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
          opacity: i === active ? 1 : 0.35,
        }}>
          <span style={{ fontSize: 15 }}>{t.icon}</span>
          <span style={{ fontSize: 6.5, fontWeight: 700, color: i === active ? TEAL : '#999', fontFamily: "'Inter', sans-serif" }}>{t.label}</span>
          {i === active && <div style={{ width: 16, height: 2.5, background: TEAL, borderRadius: 2 }} />}
        </div>
      ))}
    </div>
  )
}

function HomeScreen() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#f5f4fb', fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <div style={{ background: 'white', borderBottom: '1px solid #f0eef8' }}>
        <StatusBar />
        <div style={{ padding: '2px 16px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 8, color: '#aaa', marginBottom: 1 }}>Good morning,</div>
            <div style={{ fontSize: 14, fontWeight: 800, color: NAVY }}>Tanya ✨</div>
          </div>
          <div style={{
            width: 32, height: 32, borderRadius: '50%',
            background: `linear-gradient(135deg, ${TEAL}, ${TEAL_DARK})`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 14, boxShadow: '0 4px 12px rgba(20,184,166,0.35)',
          }}>🔔</div>
        </div>
      </div>

      <div style={{ flex: 1, overflow: 'hidden', padding: '11px 13px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {/* Search */}
        <div style={{
          background: 'white', borderRadius: 24,
          padding: '7px 12px', display: 'flex', gap: 6, alignItems: 'center',
          border: '1px solid #ede9f8', boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
        }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="2.5">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <span style={{ fontSize: 8.5, color: '#ccc' }}>Search astrologers...</span>
        </div>

        {/* Daily reading banner */}
        <div style={{
          background: `linear-gradient(120deg, ${TEAL_DARK}, ${TEAL})`,
          borderRadius: 16, padding: '12px 14px', color: 'white', flexShrink: 0,
        }}>
          <div style={{ fontSize: 6.5, opacity: 0.75, letterSpacing: 1, marginBottom: 2 }}>TODAY'S READING</div>
          <div style={{ fontSize: 12, fontWeight: 800, marginBottom: 5 }}>Aries ♈ · Daily</div>
          <div style={{ fontSize: 8, opacity: 0.9, lineHeight: 1.6 }}>Clarity awaits. Trust your instincts and embrace new beginnings today.</div>
          <div style={{
            display: 'inline-block', marginTop: 8,
            background: 'rgba(255,255,255,0.2)', borderRadius: 10,
            padding: '3px 9px', fontSize: 7.5, fontWeight: 700,
          }}>Read More →</div>
        </div>

        {/* Top Astrologers */}
        <div>
          <div style={{ fontSize: 10, fontWeight: 800, color: NAVY, marginBottom: 8 }}>Top Astrologers</div>
          {[
            { name: 'Ananya Rao', spec: 'Vedic Astrology', rate: '₹250/min', rating: '4.9', bg: 'linear-gradient(135deg, #c4b5fd, #7c3aed)', emoji: '🌙', live: true },
            { name: 'Raj Sharma', spec: 'Tarot Reading', rate: '₹180/min', rating: '4.8', bg: 'linear-gradient(135deg, #fcd34d, #f59e0b)', emoji: '🌟', live: true },
          ].map((a, i) => (
            <div key={i} style={{
              background: 'white', borderRadius: 12,
              padding: '8px 10px', marginBottom: 7,
              display: 'flex', alignItems: 'center', gap: 9,
              boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
              border: '1px solid #f5f3ff',
            }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
                background: a.bg,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15,
              }}>{a.emoji}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 9.5, fontWeight: 700, color: NAVY }}>{a.name}</div>
                <div style={{ fontSize: 7.5, color: '#aaa', marginBottom: 1 }}>{a.spec}</div>
                <div style={{ fontSize: 7.5, color: '#FD853A' }}>⭐ {a.rating} · {a.rate}</div>
              </div>
              {a.live && <div style={{
                background: '#10b981', color: 'white',
                borderRadius: 8, padding: '3px 8px', fontSize: 7, fontWeight: 800,
              }}>LIVE</div>}
            </div>
          ))}
        </div>
      </div>

      <BottomNav active={0} />
    </div>
  )
}

function BookingScreen() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#f5f4fb', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ background: 'white', borderBottom: '1px solid #f0eef8' }}>
        <StatusBar />
        <div style={{ padding: '2px 16px 12px', display: 'flex', alignItems: 'center', gap: 9 }}>
          <div style={{
            width: 26, height: 26, borderRadius: '50%',
            background: '#f0fdfb', border: `1px solid ${TEAL}40`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 12, color: TEAL, flexShrink: 0,
          }}>←</div>
          <span style={{ fontSize: 12, fontWeight: 800, color: NAVY }}>Astrologer Profile</span>
        </div>
      </div>

      <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {/* Profile hero */}
        <div style={{
          background: 'linear-gradient(180deg, #e8f8f5 0%, #f5f4fb 100%)',
          padding: '16px 16px 14px',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
        }}>
          <div style={{
            width: 68, height: 68, borderRadius: '50%', marginBottom: 9,
            background: 'linear-gradient(135deg, #c4b5fd, #7c3aed)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 30, border: '3px solid white',
            boxShadow: '0 6px 20px rgba(124,58,237,0.28)',
          }}>🌙</div>

          <div style={{ fontSize: 14, fontWeight: 900, color: NAVY, marginBottom: 3 }}>Ananya Rao</div>
          <div style={{ fontSize: 8.5, color: '#6b7280', marginBottom: 9 }}>Vedic Astrologer · 15 yrs exp</div>

          <div style={{ display: 'flex', gap: 5, marginBottom: 11, flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Hindi', 'English', 'Bengali'].map(l => (
              <div key={l} style={{
                background: `rgba(20,184,166,0.1)`, border: `1px solid rgba(20,184,166,0.3)`,
                borderRadius: 10, padding: '2.5px 8px', fontSize: 7, color: TEAL_DARK, fontWeight: 700,
              }}>{l}</div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            {[
              { val: '4.9', sub: 'Rating', accent: '#FD853A' },
              { val: '3.2k+', sub: 'Sessions', accent: NAVY },
              { val: '98%', sub: 'Accuracy', accent: NAVY },
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                {i > 0 && <div style={{ width: 1, height: 26, background: '#e5e7eb', marginRight: -8 }} />}
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 13, fontWeight: 900, color: s.accent }}>
                    {i === 0 ? '' : ''}{s.val}
                  </div>
                  <div style={{ fontSize: 7, color: '#999' }}>{s.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing row */}
        <div style={{
          margin: '11px 13px 0', background: 'white', borderRadius: 14,
          padding: '10px 12px', display: 'flex', justifyContent: 'space-between',
          boxShadow: '0 2px 8px rgba(0,0,0,0.07)', border: '1px solid #f5f3ff',
        }}>
          {[
            { label: 'Per Minute', val: '₹250', sub: '/min', accent: TEAL_DARK },
            { label: '1st Session', badge: 'FREE', sub: '₹499', accent: '' },
            { label: 'Per Hour', val: '₹4,600', sub: '', accent: NAVY },
          ].map((p, i) => (
            <div key={i}>
              <div style={{ fontSize: 7, color: '#aaa', marginBottom: 2 }}>{p.label}</div>
              {p.badge ? (
                <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                  <span style={{ fontSize: 8.5, fontWeight: 800, color: '#10b981', background: '#d1fae5', borderRadius: 6, padding: '1.5px 7px' }}>{p.badge}</span>
                  <span style={{ fontSize: 8, color: '#bbb', textDecoration: 'line-through' }}>{p.sub}</span>
                </div>
              ) : (
                <div style={{ fontSize: 14, fontWeight: 900, color: p.accent }}>
                  {p.val}<span style={{ fontSize: 8, color: '#aaa', fontWeight: 400 }}>{p.sub}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action buttons */}
        <div style={{ padding: '10px 13px 0', display: 'flex', gap: 9 }}>
          <button style={{
            flex: 1, background: `linear-gradient(135deg, ${TEAL}, #0d9488)`,
            border: 'none', borderRadius: 12, padding: '10px 0',
            color: 'white', fontSize: 9.5, fontWeight: 800, cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(20,184,166,0.35)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
          }}>📞 Call Now</button>
          <button style={{
            flex: 1, background: 'white', border: `1.5px solid ${TEAL}`,
            borderRadius: 12, padding: '10px 0',
            color: TEAL, fontSize: 9.5, fontWeight: 800, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
          }}>💬 Chat</button>
        </div>

        {/* About snippet */}
        <div style={{ padding: '10px 13px 0' }}>
          <div style={{ fontSize: 10, fontWeight: 800, color: NAVY, marginBottom: 5 }}>About</div>
          <div style={{ fontSize: 8, color: '#6b7280', lineHeight: 1.65 }}>
            Ananya brings 15 years of Vedic astrology expertise, specializing in career, relationships, and spiritual growth — guiding thousands toward lasting clarity.
          </div>
        </div>
      </div>

      <BottomNav active={1} />
    </div>
  )
}

function SessionsScreen() {
  const sessions = [
    { name: 'Dr. Meera Joshi', type: 'Vedic Astrology', time: 'Today, 10:00 AM', emoji: '🌸', color: TEAL, actionLabel: 'Join →', filled: true },
    { name: 'Dr. Rahul Verma', type: 'Tarot Reading', time: 'Tomorrow, 12:00 PM', emoji: '🔮', color: '#8b5cf6', actionLabel: 'Remind', filled: false },
  ]
  const messages = [
    { name: 'Ananya R.', msg: 'Your session is confirmed for today!', time: '2m', emoji: '🌙', unread: true },
    { name: 'ZodiacPluss', msg: "Don't forget your session tomorrow", time: '1h', emoji: '⭐', unread: false },
  ]

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#f5f4fb', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ background: 'white', borderBottom: '1px solid #f0eef8' }}>
        <StatusBar />
        <div style={{ padding: '2px 16px 0' }}>
          <div style={{ fontSize: 14, fontWeight: 900, color: NAVY, marginBottom: 8 }}>My Sessions</div>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Upcoming', 'Past'].map((tab, i) => (
              <div key={tab} style={{
                paddingBottom: 9, fontSize: 9, fontWeight: 700,
                color: i === 0 ? TEAL : '#bbb',
                borderBottom: i === 0 ? `2.5px solid ${TEAL}` : '2.5px solid transparent',
              }}>{tab}</div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ flex: 1, overflow: 'hidden', padding: '11px 13px', display: 'flex', flexDirection: 'column', gap: 9 }}>
        {sessions.map((s, i) => (
          <div key={i} style={{
            background: 'white', borderRadius: 13,
            padding: '10px 11px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            border: `1px solid ${s.color}22`,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 8 }}>
              <div style={{
                width: 30, height: 30, borderRadius: '50%', flexShrink: 0,
                background: `${s.color}18`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14,
                border: `1px solid ${s.color}30`,
              }}>{s.emoji}</div>
              <div>
                <div style={{ fontSize: 9.5, fontWeight: 800, color: NAVY }}>{s.name}</div>
                <div style={{ fontSize: 7.5, color: '#aaa' }}>{s.type}</div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: 7.5, color: '#6b7280' }}>📅 {s.time}</div>
              <button style={{
                background: s.filled ? `linear-gradient(135deg, ${s.color}, ${s.color}bb)` : 'white',
                border: s.filled ? 'none' : `1.5px solid ${s.color}`,
                borderRadius: 9, padding: '4px 11px',
                color: s.filled ? 'white' : s.color,
                fontSize: 8, fontWeight: 800, cursor: 'pointer',
              }}>{s.actionLabel}</button>
            </div>
          </div>
        ))}

        <div>
          <div style={{ fontSize: 10, fontWeight: 800, color: NAVY, marginBottom: 8 }}>Messages</div>
          {messages.map((m, i) => (
            <div key={i} style={{
              background: 'white', borderRadius: 11,
              padding: '8px 10px', marginBottom: 6,
              display: 'flex', gap: 9, alignItems: 'center',
              boxShadow: '0 1px 5px rgba(0,0,0,0.05)',
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                background: i === 0 ? 'linear-gradient(135deg, #c4b5fd, #7c3aed)' : `linear-gradient(135deg, ${TEAL}, ${TEAL_DARK})`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12,
              }}>{m.emoji}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 1 }}>
                  <span style={{ fontSize: 9, fontWeight: 800, color: NAVY }}>{m.name}</span>
                  <span style={{ fontSize: 7, color: '#bbb' }}>{m.time}</span>
                </div>
                <div style={{ fontSize: 7.5, color: '#9ca3af', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.msg}</div>
              </div>
              {m.unread && <div style={{ width: 9, height: 9, borderRadius: '50%', background: TEAL, flexShrink: 0 }} />}
            </div>
          ))}
        </div>
      </div>

      <BottomNav active={2} />
    </div>
  )
}

/* ── Phone mockup wrapper ────────────────────────────────────────── */

const BASE_W = 180

function PhoneMockup({
  screen, outerW, outerH, featured, tilt,
}: {
  screen: 'home' | 'booking' | 'sessions'
  outerW: number
  outerH: number
  featured?: boolean
  tilt?: 'left' | 'right'
}) {
  const BEZEL = 11
  const innerW = outerW - BEZEL * 2
  const innerH = outerH - BEZEL * 2
  const scale = innerW / BASE_W
  const contentH = Math.round(innerH / scale)

  return (
    <div style={{
      width: outerW, flexShrink: 0,
      transform: tilt === 'left'
        ? 'rotate(-5deg) translateY(22px)'
        : tilt === 'right'
          ? 'rotate(5deg) translateY(22px)'
          : undefined,
      zIndex: featured ? 3 : 1,
      position: 'relative',
    }}>
      {/* Body */}
      <div style={{
        width: outerW, height: outerH,
        background: 'linear-gradient(160deg, #2e2e42, #18182a)',
        borderRadius: 38,
        padding: BEZEL,
        boxShadow: featured
          ? '0 40px 80px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.12)'
          : '0 18px 40px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.07)',
      }}>
        {/* Screen glass */}
        <div style={{
          width: '100%', height: '100%',
          borderRadius: 28, overflow: 'hidden', position: 'relative',
        }}>
          {/* Dynamic island */}
          <div style={{
            position: 'absolute', top: 10, left: '50%',
            transform: 'translateX(-50%)',
            width: Math.round(60 * scale), height: Math.round(17 * scale),
            background: '#18182a', borderRadius: 10 * scale, zIndex: 10,
          }} />

          {/* Scaled screen content */}
          <div style={{
            width: BASE_W, height: contentH,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}>
            {screen === 'home' && <HomeScreen />}
            {screen === 'booking' && <BookingScreen />}
            {screen === 'sessions' && <SessionsScreen />}
          </div>
        </div>
      </div>

      {/* Side power button */}
      <div style={{
        position: 'absolute', right: -3, top: '28%',
        width: 3.5, height: 38, background: '#18182a',
        borderRadius: '0 3px 3px 0', zIndex: 0,
      }} />
      {/* Left volume buttons */}
      <div style={{
        position: 'absolute', left: -3, top: '20%',
        width: 3.5, height: 24, background: '#18182a',
        borderRadius: '3px 0 0 3px',
      }} />
      <div style={{
        position: 'absolute', left: -3, top: '30%',
        width: 3.5, height: 24, background: '#18182a',
        borderRadius: '3px 0 0 3px',
      }} />
    </div>
  )
}

/* ── Main section export ─────────────────────────────────────────── */

export default function AppShowcaseSection() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(56px, 7vw, 96px) 24px' }}>
      {/* Background video */}
      <video
        src="https://res.cloudinary.com/pp0lpskp/video/upload/v1787382162/watermark-removed-app_demo_vid2_k5d1ai.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />
      {/* Dark overlay for readability */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(10, 8, 30, 0.72)',
          zIndex: 1,
        }}
      />
      {/* Content sits above video */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT: marketing copy ─────────────────────────── */}
          <div>

            {/* Main heading */}
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(32px, 4vw, 54px)',
              fontWeight: 700, lineHeight: 1.12,
              color: '#f0f9ff', margin: '0 0 20px',
            }}>
              A seamless experience,<br />
              designed for{' '}
              <em style={{
                fontStyle: 'italic',
                color: '#24c5d6',
              }}>clarity</em>
            </h2>

            {/* Subtext */}
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(14px, 1.4vw, 17px)',
              color: 'rgba(200,230,255,0.7)', lineHeight: 1.75,
              margin: '0 0 36px', maxWidth: 480,
            }}>
              ZodiacPluss combines intuitive design with powerful features to help you seek guidance, connect with experts, and grow every day.
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4" style={{ marginBottom: 40 }}>
              {features.map((f, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 11,
                  padding: '14px 16px',
                  background: 'rgba(255,255,255,0.07)',
                  borderRadius: 14,
                  border: '1px solid rgba(20,184,166,0.2)',
                  backdropFilter: 'blur(8px)',
                  transition: 'box-shadow 0.2s',
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                    background: `linear-gradient(135deg, ${TEAL}20, ${TEAL}10)`,
                    border: `1px solid ${TEAL}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: TEAL,
                  }}>
                    {f.icon}
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 13, fontWeight: 700, color: '#e0f2fe', marginBottom: 3,
                    }}>{f.title}</div>
                    <div style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 11.5, color: 'rgba(200,230,255,0.65)', lineHeight: 1.5,
                    }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA button */}
            <button
              style={{
                background: 'linear-gradient(90deg, #5eb8e8 0%, #8fd06a 100%)',
                border: 'none', borderRadius: 999,
                padding: '13px 30px',
                color: 'white',
                fontFamily: "'Inter', sans-serif",
                fontSize: 15, fontWeight: 700,
                cursor: 'pointer', marginBottom: 18,
                boxShadow: '0 8px 24px rgba(94, 184, 232, 0.35)',
                transition: 'transform 0.15s, box-shadow 0.15s',
                display: 'inline-flex', alignItems: 'center', gap: 8,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'
                ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 12px 30px rgba(94, 184, 232, 0.45)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = 'none'
                ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 24px rgba(94, 184, 232, 0.35)'
              }}
            >
              Explore the App
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            {/* Trust line */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 7,
              fontFamily: "'Inter', sans-serif",
              fontSize: 13, color: 'rgba(200,230,255,0.65)',
            }}>
              <span style={{ color: '#f59e0b', fontSize: 15 }}>★</span>
              Trusted by thousands of users across India
            </div>
          </div>

          {/* ── RIGHT: phone mockups ──────────────────────────── */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 0, padding: 0 }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(20px, 2.4vw, 28px)',
              fontWeight: 600, color: '#f0f9ff',
              margin: '0 0 8px',
            }}>
              Explore the ZodiacPluss App
            </h3>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(13px, 1.2vw, 15px)',
              color: 'rgba(200,230,255,0.65)', margin: '0 0 20px', lineHeight: 1.6,
            }}>
              Everything you need for guidance, growth and well‑being.
            </p>

            {/* App showcase demo video */}
            <div
              className="w-full relative rounded-[26px] overflow-hidden transition-transform duration-500 hover:scale-[1.01]"
              style={{
                border: '1px solid rgba(20, 184, 166, 0.12)',
                background: '#f7f9ff',
                boxShadow: '0 18px 42px rgba(15, 23, 42, 0.08)',
                padding: 0,
                margin: 0,
              }}
            >
              <video
                src="https://res.cloudinary.com/pp0lpskp/video/upload/v1787382162/watermark-removed-app_demo_vid2_k5d1ai.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: 620,
                  display: 'block',
                  objectFit: 'cover',
                  borderRadius: 26,
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
