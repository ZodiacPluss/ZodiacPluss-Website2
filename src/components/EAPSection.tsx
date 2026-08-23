/* ─────────────────────────────────────────────────────────────────
   EAPSection
   Employee Assistance Program (EAP) Solutions — corporate wellness
   pitch condensed into one home-page section: intro & credibility,
   why EAP matfters, solution pillars, pricing, CAP/SAP add-ons, CTA.
   ───────────────────────────────────────────────────────────────── */

const GRADIENT = 'linear-gradient(90deg, #5eb8e8 0%, #8fd06a 100%)'

const LOGO_URL =
  'https://res.cloudinary.com/pp0lpskp/image/upload/v1786032742/Zodiac_Colored_Logo_croped-removebg-preview_appzet.png'

const credibilityStats = [
  { value: '10+', label: 'Special Features & insights ' },
  { value: '20+', label: 'Licensed Professionals' },
  { value: '24×7', label: 'Crisis Support' },
  { value: '10+', label: 'Zodiac official Members' },
]

const whyMatters = [
  {
    title: 'Employee Wellbeing',
    desc: 'Proactive mental health support reduces stress, anxiety, and burnout before they escalate.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: 'Higher Productivity',
    desc: 'Teams with accessible wellness support report meaningfully greater focus and output.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: 'Stronger Retention',
    desc: 'Organizations that invest in employee wellbeing keep their best people significantly longer.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
]

const solutionPillars = [
  {
    tag: 'Overview',
    title: 'Complete Care, One Partner',
    desc: "From proactive wellness workshops to crisis intervention, ZodiacPluss is a single accountable partner for your organization's complete mental wellness needs.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2C8 6 4 8 4 13c0 3 2 5 5 5h6c3 0 5-2 5-5 0-5-4-7-8-11z" />
        <path d="M12 22V12" /><path d="M8 14c0-2 2-4 4-4s4 2 4 4" />
      </svg>
    ),
  },
  {
    tag: 'Team & Availability',
    title: 'Licensed Experts, Always On',
    desc: 'Credentialed, background-verified psychologists, counselors, and therapists — available around the clock, every day of the year.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="4" /><path d="M4 20c0-3.87 3.58-7 8-7s8 3.13 8 7" />
        <path d="M12 12v0" />
      </svg>
    ),
  },
  {
    tag: 'Service Modes',
    title: 'Support On Your Terms',
    desc: 'Scheduled 1-on-1 sessions plus emergency crisis chat — delivered by call, video, live chat, or in-person, whichever fits best.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
]

const otherOfferings = [
  {
    abbr: 'CAP',
    title: 'Child Assistance Program',
    desc: 'A complementary, short-term solution-focused support track for personal and workplace challenges — ideal as a lighter-touch wellness benefit or a bridge into full EAP care.',
    color: '#5eb8e8',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M18 8A6 6 0 1 0 6 8c0 7 6 13 6 13s6-6 6-13z" /><circle cx="12" cy="8" r="2" />
      </svg>
    ),
  },
  {
    abbr: 'SAP',
    title: 'Student Assistance Program',
    desc: 'A structured, compliance-aligned evaluation, education, and referral track for students navigating  concerns, delivered by certified SAP-qualified clinicians.',
    color: '#8fd06a',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M18 8A6 6 0 1 0 6 8c0 7 6 13 6 13s6-6 6-13z" /><circle cx="12" cy="8" r="2" />
      </svg>
    ),
  },
]

interface EAPSectionProps {
  onNavigate?: (page: string) => void
  dark?: boolean
}

export default function EAPSection({ onNavigate, dark = false }: EAPSectionProps) {
  const bg = dark ? '#000000' : '#ffffff'
  const altBg = dark ? '#0a0a0b' : '#f8f6ff'
  const cardBg = dark ? '#141416' : '#ffffff'
  const cardBorder = dark ? 'rgba(255,255,255,0.1)' : '#e8e3f8'
  const headingColor = dark ? '#f5f5f5' : '#1a1a2e'
  const bodyColor = dark ? '#a1a1aa' : '#64748b'

  return (
    <section style={{ background: bg, transition: 'background 0.4s ease' }}>
      {/* ── Title + credibility ─────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-14">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6">
            <img
              src={LOGO_URL}
              alt="ZodiacPluss"
              className="w-20 h-14 sm:w-20 sm:h-20 object-contain filter drop-shadow-md transition-transform duration-300 hover:scale-105"
            />
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] mb-4"
            style={{ color: headingColor, fontFamily: "'Playfair Display', serif" }}
          >
            Corporate Wellness & Employee Assistance Program{' '}
            <span
              style={{
                background: GRADIENT,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              (EAP) Solutions
            </span>
          </h2>

          <p className="text-[15px] sm:text-base leading-relaxed" style={{ color: bodyColor }}>
            ZodiacPluss brings certified mental-health professionals, always-on crisis support, and structured
            wellness programs to your workplace — built for
            supporting organizations across India.
          </p>
        </div>

        {/* Credibility stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {credibilityStats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl text-center py-6 px-3"
              style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
            >
              <div className="text-2xl sm:text-3xl font-extrabold mb-1" style={{ color: headingColor, fontFamily: "'Playfair Display', serif" }}>
                {s.value}
              </div>
              <div className="text-[11px] sm:text-xs font-medium" style={{ color: bodyColor }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Why EAP Matters ─────────────────────────────────────── */}
      <div style={{ background: altBg, transition: 'background 0.4s ease' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase mb-3" style={{ color: '#16abd8ff' }}>
              Why ZodiacPluss EAP Matters ?
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold" style={{ color: headingColor, fontFamily: "'Playfair Display', serif" }}>
              Wellbeing Is the Foundation of Performance
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 items-stretch relative">
            {whyMatters.map((w, i) => (
              <div key={w.title} className="relative flex flex-col items-center text-center px-4">
                {i < whyMatters.length - 1 && (
                  <div
                    className="hidden sm:block absolute top-8 left-1/2 w-full h-[1.5px]"
                    style={{ background: dark ? 'rgba(255,255,255,0.12)' : 'rgba(20,184,166,0.25)' }}
                  />
                )}
                <div
                  className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ background: cardBg, border: `1.5px solid rgba(20,184,166,0.4)`, color: '#14b8a6' }}
                >
                  {w.icon}
                </div>
                <h4 className="text-base font-bold mb-2" style={{ color: headingColor }}>
                  {w.title}
                </h4>
                <p className="text-sm leading-relaxed max-w-[240px]" style={{ color: bodyColor }}>
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Our EAP Solution ────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-[11px] font-bold tracking-[0.18em] uppercase mb-3" style={{ color: '#14b8a6' }}>
            Our EAP Solution
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold" style={{ color: headingColor, fontFamily: "'Playfair Display', serif" }}>
            A Complete Corporate Wellness Framework
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutionPillars.map((p) => (
            <div
              key={p.tag}
              className="rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: dark ? 'rgba(20,184,166,0.12)' : '#f0fdfa', color: '#0d9488' }}
              >
                {p.icon}
              </div>
              <span className="text-[10px] font-bold tracking-[0.14em] uppercase" style={{ color: '#14b8a6' }}>
                {p.tag}
              </span>
              <h4 className="text-lg font-bold mt-2 mb-2.5" style={{ color: headingColor }}>
                {p.title}
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: bodyColor }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Other Offerings: CAP & SAP ──────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-[11px] font-bold tracking-[0.18em] uppercase mb-3" style={{ color: '#14b8a6' }}>
            Other Offerings
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold" style={{ color: headingColor, fontFamily: "'Playfair Display', serif" }}>
            Beyond Core EAP: CAP &amp; SAP Programs
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {otherOfferings.map((o) => (
            <div
              key={o.abbr}
              className="rounded-2xl p-6 sm:p-7 flex gap-5"
              style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${o.color}22`, color: o.color }}
              >
                {o.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span
                    className="text-[10px] font-extrabold tracking-wider px-2 py-0.5 rounded-md"
                    style={{ background: `${o.color}22`, color: dark ? o.color : '#1e0d40' }}
                  >
                    {o.abbr}
                  </span>
                </div>
                <h4 className="text-base font-bold mb-2" style={{ color: headingColor }}>
                  {o.title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: bodyColor }}>
                  {o.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <div
          className="mt-14 rounded-3xl p-8 md:p-10 text-center text-white shadow-lg"
          style={{ background: 'linear-gradient(135deg, #42a1e0ff 0%, #b6a338ff 50%, #49b2fcff 100%)' }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Bring EAP to Your Workplace?
          </h3>
          <p className="text-white/75 mb-6 max-w-md mx-auto text-sm">
            Talk to our corporate wellness team and get a tailored EAP proposal for your organization.
          </p>
          <button
            onClick={() => onNavigate?.('Book')}
            className="inline-flex items-center gap-2 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border-0"
            style={{ background: GRADIENT, boxShadow: '0 8px 24px rgba(94, 184, 232, 0.35)' }}
          >
            Request a Corporate Demo
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
