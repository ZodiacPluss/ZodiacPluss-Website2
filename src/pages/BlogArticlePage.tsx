import { Reveal } from '@/components/motion'
import { getBlogPath, type BlogArticle } from '@/data/blogs'

const SERIF = "'Playfair Display', serif"
const SANS = "'Inter', sans-serif"
const GREEN = '#168f78'
const NAVY = '#101828'

function ClockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </svg>
  )
}

interface BlogArticlePageProps {
  article: BlogArticle
  onNavigate: (page: string) => void
  dark?: boolean
}

export default function BlogArticlePage({ article, onNavigate, dark = false }: BlogArticlePageProps) {
  const background = dark ? '#000000' : '#ffffff'
  const text = dark ? '#f5f5f5' : NAVY
  const muted = dark ? '#a1a1aa' : '#667085'
  const surface = dark ? '#101012' : '#effaf5'
  const border = dark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e0eee8'

  return (
    <article style={{ background, fontFamily: SANS, color: text }}>
      <header className="mx-auto max-w-[850px] px-5 sm:px-8 pt-28 sm:pt-32 pb-8">
        <button
          type="button"
          onClick={() => onNavigate('Blog')}
          className="inline-flex items-center gap-2 border-0 bg-transparent p-0 cursor-pointer"
          style={{ color: muted, fontSize: 12, fontWeight: 600 }}
        >
          <span aria-hidden="true">←</span> Back to all articles
        </button>
        <Reveal y={18} delay={0.1}>
          <div className="mt-7 inline-flex rounded-full uppercase" style={{ background: dark ? 'rgba(94,184,232,0.15)' : '#e5f3ff', color: dark ? '#7dd3fc' : '#2374aa', fontSize: 10.5, fontWeight: 700, letterSpacing: '0.08em', padding: '5px 11px' }}>
            {article.category}
          </div>
          <h1 className="mt-4 max-w-[700px]" style={{ fontFamily: SERIF, fontWeight: 700, fontSize: 'clamp(34px, 5vw, 58px)', lineHeight: 1.03, letterSpacing: '-0.025em' }}>
            {article.title}
          </h1>
          <p className="mt-4 max-w-[650px]" style={{ color: muted, fontSize: 16, lineHeight: 1.55 }}>
            {article.excerpt}
          </p>
          <div className="mt-5 flex items-center gap-5" style={{ color: muted, fontSize: 12 }}>
            <span className="inline-flex items-center gap-1.5"><ClockIcon />{article.readTime}</span>
            <span className="inline-flex items-center gap-1.5"><CalendarIcon />{article.date}</span>
          </div>
        </Reveal>
      </header>

      <div className="mx-auto max-w-[1080px] px-5 sm:px-8">
        <Reveal
          y={28}
          delay={0.15}
          className="zp-media mx-auto overflow-hidden"
          style={{
            width: 'min(100%, 620px)',
            aspectRatio: '1 / 1',
            borderRadius: 24,
            background: dark ? '#101012' : '#f4f7f6',
            border: dark ? '1px solid rgba(255,255,255,0.12)' : '1px solid #e7eeeb',
          }}
        >
          <img src={article.image} alt={article.title} className="w-full h-full object-contain" />
        </Reveal>
      </div>

      <div className="mx-auto max-w-[650px] px-5 sm:px-8 py-10 sm:py-14">
        {article.sections.map((section, index) => (
          <Reveal key={`${article.id}-${index}`} y={18} delay={index === 0 ? 0.1 : 0} className="mb-8 last:mb-0">
            {section.heading && <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(24px, 3vw, 31px)', lineHeight: 1.2, marginBottom: 12 }}>{section.heading}</h2>}
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="mb-4 last:mb-0" style={{ color: muted, fontSize: 15, lineHeight: 1.65 }}>{paragraph}</p>
            ))}
            {section.quote && (
              <blockquote className="my-6" style={{ background: surface, border, borderRadius: 14, color: dark ? '#d1fae5' : '#176b57', padding: '20px 24px', fontSize: 15, lineHeight: 1.55, fontWeight: 600 }}>
                “{section.quote}”
              </blockquote>
            )}
            {section.list && (
              <ol className="space-y-3 my-5" style={{ color: muted, fontSize: 14.5, lineHeight: 1.5, paddingLeft: 28 }}>
                {section.list.map((item, itemIndex) => <li key={item} style={{ paddingLeft: 5 }}><span style={{ color: GREEN, fontWeight: 700 }}>{itemIndex + 1}. </span>{item}</li>)}
              </ol>
            )}
            {section.image && (
              <img
                src={section.image}
                alt={section.imageAlt ?? ''}
                loading="lazy"
                className="mx-auto mt-7 w-full object-contain"
                style={{ width: 'min(100%, 480px)', aspectRatio: '1 / 1', borderRadius: 14 }}
              />
            )}
          </Reveal>
        ))}

        <div className="mt-12 pt-7 flex flex-wrap items-center justify-between gap-4" style={{ borderTop: dark ? '1px solid rgba(255,255,255,0.12)' : '1px solid #e7ecea' }}>
          <span style={{ color: muted, fontSize: 13 }}>Keep exploring ZodiacPluss insights.</span>
          <a href={getBlogPath(article)} onClick={(event) => event.preventDefault()} className="no-underline" style={{ color: GREEN, fontSize: 13, fontWeight: 700 }}>#{article.id}</a>
        </div>

        <button
          type="button"
          onClick={() => onNavigate('Blog')}
          className="mt-8 inline-flex items-center gap-2 border-0 bg-transparent p-0 cursor-pointer"
          style={{ color: GREEN, fontSize: 13, fontWeight: 700 }}
        >
          <span aria-hidden="true">←</span> Back to all articles
        </button>
      </div>
    </article>
  )
}
