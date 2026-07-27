
import Link from "next/link";
import type { ReactNode } from "react";
import {
  Calendar,
  MessageSquare,
  Phone,
  TreePine,
  Tent,
  CarFront,
  Bike,
  Users,
  Dog,
  ArrowRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* NAVBAR */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#123c34]/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
          <Link href="/" className="text-xl font-bold text-white">
            TJ&apos;s 4B Park
          </Link>

          <nav className="hidden items-center gap-7 font-medium text-white md:flex">
            <Link href="/">Home</Link>
            <Link href="/stay">Stay</Link>
            <Link href="/explore">Explore</Link>

            <a
              href="https://tjs4bpark.guestmateworkspace.com.au"
              target="_blank"
              rel="noreferrer"
            >
              What&apos;s On
            </a>

            <Link href="/gallery">Gallery</Link>
            <Link href="/bookings">Bookings</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <a
            href="#book"
            className="hidden rounded-md bg-amber-400 px-5 py-3 font-bold text-green-950 transition hover:bg-amber-300 md:inline-flex"
          >
            Book Your Stay
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative flex h-[85vh] min-h-[600px] items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://vibe.filesafe.space/1784327637926654810/assets/5c8af200-593c-42ea-a9b3-c76e2b11d047.png"
            alt="Family camping at TJ's 4B Park"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl space-y-6 px-4 text-white">
          <p className="font-serif text-3xl italic text-amber-400 md:text-4xl">
            Real Adventures. Real Memories.
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Camping, 4WD Adventures & Outdoor Fun
          </h1>

          <p className="max-w-2xl text-xl font-medium text-gray-200 md:text-2xl">
            A family owned camping and recreation park in the heart of Howes
            Valley, NSW.
          </p>

          <div className="flex flex-wrap gap-4 pt-6">
            <a
              id="book"
              href="#"
              className="inline-flex items-center rounded-md bg-amber-400 px-8 py-4 text-lg font-bold text-green-950 transition hover:bg-amber-300"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Stay
            </a>

            <a
              href="#contact"
              className="inline-flex items-center rounded-md border border-white bg-transparent px-8 py-4 text-lg font-bold text-white transition hover:bg-white/10"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Chat with Super Micah
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center rounded-md border border-white bg-transparent px-8 py-4 text-lg font-bold text-white transition hover:bg-white/10"
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES BAR */}
      <section className="relative z-20 -mt-8 mx-4 rounded-xl border-b bg-white py-10 shadow-sm md:mx-auto md:w-full md:max-w-7xl">
        <div className="px-4 md:px-8">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-3 lg:grid-cols-6">
            <Feature
              icon={<TreePine size={32} strokeWidth={1.5} />}
              title="Bush Camping"
              text="Peaceful spots surrounded by nature"
            />

            <Feature
              icon={<Tent size={32} strokeWidth={1.5} />}
              title="Glamping"
              text="Comfort meets the great outdoors"
            />

            <Feature
              icon={<CarFront size={32} strokeWidth={1.5} />}
              title="4WD Adventures"
              text="Tracks, trails and scenic lookouts"
            />

            <Feature
              icon={<Bike size={32} strokeWidth={1.5} />}
              title="Buggy Rides"
              text="Fun for the whole family"
            />

            <Feature
              icon={<Users size={32} strokeWidth={1.5} />}
              title="Group Bookings"
              text="Perfect for clubs, events & gatherings"
            />

            <Feature
              icon={<Dog size={32} strokeWidth={1.5} />}
              title="Pet Friendly"
              text="Bring your furry mates along!"
            />
          </div>
        </div>
      </section>

      {/* MAIN CARDS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl space-y-16 px-4 text-center">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-green-950 md:text-5xl lg:text-6xl">
              Stay. Explore. Relax.
            </h2>

            <p className="text-xl font-medium text-gray-600">
              Something for everyone at TJ&apos;s 4B Park.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 text-left md:grid-cols-2 lg:grid-cols-4">
            <AdventureCard
              image="https://vibe.filesafe.space/1784327637926654810/assets/776bec93-556f-4321-a0c9-c4fced0389d1.png"
              title="Camping"
              description="Bring your setup and enjoy the Aussie bush."
              href="/stay"
              button="Learn More"
            />

            <AdventureCard
              image="https://vibe.filesafe.space/1784327637926654810/assets/a9abe06e-ad41-44f5-8ba7-570aa047e139.png"
              title="Glamping"
              description="Ready to relax in comfort and style."
              href="/stay"
              button="Learn More"
            />

            <AdventureCard
              image="https://vibe.filesafe.space/1784327637926654810/assets/8c91ae7d-d97c-4024-bf07-fca769c8d4fe.png"
              title="Explore"
              description="Tracks, lookouts and outdoor adventures."
              href="/explore"
              button="Learn More"
            />

            <AdventureCard
              image="https://vibe.filesafe.space/1784327637926654810/assets/d79d2e40-c1d4-45b7-acfc-d1e8a0f29908.png"
              title="What's On"
              description="Events, long weekends and special gatherings."
              href="https://tjs4bpark.guestmateworkspace.com.au"
              button="View Events"
              external
            />
          </div>
        </div>
      </section>

      {/* EVENT BANNER */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <img
              src="https://vibe.filesafe.space/1784327637926654810/assets/4f0b60ce-d186-4c76-b4a2-bec323fd4f3e.png"
              alt="TJ's 4B Park event"
              className="h-64 w-full object-cover md:h-80"
            />

            <div className="absolute inset-0 flex items-center bg-gradient-to-r from-green-950/95 via-green-950/75 to-transparent">
              <div className="max-w-2xl p-8 text-white md:p-12">
                <div className="mb-2 flex items-center gap-2 font-serif text-xl italic text-amber-400">
                  <Calendar size={20} />
                  What&apos;s On
                </div>

                <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                  Adventures & Events at TJ&apos;s
                </h2>

                <p className="mb-8 text-xl font-medium md:text-2xl">
                  Check out upcoming weekends, activities and special events.
                </p>

                <a
                  href="https://tjs4bpark.guestmateworkspace.com.au"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-md bg-amber-400 px-8 py-3 text-lg font-bold text-green-950 transition hover:bg-amber-300"
                >
                  View All Events
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-white pb-32 pt-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 flex items-end justify-between gap-4">
            <h2 className="text-3xl font-bold text-green-950 md:text-4xl">
              Gallery Preview
            </h2>

            <Link
              href="/gallery"
              className="group flex items-center gap-2 font-bold text-amber-600 transition hover:text-amber-500"
            >
              See our full gallery
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            <GalleryImage
              src="https://vibe.filesafe.space/1784327637926654810/assets/8c91ae7d-d97c-4024-bf07-fca769c8d4fe.png"
              alt="TJ's 4B Park adventure"
            />

            <GalleryImage
              src="https://vibe.filesafe.space/1784327637926654810/assets/5c8af200-593c-42ea-a9b3-c76e2b11d047.png"
              alt="Family camping at TJ's 4B Park"
            />

            <GalleryImage
              src="https://vibe.filesafe.space/1784327637926654810/assets/776bec93-556f-4321-a0c9-c4fced0389d1.png"
              alt="Camping at TJ's 4B Park"
            />

            <GalleryImage
              src="https://vibe.filesafe.space/1784327637926654810/assets/a9abe06e-ad41-44f5-8ba7-570aa047e139.png"
              alt="Glamping at TJ's 4B Park"
            />

            <img
              src="https://vibe.filesafe.space/1784327637926654810/assets/4f0b60ce-d186-4c76-b4a2-bec323fd4f3e.png"
              alt="TJ's 4B Park events"
              className="hidden h-48 w-full rounded-xl object-cover md:block"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="text-green-900">{icon}</div>

      <div>
        <h3 className="font-bold text-green-950">{title}</h3>
        <p className="mt-1 text-xs text-gray-500">{text}</p>
      </div>
    </div>
  );
}

function AdventureCard({
  image,
  title,
  description,
  href,
  button,
  external = false,
}: {
  image: string;
  title: string;
  description: string;
  href: string;
  button: string;
  external?: boolean;
}) {
  const content = (
    <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 text-center">
        <h3 className="mb-3 text-3xl font-bold text-white">{title}</h3>

        <p className="mb-6 text-white/90">{description}</p>

        <span className="w-full rounded-md bg-amber-400 px-5 py-3 text-center font-bold text-green-950 transition hover:bg-amber-300">
          {button}
        </span>
      </div>
    </div>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return <Link href={href}>{content}</Link>;
}

function GalleryImage({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-48 w-full rounded-xl object-cover"
    />
  );
}