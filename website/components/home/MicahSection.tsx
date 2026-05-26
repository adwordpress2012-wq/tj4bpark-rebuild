import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/content";

const features = [
  {
    title: "After-hours answers",
    text: "Someone browsing at 9pm shouldn't hit a dead end. Micah can answer common questions and capture the enquiry for Jamie and Tanya.",
  },
  {
    title: "Fewer missed messages",
    text: "No more \"sorry, only just saw this\" on Facebook or email. Details get logged so nothing slips through when you're out on the property.",
  },
  {
    title: "Still sounds like you",
    text: "Friendly, straight-up Aussie tone — not a corporate call centre. Micah points people to book, WhatsApp, or call when it matters.",
  },
];

export function MicahSection() {
  return (
    <section
      id="micah"
      className="scroll-mt-20 bg-forest py-14 text-white sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Micah SCW"
              title="Never miss an enquiry again"
              description="Smart Chat Widget for TJ's 4B Park — built for busy weekends when you're on the tracks, not staring at your phone."
              light
            />

            <ul className="mt-8 space-y-5">
              {features.map((f) => (
                <li key={f.title} className="flex gap-4">
                  <span
                    className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold text-sm font-extrabold text-charcoal"
                    aria-hidden
                  >
                    ✓
                  </span>
                  <div>
                    <h3 className="font-bold text-gold-light">{f.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-tan-light/90 sm:text-base">
                      {f.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={site.chatHref} variant="secondary">
                Try Micah — Chat Now
              </Button>
              <Button href={site.bookHref} variant="outline" className="border-white/40 text-white">
                Book Your Stay
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-white/15 bg-forest-dark/60 p-5 shadow-xl sm:p-6">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gold-light">
              Example conversation
            </p>
            <div className="space-y-3">
              <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-gold px-4 py-3 text-sm font-medium text-charcoal">
                G&apos;day — are you open Easter long weekend?
              </div>
              <div className="max-w-[90%] rounded-2xl rounded-bl-md bg-white/10 px-4 py-3 text-sm leading-relaxed text-white/95 backdrop-blur-sm">
                Hey! Great question. Easter often books out — I can check typical
                availability and pass your details to the team. How many in your
                group, and camping or glamping?
              </div>
              <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-gold px-4 py-3 text-sm font-medium text-charcoal">
                2 families, mostly camping. 8 adults, few kids.
              </div>
              <div className="max-w-[90%] rounded-2xl rounded-bl-md bg-white/10 px-4 py-3 text-sm leading-relaxed text-white/95 backdrop-blur-sm">
                Legend — I&apos;ve logged that for Jamie &amp; Tanya. Want to lock in
                dates now? Tap below to book, or WhatsApp us on {site.phone}.
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-tan-light/70">
              Micah SCW · Smart Chat Widget by DOS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
