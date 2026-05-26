import { SectionHeading } from "@/components/ui/SectionHeading";
import { TourismImage } from "@/components/tourism/TourismImage";
import type { TourismActivity, TourismSectionIntro } from "@/lib/tourism-template";

type ActivityGridSectionProps = {
  intro: TourismSectionIntro;
  items: TourismActivity[];
};

export function ActivityGridSection({ intro, items }: ActivityGridSectionProps) {
  return (
    <section id="activities" className="scroll-mt-20 bg-cream py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading {...intro} />

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((activity) => (
            <li
              key={activity.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-tan/40 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <TourismImage
                label={activity.title}
                alt={activity.image?.alt ?? activity.title}
                src={activity.image?.src}
                variant="card"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="aspect-[16/10]"
              />
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-2 flex items-start justify-between gap-2">
                  <h3 className="text-lg font-extrabold text-forest">{activity.title}</h3>
                  <span className="shrink-0 rounded-full bg-gold-light/80 px-2.5 py-0.5 text-xs font-bold text-charcoal">
                    {activity.tag}
                  </span>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-charcoal/75">
                  {activity.description}
                </p>
                {activity.note && (
                  <p className="mt-3 text-xs font-semibold italic text-forest/80">
                    {activity.note}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
