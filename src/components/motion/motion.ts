/* ──────────────────────────────────────────────────────────────────────
   Motion core
   ---------------------------------------------------------------------
   One place to register GSAP plugins and to hold the timing/easing
   vocabulary every animated section shares, so the whole site moves with
   a single personality instead of each page inventing its own.

   House style:
     · entrances are short (0.6–0.9s), never bouncy, always "out" eased
     · things travel a small distance (16–40px) — motion hints, it doesn't
       carry the layout
     · everything is opt-out under `prefers-reduced-motion: reduce`
   ────────────────────────────────────────────────────────────────────── */
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

let registered = false

/** Registers plugins exactly once, on the client only. */
export function initMotion() {
  if (registered || typeof window === 'undefined') return
  gsap.registerPlugin(ScrollTrigger, SplitText)
  registered = true

  // Late-loading images (most sections open with one) change the document
  // height after triggers are measured, which leaves reveals firing at the
  // wrong scroll position. A refresh once everything has settled fixes it.
  window.addEventListener('load', () => ScrollTrigger.refresh())
}

initMotion()

/** Easing vocabulary. `out` is the default for anything entering. */
export const EASE = {
  out: 'power3.out',
  soft: 'power2.out',
  text: 'expo.out',
  inOut: 'power2.inOut',
} as const

/** Duration vocabulary, in seconds. */
export const DUR = {
  fast: 0.4,
  base: 0.7,
  slow: 0.95,
} as const

/** Matching curve for CSS-driven hover states, so JS and CSS motion agree. */
export const CSS_EASE = 'cubic-bezier(0.22, 1, 0.36, 1)'

/** Default ScrollTrigger start — fires a little before the section is fully in view. */
export const START = 'top 85%'

/* ── Splash gate ────────────────────────────────────────────────────────
   The intro splash covers the viewport for ~3s. Anything above the fold
   would otherwise play its entrance behind that white overlay and be fully
   settled by the time the user first sees the page. While the splash is up,
   sections are held at their start state and released together when it
   lifts. Below-the-fold sections are unaffected — they are scrolled to long
   after the gate has opened.
   ──────────────────────────────────────────────────────────────────────── */
export const SPLASH_DONE = 'zp:splash-done'

export function setSplashActive(active: boolean) {
  if (typeof document === 'undefined') return
  if (active) {
    document.documentElement.dataset.zpSplash = 'active'
  } else {
    delete document.documentElement.dataset.zpSplash
    window.dispatchEvent(new Event(SPLASH_DONE))
  }
}

/**
 * Runs `cb` now, or as soon as the splash has finished. Returns a cleanup
 * that cancels a pending call.
 */
export function whenMotionReady(cb: () => void): () => void {
  if (typeof document === 'undefined') {
    cb()
    return () => {}
  }
  if (document.documentElement.dataset.zpSplash !== 'active') {
    cb()
    return () => {}
  }
  window.addEventListener(SPLASH_DONE, cb, { once: true })
  return () => window.removeEventListener(SPLASH_DONE, cb)
}

export function prefersReducedMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Re-measures every trigger. Call after a route change or any layout shift
 * that GSAP cannot observe on its own.
 */
export function refreshMotion() {
  if (typeof window === 'undefined') return
  ScrollTrigger.refresh()
}

export { gsap, ScrollTrigger, SplitText }
