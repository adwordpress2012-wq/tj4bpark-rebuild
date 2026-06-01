import PageHeader from '@/components/ui/PageHeader'
import EmptyState from '@/components/ui/EmptyState'

export default function GuestsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Guests" />
      <EmptyState
        title="Guests — Phase 2"
        description="Guest profiles — name, mobile, email, source, notes, and booking history — will appear here once bookings are added."
      />
    </div>
  )
}
