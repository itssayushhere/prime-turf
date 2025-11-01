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
  title: "Prime Turf Marol - Premier Sports Facility in Mumbai",
  description: "Experience world-class sports facilities at Prime Turf Marol. Book football, cricket, pickleball courts and more in Andheri East, Mumbai. Professional-grade turf with excellent amenities.",
  keywords: "sports turf, football field, cricket pitch, pickleball courts, sports facility, Mumbai, Marol, Andheri East, book sports venue",
  authors: [{ name: "Prime Turf Marol" }],
  openGraph: {
    title: "Prime Turf Marol - Premier Sports Facility",
    description: "World-class sports facilities for football, cricket, pickleball and more in Mumbai's Marol area.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prime Turf Marol - Premier Sports Facility",
    description: "World-class sports facilities in Mumbai. Book your slot today!",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
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
