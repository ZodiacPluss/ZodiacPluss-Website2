import type { SVGProps } from 'react'

/* Stroke icons on a 24px grid, drawn inline (the project ships no icon library). */

const base: SVGProps<SVGSVGElement> = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

type IconProps = SVGProps<SVGSVGElement>

export const SearchIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m20 20-4.2-4.2" />
  </svg>
)

export const MenuIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const CloseIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
)

export const UserIcon = (p: IconProps) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <circle cx="12" cy="7.5" r="4" />
    <path d="M4.5 20.5c0-4.2 3.4-6.5 7.5-6.5s7.5 2.3 7.5 6.5z" />
  </svg>
)

export const CapIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M2.5 9.5 12 5l9.5 4.5L12 14z" />
    <path d="M6.5 11.8V16c0 1.4 2.5 2.8 5.5 2.8s5.5-1.4 5.5-2.8v-4.2M21.5 9.5V15" />
  </svg>
)

export const LockIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="5" y="10.5" width="14" height="10" rx="2.2" />
    <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5M12 14.5v2.2" />
  </svg>
)

export const ArrowRightIcon = (p: IconProps) => (
  <svg {...base} strokeWidth={1.9} {...p}>
    <path d="M4.5 12h15M13.5 6l6 6-6 6" />
  </svg>
)

export const ChevronRightIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m9.5 6 6 6-6 6" />
  </svg>
)

export const PhoneIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="7" y="2.5" width="10" height="19" rx="2.4" />
    <path d="M10.8 18.5h2.4" />
  </svg>
)

export const DocIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M14 3H7.5A2 2 0 0 0 5.5 5v14a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V7.5z" />
    <path d="M14 3v4.5h4.5M9 12h6M9 16h6" />
  </svg>
)

export const MailIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="5.5" width="18" height="13" rx="2.2" />
    <path d="m3.5 7 8.5 6.5L20.5 7" />
  </svg>
)

export const ClockIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.8" />
    <path d="M12 7.5V12l3 2" />
  </svg>
)

export const ShieldIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3 5 6v5.5c0 4.4 2.9 7.8 7 9.5 4.1-1.7 7-5.1 7-9.5V6z" />
    <path d="m8.8 12.2 2.3 2.3 4.2-4.6" />
  </svg>
)

export const CheckIcon = (p: IconProps) => (
  <svg {...base} strokeWidth={2.2} {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
)

export const InstagramIcon = (p: IconProps) => (
  <svg {...base} strokeWidth={2} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17.5 6.5h.01" />
  </svg>
)

export const LinkedInIcon = (p: IconProps) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11H10.2v8.37H13v-4.93c0-.77.62-1.4 1.39-1.4s1.4.63 1.4 1.4v4.93zM6.5 10.9v8.37h2.8V10.9zM7.9 6.74a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9" />
  </svg>
)

export const YouTubeIcon = (p: IconProps) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.27 5 12 5 12 5s-6.27 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2C2 8.78 2 12 2 12s0 3.22.4 4.8a2.5 2.5 0 0 0 1.76 1.77C5.73 19 12 19 12 19s6.27 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77C22 15.22 22 12 22 12s0-3.22-.4-4.8M10 15V9l5.2 3z" />
  </svg>
)

export const SparkleIcon = (p: IconProps) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...p}>
    <path d="M24 2c1.6 12.4 9.6 20.4 22 22-12.4 1.6-20.4 9.6-22 22C22.4 33.6 14.4 25.6 2 24 14.4 22.4 22.4 14.4 24 2z" fill="currentColor" />
  </svg>
)
