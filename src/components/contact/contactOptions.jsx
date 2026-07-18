'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Instagram, ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { buildWaLink, SITE_CONFIG } from '@/lib/config'

/* Real WhatsApp glyph — no new dependency */
const WhatsAppIcon = ({ size = 28, className = '', label }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    aria-label={label}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const ContactOptions = () => {
  const t = useTranslations('contact.options')
  const tWa = useTranslations('whatsapp')
  const tA11y = useTranslations('a11y')

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto space-y-5">

          {/* WhatsApp — primary, full width, featured — intentional green brand */}
          <motion.a
            href={buildWaLink(tWa('contact'))}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-5 p-7 sm:p-8 rounded-2xl border-2 border-green-500/30 bg-green-500/5 backdrop-blur-md hover:border-green-400/60 hover:bg-green-500/10 transition-all duration-300 overflow-hidden cursor-pointer block"
          >
            {/* Green top accent */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-400 rounded-t-2xl" />

            <div
              className="w-16 h-16 flex-shrink-0 rounded-2xl flex items-center justify-center text-white"
              style={{ background: 'linear-gradient(135deg, var(--whatsapp), var(--whatsapp-hover))' }}
            >
              <WhatsAppIcon size={28} label={tA11y('whatsapp')} />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-bold text-theme-primary group-hover:text-white transition-colors duration-200">{t('strategy.title')}</h3>
                <span className="px-2 py-0.5 rounded-full text-xs font-bold text-white bg-green-600/80">{t('strategy.badge')}</span>
              </div>
              <p className="text-theme-secondary text-sm leading-relaxed">
                {t('strategy.body')}
              </p>
            </div>

            <div className="flex items-center gap-2 text-green-400 font-semibold text-sm flex-shrink-0">
              {t('strategy.cta')}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </div>

            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
          </motion.a>

          {/* Email & Instagram side by side */}
          <div className="grid sm:grid-cols-2 gap-5">
            <motion.a
              href={`mailto:${SITE_CONFIG.email}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="group relative flex flex-col gap-4 p-7 rounded-2xl border border-primary-light/15 bg-primary/5 backdrop-blur-md hover:border-primary-light/35 hover:bg-primary/10 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary-light/25 flex items-center justify-center">
                <Mail size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-theme-primary mb-1 group-hover:text-white transition-colors duration-200">{t('email.title')}</h3>
                <p className="text-theme-primary text-sm font-medium mb-2">{SITE_CONFIG.email}</p>
                <p className="text-secondary text-xs leading-relaxed">
                  {t('email.body')}
                </p>
              </div>
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-b-2xl"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            {/* Instagram — intentional pink accent exception */}
            <motion.a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="group relative flex flex-col gap-4 p-7 rounded-2xl border border-primary-light/15 bg-primary/5 backdrop-blur-md hover:border-primary-light/35 hover:bg-primary/10 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-pink-500/15 border border-pink-300/20 flex items-center justify-center">
                <Instagram size={22} className="text-pink-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-theme-primary mb-1 group-hover:text-white transition-colors duration-200">{t('instagram.title')}</h3>
                <p className="text-pink-400 text-sm font-medium mb-2">{SITE_CONFIG.instagram}</p>
                <p className="text-secondary text-xs leading-relaxed">
                  {t('instagram.body')}
                </p>
              </div>
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-b-2xl"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactOptions
