import { Button } from "@/components/ui/Button";
import { ChatIcon, WhatsAppIcon } from "@/components/tourism/TemplateIcons";
import type { TourismCta } from "@/lib/tourism-template";

type TourismCtaGroupProps = {
  ctas: TourismCta[];
  className?: string;
  itemClassName?: string;
};

export function TourismCtaGroup({
  ctas,
  className = "",
  itemClassName = "",
}: TourismCtaGroupProps) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap ${className}`}>
      {ctas.map((cta) => (
        <Button
          key={`${cta.label}-${cta.href}`}
          href={cta.href}
          variant={cta.variant}
          external={cta.external}
          ariaLabel={cta.ariaLabel}
          className={itemClassName}
        >
          {cta.icon === "chat" && <ChatIcon />}
          {cta.icon === "whatsapp" && <WhatsAppIcon />}
          {cta.label}
        </Button>
      ))}
    </div>
  );
}
