import { getTranslations, setRequestLocale } from 'next-intl/server'
import WorkHero from '@/components/work/workHero'
import WorkGrid from '@/components/work/workGrid'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta' })
  return {
    title: t('work.title'),
    description: t('work.description'),
  }
}

export default async function WorkPage({ params }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <main className="w-full bg-background">
      <WorkHero />
      <WorkGrid />
    </main>
  )
}
