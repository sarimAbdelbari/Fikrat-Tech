import { getTranslations, setRequestLocale } from 'next-intl/server'
import AboutHero from '@/components/about/aboutHero'
import AboutStory from '@/components/about/aboutStory'
import AboutProof from '@/components/about/aboutProof'
import AboutVision from '@/components/about/aboutVision'
import AboutValues from '@/components/about/aboutValues'
import AboutCta from '@/components/about/aboutCta'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta' })
  return {
    title: t('about.title'),
    description: t('about.description'),
  }
}

export default async function AboutPage({ params }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <main className="w-full bg-background">
      <AboutHero />
      <AboutStory />
      <AboutProof />
      <AboutVision />
      <AboutValues />
      <AboutCta />
    </main>
  )
}
