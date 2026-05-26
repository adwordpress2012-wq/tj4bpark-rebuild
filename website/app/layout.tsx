import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { MicahChatBubble } from "@/components/MicahChatBubble";
import { tj4bParkTemplate } from "@/lib/tj4b-park";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const { site } = tj4bParkTemplate;

export const metadata: Metadata = {
  metadataBase: new URL("https://tj4bpark.com.au"),
  title: {
    default: `${site.name} | Camping, Glamping & Adventure in Howes Valley NSW`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    type: "website",
    locale: "en_AU",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
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
        <MicahChatBubble />
      </body>
    </html>
  );
}
