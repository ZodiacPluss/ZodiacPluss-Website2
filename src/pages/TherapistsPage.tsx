import {
  ArrowRight,
  BriefcaseBusiness,
  ChevronDown,
  Clock3,
  Globe2,
  HeartHandshake,
  Search,
  ShieldCheck,
  Sparkles,
  UsersRound,
  X,
} from "lucide-react"
import { useEffect, useMemo, useRef, useState } from "react"

import { therapists, type Expert } from "@/data/experts/therapists"

interface TherapistsPageProps {
  dark?: boolean
  embedded?: boolean
}

const inputClass =
  "h-12 min-w-0 appearance-none rounded-full border px-4 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"

function getExpertInitials(name: string): string {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

export default function TherapistsPage({
  dark = false,
  embedded = false,
}: TherapistsPageProps) {
  const [search, setSearch] = useState("")
  const [specialization, setSpecialization] = useState("All Specializations")
  const [experience, setExperience] = useState("all")
  const [language, setLanguage] = useState("all")
  const [selectedTherapist, setSelectedTherapist] = useState<Expert | null>(
    null,
  )
  const profileDialogRef = useRef<HTMLDialogElement>(null)

  const specializations = useMemo(
    () =>
      [...new Set(therapists.flatMap((therapist) => therapist.specializations))]
        .sort((a, b) => a.localeCompare(b)),
    [],
  )
  const languages = useMemo(
    () =>
      [...new Set(therapists.flatMap((therapist) => therapist.languages))].sort(),
    [],
  )

  const filteredTherapists = useMemo(() => {
    const query = search.trim().toLowerCase()

    return therapists.filter((therapist) => {
      const matchesSearch =
        !query ||
        [
          therapist.name,
          therapist.designation,
          ...therapist.specializations,
          ...therapist.languages,
        ]
          .join(" ")
          .toLowerCase()
          .includes(query)
      const matchesSpecialization =
        specialization === "All Specializations" ||
        therapist.specializations.includes(specialization)
      const matchesExperience =
        experience === "all" ||
        therapist.experienceYears >= Number(experience)
      const matchesLanguage =
        language === "all" || therapist.languages.includes(language)

      return (
        matchesSearch &&
        matchesSpecialization &&
        matchesExperience &&
        matchesLanguage
      )
    })
  }, [experience, language, search, specialization])

  useEffect(() => {
    const dialog = profileDialogRef.current
    if (!dialog || !selectedTherapist || dialog.open) return

    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = "hidden"

    return () => {
      if (dialog.open) dialog.close()
      document.body.style.overflow = previousOverflow
    }
  }, [selectedTherapist])

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
          ? "#09090b"
          : "radial-gradient(ellipse at 8% 28%, rgba(211,255,237,0.7), transparent 34%), radial-gradient(ellipse at 92% 12%, rgba(221,229,255,0.85), transparent 40%), #f8f8ff",
        color: text,
      }}
    >
      {!embedded && (
        <section
          className="relative isolate overflow-hidden px-5 pb-10 pt-24 sm:px-8 sm:pb-12 sm:pt-28 md:min-h-[580px] md:pb-14 md:pt-32"
          style={{
            backgroundImage: dark
              ? "linear-gradient(90deg, rgba(9,12,18,0.9) 0%, rgba(9,12,18,0.74) 45%, rgba(9,12,18,0.12) 100%), url('https://res.cloudinary.com/h4x5ehyi/image/upload/v1791654886/Sunlit_Minimalist_Reading_Nook_1.png')"
              : "linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.2) 45%, rgba(255,255,255,0) 72%), url('https://res.cloudinary.com/h4x5ehyi/image/upload/v1791654886/Sunlit_Minimalist_Reading_Nook_1.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-[1680px] items-center md:min-h-[430px]">
          <div className="max-w-4xl py-6">
            <p
              className="mb-4 text-xs font-bold uppercase tracking-[0.24em] sm:text-sm"
              style={{ color: dark ? accent : "#08715f" }}
            >
              Our wellness experts
            </p>
            <h1
              className="mb-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl"
              style={{
                color: text,
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              Find Support That
              <br className="hidden sm:block" /> Feels Right for You
            </h1>
            <p
              className="max-w-3xl text-base leading-7 sm:text-xl sm:leading-9"
              style={{ color: muted }}
            >
              Connect with counsellors and therapists for thoughtful,
              confidential support tailored to your needs.
            </p>
            <a
              href="#therapist-directory"
              className="mt-6 inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
              style={{
                background: "linear-gradient(100deg, #28b8c8, #26a34a)",
              }}
            >
              Explore Experts <ArrowRight size={18} aria-hidden="true" />
            </a>

            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4 sm:mt-10">
              {[
                {
                  icon: ShieldCheck,
                  title: "Supportive",
                  subtitle: "Expert guidance",
                  tint: "#d8f8ed",
                  color: "#0ca99c",
                },
                {
                  icon: HeartHandshake,
                  title: "Confidential",
                  subtitle: "Your privacy matters",
                  tint: "#eee8ff",
                  color: "#8b5cf6",
                },
                {
                  icon: Sparkles,
                  title: "Personalized",
                  subtitle: "Care for your needs",
                  tint: "#fff4d9",
                  color: "#d49a20",
                },
              ].map(({ icon: Icon, title, subtitle, tint, color }) => (
                <div key={title} className="flex items-center gap-3">
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-full"
                    style={{ background: tint, color }}
                  >
                    <Icon size={27} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="text-sm leading-5 sm:text-base">
                    <span className="block font-semibold">{title}</span>
                    <span style={{ color: muted }}>{subtitle}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        </section>
      )}

      <section
        id="therapist-directory"
        className="mx-auto max-w-[1680px] px-4 py-7 sm:px-8 md:py-9"
      >
        <div className="astrologer-category-scroll mb-6 flex gap-2.5 overflow-x-auto pb-2">
          <button
            type="button"
            onClick={() => setSpecialization("All Specializations")}
            aria-pressed={specialization === "All Specializations"}
            className="shrink-0 rounded-full border px-6 py-3 text-sm font-semibold transition"
            style={{
              background:
                specialization === "All Specializations"
                  ? "linear-gradient(100deg, #28b8c8, #26a34a)"
                  : surface,
              color:
                specialization === "All Specializations" ? "#fff" : text,
              borderColor:
                specialization === "All Specializations"
                  ? "transparent"
                  : border,
            }}
          >
            All Experts
          </button>
          {specializations.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setSpecialization(item)}
              aria-pressed={specialization === item}
              className="shrink-0 rounded-full border px-4 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
              style={{
                background: specialization === item ? softSurface : surface,
                color: specialization === item ? accent : text,
                borderColor: specialization === item ? accent : border,
              }}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mb-6 grid gap-3 sm:grid-cols-[minmax(0,1fr)_220px_260px]">
          <label className="relative">
            <span className="sr-only">Search therapists</span>
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
              placeholder="Search by name, specialty or language..."
              className={`${inputClass} w-full pl-12`}
              style={{ background: surface, color: text, borderColor: border }}
            />
          </label>

          <label className="relative">
            <span className="sr-only">Filter by experience</span>
            <select
              value={experience}
              onChange={(event) => setExperience(event.target.value)}
              className={`${inputClass} w-full cursor-pointer pr-11`}
              style={{ background: surface, color: text, borderColor: border }}
            >
              <option value="all">Experience</option>
              <option value="3">3+ years</option>
              <option value="5">5+ years</option>
              <option value="8">8+ years</option>
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
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
              className={`${inputClass} w-full cursor-pointer pr-11`}
              style={{ background: surface, color: text, borderColor: border }}
            >
              <option value="all">All languages</option>
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

        <p className="mb-5 text-xs" style={{ color: muted }} aria-live="polite">
          Showing{" "}
          <strong style={{ color: text }}>{filteredTherapists.length}</strong> of{" "}
          <strong style={{ color: text }}>{therapists.length}</strong> experts
        </p>

        {filteredTherapists.length ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {filteredTherapists.map((therapist) => (
              <article
                key={therapist.id}
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
                  {therapist.image ? (
                    <>
                      <img
                        src={therapist.image}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full scale-110 object-cover opacity-35 blur-xl"
                      />
                      <img
                        src={therapist.image}
                        alt={therapist.name}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover object-top"
                        onError={(event) => {
                          event.currentTarget.style.display = "none"
                        }}
                      />
                    </>
                  ) : (
                    <div
                      role="img"
                      aria-label={`${therapist.name} profile image unavailable`}
                      className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-100 via-sky-50 to-emerald-100"
                    >
                      <span className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white/80 bg-white/70 text-3xl font-semibold text-indigo-700 shadow-lg">
                        {getExpertInitials(therapist.name)}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex min-h-[250px] flex-col p-4 sm:p-5">
                  <h2 className="truncate text-lg font-bold tracking-tight">
                    {therapist.name}
                  </h2>
                  <p
                    className="mt-1 truncate text-sm font-medium"
                    style={{ color: muted }}
                  >
                    {therapist.designation}
                  </p>
                  <p
                    className="mt-2 min-h-10 text-sm leading-5"
                    style={{ color: muted }}
                  >
                    {therapist.specializations.slice(0, 2).join(" · ")}
                  </p>

                  <div
                    className="mt-1 space-y-2 border-t pt-3 text-sm"
                    style={{ color: muted, borderColor: border }}
                  >
                    <p className="flex items-center gap-2.5">
                      <Clock3 size={17} strokeWidth={1.8} aria-hidden="true" />
                      {therapist.experience} Experience
                    </p>
                    <p className="flex items-center gap-2.5 truncate">
                      <Globe2 size={17} strokeWidth={1.8} aria-hidden="true" />
                      <span className="truncate">
                        {therapist.languages.join(", ")}
                      </span>
                    </p>
                  </div>

                  <div className="mt-auto grid grid-cols-2 gap-3 pt-5">
                    <button
                      type="button"
                      onClick={() => setSelectedTherapist(therapist)}
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
                      ₹{therapist.price}/session
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
            No therapists match your search. Try changing a filter or search
            term.
          </div>
        )}
      </section>

      {selectedTherapist && (
        <dialog
          ref={profileDialogRef}
          aria-labelledby="therapist-profile-title"
          className="fixed inset-0 m-0 flex h-screen max-h-none w-screen max-w-none items-center justify-center border-0 bg-transparent p-3 backdrop:bg-slate-950/65 backdrop:backdrop-blur-sm sm:p-6"
          onCancel={(event) => {
            event.preventDefault()
            setSelectedTherapist(null)
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget)
              setSelectedTherapist(null)
          }}
        >
          <section
            className="my-auto grid max-h-[calc(100dvh-1.5rem)] w-full max-w-5xl grid-cols-1 overflow-y-auto rounded-[1.75rem] border shadow-2xl sm:max-h-[calc(100dvh-3rem)] md:grid-cols-[minmax(250px,0.38fr)_minmax(0,0.62fr)]"
            style={{ background: surface, color: text, borderColor: border }}
          >
            <div className="relative hidden min-h-[300px] overflow-hidden bg-slate-100 md:block md:min-h-[490px]">
              {selectedTherapist.image ? (
                <img
                  src={selectedTherapist.image}
                  alt={selectedTherapist.name}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                  onError={(event) => {
                    event.currentTarget.style.display = "none"
                  }}
                />
              ) : (
                <div
                  role="img"
                  aria-label={`${selectedTherapist.name} profile image unavailable`}
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-100 via-sky-50 to-emerald-100"
                >
                  <span className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white/80 bg-white/70 text-4xl font-semibold text-indigo-700 shadow-lg">
                    {getExpertInitials(selectedTherapist.name)}
                  </span>
                </div>
              )}
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/70 bg-white/90 px-3 py-4 text-center shadow-lg backdrop-blur-sm sm:inset-x-6 sm:bottom-6">
                <BriefcaseBusiness
                  className="mx-auto mb-1.5 text-[#17234f]"
                  size={18}
                  aria-hidden="true"
                />
                <p className="text-sm font-bold text-[#08715f]">
                  {selectedTherapist.experience}
                </p>
                <p className="text-[10px] leading-4 text-slate-600 sm:text-xs">
                  Experience
                </p>
              </div>
            </div>

            <div className="relative min-w-0 p-5 sm:p-8 md:p-9">
              <button
                type="button"
                onClick={() => setSelectedTherapist(null)}
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
                Therapist Profile
              </p>
              <h2
                id="therapist-profile-title"
                className="max-w-[85%] text-3xl font-semibold leading-tight sm:text-4xl"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {selectedTherapist.name}
              </h2>
              <p className="mt-2 text-sm tracking-wide sm:text-base" style={{ color: muted }}>
                {selectedTherapist.designation}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {selectedTherapist.specializations.slice(0, 5).map((item) => (
                  <span
                    key={item}
                    className="rounded-full px-3 py-2 text-xs font-medium"
                    style={{
                      background: softSurface,
                      color: dark ? "#5eead4" : "#176b5c",
                    }}
                  >
                    {item}
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
              <p className="text-sm leading-6" style={{ color: muted }}>
                {selectedTherapist.description}
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
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.16em]"
                  style={{ color: muted }}
                >
                  Session Fee
                </p>
                <p
                  className="mt-1 text-2xl font-bold"
                  style={{ color: dark ? "#5eead4" : "#08715f" }}
                >
                  ₹{selectedTherapist.price}{" "}
                  <span className="text-base font-semibold">/ session</span>
                </p>
              </div>
              <div
                className="flex items-center gap-3 sm:border-l sm:pl-5"
                style={{ borderColor: border }}
              >
                <Globe2 size={22} aria-hidden="true" style={{ color: accent }} />
                <div className="min-w-0">
                  <p className="text-sm font-semibold">Languages</p>
                  <p className="mt-1 truncate text-xs" style={{ color: muted }}>
                    {selectedTherapist.languages.join(", ")}
                  </p>
                </div>
              </div>
              <div
                className="flex items-center gap-3 sm:border-l sm:pl-5"
                style={{ borderColor: border }}
              >
                <UsersRound
                  size={22}
                  aria-hidden="true"
                  style={{ color: accent }}
                />
                <div className="min-w-0">
                  <p className="text-sm font-semibold">Specializations</p>
                  <p className="mt-1 text-xs leading-5" style={{ color: muted }}>
                    {selectedTherapist.specializations.slice(0, 3).join(", ")}
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
