import { useState, useEffect } from "react"

const navLinks = ["Home", "About Us", "Services", "Career"]

interface NavbarProps {
  currentPage: string
  onNavigate: (page: string) => void
  dark?: boolean
  onToggleTheme?: () => void
}

export default function Navbar({ currentPage, onNavigate, dark = false, onToggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Identify pages with dark background hero sections where text needs to be white when transparent
  const isBannerDark = currentPage !== "Book"
  const isHeroUnscrolled = !scrolled && (currentPage === "Home" || isBannerDark)

  // Base dynamic styling variables (pure white text for hero navbar in both light & dark mode)
  const textColor = isHeroUnscrolled
    ? "#ffffff"
    : scrolled
      ? (dark ? "#f5f5f5" : "#1a1a2e")
      : (dark ? "#f5f5f5" : "#1a1a2e")

  const subtitleColor = isHeroUnscrolled
    ? "rgba(255, 255, 255, 0.85)"
    : scrolled
      ? (dark ? "#a1a1aa" : "#6b7280")
      : (dark ? "#a1a1aa" : "#6b7280")

  const linkColor = (link: string) => {
    if (currentPage === link) {
      return isHeroUnscrolled ? "#ffffff" : textColor
    }
    if (isHeroUnscrolled) {
      return "rgba(255, 255, 255, 0.9)"
    }
    return scrolled
      ? (dark ? "rgba(255, 255, 255, 0.75)" : "#4b5563")
      : (dark ? "rgba(255, 255, 255, 0.75)" : "#4b5563")
  }

  // Beautiful resizable nav container layout classes
  const navContainerClasses = `
    pointer-events-auto transition-all duration-500 ease-out w-full
    ${scrolled
      ? "max-w-[850px] w-[92%] rounded-full py-2 px-6 translate-y-3 sm:translate-y-4"
      : "max-w-[1320px] w-full py-4 px-4 sm:px-8 translate-y-0"
    }
  `

  // High-performance custom enhanced glassmorphism styling
  const navStyle: React.CSSProperties = scrolled
    ? {
        background: dark
          ? "linear-gradient(135deg, rgba(255, 255, 255, 0.09) 0%, rgba(18, 16, 28, 0.62) 100%)"
          : "linear-gradient(135deg, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.38) 100%)",
        backdropFilter: "blur(28px) saturate(210%) contrast(105%)",
        WebkitBackdropFilter: "blur(28px) saturate(210%) contrast(105%)",
        border: dark
          ? "1px solid rgba(255, 255, 255, 0.18)"
          : "1px solid rgba(255, 255, 255, 0.55)",
        boxShadow: dark
          ? "0 16px 40px -10px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255, 255, 255, 0.08) inset, 0 1px 2px 0 rgba(255, 255, 255, 0.25) inset"
          : "0 16px 40px -10px rgba(20, 10, 45, 0.14), 0 0 0 1px rgba(255, 255, 255, 0.4) inset, 0 1px 2px 0 rgba(255, 255, 255, 0.8) inset",
      }
    : {
        background: "transparent",
        border: mobileOpen ? "none" : "1px solid transparent",
        boxShadow: "none",
        borderRadius: mobileOpen ? "28px" : "0px",
      }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full flex justify-center pointer-events-none">
      <nav className={navContainerClasses} style={navStyle}>
        <div className="w-full flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => { onNavigate("Home"); setMobileOpen(false) }}
            className="flex items-center gap-1.5 cursor-pointer border-0 bg-transparent p-0"
          >
            <img
              src="https://res.cloudinary.com/pp0lpskp/image/upload/v1786032742/Zodiac_Colored_Logo_croped-removebg-preview_appzet.png"
              alt="ZodiacPluss Logo"
              className="w-9 h-9 sm:w-10 sm:h-10 object-contain flex-shrink-0"
            />
            <div className="leading-tight text-left">
              <div className="flex items-center gap-0.5">
                <span
                  className="text-[14px] sm:text-[15px] font-extrabold tracking-tight transition-colors duration-300"
                  style={{ color: textColor, fontFamily: "'Inter', sans-serif" }}
                >
                  ZodiacPluss
                </span>
              </div>
              <div
                className="text-[8px] sm:text-[8.5px] tracking-[0.03em] font-medium transition-colors duration-300"
                style={{ color: subtitleColor }}
              >
                Your Personal Wellness Companion
              </div>
            </div>
          </button>

          {/* Desktop Nav Links - centered */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => onNavigate(link)}
                className="relative text-[13.5px] transition-colors duration-200 pb-1 cursor-pointer border-0 bg-transparent"
                style={{
                  color: linkColor(link),
                  fontWeight: currentPage === link ? 700 : 500,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {link}
                {currentPage === link && (
                  <span
                    className="absolute left-0 right-0 bottom-0 h-[2px] rounded-full transition-colors duration-300"
                    style={{ background: textColor }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3.5">
            {/* Day/Night mode toggle */}
            <button
              onClick={onToggleTheme}
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm cursor-pointer transition-transform duration-200 hover:scale-105"
              style={{ background: "linear-gradient(90deg, #5eb8e8 0%, #8fd06a 100%)" }}
              title={dark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {dark ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
            {/* Connect Us button */}
            <button
              onClick={() => onNavigate("Book")}
              className="flex items-center gap-2 text-white text-[13px] font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:opacity-90 shadow-sm cursor-pointer border-0"
              style={{ background: "linear-gradient(90deg, #5eb8e8 0%, #8fd06a 100%)" }}
            >
              Connect Us
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Mobile controls: Theme toggle + Sidebar button */}
          <div className="lg:hidden flex items-center gap-1.5">
            <button
              onClick={onToggleTheme}
              className="w-7 h-7 rounded-full flex items-center justify-center shadow-sm transition-transform duration-200 hover:scale-105"
              style={{ background: "linear-gradient(90deg, #5eb8e8 0%, #8fd06a 100%)" }}
              title={dark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {dark ? (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg width="11" height="11" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
            <button
              className="p-1 rounded-lg flex items-center justify-center cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Navigation Menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={textColor} strokeWidth="2">
                {mobileOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="lg:hidden mt-3 rounded-2xl p-4 transition-all duration-300"
            style={{
              background: dark
                ? "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(20, 20, 24, 0.85) 100%)"
                : "linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.65) 100%)",
              backdropFilter: "blur(24px) saturate(200%)",
              WebkitBackdropFilter: "blur(24px) saturate(200%)",
              border: dark ? "1px solid rgba(255,255,255,0.16)" : "1px solid rgba(255,255,255,0.6)",
              boxShadow: dark
                ? "0 16px 36px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.2)"
                : "0 16px 36px rgba(40,20,70,0.12), inset 0 1px 1px rgba(255,255,255,0.8)",
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => { onNavigate(link); setMobileOpen(false) }}
                className="block w-full text-left py-2 text-xs font-semibold border-b border-gray-100 dark:border-purple-950/40 last:border-0"
                style={{
                  color: currentPage === link ? "#0d9488" : (dark ? "#e4e4e7" : "#1a1a2e"),
                }}
              >
                {link}
              </button>
            ))}
            {/* Connect button */}
            <div className="mt-3">
              <button
                onClick={() => { onNavigate("Book"); setMobileOpen(false) }}
                className="w-full text-white text-xs font-semibold py-2 rounded-full text-center cursor-pointer border-0"
                style={{ background: "linear-gradient(90deg, #5eb8e8 0%, #8fd06a 100%)" }}
              >
                Connect Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}
