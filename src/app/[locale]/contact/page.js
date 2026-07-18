import { getTranslations, setRequestLocale } from 'next-intl/server'
import ContactHero from '@/components/contact/contactHero'
import ContactOptions from '@/components/contact/contactOptions'
import ContactFaq from '@/components/contact/contactFaq'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta' })
  return {
    title: t('contact.title'),
    description: t('contact.description'),
  }
}

export default async function ContactPage({ params }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <main className="w-full bg-background">
      <ContactHero />
      <ContactOptions />
      <ContactFaq />
    </main>
  )
}
