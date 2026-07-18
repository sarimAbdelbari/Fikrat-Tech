'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Users } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

const FeaturedWork = () => {
  const t = useTranslations('home.featuredWork')

  const deliverables = [
    t('delivered.storefront'),
    t('delivered.catalog'),
    t('delivered.chat'),
    t('delivered.admin'),
    t('delivered.roles'),
    t('delivered.push'),
  ]

  return (
    <section id="work-preview" className="relative py-24 bg-section-alt overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 backdrop-blur-md border border-primary-light/30 text-theme-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            {t('badge')}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-theme-primary mb-4">
            {t('headlinePart1')}{' '}
            <span className="text-gradient-accent">
              {t('headlinePart2')}
            </span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Client stat */}
            <div className="flex items-center gap-3 mb-8 p-4 rounded-xl bg-primary/5 border border-primary-light/15 w-fit">
              <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary-light/30 flex items-center justify-center">
                <Users size={18} className="text-primary" />
              </div>
              <div>
                <div className="text-theme-primary font-bold text-lg">{t('client')}</div>
                <div className="text-secondary text-sm">{t('stat')}</div>
              </div>
            </div>

            <p className="text-theme-secondary leading-relaxed mb-6">
              {t('paragraph1')}
            </p>
            <p className="text-theme-secondary leading-relaxed mb-8">
              {t('paragraph2')}
            </p>

            <Link
              href="/work/paradise-game-dz"
              className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-xl group bg-gradient-primary"
            >
              {t('cta')}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>

          {/* Right — deliverables */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-primary/5 backdrop-blur-md rounded-2xl p-8 border border-primary-light/15"
          >
            <h3 className="text-theme-primary font-semibold text-sm uppercase tracking-widest mb-6">{t('deliveredTitle')}</h3>
            <ul className="space-y-4">
              {deliverables.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.3 }}
                  className="flex items-start gap-3 text-theme-secondary text-sm leading-relaxed"
                >
                  <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-theme">
              <p className="text-theme-primary font-semibold text-sm">
                {t('liveNote')}{' '}
                <span className="text-gradient-accent">
                  {t('worksNote')}
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedWork
