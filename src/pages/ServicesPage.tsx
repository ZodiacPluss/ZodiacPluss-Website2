interface ServicesPageProps {
  onNavigate: (page: string) => void
  dark?: boolean
}

const services = [
  {
    title: 'Personalized Horoscope',
    desc: 'Receive a deeply detailed horoscope crafted uniquely for your birth chart. Understand your personality, strengths, challenges, and cosmic timing.',
    bg: 'https://res.cloudinary.com/pp0lpskp/image/upload/v1787548977/Daily_hororscope_qmjbbj.jpg',
    tag: 'Most Accurate',
    color: '#d81b86',
  },
  {
    title: 'Live Sessions with Experts',
    desc: 'Book a one-on-one video or chat session with our certified astrologers and therapists. Real-time guidance for life\'s most pressing questions.',
    bg: 'https://res.cloudinary.com/pp0lpskp/image/upload/v1787550158/live_session_with_expert_bymrtl.jpg',
    tag: 'Premium feature',
    color: '#5b2d8e',
  },
  {
    title: 'Personal AI Friend',
    desc: 'A friendly companion to talk to whenever you need, 24/7.Talk seemslessly with your AI friend. ', 
    bg: 'https://res.cloudinary.com/pp0lpskp/image/upload/v1787548767/ai_sessions_inxcga.jpg',
    tag: 'AI Enhanced app',
    color: '#1487b8ff',
  },
  {
    title: 'Therapy That Helps',
    desc: 'Work with licensed therapists who integrate holistic and astrological perspectives to support your mental health and emotional well-being.',
    bg: 'https://res.cloudinary.com/pp0lpskp/image/upload/v1787549207/therapy_sessions_d61iol.jpg',
    tag: 'Wellness feature',
    color: '#0d5f4f',
  },
  {
    title: 'Tarot Card of the Day',
    desc: 'Draw your daily tarot card and receive an in-depth reading that provides guidance, reflection, and a daily cosmic check-in.',
    bg: 'https://res.cloudinary.com/pp0lpskp/image/upload/v1787549557/copy_of_tarot_card_reading_wl55x5.jpg',
    tag: 'Daily',
    color: '#7c3aed',
  },
  {
    id: '06',
    title: '24 x 7  Emergency Support',
    desc: 'Get immediate access to mental health professionals who can support you before any crisis.',
    bg: 'https://res.cloudinary.com/pp0lpskp/image/upload/v1787549489/emergencu_service_p05rrc.jpg',
    tag: 'Freebie ',
    color: '#c44832ff',
  },
  {
    title: 'EAP, SAP & CAPP',
    desc: 'Employee Assistant Programs (EAP), Student Assistant Programs (SAP) and College Assistant Programs (CAP).',
    bg: 'https://res.cloudinary.com/pp0lpskp/image/upload/v1787548802/EAP_gjbdgp.jpg',
    tag: 'Corporate',
    color: '#0891b2',
  },
]

const corporatePackages = [
  {
    name: 'Growth Starter',
    desc: 'Perfect for small teams',
    seats: 'Up to 25 employees',
    features: ['Monthly Therapy session', 'Employee wellness reports', 'All Freebie access', 'Work stress support', 'Individual Mood Tracker'],
    color: '#0d5f4f',
  },
  {
    name: 'Premium Growth',
    desc: 'For growing organizations',
    seats: 'Up to 100 employees',
    features: ['Weekly live expert sessions', 'Individual therapy sessions','Individual Mood Tracker','All Freebie access', 'Custom workshop programs', 'Analytics dashboard'],
    color: '#d81b86',
    featured: true,
  },
  {
    name: 'Full Enterprise Edition',
    price: 'Custom',
    desc: 'Full-scale wellness programs',
    seats: 'Unlimited employees',
    features: ['Extra wellness sessions for individuals ', 'Beautifully tailored workshops', 'Exclusive wellness sessions with top therapist', '24/7 priority support','Individual Mood Tracker','All Freebie access including Ai'],
    color: '#0d5f4f',
  },
]

const corporateBenefits = [
  { icon: '', title: 'Genuine Productivity', desc: 'Zodiac Pluss Application provides genuine and usefull productivity and spiritual development.' },
  { icon: '', title: 'Better Communication', desc: 'Astrology-informed team profiles reduce interpersonal conflict by 34%.' },
  { icon: '', title: 'Reduced Burnout', desc: 'Holistic therapy access cuts employee burnout rates significantly.' },
  { icon: '', title: 'Talent Retention', desc: 'Wellness-first companies retain top talent 60% longer on average.' },
]

export default function ServicesPage({ onNavigate, dark }: ServicesPageProps) {
  const cardBg = dark ? '#141416' : '#ffffff'
  const cardBorder = dark ? 'rgba(255, 255, 255, 0.1)' : '#f0e6ff'
  const titleColor = dark ? '#f5f5f5' : '#1e0d40'
  const textColor = dark ? '#a1a1aa' : '#6b5b8f'

  return (
    <div className="pt-0 transition-colors duration-300" style={{ background: dark ? '#000000' : '#ffffff' }}>
      {/* ─── Individual Services Hero Banner ─── */}
      <div
        className="relative overflow-hidden pt-32 pb-24 px-6 text-center bg-cover bg-center transition-all duration-300"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/pp0lpskp/image/upload/v1787326065/service_hero_abpics.jpg')",
        }}
      >
        {/* Soft dark vignette overlay for optimal text contrast and seamless blending */}
        <div className="absolute inset-0 bg-black/45 backdrop-blur-[0.5px]" />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(14,10,26,0.3) 0%, rgba(14,10,26,0.55) 100%)',
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-md" style={{ fontFamily: "'Playfair Display', serif" }}>
            Everything You Need to Thrive
          </h1>
          <p className="text-white/85 text-base md:text-lg max-w-xl mx-auto leading-relaxed drop-shadow-sm">
            From daily horoscopes and 1-on-1 therapy to comprehensive enterprise wellness programs, ZodiacPluss supports both individual seekers and forward-thinking teams.
          </p>
        </div>
      </div>

      {/* ─── Section 1: Individual Services Grid ─── */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="w-10 h-1 bg-[#d81b86] rounded mb-2" />
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: titleColor, fontFamily: "'Playfair Display', serif" }}>
              Personal &amp; Spiritual Wellness Services
            </h2>
            <p className="text-xs md:text-sm mt-1" style={{ color: textColor }}>
              Individual sessions, AI reports, and daily cosmic guidance tailored to your unique journey.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{
                background: cardBg,
                border: `1px solid ${cardBorder}`,
              }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={svc.bg}
                  alt={svc.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full text-white"
                    style={{ background: svc.color }}
                  >
                    {svc.tag}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 text-white/40 text-xs font-mono font-bold">{svc.id}</div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-base mb-2" style={{ color: titleColor }}>{svc.title}</h3>
                <p className="text-xs leading-relaxed mb-4" style={{ color: textColor }}>{svc.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm" style={{ color: titleColor }}>{}</span>
                  <button
                    onClick={() => onNavigate('Coming Soon')}
                    className="text-xs font-semibold px-4 py-1.5 rounded-full text-white transition-all hover:opacity-90 shadow-sm cursor-pointer"
                    style={{ background: svc.color }}
                  >
                    comming soon
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Discovery Call CTA */}
        <div
          className="mt-16 rounded-3xl p-8 md:p-10 text-center text-white shadow-lg"
          style={{ background: 'linear-gradient(135deg, #6095ceff, #575308ff)' }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Not Sure Where to Start?
          </h2>
          <p className="text-white/75 mb-6 max-w-md mx-auto text-sm">
            Book a free 15-minute discovery call with one of our advisors and find the perfect service for your journey.
          </p>
          <button
            onClick={() => onNavigate('Book')}
            className="inline-flex items-center gap-2 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border-0"
            style={{
              background: 'linear-gradient(90deg, #5eb8e8 0%, #8fd06a 100%)',
              boxShadow: '0 8px 24px rgba(94, 184, 232, 0.35)',
            }}
          >
            Book a Free Call →
          </button>
        </div>
      </div>

      {/* ─── Corporate Wellness Section Divider / Banner ─── */}
      <div
        className="relative overflow-hidden py-16 px-6 text-center"
        style={{
          background: 'linear-gradient(135deg, #0d2535 0%, #0b4a3f 50%, #1e0d40 100%)',
        }}
      >
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-teal-400/40 text-teal-300 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
            </svg>
            Corporate Wellness Solutions
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Elevate Your Team's Wellbeing
          </h2>
          <p className="text-white/75 text-base max-w-xl mx-auto mb-6">
            ZodiacPluss brings holistic wellness to the workplace. Empower your people with astrology-guided insights, employee assistance programs (EAP), therapy, and team-building workshops.
          </p>
          <button
            onClick={() => onNavigate('Book')}
            className="inline-flex items-center gap-2 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border-0"
            style={{
              background: 'linear-gradient(90deg, #5eb8e8 0%, #8fd06a 100%)',
              boxShadow: '0 8px 24px rgba(94, 184, 232, 0.35)',
            }}
          >
            Request a Corporate Demo →
          </button>
        </div>
      </div>

      {/* ─── Section 2: For Corporates Content (Benefits & Packages) ─── */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Why Companies Choose Us Benefits */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ color: titleColor, fontFamily: "'Playfair Display', serif" }}>
            Why Companies Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {corporateBenefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md"
                style={{
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                }}
              >
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="font-bold text-sm mb-2" style={{ color: titleColor }}>{b.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: textColor }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Packages */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ color: titleColor, fontFamily: "'Playfair Display', serif" }}>
            Corporate Packages &amp; Enterprise Plans
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {corporatePackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 ${
                  pkg.featured
                    ? 'border-transparent shadow-2xl text-white'
                    : 'shadow-sm hover:shadow-xl'
                }`}
                style={
                  pkg.featured
                    ? { background: `linear-gradient(135deg, ${pkg.color}, #1e0d40)` }
                    : { background: cardBg, borderColor: cardBorder }
                }
              >
                {pkg.featured && (
                  <div className="text-xs font-bold bg-white/20 text-white px-3 py-1 rounded-full inline-block mb-4">Most Popular</div>
                )}
                <h3 className={`text-xl font-bold mb-1 ${pkg.featured ? 'text-white' : ''}`} style={!pkg.featured ? { color: titleColor } : {}}>{pkg.name}</h3>
                <p className={`text-xs mb-4 ${pkg.featured ? 'text-white/70' : ''}`} style={!pkg.featured ? { color: textColor } : {}}>{pkg.desc}</p>
                <div className={`text-3xl font-bold mb-1 ${pkg.featured ? 'text-white' : ''}`} style={!pkg.featured ? { color: titleColor } : {}}>{pkg.price}</div>
                <div className={`text-xs mb-6 ${pkg.featured ? 'text-white/60' : ''}`} style={!pkg.featured ? { color: textColor } : {}}>{pkg.seats}</div>
                <ul className="space-y-2.5 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2 text-xs ${pkg.featured ? 'text-white/85' : ''}`} style={!pkg.featured ? { color: dark ? '#f5f5f5' : '#4a4a6a' } : {}}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={pkg.featured ? '#14b8a6' : pkg.color} strokeWidth="2.5" className="flex-shrink-0 mt-0.5">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onNavigate('Book')}
                  className={`w-full py-2.5 rounded-full font-semibold text-sm transition-all shadow-sm ${
                    pkg.featured
                      ? 'bg-white text-[#d81b86] hover:bg-gray-100'
                      : 'text-white hover:opacity-90'
                  }`}
                  style={!pkg.featured ? { background: pkg.color } : {}}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
