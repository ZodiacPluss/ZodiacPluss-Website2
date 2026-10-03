import { Fragment, useEffect, useState, type MouseEvent, type ReactNode } from 'react'

/* ─────────────────────────────────────────────────────────────────
   LegalPageLayout — standalone shell shared by the Privacy Policy and
   Terms & Conditions pages. Content is plain data (title + sections of
   text) so it can later be swapped for backend-provided documents
   without touching the layout.
   ───────────────────────────────────────────────────────────────── */

export interface LegalSection {
  id: string
  title: string
  /** One string per paragraph. Email addresses are linked automatically. */
  body: string | readonly string[]
}

export interface LegalDocument {
  title: string
  subtitle: string
  /** Human-readable date, e.g. "01 October 2026". Hidden when omitted. */
  lastUpdated?: string
  sections: readonly LegalSection[]
}

interface LegalPageLayoutProps {
  document: LegalDocument
  onNavigate?: (page: string) => void
}

const LOGO_URL = 'https://res.cloudinary.com/o6laufzn/image/upload/v1790790316/LOGOSMALL.png'

// Offset the active-section check by roughly the height of the top gap so
// the highlight changes as a heading reaches the top of the viewport.
const SPY_OFFSET = 140

const EMAIL_PATTERN = /([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/gi

function linkifyEmails(text: string): ReactNode {
  const parts = text.split(EMAIL_PATTERN)
  if (parts.length === 1) return text

  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <a
        key={index}
        href={`mailto:${part}`}
        className="font-medium text-[#2f8a63] underline-offset-[3px] transition-colors hover:text-[#1f6b4b] hover:underline"
      >
        {part}
      </a>
    ) : (
      <Fragment key={index}>{part}</Fragment>
    ),
  )
}

/* ── Hero artwork: zodiac wheel, lotus, sparkles and leaves ─────── */

// Text-presentation selector keeps the glyphs as line art instead of emoji.
const ZODIAC_GLYPHS = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'].map((g) => `${g}︎`)

function Sparkle({ x, y, size, opacity = 1 }: { x: number; y: number; size: number; opacity?: number }) {
  const s = size
  return (
    <path
      d={`M${x} ${y - s}C${x + s * 0.14} ${y - s * 0.14} ${x + s * 0.14} ${y - s * 0.14} ${x + s} ${y}C${x + s * 0.14} ${y + s * 0.14} ${x + s * 0.14} ${y + s * 0.14} ${x} ${y + s}C${x - s * 0.14} ${y + s * 0.14} ${x - s * 0.14} ${y + s * 0.14} ${x - s} ${y}C${x - s * 0.14} ${y - s * 0.14} ${x - s * 0.14} ${y - s * 0.14} ${x} ${y - s}Z`}
      fill="#e3c27e"
      opacity={opacity}
    />
  )
}

function HeroArt() {
  const cx = 300
  const cy = 190
  const glyphRadius = 128

  return (
    <svg
      viewBox="0 0 620 380"
      aria-hidden="true"
      fill="none"
      preserveAspectRatio="xMaxYMid slice"
      className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[64%] sm:block lg:w-[58%]"
    >
      <defs>
        <linearGradient id="legal-leaf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#cfe6d7" />
          <stop offset="0.6" stopColor="#9fcbb0" />
          <stop offset="1" stopColor="#79b393" />
        </linearGradient>
        <linearGradient id="legal-leaf-soft" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e2f0e7" />
          <stop offset="1" stopColor="#a9d1b8" />
        </linearGradient>
        <radialGradient id="legal-wheel-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#fffdf4" stopOpacity="0.95" />
          <stop offset="1" stopColor="#fffdf4" stopOpacity="0" />
        </radialGradient>
        <filter id="legal-blur" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      {/* Wheel */}
      <circle cx={cx} cy={cy} r="190" fill="url(#legal-wheel-glow)" />
      <g stroke="#dcc795" strokeOpacity="0.55" strokeWidth="1">
        <circle cx={cx} cy={cy} r="168" />
        <circle cx={cx} cy={cy} r="152" strokeOpacity="0.35" />
        <circle cx={cx} cy={cy} r="102" />
        <circle cx={cx} cy={cy} r="88" strokeOpacity="0.35" />
        {Array.from({ length: 12 }, (_, i) => {
          const a = ((i * 30 + 15) * Math.PI) / 180
          return (
            <line
              key={i}
              x1={cx + Math.cos(a) * 102}
              y1={cy + Math.sin(a) * 102}
              x2={cx + Math.cos(a) * 152}
              y2={cy + Math.sin(a) * 152}
              strokeOpacity="0.3"
            />
          )
        })}
      </g>
      <g fill="#c9b07a" fillOpacity="0.75" fontFamily="'Segoe UI Symbol','Noto Sans Symbols','DejaVu Sans',serif" fontSize="26">
        {ZODIAC_GLYPHS.map((glyph, i) => {
          const a = ((i * 30 - 90) * Math.PI) / 180
          return (
            <text
              key={i}
              x={cx + Math.cos(a) * glyphRadius}
              y={cy + Math.sin(a) * glyphRadius}
              textAnchor="middle"
              dominantBaseline="central"
            >
              {glyph}
            </text>
          )
        })}
      </g>

      {/* Lotus */}
      <g stroke="#d4bb82" strokeOpacity="0.85" strokeWidth="1.3" strokeLinejoin="round">
        <path d={`M${cx} ${cy + 30}C${cx - 16} ${cy + 8} ${cx - 16} ${cy - 22} ${cx} ${cy - 46}C${cx + 16} ${cy - 22} ${cx + 16} ${cy + 8} ${cx} ${cy + 30}Z`} />
        <path d={`M${cx} ${cy + 30}C${cx - 30} ${cy + 18} ${cx - 42} ${cy - 6} ${cx - 38} ${cy - 30}C${cx - 18} ${cy - 20} ${cx - 6} ${cy} ${cx} ${cy + 30}Z`} />
        <path d={`M${cx} ${cy + 30}C${cx + 30} ${cy + 18} ${cx + 42} ${cy - 6} ${cx + 38} ${cy - 30}C${cx + 18} ${cy - 20} ${cx + 6} ${cy} ${cx} ${cy + 30}Z`} />
        <path d={`M${cx} ${cy + 30}C${cx - 40} ${cy + 30} ${cx - 62} ${cy + 14} ${cx - 66} ${cy - 4}C${cx - 42} ${cy - 4} ${cx - 16} ${cy + 10} ${cx} ${cy + 30}Z`} />
        <path d={`M${cx} ${cy + 30}C${cx + 40} ${cy + 30} ${cx + 62} ${cy + 14} ${cx + 66} ${cy - 4}C${cx + 42} ${cy - 4} ${cx + 16} ${cy + 10} ${cx} ${cy + 30}Z`} />
        <path d={`M${cx - 52} ${cy + 40}C${cx - 20} ${cy + 50} ${cx + 20} ${cy + 50} ${cx + 52} ${cy + 40}`} strokeOpacity="0.6" />
      </g>

      {/* Sparkles */}
      <Sparkle x={128} y={118} size={13} />
      <Sparkle x={86} y={186} size={7} opacity={0.8} />
      <Sparkle x={500} y={52} size={14} />
      <Sparkle x={196} y={58} size={6} opacity={0.7} />

      {/* Leaves */}
      <path d="M560 160C540 110 560 50 610 10C628 70 610 130 560 160Z" fill="url(#legal-leaf)" opacity="0.85" />
      <path d="M560 160C575 110 592 60 610 10" stroke="#eef7f1" strokeWidth="1.2" opacity="0.7" />
      <path d="M600 250C570 220 566 170 590 120C620 160 626 210 600 250Z" fill="url(#legal-leaf-soft)" opacity="0.9" />
      <path d="M520 300C530 250 570 220 620 214C606 262 570 296 520 300Z" fill="url(#legal-leaf)" opacity="0.75" />
      <path d="M180 380C150 340 150 290 186 250C214 296 210 344 180 380Z" fill="url(#legal-leaf)" opacity="0.7" />
      <path d="M180 380C186 336 190 296 186 250" stroke="#eef7f1" strokeWidth="1.1" opacity="0.6" />
      <path d="M140 380C116 360 100 330 104 300C130 316 146 346 140 380Z" fill="url(#legal-leaf-soft)" opacity="0.65" />
      <ellipse cx="590" cy="340" rx="60" ry="40" fill="#ffffff" opacity="0.85" filter="url(#legal-blur)" />
    </svg>
  )
}

/* ── Layout ─────────────────────────────────────────────────────── */

export default function LegalPageLayout({ document: doc, onNavigate }: LegalPageLayoutProps) {
  const { title, subtitle, lastUpdated, sections } = doc
  const [activeId, setActiveId] = useState(sections[0]?.id ?? '')
  const [tocOpen, setTocOpen] = useState(false)

  // Scroll-spy: the active section is the last one whose top has passed the offset.
  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const { scrollHeight } = document.documentElement
      const scrollable = scrollHeight > window.innerHeight + 4
      const atBottom = scrollable && window.innerHeight + window.scrollY >= scrollHeight - 4
      if (atBottom && sections.length) {
        setActiveId(sections[sections.length - 1].id)
        return
      }

      let current = sections[0]?.id ?? ''
      for (const section of sections) {
        const el = document.getElementById(section.id)
        if (el && el.getBoundingClientRect().top - SPY_OFFSET <= 0) current = section.id
      }
      setActiveId(current)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [sections])

  const jumpTo = (id: string) => (event: MouseEvent) => {
    event.preventDefault()
    setTocOpen(false)
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(window.history.state, '', `#${id}`)
  }

  const goHome = (event: MouseEvent) => {
    if (!onNavigate) return
    event.preventDefault()
    onNavigate('Home')
  }

  const activeTitle = sections.find((s) => s.id === activeId)?.title ?? sections[0]?.title

  return (
    <div className="min-h-screen w-full bg-white font-['Inter',sans-serif] text-[#0c3b30] antialiased">
      {/* ── Hero ── */}
      <header className="relative overflow-hidden border-b border-[#e9efe9] bg-[linear-gradient(120deg,#e6f2ea_0%,#f4f7ef_38%,#fbf8ec_68%,#f2f6ee_100%)]">
        <div aria-hidden className="pointer-events-none absolute -left-24 bottom-[-40%] h-[280px] w-[280px] rounded-full bg-[#d6eadd] opacity-70 blur-2xl" />
        <HeroArt />

        <div className="relative mx-auto w-full max-w-[1120px] px-5 pb-10 pt-7 sm:px-8 sm:pb-12 sm:pt-8">
          <a href="/" onClick={goHome} className="group inline-flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5c9e7c] focus-visible:ring-offset-4 focus-visible:ring-offset-[#eef5ef]" aria-label="ZodiacPluss home">
            <img
              src={LOGO_URL}
              alt=""
              width={72}
              height={72}
              className="h-[60px] w-[60px] rounded-full object-contain transition-transform duration-300 group-hover:scale-[1.04] sm:h-[72px] sm:w-[72px]"
            />
            <span className="text-[22px] font-bold tracking-[-0.02em] text-[#0c3b30] sm:text-[25px]">ZodiacPluss</span>
          </a>

          <p className="mt-7 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#5f8a78] sm:mt-8 sm:text-[13px]">
            Legal
          </p>
          <h1 className="mt-2 text-[42px] font-extrabold leading-[1.05] tracking-[-0.035em] text-[#0b3a2f] sm:text-[60px]">
            {title}
          </h1>
          <p className="mt-4 max-w-[440px] text-[16px] leading-[1.55] text-[#4d5e57] sm:text-[17.5px]">{subtitle}</p>
          {lastUpdated && (
            <p className="mt-5 text-[13px] text-[#5f6b66]">
              Last updated: <span className="font-semibold text-[#0c3b30]">{lastUpdated}</span>
            </p>
          )}
        </div>
      </header>

      {/* ── Mobile table of contents ── */}
      <div className="sticky top-0 z-20 border-b border-[#e9efe9] bg-white/90 backdrop-blur-md lg:hidden">
        <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-8">
          <button
            type="button"
            onClick={() => setTocOpen((open) => !open)}
            aria-expanded={tocOpen}
            aria-controls="legal-toc-mobile"
            className="flex w-full items-center justify-between gap-3 py-3.5 text-left"
          >
            <span className="min-w-0">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6b7a74]">On this page</span>
              <span className="mt-0.5 block truncate text-[14.5px] font-medium text-[#0c3b30]">{activeTitle}</span>
            </span>
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className={`h-5 w-5 shrink-0 text-[#0c3b30] transition-transform duration-200 ${tocOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <div
            id="legal-toc-mobile"
            className={`grid transition-[grid-template-rows] duration-300 ease-out ${tocOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
          >
            <ul className="overflow-hidden">
              {sections.map((section, index) => (
                <li key={section.id} className={index === sections.length - 1 ? 'pb-3' : ''}>
                  <a
                    href={`#${section.id}`}
                    onClick={jumpTo(section.id)}
                    tabIndex={tocOpen ? 0 : -1}
                    className={`block rounded-lg px-3 py-2 text-[14px] transition-colors ${
                      section.id === activeId ? 'bg-[#e6f0ea] font-medium text-[#0c3b30]' : 'text-[#5a6762] hover:text-[#0c3b30]'
                    }`}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="mx-auto grid w-full max-w-[1120px] grid-cols-1 gap-10 px-5 pb-20 pt-6 sm:px-8 sm:pt-8 lg:grid-cols-[minmax(0,1fr)_268px] lg:gap-16">
        <article className="min-w-0 max-w-[680px]">
          {sections.map((section, index) => {
            const paragraphs = typeof section.body === 'string' ? [section.body] : section.body
            return (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={`${section.id}-heading`}
                className={`scroll-mt-24 py-5 lg:scroll-mt-8 ${index > 0 ? 'border-t border-[#e8ece8]' : ''}`}
              >
                <h2
                  id={`${section.id}-heading`}
                  className="text-[19px] font-bold tracking-[-0.015em] text-[#0b3a2f] sm:text-[21px]"
                >
                  <span className="mr-2 tabular-nums">{index + 1}.</span>
                  {section.title}
                </h2>
                {paragraphs.map((paragraph, i) => (
                  <p key={i} className="mt-2 text-[14.5px] leading-[1.7] text-[#56625d] sm:text-[15px]">
                    {linkifyEmails(paragraph)}
                  </p>
                ))}
              </section>
            )
          })}
        </article>

        <aside className="hidden lg:block">
          <nav
            aria-label="On this page"
            className="sticky top-8 mt-5 rounded-2xl border border-[#e7eee9] bg-[#f8fbf9] p-5 shadow-[0_1px_2px_rgba(12,59,48,0.03)]"
          >
            <p className="px-1 text-[16px] font-semibold text-[#0c3b30]">On this page</p>
            <ul className="mt-4 space-y-1">
              {sections.map((section) => {
                const active = section.id === activeId
                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={jumpTo(section.id)}
                      aria-current={active ? 'location' : undefined}
                      className={`block rounded-r-lg border-l-[3px] px-4 py-2 text-[14px] leading-snug transition-colors duration-200 ${
                        active
                          ? 'border-[#0c4a3b] bg-[#e4efe8] font-medium text-[#0c3b30]'
                          : 'border-transparent text-[#5a6762] hover:bg-[#eff5f1] hover:text-[#0c3b30]'
                      }`}
                    >
                      {section.title}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </aside>
      </div>
    </div>
  )
}
