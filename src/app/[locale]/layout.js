import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getMessages, setRequestLocale, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Geist, Geist_Mono, Noto_Sans_Arabic } from 'next/font/google'
import { routing } from '@/i18n/routing'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import BtnToTop from '@/components/layout/btnToTop'
import WhatsAppBtn from '@/components/layout/whatsAppBtn'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const notoSansArabic = Noto_Sans_Arabic({
  variable: '--font-arabic',
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta' })

  const ogLocaleMap = {
    en: 'en_US',
    fr: 'fr_FR',
    ar: 'ar_DZ',
  }

  return {
    title: {
      default: t('titleDefault'),
      template: t('titleTemplate'),
    },
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: 'Fikrat DZ' }],
    creator: 'Fikrat DZ',
    publisher: 'Fikrat DZ',
    formatDetection: { email: false, address: false, telephone: false },
    metadataBase: new URL('https://fikratdz.tech'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: `https://fikratdz.tech/${locale}`,
      siteName: 'Fikrat DZ',
      locale: ogLocaleMap[locale] || 'en_US',
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
  }
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  const messages = await getMessages()
  const t = await getTranslations({ locale, namespace: 'meta' })
  const dir = locale === 'ar' ? 'rtl' : 'ltr'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Fikrat DZ',
    url: 'https://fikratdz.tech',
    description: t('jsonLdDescription'),
    email: 'contact@fikratdz.tech',
    areaServed: 'Algeria',
    sameAs: ['https://www.instagram.com/fikratdz'],
    serviceType: [
      t('serviceTypes.storefront'),
      t('serviceTypes.payment'),
      t('serviceTypes.orders'),
      t('serviceTypes.admin'),
      t('serviceTypes.chat'),
      t('serviceTypes.pwa'),
    ],
  }

  return (
    <html lang={locale} dir={dir} className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansArabic.variable} antialiased ${
          locale === 'ar' ? 'font-arabic' : ''
        }`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
          <BtnToTop />
          <WhatsAppBtn />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
