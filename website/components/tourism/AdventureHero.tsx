import { TourismCtaGroup } from "@/components/tourism/TourismCtaGroup";
import { TourismImage } from "@/components/tourism/TourismImage";
import type { TourismHero, TourismSite } from "@/lib/tourism-template";

type AdventureHeroProps = {
  hero: TourismHero;
  site: TourismSite;
};

export function AdventureHero({ hero, site }: AdventureHeroProps) {
  return (
    <section className="relative">
      <TourismImage
        label={hero.image.label}
        alt={hero.image.alt}
        src={hero.image.src}
        variant="hero"
        priority
        sizes="100vw"
        className="aspect-[4/5] min-h-[420px] sm:aspect-[16/9] sm:min-h-[520px] md:min-h-[580px]"
      />

      <div className="absolute inset-0 bg-linear-to-t from-charcoal/85 via-charcoal/40 to-charcoal/20" />

      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto w-full max-w-6xl px-4 pb-10 pt-24 sm:px-6 sm:pb-14">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-gold-light">
            {hero.eyebrow}
          </p>
          <h1 className="max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            {hero.title}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            {hero.description}
          </p>

          <TourismCtaGroup
            ctas={hero.ctas}
            className="mt-8"
            itemClassName="w-full sm:w-auto"
          />

          <p className="mt-6 text-sm text-white/70">
            {hero.footnote}{" "}
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="font-bold text-gold-light hover:underline"
            >
              {site.phone}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
