'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { buildWaLink } from '@/lib/config'

const MaintenancePlans = () => {
  const t = useTranslations('packages.maintenance')
  const tWa = useTranslations('whatsapp')

  const plans = [
    {
      name: t('basic.name'),
      price: t('basic.price'),
      hasIncludes: false,
      features: Object.values({
        bugs: t('basic.features.bugs'),
        security: t('basic.features.security'),
        hosting: t('basic.features.hosting'),
      }),
      color: 'from-primary to-accent',
    },
    {
      name: t('standard.name'),
      price: t('standard.price'),
      hasIncludes: true,
      features: Object.values({
        includes: t('standard.features.includes'),
        products: t('standard.features.products'),
        content: t('standard.features.content'),
        check: t('standard.features.check'),
      }),
      color: 'from-accent to-primary',
      featured: true,
    },
    {
      name: t('priority.name'),
      price: t('priority.price'),
      hasIncludes: true,
      features: Object.values({
        includes: t('priority.features.includes'),
        response: t('priority.features.response'),
        features: t('priority.features.features'),
        call: t('priority.features.call'),
      }),
      color: 'from-primary-dark to-primary',
    },
  ]

  return (
    <section className="relative py-20 border-t border-theme overflow-hidden">
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-theme-primary mb-3">
            {t('headline')}
          </h2>
          <p className="text-secondary text-lg max-w-xl mx-auto">
            {t('body')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`relative flex flex-col bg-primary/5 backdrop-blur-md rounded-2xl p-6 border ${
                plan.featured ? 'border-primary/40 shadow-xl shadow-primary/10' : 'border-primary-light/15'
              } hover:border-primary-light/35 transition-all duration-300`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-t-2xl" />
              )}

              <h3 className="text-lg font-bold text-theme-primary mb-1">{plan.name}</h3>
              <div className="text-xl font-bold text-gradient-accent mb-5">
                {plan.price}
              </div>

              <ul className="space-y-2.5 flex-1">
                {plan.features.map((feature, i) => {
                  const isIncludes = plan.hasIncludes && i === 0
                  return (
                    <li key={i} className={`flex items-start gap-2.5 text-sm ${isIncludes ? 'text-theme-primary font-medium' : 'text-secondary'}`}>
                      {isIncludes ? (
                        <span className="text-primary mt-0.5 flex-shrink-0">↳</span>
                      ) : (
                        <CheckCircle2 size={13} className="text-primary mt-0.5 flex-shrink-0" />
                      )}
                      {feature}
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href={buildWaLink(tWa('generic'))}
            target="_blank"
            rel="noopener noreferrer"
            className="text-theme-primary text-sm hover:text-white transition-colors duration-200"
          >
            {t('askLink')}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default MaintenancePlans
