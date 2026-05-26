export const site = {
  name: "TJ's 4B Park",
  shortName: "TJ4B Park",
  tagline: "Relaxation and adventure — all in the one park",
  location: "Howes Valley, NSW",
  phone: "0405 672 522",
  phoneAlt: "0412 293 574",
  email: "tjs4wdcamping@gmail.com",
  whatsapp: "https://wa.me/61405672522",
  bookHref: "#book",
  chatHref: "#open-micah",
  micahSectionHref: "#micah",
} as const;

export const trustItems = [
  { label: "Camping", icon: "tent" },
  { label: "Glamping", icon: "star" },
  { label: "4WD", icon: "truck" },
  { label: "Buggy Rides", icon: "buggy" },
  { label: "Events", icon: "calendar" },
] as const;

export const activities = [
  {
    title: "Camping",
    description:
      "Communal camp areas and separated spots for extra privacy. Flushable toilets, hot showers, and plenty of bush to explore.",
    tag: "Book ahead",
  },
  {
    title: "Gumnut's Glamping",
    description:
      "Where a million stars is your view. Comfortable tents without roughing it — check out the photos and ask us for availability.",
    tag: "Popular",
  },
  {
    title: "4WD Tracks",
    description:
      "Rocky mountain terrain and lush bush. Our team can point you to tracks that suit your experience level.",
    tag: "Adventure",
  },
  {
    title: "Buggy Joy Rides",
    description:
      "Get out and enjoy the property from a different angle. See our buggy rides page for session info and pricing.",
    tag: "Must try",
  },
  {
    title: "Bushwalks & Wildlife",
    description:
      "Sit back and listen to the wildlife, or wander the seasonal creek and crystal-clear water when it's flowing.",
    tag: "Family friendly",
  },
  {
    title: "Events & Groups",
    description:
      "Work parties, clubs, or a quiet getaway with mates — we've got space for you. Bookings are compulsory so it never gets overcrowded.",
    tag: "Groups welcome",
  },
] as const;

export const galleryItems = [
  { label: "Camping under the stars", aspect: "tall" },
  { label: "4WD through the bush", aspect: "wide" },
  { label: "Glamping at Gumnut's", aspect: "square" },
  { label: "Buggy rides", aspect: "square" },
  { label: "Creek and valley views", aspect: "wide" },
  { label: "Family around the fire", aspect: "tall" },
] as const;

export const faqs = [
  {
    question: "Do I need to book before I come?",
    answer:
      "Yes — bookings are compulsory. We only let a limited number of people on the property at the same time, so you're not fighting for space. Give us a call, message on WhatsApp, or use the booking section below.",
  },
  {
    question: "When are you open?",
    answer:
      "We're open mostly Friday to Sunday. If you're unsure about a date or want to visit outside those times, get in touch — Micah can capture your enquiry after hours and we'll get back to you.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring drinking water, plenty of food, and your usual camping gear. If you plan to use the hot showers, a container of water to top up the tank is appreciated. Horses are welcome — we have a cattle yard available.",
  },
  {
    question: "Is experience required for 4WD?",
    answer:
      "Not necessarily. Jamie, Tanya and the team can advise on tracks that match your level — from a relaxed roll to something that'll test your wild side. Family friendly and respectful of the bush.",
  },
  {
    question: "What's the difference between camping and glamping?",
    answer:
      "Camping is your classic setup — BYO gear, communal or private camp areas. Glamping at Gumnut's is for those who want the outdoor experience with a bit more comfort. Either way, you're surrounded by over 1,000 acres of natural bush.",
  },
  {
    question: "How do I pre-order pizza?",
    answer:
      "Fresh pizzas are available — pre-order by the Tuesday before your arrival. Ask when you book or drop us a message and we'll sort it out.",
  },
] as const;
