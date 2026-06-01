import PageHeader from '@/components/ui/PageHeader'
import EmptyState from '@/components/ui/EmptyState'

export default function BookingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Bookings" />
      <EmptyState
        title="Bookings — Phase 2"
        description="All bookings from Hipcamp and manual entries will be managed here. Arrivals, departures, source, status, and indemnity tracking."
      />
    </div>
  )
}
