import ComingSoonSection from '@/components/ComingSoonSection'

interface ComingSoonPageProps {
  onNavigate?: (page: string) => void
  dark?: boolean
}

export default function ComingSoonPage({ onNavigate }: ComingSoonPageProps) {
  return (
    <div className="min-h-screen w-full bg-white flex items-center">
      <ComingSoonSection onNavigate={onNavigate} />
    </div>
  )
}
