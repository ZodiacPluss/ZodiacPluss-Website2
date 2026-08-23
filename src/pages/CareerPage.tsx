import { useState } from 'react'
import CredentialsSection from '@/components/CredentialsSection'

/* ── colour tokens ─────────────────────────────────────────────── */
const TEAL   = '#14b8a6'
const TEAL_D = '#065350'
const NAVY   = '#1a1060'
const DARK   = '#071e19'
const ACCENT = '#3ecfb3'
const MAGENTA = '#d81b86'

/* ── Job data from pamphlet ────────────────────────────────────── */
const jobs = [
  {
    id: 'psychologist',
    category: 'Mental Health',
    categoryColor: '#8b5cf6',
    title: 'Licensed Clinical Psychologist / Therapist',
    badge: 'Medical Council Licensed',
    type: 'Full-time / Part-time',
    mode: 'Remote / Hybrid',
    location: 'Pan India',
    tagline: 'Provide meaningful clinical support and psychological care.',
    requirements: [
      'Must hold valid registration with Medical Council of India (MCI) or State Medical Council',
      'Expertise in one-on-one therapy, psychometric assessments, and psychological interventions',
      'Experience in clinical settings (hospitals, clinics, or private practice) preferred',
      'Ability to maintain strict confidentiality and uphold professional ethics at all times',
      'Postgraduate degree (M.Phil / Ph.D) in Clinical Psychology recognised by RCI',
    ],
    perks: [
      'Competitive per-session fee structure',
      'RCI CPD credit support',
      'Clinical supervision access',
      'Access to 2,500+ client base pan India',
      'Flexible scheduling on our platform',
    ],
  },
  {
    id: 'eap-counsellor',
    category: 'Corporate Wellness',
    categoryColor: '#f59e0b',
    title: 'EAP Psychologist / Counsellor for Corporates',
    badge: 'Employee Assistance Program',
    type: 'Full-time / Contract',
    mode: 'Remote / On-site',
    location: 'Pan India',
    tagline: 'Champion workplace mental health across top Indian corporates.',
    requirements: [
      'Passionate about workplace mental health and holistic employee well-being',
      'Provide structured counselling support to employees through EAP programs',
      'Experience in corporate or organisational settings strongly preferred',
      'Strong communication, active listening, and empathy skills',
      "Ability to work within the client organisation's culture and values",
      'Knowledge of crisis intervention and stress management protocols',
    ],
    perks: [
      'Premium corporate client exposure',
      'Attractive retainer + per-session pay',
      'Training & EAP certification support',
      'HR partnership collaboration',
      'Performance-linked incentives',
    ],
  },
  {
    id: 'astrologer',
    category: 'Astrology',
    categoryColor: MAGENTA,
    title: 'Vedic Astrologer for Our Platform',
    badge: 'Vedic Astrology Expert',
    type: 'Freelance / Part-time',
    mode: 'Work From Anywhere',
    location: 'India & Global',
    tagline: 'Share authentic Vedic wisdom with seekers around the world.',
    requirements: [
      'Strong, in-depth knowledge of Vedic Astrology principles and Jyotish Shastra',
      'Minimum 2 years of active consultation experience (phone / chat / in-person)',
      'Expertise in multiple streams: Matchmaking (Kundali Milan), Prashna, Varshphal, Career, Finance, Health',
      'Excellent communication skills and genuine passion for guiding people',
      'Professional, ethical, punctual, and client-focused approach',
      'Proficiency in Hindi and / or English; regional languages a bonus',
    ],
    perks: [
      'Flexible hours — work anytime, anywhere',
      'Attractive earnings + performance incentives',
      'App-based scheduling & dashboard support',
      'Access to growing platform of 2,500+ active seekers',
      'Be part of a trusted, mission-driven brand',
    ],
  },
]

/* ── Why Join Us ───────────────────────────────────────────────── */
const whyUs = [
  {
    icon: '❤️',
    title: 'Real Impact',
    desc: 'Directly touch thousands of lives through meaningful, purpose-led work every single day.',
  },
  {
    icon: '🏠',
    title: 'Flexible Options',
    desc: 'Remote, hybrid, and on-site roles available across India. Work on your terms.',
  },
  {
    icon: '📈',
    title: 'Growth & Learning',
    desc: 'Continuous training, supervision, certifications, and career development pathways.',
  },
  {
    icon: '🤝',
    title: 'Passionate Team',
    desc: 'Collaborate with India\'s top astrologers, therapists, and wellness technologists.',
  },
]

/* ── Hiring process ────────────────────────────────────────────── */
const steps = [
  { n: '01', title: 'Apply', desc: 'Submit your CV and brief profile to careers@zodiacpluss.com or use the form below.' },
  { n: '02', title: 'Screening', desc: 'Our HR team reviews your credentials and shortlists qualified candidates within 5 working days.' },
  { n: '03', title: 'Interview', desc: 'A structured video / in-person interview with our clinical lead or platform head.' },
  { n: '04', title: 'Onboarding', desc: 'Sign your agreement, complete orientation, and start serving clients on the ZodiacPluss platform.' },
]

/* ── Application form ──────────────────────────────────────────── */
interface FormState {
  name: string; email: string; phone: string
  role: string; linkedin: string; message: string; submitted: boolean
}

function ApplicationForm({ preRole, dark = false }: { preRole?: string; dark?: boolean }) {
  const [form, setForm] = useState<FormState>({
    name: '', email: '', phone: '', role: preRole ?? '',
    linkedin: '', message: '', submitted: false,
  })
  const [focused, setFocused] = useState('')

  const textPrimary = dark ? '#f5f5f5' : NAVY
  const textMuted = dark ? '#a1a1aa' : '#6b7280'
  const inputBg = dark ? '#141416' : 'white'
  const inputBorder = dark ? 'rgba(255,255,255,0.1)' : '#e0d9f5'

  const inputStyle = (field: string) => ({
    width: '100%', padding: '13px 16px',
    border: `1.5px solid ${focused === field ? TEAL : inputBorder}`,
    borderRadius: 12, outline: 'none',
    fontFamily: "'Inter', sans-serif", fontSize: 14, color: textPrimary,
    background: focused === field ? 'rgba(20,184,166,0.03)' : inputBg,
    transition: 'border-color 0.2s, background 0.2s',
    boxSizing: 'border-box' as const,
  })

  const handle = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  if (form.submitted) {
    return (
      <div style={{
        textAlign: 'center', padding: '60px 24px',
        background: 'rgba(20,184,166,0.05)',
        border: `1.5px solid ${TEAL}30`,
        borderRadius: 20,
      }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, color: textPrimary, margin: '0 0 10px' }}>
          Application Received!
        </h3>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: textMuted, maxWidth: 400, margin: '0 auto 24px' }}>
          Thank you, <strong>{form.name}</strong>. Our team will review your profile and reach out within 5 working days.
        </p>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: TEAL }}>
          📧 A confirmation has been noted for <strong>{form.email}</strong>
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={e => { e.preventDefault(); setForm(f => ({ ...f, submitted: true })) }}
      style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 700, color: textMuted, display: 'block', marginBottom: 6 }}>
            Full Name *
          </label>
          <input
            required value={form.name} onChange={handle('name')}
            placeholder="Dr. Ananya Rao"
            style={inputStyle('name')}
            onFocus={() => setFocused('name')} onBlur={() => setFocused('')}
          />
        </div>
        <div>
          <label style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 700, color: textMuted, display: 'block', marginBottom: 6 }}>
            Email Address *
          </label>
          <input
            required type="email" value={form.email} onChange={handle('email')}
            placeholder="you@example.com"
            style={inputStyle('email')}
            onFocus={() => setFocused('email')} onBlur={() => setFocused('')}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 700, color: textMuted, display: 'block', marginBottom: 6 }}>
            Phone Number *
          </label>
          <input
            required value={form.phone} onChange={handle('phone')}
            placeholder="+91 90000 00000"
            style={inputStyle('phone')}
            onFocus={() => setFocused('phone')} onBlur={() => setFocused('')}
          />
        </div>
        <div>
          <label style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 700, color: textMuted, display: 'block', marginBottom: 6 }}>
            Role Applying For *
          </label>
          <select
            required value={form.role} onChange={handle('role')}
            style={{ ...inputStyle('role'), cursor: 'pointer' }}
            onFocus={() => setFocused('role')} onBlur={() => setFocused('')}
          >
            <option value="">Select a position…</option>
            <option value="psychologist">Licensed Clinical Psychologist / Therapist</option>
            <option value="eap-counsellor">EAP Psychologist / Counsellor for Corporates</option>
            <option value="astrologer">Vedic Astrologer for Platform</option>
          </select>
        </div>
      </div>

      <div>
        <label style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 700, color: textMuted, display: 'block', marginBottom: 6 }}>
          LinkedIn Profile URL
        </label>
        <input
          value={form.linkedin} onChange={handle('linkedin')}
          placeholder="linkedin.com/in/your-profile"
          style={inputStyle('linkedin')}
          onFocus={() => setFocused('linkedin')} onBlur={() => setFocused('')}
        />
      </div>

      <div>
        <label style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 700, color: textMuted, display: 'block', marginBottom: 6 }}>
          Tell Us About Yourself *
        </label>
        <textarea
          required value={form.message} onChange={handle('message')}
          placeholder="Briefly describe your experience, specialisation, and why you want to join ZodiacPluss…"
          rows={5}
          style={{ ...inputStyle('message'), resize: 'vertical' }}
          onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
        />
      </div>

      {/* CV note */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '12px 16px', borderRadius: 10,
        background: 'rgba(20,184,166,0.06)', border: `1px solid ${TEAL}25`,
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={TEAL} strokeWidth="2">
          <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
        </svg>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12.5, color: textMuted, margin: 0 }}>
          Please also email your CV / Resume to{' '}
          <a href="mailto:careers@zodiacpluss.com" style={{ color: TEAL, fontWeight: 700 }}>
            careers@zodiacpluss.com
          </a>
          {' '}with subject line: <strong>Application – [Role Name]</strong>
        </p>
      </div>

      <button
        type="submit"
        style={{
          background: `linear-gradient(135deg, ${TEAL}, ${TEAL_D})`,
          border: 'none', borderRadius: 12, padding: '14px 0',
          color: 'white', fontFamily: "'Inter', sans-serif",
          fontSize: 15, fontWeight: 700, cursor: 'pointer', width: '100%',
          boxShadow: '0 6px 20px rgba(20,184,166,0.30)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          transition: 'transform 0.15s, box-shadow 0.15s',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'
          ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 10px 28px rgba(20,184,166,0.40)'
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.transform = 'none'
          ;(e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 20px rgba(20,184,166,0.30)'
        }}
      >
        Submit Application
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
        </svg>
      </button>
    </form>
  )
}

/* ── Job card component ─────────────────────────────────────────── */
function JobCard({ job, onApply, dark = false }: { job: typeof jobs[0]; onApply: (id: string) => void; dark?: boolean }) {
  const [expanded, setExpanded] = useState(false)

  const cardBg = dark ? '#141416' : 'white'
  const cardBorder = dark ? 'rgba(255,255,255,0.1)' : '#e8e3f8'
  const textPrimary = dark ? '#f5f5f5' : NAVY
  const textMuted = dark ? '#a1a1aa' : '#6b7280'
  const chipBg = dark ? 'rgba(255,255,255,0.06)' : '#f5f3ff'

  return (
    <div style={{
      background: cardBg, borderRadius: 20,
      border: `1.5px solid ${expanded ? job.categoryColor + '40' : cardBorder}`,
      overflow: 'hidden',
      boxShadow: expanded ? `0 12px 40px ${job.categoryColor}18` : '0 2px 10px rgba(26,16,96,0.06)',
      transition: 'box-shadow 0.25s, border-color 0.25s',
    }}>
      {/* Card header */}
      <div style={{ padding: '28px 28px 24px' }}>
        {/* Category + type badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 10.5, fontWeight: 800, letterSpacing: '0.08em',
            color: job.categoryColor,
            background: `${job.categoryColor}15`,
            border: `1px solid ${job.categoryColor}30`,
            borderRadius: 999, padding: '3px 10px',
          }}>{job.category}</span>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 10.5, fontWeight: 600,
            color: textMuted, background: chipBg,
            border: `1px solid ${cardBorder}`,
            borderRadius: 999, padding: '3px 10px',
          }}>{job.type}</span>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 10.5, fontWeight: 600,
            color: textMuted, background: chipBg,
            border: `1px solid ${cardBorder}`,
            borderRadius: 999, padding: '3px 10px',
          }}>📍 {job.mode} · {job.location}</span>
        </div>

        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(18px, 2.2vw, 24px)',
          fontWeight: 700, color: textPrimary, margin: '0 0 6px', lineHeight: 1.25,
        }}>{job.title}</h3>

        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 13.5, color: textMuted,
          margin: '0 0 20px', fontStyle: 'italic',
        }}>{job.tagline}</p>

        {/* Expand / collapse */}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              background: expanded ? `${job.categoryColor}18` : chipBg,
              border: `1.5px solid ${expanded ? job.categoryColor + '40' : cardBorder}`,
              borderRadius: 999, padding: '8px 18px',
              fontFamily: "'Inter', sans-serif",
              fontSize: 13, fontWeight: 700,
              color: expanded ? job.categoryColor : (dark ? '#f5f5f5' : '#5b2d8e'),
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 6,
              transition: 'all 0.2s',
            }}
          >
            {expanded ? 'Hide Details' : 'View Details'}
            <svg
              width="13" height="13" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
              style={{ transition: 'transform 0.2s', transform: expanded ? 'rotate(180deg)' : 'none' }}
            >
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>
          <button
            onClick={() => onApply(job.id)}
            style={{
              background: `linear-gradient(135deg, ${TEAL}, ${TEAL_D})`,
              border: 'none', borderRadius: 999, padding: '8px 20px',
              fontFamily: "'Inter', sans-serif",
              fontSize: 13, fontWeight: 700, color: 'white',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 6,
              boxShadow: '0 4px 12px rgba(20,184,166,0.28)',
              transition: 'transform 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'}
            onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.transform = 'none'}
          >
            Apply Now
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Expanded body */}
      {expanded && (
        <div style={{
          borderTop: `1px solid ${job.categoryColor}20`,
          padding: '24px 28px',
          background: `${job.categoryColor}05`,
        }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Requirements */}
            <div>
              <h4 style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 13, fontWeight: 800, color: textPrimary,
                textTransform: 'uppercase', letterSpacing: '0.1em',
                margin: '0 0 14px',
              }}>Requirements</h4>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {job.requirements.map((r, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{
                      width: 18, height: 18, borderRadius: '50%', flexShrink: 0, marginTop: 1,
                      background: `${job.categoryColor}18`, border: `1px solid ${job.categoryColor}35`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={job.categoryColor} strokeWidth="3" strokeLinecap="round">
                        <path d="m20 6-11 11-5-5"/>
                      </svg>
                    </span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13.5, color: textMuted, lineHeight: 1.6 }}>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Perks */}
            <div>
              <h4 style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 13, fontWeight: 800, color: textPrimary,
                textTransform: 'uppercase', letterSpacing: '0.1em',
                margin: '0 0 14px',
              }}>What You Get</h4>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {job.perks.map((p, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: '#f59e0b', fontSize: 14, flexShrink: 0, marginTop: 1 }}>★</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13.5, color: textMuted, lineHeight: 1.6 }}>{p}</span>
                  </li>
                ))}
              </ul>

              {/* Apply shortcut */}
              <button
                onClick={() => onApply(job.id)}
                style={{
                  marginTop: 20,
                  background: `linear-gradient(135deg, ${TEAL}, ${TEAL_D})`,
                  border: 'none', borderRadius: 10, padding: '11px 22px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13.5, fontWeight: 700, color: 'white', cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(20,184,166,0.28)',
                }}
              >
                Apply for This Role →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════════
   Main CareerPage export
   ══════════════════════════════════════════════════════════════════ */
interface CareerPageProps {
  onNavigate: (page: string) => void
  dark?: boolean
}

export default function CareerPage({ onNavigate, dark = false }: CareerPageProps) {
  const [applyRole, setApplyRole] = useState('')

  const scrollToForm = (roleId: string) => {
    setApplyRole(roleId)
    setTimeout(() => {
      document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
  }

  const pageBg = dark ? '#000000' : '#ffffff'
  const cardBg = dark ? '#141416' : 'white'
  const cardBorder = dark ? 'rgba(255,255,255,0.1)' : '#e8e3f8'
  const textPrimary = dark ? '#f5f5f5' : NAVY
  const textMuted = dark ? '#a1a1aa' : '#6b7280'

  return (
    <div style={{ background: pageBg }}>

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section
        style={{
          background: 'transparent',
          position: 'relative', overflow: 'hidden',
          padding: 'clamp(100px,12vw,140px) 24px clamp(56px,8vw,88px)',
        }}
      >
        {/* Background video */}
        <video
          src="https://res.cloudinary.com/pp0lpskp/video/upload/v1786384737/watermark-removed-generate_a_video_of_this_image_smkv7n.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
        />

        {/* Semi-opaque gradient overlay to preserve original look */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
          background: 'linear-gradient(135deg, rgba(7,30,25,0.65) 0%, rgba(12,45,38,0.55) 40%, rgba(10,56,48,0.6) 100%)'
        }} />

        {/* Radial glow */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
          background: 'radial-gradient(ellipse 70% 80% at 80% 50%, rgba(61,214,172,0.09) 0%, transparent 60%)',
        }} />

        {/* Scattered zodiac glyphs */}
        {['♈','♋','♎','♑','♓','♊'].map((s, i) => (
          <span key={i} style={{
            position: 'absolute',
            top: `${[10,25,60,80,40,70][i]}%`,
            left: `${[2,95,4,90,50,48][i]}%`,
            fontSize: 20, opacity: 0.18, color: '#d4a853',
            fontFamily: 'serif', pointerEvents: 'none', userSelect: 'none',
          }}>{s}</span>
        ))}

        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Company label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 32 }}>
            <div style={{
              width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
              background: `linear-gradient(135deg, ${TEAL}30, ${TEAL_D}50)`,
              border: `1.5px solid ${TEAL}50`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 18, color: ACCENT,
            }}></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12, fontWeight: 700, letterSpacing: '0.16em',
                color: ACCENT, textTransform: 'uppercase', marginBottom: 14,
              }}>We Are Hiring</p>

              <h1 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(38px, 6vw, 72px)',
                fontWeight: 800, color: 'white',
                lineHeight: 1.08, margin: '0 0 20px',
                letterSpacing: '-0.01em',
              }}>
                Join Our<br />
                <span style={{ color: ACCENT, fontStyle: 'italic' }}>Mission</span>
              </h1>

              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(14px, 1.5vw, 17px)',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.75, margin: '0 0 32px', maxWidth: 480,
              }}>
                Empowering People. Building Healthier Workplaces. At ZodiacPluss we provide Employee Assistance Program (EAP) solutions and authentic Vedic astrology consultations — focused on mental well-being, emotional resilience, and workplace productivity.
              </p>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button
                  onClick={() => document.getElementById('open-roles')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{
                    background: `linear-gradient(135deg, ${TEAL}, ${TEAL_D})`,
                    border: 'none', borderRadius: 999, padding: '13px 28px',
                    color: 'white', fontFamily: "'Inter', sans-serif",
                    fontSize: 14, fontWeight: 700, cursor: 'pointer',
                    boxShadow: '0 6px 20px rgba(20,184,166,0.35)',
                    display: 'flex', alignItems: 'center', gap: 7,
                  }}
                >
                  View Open Roles
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>
                <button
                  onClick={() => document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1.5px solid rgba(255,255,255,0.25)',
                    borderRadius: 999, padding: '13px 28px',
                    color: 'white', fontFamily: "'Inter', sans-serif",
                    fontSize: 14, fontWeight: 600, cursor: 'pointer',
                  }}
                >
                  Apply Directly →
                </button>
              </div>
            </div>

            {/* Right stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: '2,500+', label: 'Lives Impacted', },
                { val: '3+', label: 'Open Positions',},
                { val: 'ISO', label: '27001 & 9001 Certified',},
                { val: '100%', label: 'Remote Friendly', },
              ].map((s, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(61,214,172,0.18)',
                  borderRadius: 16, padding: '22px 20px',
                  backdropFilter: 'blur(8px)',
                }}>
                  <div style={{ fontSize: 24, marginBottom: 8 }}>{}</div>
                  <div style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 28, fontWeight: 800, color: ACCENT,
                    lineHeight: 1, marginBottom: 4,
                  }}>{s.val}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.50)' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY JOIN US ──────────────────────────────────────── */}
      <section style={{ background: dark ? '#000000' : 'white', padding: 'clamp(48px,6vw,72px) 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', color: TEAL, textTransform: 'uppercase', marginBottom: 10 }}>Culture & Benefits</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px,3.5vw,38px)', fontWeight: 700, color: textPrimary, margin: 0 }}>
              Why Join ZodiacPluss?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w, i) => (
              <div key={i} style={{
                background: dark ? cardBg : 'linear-gradient(180deg, #f8f6ff 0%, white 100%)',
                border: `1px solid ${cardBorder}`,
                borderRadius: 18, padding: '24px 20px',
                textAlign: 'center',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 30px rgba(20,184,166,0.12)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'none'
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 12 }}>{w.icon}</div>
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, fontWeight: 800, color: textPrimary, margin: '0 0 8px' }}>{w.title}</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: textMuted, margin: 0, lineHeight: 1.6 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OPEN ROLES ───────────────────────────────────────── */}
      <section id="open-roles" style={{ padding: 'clamp(48px,6vw,72px) 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: 36 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', color: TEAL, textTransform: 'uppercase', marginBottom: 10 }}>Current Openings</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px,3.5vw,38px)', fontWeight: 700, color: textPrimary, margin: '0 0 10px' }}>
              Open Positions
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: textMuted, margin: 0, maxWidth: 520 }}>
              We're looking for passionate professionals to grow with us. All roles are open to applicants across India.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {jobs.map(job => (
              <JobCard key={job.id} job={job} onApply={scrollToForm} dark={dark} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── HIRING PROCESS ───────────────────────────────────── */}
      <section style={{ background: DARK, padding: 'clamp(48px,6vw,72px) 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(61,214,172,0.07) 0%, transparent 65%)',
        }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', color: ACCENT, textTransform: 'uppercase', marginBottom: 10 }}>How It Works</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px,3.5vw,38px)', fontWeight: 700, color: 'white', margin: 0 }}>
              Our Hiring Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} style={{ position: 'relative' }}>
                {/* Connector line on desktop */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block" style={{
                    position: 'absolute', top: 28, left: '100%',
                    width: '100%', height: 1,
                    background: `linear-gradient(90deg, ${TEAL}40, transparent)`,
                    zIndex: 0,
                  }} />
                )}
                <div style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(61,214,172,0.18)',
                  borderRadius: 18, padding: '24px 20px',
                  position: 'relative', zIndex: 1,
                }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%', marginBottom: 14,
                    background: `linear-gradient(135deg, ${TEAL}30, ${TEAL_D}50)`,
                    border: `1.5px solid ${TEAL}50`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: "'Inter', sans-serif", fontSize: 15, fontWeight: 900, color: ACCENT,
                  }}>{s.n}</div>
                  <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, fontWeight: 800, color: 'white', margin: '0 0 8px' }}>{s.title}</h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.50)', margin: 0, lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CREDENTIALS ──────────────────────────────────────── */}
      <section style={{ padding: 'clamp(48px,6vw,72px) 24px', background: dark ? '#000000' : 'white' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <CredentialsSection dark={dark} />
        </div>
      </section>

      {/* ─── TAGLINE BAND ─────────────────────────────────────── */}
      <section style={{
        background: `linear-gradient(120deg, ${TEAL_D}, ${TEAL})`,
        padding: '40px 24px', textAlign: 'center',
      }}>
        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(18px, 2.8vw, 30px)',
          fontWeight: 700, color: 'white', margin: '0 0 6px', fontStyle: 'italic',
        }}>
          "Your knowledge can light the path for millions."
        </p>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.70)', margin: 0 }}>
          Join ZodiacPluss and make a difference.
        </p>
      </section>

      {/* ─── APPLICATION FORM ─────────────────────────────────── */}
      <section id="apply-form" style={{ padding: 'clamp(56px,7vw,88px) 24px', background: pageBg }}>
        <div style={{ maxWidth: 740, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', color: TEAL, textTransform: 'uppercase', marginBottom: 12 }}>Join The Team</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 700, color: textPrimary, margin: '0 0 12px' }}>
              Submit Your Application
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: textMuted, margin: 0 }}>
              Fill out the form below. Our team will contact you within 5 working days.
            </p>
          </div>

          {/* Contact quick links */}
          <div style={{
            display: 'flex', gap: 12, justifyContent: 'center',
            flexWrap: 'wrap', marginBottom: 36,
          }}>
            {[
              { icon: '📧', label: 'careers@zodiacpluss.com', href: 'mailto:careers@zodiacpluss.com' },
              { icon: '💼', label: 'linkedin.com/company/zodiac-pluss', href: 'https://linkedin.com/company/zodiac-pluss' },
            ].map((c, i) => (
              <a
                key={i}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: cardBg, border: `1.5px solid ${TEAL}30`,
                  borderRadius: 999, padding: '9px 18px',
                  fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: dark ? '#2dd4bf' : TEAL_D,
                  textDecoration: 'none',
                  transition: 'box-shadow 0.2s',
                }}
              >
                <span>{c.icon}</span>
                {c.label}
              </a>
            ))}
          </div>

          {/* Form card */}
          <div style={{
            background: cardBg, borderRadius: 24,
            padding: 'clamp(24px,4vw,40px)',
            boxShadow: '0 4px 40px rgba(26,16,96,0.08)',
            border: `1px solid ${cardBorder}`,
          }}>
            <ApplicationForm preRole={applyRole} dark={dark} />
          </div>
        </div>
      </section>

    </div>
  )
}
