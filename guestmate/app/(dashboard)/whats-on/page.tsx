import PageHeader from '@/components/ui/PageHeader'
import EmptyState from '@/components/ui/EmptyState'

export default function WhatsOnPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="What's On" />
      <EmptyState
        title="What's On — Phase 4"
        description="Create, publish, and archive events like Easter Weekend, ANZAC Weekend, and 4WD Gatherings here. No developer required."
      />
    </div>
  )
}
