import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { TourismMicahScw } from "@/lib/tourism-template";

type MicahScwSectionProps = {
  micah: TourismMicahScw;
};

export function MicahScwSection({ micah }: MicahScwSectionProps) {
  return (
    <section id="micah" className="scroll-mt-20 bg-forest py-14 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading {...micah.intro} light />

            <ul className="mt-8 space-y-5">
              {micah.features.map((feature) => (
                <li key={feature.title} className="flex gap-4">
                  <span
                    className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold text-sm font-extrabold text-charcoal"
                    aria-hidden
                  >
                    ok
                  </span>
                  <div>
                    <h3 className="font-bold text-gold-light">{feature.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-tan-light/90 sm:text-base">
                      {feature.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button href={micah.cta.href} variant={micah.cta.variant}>
                {micah.cta.label}
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-white/15 bg-forest-dark/60 p-5 shadow-xl sm:p-6">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gold-light">
              {micah.placeholder.eyebrow}
            </p>
            <div className="space-y-3">
              {micah.placeholder.messages.map((message, index) => (
                <div
                  key={`${message.from}-${index}`}
                  className={
                    message.from === "guest"
                      ? "ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-gold px-4 py-3 text-sm font-medium text-charcoal"
                      : "max-w-[90%] rounded-2xl rounded-bl-md bg-white/10 px-4 py-3 text-sm leading-relaxed text-white/95 backdrop-blur-sm"
                  }
                >
                  {message.text}
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-xs text-tan-light/70">
              {micah.placeholder.footer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
