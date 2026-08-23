interface MobileBottomNavProps {
  currentPage: string
  onNavigate: (page: string) => void
  dark?: boolean
}

const navItems = [
  {
    id: 'Home',
    label: 'Home',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    id: 'About Us',
    label: 'Portfolio',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    id: 'Book',
    label: 'Book',
    isPrimary: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <path d="M8 10h8"/>
        <path d="M8 14h5"/>
      </svg>
    ),
  },
  {
    id: 'Services',
    label: 'Services',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    id: 'Career',
    label: 'Career',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="12.01"/>
      </svg>
    ),
  },
]

export default function MobileBottomNav({ currentPage, onNavigate, dark = false }: MobileBottomNavProps) {
  const isActive = (id: string) => currentPage === id

  const activeColor = '#4aa7d8'
  const inactiveColor = dark ? 'rgba(220, 220, 225, 0.5)' : 'rgba(100, 80, 140, 0.45)'

  return (
    <div
      className="md:hidden fixed bottom-4 left-4 right-4 z-50 max-w-sm mx-auto transition-all duration-300"
      style={{
        background: dark
          ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.10) 0%, rgba(18, 16, 28, 0.65) 100%)'
          : 'linear-gradient(135deg, rgba(255, 255, 255, 0.68) 0%, rgba(255, 255, 255, 0.40) 100%)',
        backdropFilter: 'blur(28px) saturate(210%) contrast(105%)',
        WebkitBackdropFilter: 'blur(28px) saturate(210%) contrast(105%)',
        borderRadius: '24px',
        border: dark
          ? '1px solid rgba(255, 255, 255, 0.18)'
          : '1px solid rgba(255, 255, 255, 0.55)',
        boxShadow: dark
          ? '0 16px 40px -10px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255, 255, 255, 0.08) inset, 0 1px 2px 0 rgba(255, 255, 255, 0.25) inset'
          : '0 16px 40px -10px rgba(20, 10, 45, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.4) inset, 0 1px 2px 0 rgba(255, 255, 255, 0.8) inset',
        padding: '7px 6px',
      }}
    >
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const active = isActive(item.id)

          if (item.isPrimary) {
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="flex flex-col items-center justify-center gap-0.5 cursor-pointer border-0 bg-transparent p-0 group"
                style={{ minWidth: '52px' }}
              >
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center text-white transition-all duration-200 active:scale-90 group-hover:scale-105"
                  style={{
                    background: 'linear-gradient(90deg, #5eb8e8 0%, #8fd06a 100%)',
                    boxShadow: '0 3px 12px rgba(94, 184, 232, 0.35)',
                  }}
                >
                  {item.icon}
                </div>
                <span
                  className="text-[9px] tracking-wide"
                  style={{
                    color: active ? activeColor : inactiveColor,
                    fontWeight: active ? 600 : 400,
                    fontFamily: 'Inter, sans-serif',
                    letterSpacing: '0.03em',
                  }}
                >
                  {item.label}
                </span>
              </button>
            )
          }

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="flex flex-col items-center justify-center gap-0.5 cursor-pointer border-0 bg-transparent p-0 relative group"
              style={{ minWidth: '52px' }}
            >
              {/* Active indicator dot */}
              <span
                className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300"
                style={{
                  background: active ? activeColor : 'transparent',
                  opacity: active ? 1 : 0,
                  transform: `translateX(-50%) scale(${active ? 1 : 0})`,
                }}
              />

              <div
                className="flex items-center justify-center w-8 h-8 rounded-xl transition-all duration-200 active:scale-90"
                style={{
                  color: active ? activeColor : inactiveColor,
                  background: 'transparent',
                }}
              >
                {item.icon}
              </div>

              <span
                className="text-[9px] tracking-wide transition-all duration-200"
                style={{
                  color: active ? '#4aa7d8' : inactiveColor,
                  fontWeight: active ? 600 : 400,
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '0.03em',
                }}
              >
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
