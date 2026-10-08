import { useState } from 'react'
import { PAGE_TO_PATH } from '@/utils/routes'
import { CloseIcon, MenuIcon, SearchIcon } from './icons'

interface AccountDeletionHeaderProps {
  onNavigate?: (page: string) => void
}

export const LOGO_URL = 'https://res.cloudinary.com/o6laufzn/image/upload/v1790790316/LOGOSMALL.png'

// TODO: replace with the real store / download URL once it exists.
export const DOWNLOAD_APP_URL = '#'

// Labels follow the design; each opens the closest existing page.
const NAV_LINKS: readonly { label: string; page: string }[] = [
  { label: 'Home', page: 'Home' },
  { label: 'Astrology', page: 'Services' },
  { label: 'Experts', page: 'Book' },
  { label: 'Features', page: 'Portfolio' },
  { label: 'About', page: 'About Us' },
  { label: 'Blog', page: 'Blog' },
]

export const GRADIENT_BG = 'linear-gradient(90deg, #5cc6f2 0%, #7fd36b 100%)'

export default function AccountDeletionHeader({ onNavigate }: AccountDeletionHeaderProps) {
  const [open, setOpen] = useState(false)

  const go = (page: string) => (e: React.MouseEvent) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey) return
    e.preventDefault()
    setOpen(false)
    onNavigate?.(page)
  }

  const iconBtn =
    'flex h-10 w-10 items-center justify-center rounded-full border border-[#e3ebf0] bg-white/90 text-[#10213a] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2a8fd8] sm:h-11 sm:w-11'

  return (
    <header className="relative z-30 border-b border-[#eaf0f4] bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-[72px] w-full max-w-[1320px] items-center justify-between gap-4 px-5 sm:h-[84px] sm:px-8">
        <a href="/" onClick={go('Home')} className="flex items-center gap-2.5 no-underline" aria-label="ZodiacPluss home">
          <img src={LOGO_URL} alt="" width={44} height={44} className="h-10 w-10 object-contain sm:h-11 sm:w-11" />
          <span className="text-[22px] font-bold tracking-tight text-[#10213a] sm:text-[24px]">ZodiacPlus</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={PAGE_TO_PATH[l.page] ?? '/'}
              onClick={go(l.page)}
              className="text-[14px] font-medium text-[#3b4a5c] no-underline transition-colors hover:text-[#10213a]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <a href={PAGE_TO_PATH.Blog} onClick={go('Blog')} aria-label="Search articles" className={iconBtn}>
            <SearchIcon width={20} height={20} />
          </a>
          <a
            href={DOWNLOAD_APP_URL}
            className="hidden h-11 items-center rounded-full px-6 text-[14.5px] font-semibold text-white no-underline shadow-[0_8px_18px_-8px_rgba(60,160,200,.6)] transition-[filter] hover:brightness-105 lg:inline-flex"
            style={{ background: GRADIENT_BG }}
          >
            Download App
          </a>
          <button
            type="button"
            className={`${iconBtn} lg:hidden`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="ad-mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon width={20} height={20} /> : <MenuIcon width={20} height={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="ad-mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full border-b border-[#eaf0f4] bg-white px-5 pb-5 pt-2 shadow-lg lg:hidden"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={PAGE_TO_PATH[l.page] ?? '/'}
                  onClick={go(l.page)}
                  className="block border-b border-[#f0f4f7] py-3 text-[16px] font-medium text-[#10213a] no-underline"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={DOWNLOAD_APP_URL}
            className="mt-4 flex h-12 items-center justify-center rounded-full text-[15px] font-semibold text-white no-underline"
            style={{ background: GRADIENT_BG }}
          >
            Download App
          </a>
        </nav>
      )}
    </header>
  )
}
