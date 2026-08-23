/* ─────────────────────────────────────────────────────────────────
   HomeAboutTeamSection
   About Us hero, core values, team grid, and stats banner
   ───────────────────────────────────────────────────────────────── */
import MagneticButton from '@/components/MagneticButton'

const GRADIENT = 'linear-gradient(90deg, #5eb8e8 0%, #8fd06a 100%)'
const GRADIENT_TEXT: React.CSSProperties = {
  background: GRADIENT,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

const FOUNDER_IMG =
  'https://res.cloudinary.com/pp0lpskp/image/upload/v1786341586/Rashmi2.1_hdl5is.png'

const values = [
  {
    title: 'People First',
    desc: 'Every decision we make starts with the people we serve — your well-being is our north star.',
    iconBg: '#e3f2fd',
    iconColor: '#4dabf7',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-3.87 3.58-7 8-7s8 3.13 8 7" />
      </svg>
    ),
  },
  {
    title: 'Timeless Wisdom',
    desc: 'We honour ancient astrological traditions while embracing evidence-based insights for today.',
    iconBg: '#e0f7f4',
    iconColor: '#14b8a6',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2L13.5 8.5L20 7L15.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L8.5 12L4 7L10.5 8.5L12 2Z" />
      </svg>
    ),
  },
  {
    title: 'Trust & Integrity',
    desc: 'Your privacy is sacred. Every session is confidential, every expert is verified.',
    iconBg: '#edf7e8',
    iconColor: '#6fbf3a',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22V12M12 12C12 12 8 8 5 8c-1.5 0-3 .5-3 2s1.5 2 3 2c2 0 4-2 7-4M12 12c0 0 4-4 7-4 1.5 0 3 .5 3 2s-1.5 2-3 2c-3 0-5-2-7-4" />
        <path d="M12 12V8c0-2 1-4 3-4s3 2 3 4" />
      </svg>
    ),
  },
  {
    title: 'Growth Together',
    desc: 'We grow as a community — learning, healing, and evolving alongside every seeker we guide.',
    iconBg: '#f0fce4',
    iconColor: '#82c91e',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
]

const featuredTeam = [
  {
    name: 'Mrs. Rashmi',
    role: 'FOUNDER & CEO',
    img: 'https://res.cloudinary.com/pp0lpskp/image/upload/v1786016136/Rasmi-1_prowmf.jpg',
  },
  {
    name: 'Mrs. Sheela',
    role: 'DIRECTOR',
    img: 'https://res.cloudinary.com/pp0lpskp/image/upload/v1786011250/sheela_ji_j2mckm.png',
  },
]

const teamMembers = [
  {
    name: 'Ms. Shweta ',
    role: 'SENIOR TECHNICAL CONSULTANT',
    img: 'https://res.cloudinary.com/pp0lpskp/image/upload/v1786011226/Shweta_x67krv.jpg',
  },
  {
    name: 'Mrs. Shivani',
    role: 'MENTAL WELLNESS EXPERT',
    img: 'https://res.cloudinary.com/pp0lpskp/image/upload/t_hello/Shivani_lcte5s.jpg',
  },
  {
    name: 'Mr. Hari',
    role: 'SOCIAL MEDIA HEAD CONSULTANT',
    img: 'https://res.cloudinary.com/pp0lpskp/image/upload/c_crop,g_north_west,h_970,w_823,x_254,y_280/Hari_lmdiby.jpg',
  },
  {
    name: 'Mr. Aditya',
    role: 'SDE & PROJECT MANAGER',
    img: 'https://res.cloudinary.com/pp0lpskp/image/upload/v1786342210/my_profile_new_and_updated_unxfyt.png',
  },
  {
    name: 'Mr. Sunil ',
    role: 'ADVOCATE & LEGAL CONSULTANT',
    img: 'https://res.cloudinary.com/pp0lpskp/image/upload/v1786011233/Sunil_ji_ltxjqb.png',
  },
  {
    name: 'Mr. Shubham',
    role: 'FINANCIAL ADVISER',
    img: 'https://res.cloudinary.com/pp0lpskp/image/upload/v1787229071/blank_avatar_1_ncgygy.jpg',
  },
  {
    name: 'Ms. Akriti',
    role: 'SOCIAL MEDIA MANAGER',
    img: 'https://res.cloudinary.com/pp0lpskp/image/upload/v1787229066/female_unknown_aavqnv.png',
  },
  {
    name: 'SOON ADDING MORE FACES',
    role: 'IN OUR ZODIAC PLUSS FAMILY',
    img: 'https://res.cloudinary.com/pp0lpskp/image/upload/v1787234490/ADD_NEW_ay2pb6.png',
  },
]

const stats = [
  {
    value: '10+',
    label: 'Team Members',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    value: 'Soon',
    label: 'Create Live Touch',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="1.8">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    value: '20+',
    label: 'Experts Onboard',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="1.8">
        <path d="M12 2L13.5 8.5L20 7L15.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L8.5 12L4 7L10.5 8.5L12 2Z" />
      </svg>
    ),
  },
  {
    value: '24/7',
    label: 'Support & Care',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
]

function DecorStars() {
  const stars = [
    { top: '8%', left: '4%', size: 14, color: '#b8e0f5', rotate: 15 },
    { top: '15%', left: '92%', size: 18, color: '#c8e6a0', rotate: -10 },
    { top: '45%', left: '2%', size: 12, color: '#a8dcc8', rotate: 25 },
    { top: '70%', left: '95%', size: 16, color: '#b8e0f5', rotate: -20 },
    { top: '85%', left: '8%', size: 14, color: '#c8e6a0', rotate: 10 },
    { top: '30%', left: '88%', size: 10, color: '#a8dcc8', rotate: 35 },
  ]
  return (
    <>
      {stars.map((s, i) => (
        <svg
          key={i}
          className="absolute pointer-events-none select-none"
          style={{ top: s.top, left: s.left, width: s.size, height: s.size, transform: `rotate(${s.rotate}deg)`, opacity: 0.6 }}
          viewBox="0 0 24 24"
          fill={s.color}
        >
          <path d="M12 2L13.5 8.5L20 7L15.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L8.5 12L4 7L10.5 8.5L12 2Z" />
        </svg>
      ))}
    </>
  )
}

function LinkedInIcon() {
  return (
    <a
      href="https://linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-[#e2e8f0] hover:border-[#0a66c2] hover:bg-[#0a66c2]/5 transition-all duration-200"
      aria-label="LinkedIn profile"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="#0a66c2">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
      </svg>
    </a>
  )
}

interface HomeAboutTeamSectionProps {
  onNavigate?: (page: string) => void
  dark?: boolean
}

export default function HomeAboutTeamSection({ onNavigate, dark }: HomeAboutTeamSectionProps) {
  const bg = dark ? '#000000' : '#ffffff'
  const headingColor = dark ? '#f5f5f5' : '#1a1a2e'
  const bodyColor = dark ? '#a1a1aa' : '#64748b'
  const cardBg = dark ? '#141416' : '#ffffff'
  const founderCardBg = dark ? '#141416' : '#ffffff'

  return (
    <section
      className="home-about-team relative overflow-hidden transition-colors duration-300"
      style={{ background: bg }}
    >
      {/* Leaf watermark */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          top: '5%',
          right: '-5%',
          width: 'clamp(280px, 40vw, 520px)',
          height: 'clamp(280px, 40vw, 520px)',
          opacity: dark ? 0.04 : 0.06,
          background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpath fill='%238fd06a' d='M100 10C60 40 20 80 30 130C40 170 80 190 100 190C120 190 160 170 170 130C180 80 140 40 100 10Z'/%3E%3Cpath fill='none' stroke='%235eb8e8' stroke-width='2' d='M100 30v140M100 50c-20 30-40 50-40 80M100 70c20 25 40 45 40 70'/%3E%3C/svg%3E") center/contain no-repeat`,
        }}
      />
      <DecorStars />

      {/* ── About Us Hero ─────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16">
        <div className="grid gap-10 lg:gap-14 items-center lg:grid-cols-2">
          {/* Left column */}
          <div>
            <span
              className="inline-block text-[11px] font-semibold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full mb-6"
              style={{
                color: '#6fbf3a',
                background: dark ? 'rgba(111,191,58,0.12)' : 'rgba(143,208,106,0.15)',
                border: '1px solid rgba(143,208,106,0.3)',
              }}
            >
              ABOUT US
            </span>

            <h2
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] mb-6"
              style={{ color: headingColor, fontFamily: "'Inter', sans-serif" }}
            >
              Guided by Wisdom, Driven by{' '}
              <span style={GRADIENT_TEXT}>Purpose.</span>
            </h2>

            <p className="text-[15px] sm:text-base leading-relaxed mb-4" style={{ color: bodyColor }}>
              At ZodiacPluss, we believe everyone deserves meaningful guidance that blends ancient
              astrological wisdom with modern technology and well-being. Our platform brings certified
              astrologers, licensed therapists, and AI-powered insights together in one seamless space.
            </p>
            <p className="text-[15px] sm:text-base leading-relaxed mb-8" style={{ color: bodyColor }}>
              We are on a mission to make astrology and mental wellness accessible, authentic, and
              transformative — helping millions find clarity, healing, and purpose in their daily lives.
            </p>

            <button
              onClick={() => onNavigate?.('About Us')}
              className="inline-flex items-center gap-2.5 text-white text-sm font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer border-0"
              style={{ background: GRADIENT }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              Our Mission
            </button>
          </div>

          {/* Founder card */}
          <div
            className="relative rounded-3xl overflow-hidden flex flex-col sm:block min-h-0 sm:min-h-[560px] shadow-xl"
            style={{
              background: founderCardBg,
              border: dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(94,184,232,0.18)',
            }}
          >
            <div className="relative z-10 p-6 sm:p-9 lg:p-11 flex flex-col order-2 sm:order-none sm:absolute sm:inset-0 sm:max-w-[60%]">
              <div
                className="inline-flex items-center gap-2 mb-5 self-start px-3 py-1 rounded-full"
                style={{
                  background: dark ? 'rgba(90, 242, 39, 0.12)' : 'rgba(52, 216, 37, 0.08)',
                  border: '1px solid rgba(0, 0, 0, 0.25)',
                }}
              >
                
                <span className="text-[10px] font-bold tracking-[0.15em] uppercase" style={{ color: '#b86614ff' }}>
                  Founder &amp; Visionary
                </span>
              </div>

              <h3
                className="text-2xl sm:text-[28px] font-bold mb-1 tracking-tight"
                style={{ color: headingColor, fontFamily: "'Inter', sans-serif" }}
              >
                Mrs. Rashmi
              </h3>
              <p className="text-sm font-medium mb-6" style={{ color: bodyColor }}>
                Founder &amp; CEO, ZodiacPluss Services Pvt. Ltd.
              </p>

              {/* Quote card */}
              <div
                className="relative rounded-2xl p-5 sm:p-6"
                style={{
                  background: dark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.7)',
                  border: dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(20,184,166,0.16)',
                }}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="mb-2 opacity-80"
                  aria-hidden="true"
                >
                  <path
                    d="M7 15C5 15 4 13.5 4 11.5C4 8.5 6 6.5 9 6L9.5 7.5C7.5 8 6.5 9 6.5 10.5C6.5 10.5 7 10.3 7.5 10.3C8.9 10.3 10 11.3 10 12.7C10 14.1 8.9 15 7 15ZM16 15C14 15 13 13.5 13 11.5C13 8.5 15 6.5 18 6L18.5 7.5C16.5 8 15.5 9 15.5 10.5C15.5 10.5 16 10.3 16.5 10.3C17.9 10.3 19 11.3 19 12.7C19 14.1 17.9 15 16 15Z"
                    fill="#14b8a6"
                  />
                </svg>
                <blockquote
                  className="text-[13px] sm:text-sm leading-relaxed"
                  style={{ color: dark ? '#d4d4d8' : '#334155' }}
                >
                  I created ZodiacPluss because I believe every person deserves a guide who truly
                  understands them — where the stars meet science, and healing meets hope.
                </blockquote>
                <div
                  className="mt-4 pt-3 flex items-center justify-between border-t"
                  style={{ borderColor: dark ? 'rgba(255,255,255,0.08)' : 'rgba(20,184,166,0.15)' }}
                >
                  <span
                    className="text-xl sm:text-2xl"
                    style={{ fontFamily: "'Playball', cursive", color: '#14b8a6' }}
                  >
                    Rashmi
                  </span>
                  <span
                    className="text-[9px] font-bold tracking-[0.12em] uppercase"
                    style={{ color: bodyColor }}
                  >
                    Founder&apos;s Note
                  </span>
                </div>
              </div>

              <div
                className="mt-auto pt-6 flex items-center gap-2 text-xs font-semibold"
                style={{ color: headingColor }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#14b8a6">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                25+ Years Guiding Seekers Across India
              </div>
            </div>

            {/* Founder portrait */}
            <div
              className="relative sm:absolute sm:top-0 sm:bottom-0 sm:right-0 w-full sm:w-[46%] h-[520px] sm:h-full order-1 sm:order-none shrink-0"
              style={{ overflow: 'hidden' }}
            >
              <img
                src={FOUNDER_IMG}
                alt="Mrs. Rashmi, Founder & CEO of ZodiacPluss"
                className="w-full h-full object-cover object-top sm:object-[center_5%] transition-transform duration-500 hover:scale-105"
              />
              <div
                className="absolute inset-0 pointer-events-none hidden sm:block"
                style={{
                  background: `linear-gradient(to right, ${founderCardBg} 0%, rgba(238,247,252,0.4) 30%, transparent 65%)`,
                }}
              />
              <div
                className="absolute inset-0 pointer-events-none sm:hidden"
                style={{
                  background: `linear-gradient(to top, ${founderCardBg} 0%, rgba(238,247,252,0.2) 35%, transparent 70%)`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Core Values ───────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 sm:gap-10">
          {values.map((v) => (
            <div key={v.title} className="text-center sm:text-left xl:text-center px-2">
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4 mx-auto sm:mx-0 xl:mx-auto"
                style={{ background: dark ? 'rgba(255,255,255,0.06)' : v.iconBg, color: v.iconColor }}
              >
                {v.icon}
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: headingColor }}>
                {v.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: bodyColor }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Meet Our Team Section ─────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header Row: Left Text + Right 2 Featured Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center mb-6 sm:mb-8 lg:mb-10">
          {/* Left Column: Title, Subtitle, CTA */}
          <div className="lg:col-span-6 xl:col-span-5">
            <h2
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.12] mb-3 sm:mb-4 tracking-tight"
              style={{ color: headingColor, fontFamily: "'Inter', sans-serif" }}
            >
              Meet the Guides Behind the <span style={GRADIENT_TEXT}>Magic</span>
            </h2>

            <p
              className="text-sm sm:text-base leading-relaxed mb-6 max-w-xl"
              style={{ color: bodyColor }}
            >
              Not just Astrologers — We have Therapists, Yoga Consultants, Mindfulness Guides and Nutritionists as well! We are a crew of 50+ specialists across India.
            </p>

            <MagneticButton strength={0.45} maxDistance={45}>
              <button
                onClick={() => onNavigate?.('Career')}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-sm group hover:scale-[1.03] hover:shadow-md"
                style={{
                  color: headingColor,
                  border: dark ? '1.5px solid rgba(255,255,255,0.25)' : '1.5px solid #95c767ff',
                  background: 'transparent',
                }}
              >
                <span
                  className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:bg-[#14b8a6] group-hover:border-[#14b8a6] group-hover:text-white"
                  style={{ borderColor: headingColor }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
                JOIN OUR TEAM
              </button>
            </MagneticButton>
          </div>

          {/* Right Column: 2 Featured Cards side-by-side */}
          <div className="lg:col-span-6 xl:col-span-7 grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
            {featuredTeam.map((member) => (
              <div
                key={member.name}
                className="group rounded-2xl sm:rounded-3xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                style={{
                  background: dark ? 'rgba(56, 52, 52, 0.85)' : '#ffffff',
                  border: dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(200,190,240,0.35)',
                }}
              >
                {/* Image */}
                <div className="overflow-hidden" style={{ aspectRatio: '3/3.2' }}>
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Name + Role below */}
                <div style={{ padding: '14px 16px 16px' }}>
                  <h3
                    className="font-bold leading-tight mb-1"
                    style={{
                      fontSize: 'clamp(13px, 2.5vw, 18px)',
                      color: dark ? '#f0eaff' : '#1a1a2e',
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    style={{
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: dark ? 'rgba(180, 173, 173, 0.6)' : 'rgba(101, 83, 83, 0.5)',
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              style={{
                background: dark ? 'rgba(56, 52, 52, 0.85)' : '#ffffff',
                border: dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(200,190,240,0.3)',
              }}
            >
              {/* Image */}
              <div className="overflow-hidden" style={{ aspectRatio: '3/3' }}>
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Name + Role */}
              <div style={{ padding: '12px 14px 14px' }}>
                <h3
                  className="font-bold leading-tight mb-1"
                  style={{
                    fontSize: 'clamp(12px, 2vw, 15px)',
                    color: dark ? '#f0eaff' : '#1a1a2e',
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {member.name}
                </h3>
                <p
                  style={{
                    fontSize: '9px',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: dark ? 'rgba(180, 173, 173, 0.6),255,0.55)' : 'rgba(101, 83, 83, 0.5)',
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Stats Banner ──────────────────────────────────────────── */}
      <div
        className="relative z-10 mx-4 sm:mx-6 lg:mx-8 mb-0 rounded-2xl sm:rounded-3xl overflow-hidden"
        style={{
          background: dark
            ? 'linear-gradient(90deg, rgba(94,184,232,0.15) 0%, rgba(143,208,106,0.15) 100%)'
            : 'linear-gradient(90deg, rgba(94,184,232,0.18) 0%, rgba(200,230,160,0.35) 50%, rgba(143,208,106,0.25) 100%)',
          border: dark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(143,208,106,0.2)',
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 sm:py-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
            {/* Left summary */}
            <div className="flex items-start sm:items-center gap-4 lg:flex-1 lg:max-w-[42%]">
              <div
                className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #5eb8e8, #8fd06a)' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                  <path d="M12 2C8 6 4 8 4 13c0 3 2 5 5 5h6c3 0 5-2 5-5 0-5-4-7-8-11z" />
                  <path d="M12 22V12" />
                  <path d="M8 14c0-2 2-4 4-4s4 2 4 4" />
                </svg>
              </div>
              <p
                className="text-sm sm:text-[15px] leading-relaxed font-medium"
                style={{ color: dark ? '#f5f5f5' : '#1e3a5f' }}
              >
                Together, we&apos;re building a world where everyone can find clarity, healing, and purpose.
              </p>
            </div>

            {/* Stats columns */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-0 lg:flex-1">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center text-center px-3 sm:px-4 ${
                    i > 0 ? 'sm:border-l sm:border-[#cbd5e1]/60' : ''
                  }`}
                >
                  <div className="mb-2">{stat.icon}</div>
                  <span
                    className="text-2xl sm:text-3xl font-bold mb-1"
                    style={{ color: headingColor }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[11px] sm:text-xs font-medium" style={{ color: bodyColor }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="h-10 sm:h-14" />
    </section>
  )
}
