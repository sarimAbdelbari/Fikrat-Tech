'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ShoppingBag } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

const WorkGrid = () => {
  const t = useTranslations('work.grid')

  const projects = [
    {
      client: t('paradise.client'),
      category: t('paradise.category'),
      tags: Object.values({
        storefront: t('paradise.tags.storefront'),
        chat: t('paradise.tags.chat'),
        admin: t('paradise.tags.admin'),
        chargily: t('paradise.tags.chargily'),
        rtl: t('paradise.tags.rtl'),
      }),
      teaser: t('paradise.teaser'),
      href: '/work/paradise-game-dz',
      stat: t('paradise.stat'),
      cta: t('paradise.cta'),
      icon: ShoppingBag,
    },
  ]

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern" />

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <Link href={project.href} className="block h-full">
                  <div className="relative h-full bg-primary/5 backdrop-blur-md rounded-2xl p-7 border border-primary-light/15 hover:border-primary-light/35 transition-all duration-500 hover:bg-primary/10 overflow-hidden">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary-light/25 flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-secondary font-medium uppercase tracking-widest mb-1">{project.category}</div>
                        <h3 className="text-lg font-bold text-theme-primary group-hover:text-white transition-colors duration-300">{project.client}</h3>
                        <div className="text-xs text-secondary mt-0.5">{project.stat}</div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-full text-xs text-theme-primary bg-primary/10 border border-primary-light/20">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Teaser */}
                    <p className="text-secondary text-sm leading-relaxed mb-6">{project.teaser}</p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-theme-primary text-sm font-semibold group-hover:text-white transition-colors duration-300">
                      {project.cta}
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </div>

                    {/* Accent bottom */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-b-2xl"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </Link>
              </motion.div>
            )
          })}

          {/* Placeholder for future projects */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative bg-primary/[0.03] backdrop-blur-md rounded-2xl p-7 border border-primary-light/10 border-dashed flex items-center justify-center min-h-[280px]"
          >
            <div className="text-center">
              <div className="text-secondary text-sm font-medium">{t('comingSoon')}</div>
              <div className="text-theme-tertiary text-xs mt-1">{t('inProgress')}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WorkGrid
