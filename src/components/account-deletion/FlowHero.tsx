interface FlowHeroProps {
  /** Dark serif part of the title. */
  title: string
  /** Gradient part of the title. */
  accent: string
  description: React.ReactNode
  /** Centered on the entry screen, left-aligned on the later steps (per design). */
  align?: 'center' | 'left'
  /** Break after `title` on mobile so the accent sits on its own line. */
  breakAfterTitle?: boolean
}

export default function FlowHero({ title, accent, description, align = 'left', breakAfterTitle = true }: FlowHeroProps) {
  const center = align === 'center'
  return (
    <div className={`w-full ${center ? 'mx-auto max-w-[860px] lg:text-center' : 'max-w-[900px]'} text-left`}>
      <p className="text-[13px] font-medium uppercase tracking-[0.3em] text-[#4d5b6b]">Account &amp; Privacy</p>
      <h1 className="mt-4 font-['Playfair_Display',serif] text-[42px] font-bold leading-[1.12] tracking-[-0.01em] sm:text-[56px] lg:mt-3 lg:text-[58px] lg:leading-[1.1]">
        {title}{' '}
        {breakAfterTitle && <br className="lg:hidden" />}
        <span
          className="bg-clip-text text-transparent"
          style={{ backgroundImage: 'linear-gradient(90deg, #1a73d9 0%, #2fb8a8 55%, #5fcf7a 100%)' }}
        >
          {accent}
        </span>
      </h1>
      <p
        className={`mt-5 max-w-[34rem] text-[17px] leading-[1.6] text-[#3b4a5c] sm:text-[18px] ${
          center ? 'lg:mx-auto lg:max-w-none lg:text-[17px]' : 'lg:max-w-[52rem] lg:text-[17px]'
        }`}
      >
        {description}
      </p>
    </div>
  )
}
