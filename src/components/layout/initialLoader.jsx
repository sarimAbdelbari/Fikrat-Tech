'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LampIllustration from './lampIllustration'
import { SITE_CONFIG } from '@/lib/config'

/**
 * InitialLoader — full-screen branded intro that plays on every page load.
 *
 * Act 1  0.0–0.8s  Dark grid + dim lamp silhouette
 * Act 2  0.8–1.6s  Glowing spark falls into the bulb
 * Act 3  1.6–2.6s  Filament lights up, radial glow expands
 * Act 4  2.6–3.2s  Fikrat DZ + tagline fade in
 * Act 5  3.2–3.8s  Whole overlay fades + lifts; scroll unlocked
 *
 * Reduced-motion: skips acts 2–3 entirely, shows lit lamp + brand for 1.2s.
 * Safety fallback: force-dismisses at 5s regardless of readyState.
 */
const InitialLoader = () => {
  const [phase, setPhase] = useState(1)
  const [show, setShow] = useState(true)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setReducedMotion(rm)
    document.body.style.overflow = 'hidden'

    const dismiss = () => {
      setShow(false)
      document.body.style.overflow = ''
    }

    // Safety fallback — never trap the user longer than 5s
    const fallback = setTimeout(dismiss, 5000)

    if (rm) {
      // Reduced-motion branch: static lit lamp → brand → exit
      setPhase(3)
      const tBrand = setTimeout(() => setPhase(4), 400)
      const tExit  = setTimeout(dismiss, 1400)
      return () => {
        clearTimeout(tBrand)
        clearTimeout(tExit)
        clearTimeout(fallback)
        document.body.style.overflow = ''
      }
    }

    // Normal 5-act timeline
    const t2 = setTimeout(() => setPhase(2), 800)    // spark falls
    const t3 = setTimeout(() => setPhase(3), 1600)   // lamp ignites
    const t4 = setTimeout(() => setPhase(4), 2600)   // brand reveals
    const t5 = setTimeout(dismiss, 3800)              // fade out

    return () => {
      ;[t2, t3, t4, t5, fallback].forEach(clearTimeout)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="initial-loader"
          role="status"
          aria-label="Loading Fikrat DZ"
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.65, ease: 'easeInOut' }}
        >
          {/* ── Background layers ── */}
          <div className="absolute inset-0 bg-grid-pattern opacity-50" aria-hidden />
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at 50% 45%, transparent 40%, var(--background) 85%)',
            }}
            aria-hidden
          />

          {/* ── Spark particle (Act 2 only) ── */}
          <AnimatePresence>
            {phase === 2 && !reducedMotion && (
              <motion.div
                key="spark"
                aria-hidden
                className="absolute z-20 rounded-full"
                style={{
                  width: 10,
                  height: 10,
                  left: 'calc(50% - 5px)',
                  /*
                   * The flex column (lamp + gap + brand) is centered vertically.
                   * During phases 1–3 only the lamp is rendered, so the lamp center
                   * sits at 50vh. The lamp SVG is 280px tall → top edge ≈ 50vh − 140px.
                   * We start 300px above the lamp top and land inside the bulb.
                   */
                  top: 'calc(50vh - 440px)',
                  background: 'var(--primary)',
                  boxShadow: '0 0 22px 9px var(--accent)',
                }}
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: 310, opacity: [0, 1, 1, 0.1] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.72, ease: 'easeIn' }}
              />
            )}
          </AnimatePresence>

          {/* ── Lamp + brand ── */}
          <div className="relative z-10 flex flex-col items-center gap-10">
            <LampIllustration phase={phase} reducedMotion={reducedMotion} />

            <AnimatePresence>
              {phase >= 4 && (
                <motion.div
                  key="brand"
                  className="text-center"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <p className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
                    <span className="text-theme-primary">Fikrat</span>
                    {' '}
                    <span className="text-gradient-accent">DZ</span>
                  </p>
                  <p className="text-sm text-secondary tracking-wide">{SITE_CONFIG.tagline}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <span className="sr-only">Loading, please wait.</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default InitialLoader
