'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const CaseStudyOverview = () => {
  const t = useTranslations('caseStudy.paradise.overview')

  const sections = [
    {
      label: t('clientTitle'),
      content: t('clientBody'),
    },
    {
      label: t('problemTitle'),
      content: t('problemBody'),
    },
    {
      label: t('goalTitle'),
      goals: Object.values({
        storefront: t('goals.storefront'),
        payment: t('goals.payment'),
        orders: t('goals.orders'),
        chat: t('goals.chat'),
        visibility: t('goals.visibility'),
      }),
    },
  ]

  return (
    <section className="relative py-20 border-b border-theme overflow-hidden">
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="space-y-4"
            >
              <div className="text-xs text-theme-primary font-semibold uppercase tracking-widest pb-3 border-b border-primary-light/20">
                {section.label}
              </div>
              {section.content && (
                <p className="text-theme-secondary leading-relaxed text-sm">{section.content}</p>
              )}
              {section.goals && (
                <ol className="space-y-2">
                  {section.goals.map((goal, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-theme-secondary text-sm">
                      <span className="w-5 h-5 rounded-full bg-primary/20 border border-primary-light/30 text-primary text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                        {j + 1}
                      </span>
                      {goal}
                    </li>
                  ))}
                </ol>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudyOverview
