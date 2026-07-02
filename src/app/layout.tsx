import type { Metadata } from "next";
import Image from "next/image";
import { Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LazyMotion, domAnimation } from "motion/react";
import GlobalParticles from "@/components/ui/GlobalParticles";
import LoaderDismiss from "@/components/ui/LoaderDismiss";

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

export const metadata: Metadata = {
  metadataBase: new URL('https://sumac.systems'),
  title: "Sumac Systems & Development",
  description: "Stop losing leads to outdated templates. We custom code lightning-fast websites with built-in automation to turn local traffic into booked jobs.",
  icons: {
    icon: '/images/sumac/image3.webp',
    apple: '/images/sumac/image3.webp',
  },
  keywords: ["web design", "local business websites", "SEO for contractors", "automated lead follow-up", "custom web development", "local SEO", "service business software"],
  openGraph: {
    title: "Sumac Systems & Development",
    description: "Lightning-fast, custom websites designed to convert local traffic into booked jobs.",
    url: 'https://sumac.systems',
    siteName: 'Sumac',
    images: [
      {
        url: '/images/sumac/image1.webp',
        width: 800,
        height: 600,
        alt: 'Sumac Systems',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sumac Systems',
    description: 'Lightning-fast, custom websites designed to convert local traffic into booked jobs.',
    images: ['/images/sumac/image1.webp'],
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
      <body className="loader-active min-h-full flex flex-col">
        <div id="global-loader">
          <div className="loader-content">
            <div className="loader-center">
              <div className="loader-ring loader-ring-1" />
              <div className="loader-ring loader-ring-2" />
              <Image
                src="/images/sumac/image3.webp"
                alt="Sumac Logo"
                width={135}
                height={135}
                priority
                className="svg-glow relative z-10 object-contain"
              />
            </div>
            <div className="boot-sequence">
              <div className="boot-line" style={{ animationDelay: '0.2s' }}>INITIALIZING PROTOCOLS...</div>
              <div className="boot-line" style={{ animationDelay: '0.7s', color: 'rgba(255,255,255,0.4)' }}>COMPILING DIGITAL ASSETS...</div>
              <div className="boot-line" style={{ animationDelay: '1.2s', color: '#882F18', fontWeight: 'bold' }}>SYSTEMS ONLINE</div>
            </div>
          </div>
        </div>
        <LoaderDismiss />
        <GlobalParticles />
        <LazyMotion features={domAnimation}>
          {children}
        </LazyMotion>
      </body>
    </html>
  );
}
