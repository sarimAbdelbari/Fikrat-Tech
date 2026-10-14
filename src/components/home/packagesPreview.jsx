'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { buildWaLink } from '@/lib/config'

const PackagesPreview = () => {
  const t = useTranslations('home.packagesPreview')
  const tCommon = useTranslations('common')
  const tWa = useTranslations('whatsapp')

  const packages = [
    {
      name: t('boutique.name'),
      tag: t('boutique.tag'),
      price: t('boutique.price'),
      timeline: t('boutique.timeline'),
      waLink: buildWaLink(tWa('boutique')),
      features: [
        t('boutique.features.storefront'),
        t('boutique.features.payment'),
        t('boutique.features.delivery'),
        t('boutique.features.admin'),
        t('boutique.features.support'),
      ],
      featured: false,
      color: 'from-primary to-accent',
    },
    {
      name: t('commerce.name'),
      tag: t('commerce.tag'),
      price: t('commerce.price'),
      timeline: t('commerce.timeline'),
      waLink: buildWaLink(tWa('commerce')),
      features: [
        t('commerce.features.accounts'),
        t('commerce.features.variations'),
        t('commerce.features.chat'),
        t('commerce.features.analytics'),
        t('commerce.features.oauth'),
        t('commerce.features.support'),
      ],
      featured: true,
      color: 'from-accent to-primary',
    },
    {
      name: t('platform.name'),
      tag: t('platform.tag'),
      price: t('platform.price'),
      timeline: t('platform.timeline'),
      waLink: buildWaLink(tWa('platform')),
      features: [
        t('platform.features.chat'),
        t('platform.features.roles'),
        t('platform.features.analytics'),
        t('platform.features.bilingual'),
        t('platform.features.pwa'),
        t('platform.features.support'),
      ],
      featured: false,
      color: 'from-primary-dark to-primary',
    },
  ]

  return (
    <section id="packages-preview" className="relative py-24 bg-section-alt overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 backdrop-blur-md border border-primary-light/30 text-theme-primary text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary" />
            {t('badge')}
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-theme-primary mb-4">
            {t('headlinePart1')}{' '}
            <span className="text-gradient-accent">
              {t('headlinePart2')}
            </span>{' '}
            {t('headlinePart3')}
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            {t('body')}
          </p>
        </motion.div>

        {/* Package cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative flex flex-col rounded-2xl overflow-hidden ${
                pkg.featured
                  ? 'border-2 border-primary/50 shadow-2xl shadow-primary/20'
                  : 'border border-primary-light/15'
              } bg-primary/5 backdrop-blur-md`}
            >
              {pkg.featured && (
                <div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary"
                />
              )}

              {pkg.featured && (
                <div className="absolute top-4 right-4">
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold text-white bg-gradient-primary">
                    {t('mostRequested')}
                  </span>
                </div>
              )}

              <div className="p-7 flex flex-col flex-1">
                <div className="mb-6">
                  <span className="text-xs text-secondary font-medium uppercase tracking-widest">{pkg.tag}</span>
                  <h3 className="text-xl font-bold text-theme-primary mt-1 mb-1">{pkg.name}</h3>
                  {pkg.price ? (
                    <div className="text-2xl font-bold text-gradient-accent">
                      {pkg.price}
                    </div>
                  ) : null}
                  {pkg.timeline ? (
                    <div className="text-secondary text-sm mt-1">{tCommon('timelineLabel')} {pkg.timeline}</div>
                  ) : null}
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-theme-secondary text-sm">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

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
        </div>

        {/* Note + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-secondary text-sm mb-3">
            {tCommon('allPackagesInclude')}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-theme-primary font-semibold text-base hover:text-white transition-colors duration-200 group"
          >
            {t('notSure')}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default PackagesPreview
