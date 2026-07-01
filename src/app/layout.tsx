import type { Metadata } from "next";
import { Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LazyMotion, domAnimation } from "motion/react";
import Particles from "@/components/ui/Particles";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sumac.io'),
  title: "Sumac Systems & Development",
  description: "Stop losing leads to outdated templates. We hand-code custom, lightning-fast websites with built-in automation to turn local traffic into booked jobs.",
  keywords: ["web design", "local business websites", "SEO for contractors", "automated lead follow-up", "custom web development", "local SEO", "service business software"],
  openGraph: {
    title: "Sumac Systems & Development",
    description: "Lightning-fast, custom websites designed to convert local traffic into booked jobs.",
    url: 'https://sumac.io',
    siteName: 'Sumac',
    images: [
      {
        url: '/images/sumac/image1.webp', // We should replace this with a proper 1200x630 OG image later
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
      className={`${spaceGrotesk.variable} ${playfairDisplay.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <style dangerouslySetInnerHTML={{__html: `
          body { overflow: hidden; }
          #global-loader {
            position: fixed;
            inset: 0;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #800000;
            background-image: 
              linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), 
              linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
            background-size: 40px 40px;
            background-position: center center;
            transition: opacity 0.8s ease-in-out, visibility 0.8s ease-in-out;
          }
          .loader-hidden {
            opacity: 0;
            visibility: hidden;
          }
          .loader-center {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 200px;
            height: 200px;
          }
          .ring {
            position: absolute;
            border-radius: 50%;
            border: 1px dashed rgba(124, 255, 103, 0.2);
            animation: spin linear infinite;
          }
          .ring-1 { width: 140px; height: 140px; animation-duration: 10s; }
          .ring-2 { width: 180px; height: 180px; animation-duration: 15s; animation-direction: reverse; border-style: dotted; opacity: 0.5; }
          @keyframes spin {
            100% { transform: rotate(360deg); }
          }
          .draw-path {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: draw 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
          @keyframes draw { to { stroke-dashoffset: 0; } }
          .svg-glow {
            filter: drop-shadow(0 0 15px rgba(124, 255, 103, 0));
            animation: pulseGlow 2s ease-in-out infinite alternate 0.5s;
          }
          @keyframes pulseGlow { to { filter: drop-shadow(0 0 20px rgba(124, 255, 103, 0.3)); } }
          
          .boot-sequence {
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 6px;
          }
          .boot-line {
            font-family: monospace;
            letter-spacing: 0.2em;
            color: rgba(124, 255, 103, 0.6);
            font-size: 9px;
            text-transform: uppercase;
            opacity: 0;
            animation: bootIn 0.1s step-end forwards;
          }
          @keyframes bootIn { to { opacity: 1; } }
        `}} />
      </head>
      <body className="min-h-full flex flex-col">
        <div id="global-loader">
          <div className="loader-center">
            <div className="ring ring-1"></div>
            <div className="ring ring-2"></div>
            <img 
              src="/images/sumac/image3.webp" 
              alt="Sumac Logo"
              className="svg-glow"
              style={{ width: '135px', height: '135px', objectFit: 'contain', position: 'relative', zIndex: 10 }} 
            />
          </div>
          <div className="boot-sequence">
            <div className="boot-line" style={{ animationDelay: '0.2s' }}>INITIALIZING PROTOCOLS...</div>
            <div className="boot-line" style={{ animationDelay: '0.7s', color: 'rgba(255,255,255,0.4)' }}>COMPILING DIGITAL ASSETS...</div>
            <div className="boot-line" style={{ animationDelay: '1.2s', color: '#7cff67', fontWeight: 'bold' }}>SYSTEMS ONLINE</div>
          </div>
        </div>
        <script dangerouslySetInnerHTML={{__html: `
          window.addEventListener('load', function() {
            setTimeout(function() {
              document.getElementById('global-loader').classList.add('loader-hidden');
              document.body.style.overflow = '';
            }, 1200);
          });
        `}} />
        <Particles className="fixed inset-0 pointer-events-none -z-10" quantity={100} ease={80} />
        <LazyMotion features={domAnimation}>
          {children}
        </LazyMotion>
      </body>
    </html>
  );
}
