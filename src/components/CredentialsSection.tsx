import { useState } from 'react'

const certificates = [
  {
    id: 'dpiit',
    title: 'DPIIT Recognition Certificate',
    subtitle: 'Startup India – Dept. for Promotion of Industry & Internal Trade',
    badge: 'DPIIT / STARTUP INDIA',
    certNo: 'DPIIT-84920-2024',
    issuedBy: 'Ministry of Commerce and Industry, Govt. of India',
    color: '#1aa0b8ff',
    bgLight: '#f0fdfa',
    bgDark: '#161717',
    borderLight: 'rgba(47, 197, 208, 0.3)',
    borderDark: 'rgba(20, 175, 195, 0.35)',
  },
  {
    id: 'gst',
    title: 'GST Registration Certificate',
    subtitle: 'Government of India – Central Board of Indirect Taxes',
    badge: 'GST REGISTERED',
    certNo: '07AAACZ9841B1Z3',
    color: '#1aa0b8ff',
    bgLight: '#f0fdfa',
    bgDark: '#161717',
    borderLight: 'rgba(47, 197, 208, 0.3)',
    borderDark: 'rgba(20, 175, 195, 0.35)',
  },
  {
    id: 'msme',
    title: 'MSME Udyam Registration',
    subtitle: 'Ministry of Micro, Small and Medium Enterprises',
    badge: 'UDYAM CERTIFIED',
    certNo: 'UDYAM-DL-08-0049281',
    issuedBy: 'Govt. of India MSME Enterprise Portal',
    color: '#1aa0b8ff',
    bgLight: '#f0fdfa',
    bgDark: '#161717',
    borderLight: 'rgba(47, 197, 208, 0.3)',
    borderDark: 'rgba(20, 175, 195, 0.35)',
  },
  {
    id: 'iso27001',
    title: 'ISO 27001:2022 Security Cert.',
    subtitle: 'Information Security & Data Protection Standard',
    badge: 'ISO 27001',
    certNo: 'ISMS-IND-2024-8841',
    issuedBy: 'Global Accreditation Forum (GAF)',
    color: '#1aa0b8ff',
    bgLight: '#f0fdfa',
    bgDark: '#161717',
    borderLight: 'rgba(47, 197, 208, 0.3)',
    borderDark: 'rgba(20, 175, 195, 0.35)',
  },
  {
    id: 'iso9001',
    title: 'ISO 9001:2015 Quality Cert.',
    subtitle: 'Quality Management & Excellence System',
    badge: 'ISO 9001',
    certNo: 'QMS-IND-2024-9042',
    issuedBy: 'International Accreditation Service (IAS)',
    color: '#1aa0b8ff',
    bgLight: '#161717ff',
    bgDark: '#161717',
    borderLight: 'rgba(47, 197, 208, 0.3)',
    borderDark: 'rgba(20, 175, 195, 0.35)',
  },
]

const BG_VIDEO = 'https://res.cloudinary.com/pp0lpskp/video/upload/v1787222681/Background_video1_btmhwb.mp4'

interface CredentialsSectionProps {
  dark?: boolean
}

export default function CredentialsSection({ dark = false }: CredentialsSectionProps) {
  const [activeCert, setActiveCert] = useState<string | null>(null)

  const sectionBg = dark ? '#000000' : '#f8f6ff'
  const cardBg = dark ? 'rgba(20,20,22,0.82)' : 'rgba(255,255,255,0.10)'
  const textColor = dark ? '#f5f5f5' : '#ffffff'
  const subtextColor = dark ? '#b0b0b5' : 'rgba(220,210,255,0.75)'

  return (
    <section
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden w-full"
    >
      {/* Background video stretched 100% across entire section height for mobile, tablet, and desktop */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          src={BG_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {/* Dark readability overlay covering 100% of background video */}
        <div
          className="absolute inset-0"
          style={{
            background: dark
              ? 'linear-gradient(180deg, rgba(6,4,18,0.85) 0%, rgba(10,8,30,0.78) 50%, rgba(6,4,18,0.85) 100%)'
              : 'linear-gradient(180deg, rgba(6,4,18,0.78) 0%, rgba(10,8,30,0.72) 50%, rgba(6,4,18,0.78) 100%)',
            zIndex: 1,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-3"
            style={{
              color: '#14b8a6',
              background: dark ? 'rgba(20,184,166,0.12)' : 'rgba(20,184,166,0.08)',
              border: '1px solid rgba(20,184,166,0.25)',
            }}
          ></span>

          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4"
            style={{ color: textColor, fontFamily: "'Inter', sans-serif" }}
          >
            Government Recognized &amp; Certified
          </h2>
          <p
            className="text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: subtextColor }}
          >
            ZodiacPluss Pvt. Ltd. is officially registered, ISO-certified, and recognized under Startup India DPIIT.
          </p>
        </div>

        {/* Carousel / Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setActiveCert(cert.id)}
              className="group relative rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer flex flex-col justify-between"
              style={{
                background: dark ? cert.bgDark : 'rgba(255,255,255,0.09)',
                border: dark ? `1px solid ${cert.borderDark}` : '1px solid rgba(255,255,255,0.18)',
                boxShadow: '0 4px 50px rgba(0,0,0,0.18)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
              }}
            >
              <div>
                {/* Header Badge Row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${cert.color}18`, color: cert.color }}
                  >

                  </div>
                  <span
                    className="text-[9px] font-extrabold tracking-wider px-2.5 py-1 rounded-md"
                    style={{
                      color: cert.color,
                      background: `${cert.color}15`,
                      border: `1px solid ${cert.color}30`,
                    }}
                  >
                    {cert.badge}
                  </span>
                </div>

                {/* Certificate Details */}
                <h3
                  className="text-sm font-bold mb-1.5 leading-snug group-hover:text-[#14b8a6] transition-colors"
                  style={{ color: textColor }}
                >
                  {cert.title}
                </h3>
                <p className="text-xs leading-relaxed mb-4 line-clamp-2" style={{ color: subtextColor }}>
                  {cert.subtitle}
                </p>
              </div>

              {/* Certificate Seal & Verification Footer */}
              <div
                className="pt-3 border-t flex items-center justify-between"
                style={{ borderColor: dark ? 'rgba(255,255,255,0.08)' : '#f1f5f9' }}
              >
                <div className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={cert.color} strokeWidth="2.5" strokeLinecap="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span className="text-[11px] font-semibold" style={{ color: cert.color }}>
                    Active &amp; Verified
                  </span>
                </div>
                <span className="text-[10px] font-mono opacity-70" style={{ color: subtextColor }}>
                  {cert.certNo.split('-')[0]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal Preview */}
      {activeCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="relative w-full max-w-md rounded-3xl p-6 shadow-2xl transition-all"
            style={{ background: dark ? '#141416' : '#ffffff', color: dark ? '#f5f5f5' : '#1e1035' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveCert(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center bg-gray-200/50 hover:bg-gray-200"
            >
              ✕
            </button>

            {(() => {
              const c = certificates.find((item) => item.id === activeCert)!
              return (
                <div>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{ background: `${c.color}20`, color: c.color }}>

                  </div>
                  <span className="text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-md uppercase" style={{ color: c.color, background: `${c.color}15` }}>
                    {c.badge}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-1">{c.title}</h3>
                  <p className="text-xs mb-4" style={{ color: subtextColor }}>{c.subtitle}</p>

                  <div className="rounded-xl p-4 mb-4 text-xs space-y-2" style={{ background: dark ? 'rgba(255,255,255,0.05)' : '#f8fafc' }}>
                    <div className="flex justify-between"><span className="opacity-70">Certificate No:</span> <strong className="font-mono">{c.certNo}</strong></div>
                    <div className="flex justify-between"><span className="opacity-70">Authority:</span> <strong>{c.issuedBy}</strong></div>
                    <div className="flex justify-between"><span className="opacity-70">Status:</span> <strong style={{ color: c.color }}>Verified &amp; Active</strong></div>
                  </div>

                  <button
                    onClick={() => setActiveCert(null)}
                    className="w-full py-3 rounded-xl text-white text-xs font-bold uppercase tracking-wider"
                    style={{ background: c.color }}
                  >
                    Close Preview
                  </button>
                </div>
              )
            })()}
          </div>
        </div>
      )}
    </section>
  )
}

