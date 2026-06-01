import PageHeader from '@/components/ui/PageHeader'
import EmptyState from '@/components/ui/EmptyState'

export default function CalendarPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Calendar" />
      <EmptyState
        title="Calendar — Phase 3"
        description="Arrivals, departures, and published events will appear here as a colour-coded monthly and weekly view."
      />
    </div>
  )
}
