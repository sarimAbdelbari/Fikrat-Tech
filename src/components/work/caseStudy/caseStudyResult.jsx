'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { useTranslations } from 'next-intl'

const CaseStudyResult = () => {
  const t = useTranslations('caseStudy.paradise.result')

  const metrics = Object.values({
    orderVolume: t('metrics.orderVolume'),
    timeSaved: t('metrics.timeSaved'),
    activeUsers: t('metrics.activeUsers'),
  })

  return (
    <section className="relative py-20 border-b border-theme overflow-hidden">
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Result */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-xs text-theme-primary font-semibold uppercase tracking-widest mb-3">{t('eyebrow')}</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-theme-primary mb-6">{t('headline')}</h2>
            <p className="text-theme-secondary leading-relaxed mb-4">
              {t('p1')}
            </p>
            <p className="text-theme-secondary leading-relaxed mb-8">
              {t('p2')}
            </p>

            {/* Metrics placeholder */}
            <div className="grid grid-cols-3 gap-4">
              {metrics.map((metric, i) => (
                <div key={i} className="bg-primary/5 border border-primary-light/15 rounded-xl p-4 text-center">
                  <div className="text-xl font-bold text-secondary mb-1">—</div>
                  <div className="text-xs text-theme-tertiary">{metric}</div>
                </div>
              ))}
            </div>
            <p className="text-theme-tertiary text-xs mt-3">{t('metricsNote')}</p>
          </motion.div>

          {/* Testimonial placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative bg-primary/5 backdrop-blur-md rounded-2xl p-8 border border-primary-light/15"
          >
            <Quote size={32} className="text-primary/40 mb-4" />
            <blockquote className="text-theme-secondary text-lg italic leading-relaxed mb-6">
              &ldquo;{t('testimonial')}&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary-light/25 flex items-center justify-center">
                <span className="text-primary text-sm font-bold">P</span>
              </div>
              <div>
                <div className="text-theme-primary font-semibold text-sm">{t('attribution')}</div>
                <div className="text-secondary text-xs">{t('role')}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudyResult
