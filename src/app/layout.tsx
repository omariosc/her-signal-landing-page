import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://her-signal.org'),
  title: "HerSignal - AI-Powered Safety App for Women",
  description: "Stay safe with HerSignal's AI emergency simulation. Instantly generate realistic phone calls to help you escape dangerous situations. Your personal safety companion.",
  keywords: ["women safety", "personal safety app", "AI emergency calls", "safety technology", "violence prevention", "women protection", "emergency simulation", "VAWG", "criminology", "deterrence theory"],
  authors: [{ name: "HerSignal Team" }],
  creator: "HerSignal",
  publisher: "HerSignal",
  robots: "index, follow",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  formatDetection: {
    telephone: false,
    date: false,
    email: false,
    address: false
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'HerSignal'
  },
  openGraph: {
    title: "HerSignal - AI-Powered Safety App for Women",
    description: "Stay safe with HerSignal's AI emergency simulation. Instantly generate realistic phone calls to help you escape dangerous situations.",
    type: "website",
    locale: "en_US",
    url: "https://her-signal.org",
    siteName: "HerSignal",
    images: [
      {
        url: "/logo-light.png",
        width: 1200,
        height: 630,
        alt: "HerSignal - AI-Powered Safety App for Women",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HerSignal - AI-Powered Safety App for Women",
    description: "Stay safe with HerSignal's AI emergency simulation. Instantly generate realistic phone calls to help you escape dangerous situations.",
    images: ["/logo-light.png"],
    creator: "@HerSignalApp",
  },
  alternates: {
    canonical: "https://her-signal.org",
  },
  category: "Safety Technology",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#8b5cf6',
  colorScheme: 'light',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
