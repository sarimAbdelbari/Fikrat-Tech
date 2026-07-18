'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { buildWaLink } from '@/lib/config'

const PackagesCta = () => {
  const t = useTranslations('packages.cta')
  const tWa = useTranslations('whatsapp')

  return (
    <section className="relative py-20 border-t border-theme overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern" />

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto bg-primary/10 backdrop-blur-md rounded-3xl p-10 sm:p-14 border border-primary-light/20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-theme-primary mb-4">
            {t('headline')}
          </h2>
          <p className="text-secondary text-lg mb-8 leading-relaxed">
            {t('body')}
          </p>

          <motion.a
            href={buildWaLink(tWa('generic'))}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(140, 62, 238, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center gap-2 text-white px-10 py-4 rounded-lg text-lg font-semibold shadow-xl overflow-hidden bg-gradient-primary"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t('button')}
              <ArrowRight size={18} />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-primary-reverse"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default PackagesCta
