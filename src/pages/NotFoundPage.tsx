import { PAGE_TO_PATH } from '@/utils/routes'
import { Reveal } from '@/components/motion'

/* ── tokens ────────────────────────────────────────────────────── */
const INK = '#0d1128'          // the near-black navy of the 404 numerals
const PAPER = '#efedeb'        // warm off-white collage background
const PINK = '#f5559f'         // marker pink used on the bolts + torn outline
const SANS = "'Sora', 'Inter', sans-serif"
const BODY = "'Inter', sans-serif"

/* ─────────────────────────────────────────────────────────────────
   Collage artwork.

   The mockup is a cut-and-paste collage of halftoned stock photos.
   No such cutouts exist in the repo, so each piece is drawn inline
   instead: a flat shape, a shading gradient, and a dot pattern
   clipped to it, which is what gives the printed-halftone texture.
   `dotId` keeps the pattern/gradient ids unique per instance so two
   pieces on the same page never share a def.
   ───────────────────────────────────────────────────────────────── */

/** Pink marker bolts above the numerals, with the little impact ticks. */
function LightningDoodle({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 200 130" fill="none" className={className} style={style} aria-hidden="true">
      <g stroke={PINK} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
        {/* big bolt */}
        <path d="M128 8 L104 62 h22 l-14 50 40-62 h-23 l17-42 z" fill={PINK} strokeWidth="4" />
        {/* small bolt */}
        <path d="M74 38 L60 72 h13 l-8 30 24-38 h-14 l10-26 z" fill={PINK} strokeWidth="3.5" />
      </g>
      {/* impact ticks + specks */}
      <g stroke={PINK} strokeWidth="4" strokeLinecap="round">
        <path d="M44 62 L26 70" />
        <path d="M50 88 L36 100" />
        <path d="M156 96 L170 106" />
        <path d="M174 78 L190 74" />
        <path d="M100 118 L96 128" />
      </g>
      <g fill={PINK}>
        <circle cx="20" cy="52" r="3.4" />
        <circle cx="186" cy="56" r="3" />
        <circle cx="166" cy="122" r="3" />
      </g>
    </svg>
  )
}

/** Halftoned megaphone on a torn pink-edged paper scrap. */
function MegaphoneCutout({ className, style }: { className?: string; style?: React.CSSProperties }) {
  /* Horn: straight top/bottom edges flaring right into an elliptical mouth. */
  const HORN = 'M188 76 L296 22 A 42 138 0 0 1 296 278 L188 224 Z'
  return (
    <svg viewBox="0 0 400 300" fill="none" className={className} style={style} aria-hidden="true">
      <defs>
        <pattern id="mg-dots" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="1.6" cy="1.6" r="1.5" fill="#000" />
          <circle cx="4.6" cy="4.6" r="1.1" fill="#000" />
        </pattern>
        <radialGradient id="mg-shade" cx="0.3" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#fff" stopOpacity="0.9" />
          <stop offset="0.55" stopColor="#fff" stopOpacity="0.22" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <clipPath id="mg-horn"><path d={HORN} /></clipPath>
        <clipPath id="mg-body"><path d="M92 104 L188 76 L188 224 L92 196 Z" /></clipPath>
        <clipPath id="mg-cap"><ellipse cx="92" cy="150" rx="34" ry="58" /></clipPath>
      </defs>

      {/* torn pink scrap behind the cutout */}
      <path
        d="M44 60 L120 26 L206 12 L300 30 L352 78 L372 152 L344 236 L272 282 L172 292 L86 268 L34 212 L22 132 Z"
        fill="none" stroke={PINK} strokeWidth="5" strokeLinejoin="round"
      />
      <path
        d="M52 66 L124 34 L206 20 L294 38 L344 84 L362 152 L336 230 L268 274 L174 284 L92 260 L42 208 L32 134 Z"
        fill="#f7f5f3"
      />

      {/* handle, behind the barrel */}
      <g transform="rotate(8 150 230)">
        <path d="M136 196 L128 262 q28 12 56 0 L176 196 Z" fill="#161616" />
        <path d="M136 196 L128 262 q28 12 56 0 L176 196 Z" fill="url(#mg-dots)" opacity="0.4" />
        <path d="M132 232 h48" stroke="#e8e5e2" strokeWidth="6" strokeLinecap="round" opacity="0.85" />
      </g>

      {/* barrel */}
      <g clipPath="url(#mg-body)">
        <rect x="80" y="60" width="130" height="190" fill="#1b1b1b" />
        <rect x="80" y="60" width="130" height="190" fill="url(#mg-dots)" opacity="0.5" />
        <rect x="80" y="60" width="130" height="190" fill="url(#mg-shade)" />
      </g>

      {/* horn */}
      <g clipPath="url(#mg-horn)">
        <rect x="180" y="10" width="180" height="290" fill="#1a1a1a" />
        <rect x="180" y="10" width="180" height="290" fill="url(#mg-dots)" opacity="0.5" />
        <rect x="180" y="10" width="180" height="290" fill="url(#mg-shade)" />
      </g>
      <path d={HORN} fill="none" stroke="#0f0f0f" strokeWidth="3.5" strokeLinejoin="round" />

      {/* mouth of the horn */}
      <ellipse cx="296" cy="150" rx="42" ry="138" fill="#141414" />
      <ellipse cx="300" cy="150" rx="26" ry="112" fill="#323232" />
      <ellipse cx="300" cy="150" rx="26" ry="112" fill="url(#mg-dots)" opacity="0.35" />

      {/* back cap with its speaker mesh */}
      <g clipPath="url(#mg-cap)">
        <rect x="56" y="88" width="72" height="124" fill="#131313" />
        <rect x="56" y="88" width="72" height="124" fill="url(#mg-dots)" opacity="0.45" />
        <rect x="56" y="88" width="72" height="124" fill="url(#mg-shade)" />
      </g>
      <ellipse cx="92" cy="150" rx="34" ry="58" fill="none" stroke="#0f0f0f" strokeWidth="3.5" />
      <ellipse cx="94" cy="150" rx="19" ry="38" fill="#ddd9d5" />
      <ellipse cx="94" cy="150" rx="19" ry="38" fill="url(#mg-dots)" opacity="0.5" />
    </svg>
  )
}

/** Halftoned arm reaching out of a black hole on the right edge. */
function ReachingHand({ className, style }: { className?: string; style?: React.CSSProperties }) {
  /* Fingers are drawn as separate outlined pieces rather than unioned into one
     silhouette: a union of capsules this close together reads as a single
     wedge, and the gaps are what make the shape legible as a hand. Drawing
     order is back to front — arm, then pinky through index, then thumb — so
     each finger's outline sits over the one behind it. */
  /* Each capsule points left from a pivot at its right end, so a POSITIVE
     rotation swings its tip upwards. The fan therefore runs from a positive
     angle on the index finger down to a negative one on the pinky; flipping
     these signs crosses the fingers into a single point. */
  const fingers = [
    { x: 160, y: 202, w: 108, h: 21, rot: -17 },  // pinky
    { x: 138, y: 178, w: 130, h: 23, rot: -9 },   // ring
    { x: 118, y: 152, w: 150, h: 24, rot: -2 },   // middle
    { x: 114, y: 126, w: 154, h: 24, rot: 6 },    // index
  ]
  const ARM = 'M392 96 C356 88 318 94 286 108 C268 116 258 134 256 158 C254 186 262 206 284 214 C318 226 360 222 392 212 Z'
  const THUMB = { x: 214, y: 108, w: 88, h: 24, rot: 24 }

  /* One shared fill stack (flat tone → halftone dots → light gradient),
     re-used by every piece through a clip-path. */
  const Fill = ({ clip }: { clip: string }) => (
    <g clipPath={`url(#${clip})`}>
      <rect x="60" y="50" width="360" height="240" fill="#8f8f8f" />
      <rect x="60" y="50" width="360" height="240" fill="url(#hd-dots)" opacity="0.6" />
      <rect x="60" y="50" width="360" height="240" fill="url(#hd-shade)" />
    </g>
  )

  return (
    <svg viewBox="0 0 420 300" fill="none" className={className} style={style} aria-hidden="true">
      <defs>
        <pattern id="hd-dots" width="5" height="5" patternUnits="userSpaceOnUse">
          <circle cx="1.3" cy="1.3" r="1.25" fill="#000" />
          <circle cx="3.8" cy="3.8" r="0.85" fill="#000" />
        </pattern>
        <linearGradient id="hd-shade" x1="0" y1="0.1" x2="1" y2="0.6">
          <stop offset="0" stopColor="#fff" stopOpacity="0.92" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0.42" />
          <stop offset="1" stopColor="#fff" stopOpacity="0.04" />
        </linearGradient>
        <clipPath id="hd-armclip"><path d={ARM} /></clipPath>
        {fingers.map((f, i) => (
          <clipPath key={i} id={`hd-f${i}`}>
            <rect x={f.x} y={f.y} width={f.w} height={f.h} rx={f.h / 2} transform={`rotate(${f.rot} ${f.x + f.w} ${f.y + f.h / 2})`} />
          </clipPath>
        ))}
        <clipPath id="hd-thumb">
          <rect x={THUMB.x} y={THUMB.y} width={THUMB.w} height={THUMB.h} rx={THUMB.h / 2} transform={`rotate(${THUMB.rot} ${THUMB.x + THUMB.w} ${THUMB.y + THUMB.h / 2})`} />
        </clipPath>
      </defs>

      {/* the black void the arm reaches through */}
      <ellipse cx="368" cy="150" rx="54" ry="112" fill="#070707" />

      {/* forearm + palm */}
      <Fill clip="hd-armclip" />
      <path d={ARM} fill="none" stroke="#4d4d4d" strokeWidth="2.2" opacity="0.7" />

      {/* fingers, back to front */}
      {fingers.map((f, i) => {
        const transform = `rotate(${f.rot} ${f.x + f.w} ${f.y + f.h / 2})`
        return (
          <g key={i}>
            <Fill clip={`hd-f${i}`} />
            <rect
              x={f.x} y={f.y} width={f.w} height={f.h} rx={f.h / 2} transform={transform}
              fill="none" stroke="#4d4d4d" strokeWidth="2.2" opacity="0.75"
            />
          </g>
        )
      })}

      {/* thumb, laid over the top of the palm */}
      <Fill clip="hd-thumb" />
      <rect
        x={THUMB.x} y={THUMB.y} width={THUMB.w} height={THUMB.h} rx={THUMB.h / 2}
        transform={`rotate(${THUMB.rot} ${THUMB.x + THUMB.w} ${THUMB.y + THUMB.h / 2})`}
        fill="none" stroke="#4d4d4d" strokeWidth="2.2" opacity="0.75"
      />
    </svg>
  )
}

/** Engraved-style magnifying glass under the button. */
function MagnifyingGlass({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 320 260" fill="none" className={className} style={style} aria-hidden="true">
      <defs>
        <radialGradient id="mgl-glass" cx="0.38" cy="0.32" r="0.72">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="0.7" stopColor="#dedbd8" stopOpacity="0.5" />
          <stop offset="1" stopColor="#c7c3bf" stopOpacity="0.65" />
        </radialGradient>
        <linearGradient id="mgl-handle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4a4a4a" />
          <stop offset="0.45" stopColor="#141414" />
          <stop offset="1" stopColor="#3a3a3a" />
        </linearGradient>
        <linearGradient id="mgl-ring" x1="0.1" y1="0" x2="0.9" y2="1">
          <stop offset="0" stopColor="#5e5e5e" />
          <stop offset="0.5" stopColor="#1c1c1c" />
          <stop offset="1" stopColor="#6b6b6b" />
        </linearGradient>
      </defs>

      {/* handle, drawn first so the ring overlaps it */}
      <g transform="rotate(38 150 108)">
        <rect x="140" y="188" width="26" height="150" rx="13" fill="url(#mgl-handle)" />
        <rect x="146" y="196" width="6" height="132" rx="3" fill="#7a7a7a" opacity="0.55" />
        <rect x="136" y="176" width="34" height="22" rx="8" fill="#2a2a2a" />
      </g>

      {/* lens */}
      <circle cx="120" cy="100" r="82" fill="url(#mgl-glass)" />
      <circle cx="120" cy="100" r="82" fill="none" stroke="url(#mgl-ring)" strokeWidth="9" />
      <circle cx="120" cy="100" r="72" fill="none" stroke="#ffffff" strokeWidth="3" opacity="0.8" />
      {/* specular highlights */}
      <path d="M72 66 C84 48 106 38 128 38" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" opacity="0.95" />
      <path d="M66 92 C68 78 74 66 82 56" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" opacity="0.7" />
      <path d="M150 156 C168 146 180 130 184 112" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

/* ── page ──────────────────────────────────────────────────────── */
interface NotFoundPageProps {
  onNavigate: (page: string) => void
  dark?: boolean
}

export default function NotFoundPage({ onNavigate, dark = false }: NotFoundPageProps) {
  const bg = dark ? '#111112' : PAPER
  const numeral = dark ? '#f5f5f5' : INK
  const heading = dark ? '#f5f5f5' : INK
  const muted = dark ? '#a1a1aa' : '#8b8b8b'

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: bg, transition: 'background 0.4s ease' }}
    >
      {/* ── collage layer ──
          Pieces are positioned as a percentage of the section so the
          composition holds its shape as the viewport scales; the two
          heavy cutouts drop away below `lg`, where they would otherwise
          collide with the centred column. */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <LightningDoodle
          className="absolute"
          style={{ top: '4%', left: '59%', width: 'clamp(90px, 10vw, 150px)' }}
        />
        <MegaphoneCutout
          className="absolute hidden lg:block"
          style={{ top: '40%', left: '10%', width: 'clamp(230px, 22vw, 320px)', transform: 'rotate(-6deg)' }}
        />
        <ReachingHand
          className="absolute hidden lg:block"
          style={{ top: '29%', right: '0%', width: 'clamp(290px, 29vw, 410px)' }}
        />
        <MagnifyingGlass
          className="absolute"
          style={{ bottom: '6%', left: '53%', width: 'clamp(140px, 15vw, 215px)', transform: 'rotate(-6deg)' }}
        />
      </div>

      {/* ── centred content column ── */}
      <Reveal
        stagger={0.12}
        y={26}
        delay={0.1}
        className="relative mx-auto flex flex-col items-center justify-center text-center px-5"
        style={{ maxWidth: 1180, minHeight: '100vh', paddingTop: 'clamp(120px, 14vh, 170px)', paddingBottom: 'clamp(150px, 20vh, 230px)' }}
      >
        <h1
          className="m-0 leading-[0.86]"
          style={{
            fontFamily: SANS,
            fontWeight: 600,
            color: numeral,
            fontSize: 'clamp(110px, 20vw, 270px)',
            letterSpacing: '-0.02em',
          }}
        >
          404
        </h1>

        <p
          className="m-0"
          style={{
            fontFamily: SANS,
            fontWeight: 600,
            color: heading,
            fontSize: 'clamp(20px, 2.3vw, 28px)',
            marginTop: 'clamp(28px, 5vh, 56px)',
            letterSpacing: '-0.01em',
          }}
        >
          Oops! That page can’t be found.
        </p>

        <p
          className="m-0"
          style={{
            fontFamily: BODY,
            color: muted,
            fontSize: 'clamp(14px, 1.15vw, 16px)',
            lineHeight: 1.75,
            marginTop: 16,
            maxWidth: 520,
          }}
        >
          The page you are looking is not available or has been removed. Try going to
          Home Page by using the button below.
        </p>

        <a
          href={PAGE_TO_PATH['Home'] ?? '/'}
          onClick={(e) => { e.preventDefault(); onNavigate('Home') }}
          className="zp-btn inline-flex items-center justify-center rounded-full no-underline"
          style={{
            marginTop: 30,
            padding: '17px 34px',
            background: dark ? '#f5f5f5' : '#ffffff',
            color: dark ? '#111112' : INK,
            fontFamily: BODY,
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: '0.09em',
            boxShadow: dark ? '0 10px 26px rgba(0,0,0,0.5)' : '0 10px 26px rgba(13,17,40,0.08)',
          }}
        >
          BACK TO HOME
        </a>
      </Reveal>
    </section>
  )
}
