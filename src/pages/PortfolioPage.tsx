import { Reveal, StatCount } from '@/components/motion'

interface PortfolioPageProps {
  onNavigate: (page: string) => void
  dark?: boolean
}

const portfolioItems = [
  {
    id: 1,
    category: "Astrology Reports",
    title: "Vedic Birth Chart Analysis",
    desc: "A comprehensive Vedic astrology reading that maps planetary positions at the time of birth to reveal personality, purpose, and life path.",
    image: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=600&h=400&fit=crop&auto=format&q=80",
    tag: "Report",
    color: "#7c3aed",
  },
  {
    id: 2,
    category: "Wellness App",
    title: "ZodiacPluss Mobile Experience",
    desc: "Designed and developed an intuitive mobile-first experience for daily horoscope, mood tracking, and expert session booking.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&auto=format&q=80",
    tag: "Product",
    color: "#d81b86",
  },
  {
    id: 3,
    category: "Therapy Programs",
    title: "EAP Mental Wellness Program",
    desc: "A 12-week corporate Employee Assistance Program combining licensed therapy with astrological insight for holistic employee well-being.",
    image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=600&h=400&fit=crop&auto=format&q=80",
    tag: "Program",
    color: "#0d9488",
  },
  {
    id: 4,
    category: "Tarot & Guidance",
    title: "Monthly Tarot Subscription",
    desc: "Personalized monthly tarot readings curated by certified readers, delivered digitally with actionable spiritual guidance.",
    image: "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=600&h=400&fit=crop&auto=format&q=80",
    tag: "Subscription",
    color: "#b45309",
  },
  {
    id: 5,
    category: "Expert Network",
    title: "Verified Astrologers Directory",
    desc: "Built and curated a directory of 200+ certified astrologers, therapists, and spiritual counselors across India and globally.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&auto=format&q=80",
    tag: "Platform",
    color: "#5b2d8e",
  },
  {
    id: 6,
    category: "AI Research",
    title: "Cosmic AI Insight Engine",
    desc: "Developed a proprietary AI model trained on 10,000+ astrological readings to surface hyper-personalised cosmic insights.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=400&fit=crop&auto=format&q=80",
    tag: "AI & Tech",
    color: "#14b8a6",
  },
]

const stats = [
  { value: "200+", label: "Expert Practitioners" },
  { value: "50K+", label: "Happy Users" },
  { value: "12+", label: "Wellness Programs" },
  { value: "4.9★", label: "Average Rating" },
]

export default function PortfolioPage({ onNavigate, dark = false }: PortfolioPageProps) {
  const bg = dark ? '#000000' : '#f5f3ff'
  const cardBg = dark ? 'rgba(20, 20, 22, 0.92)' : 'rgba(255,255,255,0.95)'
  const textPrimary = dark ? '#f5f5f5' : '#1e0d40'
  const textSecondary = dark ? 'rgba(255, 255, 255, 0.55)' : 'rgba(80, 60, 120, 0.7)'
  const tagBg = dark ? 'rgba(124, 58, 237, 0.18)' : 'rgba(124, 58, 237, 0.08)'
  const tagColor = dark ? '#c4b5fd' : '#6d28d9'

  return (
    <div style={{ background: bg, minHeight: '100vh', paddingTop: '80px', transition: 'background 0.4s ease' }}>

      {/* Hero */}
      <section style={{ padding: '48px 20px 32px', textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
        <Reveal y={14} duration={0.6}>
        <span
          style={{
            display: 'inline-block',
            padding: '4px 16px',
            borderRadius: '999px',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            background: tagBg,
            color: tagColor,
            marginBottom: '16px',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          Our Work
        </span>
        </Reveal>
        <Reveal mask delay={0.1} duration={1}>
        <h1
          style={{
            fontSize: 'clamp(28px, 7vw, 48px)',
            fontWeight: 800,
            lineHeight: 1.15,
            color: textPrimary,
            fontFamily: "'Playfair Display', serif",
            marginBottom: '16px',
          }}
        >
          Portfolio &{" "}
          <span
            style={{
              background: 'linear-gradient(90deg, #7c3aed, #d81b86)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Highlights
          </span>
        </h1>
        </Reveal>
        <Reveal y={20} delay={0.3}>
        <p style={{ fontSize: '15px', color: textSecondary, lineHeight: 1.7, fontFamily: 'Inter, sans-serif' }}>
          A curated showcase of our astrology products, wellness programs, expert network,
          and technology initiatives that have transformed lives.
        </p>
        </Reveal>
      </section>

      {/* Stats */}
      <section
        style={{
          maxWidth: '800px',
          margin: '0 auto 48px',
          padding: '0 20px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '12px',
        }}
      >
        {stats.map((s) => (
          <Reveal
            key={s.label}
            y={26}
            duration={0.7}
            className="zp-card-soft"
            style={{
              background: cardBg,
              borderRadius: '16px',
              padding: '18px 10px',
              textAlign: 'center',
              border: dark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(200,185,255,0.4)',
              boxShadow: dark ? '0 4px 20px rgba(0,0,0,0.3)' : '0 2px 12px rgba(100,60,200,0.07)',
            }}
          >
            <div
              style={{
                fontSize: 'clamp(18px, 5vw, 24px)',
                fontWeight: 800,
                background: 'linear-gradient(90deg, #7c3aed, #d81b86)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: "'Playfair Display', serif",
              }}
            >
              <StatCount value={s.value} />
            </div>
            <div style={{ fontSize: '10px', color: textSecondary, marginTop: '4px', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              {s.label}
            </div>
          </Reveal>
        ))}
      </section>

      {/* Portfolio Grid */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px 80px' }}>
        <Reveal
          stagger={0.09}
          y={32}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '20px',
          }}
        >
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              style={{
                background: cardBg,
                borderRadius: '20px',
                overflow: 'hidden',
                border: dark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(200,185,255,0.4)',
                boxShadow: dark ? '0 8px 32px rgba(0,0,0,0.35)' : '0 4px 20px rgba(100,60,200,0.08)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = 'translateY(-4px)'
                el.style.boxShadow = dark
                  ? '0 16px 48px rgba(124,58,237,0.3)'
                  : '0 12px 36px rgba(100,60,200,0.15)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = dark ? '0 8px 32px rgba(0,0,0,0.35)' : '0 4px 20px rgba(100,60,200,0.08)'
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(180deg, transparent 40%, ${item.color}55 100%)`,
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    padding: '3px 10px',
                    borderRadius: '999px',
                    fontSize: '10px',
                    fontWeight: 600,
                    fontFamily: 'Inter, sans-serif',
                    background: 'rgba(0,0,0,0.45)',
                    backdropFilter: 'blur(8px)',
                    color: '#fff',
                    letterSpacing: '0.05em',
                  }}
                >
                  {item.tag}
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: '18px 18px 20px' }}>
                <p
                  style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: item.color,
                    marginBottom: '6px',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {item.category}
                </p>
                <h3
                  style={{
                    fontSize: '15px',
                    fontWeight: 700,
                    color: textPrimary,
                    marginBottom: '8px',
                    fontFamily: "'Playfair Display', serif",
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '12.5px',
                    color: textSecondary,
                    lineHeight: 1.65,
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 20px 80px', textAlign: 'center' }}>
        <Reveal y={24}>
        <button
          className="zp-btn zp-sheen"
          onClick={() => onNavigate('Book')}
          style={{
            background: 'linear-gradient(135deg, #7c3aed 0%, #d81b86 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: '14px',
            padding: '14px 36px',
            fontSize: '15px',
            fontWeight: 600,
            fontFamily: 'Inter, sans-serif',
            cursor: 'pointer',
            boxShadow: '0 6px 24px rgba(124,58,237,0.35)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLButtonElement
            el.style.transform = 'translateY(-2px)'
            el.style.boxShadow = '0 10px 32px rgba(124,58,237,0.45)'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLButtonElement
            el.style.transform = 'translateY(0)'
            el.style.boxShadow = '0 6px 24px rgba(124,58,237,0.35)'
          }}
        >
          Book a Session →
        </button>
        </Reveal>
      </section>
    </div>
  )
}
