import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Container from "@/components/layout/container";
import BtnToTop from "@/components/layout/btnToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fikrat Digital Product Agency | You Imagine. We Build.",
  description: "Transform your ideas into digital reality. Professional web development, mobile apps, and digital solutions for entrepreneurs and visionaries.",
  keywords: "digital agency, web development, mobile apps, startup technology, digital products, accessible development, performance optimization",
  authors: [{ name: "Fikrat Tech" }],
  icons: {
    icon: '/assets/4.png',
  },
  creator: "Fikrat Tech",
  publisher: "Fikrat Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fikrat.tech'),
  openGraph: {
    title: "Fikrat Tech - Digital Product Agency",
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Fikrat Tech',
    url: 'https://fikrat.tech',
    logo: 'https://fikrat.tech/assets/Fikrat%20Tech%20(2).png',
    description: 'Transform your ideas into digital reality. Professional web development, mobile apps, and digital solutions for entrepreneurs and visionaries.',
    email: 'contact@fikrat.tech',
    sameAs: [
      'https://www.instagram.com/fikrat.tech',
      'https://www.facebook.com/fikrat.tech',
      'https://www.linkedin.com/company/fikrat-tech',
      'https://twitter.com/fikrat_tech'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+92-317-0101666',
      contactType: 'Customer Service',
      availableLanguage: ['English']
    },
    areaServed: 'Worldwide',
    serviceType: [
      'Web Development',
      'Mobile App Development',
      'UI/UX Design',
      'MVP Development',
      'Prototype Development',
      'Brand Identity'
    ]
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <BtnToTop />
      </body>
    </html>
  );
}
