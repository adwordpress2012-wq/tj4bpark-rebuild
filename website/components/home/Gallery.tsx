import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryItems } from "@/lib/content";

const layoutClasses: Record<string, string> = {
  tall: "row-span-2 min-h-[220px] sm:min-h-[280px]",
  wide: "col-span-2 min-h-[180px] sm:min-h-[200px]",
  square: "min-h-[180px] sm:min-h-[200px]",
};

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-20 bg-tan-light/40 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Real moments"
          title="A taste of the park"
          description="We'll swap these placeholders for your real photos — camping, tracks, glamping and good times with family and mates."
        />

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:grid-rows-2">
          {galleryItems.map((item) => (
            <div
              key={item.label}
              className={`overflow-hidden rounded-2xl ${layoutClasses[item.aspect] ?? layoutClasses.square}`}
            >
              <ImagePlaceholder
                label={item.label}
                variant="gallery"
                className="h-full min-h-[inherit]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
