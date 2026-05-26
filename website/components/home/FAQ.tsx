import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/content";

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-20 bg-cream py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Good to know"
          title="Frequently asked questions"
          description="Quick answers before you pack the ute. Still unsure? Give us a bell or chat with Micah."
        />

        <dl className="mt-10 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-tan/50 bg-white shadow-sm open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-bold text-forest marker:content-none [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-tan-light text-charcoal transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <dd className="border-t border-tan/30 px-5 pb-4 pt-2 text-sm leading-relaxed text-charcoal/75 sm:text-base">
                {faq.answer}
              </dd>
            </details>
          ))}
        </dl>
      </div>
    </section>
  );
}
