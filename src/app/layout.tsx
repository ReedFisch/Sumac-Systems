import type { Metadata } from "next";
import { Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LazyMotion, domAnimation } from "motion/react";
import GlobalParticles from "@/components/ui/GlobalParticles";
import SiteBehavior from "@/components/ui/SiteBehavior";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import AnalyticsEvents from "@/components/analytics/AnalyticsEvents";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const socialPreviewImage = {
  url: "/images/sumac/image12.webp",
  width: 2048,
  height: 1143,
  alt: "Red sumac fruit and green leaves in the forest",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://sumac.systems'),
  title: "Sumac Systems",
  description: "Stop losing leads to outdated templates. We custom code lightning-fast websites with built-in automation to turn local traffic into booked jobs.",
  icons: {
    icon: '/images/sumac/image3.webp',
    apple: '/images/sumac/image3.webp',
  },
  keywords: ["web design", "local business websites", "SEO for contractors", "automated lead follow-up", "custom web development", "local SEO", "service business software"],
  openGraph: {
    title: "Sumac Systems",
    description: "Lightning-fast, custom websites designed to convert local traffic into booked jobs.",
    url: 'https://sumac.systems',
    siteName: 'Sumac Systems',
    images: [socialPreviewImage],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sumac Systems',
    description: 'Lightning-fast, custom websites designed to convert local traffic into booked jobs.',
    images: [socialPreviewImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${playfairDisplay.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <SiteBehavior />
        <GlobalParticles />
        <GoogleAnalytics />
        <AnalyticsEvents />
        <LazyMotion features={domAnimation}>
          {children}
        </LazyMotion>
      </body>
    </html>
  );
}
