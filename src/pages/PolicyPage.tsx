import { useEffect, useMemo, useState } from 'react'
import LegalPageLayout, { type LegalDocument } from '@/components/LegalPageLayout'
import { POLICY_PAGES, type PolicyPageKey } from '@/data/policies'
import { fetchPolicy, formatPolicyDate, parsePolicyMarkdown, type PolicyRecord } from '@/utils/policyApi'

interface PolicyPageProps {
  policy: PolicyPageKey
  onNavigate?: (page: string) => void
}

export default function PolicyPage({ policy, onNavigate }: PolicyPageProps) {
  const config = POLICY_PAGES[policy]
  const [record, setRecord] = useState<PolicyRecord>(config.snapshot)

  // Show the bundled snapshot immediately, then swap in the live text.
  // Any failure (offline, 404, cold-start timeout) silently keeps the snapshot.
  useEffect(() => {
    setRecord(config.snapshot)
    const controller = new AbortController()

    fetchPolicy(config.slug, controller.signal).then((live) => {
      if (live && !controller.signal.aborted) setRecord(live)
    })

    return () => controller.abort()
  }, [config])

  const document = useMemo<LegalDocument>(() => {
    const parsed = parsePolicyMarkdown(record.content)
    return {
      title: parsed.title || record.title || policy,
      subtitle: config.subtitle,
      lastUpdated: formatPolicyDate(record.updatedAt || record.effectiveFrom),
      version: record.version || undefined,
      intro: parsed.intro,
      sections: parsed.sections,
    }
  }, [record, config, policy])

  return <LegalPageLayout document={document} onNavigate={onNavigate} />
}
