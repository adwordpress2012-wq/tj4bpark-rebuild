import type { TourismHomeTemplate } from "@/lib/tourism-template";

type TourismJsonLdProps = {
  template: TourismHomeTemplate;
};

export function TourismJsonLd({ template }: TourismJsonLdProps) {
  const { site, faq } = template;
  const phone = `+61${site.phone.replace(/\D/g, "").replace(/^0/, "")}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      name: site.name,
      description: site.description,
      telephone: phone,
      email: site.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Howes Valley",
        addressRegion: "NSW",
        addressCountry: "AU",
      },
      amenityFeature: template.trustItems.map((item) => ({
        "@type": "LocationFeatureSpecification",
        name: item.label,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
