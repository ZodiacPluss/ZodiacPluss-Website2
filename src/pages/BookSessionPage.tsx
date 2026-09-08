import React, { useState, useRef } from 'react'

interface BookSessionPageProps {
  onNavigate: (page: string) => void
  dark?: boolean
}

const services = [
  'Astrology Sessions',
  'Therapy Sessions',
  'Live Sessions with Experts',
  'AI-Powered Astro Insights',
  'Tarot Card of the Day',
  'Community Support',
  'Corporate Wellness Program',
]

/* ── Small icon inside a soft circle ── */
function InfoIcon({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        width: '38px',
        height: '38px',
        borderRadius: '50%',
        background: 'rgba(71, 225, 47, 0.1)',
        border: '1px solid rgba(20,184,166,0.22)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        color: '#14b8a6',
      }}
    >
      {children}
    </span>
  )
}

/* ── Form field label ── */
function Label({ text, required, dark }: { text: string; required?: boolean; dark?: boolean }) {
  return (
    <label
      style={{
        display: 'block',
        fontSize: '12.5px',
        fontWeight: 600,
        color: dark ? '#e4e4e7' : '#1e1035',
        marginBottom: '6px',
        fontFamily: 'Inter, sans-serif',
        letterSpacing: '0.1px',
      }}
    >
      {text}
      {required && (
        <span style={{ color: '#22cf50ff', marginLeft: '2px' }}>*</span>
      )}
    </label>
  )
}

/* ── Shared input wrapper with left icon ── */
function InputWrap({
  icon,
  children,
  dark,
  inputBorder,
  inputBg,
}: {
  icon: React.ReactNode
  children: React.ReactNode
  dark?: boolean
  inputBorder: string
  inputBg: string
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        border: `1px solid ${inputBorder}`,
        borderRadius: '10px',
        padding: '0 14px',
        background: inputBg,
        transition: 'border-color 0.2s, box-shadow 0.2s',
      }}
      onFocusCapture={e => {
        ; (e.currentTarget as HTMLDivElement).style.borderColor = '#14b8a6'
          ; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 0 3px rgba(20,184,166,0.10)'
      }}
      onBlurCapture={e => {
        ; (e.currentTarget as HTMLDivElement).style.borderColor = inputBorder
          ; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
      }}
    >
      <span style={{ color: '#14b8a6', flexShrink: 0, display: 'flex' }}>{icon}</span>
      {children}
    </div>
  )
}

const inputStyle: React.CSSProperties = {
  flex: 1,
  border: 'none',
  outline: 'none',
  background: 'transparent',
  fontSize: '13px',
  fontFamily: 'Inter, sans-serif',
  padding: '11px 0',
  minWidth: 0,
}

const placeholderColor = '#aaa3c2'

export default function BookSessionPage({ onNavigate, dark }: BookSessionPageProps) {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    company: '',
    service: '',
    details: '',
    file: null as File | null,
  })
  const [submitted, setSubmitted] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setResult('Sending....')
    setSubmitted(false)

    const formData = new FormData(event.currentTarget)
    formData.append('access_key', '530827a1-4327-43d5-ac22-59f657e0e406')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()

      if (data.success) {
        setResult('Message Sent Successfully! We will get back to you soon.')
        setSubmitted(true)
        // Reset React controlled state
        setForm({ fullName: '', email: '', company: '', service: '', details: '', file: null })
        // Reset the actual DOM form (clears file input and any uncontrolled fields)
        formRef.current?.reset()
        setTimeout(() => { setSubmitted(false); setResult(null) }, 5000)
      } else {
        setResult(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setResult('Network error. Please check your connection and try again.')
    }
  }

  const bg = dark ? '#000000' : '#f0f4f8'
  const cardBg = dark ? '#141416' : '#ffffff'
  const textPrimary = dark ? '#f5f5f5' : '#0f0a24'
  const textMuted = dark ? 'rgba(255,255,255,0.55)' : '#5a5272'
  const inputBg = dark ? '#1c1c20' : '#fafbff'
  const inputBorder = dark ? 'rgba(255,255,255,0.14)' : '#e2daf5'
  const labelColor = dark ? '#e4e4e7' : '#1e1035'

  return (
    <div
      className="min-h-screen transition-colors duration-400 px-3 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 sm:pb-20 font-sans"
      style={{
        background: bg,
      }}
    >
      {/* Page wrapper card */}
      <div
        className="max-w-[1060px] mx-auto rounded-2xl sm:rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-[340px_1fr] transition-colors duration-400 shadow-xl"
        style={{
          background: cardBg,
          boxShadow: dark
            ? '0 24px 80px rgba(0,0,0,0.5)'
            : '0 8px 48px rgba(90,50,160,0.10)',
        }}
      >
        {/* ════ LEFT PANEL ════ */}
        <div
          className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between"
          style={{
            background: dark ? '#0d0d0f' : '#f5fbfa',
          }}
        >
          <div>
            {/* CONTACT US badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                border: '1px solid rgba(20,184,166,0.40)',
                borderRadius: '100px',
                padding: '4px 12px',
                marginBottom: '18px',
                width: 'fit-content',
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="#14b8a6" strokeWidth="2" strokeLinecap="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span style={{
                fontSize: '10.5px', fontWeight: 600, color: '#14b8a6',
                letterSpacing: '0.8px', textTransform: 'uppercase'
              }}>
                Contact Us
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-3xl sm:text-4xl lg:text-[38px] font-bold leading-tight mb-1"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: textPrimary,
              }}
            >
              Get in{' '}
              <span
                style={{
                  color: '#14b81fff',
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                Touch
              </span>
            </h1>

            {/* Teal underline */}
            <div style={{
              width: '170px', height: '3px', background: '#63be74ff',
              borderRadius: '2px', margin: '8px 0 16px'
            }} />

            {/* Description */}
            <p
              className="text-xs sm:text-[13px] leading-relaxed mb-6 sm:mb-7 max-w-full lg:max-w-[260px]"
              style={{ color: textMuted }}
            >
              We're here to answer your questions, help you get started, and guide
              you on your journey to clarity and growth.
            </p>

            {/* Contact rows */}
            <div className="flex flex-col gap-4 sm:gap-4.5 mb-6 sm:mb-8">
              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <InfoIcon>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </InfoIcon>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: textPrimary, marginBottom: '2px' }}>Email</div>
                  <div className="text-xs sm:text-[12.5px] break-all" style={{ color: textMuted }}>info@zodiacpluss.com</div>
                </div>
              </div>

              {/* Phone */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <InfoIcon>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l1.3-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </InfoIcon>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: textPrimary, marginBottom: '2px' }}>Phone</div>
                  <div className="text-xs sm:text-[12.5px]" style={{ color: textMuted }}>+91 90566 41865</div>
                </div>
              </div>

              {/* Office */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <InfoIcon>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </InfoIcon>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: textPrimary, marginBottom: '2px' }}>Office</div>
                  <div className="text-xs sm:text-[12px] leading-relaxed" style={{ color: textMuted }}>
                    Building No. 199, Pocket 20, Rohini Sector 24, New Delhi- 110085, India
                  </div>
                </div>
              </div>

              {/* Company Hours */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <InfoIcon>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </InfoIcon>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: textPrimary, marginBottom: '6px' }}>Company Hours</div>
                  {[
                    ['Monday – Friday', '9:00 AM – 6:00 PM'],
                    ['Saturday', '10:00 AM – 6:00 PM'],
                    ['Sunday', 'Closed'],
                  ].map(([day, hrs]) => (
                    <div key={day} style={{
                      display: 'flex', justifyContent: 'space-between',
                      fontSize: '11.5px', color: textMuted, marginBottom: '3px'
                    }}>
                      <span>{day}</span>
                      <span style={{ color: hrs === 'Closed' ? '#f87171' : textMuted }}>{hrs}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* "Let's Create Clarity" card */}
          <div
            className="mt-6 lg:mt-auto rounded-xl p-4 sm:p-5 relative overflow-hidden flex items-center gap-3.5"
            style={{
              background: dark
                ? 'linear-gradient(135deg, rgba(20,184,166,0.18), rgba(20,100,100,0.12))'
                : 'linear-gradient(135deg, #e6faf6, #d0f5ee)',
              border: dark ? '1px solid rgba(20,184,166,0.22)' : '1px solid rgba(20,184,166,0.18)',
            }}
          >
            {/* Decorative world-map-like dots in background */}
            <svg
              style={{ position: 'absolute', right: '-10px', bottom: '-10px', opacity: 0.12 }}
              width="110" height="80" viewBox="0 0 110 80"
            >
              {Array.from({ length: 80 }).map((_, i) => (
                <circle
                  key={i}
                  cx={(i % 10) * 12 + 6}
                  cy={Math.floor(i / 10) * 12 + 6}
                  r="1.5"
                  fill="#14b8a6"
                />
              ))}
            </svg>

            {/* Icon */}
            <span
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(20,184,166,0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="#14b8a6" strokeWidth="1.8" strokeLinecap="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                <path d="M12 2l1.5 5h5l-4 3 1.5 5L12 12l-4 3 1.5-5L6 7h5z" fill="#14b8a6" opacity="0.5" />
              </svg>
            </span>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                fontSize: '13px', fontWeight: 700, color: dark ? '#a7f3e8' : '#0d6b5e',
                marginBottom: '2px'
              }}>Let's Create Clarity</div>
              <div style={{
                fontSize: '11px', color: dark ? 'rgba(167,243,232,0.70)' : '#2a8a7a',
                lineHeight: 1.5
              }}>
                Your path to guidance begins with a simple conversation.
              </div>
            </div>
          </div>
        </div>

        {/* ════ RIGHT PANEL — FORM ════ */}
        <div className="p-6 sm:p-8 lg:p-10" style={{ background: cardBg }}>
          <form ref={formRef} onSubmit={onSubmit}>
            {/* Row 1: Full Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4.5 mb-4 sm:mb-4.5">
              <div>
                <Label text="Full Name" required dark={dark} />
                <InputWrap
                  dark={dark}
                  inputBg={inputBg}
                  inputBorder={inputBorder}
                  icon={
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  }
                >
                  <input
                    required
                    name="fullName"
                    placeholder="Enter your full name"
                    value={form.fullName}
                    onChange={e => setForm(f => ({ ...f, fullName: e.target.value }))}
                    style={{
                      ...inputStyle,
                      color: dark ? '#f5f5f5' : '#1e1035',
                      0         }}
                  />
                </InputWrap>
              </div>
              <div>
                <Label text="Email Address" required dark={dark} />
                <InputWrap
                  dark={dark}
                  inputBg={inputBg}
                  inputBorder={inputBorder}
                  icon={
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  }
                >
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    style={{
                      ...inputStyle,
                      color: dark ? '#f5f5f5' : '#1e1035',
                    }}
                  />
                </InputWrap>
              </div>
            </div>

            {/* Row 2: Company Name + Service */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4.5 mb-4 sm:mb-4.5">
              <div>
                <Label text="Company Name" dark={dark} />
                <InputWrap
                  dark={dark}
                  inputBg={inputBg}
                  inputBorder={inputBorder}
                  icon={
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  }
                >
                  <input
                    name="company"
                    placeholder="Enter your company name"
                    value={form.company}
                    onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                    style={{
                      ...inputStyle,
                      color: dark ? '#f5f5f5' : '#1e1035',
                    }}
                  />
                </InputWrap>
              </div>
              <div>
                <Label text="Service Interested In" required dark={dark} />
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    border: `1px solid ${inputBorder}`,
                    borderRadius: '10px',
                    padding: '0 14px',
                    background: inputBg,
                  }}
                  onFocusCapture={e => {
                    ; (e.currentTarget as HTMLDivElement).style.borderColor = '#14b8a6'
                      ; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 0 3px rgba(20,184,166,0.10)'
                  }}
                  onBlurCapture={e => {
                    ; (e.currentTarget as HTMLDivElement).style.borderColor = inputBorder
                      ; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                    stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0 }}>
                    <path d="M12 2L13.5 8.5L20 7L15.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L8.5 12L4 7L10.5 8.5L12 2Z" />
                  </svg>
                  <select
                    required
                    name="service"
                    value={form.service}
                    onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                    style={{
                      flex: 1,
                      border: 'none',
                      outline: 'none',
                      background: 'transparent',
                      fontSize: '13px',
                      fontFamily: 'Inter, sans-serif',
                      color: form.service ? (dark ? '#f5f5f5' : '#1e1035') : placeholderColor,
                      padding: '11px 0',
                      cursor: 'pointer',
                      appearance: 'none',
                      minWidth: 0,
                    }}
                  >
                    <option value="" disabled>Select a service</option>
                    {services.map(s => (
                      <option key={s} value={s} style={{ color: '#1e1035', background: 'white' }}>{s}</option>
                    ))}
                  </select>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                    stroke="#aaa3c2" strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0 }}>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Row 3: Upload */}
            <div className="mb-4 sm:mb-4.5">
              <label style={{
                display: 'block', fontSize: '12.5px', fontWeight: 600,
                color: labelColor, marginBottom: '6px'
              }}>
                Upload Project File{' '}
                <span style={{ fontWeight: 400, color: dark ? 'rgba(255,255,255,0.4)' : '#aaa3c2' }}>(Optional)</span>
              </label>
              <div
                className="flex items-center gap-2.5 sm:gap-3 flex-wrap sm:flex-nowrap"
                style={{
                  border: `1px solid ${inputBorder}`,
                  borderRadius: '10px',
                  padding: '9px 14px',
                  background: inputBg,
                }}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                    stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0 }}>
                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                  </svg>
                  <label
                    style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#14b8a6',
                      cursor: 'pointer',
                      flexShrink: 0,
                      padding: '2px 10px',
                      border: '1px solid rgba(20,184,166,0.35)',
                      borderRadius: '6px',
                      background: 'rgba(20,184,166,0.07)',
                    }}
                  >
                    Choose file
                    <input
                      type="file"
                      name="attachment"
                      style={{ display: 'none' }}
                      onChange={e => setForm(f => ({ ...f, file: e.target.files?.[0] ?? null }))}
                    />
                  </label>
                </div>
                <span className="text-xs truncate max-w-full" style={{ color: placeholderColor }}>
                  {form.file ? form.file.name : 'No file chosen'}
                </span>
              </div>
            </div>

            {/* Row 4: Project Details textarea */}
            <div className="mb-5 sm:mb-6">
              <Label text="Project Details" required dark={dark} />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  border: `1px solid ${inputBorder}`,
                  borderRadius: '10px',
                  padding: '12px 14px',
                  background: inputBg,
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
                onFocusCapture={e => {
                  ; (e.currentTarget as HTMLDivElement).style.borderColor = '#14b8a6'
                    ; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 0 3px rgba(20,184,166,0.10)'
                }}
                onBlurCapture={e => {
                  ; (e.currentTarget as HTMLDivElement).style.borderColor = inputBorder
                    ; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                  stroke="#14b8a6" strokeWidth="2" strokeLinecap="round"
                  style={{ flexShrink: 0, marginTop: '2px' }}>
                  <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
                <textarea
                  required
                  name="details"
                  rows={4}
                  placeholder="Tell us about your project and goals..."
                  value={form.details}
                  onChange={e => setForm(f => ({ ...f, details: e.target.value }))}
                  style={{
                    flex: 1,
                    border: 'none',
                    outline: 'none',
                    background: 'transparent',
                    fontSize: '13px',
                    fontFamily: 'Inter, sans-serif',
                    color: dark ? '#f5f5f5' : '#1e1035',
                    resize: 'vertical',
                    lineHeight: 1.6,
                    minWidth: 0,
                  }}
                />
              </div>
            </div>

            {/* Security note */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0 }}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="text-xs" style={{ color: dark ? 'rgba(255,255,255,0.45)' : '#7a6fa8' }}>
                Your information is secure and will never be shared.
              </span>
            </div>

            {/* Submit row */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
                <button
                  type="submit"
                  disabled={result === 'Sending....'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 border-0 disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{
                    background: submitted
                      ? '#0d9488'
                      : 'linear-gradient(90deg, #5eb8e8 0%, #8fd06a 100%)',
                    color: 'white',
                    borderRadius: '100px',
                    padding: '12px 28px',
                    fontSize: '14px',
                    fontWeight: 600,
                    fontFamily: 'Inter, sans-serif',
                    boxShadow: '0 4px 16px rgba(94, 184, 232, 0.35)',
                  }}
                >
                  {result === 'Sending....' ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="white" strokeWidth="2.5" strokeLinecap="round"
                        className="animate-spin">
                        <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                        <path d="M12 2a10 10 0 0 1 10 10" strokeOpacity="1" />
                      </svg>
                      Sending...
                    </>
                  ) : submitted ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="white" strokeWidth="2.5" strokeLinecap="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="white" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </>
                  )}
                </button>
                <span className="text-[11px] text-center sm:text-right" style={{ color: dark ? 'rgba(255,255,255,0.35)' : '#aaa3c2' }}>
                  * Required fields
                </span>
              </div>

              {/* Result feedback message */}
              {result && result !== 'Sending....' && (
                <div
                  className="flex items-center gap-2 text-sm px-4 py-2.5 rounded-xl font-medium transition-all duration-300"
                  style={{
                    background: submitted
                      ? 'rgba(20, 184, 166, 0.12)'
                      : 'rgba(239, 68, 68, 0.10)',
                    color: submitted
                      ? (dark ? '#5eead4' : '#0d6b5e')
                      : (dark ? '#fca5a5' : '#b91c1c'),
                    border: `1px solid ${submitted ? 'rgba(20,184,166,0.25)' : 'rgba(239,68,68,0.2)'}`,
                  }}
                >
                  {submitted ? (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  )}
                  {result}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* ════ MAP SECTION ════ */}
      <div className="max-w-[1060px] mx-auto mt-6 sm:mt-8">
        {/* Section label */}
        <div className="flex items-start sm:items-center gap-2.5 mb-3 px-1">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
            stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" className="shrink-0 mt-0.5 sm:mt-0">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="text-xs sm:text-[12.5px] font-semibold leading-relaxed" style={{
            color: dark ? 'rgba(255,255,255,0.6)' : '#5a5272',
            letterSpacing: '0.3px',
            fontFamily: 'Inter, sans-serif',
          }}>
            Our Location · Building No. 199, Pocket 20, Rohini Sector 24, New Delhi- 110085, India.
          </span>
        </div>

        {/* Map card — rounded pill shape matching reference */}
        <div
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-[280px] sm:h-[340px]"
          style={{
            boxShadow: dark
              ? '0 16px 56px rgba(0,0,0,0.55)'
              : '0 8px 40px rgba(90,50,160,0.12)',
            border: dark
              ? '1px solid rgba(255,255,255,0.12)'
              : '1px solid rgba(200,190,230,0.35)',
          }}
        >
          {/* Google Maps iframe — Rohini, New Delhi */}
          <iframe
            title="ZodiacPluss Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.402978578928!2d77.118026!3d28.713336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03f2d7f1d2d3%3A0x4f1af8f8f7c8b8d3!2sRohini%20Sector%2024%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{
              border: 'none',
              display: 'block',
              filter: dark ? 'invert(0.88) hue-rotate(180deg) saturate(0.7) brightness(0.85)' : 'none',
              transition: 'filter 0.4s ease',
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* "Open in Maps" overlay button — top-left */}
          <a
            href="https://maps.google.com/maps?q=Building+No.+199,+Pocket+20,+Rohini+Sector+24,+New+Delhi-110085,+India&z=15"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 inline-flex items-center gap-1.5 bg-white rounded-lg px-2.5 py-1.5 sm:px-3 sm:py-1.5 text-xs font-semibold text-[#1a73e8] shadow-md z-10 hover:shadow-lg transition-all"
            style={{
              fontFamily: 'Inter, sans-serif',
            }}
          >
            {/* Map pin icon */}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
              stroke="#1a73e8" strokeWidth="2.5" strokeLinecap="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Open in Maps
            {/* External link arrow */}
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
              stroke="#1a73e8" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>

          {/* Address pill overlay — bottom center */}
          <div
            className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 flex items-center gap-2 shadow-lg z-10 max-w-[90%] sm:max-w-none"
          >
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#ea4335',
              flexShrink: 0,
              boxShadow: '0 0 0 3px rgba(234,67,53,0.20)',
            }} />
            <span className="text-[11px] sm:text-[11.5px] font-semibold text-[#2d2d2d] truncate sm:whitespace-nowrap font-sans">
              Building No. 199, Pocket 20, Rohini Sector 24, New Delhi
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
