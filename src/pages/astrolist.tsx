import {
  ArrowRight,
  BriefcaseBusiness,
  ChevronDown,
  Clock3,
  Flower2,
  Globe2,
  Hand,
  Heart,
  Orbit,
  PanelsTopLeft,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  UsersRound,
  X,
  type LucideIcon,
} from "lucide-react"

import { useEffect, useMemo, useRef, useState } from "react"

import { astrologers, type Astrologer } from "@/data/experts/astrologers"

interface AstrolistProps {
  onNavigate: (page: string) => void

  dark?: boolean
}

const FEATURED_ASTROLOGER_ORDER = [
  "astro-041",

  "astro-014",

  "astro-011",

  "astro-028",

  "astro-012",
]

const featuredOrder = new Map(
  FEATURED_ASTROLOGER_ORDER.map((id, index) => [id, index]),
)

const selectClass =
  "h-12 min-w-0 appearance-none rounded-full border px-4 pr-11 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"

const categories: { label: string; icon: LucideIcon }[] = [
  { label: "Vedic Astrology", icon: Flower2 },

  { label: "Tarot Reading", icon: PanelsTopLeft },

  { label: "Numerology", icon: Sparkles },

  { label: "Palmistry", icon: Hand },

  { label: "KP Astrology", icon: Orbit },

  { label: "Lal Kitab", icon: PanelsTopLeft },

  { label: "Love & Relationships", icon: Heart },
]

function astrologerMatchesCategory(
  astrologer: Astrologer,
  category: string,
): boolean {
  if (category === "All Experts") return true

  const normalizedCategory = category.toLowerCase()

  return [astrologer.field, ...astrologer.tags].some(
    (item) => item.toLowerCase() === normalizedCategory,
  )
}

export default function Astrolist({
  onNavigate,
  dark = false,
}: AstrolistProps) {
  const [search, setSearch] = useState("")

  const [category, setCategory] = useState("All Experts")

  const [experience, setExperience] = useState("all")

  const [language, setLanguage] = useState("all")

  const [showMoreCategories, setShowMoreCategories] = useState(false)

  const [selectedAstrologer, setSelectedAstrologer] =
    useState<Astrologer | null>(null)
  const profileDialogRef = useRef<HTMLDialogElement>(null)

  const allCategories = useMemo(
    () => [
      ...new Set([
        ...categories.map(({ label }) => label),

        ...astrologers.flatMap((astrologer) => astrologer.tags),
      ]),
    ],

    [],
  )

  const languages = useMemo(
    () =>
      [
        ...new Set(astrologers.flatMap((astrologer) => astrologer.languages)),
      ].sort(),

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
      ]
        .join(" ")
        .toLowerCase()

      const matchesSearch =
        !normalizedSearch || searchableText.includes(normalizedSearch)

      const matchesExperience =
        experience === "all" ||
        (experience === "5" && astrologer.experience >= 5) ||
        (experience === "10" && astrologer.experience >= 10) ||
        (experience === "15" && astrologer.experience >= 15)

      const matchesLanguage =
        language === "all" || astrologer.languages.includes(language)

      return (
        matchesCategory && matchesSearch && matchesExperience && matchesLanguage
      )
    })

    filtered.sort((a, b) => {
      const aPriority = featuredOrder.get(a.id)

      const bPriority = featuredOrder.get(b.id)

      if (aPriority !== undefined || bPriority !== undefined) {
        return (
          (aPriority ?? Number.MAX_SAFE_INTEGER) -
          (bPriority ?? Number.MAX_SAFE_INTEGER)
        )
      }

      return b.experience - a.experience
    })

    return filtered
  }, [category, experience, language, search])

  useEffect(() => {
    const dialog = profileDialogRef.current
    if (!dialog || !selectedAstrologer || dialog.open) return

    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = "hidden"

    return () => {
      if (dialog.open) dialog.close()
      document.body.style.overflow = previousOverflow
    }
  }, [selectedAstrologer])

  const background = dark ? "#09090b" : "#f7f7ff"

  const surface = dark ? "#141416" : "#ffffff"

  const text = dark ? "#f5f5f5" : "#111a45"

  const muted = dark ? "#a1a1aa" : "#7180a4"

  const border = dark ? "rgba(255,255,255,0.12)" : "#e3e6ff"

  const softSurface = dark ? "#1c1b20" : "#e7fbf2"

  const accent = dark ? "#2dd4bf" : "#0d8e84"

  return (
    <main
      className="min-h-screen pb-20"
      style={{
        background: dark
          ? background
          : "radial-gradient(ellipse at 8% 28%, rgba(211,255,237,0.7), transparent 34%), radial-gradient(ellipse at 92% 12%, rgba(221,229,255,0.85), transparent 40%), #f8f8ff",

        color: text,
      }}
    >
      <section
        className="relative isolate overflow-hidden px-5 pb-10 pt-24 sm:px-8 sm:pb-12 sm:pt-28 md:min-h-[580px] md:pb-14 md:pt-32"
        style={{
          backgroundImage: dark
            ? "linear-gradient(90deg, rgba(9,12,18,0.9) 0%, rgba(9,12,18,0.74) 45%, rgba(9,12,18,0.12) 100%), url('/astrologer-hero-bg.png')"
            : "linear-gradient(90deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.12) 45%, rgba(255,255,255,0) 72%), url('/astrologer-hero-bg.png')",
          backgroundPosition: "center, center",
          backgroundSize: "cover",
        }}
      >
        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-[1680px] items-center md:min-h-[430px]">
          <div className="max-w-4xl py-6">
            <p
              className="mb-4 text-xs font-bold uppercase tracking-[0.24em] sm:text-sm"
              style={{ color: dark ? accent : "#079b95" }}
            >
              Our experts
            </p>
            <h1
              className="mb-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl"
              style={{
                color: text,
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              Connect with Verified
              <br className="hidden sm:block" /> Astrologers
            </h1>
            <p
              className="max-w-3xl text-base leading-7 sm:text-xl sm:leading-9"
              style={{ color: muted }}
            >
              Explore our experienced and trusted astrologers. Find the right
              expert for your guidance.
            </p>
            <a
              href="#astrologer-directory"
              className="mt-6 inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
              style={{
                background: "linear-gradient(100deg, #14a7f5, #54d58b)",
              }}
            >
              Explore Experts <ArrowRight size={18} aria-hidden="true" />
            </a>

            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4 sm:mt-10">
              {[
                {
                  icon: ShieldCheck,
                  label: (
                    <>
                      Verified
                      <br />
                      Experts
                    </>
                  ),
                  tint: "#d8f8ed",
                  color: "#0ca99c",
                },

                {
                  icon: UsersRound,
                  label: (
                    <>
                      Diverse
                      <br />
                      Specializations
                    </>
                  ),
                  tint: "#eee8ff",
                  color: "#8b5cf6",
                },

                {
                  icon: Star,
                  label: (
                    <>
                      Personalized
                      <br />
                      Guidance
                    </>
                  ),
                  tint: "#fff4d9",
                  color: "#d49a20",
                },
              ].map(({ icon: Icon, label, tint, color }, index) => (
                <div key={index} className="flex items-center gap-3">
                  {index > 0 && (
                    <span className="hidden h-12 w-px bg-indigo-200 sm:block" />
                  )}
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-full"
                    style={{ background: tint, color }}
                  >
                    <Icon size={27} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold leading-5 sm:text-base">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <div
        id="astrologer-directory"
        className="mx-auto max-w-[1680px] px-4 py-7 sm:px-8 md:py-9"
      >
        <div
          className="astrologer-category-scroll mb-6 flex gap-2.5 overflow-x-auto pb-2"
          aria-label="Astrologer specialties"
        >
          <button
            type="button"
            onClick={() => setCategory("All Experts")}
            aria-pressed={category === "All Experts"}
            className="shrink-0 rounded-full border px-6 py-3 text-sm font-semibold transition"
            style={{
              background:
                category === "All Experts"
                  ? "linear-gradient(100deg, #28b8c8, #26a34a)"
                  : surface,

              color: category === "All Experts" ? "#ffffff" : text,

              borderColor: category === "All Experts" ? "transparent" : border,

              boxShadow:
                category === "All Experts"
                  ? "0 5px 14px rgba(20,160,130,0.18)"
                  : "0 2px 8px rgba(50,60,120,0.04)",
            }}
          >
            All Experts
          </button>
          {categories.map(({ label, icon: Icon }) => (
            <button
              type="button"
              key={label}
              onClick={() => setCategory(label)}
              aria-pressed={category === label}
              className="flex shrink-0 items-center gap-2.5 rounded-full border px-4 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
              style={{
                background: category === label ? softSurface : surface,

                color: category === label ? accent : text,

                borderColor: category === label ? accent : border,

                boxShadow: "0 2px 8px rgba(50,60,120,0.04)",
              }}
            >
              <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
              {label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setShowMoreCategories((shown) => !shown)}
            aria-expanded={showMoreCategories}
            className="flex shrink-0 items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition"
            style={{
              background: surface,
              color: text,
              borderColor: border,
              boxShadow: "0 2px 8px rgba(50,60,120,0.04)",
            }}
          >
            {showMoreCategories ? "Less" : "More"}
            <ChevronDown
              className={
                showMoreCategories
                  ? "rotate-180 transition-transform"
                  : "transition-transform"
              }
              size={16}
              aria-hidden="true"
            />
          </button>
        </div>

        {showMoreCategories && (
          <div className="mb-5 flex flex-wrap gap-2">
            {allCategories

              .filter((item) => !categories.some(({ label }) => label === item))

              .map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => setCategory(item)}
                  aria-pressed={category === item}
                  className="rounded-full border px-4 py-2.5 text-xs font-medium transition"
                  style={{
                    background: category === item ? accent : surface,

                    color: category === item ? "#ffffff" : text,

                    borderColor: category === item ? accent : border,
                  }}
                >
                  {item}
                </button>
              ))}
          </div>
        )}

        <div className="mb-6 grid gap-3 sm:grid-cols-[minmax(0,1fr)_220px_260px]">
          <label className="relative">
            <span className="sr-only">Search astrologers</span>
            <Search
              aria-hidden="true"
              className="absolute left-4 top-1/2 -translate-y-1/2"
              size={20}
              style={{ color: text }}
            />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by name, skill or language..."
              className={`${selectClass} w-full pl-12`}
              style={{
                background: surface,
                color: text,
                borderColor: border,
                boxShadow: "0 3px 12px rgba(48,59,116,0.04)",
              }}
            />
          </label>

          <label className="relative">
            <span className="sr-only">Filter by experience</span>
            <BriefcaseBusiness
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2"
              size={19}
              style={{ color: text }}
            />
            <select
              value={experience}
              onChange={(event) => setExperience(event.target.value)}
              className={`${selectClass} w-full pl-12`}
              style={{
                background: surface,
                color: text,
                borderColor: border,
                boxShadow: "0 3px 12px rgba(48,59,116,0.04)",
              }}
            >
              <option value="all">Experience</option>
              <option value="5">5+ years</option>
              <option value="10">10+ years</option>
              <option value="15">15+ years</option>
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
              size={18}
              style={{ color: text }}
            />
          </label>

          <label className="relative">
            <span className="sr-only">Filter by language</span>
            <Globe2
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2"
              size={19}
              style={{ color: text }}
            />
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
              className={`${selectClass} w-full pl-12`}
              style={{
                background: surface,
                color: text,
                borderColor: border,
                boxShadow: "0 3px 12px rgba(48,59,116,0.04)",
              }}
            >
              <option value="all">Languages</option>
              {languages.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
              size={18}
              style={{ color: text }}
            />
          </label>
        </div>

        <div className="mb-5">
          <p className="text-xs" style={{ color: muted }} aria-live="polite">
            Showing{" "}
            <strong style={{ color: text }}>
              {filteredAstrologers.length}
            </strong>{" "}
            of <strong style={{ color: text }}>{astrologers.length}</strong>{" "}
            astrologers
          </p>
        </div>

        {filteredAstrologers.length ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {filteredAstrologers.map((astrologer) => (
              <article
                key={astrologer.id}
                className="overflow-hidden rounded-2xl border shadow-[0_4px_14px_rgba(43,55,118,0.08)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(43,55,118,0.14)]"
                style={{ background: surface, borderColor: border }}
              >
                <div
                  className="relative aspect-[1.1] overflow-hidden"
                  style={{
                    background: dark
                      ? "linear-gradient(135deg, #202023, #172c2b)"
                      : "linear-gradient(135deg, #f0e9f8, #e7f5f1)",
                  }}
                >
                  <img
                    src={astrologer.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full scale-110 object-cover opacity-35 blur-xl"
                  />
                  <img
                    src={astrologer.image}
                    alt={astrologer.name}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full scale-110 object-contain"
                    onError={(event) => {
                      event.currentTarget.style.display = "none"
                    }}
                  />
                </div>

                <div className="flex min-h-[250px] flex-col p-4 sm:p-5">
                  <h2
                    className="truncate text-lg font-bold tracking-tight"
                    style={{ color: text }}
                  >
                    {astrologer.name}
                  </h2>
                  <p
                    className="mt-1 truncate text-sm font-medium"
                    style={{ color: muted }}
                  >
                    {astrologer.field}
                  </p>
                  <p
                    className="mt-2 min-h-10 text-sm leading-5"
                    style={{ color: muted }}
                  >
                    {astrologer.tags.slice(0, 2).join(" · ")}
                  </p>

                  <div
                    className="mt-1 space-y-2 border-t pt-3 text-sm"
                    style={{ color: muted, borderColor: border }}
                  >
                    <p className="flex items-center gap-2.5">
                      <Clock3 size={17} strokeWidth={1.8} aria-hidden="true" />
                      {astrologer.experience}+ Years Experience
                    </p>
                    <p className="flex items-center gap-2.5 truncate">
                      <Globe2 size={17} strokeWidth={1.8} aria-hidden="true" />
                      <span className="truncate">
                        {astrologer.languages.join(", ")}
                      </span>
                    </p>
                  </div>

                  <div className="mt-auto grid grid-cols-2 gap-3 pt-5">
                    <button
                      type="button"
                      onClick={() => setSelectedAstrologer(astrologer)}
                      className="rounded-xl border px-2 py-3 text-sm font-semibold transition hover:border-teal-500"
                      style={{
                        background: surface,
                        color: text,
                        borderColor: border,
                      }}
                    >
                      View Profile
                    </button>
                    <span
                      className="flex items-center justify-center rounded-xl px-2 py-3 text-sm font-bold"
                      style={{
                        background: softSurface,

                        color: dark ? "#5eead4" : "#0d5f4f",
                      }}
                    >
                      ₹{astrologer.price}/min
                    </span>
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
            No astrologers match your search. Try changing a filter or search
            term.
          </div>
        )}
      </div>

      {selectedAstrologer && (
        <dialog
          ref={profileDialogRef}
          aria-labelledby="astrologer-profile-title"
          className="fixed inset-0 m-0 flex h-screen max-h-none w-screen max-w-none items-center justify-center border-0 bg-transparent p-3 backdrop:bg-slate-950/65 backdrop:backdrop-blur-sm sm:p-6"
          onCancel={(event) => {
            event.preventDefault()
            setSelectedAstrologer(null)
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget)
              setSelectedAstrologer(null)
          }}
        >
          <section
            className="my-auto grid max-h-[calc(100dvh-1.5rem)] w-full max-w-5xl grid-cols-1 overflow-y-auto rounded-[1.75rem] border shadow-2xl sm:max-h-[calc(100dvh-3rem)] md:grid-cols-[minmax(250px,0.38fr)_minmax(0,0.62fr)]"
            style={{ background: surface, color: text, borderColor: border }}
          >
            <div className="relative hidden min-h-[300px] overflow-hidden bg-slate-100 md:block md:min-h-[490px]">
              <img
                src={selectedAstrologer.image}
                alt={selectedAstrologer.name}
                className="absolute inset-0 h-full w-full object-cover object-top"
                onError={(event) => {
                  event.currentTarget.style.display = "none"
                }}
              />
              <div className="absolute inset-x-4 bottom-4 grid grid-cols-1 rounded-2xl border border-white/70 bg-white/90 px-2 py-3 text-center shadow-lg backdrop-blur-sm sm:inset-x-6 sm:bottom-6 sm:px-3 sm:py-4">
                <div className="px-1">
                  <BriefcaseBusiness
                    className="mx-auto mb-1.5 text-[#17234f]"
                    size={18}
                    aria-hidden="true"
                  />
                  <p className="text-sm font-bold text-[#08715f]">
                    {selectedAstrologer.experience}+
                  </p>
                  <p className="text-[10px] leading-4 text-slate-600 sm:text-xs">
                    Years Experience
                  </p>
                </div>
              </div>
            </div>

            <div className="relative min-w-0 p-5 sm:p-8 md:p-9">
              <button
                type="button"
                onClick={() => setSelectedAstrologer(null)}
                aria-label="Close profile"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border transition hover:bg-slate-100"
                style={{ background: surface, color: text, borderColor: border }}
              >
                <X size={20} aria-hidden="true" />
              </button>

              <p
                className="mb-3 inline-flex rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em]"
                style={{ background: softSurface, color: accent }}
              >
                Astrologer Profile
              </p>
              <h2
                id="astrologer-profile-title"
                className="max-w-[85%] text-3xl font-semibold leading-tight sm:text-4xl"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {selectedAstrologer.name}
              </h2>
              <p className="mt-2 text-sm tracking-wide sm:text-base" style={{ color: muted }}>
                {selectedAstrologer.field}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {selectedAstrologer.tags.slice(0, 5).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-3 py-2 text-xs font-medium"
                    style={{ background: softSurface, color: dark ? "#5eead4" : "#176b5c" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="my-5 border-t" style={{ borderColor: border }} />
              <h3
                className="mb-2 text-lg font-semibold"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                About Me
              </h3>
              <p className="whitespace-pre-line text-sm leading-6" style={{ color: muted }}>
                {selectedAstrologer.description}
              </p>
            </div>

            <footer
              className="grid gap-5 border-t px-5 py-5 sm:grid-cols-[0.8fr_1fr_1.25fr] sm:items-center sm:px-8 md:col-span-2 md:px-10"
              style={{
                background: dark
                  ? "linear-gradient(110deg, rgba(20,50,48,0.9), rgba(20,20,24,0.96))"
                  : "linear-gradient(110deg, #effbf7, #f5f8ff)",
                borderColor: border,
              }}
            >
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: muted }}>
                  Consultation Fee
                </p>
                <p className="mt-1 text-2xl font-bold" style={{ color: dark ? "#5eead4" : "#08715f" }}>
                  ₹{selectedAstrologer.price} <span className="text-base font-semibold">/ min</span>
                </p>
              </div>
              <div className="flex items-center gap-3 sm:border-l sm:pl-5" style={{ borderColor: border }}>
                <Globe2 size={22} aria-hidden="true" style={{ color: accent }} />
                <div className="min-w-0">
                  <p className="text-sm font-semibold">Languages</p>
                  <p className="mt-1 truncate text-xs" style={{ color: muted }}>
                    {selectedAstrologer.languages.join(", ")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:border-l sm:pl-5" style={{ borderColor: border }}>
                <UsersRound size={22} aria-hidden="true" style={{ color: accent }} />
                <div className="min-w-0">
                  <p className="text-sm font-semibold">Specializations</p>
                  <p className="mt-1 text-xs leading-5" style={{ color: muted }}>
                    {selectedAstrologer.tags.slice(0, 3).join(", ")}
                  </p>
                </div>
              </div>
            </footer>
          </section>
        </dialog>
      )}
    </main>
  )
}
