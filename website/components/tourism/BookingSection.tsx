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
            className="overflow-hidden rounded-2xl border-2 border-dashed border-forest/30 bg-cream"
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

            <div className="flex min-h-[320px] flex-col items-center justify-center gap-4 p-8 text-center sm:min-h-[380px]">
              <div className="grid w-full max-w-sm grid-cols-7 gap-1 opacity-40">
                {Array.from({ length: 35 }).map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-md ${
                      i % 7 === 5 || i % 7 === 6
                        ? "bg-gold/40"
                        : i > 10 && i < 18
                          ? "bg-forest/30"
                          : "bg-tan/30"
                    }`}
                  />
                ))}
              </div>
              <p className="max-w-md text-sm leading-relaxed text-charcoal/70">
                <strong className="text-forest">DOS Calendar</strong>{" "}
                {booking.calendar.description.replace(/^DOS Calendar\s*/, "")}
              </p>
            </div>
          </div>

          <TourismCtaGroup
            ctas={booking.ctas}
            className="mt-8 items-center sm:justify-center"
          />

          <p className="mt-6 text-center text-sm text-charcoal/60">
            {booking.footnote}{" "}
            <a href={site.chatHref} className="font-bold text-forest hover:underline">
              Chat with Micah
            </a>{" "}
            - even after hours.
          </p>
        </div>
      </div>
    </section>
  );
}
