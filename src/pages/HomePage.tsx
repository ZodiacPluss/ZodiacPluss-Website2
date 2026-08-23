import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import CredentialsSection from '@/components/CredentialsSection'
import AppShowcaseSection from '@/components/AppShowcaseSection'
import EAPSection from '@/components/EAPSection'
import ZodiacMissionSection from '@/components/ZodiacMissionSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import HomeAboutTeamSection from '@/components/HomeAboutTeamSection'
import BrandsMarquee from '@/components/BrandsMarquee'
import ScrollVideoParallax from '@/components/ScrollVideoParallax'

const PARALLAX_VIDEO = 'https://res.cloudinary.com/pp0lpskp/video/upload/v1787222681/Background_video1_btmhwb.mp4'

interface HomePageProps {
  onNavigate: (page: string) => void
  dark?: boolean
}

export default function HomePage({ onNavigate, dark }: HomePageProps) {
  return (
    <div className="w-full overflow-hidden pb-16 md:pb-0 transition-colors duration-300">
      {/* Hero — excluded from parallax wrapper */}
      <HeroSection onNavigate={onNavigate} />
      <BrandsMarquee dark={dark} />

      {/* Parallax video sections */}
      <ScrollVideoParallax videoUrl={PARALLAX_VIDEO} overlayOpacity={0.6}>
        <CredentialsSection dark={dark} />
        <AboutSection onNavigate={onNavigate} dark={dark} />
        <AppShowcaseSection />
        <EAPSection onNavigate={onNavigate} dark={dark} />
        <ZodiacMissionSection onNavigate={onNavigate} dark={dark} />
        <div className="pb-6">
          <TestimonialsSection dark={dark} />
        </div>
        <HomeAboutTeamSection onNavigate={onNavigate} dark={dark} />
      </ScrollVideoParallax>
    </div>
  )
}

