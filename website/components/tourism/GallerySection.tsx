import { SectionHeading } from "@/components/ui/SectionHeading";
import { TourismImage } from "@/components/tourism/TourismImage";
import type { TourismGalleryItem, TourismSectionIntro } from "@/lib/tourism-template";

const layoutClasses: Record<TourismGalleryItem["aspect"], string> = {
  tall: "row-span-2 min-h-[220px] sm:min-h-[280px]",
  wide: "col-span-2 min-h-[180px] sm:min-h-[200px]",
  square: "min-h-[180px] sm:min-h-[200px]",
};

type GallerySectionProps = {
  intro: TourismSectionIntro;
  items: TourismGalleryItem[];
};

export function GallerySection({ intro, items }: GallerySectionProps) {
  return (
    <section id="gallery" className="scroll-mt-20 bg-tan-light/40 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading {...intro} />

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:grid-rows-2">
          {items.map((item) => (
            <div
              key={item.label}
              className={`overflow-hidden rounded-2xl ${layoutClasses[item.aspect]}`}
            >
              <TourismImage
                label={item.label}
                alt={item.alt}
                src={item.src}
                variant="gallery"
                sizes="(min-width: 768px) 25vw, 50vw"
                className="h-full min-h-[inherit]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
