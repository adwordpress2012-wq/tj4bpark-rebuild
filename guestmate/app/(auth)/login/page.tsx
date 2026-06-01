import LoginForm from './LoginForm'

export default function LoginPage() {
  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-1">
            GuestMate
          </p>
          <h1 className="text-2xl font-bold text-charcoal">TJ&apos;s 4B Park</h1>
          <p className="text-sm text-gray-400 mt-1">Operations Dashboard</p>
        </div>
        <LoginForm />
        <p className="text-center text-xs text-gray-300 mt-6">
          Powered by DOS · TourismOS
        </p>
      </div>
    </div>
  )
}
