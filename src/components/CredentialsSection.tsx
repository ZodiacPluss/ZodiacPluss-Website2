import { useState } from 'react'

const certificates = [
  {
    id: 'dpiit',
    title: 'DPIIT Recognition Certificate',
    subtitle: 'Startup India – Dept. for Promotion of Industry & Internal Trade',
    badge: 'DPIIT / STARTUP INDIA',
    certNo: 'DIPP270484',
    issuedBy: 'Ministry of Commerce & Industry, India',
    imageUrl: 'https://res.cloudinary.com/pp0lpskp/image/upload/v1789408154/Certification_of_recognition_r2ohgr.png',
    color: '#1aa0b8ff',
    bgLight: '#f0fdfa',
    bgDark: '#161717',
    borderLight: 'rgba(47, 197, 208, 0.3)',
    borderDark: 'rgba(20, 175, 195, 0.35)',
  },
  {
    id: 'gst',
    title: 'GST Registration Certificate',
    subtitle: 'Government of India',
    badge: 'GST REGISTERED',
    certNo: ' 07AADCZ0348Q1ZS',
    imageUrl: 'https://res.cloudinary.com/pp0lpskp/image/upload/v1789408152/GST_v54byv.png',
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
    certNo: 'UDYAM-DL-06-0212115',
    issuedBy: 'Govt. of India MSME Enterprise Portal',
    imageUrl: 'https://res.cloudinary.com/pp0lpskp/image/upload/v1789408152/Udyam_Registration_Certification_l3c6u0.png',
    color: '#1aa0b8ff',
    bgLight: '#f0fdfa',
    bgDark: '#161717',
    borderLight: 'rgba(47, 197, 208, 0.3)',
    borderDark: 'rgba(20, 175, 195, 0.35)',
  },
  {
    id: 'iso27001',
    title: 'ISO 27001:2022 Security Certificate',
    subtitle: 'Information Security & Data Protection Standard',
    badge: 'ISO 27001  CERTIFIED',
    certNo: '26UQAA55',
    issuedBy: 'National Accreditation Board for Certification Bodies under the Quality Council of India (QCI)',
    imageUrl: 'https://res.cloudinary.com/pp0lpskp/image/upload/v1789408161/Frame_512_nvaofh.png',
    color: '#1aa0b8ff',
    bgLight: '#f0fdfa',
    bgDark: '#161717',
    borderLight: 'rgba(47, 197, 208, 0.3)',
    borderDark: 'rgba(20, 175, 195, 0.35)',
  },
  {
    id: 'iso9001',
    title: 'ISO 9001:2015 Quality Certificate',
    subtitle: 'Quality Management & Excellence System',
    badge: 'ISO 9001  CERTIFIED',
    certNo: '26UQAB38',
    issuedBy: 'International Accreditation Service (IAS)',
    imageUrl: 'https://res.cloudinary.com/pp0lpskp/image/upload/v1789408163/ISO_9001_2015_g429eh.png',
    color: '#1aa0b8ff',
    bgLight: '#161717ff',
    bgDark: '#161717',
    borderLight: 'rgba(47, 197, 208, 0.3)',
    borderDark: 'rgba(20, 175, 195, 0.35)',
  },
]

interface CredentialsSectionProps {
  dark?: boolean
}

export default function CredentialsSection({ dark = false }: CredentialsSectionProps) {
  const [activeCert, setActiveCert] = useState<string | null>(null)
  const [previewCertImage, setPreviewCertImage] = useState<{ url: string; title: string } | null>(null)

  const textColor = dark ? '#f5f5f5' : '#ffffff'
  const subtextColor = dark ? '#5aad38ff' : '#5aad38ff'

  return (
    <section
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden w-full"
    >

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">

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
                    onClick={() => {
                      if (c.imageUrl) {
                        setPreviewCertImage({ url: c.imageUrl, title: c.title })
                      } else {
                        alert('Certificate document link for this certificate is being updated. Please check back shortly.')
                      }
                    }}
                    className="w-full py-3 rounded-xl text-white text-xs font-bold uppercase tracking-wider transition-all hover:brightness-110 active:scale-[0.99] flex items-center justify-center gap-2 shadow-md cursor-pointer"
                    style={{ background: c.color }}
                  >
                    <span>view certificate</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </button>
                </div>
              )
            })()}
          </div>
        </div>
      )}

      {/* Full Certificate Image Preview Lightbox */}
      {previewCertImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md transition-all"
          onClick={() => setPreviewCertImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[92vh] flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border"
            style={{
              background: dark ? '#141416' : '#ffffff',
              borderColor: dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div
              className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b shrink-0"
              style={{
                borderColor: dark ? 'rgba(255,255,255,0.08)' : '#e2e8f0',
                background: dark ? '#18181b' : '#f8fafc',
              }}
            >
              <div className="flex items-center gap-2.5 min-w-0 pr-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#14b8a6] shrink-0" />
                <h4
                  className="font-bold text-xs sm:text-sm truncate"
                  style={{ color: dark ? '#f5f5f5' : '#0f172a' }}
                >
                  {previewCertImage.title}
                </h4>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={previewCertImage.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold px-3 py-1.5 rounded-lg bg-[#14b8a6]/10 text-[#14b8a6] hover:bg-[#14b8a6]/20 transition-colors flex items-center gap-1.5"
                  title="Open full size image in new tab"
                >
                  <span>Open Full Size</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
                <button
                  onClick={() => setPreviewCertImage(null)}
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200/70 hover:bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                  aria-label="Close certificate preview"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Scrollable image container */}
            <div className="p-3 sm:p-6 overflow-auto flex items-center justify-center bg-black/5 dark:bg-black/40 max-h-[calc(92vh-64px)]">
              <img
                src={previewCertImage.url}
                alt={previewCertImage.title}
                className="max-h-[78vh] w-auto max-w-full object-contain rounded-xl shadow-lg"
                loading="eager"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

