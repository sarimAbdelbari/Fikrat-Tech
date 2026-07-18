'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Puzzle, ShieldCheck, Trophy } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { buildWaLink } from '@/lib/config'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
}

const WhyFikrat = () => {
  const t = useTranslations('home.whyFikrat')
  const tWa = useTranslations('whatsapp')

  const points = [
    {
      icon: MapPin,
      title: t('points.market.title'),
      description: t('points.market.description'),
      color: 'from-primary to-accent',
    },
    {
      icon: Puzzle,
      title: t('points.systems.title'),
      description: t('points.systems.description'),
      color: 'from-accent to-primary',
    },
    {
      icon: ShieldCheck,
      title: t('points.ownership.title'),
      description: t('points.ownership.description'),
      color: 'from-primary to-primary-dark',
    },
    {
      icon: Trophy,
      title: t('points.proof.title'),
      description: t('points.proof.description'),
      color: 'from-primary-dark to-primary',
    },
  ]

  return (
    <section id="why-us" className="relative py-24 bg-section-alt overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:120px_120px]" />
        <motion.div
          animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 right-10 w-24 h-24 border border-primary/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: [360, 0], y: [0, -20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 left-10 w-16 h-16 border border-accent/10 rotate-45"
        />
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

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-theme-primary mb-4">
            {t('headlinePart1')}{' '}
            <span className="text-gradient-accent">{t('headlinePart2')}</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {points.map((point, index) => {
            const Icon = point.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="group relative bg-primary/5 backdrop-blur-md rounded-2xl p-7 border border-primary-light/15 hover:border-primary-light/35 transition-all duration-400 hover:bg-primary/10"
              >
                <div className="flex items-start gap-4">
                  <div className="relative w-14 h-14 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <div className={`absolute inset-0 bg-gradient-to-br ${point.color} rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                    <div className={`relative w-full h-full bg-gradient-to-br ${point.color} rounded-2xl flex items-center justify-center`}>
                      <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-theme-primary mb-2 group-hover:text-white transition-colors duration-300">
                      {point.title}
                    </h3>
                    <p className="text-secondary text-sm leading-relaxed">{point.description}</p>
                  </div>
                </div>

                <motion.div
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${point.color} rounded-b-2xl`}
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-14"
        >
          <motion.a
            href={buildWaLink(tWa('generic'))}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(140, 62, 238, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center gap-2 text-white px-10 py-4 rounded-lg text-lg font-semibold shadow-xl overflow-hidden bg-gradient-primary"
          >
            <span className="relative z-10">{t('cta')}</span>
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

export default WhyFikrat
