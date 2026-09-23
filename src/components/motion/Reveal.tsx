import { useRef, type ComponentPropsWithoutRef, type CSSProperties, type ElementType, type ReactNode } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, whenMotionReady, EASE, DUR, START } from './motion'

interface RevealProps extends Omit<ComponentPropsWithoutRef<'div'>, 'children' | 'style'> {
  children: ReactNode
  /** Vertical travel in px. Negative drops in from above. */
  y?: number
  /** Horizontal travel in px. */
  x?: number
  /** Start scale — use sparingly, and only on media or cards. */
  scale?: number
  /**
   * Clips the content and slides it up out of a hard edge. The safe choice
   * for gradient / background-clipped text, which cannot be safely split.
   */
  mask?: boolean
  delay?: number
  duration?: number
  /** When set, the DIRECT CHILDREN animate in sequence instead of the wrapper. */
  stagger?: number
  /** ScrollTrigger start. Defaults to `top 85%`. */
  start?: string
  /** Replay every time it scrolls back into view. Off by default. */
  repeat?: boolean
  as?: ElementType
  className?: string
  style?: CSSProperties
}

/**
 * Scroll-triggered entrance for a block of content.
 *
 * Animating the wrapper (rather than each child) keeps the DOM flat, so the
 * common case costs one tween. Pass `stagger` when the children should arrive
 * one after another — a card grid, a feature list, a row of stats.
 */
export default function Reveal({
  children,
  y = 28,
  x = 0,
  scale,
  mask = false,
  delay = 0,
  duration = DUR.base,
  stagger,
  start = START,
  repeat = false,
  as: Tag = 'div',
  className = '',
  style,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const innerRef = useRef<HTMLSpanElement>(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el) return

      // A masked reveal clips at the wrapper and moves the inner block;
      // otherwise we move the wrapper itself, or its children when staggering.
      const targets: Element[] = mask
        ? innerRef.current
          ? [innerRef.current]
          : []
        : stagger != null
          ? Array.from(el.children)
          : [el]
      if (!targets.length) return

      const mm = gsap.matchMedia()
      let release: (() => void) | undefined

      mm.add(
        {
          reduce: '(prefers-reduced-motion: reduce)',
          full: '(prefers-reduced-motion: no-preference)',
        },
        (ctx) => {
          // Honour the OS setting: content simply appears, fully styled.
          if (ctx.conditions?.reduce) {
            gsap.set(targets, { clearProps: 'all' })
            return
          }

          // Hide immediately so nothing flashes, then hand the tween to the
          // splash gate. Splitting set/to (rather than using `.from()`) is
          // what lets the start state exist before the tween is built.
          gsap.set(targets, {
            opacity: 0,
            // A mask reveal travels its own height, so nothing peeks out.
            y: mask ? '110%' : y,
            x,
            ...(scale != null ? { scale } : null),
            force3D: true,
          })

          release = whenMotionReady(() => {
            gsap.to(targets, {
              opacity: 1,
              y: 0,
              x: 0,
              ...(scale != null ? { scale: 1 } : null),
              duration,
              delay,
              ease: mask ? EASE.text : EASE.out,
              stagger: stagger ?? 0,
              force3D: true,
              // GSAP would otherwise leave `transform: translate(0,0)` inline
              // on every target, and an inline transform outranks the `:hover`
              // rules in the CSS layer — cards would stop lifting once shown.
              clearProps: repeat ? '' : 'transform,opacity,willChange',
              scrollTrigger: {
                trigger: el,
                start,
                once: !repeat,
                toggleActions: repeat ? 'play reverse play reverse' : 'play none none none',
              },
            })
          })
        },
      )

      return () => {
        release?.()
        mm.revert()
      }
    },
    { scope: ref, dependencies: [y, x, scale, mask, delay, duration, stagger, start, repeat] },
  )

  if (mask) {
    return (
      <Tag
        ref={ref}
        className={className}
        {...rest}
        style={{
          // The clip would otherwise shave descenders off the last line.
          overflow: 'hidden',
          paddingBottom: '0.14em',
          marginBottom: '-0.14em',
          ...style,
        }}
      >
        <span ref={innerRef} style={{ display: 'block', willChange: 'transform' }}>
          {children}
        </span>
      </Tag>
    )
  }

  return (
    <Tag ref={ref} className={className} style={style} {...rest}>
      {children}
    </Tag>
  )
}
