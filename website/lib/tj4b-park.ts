import type { TourismHomeTemplate } from "@/lib/tourism-template";

export const tj4bParkTemplate = {
  site: {
    name: "TJ's 4B Park",
    shortName: "TJ4B Park",
    tagline: "Relaxation and adventure - all in the one park",
    location: "Howes Valley, NSW",
    phone: "0405 672 522",
    phoneAlt: "0412 293 574",
    email: "tjs4wdcamping@gmail.com",
    whatsapp: "https://wa.me/61405672522",
    bookHref: "#book",
    chatHref: "#micah",
    description:
      "Family-owned camping, glamping, 4WD tracks and buggy rides across more than 1,000 acres of natural bush in Howes Valley, NSW.",
  },
  nav: [
    { href: "#activities", label: "Activities" },
    { href: "#gallery", label: "Gallery" },
    { href: "#book", label: "Book" },
    { href: "#faq", label: "FAQ" },
  ],
  hero: {
    eyebrow: "Howes Valley, NSW",
    title: "Relaxation and adventure - all in the one park",
    description:
      "Over 1,000 acres of natural bush - rocky tracks, green grass, seasonal creek, and room to camp, glamp, or get dirty behind the wheel. Family owned by Jamie and Tanya. Bookings compulsory so it never feels crowded.",
    image: {
      label: "Outdoor adventure - bush, tracks and valley views",
      alt: "Bushland tracks and valley views at TJ's 4B Park",
    },
    ctas: [
      { label: "Book Your Stay", href: "#book", variant: "secondary" },
      { label: "Chat With Micah", href: "#micah", variant: "outline", icon: "chat" },
      {
        label: "WhatsApp Us",
        href: "https://wa.me/61405672522",
        variant: "whatsapp",
        external: true,
        icon: "whatsapp",
      },
    ],
    footnote: "Prefer a yarn? Call",
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
      eyebrow: "What you can do",
      title: "Camp, glamp, explore - your way",
      description:
        "Whether you want a quiet weekend listening to the wildlife or a full-send day on the tracks, there's something here for you and your crew.",
    },
    items: [
      {
        title: "Camping",
        description:
          "Communal camp areas and separated spots for extra privacy. Flushable toilets, hot showers, and plenty of bush to explore.",
        tag: "Book ahead",
        image: { alt: "Camping setup in the bush at TJ's 4B Park" },
      },
      {
        title: "Gumnut's Glamping",
        description:
          "Where a million stars is your view. Comfortable tents without roughing it - check out the photos and ask us for availability.",
        tag: "Popular",
        image: { alt: "Glamping tent under the stars at Gumnut's" },
        note: '"Where a million stars is your view"',
      },
      {
        title: "4WD Tracks",
        description:
          "Rocky mountain terrain and lush bush. Our team can point you to tracks that suit your experience level.",
        tag: "Adventure",
        image: { alt: "4WD vehicle on rocky bush track" },
      },
      {
        title: "Buggy Joy Rides",
        description:
          "Get out and enjoy the property from a different angle. See our buggy rides page for session info and pricing.",
        tag: "Must try",
        image: { alt: "Buggy ride through TJ's 4B Park" },
      },
      {
        title: "Bushwalks & Wildlife",
        description:
          "Sit back and listen to the wildlife, or wander the seasonal creek and crystal-clear water when it's flowing.",
        tag: "Family friendly",
        image: { alt: "Bushwalking and wildlife areas at TJ's 4B Park" },
      },
      {
        title: "Events & Groups",
        description:
          "Work parties, clubs, or a quiet getaway with mates - we've got space for you. Bookings are compulsory so it never gets overcrowded.",
        tag: "Groups welcome",
        image: { alt: "Group camping and events space at TJ's 4B Park" },
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
      eyebrow: "Make it official",
      title: "Book your stay",
      description:
        "Bookings are compulsory - we keep numbers limited so everyone has room to breathe. Check availability and lock in your dates below.",
    },
    calendar: {
      eyebrow: "Powered by DOS",
      title: "Availability Calendar",
      badge: "Placeholder",
      ariaLabel: "DOS Calendar booking widget placeholder",
      description:
        "DOS Calendar will live here - guests pick dates, see what's open, and submit a booking without the back-and-forth.",
    },
    ctas: [
      {
        label: "WhatsApp to Book",
        href: "https://wa.me/61405672522",
        variant: "whatsapp",
        external: true,
      },
      {
        label: "Call 0405 672 522",
        href: "tel:0405672522",
        variant: "primary",
        external: true,
      },
    ],
    footnote: "Open mostly Friday-Sunday. Questions before you book?",
  },
  micah: {
    intro: {
      eyebrow: "Micah SCW",
      title: "Never miss an enquiry again",
      description:
        "Smart Chat Widget for TJ's 4B Park - built for busy weekends when you're on the tracks, not staring at your phone.",
    },
    features: [
      {
        title: "After-hours answers",
        text: "Someone browsing at 9pm shouldn't hit a dead end. Micah can answer common questions and capture the enquiry for Jamie and Tanya.",
      },
      {
        title: "Fewer missed messages",
        text: 'No more "sorry, only just saw this" on Facebook or email. Details get logged so nothing slips through when you\'re out on the property.',
      },
      {
        title: "Still sounds like you",
        text: "Friendly, straight-up Aussie tone - not a corporate call centre. Micah points people to book, WhatsApp, or call when it matters.",
      },
    ],
    cta: { label: "Try Micah - Chat Now", href: "#micah", variant: "secondary" },
    placeholder: {
      eyebrow: "Example conversation",
      messages: [
        { from: "guest", text: "G'day - are you open Easter long weekend?" },
        {
          from: "micah",
          text: "Hey! Great question. Easter often books out - I can check typical availability and pass your details to the team. How many in your group, and camping or glamping?",
        },
        { from: "guest", text: "2 families, mostly camping. 8 adults, few kids." },
        {
          from: "micah",
          text: "Legend - I've logged that for Jamie and Tanya. Want to lock in dates now? Tap below to book, or WhatsApp us on 0405 672 522.",
        },
      ],
      footer: "Micah SCW - Smart Chat Widget by DOS",
    },
    bubble: {
      greeting:
        "G'day! I'm Micah - here to help with bookings, glamping, tracks and what to bring. What can I help with today?",
      status: "TJ's 4B Park - SCW",
      footer: "Full SCW integration coming soon",
      primaryCta: { label: "Book your stay", href: "#book" },
      secondaryCta: {
        label: "WhatsApp instead",
        href: "https://wa.me/61405672522",
        external: true,
      },
    },
  },
  faq: {
    intro: {
      eyebrow: "Good to know",
      title: "Frequently asked questions",
      description:
        "Quick answers before you pack the ute. Still unsure? Give us a bell or chat with Micah.",
    },
    items: [
      {
        question: "Do I need to book before I come?",
        answer:
          "Yes - bookings are compulsory. We only let a limited number of people on the property at the same time, so you're not fighting for space. Give us a call, message on WhatsApp, or use the booking section below.",
      },
      {
        question: "When are you open?",
        answer:
          "We're open mostly Friday to Sunday. If you're unsure about a date or want to visit outside those times, get in touch - Micah can capture your enquiry after hours and we'll get back to you.",
      },
      {
        question: "What should I bring?",
        answer:
          "Bring drinking water, plenty of food, and your usual camping gear. If you plan to use the hot showers, a container of water to top up the tank is appreciated. Horses are welcome - we have a cattle yard available.",
      },
      {
        question: "Is experience required for 4WD?",
        answer:
          "Not necessarily. Jamie, Tanya and the team can advise on tracks that match your level - from a relaxed roll to something that'll test your wild side. Family friendly and respectful of the bush.",
      },
      {
        question: "What's the difference between camping and glamping?",
        answer:
          "Camping is your classic setup - BYO gear, communal or private camp areas. Glamping at Gumnut's is for those who want the outdoor experience with a bit more comfort. Either way, you're surrounded by over 1,000 acres of natural bush.",
      },
      {
        question: "How do I pre-order pizza?",
        answer:
          "Fresh pizzas are available - pre-order by the Tuesday before your arrival. Ask when you book or drop us a message and we'll sort it out.",
      },
    ],
  },
  footer: {
    description:
      "Family owned. Over 1,000 acres of bush, tracks and good times. Live life to its fullest - we're looking forward to seeing you there.",
    note: "Website rebuild - DOS Calendar & Micah SCW coming soon",
  },
} satisfies TourismHomeTemplate;

export const site = tj4bParkTemplate.site;
