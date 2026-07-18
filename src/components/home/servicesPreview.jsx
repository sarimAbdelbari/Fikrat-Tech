'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Store, CreditCard, Package, LayoutDashboard, ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.85 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } }
}

const ServicesPreview = () => {
  const t = useTranslations('home.servicesPreview')

  const services = [
    {
      icon: Store,
      title: t('items.storefront.title'),
      description: t('items.storefront.description'),
      color: 'from-primary to-accent',
    },
    {
      icon: CreditCard,
      title: t('items.payment.title'),
      description: t('items.payment.description'),
      color: 'from-accent to-primary',
    },
    {
      icon: Package,
      title: t('items.orders.title'),
      description: t('items.orders.description'),
      color: 'from-primary to-primary-dark',
    },
    {
      icon: LayoutDashboard,
      title: t('items.admin.title'),
      description: t('items.admin.description'),
      color: 'from-primary-dark to-primary',
    },
  ]

  return (
    <section id="services" className="relative py-24 bg-section-alt overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern" />
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [-18, 18, -18], x: [-8, 8, -8], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4 + i * 0.6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"
            style={{ left: `${12 + i * 15}%`, top: `${18 + i * 10}%` }}
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
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            {t('body')}
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
                className="group relative bg-primary/5 backdrop-blur-md rounded-2xl p-7 border border-primary-light/15 hover:border-primary-light/35 transition-all duration-500 hover:bg-primary/10"
              >
                <div className="relative w-14 h-14 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                  <div className={`relative w-full h-full bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center`}>
                    <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-theme-primary mb-3 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  {service.description}
                </p>

                <motion.div
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${service.color} rounded-b-2xl`}
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
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-theme-primary font-semibold text-base hover:text-white transition-colors duration-200 group"
          >
            {t('cta')}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPreview
