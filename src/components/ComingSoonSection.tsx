import { ArrowRight, Download, Heart, Leaf, ShieldCheck, Sparkles } from 'lucide-react'
import { Reveal, TextReveal } from '@/components/motion'

const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.zodiacpluss.client'
const UI_IMAGE =
  'https://res.cloudinary.com/o6laufzn/image/upload/v1790786986/app_showcase_ui.png'

const benefits = [
  { label: <>Expert<br />Guidance</>, Icon: Leaf, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { label: <>Mental<br />Wellness</>, Icon: Heart, color: 'text-violet-500', bg: 'bg-violet-50' },
  { label: <>Holistic<br />Support</>, Icon: Sparkles, color: 'text-amber-500', bg: 'bg-amber-50' },
]

export default function ComingSoonSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white text-gray-900">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-6 xl:gap-8">
          <div className="flex flex-col justify-center lg:col-span-6 xl:col-span-5">
            <Reveal y={16} delay={0.05} className="mb-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold tracking-[0.08em] text-emerald-700 sm:text-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                NOW LIVE ON MOBILE
              </span>
            </Reveal>

            <TextReveal
              as="h2"
              className="mb-5 text-4xl font-bold leading-[1.08] tracking-tight text-[#141c2e] sm:text-5xl lg:text-[52px] xl:text-[58px]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              stagger={0.08}
            >
              Your journey to better well-being starts here.
            </TextReveal>

            <Reveal y={20} delay={0.15}>
              <p
                className="mb-7 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Connect with trusted astrologers and licensed therapists for guidance, clarity,
                and holistic wellness.
              </p>
            </Reveal>

            <Reveal
              stagger={0.07}
              y={18}
              delay={0.2}
              className="mb-8 flex items-center justify-between gap-2 sm:gap-4"
            >
              {benefits.map(({ label, Icon, color, bg }, index) => (
                <div key={index} className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl sm:h-14 sm:w-14 ${bg} ${color}`}>
                    <Icon aria-hidden="true" size={27} strokeWidth={1.8} />
                  </span>
                  <span className="text-xs font-medium leading-snug text-slate-600 sm:text-sm lg:text-base">
                    {label}
                  </span>
                  {index < benefits.length - 1 && (
                    <span aria-hidden="true" className="ml-auto h-10 w-px shrink-0 bg-slate-200" />
                  )}
                </div>
              ))}
            </Reveal>

            <Reveal y={22} delay={0.2} className="mb-7">
              <a
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noreferrer"
                className="zp-btn zp-sheen flex w-full items-center justify-center gap-3 rounded-full px-5 py-4 text-center text-base font-bold text-white shadow-[0_12px_28px_rgba(64,180,154,0.25)] transition-shadow hover:shadow-[0_14px_34px_rgba(64,180,154,0.32)] sm:gap-5 sm:px-7 sm:py-5 sm:text-xl"
                style={{
                  background: 'linear-gradient(100deg, #42b7ed 0%, #55c66e 100%)',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                <Download aria-hidden="true" className="shrink-0" size={25} />
                <span>Download ZodiacPluss</span>
                <ArrowRight aria-hidden="true" className="shrink-0" size={27} />
              </a>
            </Reveal>

            <Reveal y={14} delay={0.25}>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-slate-500 sm:gap-x-5 sm:text-sm">
                <ShieldCheck aria-hidden="true" className="shrink-0 text-emerald-600" size={24} />
                <span aria-hidden="true" className="hidden h-6 w-px bg-slate-200 sm:block" />
                <span>Safe</span>
                <span aria-hidden="true" className="text-emerald-600">•</span>
                <span>Trusted Experts</span>
                <span aria-hidden="true" className="text-emerald-600">•</span>
                <span>Your Privacy First</span>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col items-center justify-center lg:col-span-6 lg:items-end xl:col-span-7">
            <Reveal
              x={40}
              y={20}
              scale={0.96}
              duration={1}
              className="relative flex w-full max-w-[560px] justify-center sm:max-w-[640px] md:max-w-[700px] lg:max-w-none lg:justify-end"
            >
              <img
                src={UI_IMAGE}
                alt="ZodiacPluss mobile app interface preview"
                className="h-auto w-full max-w-[580px] object-contain drop-shadow-[0_28px_60px_rgba(0,0,0,0.13)] transition-transform duration-500 hover:scale-[1.02] sm:max-w-[640px] lg:max-w-[680px] lg:origin-right xl:max-w-[760px] 2xl:max-w-[820px]"
              />
            </Reveal>

            <Reveal
              y={20}
              delay={0.3}
              className="mt-6 flex flex-col items-center gap-2.5 sm:mt-8 lg:items-end"
            >
              <div className="flex items-center gap-1.5 text-xs font-medium tracking-wide text-gray-600 sm:text-sm">
                <span>Available now on Google Play</span>
                <span aria-hidden="true" className="text-emerald-500">✦</span>
              </div>
              <a
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Download ZodiacPluss on Google Play"
                className="zp-btn flex items-center gap-2 rounded-xl bg-black px-3.5 py-1.5 text-white shadow-sm hover:bg-gray-800"
              >
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186c-.365-.37-.61-.925-.61-1.606V3.42c0-.68.245-1.236.61-1.606zm11.238 11.241l2.483 2.483-11.45 6.47 8.967-8.953zm2.483-2.11l-2.483 2.483L5.88 4.474l11.45 6.471zm1.053.595l2.673 1.512c.791.448.791 1.177 0 1.625l-2.673 1.512-2.148-2.324 2.148-2.325z" />
                </svg>
                <span className="flex flex-col text-left leading-none">
                  <span className="text-[8px] uppercase tracking-tight text-gray-300">GET IT ON</span>
                  <span className="text-[12px] font-bold tracking-tight text-white">Google Play</span>
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
