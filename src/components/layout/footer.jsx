'use client'
import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { motion } from 'framer-motion'
import { Mail, Instagram } from 'lucide-react'
import { SITE_CONFIG, buildWaLink } from '@/lib/config'

const Footer = () => {
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')
  const tWa = useTranslations('whatsapp')

  const navLinks = [
    { name: tNav('services'), href: '/services' },
    { name: tNav('work'), href: '/work' },
    { name: tNav('packages'), href: '/packages' },
    { name: tNav('about'), href: '/about' },
    { name: tNav('contact'), href: '/contact' },
  ]

  return (
    <footer className="relative border-t border-theme bg-theme">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:80px_80px]" />

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="inline-flex items-center gap-2 mb-3">
              <Image
                src="/assets/Fikrat Tech (1).png"
                alt={tNav('logoAlt')}
                width={120}
                height={120}
                className="w-auto h-auto scale-125 translate-y-1"
              />
              {/* <span className="text-2xl font-bold text-theme-primary tracking-tight">
                {t('brandName')}{' '}
                <span className="text-gradient-accent">{t('brandSuffix')}</span>
              </span> */}
            </Link>
            <p className="text-secondary text-sm leading-relaxed mb-6">{t('tagline')}</p>
            <p className="text-theme-tertiary text-xs">
              {t('copyright', { year: new Date().getFullYear() })}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold text-primary-light uppercase tracking-widest mb-6">
              {t('pages')}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary hover:text-theme-primary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold text-primary-light uppercase tracking-widest mb-6">
              {t('contactHeading')}
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 text-secondary hover:text-theme-primary transition-colors duration-200 text-sm"
                >
                  <Mail size={14} />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-secondary hover:text-theme-primary transition-colors duration-200 text-sm"
                >
                  <Instagram size={14} />
                  {SITE_CONFIG.instagram}
                </a>
              </li>
              <li>
                <a
                  href={buildWaLink(tWa('generic'))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-300 bg-gradient-primary"
                >
                  {t('bookCall')}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
