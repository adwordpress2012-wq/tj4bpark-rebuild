import Link from "next/link";
import { site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-tan/40 bg-charcoal text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-xl font-extrabold text-gold">{site.name}</p>
            <p className="mt-2 text-sm text-white/70">{site.location}</p>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Family owned. Over 1,000 acres of bush, tracks and good times.
              Live life to its fullest — we&apos;re looking forward to seeing you
              there.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-gold-light">
              Get in touch
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="font-semibold hover:text-gold"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneAlt.replace(/\s/g, "")}`}
                  className="text-white/70 hover:text-gold"
                >
                  {site.phoneAlt}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-white/70 hover:text-gold"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#25D366] hover:underline"
                >
                  WhatsApp us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-gold-light">
              Quick links
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="#book" className="text-white/70 hover:text-gold">
                  Book your stay
                </Link>
              </li>
              <li>
                <Link href="#activities" className="text-white/70 hover:text-gold">
                  Activities
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-white/70 hover:text-gold">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href={site.micahSectionHref} className="text-white/70 hover:text-gold">
                  About Micah
                </Link>
              </li>
              <li>
                <Link href={site.chatHref} className="text-white/70 hover:text-gold">
                  Chat with Micah
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-white/70 hover:text-gold">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-xs text-white/50 sm:flex-row sm:text-left">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>
            Website rebuild · DOS Calendar &amp; Micah SCW coming soon
          </p>
        </div>
      </div>
    </footer>
  );
}
