import LegalPageLayout, { type LegalDocument } from '@/components/LegalPageLayout'

interface TermsPageProps {
  onNavigate?: (page: string) => void
  dark?: boolean
}

const CONTACT_EMAIL = 'support@zodiacpluss.com'

// Placeholder until the final terms are supplied (or served by the backend).
const TERMS: LegalDocument = {
  title: 'Terms & Conditions',
  subtitle: 'Please read these terms carefully before using ZodiacPluss and its services.',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      body: 'Our Terms & Conditions are being finalised and will be published on this page shortly.',
    },
    {
      id: 'contact-us',
      title: 'Contact Us',
      body: `If you have any questions in the meantime, please contact us at ${CONTACT_EMAIL}.`,
    },
  ],
}

export default function TermsPage({ onNavigate }: TermsPageProps) {
  return <LegalPageLayout document={TERMS} onNavigate={onNavigate} />
}
