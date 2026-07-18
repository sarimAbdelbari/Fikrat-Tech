'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Layers, Users, XCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'

const AboutValues = () => {
  const t = useTranslations('about.values')

  const values = [
    {
      label: t('build.title'),
      value: t('build.description'),
      color: 'from-primary to-accent',
      icon: Layers,
    },
    {
      label: t('clients.title'),
      value: t('clients.description'),
      color: 'from-accent to-primary',
      icon: Users,
    },
    {
      label: t('dont.title'),
      value: t('dont.description'),
      color: 'from-primary-dark to-primary',
      icon: XCircle,
    },
  ]

  return (
    <section className="relative py-20 border-b border-theme overflow-hidden">
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="text-xs text-theme-primary font-semibold uppercase tracking-widest mb-3">{t('eyebrow')}</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-theme-primary">
            {t('headline')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="group relative bg-primary/5 backdrop-blur-md rounded-2xl p-7 border border-primary-light/15 hover:border-primary-light/35 transition-all duration-400 hover:bg-primary/10"
              >
                {/* Icon */}
                <div className="relative w-12 h-12 mb-5 group-hover:scale-110 transition-transform duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                  <div className={`relative w-full h-full bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="text-xs text-theme-primary font-semibold uppercase tracking-widest mb-3">{item.label}</div>
                <p className="text-theme-primary font-medium leading-relaxed">{item.value}</p>

                <motion.div
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${item.color} rounded-b-2xl`}
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AboutValues
