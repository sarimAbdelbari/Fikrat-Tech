'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Phone, FileText, Hammer, Rocket } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { buildWaLink } from '@/lib/config'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } }
}

const stepVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.85 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } }
}

const Process = () => {
  const t = useTranslations('home.process')
  const tWa = useTranslations('whatsapp')

  const steps = [
    {
      number: t('steps.strategy.number'),
      title: t('steps.strategy.title'),
      description: t('steps.strategy.description'),
      icon: Phone,
      color: 'from-primary to-accent',
    },
    {
      number: t('steps.proposal.number'),
      title: t('steps.proposal.title'),
      description: t('steps.proposal.description'),
      icon: FileText,
      color: 'from-accent to-primary',
    },
    {
      number: t('steps.build.number'),
      title: t('steps.build.title'),
      description: t('steps.build.description'),
      icon: Hammer,
      color: 'from-primary to-primary-dark',
    },
    {
      number: t('steps.launch.number'),
      title: t('steps.launch.title'),
      description: t('steps.launch.description'),
      icon: Rocket,
      color: 'from-primary-dark to-primary',
    },
  ]

  return (
    <section id="process" className="relative py-24 bg-section-alt overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern" />
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [-12, 12, -12], opacity: [0.15, 0.4, 0.15] }}
            transition={{ duration: 5 + i * 0.9, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{ left: `${18 + i * 16}%`, top: `${22 + i * 12}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
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

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-theme-primary mb-6">
            {t('headlinePart1')}{' '}
            <span className="text-gradient-accent">
              {t('headlinePart2')}
            </span>
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            {t('srOnly')}
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                variants={stepVariants}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
                className="group relative"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                    className="hidden lg:block absolute top-14 left-full w-full h-px bg-gradient-to-r from-primary/40 to-transparent origin-left z-0"
                  />
                )}

                <div className="relative bg-primary/5 backdrop-blur-md rounded-2xl p-7 text-center border border-primary-light/15 hover:border-primary-light/35 transition-all duration-500 hover:bg-primary/10">
                  {/* Step number bubble */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold bg-gradient-primary"
                  >
                    {step.number}
                  </motion.div>

                  {/* Icon */}
                  <div className="relative w-14 h-14 mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                    <div className="relative w-full h-full bg-primary/10 rounded-2xl flex items-center justify-center border border-primary-light/25">
                      <Icon className="w-7 h-7 text-theme-primary" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-theme-primary mb-3">{step.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.7 }}
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

export default Process
