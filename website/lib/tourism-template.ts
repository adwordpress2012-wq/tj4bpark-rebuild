export type TourismIcon =
  | "tent"
  | "star"
  | "truck"
  | "buggy"
  | "calendar";

export type TourismCta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline" | "whatsapp";
  external?: boolean;
  icon?: "chat" | "whatsapp";
};

export type TourismSite = {
  name: string;
  shortName: string;
  tagline: string;
  location: string;
  phone: string;
  phoneAlt?: string;
  email: string;
  whatsapp: string;
  bookHref: string;
  chatHref: string;
  description: string;
};

export type TourismNavLink = {
  href: string;
  label: string;
};

export type TourismHero = {
  eyebrow: string;
  title: string;
  description: string;
  image: {
    label: string;
    src?: string;
    alt: string;
  };
  ctas: TourismCta[];
  footnote: string;
};

export type TourismTrustItem = {
  label: string;
  icon: TourismIcon;
};

export type TourismSectionIntro = {
  eyebrow: string;
  title: string;
  description: string;
};

export type TourismActivity = {
  title: string;
  description: string;
  tag: string;
  image?: {
    src?: string;
    alt: string;
  };
  note?: string;
};

export type TourismGalleryItem = {
  label: string;
  aspect: "tall" | "wide" | "square";
  src?: string;
  alt: string;
};

export type TourismBooking = {
  intro: TourismSectionIntro;
  calendar: {
    eyebrow: string;
    title: string;
    badge: string;
    ariaLabel: string;
    description: string;
  };
  ctas: TourismCta[];
  footnote: string;
};

export type TourismMicahScw = {
  intro: TourismSectionIntro;
  features: Array<{
    title: string;
    text: string;
  }>;
  cta: TourismCta;
  placeholder: {
    eyebrow: string;
    messages: Array<{
      from: "guest" | "micah";
      text: string;
    }>;
    footer: string;
  };
  bubble: {
    greeting: string;
    status: string;
    footer: string;
    primaryCta: TourismCta;
    secondaryCta: TourismCta;
  };
};

export type TourismFaq = {
  question: string;
  answer: string;
};

export type TourismHomeTemplate = {
  site: TourismSite;
  nav: TourismNavLink[];
  hero: TourismHero;
  trustItems: TourismTrustItem[];
  activities: {
    intro: TourismSectionIntro;
    items: TourismActivity[];
  };
  gallery: {
    intro: TourismSectionIntro;
    items: TourismGalleryItem[];
  };
  booking: TourismBooking;
  micah: TourismMicahScw;
  faq: {
    intro: TourismSectionIntro;
    items: TourismFaq[];
  };
  footer: {
    description: string;
    note: string;
  };
};
