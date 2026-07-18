'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { X, CheckCircle2 } from 'lucide-react'
import { useTranslations } from 'next-intl'

const ProblemStatement = () => {
  const t = useTranslations('home.problem')

  const before = [
    { label: t('before.orders') },
    { label: t('before.payments') },
    { label: t('before.delivery') },
    { label: t('before.visibility') },
  ]

  const after = [
    { label: t('after.storefront') },
    { label: t('after.payments') },
    { label: t('after.delivery') },
    { label: t('after.admin') },
  ]

  return (
    <section id="problem" className="relative py-24 bg-section-alt overflow-hidden">
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

          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-theme-primary mb-6">
            {t('headlinePart1')}{' '}
            <span className="text-gradient-accent">
              {t('headlinePart2')}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-secondary text-lg max-w-2xl mx-auto"
          >
            {t('body')}
          </motion.p>
        </motion.div>

        {/* Before / After grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto">
          {/* Before — intentional red exception */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-red-500/5 backdrop-blur-md rounded-2xl p-8 border border-red-400/15"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-red-500/20 border border-red-400/30 flex items-center justify-center">
                <X size={16} className="text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-red-300">{t('beforeTitle')}</h3>
            </div>
            <ul className="space-y-4">
              {before.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="flex items-start gap-3 text-theme-secondary text-sm leading-relaxed"
                >
                  <X size={14} className="text-red-400/70 mt-0.5 flex-shrink-0" />
                  <span className="line-through text-secondary">{item.label}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative bg-primary/5 backdrop-blur-md rounded-2xl p-8 border border-primary/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                <CheckCircle2 size={16} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold text-primary-light">{t('afterTitle')}</h3>
            </div>
            <ul className="space-y-4">
              {after.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.4 }}
                  className="flex items-start gap-3 text-theme-secondary text-sm leading-relaxed"
                >
                  <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-theme-primary">{item.label}</span>
                </motion.li>
              ))}
            </ul>

            {/* Accent glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 to-primary-dark/10 rounded-2xl blur-sm -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProblemStatement
