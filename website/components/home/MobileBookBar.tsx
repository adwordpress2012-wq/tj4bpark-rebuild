import Link from "next/link";
import { site } from "@/lib/content";

export function MobileBookBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[90] border-t border-tan/40 bg-cream/95 px-4 py-3 backdrop-blur-md md:hidden"
      aria-label="Quick booking actions"
    >
      <div className="mx-auto flex max-w-lg gap-2">
        <Link
          href={site.bookHref}
          className="flex min-h-11 flex-1 items-center justify-center rounded-xl bg-gold px-4 text-sm font-bold text-charcoal shadow-sm"
        >
          Book Now
        </Link>
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-11 flex-1 items-center justify-center rounded-xl bg-[#25D366] px-4 text-sm font-bold text-white"
        >
          WhatsApp
        </a>
        <Link
          href={site.chatHref}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest text-white"
          aria-label="Chat with Micah"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
