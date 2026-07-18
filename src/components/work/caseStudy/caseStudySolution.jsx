'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, CheckCircle2 } from 'lucide-react'
import { useTranslations } from 'next-intl'

const ITEM_KEYS = [
  'storefront',
  'catalog',
  'orders',
  'chat',
  'notifications',
  'admin',
  'roles',
  'auth',
]

const DETAIL_KEYS = {
  storefront: ['rtl', 'toggle', 'theme', 'mobile'],
  catalog: ['categories', 'trees', 'pricing', 'dzd', 'featured'],
  orders: ['flow', 'thread', 'status', 'coherent'],
  chat: ['thread', 'inbox', 'profile', 'attachments', 'templates', 'actions'],
  notifications: ['staff', 'clients', 'push', 'permissions'],
  admin: ['products', 'orders', 'customers', 'revenue'],
  roles: ['roles', 'moderators', 'admins', 'routing'],
  auth: ['otp', 'login', 'reset', 'pwa', 'seo', 'mobile'],
}

const CaseStudySolution = () => {
  const t = useTranslations('caseStudy.paradise.solution')
  const [openIndex, setOpenIndex] = useState(null)

  const deliverables = ITEM_KEYS.map((key) => ({
    title: t(`items.${key}.title`),
    summary: t(`items.${key}.summary`),
    details: DETAIL_KEYS[key].map((detailKey) => t(`items.${key}.details.${detailKey}`)),
  }))

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
          <h2 className="text-3xl sm:text-4xl font-bold text-theme-primary">{t('headline')}</h2>
        </motion.div>

        <div className="space-y-3">
          {deliverables.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="bg-primary/5 backdrop-blur-md rounded-2xl border border-primary-light/15 hover:border-primary-light/35 transition-all duration-300 overflow-hidden">
                <motion.button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-primary/5 transition-colors duration-200 cursor-pointer"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div>
                    <h3 className="text-theme-primary font-semibold text-base sm:text-lg group-hover:text-white transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-secondary text-sm mt-1 leading-relaxed">{item.summary}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-6 h-6 text-secondary group-hover:text-theme-primary transition-colors duration-200"
                  >
                    {openIndex === index ? <Minus /> : <Plus />}
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="w-full h-px bg-gradient-to-r from-primary/40 to-transparent mb-4" />
                        <ul className="space-y-2.5">
                          {item.details.map((detail, i) => (
                            <motion.li
                              key={i}
                              initial={{ y: -8, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: -8, opacity: 0 }}
                              transition={{ duration: 0.2, delay: i * 0.05 }}
                              className="flex items-start gap-2.5 text-theme-secondary text-sm"
                            >
                              <CheckCircle2 size={14} className="text-primary mt-0.5 flex-shrink-0" />
                              {detail}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudySolution
