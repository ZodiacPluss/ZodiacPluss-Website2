import { useMemo, useState, type FormEvent } from 'react'
import { Reveal, TextReveal } from '@/components/motion'

/* ── colour tokens ─────────────────────────────────────────────── */
const GRADIENT = 'linear-gradient(90deg, #5eb8e8 0%, #8fd06a 100%)'
const TEXT_GRADIENT = 'linear-gradient(90deg, #2ba9a0 0%, #3fb9a8 60%, #6cc48f 100%)'
const SCRIPT = '#2f9e94'
const NAVY = '#101828'

const SERIF = "'Playfair Display', serif"
const SANS = "'Inter', sans-serif"
const HAND = "'Playball', cursive"

/* ── categories ────────────────────────────────────────────────── */
type Category =
  | 'Mental Wellness'
  | 'Astrology'
  | 'Relationships'
  | 'Personal Growth'
  | 'Workplace Wellness'
  | 'Self-Care'

const categories: Category[] = [
  'Mental Wellness',
  'Astrology',
  'Relationships',
  'Personal Growth',
  'Workplace Wellness',
  'Self-Care',
]

/* Chip tint per category — soft pastel bg with a deeper matching label. */
const chipTone: Record<Category, { bg: string; fg: string; darkBg: string; darkFg: string }> = {
  'Mental Wellness': { bg: '#dcf5e9', fg: '#1f7a55', darkBg: 'rgba(52,211,153,0.16)', darkFg: '#6ee7b7' },
  'Astrology': { bg: '#e3ecfb', fg: '#2b57a5', darkBg: 'rgba(96,165,250,0.16)', darkFg: '#93c5fd' },
  'Relationships': { bg: '#ece7fb', fg: '#5b3fa8', darkBg: 'rgba(167,139,250,0.16)', darkFg: '#c4b5fd' },
  'Personal Growth': { bg: '#e7f5dc', fg: '#3f7a1f', darkBg: 'rgba(163,230,53,0.14)', darkFg: '#bef264' },
  'Workplace Wellness': { bg: '#dff3f4', fg: '#147a80', darkBg: 'rgba(45,212,191,0.16)', darkFg: '#5eead4' },
  'Self-Care': { bg: '#e0f0fb', fg: '#1d6fa5', darkBg: 'rgba(56,189,248,0.16)', darkFg: '#7dd3fc' },
}

/* ── article data ──────────────────────────────────────────────── */
interface Article {
  id: string
  category: Category
  title: string
  excerpt: string
  readTime: string
  date: string
  image: string
}

const IMG = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

const featured: Article = {
  id: 'emotional-wellbeing',
  category: 'Mental Wellness',
  title: 'Understanding Your Emotional Wellbeing: Where Should You Begin?',
  excerpt:
    'A practical guide to help you recognise your emotions, build healthier habits and take the first step towards a calmer, more balanced life.',
  readTime: '8 min read',
  date: 'Sep 12, 2026',
  image: IMG('photo-1499750310107-5fef28a66643', 1100),
}

const articles: Article[] = [
  {
    id: 'daily-mindfulness',
    category: 'Self-Care',
    title: 'The Power of Daily Mindfulness',
    excerpt:
      'Simple mindfulness practices that can help you feel more present, focused and calm.',
    readTime: '6 min read',
    date: 'Sep 10, 2026',
    image: IMG('photo-1506126613408-eca07ce68773'),
  },
  {
    id: 'zodiac-personality',
    category: 'Astrology',
    title: 'How Your Zodiac Sign Shapes Your Personality',
    excerpt:
      'Explore how astrological insights can help you understand your strengths, challenges and life path.',
    readTime: '5 min read',
    date: 'Sep 8, 2026',
    image: IMG('photo-1419242902214-272b3f66ee7a'),
  },
  {
    id: 'healthier-relationships',
    category: 'Relationships',
    title: 'Building Healthier Relationships',
    excerpt:
      'Communication, trust and empathy are the keys to stronger, more meaningful connections.',
    readTime: '7 min read',
    date: 'Sep 5, 2026',
    image: IMG('photo-1516589178581-6cd7833ae3b2'),
  },
  {
    id: 'healthy-workplace',
    category: 'Workplace Wellness',
    title: 'Creating a Mentally Healthy Workplace',
    excerpt:
      'Practical strategies for companies to support employee wellbeing and build a positive work culture.',
    readTime: '6 min read',
    date: 'Sep 1, 2026',
    image: IMG('photo-1497215728101-856f4ea42174'),
  },
  {
    id: 'growth-mindset',
    category: 'Personal Growth',
    title: 'Small Habits, Big Changes: A Growth Mindset',
    excerpt:
      'How tiny, consistent routines compound into lasting confidence and personal progress.',
    readTime: '5 min read',
    date: 'Aug 28, 2026',
    image: IMG('photo-1499209974431-9dddcece7f88'),
  },
  {
    id: 'managing-anxiety',
    category: 'Mental Wellness',
    title: 'Managing Everyday Anxiety with Kindness',
    excerpt:
      'Gentle, evidence-based techniques to quiet a racing mind and reconnect with the present.',
    readTime: '7 min read',
    date: 'Aug 24, 2026',
    image: IMG('photo-1518241353330-0f7941c2d9b5'),
  },
]

/* ── icons ─────────────────────────────────────────────────────── */
const ClockIcon = ({ color }: { color: string }) => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)

const CalendarIcon = ({ color }: { color: string }) => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M16 3v4M8 3v4M3 10h18" />
  </svg>
)

const ArrowIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)


const BookmarkIcon = ({ color, filled }: { color: string; filled: boolean }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill={filled ? color : 'none'} stroke={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 4h12a1 1 0 0 1 1 1v15l-7-4.2L5 20V5a1 1 0 0 1 1-1z" />
  </svg>
)

const MailIcon = ({ color }: { color: string }) => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
)

const LeafIcon = ({ color, size = 22 }: { color: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 20c0-8 4-13 14-14 0 9-4 13-11 13" />
    <path d="M5 20c2-5 5-8 9-10" />
  </svg>
)

/* Faint zodiac-style wheel used as hero decoration (top-right). */
const ZodiacWheel = () => (
  <svg width="150" height="150" viewBox="0 0 150 150" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="blog-wheel" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#5eb8e8" />
        <stop offset="1" stopColor="#8fd06a" />
      </linearGradient>
    </defs>
    <g stroke="url(#blog-wheel)" strokeWidth="1.2" opacity="0.5">
      <circle cx="75" cy="75" r="70" />
      <circle cx="75" cy="75" r="56" strokeDasharray="3 5" />
      <circle cx="75" cy="75" r="40" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * Math.PI) / 6
        const x1 = 75 + Math.cos(a) * 56
        const y1 = 75 + Math.sin(a) * 56
        const x2 = 75 + Math.cos(a) * 70
        const y2 = 75 + Math.sin(a) * 70
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
      })}
    </g>
    <path
      d="M75 92c-9-6-16-11-16-19a8 8 0 0 1 16-2 8 8 0 0 1 16 2c0 8-7 13-16 19z"
      stroke="url(#blog-wheel)"
      strokeWidth="1.6"
      fill="none"
      opacity="0.85"
    />
    <path d="M60 78c6-3 10 0 15 4" stroke="#8fd06a" strokeWidth="1.4" strokeLinecap="round" opacity="0.9" />
  </svg>
)

/* ── small shared pieces ───────────────────────────────────────── */
function CategoryChip({ category, dark }: { category: Category; dark: boolean }) {
  const tone = chipTone[category]
  return (
    <span
      className="inline-flex items-center rounded-full uppercase"
      style={{
        background: dark ? tone.darkBg : tone.bg,
        color: dark ? tone.darkFg : tone.fg,
        fontFamily: SANS,
        fontSize: 10.5,
        fontWeight: 700,
        letterSpacing: '0.08em',
        padding: '5px 11px',
      }}
    >
      {category}
    </span>
  )
}

function Meta({ readTime, date, dark }: { readTime: string; date: string; dark: boolean }) {
  const color = dark ? '#a1a1aa' : '#667085'
  return (
    <div className="flex items-center gap-4" style={{ color, fontFamily: SANS, fontSize: 12 }}>
      <span className="inline-flex items-center gap-1.5">
        <ClockIcon color={color} />
        {readTime}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <CalendarIcon color={color} />
        {date}
      </span>
    </div>
  )
}

function GradientCircleButton({ label }: { label: string }) {
  return (
    <button
      type="submit"
      aria-label={label}
      className="zp-btn zp-arrow shrink-0 flex items-center justify-center rounded-full text-white cursor-pointer border-0"
      style={{ width: 40, height: 40, background: GRADIENT, boxShadow: '0 6px 16px rgba(94,184,232,0.35)' }}
    >
      <ArrowIcon size={15} />
    </button>
  )
}

function ArticleCard({ article, dark }: { article: Article; dark: boolean }) {
  const [saved, setSaved] = useState(false)

  const metaIcon = dark ? '#8b8b93' : '#98a2b3'
  const metaText = dark ? '#e4e4e7' : '#1d2939'
  const pillBg = dark ? '#f5f5f5' : '#0b0f19'
  const pillFg = dark ? '#0b0f19' : '#ffffff'

  return (
    <article
      className="zp-card group flex flex-col"
      style={{
        background: dark ? '#0f0f12' : '#ffffff',
        border: dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #f0f2f5',
        borderRadius: 28,
        padding: 12,
        boxShadow: dark ? '0 14px 40px rgba(0,0,0,0.55)' : '0 10px 34px rgba(16,24,40,0.07)',
      }}
    >
      {/* image sits inset inside the card, with its own softer radius */}
      <div className="zp-media relative" style={{ borderRadius: 20, aspectRatio: '4 / 3' }}>
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute" style={{ left: 12, bottom: 12 }}>
          <CategoryChip category={article.category} dark={dark} />
        </div>
      </div>

      <div className="flex flex-col flex-1" style={{ padding: '18px 8px 4px' }}>
        <h3
          style={{
            color: dark ? '#f7f7f8' : '#0b0f19',
            fontFamily: SANS,
            fontWeight: 700,
            fontSize: 22,
            lineHeight: 1.2,
            letterSpacing: '-0.025em',
          }}
        >
          {article.title}
        </h3>

        <p
          className="mt-1.5"
          style={{
            color: dark ? '#8b8b93' : '#9aa3b0',
            fontFamily: SANS,
            fontSize: 14.5,
            lineHeight: 1.45,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {article.excerpt}
        </p>

        {/* icon + value meta row, like the sample's price / airport line */}
        <div
          className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-4"
          style={{ fontFamily: SANS, fontSize: 13.5 }}
        >
          <span className="inline-flex items-center gap-2">
            <ClockIcon color={metaIcon} />
            <span style={{ color: metaText, fontWeight: 600 }}>{article.readTime}</span>
          </span>
          <span className="inline-flex items-center gap-2">
            <CalendarIcon color={metaIcon} />
            <span style={{ color: metaText, fontWeight: 600 }}>{article.date}</span>
          </span>
        </div>

        <div className="flex items-center gap-2.5 mt-auto pt-5">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="zp-btn zp-sheen flex-1 inline-flex items-center justify-center rounded-full no-underline"
            style={{
              background: pillBg,
              color: pillFg,
              fontFamily: SANS,
              fontSize: 14.5,
              fontWeight: 600,
              height: 48,
              letterSpacing: '-0.01em',
            }}
          >
            Read article
          </a>
          <button
            type="button"
            aria-label={saved ? 'Remove from saved' : 'Save article'}
            aria-pressed={saved}
            onClick={() => setSaved((v) => !v)}
            className="zp-btn shrink-0 flex items-center justify-center rounded-full cursor-pointer"
            style={{
              width: 48,
              height: 48,
              background: 'transparent',
              border: dark ? '1px solid rgba(255,255,255,0.14)' : '1px solid #e8ebef',
            }}
          >
            <BookmarkIcon color={SCRIPT} filled={saved} />
          </button>
        </div>
      </div>
    </article>
  )
}

/* ── page ──────────────────────────────────────────────────────── */
interface BlogPageProps {
  onNavigate: (page: string) => void
  dark?: boolean
}

export default function BlogPage({ dark = false }: BlogPageProps) {
  const [active, setActive] = useState<'All' | Category>('All')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [showAll, setShowAll] = useState(false)

  const visible = useMemo(() => {
    const list = articles.filter((a) => active === 'All' || a.category === active)
    return showAll || active !== 'All' ? list : list.slice(0, 3)
  }, [active, showAll])

  const heading = dark ? '#f5f5f5' : NAVY
  const muted = dark ? '#a1a1aa' : '#4b5563'
  const surface = dark ? '#0f0f12' : '#ffffff'
  const surfaceBorder = dark ? '1px solid rgba(255,255,255,0.09)' : '1px solid #eef1f4'
  const pageBg = dark ? '#000000' : '#ffffff'
  const heroBg = dark
    ? 'linear-gradient(135deg, #06100f 0%, #000000 55%, #050b12 100%)'
    : 'linear-gradient(135deg, #f2fbf9 0%, #f4f9fd 45%, #f6fbf3 100%)'

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubscribed(true)
  }

  return (
    <div style={{ background: pageBg, fontFamily: SANS, transition: 'background 0.4s ease' }}>
      {/* ═══════════ HERO ═══════════ */}
      <section
        className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-10"
        style={{ background: heroBg }}
      >
        {/* soft blob behind the hero image */}
        <div
          className="absolute pointer-events-none hidden lg:block"
          style={{
            right: '-6%',
            top: '4%',
            width: 560,
            height: 560,
            borderRadius: '50%',
            background: dark
              ? 'radial-gradient(circle, rgba(45,212,191,0.10) 0%, rgba(0,0,0,0) 70%)'
              : 'radial-gradient(circle, rgba(200,240,232,0.85) 0%, rgba(228,244,248,0.4) 45%, rgba(255,255,255,0) 72%)',
          }}
        />

        <div className="relative mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_minmax(0,400px)] items-center gap-10 lg:gap-6">
            {/* ── copy ── */}
            <div className="max-w-[560px]">
              <Reveal y={14} delay={0.15} duration={0.6}>
              <p
                className="uppercase"
                style={{
                  color: dark ? '#5eead4' : '#0d9488',
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                }}
              >
                Our Journal &amp; Insights
              </p>
              </Reveal>

              {/* The headline carries a gradient-clipped word, so it rises as
                  one masked block rather than being split into spans. */}
              <Reveal mask delay={0.25} duration={1}>
              <h1
                className="mt-3 leading-[1.08]"
                style={{ fontFamily: SERIF, fontWeight: 700, color: heading, fontSize: 'clamp(32px, 4vw, 50px)', letterSpacing: '-0.015em' }}
              >
                Ideas for a{' '}
                <span
                  style={{
                    background: TEXT_GRADIENT,
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Healthier
                </span>
                <br />
                Mind, Life &amp; Workplace
              </h1>
              </Reveal>
              <Reveal y={22} delay={0.5}>
              <p className="mt-5" style={{ color: muted, fontSize: 15.5, lineHeight: 1.65, maxWidth: 470 }}>
                Explore thoughtful insights on mental wellness, astrology, relationships,
                personal growth, and building healthier workplaces.
              </p>
              </Reveal>
            </div>

            {/* ── handwritten note ── */}
            <Reveal
              className="hidden lg:block self-start mt-10 text-center leading-[1.15] select-none"
              y={18}
              scale={0.92}
              delay={0.7}
              duration={0.9}
              style={{ fontFamily: HAND, color: SCRIPT, fontSize: 30, transform: 'rotate(-12deg)', width: 120 }}
            >
              Small
              <br />
              Steps
              <br />
              Brighter
              <br />
              Days
            </Reveal>

            {/* ── image composition ── */}
            <div className="relative mx-auto w-full max-w-[420px] lg:mx-0" style={{ paddingTop: 28, paddingBottom: 36 }}>
              <div className="zp-float-slow absolute pointer-events-none" style={{ top: -6, right: -24 }}>
                <ZodiacWheel />
              </div>

              <Reveal
                className="zp-media relative"
                scale={0.94}
                y={30}
                delay={0.3}
                duration={1}
                style={{
                  aspectRatio: '240 / 272',
                  maxWidth: 300,
                  borderRadius: '28px 150px 28px 28px',
                  boxShadow: dark ? '0 24px 60px rgba(0,0,0,0.6)' : '0 24px 60px rgba(16,24,40,0.14)',
                }}
              >
                <img
                  src={IMG('photo-1544716278-ca5e3f4abd8c', 900)}
                  alt="A calm mug resting on a stack of books beside a plant"
                  className="w-full h-full object-cover"
                />
              </Reveal>

              {/* Floating wellness card. The entrance (GSAP) and the idle
                  breathing (CSS) both drive `transform`, so they are kept on
                  separate elements — otherwise the looping keyframes win and
                  the entrance never shows. */}
              <Reveal
                className="absolute"
                y={0}
                x={26}
                delay={0.85}
                style={{ right: 0, bottom: 48 }}
              >
                <div
                  className="zp-float flex items-center gap-3 rounded-2xl"
                  style={{
                    padding: '14px 16px',
                    width: 168,
                    background: surface,
                    border: surfaceBorder,
                    boxShadow: dark ? '0 14px 34px rgba(0,0,0,0.6)' : '0 14px 34px rgba(16,24,40,0.12)',
                  }}
                >
                  <div
                    className="zp-icon-tile flex items-center justify-center rounded-full shrink-0"
                    style={{ width: 32, height: 32, background: dark ? 'rgba(143,208,106,0.16)' : '#eef8e6' }}
                  >
                    <LeafIcon color="#6bb548" size={18} />
                  </div>
                  <p style={{ color: heading, fontSize: 11.5, fontWeight: 600, lineHeight: 1.35 }}>
                    Wellness for a brighter tomorrow
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FEATURED ARTICLE ═══════════ */}
      <section className="pt-2 pb-8 sm:pb-10" style={{ background: pageBg }}>
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <Reveal
            y={36}
            duration={0.9}
            className="zp-card-soft grid grid-cols-1 lg:grid-cols-[minmax(0,440px)_1fr] gap-6 lg:gap-8 items-center rounded-3xl"
            style={{
              background: surface,
              border: surfaceBorder,
              boxShadow: dark ? '0 18px 50px rgba(0,0,0,0.55)' : '0 18px 50px rgba(16,24,40,0.08)',
              padding: 18,
            }}
          >
            <div className="zp-media relative rounded-2xl" style={{ aspectRatio: '430 / 262' }}>
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0) 55%)' }}
              />
              <p
                className="absolute text-center leading-[1.15] select-none"
                style={{ top: 22, left: 40, fontFamily: HAND, color: '#ffffff', fontSize: 28, transform: 'rotate(-10deg)', textShadow: '0 2px 10px rgba(0,0,0,0.25)' }}
                aria-hidden="true"
              >
                A<br />Healthier<br />You
              </p>
            </div>

            <Reveal stagger={0.09} delay={0.2} y={22} className="flex flex-col items-start gap-4 py-2 pr-2 lg:pr-6">
              <div className="flex flex-wrap items-center gap-2">
                <CategoryChip category={featured.category} dark={dark} />
                <span
                  className="inline-flex items-center rounded-full"
                  style={{
                    background: dark ? 'rgba(255,255,255,0.08)' : '#f2f4f7',
                    color: dark ? '#e4e4e7' : '#344054',
                    fontSize: 11.5,
                    fontWeight: 600,
                    padding: '5px 11px',
                  }}
                >
                  Featured Article
                </span>
              </div>
              <h2
                className="leading-[1.2]"
                style={{ fontFamily: SERIF, fontWeight: 700, color: heading, fontSize: 'clamp(24px, 2.7vw, 32px)' }}
              >
                {featured.title}
              </h2>
              <p style={{ color: muted, fontSize: 15, lineHeight: 1.6, maxWidth: 520 }}>{featured.excerpt}</p>
              <Meta readTime={featured.readTime} date={featured.date} dark={dark} />
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="zp-btn zp-sheen zp-arrow inline-flex items-center gap-2 rounded-full text-white no-underline"
                style={{ background: GRADIENT, fontSize: 13.5, fontWeight: 600, padding: '11px 22px', boxShadow: '0 8px 20px rgba(94,184,232,0.3)' }}
              >
                Read article
                <ArrowIcon size={13} />
              </a>
            </Reveal>
          </Reveal>
        </div>
      </section>

      {/* ═══════════ CATEGORY FILTER ═══════════ */}
      <section className="pb-8" style={{ background: pageBg }}>
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <Reveal stagger={0.05} y={16} duration={0.5} className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {(['All', ...categories] as const).map((c) => {
              const isActive = active === c
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  className="zp-btn rounded-full cursor-pointer"
                  style={{
                    background: isActive ? GRADIENT : surface,
                    color: isActive ? '#ffffff' : dark ? '#e4e4e7' : '#344054',
                    border: isActive ? '1px solid transparent' : dark ? '1px solid rgba(255,255,255,0.14)' : '1px solid #e4e9ee',
                    boxShadow: isActive ? '0 8px 20px rgba(94,184,232,0.3)' : 'none',
                    fontSize: 13,
                    fontWeight: isActive ? 700 : 500,
                    padding: '9px 20px',
                  }}
                >
                  {c}
                </button>
              )
            })}
          </Reveal>
        </div>
      </section>

      {/* ═══════════ LATEST ARTICLES ═══════════ */}
      <section className="pb-12 sm:pb-14" style={{ background: pageBg }}>
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-7">
            <div>
              <TextReveal
                as="h2"
                style={{ fontFamily: SERIF, fontWeight: 700, color: heading, fontSize: 'clamp(26px, 3vw, 34px)', letterSpacing: '-0.01em' }}
              >
                Latest from ZodiacPluss
              </TextReveal>
              <Reveal y={18} delay={0.25}>
                <p className="mt-1.5" style={{ color: muted, fontSize: 14.5 }}>
                  Practical insights, expert advice and real stories for a healthier, happier you.
                </p>
              </Reveal>
            </div>
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="zp-arrow zp-link inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-0"
              style={{ color: heading, fontSize: 13, fontWeight: 500, padding: 0 }}
            >
              {showAll ? 'Show fewer articles' : 'View all articles'}
              <ArrowIcon size={13} />
            </button>
          </div>

          {visible.length > 0 ? (
            <Reveal stagger={0.1} y={40} duration={0.8} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visible.map((a) => (
                <ArticleCard key={a.id} article={a} dark={dark} />
              ))}
            </Reveal>
          ) : (
            <div
              className="rounded-2xl text-center"
              style={{ background: surface, border: surfaceBorder, padding: '40px 20px', color: muted, fontSize: 14 }}
            >
              No articles in “{active}” yet. Pick another category to keep reading.
            </div>
          )}
        </div>
      </section>

      {/* ═══════════ NEWSLETTER ═══════════ */}
      <section className="pb-16 sm:pb-20" style={{ background: pageBg }}>
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
          <Reveal
            y={34}
            duration={0.9}
            className="relative overflow-hidden rounded-3xl grid grid-cols-1 lg:grid-cols-[auto_1fr_auto_auto] items-center gap-6 lg:gap-8"
            style={{
              background: dark
                ? 'linear-gradient(90deg, rgba(94,184,232,0.10) 0%, rgba(143,208,106,0.10) 100%)'
                : 'linear-gradient(90deg, #e9f5f8 0%, #edf7ee 100%)',
              border: dark ? '1px solid rgba(255,255,255,0.09)' : '1px solid #dfeee9',
              padding: 'clamp(24px, 3vw, 34px) clamp(20px, 4vw, 44px)',
            }}
          >
            <div
              className="zp-float flex items-center justify-center rounded-full shrink-0"
              style={{ width: 60, height: 60, background: GRADIENT, boxShadow: '0 10px 24px rgba(94,184,232,0.35)' }}
            >
              <LeafIcon color="#ffffff" size={26} />
            </div>

            <div>
              <h3 style={{ fontFamily: SANS, fontWeight: 700, color: heading, fontSize: 18 }}>Stay in the loop</h3>
              <p className="mt-1" style={{ color: muted, fontSize: 13.5, lineHeight: 1.55, maxWidth: 320 }}>
                Get the latest wellness insights, articles and resources delivered to your inbox.
              </p>
            </div>

            <form
              onSubmit={handleSubscribe}
              className="flex items-center gap-2 rounded-full w-full lg:w-[300px]"
              style={{
                background: surface,
                border: dark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8ec',
                boxShadow: dark ? '0 10px 30px rgba(0,0,0,0.45)' : '0 10px 30px rgba(16,24,40,0.07)',
                padding: '5px 5px 5px 16px',
              }}
            >
              <MailIcon color={dark ? '#a1a1aa' : '#667085'} />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => { setEmail(e.target.value); setSubscribed(false) }}
                placeholder={subscribed ? 'Thanks — you’re subscribed!' : 'Enter your email address'}
                aria-label="Email address"
                className="flex-1 min-w-0 bg-transparent outline-none border-0"
                style={{ color: heading, fontSize: 13, padding: '8px 4px' }}
              />
              <GradientCircleButton label="Subscribe" />
            </form>

            <div
              className="hidden lg:block text-center leading-[1.15] select-none"
              style={{ fontFamily: HAND, color: SCRIPT, fontSize: 26, transform: 'rotate(-12deg)', width: 110 }}
              aria-hidden="true"
            >
              Better
              <br />
              Mental
              <br />
              Health
              <br />
              Together
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
