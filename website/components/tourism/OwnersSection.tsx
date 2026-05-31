import { SectionHeading } from "@/components/ui/SectionHeading";
import type { TourismOwner, TourismSectionIntro } from "@/lib/tourism-template";

type OwnersSectionProps = {
  intro: TourismSectionIntro;
  owners: TourismOwner[];
};

export function OwnersSection({ intro, owners }: OwnersSectionProps) {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading {...intro} />
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {owners.map((owner) => (
            <article
              key={owner.name}
              className="rounded-2xl border border-tan/40 bg-cream p-6 shadow-sm"
            >
              <p className="text-xl font-extrabold text-forest">{owner.name}</p>
              {owner.role && (
                <p className="mt-1 text-sm font-bold uppercase tracking-widest text-gold">
                  {owner.role}
                </p>
              )}
              <p className="mt-4 text-sm leading-relaxed text-charcoal/75">
                {owner.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
