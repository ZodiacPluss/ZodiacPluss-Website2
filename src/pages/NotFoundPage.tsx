import { PAGE_TO_PATH } from '@/utils/routes'

interface NotFoundPageProps {
  onNavigate: (page: string) => void
  dark?: boolean
}

const QUICK_LINKS: readonly { label: string; page: string }[] = [
  { label: 'Home', page: 'Home' },
  { label: 'About Us', page: 'About Us' },
  { label: 'Services', page: 'Services' },
  { label: 'Portfolio', page: 'Portfolio' },
  { label: 'Career', page: 'Career' },
  { label: 'Book a Session', page: 'Book' },
]

export default function NotFoundPage({ onNavigate, dark = false }: NotFoundPageProps) {
  const textPrimary = dark ? '#f5f5f5' : '#1e0d40'
  const textSecondary = dark ? '#a1a1aa' : '#6b7280'

  return (
    <div
      className="w-full flex items-center justify-center px-6"
      style={{ minHeight: '70vh', paddingTop: '140px', paddingBottom: '80px' }}
    >
      <div className="max-w-xl text-center">
        <p
          className="text-xs font-bold tracking-[0.16em] uppercase mb-4"
          style={{ color: '#14b8a6', fontFamily: "'Inter', sans-serif" }}
        >
          404
        </p>
        <h1
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: textPrimary, fontFamily: "'Playfair Display', serif" }}
        >
          This page could not be found
        </h1>
        <p
          className="text-base mb-8"
          style={{ color: textSecondary, fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}
        >
          The link may be out of date or mistyped. Here is the rest of ZodiacPluss.
        </p>

        <nav aria-label="Site sections">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 list-none p-0 m-0">
            {QUICK_LINKS.map(({ label, page }) => (
              <li key={label}>
                <a
                  href={PAGE_TO_PATH[page] ?? '/'}
                  onClick={(e) => { e.preventDefault(); onNavigate(page) }}
                  className="text-sm font-semibold no-underline transition-opacity duration-200 hover:opacity-70"
                  style={{ color: '#0d9488', fontFamily: "'Inter', sans-serif" }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
