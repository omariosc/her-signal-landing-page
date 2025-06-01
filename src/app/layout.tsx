import type { Metadata } from "next";
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
  title: "HerSignal - AI-Powered Safety App for Women",
  description: "Stay safe with HerSignal's AI emergency simulation. Instantly generate realistic phone calls to help you escape dangerous situations. Your personal safety companion.",
  keywords: ["women safety", "personal safety app", "AI emergency calls", "safety technology", "violence prevention", "women protection"],
  authors: [{ name: "HerSignal Team" }],
  creator: "HerSignal",
  publisher: "HerSignal",
  robots: "index, follow",
  icons: [
    {
      rel: "icon",
      url: "/logo-light.png",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon", 
      url: "/logo-dark.png",
      media: "(prefers-color-scheme: dark)",
    },
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
  openGraph: {
    title: "HerSignal - AI-Powered Safety App for Women",
    description: "Stay safe with HerSignal's AI emergency simulation. Instantly generate realistic phone calls to help you escape dangerous situations.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "HerSignal - AI-Powered Safety App for Women",
    description: "Stay safe with HerSignal's AI emergency simulation. Instantly generate realistic phone calls to help you escape dangerous situations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
