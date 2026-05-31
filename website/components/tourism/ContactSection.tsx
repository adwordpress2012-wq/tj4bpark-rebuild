import { SectionHeading } from "@/components/ui/SectionHeading";
import type { TourismSectionIntro, TourismSite } from "@/lib/tourism-template";

type ContactSectionProps = {
  intro: TourismSectionIntro;
  site: TourismSite;
};

export function ContactSection({ intro, site }: ContactSectionProps) {
  return (
    <section id="contact" className="scroll-mt-20 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading {...intro} />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="rounded-3xl border border-tan/40 bg-cream p-6 shadow-sm sm:p-8">
            <dl className="space-y-5 text-sm sm:text-base">
              <div>
                <dt className="font-bold text-forest">Phone</dt>
                <dd className="mt-1">
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:underline">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-bold text-forest">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${site.email}`} className="hover:underline">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-bold text-forest">Location</dt>
                <dd className="mt-1">{site.address}</dd>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-forest px-4 py-2.5 text-sm font-bold text-white hover:bg-forest-dark"
                >
                  Facebook
                </a>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-forest px-4 py-2.5 text-sm font-bold text-white hover:bg-forest-dark"
                >
                  Instagram
                </a>
              </div>
            </dl>
          </div>

          <a
            href={site.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-[280px] flex-col justify-between rounded-3xl border border-forest/20 bg-linear-to-br from-tan-light via-cream to-forest/20 p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8"
            aria-label="Open TJ's 4B Park & Camping location in Google Maps"
          >
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-gold">
                Google Maps
              </p>
              <p className="mt-3 max-w-md text-2xl font-extrabold text-forest">
                Map embed coming soon
              </p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-charcoal/70">
                Use this map link placeholder for directions to {site.address}.
              </p>
            </div>
            <span className="mt-8 inline-flex w-fit rounded-xl bg-gold px-4 py-2.5 text-sm font-bold text-charcoal group-hover:bg-gold-light">
              Open map link
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
