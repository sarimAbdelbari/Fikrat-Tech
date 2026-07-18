'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { buildWaLink } from '@/lib/config'

const HERO_BG = {
  src: '/assets/FikratBG.jpg',
  width: 1294,
  height: 816,
}

const MotionLink = motion.create(Link)

const Hero = () => {
  const t = useTranslations('home.hero')
  const tWa = useTranslations('whatsapp')

  const trustBadges = [
    t('badges.payment'),
    t('badges.bilingual'),
    t('badges.admin'),
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background: aspect-ratio cover → overlay → grid */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-background">
        <Image
          src={HERO_BG.src}
          alt=""
          width={HERO_BG.width}
          height={HERO_BG.height}
          priority
          sizes="100vw"
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-auto w-auto min-h-full min-w-full max-w-none -translate-x-1/2 -translate-y-1/2"
          style={{ aspectRatio: `${HERO_BG.width} / ${HERO_BG.height}` }}
        />
        <div className="absolute inset-0 bg-background/60" aria-hidden />
        <div className="absolute inset-0 bg-grid-pattern" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-background/25 via-transparent to-background" aria-hidden />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ rotate: [0, 360], scale: [1, 1.08, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 right-16 w-36 h-36 border border-primary/15 rounded-full z-0"
      />
      <motion.div
        animate={{ y: [0, -18, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-36 left-16 w-2 h-2 bg-primary rounded-full z-0"
      />
      <motion.div
        animate={{ rotate: [0, -360], x: [0, 12, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-32 right-28 w-14 h-14 border border-accent/25 rotate-45 z-0"
      />
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-48 left-28 w-3 h-3 border border-primary-light/40 rounded-full z-0"
      />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center pt-24 pb-16">
        <div className="max-w-5xl mx-auto">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 backdrop-blur-md border border-primary-light/30 text-theme-primary text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {t('badge')}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-theme-primary leading-tight mb-6"
          >
            {t('headlinePart1')}{' '}
            <motion.span
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="relative inline-block"
            >
              <span className="text-gradient-accent">
                {t('headlinePart2')}
              </span>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 1.1 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
              />
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg sm:text-xl lg:text-2xl text-theme-secondary leading-relaxed mb-6 max-w-4xl mx-auto font-medium"
          >
            {t('subheadline')}
          </motion.p>

          {/* Body copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base text-secondary leading-relaxed mb-10 max-w-3xl mx-auto"
          >
            {t('body')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.a
              href={buildWaLink(tWa('generic'))}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(140, 62, 238, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 rounded-lg text-white font-semibold text-lg overflow-hidden shadow-xl flex items-center gap-2 bg-gradient-primary"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t('ctaPrimary')}
                <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <ArrowRight size={18} />
                </motion.div>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-primary-reverse"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <MotionLink
              href="/work"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-lg text-lg font-semibold text-theme-primary border-2 border-primary-light/20 hover:bg-primary/10 hover:border-primary-light/40 transition-all duration-300 backdrop-blur flex items-center gap-2"
            >
              {t('ctaSecondary')}
              <ArrowRight size={18} />
            </MotionLink>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
          >
            {trustBadges.map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="flex items-center gap-2 text-sm text-secondary"
              >
                <CheckCircle2 size={15} className="text-primary flex-shrink-0" />
                {badge}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
