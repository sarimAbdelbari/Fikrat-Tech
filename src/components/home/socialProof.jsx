'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Users, ShoppingBag, Star } from 'lucide-react'
import { useTranslations } from 'next-intl'

const SocialProof = () => {
  const t = useTranslations('home.socialProof')

  return (
    <section className="relative py-12 border-y border-theme bg-background/60 backdrop-blur-sm overflow-hidden">
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
        >
          <span className="text-secondary text-sm font-medium uppercase tracking-widest whitespace-nowrap">
            {t('label')}
          </span>

          <div className="w-px h-8 bg-primary-light/20 hidden sm:block" />

          {/* Paradise Game DZ card */}
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-4 px-6 py-3 rounded-2xl bg-primary/5 border border-primary-light/20 backdrop-blur-md"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary-light/30 flex items-center justify-center flex-shrink-0">
              <ShoppingBag size={18} className="text-primary" />
            </div>
            <div>
              <div className="text-theme-primary font-semibold text-sm">{t('client')}</div>
              <div className="flex items-center gap-1 text-secondary text-xs mt-0.5">
                <Users size={11} />
                <span>{t('stat')}</span>
              </div>
            </div>
            <div className="flex items-center gap-0.5 ml-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={10} className="text-primary fill-primary" />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialProof
