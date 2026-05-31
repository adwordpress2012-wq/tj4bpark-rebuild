import { ActivityGridSection } from "@/components/tourism/ActivityGridSection";
import { AdventureHero } from "@/components/tourism/AdventureHero";
import { BookingSection } from "@/components/tourism/BookingSection";
import { ContactSection } from "@/components/tourism/ContactSection";
import { FaqSection } from "@/components/tourism/FaqSection";
import { MobileBookingBar } from "@/components/tourism/MobileBookingBar";
import { OwnersSection } from "@/components/tourism/OwnersSection";
import { SafetyNoticeSection } from "@/components/tourism/SafetyNoticeSection";
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
        <BookingSection booking={template.booking} site={template.site} />
        <ActivityGridSection
          intro={template.activities.intro}
          items={template.activities.items}
        />
        <FaqSection intro={template.faq.intro} items={template.faq.items} />
        <SafetyNoticeSection
          intro={template.safety.intro}
          notice={template.safety.notice}
        />
        <OwnersSection intro={template.owners.intro} owners={template.owners.items} />
        <ContactSection intro={template.contact.intro} site={template.site} />
      </main>
      <TourismFooter template={template} />
      <MobileBookingBar site={template.site} />
    </>
  );
}
