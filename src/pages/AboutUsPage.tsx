import FAQSection from '@/components/FAQSection'
import CredentialsSection from '@/components/CredentialsSection'

interface AboutUsPageProps {
  onNavigate: (page: string) => void
  dark?: boolean
}

const team = [
  {
    name: 'Mrs. Rashmi',
    role: 'Founder & CEO',
    exp: '25+ years experience',
    img: 'https://res.cloudinary.com/pp0lpskp/image/upload/v1786016136/Rasmi-1_prowmf.jpg',
  },
  {
    name: 'Mrs. Sheela',
    role: 'Director',
    exp: '18+ years experience',
    img: 'https://res.cloudinary.com/pp0lpskp/image/upload/v1786011250/sheela_ji_j2mckm.png',
    },
  {
    name: 'Ms. Shweta',
    role: 'SENIOR TECHNICAL CONSULTANT',
    exp: '12+ years experience',
    img: 'https://res.cloudinary.com/pp0lpskp/image/upload/v1786011226/Shweta_x67krv.jpg',
  },
  {
    name: 'Mrs. Shivani',
    role: 'MENTAL WELLNESS EXPERT',
    exp: '5+ years experience',
    img: 'https://res.cloudinary.com/pp0lpskp/image/upload/t_hello/Shivani_lcte5s.jpg',
  },
  {
    name: 'Mr. Hari',
    role: 'SOCIAL MEDIA HEAD CONSULTANT',
    exp: '2+ years experience',
    img: 'https://res.cloudinary.com/pp0lpskp/image/upload/c_crop,g_north_west,h_970,w_823,x_254,y_280/Hari_lmdiby.jpg',
  },
  {
    name: 'Mr. Aditya',
    role: 'SDE & PROJECT MANAGER',
    exp: '2+ years experience',
    img: 'https://res.cloudinary.com/pp0lpskp/image/upload/v1786342210/my_profile_new_and_updated_unxfyt.png',
  },
]

const values = [
  { icon: '✦', title: 'Authenticity', desc: 'We combine time-honored traditions with evidence-based insights for genuine guidance.' },
  { icon: '✦', title: 'Compassion', desc: 'Every individual receives a judgment-free, empathetic, and personalized experience.' },
  { icon: '✦', title: 'Innovation', desc: 'We leverage AI and technology to deliver astrology for the modern seeker.' },
  { icon: '✦', title: 'Integrity', desc: 'Your privacy is sacred. All sessions and data are 100% confidential.' },
] 

export default function AboutUsPage({ onNavigate, dark = false }: AboutUsPageProps) {
  return (
    <div className="about-page-shell pt-0 transition-colors duration-300" style={{ background: dark ? '#000000' : '#ffffff' }}>
      {/* Hero banner */}
      <div
        className="relative overflow-hidden py-32 md:py-44 px-6 text-center transition-all duration-300 bg-cover bg-top"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/pp0lpskp/image/upload/v1786114754/webheader1_er7sxb.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Story &amp; Mission
          </h1>
          <p className="text-white/65 text-lg max-w-2xl mx-auto">
            Born from the belief that everyone deserves access to meaningful guidance, ZodiacPluss bridges ancient wisdom with modern science.
          </p>
        </div>
      </div>

      {/* Mission section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 transition-colors duration-300">
        <div className="grid gap-12 items-center mb-20 lg:grid-cols-2">
          <div>
            <div className="w-12 h-1 bg-[#d81b86] rounded mb-4" />
            <h2 className="about-heading text-4xl font-bold text-[#1e0d40] mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
              Why ZodiacPluss?
            </h2>
            <p className="about-muted text-[#4a4a6a] leading-relaxed mb-4">
              Founded in 2026, ZodiacPluss was built on a single conviction: that ancient astrological wisdom and modern psychology are not opposites — they are two sides of the same coin.
            </p>
            <p className="about-muted text-[#4a4a6a] leading-relaxed mb-6">
              Our platform gives every person access to certified astrologers, licensed therapists, and AI-powered insights — all in one seamless, private space.
            </p>
            <button
              onClick={() => onNavigate('Services')}
              className="about-button inline-flex items-center gap-2 text-white text-sm font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border-0"
              style={{
                background: 'linear-gradient(90deg, #5eb8e8 0%, #8fd06a 100%)',
                boxShadow: '0 8px 24px rgba(94, 184, 232, 0.35)',
              }}
            >
              Explore Services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-72 shadow-2xl transition-all duration-300">
            <img
              src="https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?w=600&h=400&fit=crop&auto=format&q=80"
              alt="Astrology globe"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2d1b4e]/60 to-transparent" />
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#1e0d40] text-center mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="about-surface bg-white rounded-2xl p-6 shadow-sm border border-purple-100 hover:shadow-md transition-all duration-300">
                <div className="text-[#d81b86] text-xl mb-3">{v.icon}</div>
                <h3 className="about-heading font-bold text-[#1e0d40] mb-2">{v.title}</h3>
                <p className="about-muted text-xs text-[#6b5b8f] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="about-heading text-3xl font-bold text-[#1e0d40] text-center mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Meet the Team
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[3/4] shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer bg-gray-900"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3.5 sm:p-4 z-10">
                  <h3 className="text-sm sm:text-base font-bold text-white leading-tight drop-shadow-sm">
                    {member.name}
                  </h3>
                  <p className="text-[10px] sm:text-xs font-semibold text-gray-300 uppercase tracking-wider mt-0.5">
                    {member.role}
                  </p>
                  <p className="text-[10px] text-[#2dd4bf] font-medium mt-1">
                    {member.exp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Credentials & Licences – below Meet the Team */}
      <CredentialsSection dark={dark} />

      {/* FAQ section */}
      <FAQSection onNavigate={onNavigate} dark={dark} />
    </div>
  )
}
