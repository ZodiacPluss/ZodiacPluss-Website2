import { useState } from 'react'
import logoImg from '@/imports/Zodiac_Colored_Logo_croped-removebg-preview.png'

interface FooterProps {
  onNavigate: (page: string) => void
  dark?: boolean
}

const GRADIENT =
  'linear-gradient(90deg, #148f77 0%, #1aab8a 28%, #5ec98a 62%, #a2d180 100%)'

const TEAL_DARK = '#0a5c52'
const TEAL_TEXT = '#0d4f4a'
const DIVIDER = 'rgba(255, 255, 255, 0.28)'

const navLinks: { label: string; page: string; arrow?: boolean }[] = [
  { label: 'Home', page: 'Home' },
  { label: 'Services', page: 'Services' },
  { label: 'About', page: 'About' },
  { label: 'Contact', page: 'Contact' },
  { label: 'Career', page: 'Career' },
]

const contactItems = [
  { label: '+91 9868111414', href: 'tel:+91 9868111414' },
  { label: '+91 9811577859', href: 'tel:+91 9811577859' },
  { label: 'info@zodiacpluss.com', href: 'mailto:hello@zodiacpluss.com' },
  { label: 'Playstore', href: '#' },
  { label: 'App store', href: '#' },
]

function AssistanceText({ className = '' }: { className?: string }) {
  return (
    <p
      className={`text-[11px] sm:text-xs leading-[1.55] ${className}`}
      style={{ color: 'rgba(255, 255, 255, 0.92)' }}
    >
      Need assistance or have any query, Get in touch with Zodiac Pluss team
    </p>
  )
}

function BackToTopButton() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="absolute z-20 flex items-center justify-center rounded-full shadow-[0_4px_14px_rgba(20,143,119,0.35)] transition-transform duration-200 hover:scale-105"
      style={{
        width: '44px',
        height: '44px',
        right: 'clamp(14px, 3vw, 10px)',
        bottom: 'calc(20% - 22px)',
        background: 'linear-gradient(180deg, #d4edb8 0%, #a2d180 100%)',
        border: '2.5px solid rgba(255, 255, 255, 0.65)',
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={TEAL_DARK} strokeWidth="2.5" strokeLinecap="round">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  )
}

export default function Footer({ onNavigate, dark = false }: FooterProps) {
  const [email, setEmail] = useState('')
  const subBarBg = dark ? '#141416' : '#ffffff'
  const subBarHeading = dark ? '#5eead4' : TEAL_TEXT
  const subBarMuted = dark ? '#ffffffff' : '#ffffffff'
  const subBarFaint = dark ? '#87878c' : '#6b7f7a'
  const subBarIconBorder = dark ? 'rgba(255,255,255,0.15)' : '#c8d8d4'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) setEmail('')
  }

  return (
    <footer
      className="relative w-full footer-shell"
      style={{
        padding: '0 clamp(12px, 3vw, 24px) clamp(12px, 3vw, 24px)',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        className="relative mx-auto overflow-hidden"
        style={{
          maxWidth: '1320px',
          borderRadius: '28px',
          boxShadow: '0 18px 48px rgba(20, 143, 119, 0.22)',
        }}
      >
        <BackToTopButton />

        {/* ── Gradient main panel ─────────────────────────────────── */}
        <div style={{ background: GRADIENT }}>
          <div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0 items-start"
            style={{
              padding: 'clamp(30px, 4vw, 46px) clamp(20px, 3.5vw, 42px) clamp(26px, 3vw, 34px)',
            }}
          >
            {/* Col 1 — Brand card */}
            <div
              className="flex flex-col items-center text-center px-2 pb-8 xl:pb-0 xl:pr-6 xl:border-r"
              style={{ borderColor: DIVIDER }}
            >
              <AssistanceText className="mb-5 max-w-[250px]" />

              <button
                type="button"
                onClick={() => onNavigate('Home')}
                className="w-full max-w-[252px] overflow-hidden text-left cursor-pointer border-0 p-0 transition-transform duration-200 hover:scale-[1.02]"
                style={{
                  borderRadius: '18px',
                  background: 'rgba(255, 255, 255, 0.24)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.42)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35), 0 4px 16px rgba(0,0,0,0.05)',
                }}
              >
                <div className="flex items-center gap-3 px-4 pt-[14px] pb-3">
                  <div
                    className="shrink-0 flex items-center justify-center"
                    style={{
                      
                    }}
                  >
                    <img 
                    src="https://res.cloudinary.com/pp0lpskp/image/upload/v1786032742/Zodiac_Colored_Logo_croped-removebg-preview_appzet.png"
            alt="ZodiacPluss Logo"
            className="w-25 h-25 object-contain flex-shrink-0" />
                  </div>
                  <div className="min-w-0 text-left">
                    <div className="text-[20px] font-bold leading-none tracking-tight" style={{ color: TEAL_TEXT }}>
                      ZodiacPluss
                    </div>
                    <div
                      className="text-[11px] font-medium mt-1 tracking-[0.02em]"
                      style={{ color: 'rgba(13, 79, 74, 0.68)' }}
                    >
                      services Pvt. Ltd.
                    </div>
                  </div>
                </div>

                <div
                  className="px-3 py-[5px] text-center"
                  style={{
                    background: TEAL_DARK,
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.03em]" style={{ color: '#ffffff' }}>
                    Your Personal Wellness Companion
                  </span>
                </div>
              </button>
            </div>

            {/* Col 2 — Email signup */}
            <div
              className="flex flex-col px-2 pb-8 xl:pb-0 xl:px-6 xl:border-r border-t border-white/20 pt-8 xl:border-t-0 xl:pt-0"
              style={{ borderColor: DIVIDER }}
            >
              <h4 className="text-[15px] sm:text-[16px] font-bold mb-3" style={{ color: '#ffffff' }}>
                Get in touch
              </h4>
              <AssistanceText className="mb-[18px] max-w-[290px]" />

              <form onSubmit={handleSubmit} className="max-w-[304px]">
                <div
                  className="flex items-center footer-email-pill"
                  style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    borderRadius: '999px',
                    padding: '4px 5px 4px 18px',
                  }}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your email Address"
                    className="footer-email-input flex-1 min-w-0 bg-transparent border-0 outline-none text-[12px]"
                    style={{ color: '#ffffff' }}
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="shrink-0 flex items-center justify-center rounded-full border-0 cursor-pointer transition-transform duration-200 hover:scale-105"
                    style={{ width: '34px', height: '34px', background: '#ffffff' }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#148f77" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            {/* Col 3 — Quick links */}
            <div
              className="flex flex-col gap-[13px] px-2 pb-8 xl:pb-0 xl:px-6 xl:border-r border-t border-white/20 pt-8 xl:border-t-0 xl:pt-0"
              style={{ borderColor: DIVIDER }}
            >
              {navLinks.map(({ label, page, arrow }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => onNavigate(page)}
                  className="text-left bg-transparent border-0 p-0 cursor-pointer transition-all duration-200 hover:translate-x-1 hover:text-white"
                  style={{
                    color: 'rgba(255, 255, 255, 0.94)',
                    fontSize: '14px',
                    fontWeight: 500,
                    lineHeight: 1.35,
                  }}
                >
                  {arrow ? (
                    <span className="inline-flex items-center gap-[6px]">
                      <span aria-hidden="true" style={{ fontSize: '13px' }}>→</span>
                      {label}
                    </span>
                  ) : (
                    label
                  )}
                </button>
              ))}
            </div>

            {/* Col 4 — Contact */}
            <div className="flex flex-col px-2 xl:pl-6 border-t border-white/20 pt-8 xl:border-t-0 xl:pt-0">
              <h4 className="text-[15px] sm:text-[16px] font-bold mb-[14px]" style={{ color: '#ffffff' }}>
                Contact Us
              </h4>
              <div className="flex flex-col gap-[10px]">
                {contactItems.map((item, i) => (
                  <a
                    key={`${item.label}-${i}`}
                    href={item.href}
                    className="no-underline transition-opacity duration-200 hover:opacity-75"
                    style={{
                      color: 'rgba(255, 255, 255, 0.94)',
                      fontSize: '13px',
                      fontWeight: 400,
                      lineHeight: 1.5,
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── White sub-footer bar ────────────────────────────────── */}
        <div
          style={{
            background: subBarBg,
            borderRadius: '0 0 28px 28px',
            transition: 'background 0.4s ease',
          }}
        >
          <div
            className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-6"
            style={{ padding: '17px clamp(20px, 3.5vw, 42px) 20px' }}
          >
            {/* Social links */}
            <div className="flex items-center gap-[10px] order-2 lg:order-1">
              {[
                {
                  name: 'WhatsApp',
                  href: 'https://wa.me/919868111414',
                  color: '#25D366',
                  icon: (
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884" />
                    </svg>
                  ),
                },
                {
                  name: 'LinkedIn',
                  href: 'https://www.linkedin.com/company/zodiacpluss.com/',
                  color: '#0A66C2',
                  icon: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9z" />
                    </svg>
                  ),
                },
                {
                  name: 'Instagram',
                  href: 'https://www.instagram.com/zodiacpluss.official?igsh=djlrczlpaWllNGNr',
                  color: '#E4405F',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ),
                },
                {
                  name: 'Facebook',
                  href: 'https://www.facebook.com/share/1S3GCqRQcB/',
                  color: '#1877F2',
                  icon: (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
                  style={{
                    width: '36px',
                    height: '36px',
                    border: `1.5px solid ${subBarIconBorder}`,
                    color: subBarHeading,
                    background: 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = s.color
                    e.currentTarget.style.color = s.color
                    e.currentTarget.style.background = `${s.color}12`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = subBarIconBorder
                    e.currentTarget.style.color = subBarHeading
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Copyright center */}
            <div className="text-center order-1 lg:order-2 flex-1 px-3">
              <div className="text-[13px] sm:text-[14px] font-bold mb-[2px]" style={{ color: subBarHeading }}>
                ZodiacPluss Services Pvt. Ltd.
              </div>
              <div className="text-[10px] sm:text-[11px]" style={{ color: subBarMuted }}>
                Copyright © 2026, All rights reserved
              </div>
            </div>

            {/* Developer credit */}
            <div className="flex items-center gap-[10px] order-3 shrink-0">
              <div
                className="flex items-center justify-center shrink-0"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  border: `1.5px solid ${subBarIconBorder}`,
                  color: subBarHeading,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <div className="text-left leading-[1.25]">
                <div className="text-[11px] font-bold" style={{ color: subBarHeading }}>
                  Designed &amp; Developed
                </div>
                <div className="text-[10px] sm:text-[11px]" style={{ color: subBarFaint }}>
                  Advent Software Solutions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
