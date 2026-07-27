import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#123c34]/95 backdrop-blur border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

            <Link href="/" className="text-white font-bold text-xl">
              TJ&apos;s 4B Park
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-white font-medium">
              <Link href="/">Home</Link>
              <Link href="/stay">Stay</Link>
              <Link href="/explore">Explore</Link>

              <a
                href="https://tjs4bpark.guestmateworkspace.com.au"
                target="_blank"
                rel="noreferrer"
              >
                What&apos;s On
              </a>

              <Link href="/gallery">Gallery</Link>
              <Link href="/bookings">Bookings</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/contact">Contact</Link>
            </nav>

            <a
              href="#book"
              className="hidden md:inline-flex bg-amber-400 text-green-950 font-bold px-5 py-3 rounded-md"
            >
              Book Your Stay
            </a>

          </div>
        </header>

        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}