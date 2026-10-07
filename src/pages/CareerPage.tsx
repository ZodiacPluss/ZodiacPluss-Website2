import { useState } from 'react'
import { Reveal, TextReveal, StatCount } from '@/components/motion'
import { ChartNoAxesCombined, FileText, Handshake, Heart, House, MessageSquare, Search, Users } from 'lucide-react'
/* ── colour tokens ─────────────────────────────────────────────── */
const TEAL = '#14b8a6'
const TEAL_D = '#065350'
const NAVY = '#1a1060'
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
    icon: Heart,
    title: 'Real Impact',
    desc: 'Directly touch thousands of lives through meaningful, purpose-led work every single day.',
  },
  {
    icon: House,
    title: 'Flexible Options',
    desc: 'Remote, hybrid, and on-site roles available across India. Work on your terms.',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Growth & Learning',
    desc: 'Continuous training, supervision, certifications, and career development pathways.',
  },
  {
    icon: Handshake,
    title: 'Passionate Team',
    desc: 'Collaborate with India\'s top astrologers, therapists, and wellness technologists.',
  },
]
/* ── Hiring process ────────────────────────────────────────────── */
const steps = [
  { n: '01', title: 'Apply', desc: 'Submit your application through our online form. Tell us about yourself and your interests.' },
  { n: '02', title: 'Screening', desc: 'Our team reviews your application and shortlists candidates based on role requirements.' },
  { n: '03', title: 'Interview', desc: 'Virtual or in-person discussion with the team to understand your skills, experience and goals.' },
  { n: '04', title: 'Onboarding', desc: 'Welcome to ZodiacPluss! Get the support and resources you need to start making an impact.' },
]
const processIcons = [FileText, Search, MessageSquare, Users]
/* ── Application form ──────────────────────────────────────────── */
interface FormState {
  name: string; email: string; phone: string
  role: string; linkedin: string; message: string
}
type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'
function ApplicationForm({ preRole, dark = false }: { preRole?: string; dark?: boolean }) {
  const [form, setForm] = useState<FormState>({
    name: '', email: '', phone: '', role: preRole ?? '',
    linkedin: '', message: '',
  })
  const [focused, setFocused] = useState('')
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')
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
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const fd = new FormData()
      fd.append('access_key', '462fa424-ba49-4e0d-8725-ea664cb74841')
      fd.append('name', form.name)
      fd.append('email', form.email)
      fd.append('Phone Number', form.phone)
      fd.append('Role Applying For', form.role)
      fd.append('LinkedIn Profile', form.linkedin || 'Not provided')
      fd.append('message', form.message)
      fd.append('subject', `New Job Application – ${form.role} – ${form.name}`)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: fd,
      })
      const data = await response.json()
      if (response.ok && data.success) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', role: '', linkedin: '', message: '' })
      } else {
        setStatus('error')
        setErrorMsg(data.message || 'Submission failed. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please check your connection and try again.')
    }
  }
  /* ── Success screen ── */
  if (status === 'success') {
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
          Thank you! Our team will review your profile and reach out within 5 working days.
        </p>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: TEAL }}>
          📧 Also email your CV to{' '}
          <a href="mailto:hr@zodiacpluss.com" style={{ color: TEAL, fontWeight: 700 }}>hr@zodiacpluss.com</a>
        </p>
        <button
          onClick={() => setStatus('idle')}
          style={{
            marginTop: 24, padding: '10px 28px',
            background: 'transparent', border: `1.5px solid ${TEAL}`,
            borderRadius: 999, color: TEAL,
            fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Submit Another Application
        </button>
      </div>
    )
  }
  const isLoading = status === 'loading'
  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
    >
      {/* Row 1: Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 700, color: textMuted, display: 'block', marginBottom: 6 }}>
            Full Name \*
          </label>
          <input
            required name="name" value={form.name} onChange={handle('name')}
            placeholder="Dr. Ananya Rao"
            style={inputStyle('name')}
            onFocus={() => setFocused('name')} onBlur={() => setFocused('')}
            disabled={isLoading}
          />
        </div>
        <div>
          <label style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 700, color: textMuted, display: 'block', marginBottom: 6 }}>
            Email Address \*
          </label>
          <input
            required type="email" name="email" value={form.email} onChange={handle('email')}
            placeholder="you@example.com"
            style={inputStyle('email')}
            onFocus={() => setFocused('email')} onBlur={() => setFocused('')}
            disabled={isLoading}
          />
        </div>
      </div>
      {/* Row 2: Phone + Role */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 700, color: textMuted, display: 'block', marginBottom: 6 }}>
            Phone Number \*
          </label>
          <input
            required name="phone" value={form.phone} onChange={handle('phone')}
            placeholder="+91 xxxxx xxxxx"
            style={inputStyle('phone')}
            onFocus={() => setFocused('phone')} onBlur={() => setFocused('')}
            disabled={isLoading}
          />
        </div>
        <div>
          <label style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 700, color: textMuted, display: 'block', marginBottom: 6 }}>
            Role Applying For \*
          </label>
          <select
            required name="role" value={form.role} onChange={handle('role')}
            style={{ ...inputStyle('role'), cursor: 'pointer' }}
            onFocus={() => setFocused('role')} onBlur={() => setFocused('')}
            disabled={isLoading}
          >
            <option value="">Select a position…</option>
            <option value="Licensed Clinical Psychologist / Therapist">Licensed Clinical Psychologist / Therapist</option>
            <option value="EAP Psychologist / Counsellor for Corporates">EAP Psychologist / Counsellor for Corporates</option>
            <option value="Vedic Astrologer for Platform">Vedic Astrologer for Platform</option>
          </select>
        </div>
      </div>
      {/* LinkedIn */}
      <div>
        <label style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 700, color: textMuted, display: 'block', marginBottom: 6 }}>
          LinkedIn Profile URL
        </label>
        <input
          name="linkedin" value={form.linkedin} onChange={handle('linkedin')}
          placeholder="linkedin.com/in/your-profile"
          style={inputStyle('linkedin')}
          onFocus={() => setFocused('linkedin')} onBlur={() => setFocused('')}
          disabled={isLoading}
        />
      </div>
      {/* About yourself */}
      <div>
        <label style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 700, color: textMuted, display: 'block', marginBottom: 6 }}>
          Tell Us About Yourself \*
        </label>
        <textarea
          required name="message" value={form.message} onChange={handle('message')}
          placeholder="Briefly describe your experience, specialisation, and why you want to join ZodiacPluss…"
          rows={5}
          style={{ ...inputStyle('message'), resize: 'vertical' }}
          onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
          disabled={isLoading}
        />
      </div>
      {/* CV note */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '12px 16px', borderRadius: 10,
        background: 'rgba(20,184,166,0.06)', border: `1px solid ${TEAL}25`,
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={TEAL} strokeWidth="2">
          <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
        </svg>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12.5, color: textMuted, margin: 0 }}>
          Please also email your CV / Resume to{' '}
          <a href="mailto:hr@zodiacpluss.com" style={{ color: TEAL, fontWeight: 700 }}>
            hr@zodiacpluss.com
          </a>
          {' '}with subject line: <strong>Application – [Role Name]</strong>
        </p>
      </div>
      {/* Error banner */}
      {status === 'error' && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '12px 16px', borderRadius: 10,
          background: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.25)',
        }}>
          <span style={{ fontSize: 16 }}>⚠️</span>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#ef4444', margin: 0 }}>
            {errorMsg}
          </p>
        </div>
      )}
      {/* Submit button */}
      <button
        type="submit"
        disabled={isLoading}
        style={{
          background: isLoading
            ? 'linear-gradient(90deg, #7dd3d0 0%, #b2dfa0 100%)'
            : 'linear-gradient(90deg, #5eb8e8 0%, #8fd06a 100%)',
          border: 'none', borderRadius: 12, padding: '14px 0',
          color: 'white', fontFamily: "'Inter', sans-serif",
          fontSize: 15, fontWeight: 700,
          cursor: isLoading ? 'not-allowed' : 'pointer',
          width: '100%',
          boxShadow: '0 6px 20px rgba(94,184,232,0.35)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          transition: 'transform 0.15s, box-shadow 0.15s, background 0.2s',
          opacity: isLoading ? 0.8 : 1,
        }}
        onMouseEnter={e => {
          if (!isLoading) {
            (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'
              ; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 10px 28px rgba(94,184,232,0.45)'
          }
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.transform = 'none'
            ; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 20px rgba(94,184,232,0.35)'
        }}
      >
        {isLoading ? (
          <>
            <svg
              width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2.5"
              style={{ animation: 'spin 0.9s linear infinite' }}
            >
              <circle cx="12" cy="12" r="10" strokeOpacity="0.3" />
              <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
            </svg>
            Sending…
          </>
        ) : (
          <>
            Submit Application
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </>
        )}
      </button>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
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
    <div className="zp-card-soft" style={{
      background: cardBg, borderRadius: 16,
      border: `1px solid ${expanded ? job.categoryColor + '40' : cardBorder}`,
      overflow: 'hidden',
      boxShadow: expanded ? `0 8px 24px ${job.categoryColor}14` : '0 2px 8px rgba(23,33,60,0.04)',
    }}>
      {/* Card header */}
      <div className="career-job-summary">
        <div className="career-job-copy">
          <div className="career-job-badges">
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
            fontSize: 'clamp(20px, 1.7vw, 30px)',
            fontWeight: 700, color: textPrimary, margin: '0 0 6px', lineHeight: 1.25,
          }}>{job.title}</h3>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 15, color: textMuted,
            margin: 0, fontStyle: 'italic',
          }}>{job.tagline}</p>
        </div>
        <div className="career-job-actions">
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              background: expanded ? `${job.categoryColor}18` : chipBg,
              border: `1.5px solid ${expanded ? job.categoryColor + '40' : cardBorder}`,
              borderRadius: 999, padding: '8px 15px',
              fontFamily: "'Inter', sans-serif",
              fontSize: 11, fontWeight: 700,
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
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => onApply(job.id)}
            style={{
              background: 'linear-gradient(90deg, #5eb8e8 0%, #8fd06a 100%)',
              border: 'none', borderRadius: 999, padding: '8px 15px',
              fontFamily: "'Inter', sans-serif",
              fontSize: 11, fontWeight: 700, color: 'white',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 6,
              boxShadow: '0 6px 20px rgba(94,184,232,0.3)',
              transition: 'transform 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'}
            onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.transform = 'none'}
          >
            Apply Now
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
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
                        <path d="m20 6-11 11-5-5" />
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
                  background: 'linear-gradient(90deg, #5eb8e8 0%, #8fd06a 100%)',
                  border: 'none', borderRadius: 999, padding: '13px 28px',
                  color: 'white', fontFamily: "'Inter', sans-serif",
                  fontSize: 14, fontWeight: 700, cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(94,184,232,0.28)',
                  display: 'flex', alignItems: 'center', gap: 7,
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
  const pageBg = dark ? '#000000' : '#fafffd'
  const cardBg = dark ? '#141416' : 'white'
  const cardBorder = dark ? 'rgba(255,255,255,0.1)' : '#e8e3f8'
  const textPrimary = dark ? '#f5f5f5' : NAVY
  const textMuted = dark ? '#a1a1aa' : '#6b7280'
  return (
    <div className="career-page" style={{ background: pageBg }}>
{/* ─── HERO ─────────────────────────────────────────────── */}
      <section className={`career-hero career-hero-reference${dark ? ' career-hero-reference-dark' : ''}`}>
        <div className="career-hero-layout career-reference-layout">
          <div className="career-hero-copy career-reference-copy">
            <Reveal y={14} duration={0.6}>
              <p className="career-eyebrow career-reference-eyebrow">
                We are hiring
              </p>
            </Reveal>
            <TextReveal as="h1" delay={0.1} stagger={0.12} style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(34px, 4.5vw, 54px)',
              fontWeight: 600, color: dark ? '#f5f5f5' : NAVY,
              lineHeight: 1.02, margin: '0 0 22px',
              letterSpacing: '-0.04em',
            }}>
              Join the team<br />
              building a <span className="career-reference-highlight">healthier</span><br />
              tomorrow.
            </TextReveal>
            <Reveal y={22} delay={0.3}>
              <p className="career-hero-description career-reference-description">
                At ZodiacPluss, we bring authentic Vedic wisdom and human care together to make mental well-being more accessible—for individuals and organizations across India.
              </p>
            </Reveal>
            <Reveal stagger={0.1} y={18} delay={0.45} className="career-hero-actions">
              <button
                onClick={() => document.getElementById('open-roles')?.scrollIntoView({ behavior: 'smooth' })}
                className="career-button career-button-primary"
              >
                Explore Open Roles
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <button
                onClick={() => document.getElementById('why-join')?.scrollIntoView({ behavior: 'smooth' })}
                className="career-button career-button-secondary"
                style={{ color: dark ? '#f5f5f5' : NAVY, borderColor: dark ? 'rgba(255,255,255,0.3)' : '#cbd5e1' }}
              >
                Our Culture
              </button>
            </Reveal>
          </div>
          <Reveal y={18} delay={0.25} className="career-hero-visual" aria-hidden="true">
            <div className="career-hero-orbit">
              <span className="career-orbit-star career-orbit-star-one">✦</span>
              <span className="career-orbit-star career-orbit-star-two">✧</span>
              <div className="career-brand-seal">
                <img src="https://res.cloudinary.com/o6laufzn/image/upload/v1790790316/LOGOSMALL.png" alt="" />
              </div>
            </div>
            <strong>ZodiacPluss</strong>
            <span>Your Personal Wellness Companion</span>
          </Reveal>
        </div>
        <Reveal className="career-stats career-stats-reference" stagger={0.08}>
          {[
            { val: '10+', label: 'New Features', icon: '✦', detail: '(Therapy & Astrology)' },
            { val: '3+', label: 'Open Positions', icon: '♟' },
            { val: 'ISO', label: 'Certified', icon: '✓', detail: '27001 & 9001' },
            { val: '100%', label: 'Remote Friendly', icon: '▣' },
          ].map((s) => (
            <div key={s.label} className="career-stat">
              <span className="career-stat-icon" aria-hidden="true">{s.icon}</span>
              <div className="career-stat-copy">
              <div className="career-stat-value"><StatCount value={s.val} /></div>
              <div className="career-stat-label">{s.label}{s.detail && <small>{s.detail}</small>}</div>
              </div>
            </div>
          ))}
        </Reveal>
      </section>
      {/* ─── WHY JOIN US ──────────────────────────────────────── */}
      <section id="why-join" className="career-benefits" style={{ background: dark ? '#000000' : 'transparent', padding: 'clamp(28px,4vw,42px) 24px 20px' }}>
        <div className="career-benefits-container" style={{ maxWidth: 1500, margin: '0 auto' }}>
          <Reveal stagger={0.12} y={22} className="career-benefits-heading" style={{ textAlign: 'center', marginBottom: 44 }}>
            <p className="career-benefits-eyebrow" style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', color: TEAL, textTransform: 'uppercase', marginBottom: 10 }}>Culture & Benefits</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px,4vw,48px)', fontWeight: 700, color: textPrimary, margin: '0 0 10px' }}>
              Why Join <span className="career-gradient-text">ZodiacPluss?</span>
            </h2>
            <p className="career-benefits-intro" style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: textMuted, margin: '0 auto', maxWidth: 660, lineHeight: 1.55 }}>
              Be part of a purpose-driven team that blends Vedic wisdom, modern technology, and genuine human care to create a positive impact.
            </p>
          </Reveal>
          <Reveal stagger={0.1} y={30} className="career-benefits-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w, i) => (
              <div className={`career-benefit-card career-benefit-card-${i}`} key={i} style={{
                background: dark ? cardBg : '#fbfaf7',
                border: `1px solid ${cardBorder}`,
                borderRadius: 14, padding: '24px 20px',
                textAlign: 'center',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'
                    ; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 30px rgba(20,184,166,0.12)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'none'
                    ; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
                }}
              >
                <div className={`career-benefit-icon career-benefit-icon-${i}`} aria-hidden="true">
                  <w.icon size={28} strokeWidth={2.4} />
                </div>
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, fontWeight: 800, color: textPrimary, margin: '0 0 8px' }}>{w.title}</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: textMuted, margin: 0, lineHeight: 1.6 }}>{w.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
      {/* ─── OPEN ROLES ───────────────────────────────────────── */}
      <section id="open-roles" className="career-openings" style={{ padding: 'clamp(38px,5vw,56px) 24px' }}>
        <div style={{ maxWidth: 1375, margin: '0 auto' }}>
          <div className="career-openings-heading">
          <Reveal stagger={0.12} y={22}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: TEAL_D, textTransform: 'uppercase', marginBottom: 7 }}>Current Openings</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px,3.5vw,38px)', fontWeight: 700, color: textPrimary, margin: '0 0 10px' }}>
              Open Positions
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: textMuted, margin: 0, maxWidth: 520 }}>
              We're looking for passionate professionals to grow with us. All roles are open to applicants across India.
            </p>
          </Reveal>
          <div className="career-category-chips" aria-label="Open role categories">
            <span className="career-category-chip career-category-chip-active">All Roles</span>
            <span className="career-category-chip">Therapy</span>
            <span className="career-category-chip">Astrology</span>
            <span className="career-category-chip">Corporate Wellness</span>
          </div>
          </div>
          <Reveal stagger={0.1} y={26} className="career-job-list">
            {jobs.map(job => (
              <JobCard key={job.id} job={job} onApply={scrollToForm} dark={dark} />
            ))}
          </Reveal>
        </div>
      </section>
      {/* ─── HIRING PROCESS ───────────────────────────────────── */}
      <section className="career-process" style={{
        background: dark ? '#000000' : 'transparent',
        padding: 'clamp(38px,5vw,56px) 24px 28px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="career-process-container" style={{ maxWidth: 1375, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <Reveal stagger={0.12} y={22} className="career-process-heading" style={{ textAlign: 'center', marginBottom: 26 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', color: TEAL_D, textTransform: 'uppercase', marginBottom: 6 }}>How It Works</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px,4vw,54px)', fontWeight: 700, color: textPrimary, margin: '0 0 10px' }}>
              Our Hiring <span className="career-gradient-text">Process</span>
            </h2>
            <p className="career-process-intro" style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: textMuted, margin: '0 auto', maxWidth: 680, lineHeight: 1.55 }}>
              A simple and transparent process to help you join the ZodiacPluss team and start making a meaningful impact.
            </p>
          </Reveal>
          <Reveal stagger={0.12} y={30} className="career-process-steps grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => {
              const Icon = processIcons[i]
              return (
                <div className={`career-process-step career-process-step-${i}`} key={i}>
                  <div className="career-process-card" style={{
                    background: dark ? '#141416' : 'rgba(255,255,255,0.72)',
                    border: `1px solid ${dark ? 'rgba(255,255,255,0.1)' : '#dce8ef'}`,
                  }}>
                    <div className={`career-process-icon career-process-icon-${i}`} aria-hidden="true">
                      <Icon size={32} strokeWidth={2.2} />
                    </div>
                    <div className="career-process-content">
                      <span className="career-process-number">{s.n}</span>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: textPrimary, margin: '3px 0 8px' }}>{s.title}</h3>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: textMuted, margin: 0, lineHeight: 1.55 }}>{s.desc}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </Reveal>
        </div>
      </section>
      {/* ─── APPLICATION FORM ─────────────────────────────────── */}
      <section id="apply-form" className="career-application" style={{ padding: 'clamp(36px,5vw,56px) 24px', background: pageBg }}>
        <div style={{ maxWidth: 740, margin: '0 auto' }}>
          <Reveal stagger={0.12} y={22} className="career-application-heading" style={{ textAlign: 'center', marginBottom: 24 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', color: TEAL_D, textTransform: 'uppercase', marginBottom: 7 }}>Join The Team</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px,3.5vw,36px)', fontWeight: 700, color: textPrimary, margin: '0 0 8px' }}>
              Submit Your <span className="career-gradient-text">Application</span>
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: textMuted, margin: 0 }}>
              Fill out the form below. Our team will contact you within 5 working days.
            </p>
          </Reveal>
          {/* Contact quick links */}
          <div style={{
            display: 'flex', gap: 12, justifyContent: 'center',
            flexWrap: 'wrap', marginBottom: 24,
          }}>
            {[
              { icon: '📧', label: 'hr@zodiacpluss.com', href: 'mailto:hr@zodiacpluss.com' },
              { icon: '💼', label: 'linkedin.com/company/zodiac-pluss', href: 'https://www.linkedin.com/company/zodiacpluss.com/' },
            ].map((c, i) => (
              <a
                key={i}
                href={c.href}
                target={c.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer"
                className="career-contact-link"
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
          <div className="career-form-card" style={{
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
   