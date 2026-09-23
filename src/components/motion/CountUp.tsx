import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, START } from './motion'

interface CountUpProps {
  to: number
  /** Rendered before/after the number, e.g. `+`, `%`, `K`. */
  suffix?: string
  prefix?: string
  decimals?: number
  duration?: number
  className?: string
  style?: React.CSSProperties
}

/**
 * Counts a statistic up when it scrolls into view. The element is seeded with
 * the final value so that crawlers, and anyone with reduced motion on, read
 * the real number.
 */
export default function CountUp({
  to,
  suffix = '',
  prefix = '',
  decimals = 0,
  duration = 1.6,
  className = '',
  style,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el) return

      const mm = gsap.matchMedia()

      mm.add(
        {
          reduce: '(prefers-reduced-motion: reduce)',
          full: '(prefers-reduced-motion: no-preference)',
        },
        (ctx) => {
          if (ctx.conditions?.reduce) return

          const counter = { value: 0 }
          gsap.to(counter, {
            value: to,
            duration,
            ease: 'power2.out',
            snap: decimals ? { value: 1 / 10 ** decimals } : { value: 1 },
            onUpdate: () => {
              el.textContent = `${prefix}${counter.value.toFixed(decimals)}${suffix}`
            },
            scrollTrigger: { trigger: el, start: START, once: true },
          })
        },
      )

      return () => mm.revert()
    },
    { scope: ref, dependencies: [to, suffix, prefix, decimals, duration] },
  )

  return (
    <span ref={ref} className={className} style={style}>
      {`${prefix}${to.toFixed(decimals)}${suffix}`}
    </span>
  )
}

/** Splits a display string such as `10+`, `24×7` or `98%` into its leading
 *  number and whatever sits either side of it. */
export function parseStat(value: string) {
  const match = value.match(/^(\D*?)(\d+(?:\.\d+)?)(.*)$/s)
  if (!match) return null
  const [, prefix, digits, suffix] = match
  return {
    to: Number(digits),
    prefix,
    suffix,
    decimals: digits.includes('.') ? digits.split('.')[1].length : 0,
  }
}

/**
 * Drop-in for a stat written as text. Counts the numeric part up and leaves
 * any surrounding characters alone; anything that is not a number at all is
 * rendered untouched.
 */
export function StatCount({
  value,
  duration,
  className,
  style,
}: {
  value: string
  duration?: number
  className?: string
  style?: React.CSSProperties
}) {
  const parsed = parseStat(value)
  if (!parsed) return <span className={className} style={style}>{value}</span>
  return (
    <CountUp
      to={parsed.to}
      prefix={parsed.prefix}
      suffix={parsed.suffix}
      decimals={parsed.decimals}
      duration={duration}
      className={className}
      style={style}
    />
  )
}
