import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import GuestMateSidebar from '@/components/layout/GuestMateSidebar'
import GuestMateTopBar from '@/components/layout/GuestMateTopBar'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <GuestMateSidebar />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <GuestMateTopBar userEmail={user.email ?? ''} />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  )
}
