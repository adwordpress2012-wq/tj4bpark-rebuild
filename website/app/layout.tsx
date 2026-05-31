import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { tj4bParkTemplate } from "@/lib/tj4b-park";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const { site } = tj4bParkTemplate;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Camping, Glamping & Adventure in Howes Valley NSW`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: site.keywords,
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    url: site.url,
    type: "website",
    locale: "en_AU",
    siteName: site.name,
    images: [
      {
        url: site.ogImage.src,
        width: site.ogImage.width,
        height: site.ogImage.height,
        alt: site.ogImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    images: [site.ogImage.src],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col pb-20 text-charcoal md:pb-0">
        {children}
      </body>
    </html>
  );
}
