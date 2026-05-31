export type TourismIcon =
  | "tent"
  | "star"
  | "truck"
  | "buggy"
  | "calendar";

export type TourismCta = {
  label: string;
  ariaLabel?: string;
  href: string;
  variant?: "primary" | "secondary" | "outline" | "outlineDark" | "whatsapp";
  external?: boolean;
  icon?: "chat" | "whatsapp";
};

export type TourismSite = {
  name: string;
  shortName: string;
  tagline: string;
  location: string;
  address: string;
  phone: string;
  email: string;
  whatsapp: string;
  facebook: string;
  instagram: string;
  mapsHref: string;
  hipcampHref: string;
  bookHref: string;
  description: string;
  url: string;
  keywords: string[];
  ogImage: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
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

export type TourismFaq = {
  question: string;
  answer: string;
};

export type TourismOwner = {
  name: string;
  role?: string;
  description: string;
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
  safety: {
    intro: TourismSectionIntro;
    notice: string;
  };
  owners: {
    intro: TourismSectionIntro;
    items: TourismOwner[];
  };
  faq: {
    intro: TourismSectionIntro;
    items: TourismFaq[];
  };
  contact: {
    intro: TourismSectionIntro;
  };
  footer: {
    description: string;
    note: string;
  };
};
