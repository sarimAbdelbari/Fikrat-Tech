import { getTranslations, setRequestLocale } from 'next-intl/server'
import PackagesHero from '@/components/packages/packagesHero'
import PricingTable from '@/components/packages/pricingTable'
import MaintenancePlans from '@/components/packages/maintenancePlans'
import PackagesFaq from '@/components/packages/packagesFaq'
import PackagesCta from '@/components/packages/packagesCta'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta' })
  return {
    title: t('packages.title'),
    description: t('packages.description'),
  }
}

export default async function PackagesPage({ params }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <main className="w-full bg-background">
      <PackagesHero />
      <PricingTable />
      <MaintenancePlans />
      <PackagesFaq />
      <PackagesCta />
    </main>
  )
}
