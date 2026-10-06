import { useEffect, useMemo, useState } from 'react'
import { astrologers, type Astrologer } from '@/data/experts/astrologers'

interface AstrolistProps {
  onNavigate: (page: string) => void
  dark?: boolean
}

const PAGE_SIZE = 15
const HERO_IMAGE =
  'https://res.cloudinary.com/o6laufzn/image/upload/v1791305809/Celestial_Altar_Still_Life_in_Warm_Neutrals.png'

const categories = [
  'Vedic Astrology',
  'Tarot Reading',
  'Numerology',
  'Palmistry',
  'KP Astrology',
  'Lal Kitab',
  'Love & Relationships',
]

const selectClass =
  'min-w-0 rounded-full border px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20'

function astrologerMatchesCategory(astrologer: Astrologer, category: string): boolean {
  if (category === 'All Experts') return true
  const normalizedCategory = category.toLowerCase()
  return [astrologer.field, ...astrologer.tags].some(
    (item) => item.toLowerCase() === normalizedCategory,
  )
}

export default function Astrolist({ onNavigate, dark = false }: AstrolistProps) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All Experts')
  const [experience, setExperience] = useState('all')
  const [language, setLanguage] = useState('all')
  const [availability, setAvailability] = useState('all')
  const [sort, setSort] = useState('recommended')
  const [showMoreCategories, setShowMoreCategories] = useState(false)
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const [favorites, setFavorites] = useState<string[]>([])
  const [selectedAstrologer, setSelectedAstrologer] = useState<Astrologer | null>(null)

  const allCategories = useMemo(
    () => [...new Set([...categories, ...astrologers.flatMap((astrologer) => astrologer.tags)])],
    [],
  )
  const languages = useMemo(
    () => [...new Set(astrologers.flatMap((astrologer) => astrologer.languages))].sort(),
    [],
  )

  const filteredAstrologers = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase()
    const filtered = astrologers.filter((astrologer) => {
      const matchesCategory = astrologerMatchesCategory(astrologer, category)
      const searchableText = [
        astrologer.name,
        astrologer.field,
        ...astrologer.tags,
        ...astrologer.languages,
      ].join(' ').toLowerCase()
      const matchesSearch = !normalizedSearch || searchableText.includes(normalizedSearch)
      const matchesExperience =
        experience === 'all' ||
        (experience === '5' && astrologer.experience >= 5) ||
        (experience === '10' && astrologer.experience >= 10) ||
        (experience === '15' && astrologer.experience >= 15)
      const matchesLanguage =
        language === 'all' || astrologer.languages.includes(language)
      const matchesAvailability =
        availability === 'all' ||
        (availability === 'available' && astrologer.isAvailable) ||
        (availability === 'soon' && !astrologer.isAvailable)

      return (
        matchesCategory &&
        matchesSearch &&
        matchesExperience &&
        matchesLanguage &&
        matchesAvailability
      )
    })

    if (sort === 'experience-high') {
      filtered.sort((a, b) => b.experience - a.experience)
    } else if (sort === 'experience-low') {
      filtered.sort((a, b) => a.experience - b.experience)
    } else {
      filtered.sort((a, b) => Number(b.isAvailable) - Number(a.isAvailable))
    }

    return filtered
  }, [availability, category, experience, language, search, sort])

  useEffect(() => {
    setVisibleCount(PAGE_SIZE)
  }, [availability, category, experience, language, search, sort])

  useEffect(() => {
    if (!selectedAstrologer) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedAstrologer(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedAstrologer])

  const background = dark ? '#000000' : '#f8f6ff'
  const surface = dark ? '#141416' : '#ffffff'
  const text = dark ? '#f5f5f5' : '#1e1035'
  const muted = dark ? '#a1a1aa' : '#64748b'
  const border = dark ? 'rgba(255,255,255,0.12)' : '#e2d9f3'
  const softSurface = dark ? '#1c1b20' : '#f3e8ff'
  const accent = dark ? '#2dd4bf' : '#0d8e84'

  const toggleFavorite = (id: string) => {
    setFavorites((current) =>
      current.includes(id) ? current.filter((favorite) => favorite !== id) : [...current, id],
    )
  }

  return (
    <main className="min-h-screen pb-20" style={{ background, color: text }}>
      <section
        className="relative overflow-hidden px-6 py-16 md:py-20"
        style={{
          backgroundImage: dark
            ? `linear-gradient(90deg, rgba(12, 13, 18, 0.94) 0%, rgba(15, 18, 22, 0.82) 44%, rgba(16, 20, 22, 0.28) 100%), url("${HERO_IMAGE}")`
            : `linear-gradient(90deg, rgba(173, 173, 174, 0.60) 0%, rgba(173, 173, 174, 0.60) 42%, rgba(173, 173, 174, 0.60) 100%), url("${HERO_IMAGE}")`,
          backgroundColor: dark ? '#101b1c' : '#e9f8f4',
          backgroundPosition: 'center, center 54%',
          backgroundSize: 'cover',
        }}
      >
        
        <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-10">
          <div className="max-w-2xl">
            <p
              className="mb-3 text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: accent }}
            >
              Our experts
            </p>
            <h1
              className="mb-4 text-4xl font-bold leading-tight md:text-5xl"
              style={{ color: text, fontFamily: "'Playfair Display', serif" }}
            >
              Connect with Verified Astrologers
            </h1>
            <p className="max-w-xl text-sm leading-6 md:text-base" style={{ color: muted }}>
              Explore our experienced and trusted astrologers. Find the right expert for your
              guidance.
            </p>
          </div>

          <div className="relative hidden h-56 w-72 shrink-0 items-center justify-center lg:flex">
            <div
              className="absolute h-52 w-52 rounded-full border"
              style={{ borderColor: `${accent}55` }}
            />
            <div
              className="absolute h-40 w-40 rounded-full border"
              style={{ borderColor: `${accent}45` }}
            />
            <div
              className="absolute h-28 w-28 rounded-full border"
              style={{ borderColor: `${accent}35` }}
            />
            <div className="absolute h-px w-52 rotate-45" style={{ background: `${accent}45` }} />
            <div className="absolute h-px w-52 -rotate-45" style={{ background: `${accent}45` }} />
            <div
              className="relative z-10 max-w-52 rounded-2xl border px-5 py-4 shadow-lg"
              style={{ background: surface, borderColor: border }}
            >
              <p className="font-semibold" style={{ color: text }}>
                Guidance for a brighter tomorrow
              </p>
              <p className="mt-1 text-xs leading-5" style={{ color: muted }}>
                Find a trusted guide for your personal journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-7 md:px-6">
        <div
          className="astrologer-category-scroll mb-5 flex gap-2 overflow-x-auto pb-2"
          aria-label="Astrologer specialties"
        >
          <button
            type="button"
            onClick={() => setCategory('All Experts')}
            aria-pressed={category === 'All Experts'}
            className="shrink-0 rounded-full border px-4 py-2.5 text-xs font-semibold transition"
            style={{
              background: category === 'All Experts' ? accent : surface,
              color: category === 'All Experts' ? '#ffffff' : text,
              borderColor: category === 'All Experts' ? accent : border,
            }}
          >
            All Experts
          </button>
          {categories.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
              className="shrink-0 rounded-full border px-4 py-2.5 text-xs font-semibold transition"
              style={{
                background: category === item ? accent : surface,
                color: category === item ? '#ffffff' : text,
                borderColor: category === item ? accent : border,
              }}
            >
              {item}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setShowMoreCategories((shown) => !shown)}
            aria-expanded={showMoreCategories}
            className="shrink-0 rounded-full border px-4 py-2.5 text-xs font-semibold transition"
            style={{ background: surface, color: text, borderColor: border }}
          >
            {showMoreCategories ? 'Less −' : 'More +'}
          </button>
        </div>

        {showMoreCategories && (
          <div className="mb-5 flex flex-wrap gap-2">
            {allCategories
              .filter((item) => !categories.includes(item))
              .map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => setCategory(item)}
                  aria-pressed={category === item}
                  className="rounded-full border px-4 py-2 text-xs font-medium transition"
                  style={{
                    background: category === item ? accent : surface,
                    color: category === item ? '#ffffff' : text,
                    borderColor: category === item ? accent : border,
                  }}
                >
                  {item}
                </button>
              ))}
          </div>
        )}

        {/*
        <div className="mb-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-[minmax(250px,1fr)_repeat(3,minmax(130px,155px))]">
          <label className="relative">
            <span className="sr-only">Search astrologers</span>
            <svg
              aria-hidden="true"
              className="absolute left-4 top-1/2 -translate-y-1/2"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke={muted}
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by name, skill or language..."
              className={`${selectClass} w-full pl-11`}
              style={{ background: surface, color: text, borderColor: border }}
            />
          </label>

          <label>
            <span className="sr-only">Filter by experience</span>
            <select
              value={experience}
              onChange={(event) => setExperience(event.target.value)}
              className={`${selectClass} w-full`}
              style={{ background: surface, color: text, borderColor: border }}
            >
              <option value="all">Experience</option>
              <option value="5">5+ years</option>
              <option value="10">10+ years</option>
              <option value="15">15+ years</option>
            </select>
          </label>

          <label>
            <span className="sr-only">Filter by language</span>
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
              className={`${selectClass} w-full`}
              style={{ background: surface, color: text, borderColor: border }}
            >
              <option value="all">Languages</option>
              {languages.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </label>

          <label>
            <span className="sr-only">Filter by availability</span>
            <select
              value={availability}
              onChange={(event) => setAvailability(event.target.value)}
              className={`${selectClass} w-full`}
              style={{ background: surface, color: text, borderColor: border }}
            >
              <option value="all">Availability</option>
              <option value="available">Available now</option>
              <option value="soon">Available soon</option>
            </select>
          </label>
        </div>
        */}

        <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs" style={{ color: muted }} aria-live="polite">
            Showing {Math.min(visibleCount, filteredAstrologers.length)} of {filteredAstrologers.length} astrologers
          </p>
          {/*
          <label className="flex items-center gap-2 text-xs" style={{ color: muted }}>
            Sort by
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="rounded-full border px-3 py-2 text-xs outline-none"
              style={{ background: surface, color: text, borderColor: border }}
            >
              <option value="recommended">Recommended</option>
              <option value="experience-high">Most experience</option>
              <option value="experience-low">Least experience</option>
            </select>
          </label>
          */}
        </div>

        {filteredAstrologers.length ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {filteredAstrologers.slice(0, visibleCount).map((astrologer) => (
              <article
                key={astrologer.id}
                className="overflow-hidden rounded-2xl border shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: surface, borderColor: border }}
              >
                <div
                  className="relative h-64 sm:h-52 lg:h-48 xl:h-44"
                  style={{
                    background: dark
                      ? 'linear-gradient(135deg, #202023, #172c2b)'
                      : 'linear-gradient(135deg, #f0e9f8, #e7f5f1)',
                  }}
                  aria-label={`Image placeholder for ${astrologer.name}`}
                >
                  <img
                    src={astrologer.image}
                    alt={astrologer.name}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover object-top"
                    style={{ objectPosition: 'center 20%' }}
                    onError={(event) => {
                      event.currentTarget.style.display = 'none'
                    }}
                  />
                  <span
                    className="absolute bottom-2 left-2 rounded-full px-2.5 py-1 text-[10px] font-semibold"
                    style={{
                      background: astrologer.isAvailable
                        ? (dark ? 'rgba(20,184,166,0.2)' : '#d8f5e8')
                        : (dark ? 'rgba(168,85,247,0.2)' : '#f0e6ff'),
                      color: astrologer.isAvailable
                        ? (dark ? '#5eead4' : '#176b4d')
                        : (dark ? '#d8b4fe' : '#5b2d8e'),
                    }}
                  >
                    {astrologer.isAvailable ? 'Available Now' : 'Available Soon'}
                  </span>
                  <button
                    type="button"
                    onClick={() => toggleFavorite(astrologer.id)}
                    aria-label={`${favorites.includes(astrologer.id) ? 'Remove' : 'Add'} ${astrologer.name} ${favorites.includes(astrologer.id) ? 'from' : 'to'} favorites`}
                    aria-pressed={favorites.includes(astrologer.id)}
                    className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full shadow-sm transition"
                    style={{ background: surface, color: favorites.includes(astrologer.id) ? '#d81b86' : muted }}
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill={favorites.includes(astrologer.id) ? 'currentColor' : 'none'}
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
                    </svg>
                  </button>
                </div>

                <div className="flex min-h-44 flex-col p-3">
                  <h2 className="truncate text-sm font-bold" style={{ color: text }}>
                    {astrologer.name}
                  </h2>
                  <p className="mt-1 truncate text-xs" style={{ color: muted }}>
                    {astrologer.field}
                  </p>
                  <p className="mt-2 min-h-8 text-[11px] leading-4" style={{ color: muted }}>
                    {astrologer.tags.slice(0, 2).join(' · ')}
                  </p>

                  <div className="mt-1 space-y-2 text-[11px]" style={{ color: muted }}>
                    <p className="flex items-center gap-2">
                      <span aria-hidden="true">◷</span>
                      {astrologer.experience}+ Years Experience
                    </p>
                    <p className="flex items-center gap-2 truncate">
                      <span aria-hidden="true">◎</span>
                      <span className="truncate">{astrologer.languages.join(', ')}</span>
                    </p>
                  </div>

                  <div className="mt-auto grid grid-cols-2 gap-2 pt-4">
                    <button
                      type="button"
                      onClick={() => setSelectedAstrologer(astrologer)}
                      className="rounded-lg border px-2 py-2 text-[11px] font-semibold transition hover:border-teal-500"
                      style={{ background: surface, color: text, borderColor: border }}
                    >
                      View Profile
                    </button>
                    <button
                      type="button"
                      onClick={() => onNavigate('Book')}
                      className="rounded-lg px-2 py-2 text-[11px] font-semibold text-white transition hover:opacity-90"
                      style={{ background: 'linear-gradient(90deg, #5eb8e8 0%, #8fd06a 100%)' }}
                    >
                      Consult Now
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div
            className="rounded-2xl border px-6 py-14 text-center"
            style={{ background: surface, borderColor: border, color: muted }}
          >
            No astrologers match your search. Try changing a filter or search term.
          </div>
        )}

        {visibleCount < filteredAstrologers.length && (
          <div className="mt-9 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
              className="rounded-full px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: 'linear-gradient(90deg, #5eb8e8 0%, #8fd06a 100%)' }}
            >
              view more
            </button>
          </div>
        )}
        {visibleCount == filteredAstrologers.length && (
          <div className="mt-9 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((count) => count - PAGE_SIZE)}
              className="rounded-full px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: 'linear-gradient(90deg, #5eb8e8 0%, #8fd06a 100%)' }}
            >
              view less
            </button>
          </div>
        )}
      </div>

      {selectedAstrologer && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/60 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedAstrologer(null)
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="astrologer-profile-title"
            className="my-auto w-full max-w-lg rounded-3xl border p-6 shadow-2xl"
            style={{ background: surface, color: text, borderColor: border }}
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider" style={{ color: accent }}>
                  Astrologer profile
                </p>
                <h2
                  id="astrologer-profile-title"
                  className="text-2xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {selectedAstrologer.name}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedAstrologer(null)}
                aria-label="Close profile"
                className="rounded-full px-3 py-1 text-xl"
                style={{ background: softSurface, color: text }}
              >
                ×
              </button>
            </div>
            <p className="mb-3 text-sm font-medium" style={{ color: muted }}>
              {selectedAstrologer.field} · {selectedAstrologer.experience}+ years experience
            </p>
            <p className="mb-4 whitespace-pre-line text-sm leading-6" style={{ color: muted }}>
              {selectedAstrologer.description}
            </p>
            <p className="mb-6 text-xs" style={{ color: muted }}>
              Languages: {selectedAstrologer.languages.join(', ')}
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedAstrologer(null)
                onNavigate('Book')
              }}
              className="w-full rounded-full py-3 text-sm font-semibold text-white"
              style={{ background: 'linear-gradient(90deg, #5eb8e8 0%, #8fd06a 100%)' }}
            >
              Consult Now
            </button>
          </section>
        </div>
      )}
    </main>
  )
}
