import { getTranslations, setRequestLocale } from 'next-intl/server'
import ServicesHero from '@/components/services/servicesHero'
import ServiceDetail from '@/components/services/serviceDetail'
import ServicesCta from '@/components/services/servicesCta'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta' })
  return {
    title: t('services.title'),
    description: t('services.description'),
  }
}

export default async function ServicesPage({ params }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('services')

  const services = [
    {
      iconName: 'Store',
      title: t('items.storefront.title'),
      description: t('items.storefront.description'),
      features: [
        t('items.storefront.features.catalog'),
        t('items.storefront.features.search'),
        t('items.storefront.features.variations'),
        t('items.storefront.features.discounts'),
        t('items.storefront.features.featured'),
        t('items.storefront.features.dzd'),
        t('items.storefront.features.mobile'),
        t('items.storefront.features.seo'),
      ],
      color: 'from-blue-400 to-indigo-400',
      reverse: false,
    },
    {
      iconName: 'CreditCard',
      title: t('items.payment.title'),
      description: t('items.payment.description'),
      features: [
        t('items.payment.features.chargily'),
        t('items.payment.features.flexy'),
        t('items.payment.features.ccp'),
        t('items.payment.features.flow'),
        t('items.payment.features.noScreenshots'),
        t('items.payment.features.traceable'),
      ],
      color: 'from-sky-400 to-blue-400',
      reverse: true,
    },
    {
      iconName: 'Package',
      title: t('items.orders.title'),
      description: t('items.orders.description'),
      features: [
        t('items.orders.features.creation'),
        t('items.orders.features.staffOrders'),
        t('items.orders.features.cancellation'),
        t('items.orders.features.downloads'),
        t('items.orders.features.licenses'),
        t('items.orders.features.r2'),
        t('items.orders.features.email'),
        t('items.orders.features.history'),
      ],
      color: 'from-cyan-400 to-sky-400',
      reverse: false,
    },
    {
      iconName: 'LayoutDashboard',
      title: t('items.admin.title'),
      description: t('items.admin.description'),
      features: [
        t('items.admin.features.crud'),
        t('items.admin.features.orders'),
        t('items.admin.features.customers'),
        t('items.admin.features.staff'),
        t('items.admin.features.revenue'),
        t('items.admin.features.insights'),
        t('items.admin.features.chats'),
      ],
      color: 'from-indigo-400 to-blue-400',
      reverse: true,
    },
    {
      iconName: 'MessageSquare',
      title: t('items.chat.title'),
      description: t('items.chat.description'),
      badge: t('items.chat.badge'),
      features: [
        t('items.chat.features.thread'),
        t('items.chat.features.ordering'),
        t('items.chat.features.attachments'),
        t('items.chat.features.previews'),
        t('items.chat.features.inbox'),
        t('items.chat.features.info'),
        t('items.chat.features.templates'),
        t('items.chat.features.actions'),
        t('items.chat.features.bell'),
      ],
      color: 'from-blue-400 to-sky-400',
      reverse: false,
    },
  ]

  return (
    <main className="w-full bg-background">
      <ServicesHero />
      {services.map((service, index) => (
        <ServiceDetail
          key={index}
          index={index}
          iconName={service.iconName}
          title={service.title}
          description={service.description}
          features={service.features}
          badge={service.badge}
          reverse={service.reverse}
          color={service.color}
        />
      ))}
      <ServicesCta />
    </main>
  )
}
