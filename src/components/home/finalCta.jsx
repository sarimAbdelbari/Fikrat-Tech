'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Instagram } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { buildWaLink, SITE_CONFIG } from '@/lib/config'

const FinalCta = () => {
  const t = useTranslations('home.finalCta')
  const tWa = useTranslations('whatsapp')

  return (
    <section id="contact-cta" className="relative py-24 bg-section-alt overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern" />
        <motion.div
          animate={{ rotate: [0, 360], scale: [1, 1.15, 1] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
          className="absolute top-16 left-16 w-28 h-28 border border-primary/10 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -28, 0], opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-28 right-16 w-18 h-18 border border-accent/12 rotate-45"
        />
      </div>

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto bg-primary/10 backdrop-blur-md rounded-3xl p-12 sm:p-16 border border-primary-light/20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 backdrop-blur-md border border-primary-light/30 text-theme-primary text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {t('badge')}
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-theme-primary mb-6">
            {t('headlinePart1')}{' '}
            <span className="text-gradient-accent">
              {t('headlinePart2')}
            </span>
          </h2>

          <p className="text-lg text-theme-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('body')}
          </p>

          <motion.a
            href={buildWaLink(tWa('generic'))}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 25px 50px rgba(140, 62, 238, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 text-white px-12 py-5 rounded-lg text-xl font-semibold shadow-2xl overflow-hidden mb-6 bg-gradient-primary"
          >
            <span className="relative z-10 flex items-center gap-3">
              {t('cta')}
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight size={22} />
              </motion.div>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-primary-reverse"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-secondary hover:text-theme-primary transition-colors duration-200 text-sm"
            >
              <Instagram size={15} />
              {t('instagram', { handle: SITE_CONFIG.instagram })}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalCta
