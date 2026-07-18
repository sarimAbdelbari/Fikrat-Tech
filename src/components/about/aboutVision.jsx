'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const AboutVision = () => {
  const t = useTranslations('about.vision')

  return (
    <section className="relative py-20 border-b border-theme overflow-hidden">
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="text-xs text-theme-primary font-semibold uppercase tracking-widest mb-4">{t('eyebrow')}</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-theme-primary mb-8">
            {t('headline')}
          </h2>

          <div className="space-y-5 text-theme-secondary leading-relaxed text-lg">
            <p>{t('p1')}</p>
            <p>{t('p2')}</p>
            <p className="text-theme-primary font-medium">{t('p3')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutVision
