type Props = {
  userEmail: string
}

export default function GuestMateTopBar({ userEmail }: Props) {
  return (
    <header className="h-14 bg-white border-b border-gray-100 flex items-center justify-end px-6 flex-shrink-0 gap-4">
      <span className="text-sm text-gray-400">{userEmail}</span>
    </header>
  )
}
