import { getTranslations, setRequestLocale } from 'next-intl/server'
import ReadingProgress from '@/components/work/caseStudy/readingProgress'
import CaseStudyHero from '@/components/work/caseStudy/caseStudyHero'
import CaseStudyOverview from '@/components/work/caseStudy/caseStudyOverview'
import CaseStudySolution from '@/components/work/caseStudy/caseStudySolution'
import CaseStudyResult from '@/components/work/caseStudy/caseStudyResult'
import CaseStudyCta from '@/components/work/caseStudy/caseStudyCta'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta' })
  return {
    title: t('caseStudy.title'),
    description: t('caseStudy.description'),
  }
}

export default async function ParadiseGameDzPage({ params }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <main className="w-full bg-background">
      <ReadingProgress />
      <CaseStudyHero />
      <CaseStudyOverview />
      <CaseStudySolution />
      <CaseStudyResult />
      <CaseStudyCta />
    </main>
  )
}
