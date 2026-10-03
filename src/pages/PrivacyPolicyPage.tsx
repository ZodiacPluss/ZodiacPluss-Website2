import LegalPageLayout, { type LegalDocument, type LegalSection } from '@/components/LegalPageLayout'

interface PrivacyPolicyPageProps {
  onNavigate?: (page: string) => void
  dark?: boolean
}

const LAST_UPDATED = '01 October 2026'
const CONTACT_EMAIL = 'support@zodiacpluss.com'

const SECTIONS: readonly LegalSection[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    body: 'Welcome to ZodiacPluss. This Privacy Policy explains how we collect, use, disclose and safeguard your information when you use our website, mobile application and related services.',
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    body: 'We may collect personal information that you provide to us, such as your name, email address, phone number, date of birth and details related to consultations or sessions. We also collect certain information automatically, such as device information, usage data and cookies.',
  },
  {
    id: 'how-we-use-your-information',
    title: 'How We Use Your Information',
    body: 'We use the information we collect to provide and improve our services, personalize your experience, connect you with astrologers or therapists, process payments, send important updates and ensure the security of our platform.',
  },
  {
    id: 'sharing-of-information',
    title: 'Sharing of Information',
    body: 'We do not sell your personal information. We may share your information with trusted service providers who help us operate our platform, such as payment processors, cloud services and communication tools, only for legitimate business purposes.',
  },
  {
    id: 'data-security',
    title: 'Data Security',
    body: 'We implement industry-standard security measures to protect your information from unauthorized access, loss, misuse or alteration. However, no method of transmission over the internet is 100% secure.',
  },
  {
    id: 'your-rights',
    title: 'Your Rights',
    body: 'You have the right to access, update or delete your personal information. You may also restrict or object to certain data processing activities. To exercise your rights, please contact us using the details below.',
  },
  {
    id: 'cookies-and-tracking',
    title: 'Cookies and Tracking',
    body: 'We use cookies and similar technologies to enhance your experience, understand usage and improve our services. You can manage your cookie preferences through your browser settings.',
  },
  {
    id: 'third-party-services',
    title: 'Third Party Services',
    body: 'Our platform may contain links to third party websites or services. We are not responsible for the privacy practices of such third parties.',
  },
  {
    id: 'childrens-privacy',
    title: 'Children’s Privacy',
    body: 'Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children.',
  },
  {
    id: 'policy-updates',
    title: 'Policy Updates',
    body: 'We may update this Privacy Policy from time to time. Any changes will be posted on this page with the revised date.',
  },
  {
    id: 'contact-us',
    title: 'Contact Us',
    body: `If you have any questions about this Privacy Policy, please contact us at ${CONTACT_EMAIL}.`,
  },
]

const PRIVACY_POLICY: LegalDocument = {
  title: 'Privacy Policy',
  subtitle: 'We value your trust and are committed to protecting your personal information.',
  lastUpdated: LAST_UPDATED,
  sections: SECTIONS,
}

export default function PrivacyPolicyPage({ onNavigate }: PrivacyPolicyPageProps) {
  return <LegalPageLayout document={PRIVACY_POLICY} onNavigate={onNavigate} />
}
