import Link from "next/link";
import type { TourismSite } from "@/lib/tourism-template";

type MobileBookingBarProps = {
  site: TourismSite;
};

export function MobileBookingBar({ site }: MobileBookingBarProps) {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-[90] border-t border-tan/40 bg-cream/95 px-4 py-3 backdrop-blur-md md:hidden"
      aria-label="Quick booking actions"
    >
      <div className="mx-auto flex max-w-lg gap-2">
        <Link
          href={site.bookHref}
          className="flex min-h-11 flex-1 items-center justify-center rounded-xl bg-gold px-4 text-sm font-bold text-charcoal shadow-sm"
          aria-label="Go to TJ's 4B Park booking section"
        >
          Book Now
        </Link>
        <a
          href={`tel:${site.phone.replace(/\s/g, "")}`}
          className="flex min-h-11 flex-1 items-center justify-center rounded-xl bg-[#25D366] px-4 text-sm font-bold text-white"
          aria-label="Call TJ's 4B Park & Camping"
        >
          Call
        </a>
        <Link
          href="#contact"
          className="flex min-h-11 flex-1 items-center justify-center rounded-xl bg-forest px-4 text-sm font-bold text-white"
          aria-label="Go to contact section"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
