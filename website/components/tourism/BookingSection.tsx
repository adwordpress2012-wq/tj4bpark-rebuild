import { SectionHeading } from "@/components/ui/SectionHeading";
import { TourismCtaGroup } from "@/components/tourism/TourismCtaGroup";
import type { TourismBooking, TourismSite } from "@/lib/tourism-template";

type BookingSectionProps = {
  booking: TourismBooking;
  site: TourismSite;
};

export function BookingSection({ booking, site }: BookingSectionProps) {
  return (
    <section id="book" className="scroll-mt-20 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading {...booking.intro} />

        <div className="mx-auto mt-10 max-w-3xl">
          <div
            id="hipcamp-coming-soon"
            className="overflow-hidden rounded-2xl border border-forest/20 bg-cream shadow-sm"
            role="region"
            aria-label={booking.calendar.ariaLabel}
          >
            <div className="border-b border-forest/10 bg-forest px-5 py-4 text-white">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gold-light">
                    {booking.calendar.eyebrow}
                  </p>
                  <p className="text-lg font-extrabold">{booking.calendar.title}</p>
                </div>
                <span className="rounded-lg bg-gold px-3 py-1 text-xs font-bold text-charcoal">
                  {booking.calendar.badge}
                </span>
              </div>
            </div>

            <div className="p-6 text-center sm:p-8">
              <p className="mx-auto max-w-xl text-base leading-relaxed text-charcoal/75">
                {booking.calendar.description}
              </p>
              <div className="mt-6 grid gap-3 rounded-2xl bg-white p-4 text-left text-sm text-charcoal/75 sm:grid-cols-2">
                <p>
                  <strong className="text-forest">Phone:</strong>{" "}
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:underline">
                    {site.phone}
                  </a>
                </p>
                <p>
                  <strong className="text-forest">Email:</strong>{" "}
                  <a href={`mailto:${site.email}`} className="hover:underline">
                    {site.email}
                  </a>
                </p>
                <p>
                  <strong className="text-forest">Facebook:</strong>{" "}
                  <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Message the page
                  </a>
                </p>
                <p>
                  <strong className="text-forest">Instagram:</strong>{" "}
                  <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    @tjs4bpark
                  </a>
                </p>
              </div>
            </div>
          </div>

          <TourismCtaGroup
            ctas={booking.ctas}
            className="mt-8 items-center sm:justify-center"
          />

          <p className="mt-6 text-center text-sm text-charcoal/60">
            {booking.footnote}
          </p>
        </div>
      </div>
    </section>
  );
}
