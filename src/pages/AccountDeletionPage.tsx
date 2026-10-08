import AccountDeletionHeader from '@/components/account-deletion/AccountDeletionHeader'
import AccountDeletionFooter from '@/components/account-deletion/AccountDeletionFooter'
import DeletionRequestForm from '@/components/account-deletion/DeletionRequestForm'
import DeletionInformation from '@/components/account-deletion/DeletionInformation'
import { SparkleIcon } from '@/components/account-deletion/icons'

interface AccountDeletionPageProps {
  onNavigate?: (page: string) => void
}

/** Soft blue/green washes, sweeping curves and sparkles; purely decorative. */
function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 55% at 0% 38%, rgba(160,208,240,.55), rgba(160,208,240,0) 70%), radial-gradient(55% 70% at 100% 20%, rgba(170,225,160,.6), rgba(170,225,160,0) 70%), linear-gradient(180deg, #eef6fc 0%, #f6fbf7 100%)',
        }}
      />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 640" preserveAspectRatio="none" fill="none">
        <path d="M-40 120C120 230 300 420 470 640" stroke="#b9d9ee" strokeOpacity=".7" strokeWidth="1.2" />
        <path d="M-40 330C220 300 420 420 560 640" stroke="#b9d9ee" strokeOpacity=".5" strokeWidth="1.2" />
        <path d="M1480 80C1330 260 1160 420 940 640" stroke="#cfe7c6" strokeOpacity=".9" strokeWidth="1.2" />
        <path d="M1480 230C1280 330 1120 470 1020 640" stroke="#cfe7c6" strokeOpacity=".6" strokeWidth="1.2" />
        <path d="M1440 300C1300 360 1160 520 1100 640H1440z" fill="#d6efcf" fillOpacity=".55" />
        <path d="M0 330C140 340 260 420 330 640H0z" fill="#cde6f6" fillOpacity=".5" />
      </svg>
      <SparkleIcon className="absolute right-[10%] top-[20%] hidden h-14 w-14 text-[#b4e6c4] lg:block" />
      <SparkleIcon className="absolute left-[3%] top-[78%] hidden h-14 w-14 text-[#b9e7d2] opacity-80 lg:block" />
      <SparkleIcon className="absolute right-[8%] top-[9%] h-12 w-12 text-[#b4e6c4] opacity-80 lg:hidden" />
    </div>
  )
}

export default function AccountDeletionPage({ onNavigate }: AccountDeletionPageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7fbfc] font-['Inter',sans-serif] text-[#10213a] antialiased">
      <AccountDeletionHeader onNavigate={onNavigate} />

      <main className="flex-1">
        <section className="relative">
          <HeroBackdrop />
          <div className="relative mx-auto w-full max-w-[1320px] px-5 pb-10 pt-12 sm:px-8 sm:pb-12 sm:pt-14 lg:pt-12">
            <div className="mx-auto max-w-[860px] text-left lg:text-center">
              <p className="text-[13px] font-medium uppercase tracking-[0.3em] text-[#4d5b6b]">Account &amp; Privacy</p>
              <h1 className="mt-4 font-['Playfair_Display',serif] text-[44px] font-bold leading-[1.12] tracking-[-0.01em] sm:text-[56px] lg:mt-3 lg:text-[58px] lg:leading-[1.1]">
                Request <br className="lg:hidden" />
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(90deg, #1a73d9 0%, #2fb8a8 55%, #5fcf7a 100%)' }}
                >
                  Account Deletion
                </span>
              </h1>
              <p className="mt-5 max-w-[34rem] text-[17px] leading-[1.6] text-[#3b4a5c] sm:text-[18px] lg:mx-auto lg:max-w-none lg:text-[17px]">
                Tell us who you are and enter your registered phone number to begin the account deletion process.
              </p>
            </div>

            <div className="mt-8 lg:mt-7">
              <DeletionRequestForm />
            </div>
          </div>
        </section>

        <div className="pb-10 pt-4 lg:pb-8">
          <DeletionInformation />
        </div>
      </main>

      <AccountDeletionFooter onNavigate={onNavigate} />
    </div>
  )
}
