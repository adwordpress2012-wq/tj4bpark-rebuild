import { OfferingIcon } from "@/components/tourism/TemplateIcons";
import type { TourismTrustItem } from "@/lib/tourism-template";

type TrustStripProps = {
  items: TourismTrustItem[];
};

export function TrustStrip({ items }: TrustStripProps) {
  return (
    <section
      className="border-y border-forest/10 bg-forest py-6 text-white"
      aria-label="What we offer"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-6">
          {items.map((item) => (
            <li key={item.label} className="flex flex-col items-center gap-2 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <OfferingIcon type={item.icon} />
              </span>
              <span className="text-sm font-bold sm:text-base">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
