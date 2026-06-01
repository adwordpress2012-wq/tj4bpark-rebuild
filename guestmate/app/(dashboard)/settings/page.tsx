import PageHeader from '@/components/ui/PageHeader'
import EmptyState from '@/components/ui/EmptyState'

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Settings" />
      <EmptyState
        title="Settings — Phase 1+"
        description="Park name, address, contact details, and notification preferences will be configurable here."
      />
    </div>
  )
}
