'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, X, ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { buildWaLink } from '@/lib/config'

const CellValue = ({ value }) => {
  if (value === true) return <CheckCircle2 size={16} className="text-primary mx-auto" />
  if (value === false) return <X size={14} className="text-theme-tertiary mx-auto" />
  return <span className="text-theme-secondary text-xs">{value}</span>
}

const PricingTable = () => {
  const t = useTranslations('packages.pricing')
  const tCommon = useTranslations('common')
  const tWa = useTranslations('whatsapp')
  const [view, setView] = useState('cards')

  const packages = [
    {
      name: t('boutique.name'),
      tag: t('boutique.tag'),
      examples: t('boutique.examples'),
      price: t('boutique.price'),
      timeline: t('boutique.timeline'),
      waLink: buildWaLink(tWa('boutique')),
      featured: false,
      hasIncludes: false,
      features: Object.values({
        storefront: t('boutique.features.storefront'),
        categories: t('boutique.features.categories'),
        payment: t('boutique.features.payment'),
        ccp: t('boutique.features.ccp'),
        delivery: t('boutique.features.delivery'),
        email: t('boutique.features.email'),
        admin: t('boutique.features.admin'),
        mobile: t('boutique.features.mobile'),
        seo: t('boutique.features.seo'),
        training: t('boutique.features.training'),
        support: t('boutique.features.support'),
      }),
      notIncluded: t('boutique.notIncluded'),
      color: 'from-primary to-accent',
    },
    {
      name: t('commerce.name'),
      tag: t('commerce.tag'),
      badge: t('mostRequested'),
      examples: t('commerce.examples'),
      price: t('commerce.price'),
      timeline: t('commerce.timeline'),
      waLink: buildWaLink(tWa('commerce')),
      featured: true,
      hasIncludes: true,
      features: Object.values({
        includes: t('commerce.features.includes'),
        products: t('commerce.features.products'),
        variations: t('commerce.features.variations'),
        discounts: t('commerce.features.discounts'),
        accounts: t('commerce.features.accounts'),
        tracking: t('commerce.features.tracking'),
        chat: t('commerce.features.chat'),
        analytics: t('commerce.features.analytics'),
        oauth: t('commerce.features.oauth'),
        support: t('commerce.features.support'),
      }),
      notIncluded: t('commerce.notIncluded'),
      color: 'from-accent to-primary',
    },
    {
      name: t('platform.name'),
      tag: t('platform.tag'),
      examples: t('platform.examples'),
      price: t('platform.price'),
      timeline: t('platform.timeline'),
      waLink: buildWaLink(tWa('platform')),
      featured: false,
      hasIncludes: true,
      features: Object.values({
        includes: t('platform.features.includes'),
        variations: t('platform.features.variations'),
        chat: t('platform.features.chat'),
        inbox: t('platform.features.inbox'),
        attachments: t('platform.features.attachments'),
        roles: t('platform.features.roles'),
        permissions: t('platform.features.permissions'),
        notifications: t('platform.features.notifications'),
        bilingual: t('platform.features.bilingual'),
        theme: t('platform.features.theme'),
        pwa: t('platform.features.pwa'),
        analytics: t('platform.features.analytics'),
        otp: t('platform.features.otp'),
        oauth: t('platform.features.oauth'),
        training: t('platform.features.training'),
        support: t('platform.features.support'),
      }),
      color: 'from-primary-dark to-primary',
    },
  ]

  const comparisonFeatures = [
    { name: t('compare.products'), boutique: t('compare.productsBoutique'), commerce: t('compare.productsUnlimited'), platform: t('compare.productsUnlimited') },
    { name: t('compare.categories'), boutique: t('compare.categoriesBoutique'), commerce: t('compare.categoriesUnlimited'), platform: t('compare.categoriesUnlimited') },
    { name: t('compare.variations'), boutique: false, commerce: t('compare.variations2'), platform: t('compare.variations3') },
    { name: t('compare.accounts'), boutique: false, commerce: true, platform: true },
    { name: t('compare.chatOrders'), boutique: false, commerce: true, platform: true },
    { name: t('compare.inbox'), boutique: false, commerce: false, platform: true },
    { name: t('compare.roles'), boutique: false, commerce: false, platform: true },
    { name: t('compare.analytics'), boutique: false, commerce: t('compare.analyticsBasic'), platform: t('compare.analyticsFull') },
    { name: t('compare.bilingual'), boutique: false, commerce: false, platform: true },
    { name: t('compare.push'), boutique: false, commerce: false, platform: true },
    { name: t('compare.pwa'), boutique: false, commerce: false, platform: true },
    { name: t('compare.support'), boutique: t('compare.support30'), commerce: t('compare.support60'), platform: t('compare.support90') },
  ]

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern" />

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* View toggle */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-1 p-1 rounded-xl bg-primary/10 border border-primary-light/20">
            {['cards', 'compare'].map((v) => (
              <motion.button
                key={v}
                onClick={() => setView(v)}
                layout
                className={`relative px-5 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                  view === v ? 'text-white' : 'text-secondary hover:text-theme-secondary'
                }`}
              >
                {view === v && (
                  <motion.div
                    layoutId="viewSelector"
                    className="absolute inset-0 rounded-lg bg-gradient-primary"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">
                  {v === 'compare' ? t('viewCompare') : t('viewCards')}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {view === 'cards' ? (
            <motion.div
              key="cards"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
            >
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className={`relative flex flex-col rounded-2xl overflow-hidden ${
                    pkg.featured
                      ? 'border-2 border-primary/50 shadow-2xl shadow-primary/20'
                      : 'border border-primary-light/15'
                  } bg-primary/5 backdrop-blur-md`}
                >
                  {pkg.featured && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary" />
                  )}
                  {pkg.badge && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold text-white bg-gradient-primary">
                        {pkg.badge}
                      </span>
                    </div>
                  )}

                  <div className="p-7 flex flex-col flex-1">
                    <div className="mb-6">
                      <span className="text-xs text-secondary font-medium uppercase tracking-widest">{pkg.tag}</span>
                      <h3 className="text-xl font-bold text-theme-primary mt-1 mb-1">{pkg.name}</h3>
                      <p className="text-xs text-theme-tertiary mb-3">{pkg.examples}</p>
                      {pkg.price ? (
                        <div className="text-2xl font-bold text-gradient-accent">
                          {pkg.price}
                        </div>
                      ) : null}
                      {pkg.timeline ? (
                        <div className="text-secondary text-sm mt-1">{tCommon('timelineLabel')} {pkg.timeline}</div>
                      ) : null}
                    </div>

                    <ul className="space-y-2.5 flex-1 mb-8">
                      {pkg.features.map((feature, i) => {
                        const isIncludes = pkg.hasIncludes && i === 0
                        return (
                          <li key={i} className={`flex items-start gap-2.5 text-sm ${isIncludes ? 'text-theme-primary font-medium' : 'text-theme-secondary'}`}>
                            {isIncludes ? (
                              <span className="text-primary mt-0.5 flex-shrink-0">↳</span>
                            ) : (
                              <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                            )}
                            {feature}
                          </li>
                        )
                      })}
                    </ul>

                    {pkg.notIncluded && (
                      <p className="text-xs text-theme-tertiary mb-5 pb-5 border-b border-theme">
                        <span className="font-semibold text-secondary">{tCommon('notIncluded')}</span> {pkg.notIncluded}
                      </p>
                    )}

                    <motion.a
                      href={pkg.waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`flex items-center justify-center gap-2 w-full py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                        pkg.featured
                          ? 'text-white shadow-lg bg-gradient-primary'
                          : 'text-theme-primary border border-primary-light/25 hover:border-primary-light/50 hover:bg-primary/10'
                      }`}
                    >
                      {tCommon('getStarted')}
                      <ArrowRight size={15} />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="compare"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="max-w-5xl mx-auto overflow-x-auto"
            >
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-primary-light/20">
                    <th className="text-left py-4 pr-6 text-secondary font-medium text-xs uppercase tracking-widest w-1/3">{t('featureColumn')}</th>
                    {packages.map((pkg) => (
                      <th key={pkg.name} className="text-center py-4 px-4 min-w-[120px]">
                        <div className={`font-bold text-base ${pkg.featured ? 'text-primary' : 'text-theme-primary'}`}>{pkg.name}</div>
                        {pkg.price ? (
                          <div className="text-secondary text-xs mt-1">{pkg.price}</div>
                        ) : null}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, i) => (
                    <tr key={i} className="border-b border-theme hover:bg-primary/5 transition-colors duration-150">
                      <td className="py-3.5 pr-6 text-theme-secondary text-xs">{feature.name}</td>
                      <td className="text-center py-3.5 px-4"><CellValue value={feature.boutique} /></td>
                      <td className="text-center py-3.5 px-4"><CellValue value={feature.commerce} /></td>
                      <td className="text-center py-3.5 px-4"><CellValue value={feature.platform} /></td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td className="pt-6" />
                    {packages.map((pkg) => (
                      <td key={pkg.name} className="text-center pt-6 px-4">
                        <a
                          href={pkg.waLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-semibold text-xs transition-all duration-300 ${
                            pkg.featured
                              ? 'text-white bg-gradient-primary'
                              : 'text-theme-primary border border-primary-light/25 hover:border-primary-light/50 hover:bg-primary/10'
                          }`}
                        >
                          {tCommon('getStarted')}
                        </a>
                      </td>
                    ))}
                  </tr>
                </tfoot>
              </table>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-theme-tertiary text-xs mt-10"
        >
          {tCommon('allPackagesInclude')}
        </motion.p>
      </div>
    </section>
  )
}

export default PricingTable
