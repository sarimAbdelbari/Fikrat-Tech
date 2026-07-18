'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

const AboutProof = () => {
  const t = useTranslations('about.proof')

  const deliverables = Object.values({
    chat: t('deliverables.chat'),
    storefront: t('deliverables.storefront'),
    admin: t('deliverables.admin'),
    payment: t('deliverables.payment'),
  })

  return (
    <section className="relative py-20 border-b border-theme overflow-hidden">
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-xs text-theme-primary font-semibold uppercase tracking-widest mb-4">{t('eyebrow')}</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-theme-primary mb-6">
              {t('headline')}
            </h2>
            <div className="space-y-4 text-theme-secondary leading-relaxed mb-8">
              <p>{t('p1')}</p>
              <p>{t('p2')}</p>
              <p className="text-theme-primary font-medium">{t('p3')}</p>
              <p>{t('p4')}</p>
            </div>

            <Link
              href="/work/paradise-game-dz"
              className="inline-flex items-center gap-2 text-theme-primary font-semibold hover:text-white transition-colors duration-200 group"
            >
              {t('cta')}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-primary/5 backdrop-blur-md rounded-2xl p-7 border border-primary-light/15"
          >
            <div className="text-xs text-secondary font-medium uppercase tracking-widest mb-5">{t('sidebarEyebrow')}</div>
            <ul className="space-y-3 mb-6">
              {deliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-theme-secondary text-sm">
                  <CheckCircle2 size={15} className="text-primary mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 pt-5 border-t border-theme">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-theme-primary text-sm font-medium">{t('status')}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutProof
