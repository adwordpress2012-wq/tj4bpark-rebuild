"use client";

import Link from "next/link";
import { useState } from "react";
import type { TourismNavLink, TourismSite } from "@/lib/tourism-template";

type TourismHeaderProps = {
  site: TourismSite;
  nav: TourismNavLink[];
};

export function TourismHeader({ site, nav }: TourismHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-tan/30 bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="group flex min-w-0 items-center gap-3">
          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest text-lg font-extrabold text-gold shadow-sm"
            aria-hidden
          >
            4B
          </span>
          <span className="min-w-0">
            <span className="block truncate text-base font-extrabold leading-tight text-forest sm:text-lg">
              {site.name}
            </span>
            <span className="block truncate text-xs font-medium text-charcoal/60">
              {site.location}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-charcoal/80 transition-colors hover:text-forest"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={site.bookHref}
            className="hidden rounded-xl bg-gold px-4 py-2.5 text-sm font-bold text-charcoal shadow-sm transition-colors hover:bg-gold-light sm:inline-flex"
            aria-label="Go to TJ's 4B Park booking section"
          >
            Book Now
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-tan/50 bg-white text-charcoal md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="border-t border-tan/30 bg-cream px-4 py-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1">
            {nav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 font-semibold text-charcoal hover:bg-tan-light/50"
                  aria-label={`Go to ${link.label}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href={site.bookHref}
                className="block rounded-xl bg-gold px-4 py-3 text-center font-bold text-charcoal"
                aria-label="Go to TJ's 4B Park booking section"
                onClick={() => setOpen(false)}
              >
                Book Now
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
