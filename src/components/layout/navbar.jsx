'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { buildWaLink } from '@/lib/config'
import LanguageSwitcher from '@/components/layout/languageSwitcher'

const Navbar = () => {
  const t = useTranslations('nav')
  const tWa = useTranslations('whatsapp')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const navItems = [
    { name: t('services'), href: '/services' },
    { name: t('work'), href: '/work' },
    { name: t('packages'), href: '/packages' },
    { name: t('about'), href: '/about' },
  ]

  const waHref = buildWaLink(tWa('generic'))

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    open: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: 'easeInOut' } },
  }

  const menuItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: (i) => ({ x: 0, opacity: 1, transition: { delay: i * 0.08, duration: 0.3 } }),
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-2 ${
        isScrolled
          ? 'backdrop-blur-md border-b border-primary-light/10 shadow-2xl'
          : 'bg-transparent border-b border-transparent'
      }`}
      style={isScrolled ? { backgroundColor: 'var(--background-nav-scrolled)' } : {}}
    >
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center justify-center">
              <Image
                src="/assets/Fikrat Tech (1).png"
                alt={t('logoAlt')}
                width={180}
                height={48}
                priority
                className="h-16 md:h-32 w-auto scale-125 translate-y-1"
              />
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <Link
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 group ${
                      isActive ? 'text-theme-primary' : 'text-secondary hover:text-theme-primary'
                    }`}
                  >
                    {item.name}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 rounded-full"
                      style={{ background: 'var(--gradient-text)' }}
                      initial={{ width: isActive ? '100%' : 0 }}
                      animate={{ width: isActive ? '100%' : 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.25 }}
                    />
                  </Link>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:flex items-center gap-3"
          >
            <LanguageSwitcher />
            <motion.a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 16px 32px rgba(140, 62, 238, 0.35)' }}
              whileTap={{ scale: 0.95 }}
              className="relative px-5 py-2.5 rounded-lg text-white font-semibold text-sm overflow-hidden shadow-lg block bg-gradient-primary"
            >
              <span className="relative z-10">{t('bookCall')}</span>
              <motion.div
                className="absolute inset-0 bg-gradient-primary-reverse"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>

          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher compact />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-secondary hover:text-theme-primary hover:bg-primary/10 transition-colors duration-200"
              aria-label={t('toggleMenu')}
            >
              <motion.div
                animate={isMobileMenuOpen ? 'open' : 'closed'}
                className="w-6 h-6 flex flex-col justify-center items-center gap-1.5"
              >
                <motion.span
                  variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 8 } }}
                  className="block h-0.5 w-6 bg-current rounded-full"
                />
                <motion.span
                  variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
                  className="block h-0.5 w-6 bg-current rounded-full"
                />
                <motion.span
                  variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -8 } }}
                  className="block h-0.5 w-6 bg-current rounded-full"
                />
              </motion.div>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden border-t border-primary-light/10 backdrop-blur-lg overflow-hidden"
              style={{ backgroundColor: 'color-mix(in srgb, var(--background) 95%, transparent)' }}
            >
              <div className="px-2 pt-3 pb-5 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    custom={index}
                    variants={menuItemVariants}
                    initial="closed"
                    animate="open"
                  >
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                        pathname === item.href
                          ? 'text-theme-primary bg-primary/10'
                          : 'text-secondary hover:text-theme-primary hover:bg-primary/5'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  custom={navItems.length}
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                  className="pt-3"
                >
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-3 rounded-lg font-semibold text-white transition-all duration-300 bg-gradient-primary"
                  >
                    {t('bookCall')}
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
