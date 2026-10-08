import { PAGE_TO_PATH } from '@/utils/routes'
import { InstagramIcon, LinkedInIcon, YouTubeIcon } from './icons'

interface AccountDeletionFooterProps {
  onNavigate?: (page: string) => void
}

const LINKS: readonly { label: string; page: string }[] = [
  { label: 'Privacy Policy', page: 'Privacy Policy' },
  { label: 'Terms of Service', page: 'Terms & Conditions' },
  { label: 'Contact', page: 'Book' },
]

// TODO: the YouTube channel URL isn't in the codebase yet; '#' until it is.
const SOCIALS = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/zodiacpluss.official?igsh=djlrczlpaWllNGNr',
    icon: <InstagramIcon width={22} height={22} />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/zodiacpluss.com/',
    icon: <LinkedInIcon width={22} height={22} />,
  },
  { name: 'YouTube', href: '#', icon: <YouTubeIcon width={26} height={26} /> },
] as const

export default function AccountDeletionFooter({ onNavigate }: AccountDeletionFooterProps) {
  return (
    <footer className="relative z-10 border-t border-[#e6eef2] bg-white/80">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-6 px-5 py-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="text-[22px] font-bold tracking-tight text-[#10213a]">ZodiacPlus</span>
          <div className="text-[13px] leading-snug text-[#5b6877]">
            <p className="font-semibold text-[#10213a]">ZodiacPlus Services Private Limited</p>
            <p>Guidance&nbsp; • &nbsp;Clarity&nbsp; • &nbsp;A Better You</p>
          </div>
        </div>

        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-10">
          <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-8 gap-y-2">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={PAGE_TO_PATH[l.page] ?? '/'}
                onClick={(e) => {
                  if (e.metaKey || e.ctrlKey || e.shiftKey) return
                  e.preventDefault()
                  onNavigate?.(l.page)
                }}
                className="text-[14px] text-[#5b6877] no-underline transition-colors hover:text-[#10213a]"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-5 text-[#10213a]">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                {...(s.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="transition-opacity hover:opacity-70"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
