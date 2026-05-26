import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { site } from "@/lib/content";

function ChatIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative">
      <ImagePlaceholder
        label="Outdoor adventure — bush, tracks and valley views"
        variant="hero"
        className="aspect-[4/5] min-h-[420px] sm:aspect-[16/9] sm:min-h-[520px] md:min-h-[580px]"
      />

      <div className="absolute inset-0 bg-linear-to-t from-charcoal/85 via-charcoal/40 to-charcoal/20" />

      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto w-full max-w-6xl px-4 pb-10 pt-24 sm:px-6 sm:pb-14">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-gold-light">
            Howes Valley, NSW
          </p>
          <h1 className="max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            {site.tagline}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            Over 1,000 acres of natural bush — rocky tracks, green grass, seasonal creek,
            and room to camp, glamp, or get dirty behind the wheel. Family owned by Jamie
            &amp; Tanya. Bookings compulsory so it never feels crowded.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={site.bookHref} variant="secondary" className="w-full sm:w-auto">
              Book Your Stay
            </Button>
            <Button href={site.chatHref} variant="outline" className="w-full border-white/40 text-white sm:w-auto">
              <ChatIcon />
              Chat With Micah
            </Button>
            <Button href={site.whatsapp} variant="whatsapp" external className="w-full sm:w-auto">
              <WhatsAppIcon />
              WhatsApp Us
            </Button>
          </div>

          <p className="mt-6 text-sm text-white/70">
            Prefer a yarn? Call{" "}
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="font-bold text-gold-light hover:underline">
              {site.phone}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
