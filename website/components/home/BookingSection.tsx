import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/content";

export function BookingSection() {
  return (
    <section id="book" className="scroll-mt-20 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Make it official"
          title="Book your stay"
          description="Bookings are compulsory — we keep numbers limited so everyone has room to breathe. Check availability and lock in your dates below."
        />

        <div className="mx-auto mt-10 max-w-3xl">
          <div
            className="overflow-hidden rounded-2xl border-2 border-dashed border-forest/30 bg-cream"
            aria-label="DOS Calendar booking widget placeholder"
          >
            <div className="border-b border-forest/10 bg-forest px-5 py-4 text-white">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gold-light">
                    Powered by DOS
                  </p>
                  <p className="text-lg font-extrabold">Availability Calendar</p>
                </div>
                <span className="rounded-lg bg-gold px-3 py-1 text-xs font-bold text-charcoal">
                  Placeholder
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
                <strong className="text-forest">DOS Calendar</strong> will live here —
                guests pick dates, see what&apos;s open, and submit a booking without the
                back-and-forth.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href={site.whatsapp} variant="whatsapp" external>
              WhatsApp to Book
            </Button>
            <Button href={`tel:${site.phone.replace(/\s/g, "")}`} variant="primary" external>
              Call {site.phone}
            </Button>
          </div>

          <p className="mt-6 text-center text-sm text-charcoal/60">
            Open mostly Friday–Sunday. Questions before you book?{" "}
            <a href={site.chatHref} className="font-bold text-forest hover:underline">
              Chat with Micah
            </a>{" "}
            — even after hours.
          </p>
        </div>
      </div>
    </section>
  );
}
