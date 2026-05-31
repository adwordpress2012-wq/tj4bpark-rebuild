import Link from "next/link";
import type { TourismHomeTemplate } from "@/lib/tourism-template";

type TourismFooterProps = {
  template: TourismHomeTemplate;
};

export function TourismFooter({ template }: TourismFooterProps) {
  const year = new Date().getFullYear();
  const { site, nav, footer } = template;

  return (
    <footer className="border-t border-tan/40 bg-charcoal text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-xl font-extrabold text-gold">{site.name}</p>
            <p className="mt-2 text-sm text-white/70">{site.location}</p>
            <p className="mt-1 text-sm text-white/60">{site.address}</p>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {footer.description}
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
                <a href={`mailto:${site.email}`} className="text-white/70 hover:text-gold">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-gold"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-gold"
                >
                  Instagram
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
                <Link href={site.bookHref} className="text-white/70 hover:text-gold">
                  Book your stay
                </Link>
              </li>
              {nav
                .filter((link) => link.href !== site.bookHref)
                .map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/70 hover:text-gold">
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-xs text-white/50 sm:flex-row sm:text-left">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p>{footer.note}</p>
        </div>
      </div>
    </footer>
  );
}
