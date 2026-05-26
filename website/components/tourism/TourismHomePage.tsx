import { ActivityGridSection } from "@/components/tourism/ActivityGridSection";
import { AdventureHero } from "@/components/tourism/AdventureHero";
import { BookingSection } from "@/components/tourism/BookingSection";
import { FaqSection } from "@/components/tourism/FaqSection";
import { GallerySection } from "@/components/tourism/GallerySection";
import { MicahScwSection } from "@/components/tourism/MicahScwSection";
import { MobileBookingBar } from "@/components/tourism/MobileBookingBar";
import { TourismFooter } from "@/components/tourism/TourismFooter";
import { TourismHeader } from "@/components/tourism/TourismHeader";
import { TrustStrip } from "@/components/tourism/TrustStrip";
import type { TourismHomeTemplate } from "@/lib/tourism-template";

type TourismHomePageProps = {
  template: TourismHomeTemplate;
};

export function TourismHomePage({ template }: TourismHomePageProps) {
  return (
    <>
      <TourismHeader site={template.site} nav={template.nav} />
      <main>
        <AdventureHero hero={template.hero} site={template.site} />
        <TrustStrip items={template.trustItems} />
        <ActivityGridSection
          intro={template.activities.intro}
          items={template.activities.items}
        />
        <GallerySection intro={template.gallery.intro} items={template.gallery.items} />
        <BookingSection booking={template.booking} site={template.site} />
        <MicahScwSection micah={template.micah} />
        <FaqSection intro={template.faq.intro} items={template.faq.items} />
      </main>
      <TourismFooter template={template} />
      <MobileBookingBar site={template.site} />
    </>
  );
}
