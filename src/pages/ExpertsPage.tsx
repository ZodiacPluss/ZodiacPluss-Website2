import {
  ArrowRight,
  Flower2,
  HeartHandshake,
  Orbit,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react"
import { useState } from "react"

import Astrolist from "@/pages/astrolist"
import TherapistsPage from "@/pages/TherapistsPage"

interface ExpertsPageProps {
  onNavigate: (page: string) => void
  dark?: boolean
}

type ExpertGroup = "astrologers" | "wellness"

export default function ExpertsPage({
  onNavigate,
  dark = false,
}: ExpertsPageProps) {
  const [activeGroup, setActiveGroup] = useState<ExpertGroup>("wellness")
  const titleColor = dark ? "#f5f5f5" : "#17234f"
  const mutedColor = dark ? "#a1a1aa" : "#657394"

  return (
    <div
      className="min-h-screen pb-16"
      style={{
        background: dark
          ? "#09090b"
          : "linear-gradient(180deg, #f7faff 0%, #ffffff 54%, #f7fbff 100%)",
      }}
    >
      <header
        className="relative isolate overflow-hidden border-b"
        style={{
          borderColor: dark ? "rgba(255,255,255,0.08)" : "#e7ebf5",
          background: dark
            ? "radial-gradient(ellipse at 76% 30%, rgba(83,76,181,0.24), transparent 38%), linear-gradient(110deg, #101522, #111526 60%, #17172b)"
            : "radial-gradient(ellipse at 78% 35%, rgba(224,228,255,0.8), transparent 34%), linear-gradient(110deg, #f7fbff 0%, #f7f8ff 58%, #f2f7ff 100%)",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute -right-20 top-4 h-[25rem] w-[25rem] rounded-full border sm:right-12 sm:top-0 sm:h-[33rem] sm:w-[33rem]"
          style={{
            borderColor: dark
              ? "rgba(144,134,255,0.12)"
              : "rgba(111,126,231,0.1)",
            background: dark
              ? "rgba(112,101,207,0.06)"
              : "rgba(221,227,255,0.2)",
          }}
        />
        <div className="relative mx-auto flex min-h-[490px] max-w-7xl items-center px-5 pb-14 pt-28 sm:px-8 md:min-h-[540px] md:pb-16">
          <img
            src="/experts-hero-portrait.png"
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            className="pointer-events-none absolute -bottom-4 right-[-17%] h-[58%] w-[78%] object-contain object-bottom opacity-25 sm:right-[-8%] sm:h-[68%] sm:w-[64%] sm:opacity-55 md:bottom-0 md:right-0 md:h-[96%] md:w-[52%] md:opacity-100"
          />
          <div className="relative z-10 max-w-2xl">
            <p
              className="mb-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.13em]"
              style={{
                background: dark
                  ? "rgba(93,105,255,0.16)"
                  : "rgba(78,109,241,0.09)",
                color: dark ? "#b8c4ff" : "#3459cf",
              }}
            >
              <Sparkles size={14} aria-hidden="true" />
              Expert consultations
            </p>
            <h1
              className="max-w-xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl"
              style={{
                color: titleColor,
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              Find Clarity.
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 bg-clip-text text-transparent">
                Feel More You.
              </span>
            </h1>
            <p
              className="mt-6 max-w-lg text-base leading-7 sm:text-lg"
              style={{ color: mutedColor }}
            >
              Connect with astrologers and wellness experts for guidance,
              support and a more balanced, fulfilling life — all in one place.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-4">
              {[
                { icon: ShieldCheck, label: "Thoughtful guidance" },
                { icon: HeartHandshake, label: "Private sessions" },
                { icon: UsersRound, label: "Personalized support" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 text-sm font-medium"
                  style={{ color: titleColor }}
                >
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-xl"
                    style={{
                      color: dark ? "#aab7ff" : "#4c5dea",
                      background: dark
                        ? "rgba(95,104,223,0.17)"
                        : "rgba(92,111,238,0.1)",
                    }}
                  >
                    <Icon size={19} aria-hidden="true" />
                  </span>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <nav
        aria-label="Choose expert type"
        role="tablist"
        className="relative z-10 mx-auto -mt-8 grid max-w-5xl grid-cols-1 gap-2 rounded-[2rem] border p-2 shadow-[0_12px_38px_rgba(52,77,150,0.1)] sm:grid-cols-2 sm:gap-3 sm:p-3"
        style={{
          background: dark ? "rgba(20,20,28,0.96)" : "rgba(255,255,255,0.96)",
          borderColor: dark ? "rgba(255,255,255,0.12)" : "#e4e9f5",
          backdropFilter: "blur(16px)",
        }}
      >
        {[
          {
            id: "astrologers" as const,
            title: "Astrologers",
            subtitle: "Cosmic insights for life's journey",
            icon: Orbit,
          },
          {
            id: "wellness" as const,
            title: "Wellness Experts",
            subtitle: "Psychologists, therapists & counsellors",
            icon: Flower2,
          },
        ].map(({ id, title, subtitle, icon: Icon }) => {
          const isActive = activeGroup === id

          return (
            <button
              key={id}
              id={`expert-tab-${id}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="expert-directory-panel"
              onClick={() => setActiveGroup(id)}
              onKeyDown={(event) => {
                if (event.key !== "ArrowLeft" && event.key !== "ArrowRight")
                  return

                event.preventDefault()
                const nextGroup =
                  activeGroup === "astrologers" ? "wellness" : "astrologers"
                setActiveGroup(nextGroup)
                document.getElementById(`expert-tab-${nextGroup}`)?.focus()
              }}
              className="group flex min-h-[88px] items-center gap-4 rounded-[1.5rem] border px-4 py-4 text-left transition duration-200 hover:-translate-y-0.5 sm:px-6"
              style={{
                background: isActive
                  ? dark
                    ? "linear-gradient(110deg, rgba(38,53,91,0.85), rgba(28,57,64,0.8))"
                    : "linear-gradient(110deg, #f1f4ff, #effbf8)"
                  : "transparent",
                borderColor: isActive
                  ? dark
                    ? "rgba(89,207,187,0.6)"
                    : "#78d3bc"
                  : "transparent",
                color: titleColor,
              }}
            >
              <span
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
                style={{
                  color: id === "astrologers" ? "#4e5ce7" : "#079b82",
                  background:
                    id === "astrologers"
                      ? dark
                        ? "rgba(99,102,241,0.18)"
                        : "#eef0ff"
                      : dark
                        ? "rgba(16,185,129,0.16)"
                        : "#e6f8f2",
                }}
              >
                <Icon size={27} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-base font-semibold sm:text-lg">
                  {title}
                </span>
                <span
                  className="mt-1 block text-xs sm:text-sm"
                  style={{ color: mutedColor }}
                >
                  {subtitle}
                </span>
              </span>
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition group-hover:translate-x-0.5"
                style={{
                  background: isActive
                    ? "linear-gradient(100deg, #2877f0, #22b589)"
                    : dark
                      ? "rgba(255,255,255,0.08)"
                      : "#f2f4fa",
                  color: isActive ? "#ffffff" : mutedColor,
                }}
              >
                <ArrowRight size={17} aria-hidden="true" />
              </span>
            </button>
          )
        })}
      </nav>

      <section
        id="expert-directory-panel"
        role="tabpanel"
        aria-labelledby={`expert-tab-${activeGroup}`}
        className="pt-2"
      >
        {activeGroup === "astrologers" ? (
          <Astrolist onNavigate={onNavigate} dark={dark} embedded />
        ) : (
          <TherapistsPage dark={dark} embedded />
        )}
      </section>
    </div>
  )
}
