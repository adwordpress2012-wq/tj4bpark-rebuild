type Accent = 'forest' | 'gold' | 'blue' | 'amber'

type Props = {
  label: string
  value: number | string
  description?: string
  icon: React.ReactNode
  accent?: Accent
}

const accentStyles: Record<Accent, { bg: string; color: string }> = {
  forest: { bg: 'rgba(47,90,64,0.1)', color: 'var(--forest)' },
  gold:   { bg: 'rgba(201,168,76,0.12)', color: 'var(--gold)' },
  blue:   { bg: 'rgba(59,130,246,0.1)', color: '#3b82f6' },
  amber:  { bg: 'rgba(245,158,11,0.1)', color: '#d97706' },
}

export default function StatCard({ label, value, description, icon, accent = 'forest' }: Props) {
  const styles = accentStyles[accent]
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
        style={{ background: styles.bg, color: styles.color }}
      >
        {icon}
      </div>
      <div className="text-3xl font-bold text-charcoal mb-1">{value}</div>
      <div className="text-sm font-semibold text-gray-700">{label}</div>
      {description && <div className="text-xs text-gray-400 mt-0.5">{description}</div>}
    </div>
  )
}
