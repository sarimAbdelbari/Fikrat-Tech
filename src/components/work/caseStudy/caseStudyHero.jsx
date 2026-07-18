'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const CaseStudyHero = () => {
  const t = useTranslations('caseStudy.paradise.hero')

  const meta = [
    { label: t('meta.clientLabel'), value: t('meta.clientValue') },
    { label: t('meta.industryLabel'), value: t('meta.industryValue') },
    { label: t('meta.communityLabel'), value: t('meta.communityValue') },
    { label: t('meta.deliverableLabel'), value: t('meta.deliverableValue') },
  ]

  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 backdrop-blur-md border border-primary-light/30 text-theme-primary text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary" />
          {t('badge')}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-theme-primary mb-10 leading-tight"
        >
          {t('headline')}
        </motion.h1>

        {/* Meta bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {meta.map((item, i) => (
            <div key={i} className="bg-primary/5 backdrop-blur-md rounded-xl p-4 border border-primary-light/15">
              <div className="text-xs text-secondary font-medium uppercase tracking-widest mb-1">{item.label}</div>
              <div className="text-theme-primary font-semibold text-sm">{item.value}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudyHero
