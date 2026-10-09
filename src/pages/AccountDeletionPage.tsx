import { useEffect, useState } from 'react'
import AccountDeletionHeader from '@/components/account-deletion/AccountDeletionHeader'
import AccountDeletionFooter from '@/components/account-deletion/AccountDeletionFooter'
import DeletionRequestForm from '@/components/account-deletion/DeletionRequestForm'
import FlowHero from '@/components/account-deletion/FlowHero'
import OtpVerification from '@/components/account-deletion/OtpVerification'
import DeletionConfirmation from '@/components/account-deletion/DeletionConfirmation'
import DeletionSuccess from '@/components/account-deletion/DeletionSuccess'
import DeletionInformation from '@/components/account-deletion/DeletionInformation'
import type { AccountType } from '@/utils/accountDeletionApi'
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

type Step = 'details' | 'otp' | 'confirm' | 'done'

/**
 * Flow state lives in memory only. A refresh restarts at 'details', and
 * 'confirm' is reachable solely through a successful OTP check, so the
 * confirmation screen can't be opened directly.
 */
export default function AccountDeletionPage({ onNavigate }: AccountDeletionPageProps) {
  const [step, setStep] = useState<Step>('details')
  const [accountType, setAccountType] = useState<AccountType>('user')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [step])

  return (
    <div className="flex min-h-screen flex-col bg-[#f7fbfc] font-['Inter',sans-serif] text-[#10213a] antialiased">
      <AccountDeletionHeader onNavigate={onNavigate} />

      <main className="flex-1">
        <section className="relative">
          <HeroBackdrop />
          <div className="relative mx-auto w-full max-w-[1320px] px-5 pb-12 pt-12 sm:px-8 sm:pb-16 sm:pt-14 lg:pt-12">
            {step === 'details' && (
              <>
                <FlowHero
                  align="center"
                  title="Request"
                  accent="Account Deletion"
                  description="Tell us who you are and enter your registered phone number to begin the account deletion process."
                />
                <div className="mt-8 lg:mt-7">
                  <DeletionRequestForm
                    initialType={accountType}
                    initialPhone={phone}
                    onOtpSent={(type, number) => {
                      setAccountType(type)
                      setPhone(number)
                      setStep('otp')
                    }}
                  />
                </div>
              </>
            )}

            {step === 'otp' && (
              <>
                <FlowHero
                  title="Verify Your"
                  accent="Identity"
                  description="We have sent a 6-digit OTP to your registered phone number. Please enter the code below to continue with your account deletion request."
                />
                <div className="mt-8 lg:mt-10">
                  <OtpVerification accountType={accountType} phone={phone} onVerified={() => setStep('confirm')} />
                </div>
              </>
            )}

            {step === 'confirm' && (
              <>
                <FlowHero
                  title="Confirm Account"
                  accent="Deletion"
                  description="Please review the information below before submitting your request."
                />
                <div className="mt-8">
                  <DeletionConfirmation
                    accountType={accountType}
                    phone={phone}
                    onBack={() => setStep('otp')}
                    onSubmitted={() => setStep('done')}
                  />
                </div>
              </>
            )}

            {step === 'done' && (
              <>
                <FlowHero
                  title="Request"
                  accent="Submitted"
                  description="We have received your account deletion request."
                />
                <div className="mt-8">
                  <DeletionSuccess accountType={accountType} onHome={() => onNavigate?.('Home')} />
                </div>
              </>
            )}
          </div>
        </section>

        {step === 'details' && (
          <div className="pb-10 pt-4 lg:pb-8">
            <DeletionInformation />
          </div>
        )}
      </main>

      <AccountDeletionFooter onNavigate={onNavigate} />
    </div>
  )
}
