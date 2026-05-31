import type { TourismHomeTemplate } from "@/lib/tourism-template";

export const tj4bParkTemplate = {
  site: {
    name: "TJ’s 4B Park & Camping",
    shortName: "TJ’s 4B Park",
    tagline: "Camping, 4WD adventures, glamping and outdoor experiences",
    location: "Howes Valley NSW",
    address: "Unnamed Road, Howes Valley NSW 2330, Australia",
    phone: "0405 672 522",
    email: "tjs4wdcamping@gmail.com",
    whatsapp: "https://wa.me/61405672522",
    facebook: "https://www.facebook.com/howesvalley/",
    instagram: "https://www.instagram.com/tjs4bpark/",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=Unnamed%20Road%2C%20Howes%20Valley%20NSW%202330%2C%20Australia",
    hipcampHref: "#hipcamp-coming-soon",
    bookHref: "#book",
    description:
      "Camping, 4WD adventures, glamping and outdoor experiences in Howes Valley NSW.",
    url: "https://tj4bpark.com.au",
    keywords: [
      "TJ’s 4B Park",
      "TJ4B Park",
      "Howes Valley camping",
      "Howes Valley NSW",
      "Hunter Valley camping",
      "NSW 4WD park",
      "4WD tracks NSW",
      "glamping Howes Valley",
      "buggy rides NSW",
      "bush camping NSW",
      "family camping NSW",
      "group camping Howes Valley",
      "weekend camping near Sydney",
      "tourism Howes Valley",
    ],
    ogImage: {
      src: "/images/branding/tj4b-park-og.jpg",
      width: 1200,
      height: 630,
      alt: "TJ’s 4B Park camping, glamping and 4WD adventure in Howes Valley NSW",
    },
  },
  nav: [
    { href: "#activities", label: "Activities" },
    { href: "#book", label: "Book" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ],
  hero: {
    eyebrow: "Howes Valley, NSW",
    title: "TJ’s 4B Park & Camping",
    description:
      "Camping, 4WD adventures, glamping and outdoor experiences in Howes Valley NSW.",
    image: {
      label: "Outdoor adventure - bush, tracks and valley views",
      alt: "Bushland tracks and camping at TJ’s 4B Park & Camping",
    },
    ctas: [
      {
        label: "Book Now",
        ariaLabel: "Go to the booking and enquiry section",
        href: "#book",
        variant: "secondary",
      },
      {
        label: "Call 0405 672 522",
        ariaLabel: "Call TJ’s 4B Park & Camping",
        href: "tel:0405672522",
        variant: "primary",
      },
      {
        label: "Visit Facebook",
        ariaLabel: "Visit TJ’s 4B Park & Camping on Facebook",
        href: "https://www.facebook.com/howesvalley/",
        variant: "outline",
        external: true,
      },
    ],
    footnote: "For bookings and enquiries, call",
  },
  trustItems: [
    { label: "Camping", icon: "tent" },
    { label: "Glamping", icon: "star" },
    { label: "4WD", icon: "truck" },
    { label: "Buggy Rides", icon: "buggy" },
    { label: "Events", icon: "calendar" },
  ],
  activities: {
    intro: {
      eyebrow: "Things to do",
      title: "Camping, tracks and outdoor fun",
      description:
        "A simple snapshot of what is available while the full website is being rebuilt.",
    },
    items: [
      {
        title: "Camping",
        description:
          "Bring your setup and enjoy a bush camping stay in Howes Valley. Contact the team before you arrive.",
        tag: "Book ahead",
        image: { alt: "Camping setup in the bush at TJ’s 4B Park & Camping" },
      },
      {
        title: "Glamping",
        description:
          "Ask about current glamping availability and options when you make your enquiry.",
        tag: "Ask first",
        image: { alt: "Glamping accommodation placeholder at TJ’s 4B Park & Camping" },
      },
      {
        title: "4WD tracks",
        description:
          "Explore 4WD tracks suited to outdoor adventure. Check conditions and requirements before driving.",
        tag: "Adventure",
        image: { alt: "4WD vehicle on a bush track" },
      },
      {
        title: "Buggy joy rides / kids quad rides",
        description:
          "Fun ride options may be available for visitors and kids. Contact the team for current details.",
        tag: "Enquire",
        image: { alt: "Buggy joy rides and kids quad rides" },
      },
      {
        title: "Events / group visits",
        description:
          "Planning a group visit, club weekend or event? Get in touch to talk through dates and requirements.",
        tag: "Groups welcome",
        image: { alt: "Group camping and outdoor events at TJ’s 4B Park & Camping" },
      },
    ],
  },
  gallery: {
    intro: {
      eyebrow: "Real moments",
      title: "A taste of the park",
      description:
        "We'll swap these placeholders for your real photos - camping, tracks, glamping and good times with family and mates.",
    },
    items: [
      { label: "Camping under the stars", aspect: "tall", alt: "Camping under the stars" },
      { label: "4WD through the bush", aspect: "wide", alt: "4WD driving through bushland" },
      { label: "Glamping at Gumnut's", aspect: "square", alt: "Gumnut's glamping setup" },
      { label: "Buggy rides", aspect: "square", alt: "Buggy rides at the park" },
      { label: "Creek and valley views", aspect: "wide", alt: "Creek and valley views" },
      { label: "Family around the fire", aspect: "tall", alt: "Family around a campfire" },
    ],
  },
  booking: {
    intro: {
      eyebrow: "Bookings and enquiries",
      title: "Book now or contact the team",
      description:
        "Bookings and enquiries can be made using the contact links below while the new DOS booking system is being built.",
    },
    calendar: {
      eyebrow: "Temporary booking options",
      title: "Contact TJ’s 4B Park & Camping",
      badge: "Coming soon",
      ariaLabel: "Temporary booking contact options",
      description:
        "Use phone, email, Facebook or Instagram for now. Hipcamp and more booking options are coming soon.",
    },
    ctas: [
      {
        label: "Call 0405 672 522",
        ariaLabel: "Call TJ’s 4B Park on 0405 672 522",
        href: "tel:0405672522",
        variant: "primary",
      },
      {
        label: "Email Enquiry",
        ariaLabel: "Email TJ’s 4B Park & Camping",
        href: "mailto:tjs4wdcamping@gmail.com",
        variant: "secondary",
      },
      {
        label: "Facebook",
        ariaLabel: "Visit TJ’s 4B Park & Camping on Facebook",
        href: "https://www.facebook.com/howesvalley/",
        variant: "primary",
        external: true,
      },
      {
        label: "Instagram",
        ariaLabel: "Visit TJ’s 4B Park & Camping on Instagram",
        href: "https://www.instagram.com/tjs4bpark/",
        variant: "primary",
        external: true,
      },
      {
        label: "Hipcamp link coming soon",
        ariaLabel: "Hipcamp link placeholder",
        href: "#hipcamp-coming-soon",
        variant: "outlineDark",
      },
    ],
    footnote: "More booking options coming soon.",
  },
  safety: {
    intro: {
      eyebrow: "Safety and check-in",
      title: "Everyone must check in and check out",
      description:
        "Please make sure the required safety steps are completed before entering the property or joining any activities.",
    },
    notice:
      "Everyone must check in and check out. All visitors must complete the required acknowledgement, release and indemnity form before entering or participating in activities.",
  },
  owners: {
    intro: {
      eyebrow: "Meet the owners",
      title: "A friendly family-run park",
      description:
        "TJ’s 4B Park & Camping is kept personal, practical and welcoming by the people behind it.",
    },
    items: [
      {
        name: "Romeo",
        role: "The Manager",
        description:
          "Romeo helps keep an eye on the place and is part of the family-business personality visitors know and love.",
      },
      {
        name: "Jamie",
        description:
          "Jamie helps visitors feel prepared for camping, tracks, rides and group visits.",
      },
      {
        name: "Tanya",
        description:
          "Tanya helps keep enquiries, visits and the friendly park experience moving.",
      },
    ],
  },
  faq: {
    intro: {
      eyebrow: "FAQ’s and rules preview",
      title: "Good to know before you visit",
      description:
        "The full FAQ and rules pages are being rebuilt. These are the key topics from the old website that visitors should check before arriving.",
    },
    items: [
      {
        question: "Do we need to book?",
        answer:
          "Yes. Please contact TJ’s 4B Park & Camping before you arrive so the team can confirm availability and requirements.",
      },
      {
        question: "Is glamping available?",
        answer:
          "Glamping may be available. Ask about current options when making your booking enquiry.",
      },
      {
        question: "Firewood",
        answer:
          "Ask the team about current firewood availability, fire conditions and any fire restrictions before your visit.",
      },
      {
        question: "Rubbish",
        answer:
          "Please plan to keep the park clean and check current rubbish requirements with the team.",
      },
      {
        question: "Phone service",
        answer:
          "Mobile coverage can vary in rural areas. Check with the team and plan ahead before travelling.",
      },
      {
        question: "Are dirt bikes allowed?",
        answer:
          "Contact the team before bringing any bikes or vehicles so they can confirm the current rules.",
      },
      {
        question: "Are quads, buggies, comp trucks allowed?",
        answer:
          "Please ask before arriving with quads, buggies, comp trucks or other vehicles. Rules and access may depend on the activity and conditions.",
      },
      {
        question: "What to bring",
        answer:
          "Bring suitable camping gear, food, water and outdoor essentials. The full packing guidance is coming soon.",
      },
      {
        question: "Is EFTPOS available?",
        answer:
          "Ask the team about current payment options before arriving, especially if mobile service is limited.",
      },
      {
        question: "Can we buy supplies?",
        answer:
          "Check with TJ's 4B Park & Camping before your stay so you know what to bring and what may be available nearby.",
      },
      {
        question: "Are pets allowed?",
        answer:
          "Please ask about the current pet policy when making your booking enquiry.",
      },
      {
        question: "Can we request a specific camp area?",
        answer:
          "You can ask for a preferred camp area, and the team will confirm what is possible based on bookings and conditions.",
      },
      {
        question: "Tracks",
        answer:
          "Track access and difficulty may vary with conditions. Check in with the team before driving.",
      },
    ],
  },
  contact: {
    intro: {
      eyebrow: "Contact",
      title: "Get in touch",
      description:
        "Call, email or message the team to book, ask about activities, or confirm what to bring.",
    },
  },
  footer: {
    description:
      "Camping, 4WD adventures, glamping and outdoor experiences in Howes Valley NSW.",
    note: "Temporary website powered by DOS while the new booking system is being built.",
  },
} satisfies TourismHomeTemplate;

export const site = tj4bParkTemplate.site;
