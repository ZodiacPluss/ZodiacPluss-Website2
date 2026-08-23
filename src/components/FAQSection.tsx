import { useState } from 'react'

const TEAL = '#14b8a6'
const NAVY = '#1a1060'

const faqs = [
  {
    q: 'What types of services does ZodiacPluss offer?',
    a: 'ZodiacPluss offers Vedic astrology readings, numerology analysis, tarot guidance, cognitive behavioral therapy, crystal healing consultations, and AI-powered birth chart analysis — all in one seamless platform. Each service is delivered by verified, certified professionals.',
  },
  {
    q: 'How accurate are the astrological readings?',
    a: 'Our astrologers combine decades of traditional study with modern analytical tools. While astrology provides guidance rather than certainties, our verified experts maintain the genuine conversation and provide needfull guidance to our Zodiac Pluss Family',
  },
  {
    q: 'Are the astrologers and therapists certified and verified?',
    a: 'Yes. Every expert on ZodiacPluss goes through a rigorous background check, credential verification, and a trial review process before being listed. Therapists hold recognized professional licenses; astrologers are evaluated for experience and accuracy.',
  },
  {
    q: 'Is my personal information kept confidential?',
    a: 'Absolutely. All sessions, birth data, and personal details are encrypted end-to-end. We never share your information with third parties. You can delete your account and all associated data at any time from your profile settings.',
  },
  {
    q: 'How do I book a session with an expert?',
    a: 'Navigate to the Experts page, browse profiles, and tap "Book Session" on any expert card. You can filter by specialty, language, availability, and price. First-time users receive a complimentary introductory session.',
  },
  {
    q: 'What payment methods are accepted?',
    a: 'We accept all major credit and debit cards, UPI (Google Pay, PhonePe, Paytm), net banking, and ZodiacPluss Wallet credits. All transactions are secured via PCI-DSS compliant payment gateways in a very secure path.',
  },
  {
    q: 'Do you offer corporate wellness programs?',
    a: 'Yes — our "For Corporates" plans provide team astro-wellness workshops, bulk therapy session packages, and custom integrations for HR portals. Contact us via the Book a Session page to request a tailored proposal.',
  },
  {
    q: 'Can I get a refund if I\'m not satisfied?',
    a: 'We offer a satisfaction guarantee. If you are not happy with your session, report it within 24 hours and we will issue a full ZodiacPluss Wallet credit for your next session. Monetary refunds are reviewed on a case-by-case basis.',
  },
]

interface FAQSectionProps {
  onNavigate?: (page: string) => void
  dark?: boolean
}

export default function FAQSection({ onNavigate, dark = false }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const headingColor = dark ? '#f5f5f5' : '#0f0f1a'
  const mutedColor = dark ? '#a1a1aa' : '#74748a'
  const dividerColor = dark ? 'rgba(255,255,255,0.1)' : '#e4dff2'
  const toggleBorder = dark ? 'rgba(255,255,255,0.22)' : '#c8c2dc'
  const toggleStroke = dark ? '#d4d4d8' : '#555'

  return (
    <section
      style={{
        background: dark ? '#000000' : 'linear-gradient(180deg, #fdf8f5 0%, #f8f6ff 100%)',
        padding: 'clamp(64px, 8vw, 96px) 24px clamp(64px, 8vw, 96px)',
        transition: 'background 0.4s ease',
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto' }}>

        {/* GOT QUESTIONS? label */}
        <p style={{
          fontSize: 12, fontWeight: 700, letterSpacing: '0.16em',
          color: TEAL, marginBottom: 18, textTransform: 'uppercase',
          fontFamily: "'Inter', sans-serif",
        }}>
          GOT QUESTIONS?
        </p>

        {/* Main heading */}
        <h2 style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 'clamp(44px, 7vw, 84px)',
          fontWeight: 800,
          color: headingColor,
          lineHeight: 1.05,
          margin: '0 0 6px',
          letterSpacing: '-0.02em',
        }}>
          Frequently<br />Asked Questions
        </h2>

        {/* Curved teal underline */}
        <svg
          viewBox="0 0 380 20"
          fill="none"
          style={{ width: 'clamp(200px, 45%, 380px)', height: 'auto', marginBottom: 28, display: 'block' }}
        >
          <path
            d="M4 16 C95 4, 285 4, 376 16"
            stroke={TEAL}
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Subtext */}
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 'clamp(14px, 1.4vw, 17px)',
          color: mutedColor,
          lineHeight: 1.75,
          marginBottom: 52,
          maxWidth: 600,
        }}>
          Everything you need to know before your first session with ZodiacPluss.{' '}
          <br className="hidden sm:block" />
          {"Can't find your answer? "}
          <button
            onClick={() => onNavigate?.('Book')}
            style={{
              color: TEAL, fontWeight: 600,
              textDecoration: 'underline', textUnderlineOffset: 3,
              background: 'none', border: 'none',
              cursor: 'pointer', fontSize: 'inherit',
              padding: 0, fontFamily: 'inherit',
            }}
          >
            Just reach out.
          </button>
        </p>

        {/* Top divider */}
        <div style={{ height: 1, background: dividerColor }} />

        {/* FAQ accordion rows */}
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i
          return (
            <div key={i}>
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                style={{
                  width: '100%', padding: 'clamp(20px, 3vw, 28px) 0',
                  display: 'flex', alignItems: 'flex-start', gap: 24,
                  background: 'none', border: 'none',
                  cursor: 'pointer', textAlign: 'left',
                }}
              >
                {/* Number */}
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12, fontWeight: 700, color: TEAL,
                  minWidth: 26, paddingTop: 4, letterSpacing: '0.04em',
                  flexShrink: 0,
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Question text */}
                <span style={{
                  flex: 1,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(16px, 1.8vw, 20px)',
                  fontWeight: 700,
                  color: isOpen ? TEAL : headingColor,
                  lineHeight: 1.35,
                  transition: 'color 0.22s ease',
                }}>
                  {faq.q}
                </span>

                {/* ± toggle circle */}
                <div style={{
                  width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
                  border: `1.5px solid ${isOpen ? TEAL : toggleBorder}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'border-color 0.22s ease',
                  marginTop: 1,
                }}>
                  <svg
                    width="15" height="15"
                    viewBox="0 0 24 24" fill="none"
                    stroke={isOpen ? TEAL : toggleStroke}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    style={{ transition: 'transform 0.22s ease, stroke 0.22s ease', transform: isOpen ? 'rotate(45deg)' : 'none' }}
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
              </button>

              {/* Expandable answer */}
              <div style={{
                overflow: 'hidden',
                maxHeight: isOpen ? 300 : 0,
                transition: 'max-height 0.3s ease',
              }}>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(13px, 1.3vw, 15.5px)',
                  color: mutedColor,
                  lineHeight: 1.8,
                  margin: '0 0 28px',
                  paddingLeft: 50,
                  paddingRight: 56,
                }}>
                  {faq.a}
                </p>
              </div>

              {/* Row divider */}
              <div style={{ height: 1, background: dividerColor }} />
            </div>
          )
        })}

        {/* Bottom CTA card */}
        <div style={{
          marginTop: 52,
          background: NAVY,
          borderRadius: 22,
          padding: 'clamp(28px, 4vw, 40px) clamp(24px, 4vw, 44px)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 20,
        }}>
          <div>
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(18px, 2.2vw, 24px)',
              fontWeight: 700,
              color: 'white',
              margin: '0 0 6px',
            }}>
              Still have questions?
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14, color: 'rgba(255,255,255,0.50)', margin: 0,
            }}>
              {"We're happy to walk you through everything."}
            </p>
          </div>
          <button
            onClick={() => onNavigate?.('Book')}
            style={{
              background: 'linear-gradient(90deg, #5eb8e8 0%, #8fd06a 100%)',
              border: 'none', borderRadius: 999,
              padding: '14px 30px',
              color: 'white',
              fontFamily: "'Inter', sans-serif",
              fontSize: 15, fontWeight: 700,
              cursor: 'pointer', whiteSpace: 'nowrap',
              display: 'inline-flex', alignItems: 'center', gap: 8,
              boxShadow: '0 8px 24px rgba(94, 184, 232, 0.35)',
              transition: 'transform 0.15s, box-shadow 0.15s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'
              ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 12px 32px rgba(94, 184, 232, 0.45)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.transform = 'none'
              ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 24px rgba(94, 184, 232, 0.35)'
            }}
          >
            Get in Touch
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  )
}
