// Auto-scrolling infinite marquee of partner/featured company logos

const brands = [
  {
    name: "Companies Comming soon",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="2" y1="8.5" x2="22" y2="8.5" />
      </svg>
    ),
  },
  {
    name: "Stellar Media Onboarding",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    name: "With New Implementations",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" />
      </svg>
    ),
  },
  {
    name: "Presenting Feature that Nurtures your life",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="4" />
        <polygon points="10 8 16 12 10 16 10 8" />
      </svg>
    ),
  },
  {
    name: "For individuals that seeks transformation",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
  {
    name: "With Astrology You Can Change Your life",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      </svg>
    ),
  },
  {
    name: "therapy that heals",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <rect x="7" y="7" width="10" height="10" rx="1" />
      </svg>
    ),
  },

]

// Duplicate list for seamless infinite scroll
const allBrands = [...brands, ...brands]

export default function BrandsMarquee({ dark = false }: { dark?: boolean }) {
  return (
    <div
      style={{
        width: '100%',
        background: dark ? '#000000' : 'linear-gradient(180deg, #ffffff 0%, #f9f6ff 100%)',
        borderTop: dark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(200, 185, 255, 0.25)',
        borderBottom: dark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(200, 185, 255, 0.25)',
        padding: '20px 0',
        overflow: 'hidden',
        position: 'relative',
        transition: 'background 0.4s ease',
      }}
    >
      {/* Fade masks on edges */}
      <div
        style={{
          position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
          background: dark
            ? 'linear-gradient(90deg, #000000 0%, transparent 8%, transparent 92%, #000000 100%)'
            : 'linear-gradient(90deg, #ffffff 0%, transparent 8%, transparent 92%, #ffffff 100%)',
        }}
      />

      {/* Marquee track */}
      <div
        className="brands-marquee-track"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0',
          width: 'max-content',
          animation: 'brands-scroll 28s linear infinite',
          willChange: 'transform',
        }}
      >
        {allBrands.map((brand, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0 32px',
              color: dark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(130, 110, 180, 0.5)',
              whiteSpace: 'nowrap',
              userSelect: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.color = dark ? 'rgba(255, 255, 255, 0.85)' : 'rgba(100, 60, 180, 0.85)'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.color = dark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(130, 110, 180, 0.5)'
            }}
          >
            <span style={{ flexShrink: 0 }}>{brand.icon}</span>
            <span
              style={{
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                fontFamily: "'Inter', sans-serif",
                textTransform: 'uppercase',
              }}
            >
              {brand.name}
            </span>
          </div>
        ))}
      </div>

      {/* Keyframe injected inline */}
      <style>{`
        @keyframes brands-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .brands-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
