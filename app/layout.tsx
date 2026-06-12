import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE } from "@/content/ecosystem";

export const metadata: Metadata = {
  metadataBase: new URL("https://atlas.interchained.org"),
  title: `${SITE.title} — ${SITE.tagline}`,
  description: SITE.description,
  openGraph: {
    title: SITE.title,
    description: SITE.tagline,
    type: "website",
    siteName: SITE.title,
    url: "/",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE.title} — ${SITE.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.tagline,
    images: ["/og.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#050810",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-ink font-body text-chain antialiased">
        {children}
      </body>
    </html>
  );
}
