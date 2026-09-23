import { useRef, type ComponentPropsWithoutRef, type CSSProperties, type ElementType, type ReactNode } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, SplitText, whenMotionReady, EASE, START } from './motion'

interface TextRevealProps extends Omit<ComponentPropsWithoutRef<'div'>, 'children' | 'style'> {
  children: ReactNode
  /** `lines` reads best on headings; `words` on short display copy. */
  split?: 'lines' | 'words' | 'chars'
  delay?: number
  duration?: number
  stagger?: number
  start?: string
  as?: ElementType
  className?: string
  style?: CSSProperties
}

/**
 * Headline reveal: the text is split, then each line (or word) rises out of
 * its own clipping mask. This is the one piece of motion the eye actually
 * reads as "typeset", so it is reserved for section headings.
 *
 * Do not point this at text painted with `background-clip: text`. Splitting
 * moves the glyphs into child spans, which have no background of their own
 * and render invisible. Use `<Reveal mask>` for those headings instead.
 */
export default function TextReveal({
  children,
  split = 'lines',
  delay = 0,
  duration = 0.9,
  stagger = 0.09,
  start = START,
  as: Tag = 'div',
  className = '',
  style,
  ...rest
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null)

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

          let instance: SplitText | null = null
          let cancelled = false
          let release: (() => void) | undefined

          // Fonts load late; splitting before they land measures the fallback
          // face and wraps lines in the wrong places.
          const run = () => {
            if (cancelled) return
            instance = SplitText.create(el, {
              type: split,
              mask: split,
              linesClass: 'zp-split-line',
              autoSplit: true,
              onSplit: (self) => {
                const parts = self[split]
                gsap.set(parts, { yPercent: 110, opacity: 0, force3D: true })
                release = whenMotionReady(() => {
                  gsap.to(parts, {
                    yPercent: 0,
                    opacity: 1,
                    duration,
                    delay,
                    ease: EASE.text,
                    stagger,
                    force3D: true,
                    scrollTrigger: { trigger: el, start, once: true },
                  })
                })
              },
            })
          }

          if (document.fonts?.status === 'loaded') run()
          else document.fonts?.ready.then(run) ?? run()

          return () => {
            cancelled = true
            release?.()
            instance?.revert()
          }
        },
      )

      return () => mm.revert()
    },
    { scope: ref, dependencies: [split, delay, duration, stagger, start] },
  )

  return (
    <Tag ref={ref} className={className} style={style} {...rest}>
      {children}
    </Tag>
  )
}
