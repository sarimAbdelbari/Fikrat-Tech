import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Container from "@/components/layout/container";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fikrat.tech - Digital Product Agency | You Imagine. We Build.",
  description: "Transform your ideas into digital reality. Professional web development, mobile apps, and digital solutions for entrepreneurs and visionaries. WCAG compliant, performance optimized.",
  keywords: "digital agency, web development, mobile apps, startup technology, digital products, accessible development, performance optimization",
  authors: [{ name: "Fikrat.tech" }],
  creator: "Fikrat.tech",
  publisher: "Fikrat.tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fikrat.tech'),
  openGraph: {
    title: "Fikrat.tech - Digital Product Agency",
    description: "Transform your ideas into digital reality with professional development services.",
    url: 'https://fikrat.tech',
    siteName: 'Fikrat.tech',
    locale: 'en_US',
    type: 'website',
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
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
