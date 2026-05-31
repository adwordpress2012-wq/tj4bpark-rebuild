import { SectionHeading } from "@/components/ui/SectionHeading";
import type { TourismSectionIntro } from "@/lib/tourism-template";

type SafetyNoticeSectionProps = {
  intro: TourismSectionIntro;
  notice: string;
};

export function SafetyNoticeSection({ intro, notice }: SafetyNoticeSectionProps) {
  return (
    <section className="bg-charcoal py-14 text-white sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading {...intro} light />
        <div className="mt-8 rounded-3xl border border-gold/40 bg-white/10 p-6 text-center shadow-lg backdrop-blur-sm sm:p-8">
          <p className="text-lg font-bold leading-relaxed text-white sm:text-xl">
            {notice}
          </p>
        </div>
      </div>
    </section>
  );
}
