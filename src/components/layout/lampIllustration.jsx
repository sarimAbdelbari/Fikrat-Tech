'use client'
import React from 'react'
import { motion } from 'framer-motion'

const d = (s, reduced) => (reduced ? 0 : s)

const CIRCUIT_LINES = [
  { x1: 176, y1: 80,  x2: 196, y2: 58,  delay: 0.30 },
  { x1: 178, y1: 108, x2: 200, y2: 100, delay: 0.42 },
  { x1: 24,  y1: 80,  x2: 4,   y2: 58,  delay: 0.36 },
  { x1: 22,  y1: 108, x2: 0,   y2: 100, delay: 0.50 },
]

const FILAMENT = [
  'M 88,192 L 76,165',
  'M 76,165 L 118,144',
  'M 118,144 L 82,118',
  'M 82,118 L 116,94 L 100,76',
]

/**
 * LampIllustration — presentational SVG lightbulb.
 *
 * phase 1 = dark silhouette
 * phase 2 = warming (spark incoming, handled by parent)
 * phase 3 = filament lights up, glow expands
 * phase 4 = fully glowing (same as 3; parent shows brand text)
 */
const LampIllustration = ({ phase = 1, reducedMotion = false }) => {
  const isLit = phase >= 3

  const glowTransition = { duration: d(0.9, reducedMotion), ease: 'easeOut' }
  const outlineTransition = { duration: d(0.6, reducedMotion), ease: 'easeOut' }
  const filamentTransition = (i) => ({
    pathLength: { duration: d(0.28, reducedMotion), delay: isLit && !reducedMotion ? i * 0.13 : 0, ease: 'easeOut' },
    opacity:    { duration: d(0.20, reducedMotion), delay: isLit && !reducedMotion ? i * 0.13 : 0 },
  })

  return (
    <div className="relative" style={{ width: 200, height: 280 }}>
      {/* Outer glow halo — div+blur behind the SVG */}
      <motion.div
        aria-hidden
        className="absolute pointer-events-none animate-lamp-glow"
        style={{
          inset: '-20%',
          background: 'radial-gradient(ellipse at 50% 42%, var(--primary) 0%, var(--accent) 22%, transparent 68%)',
          filter: 'blur(30px)',
          borderRadius: '50%',
        }}
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: isLit ? 0.55 : 0, scale: isLit ? 1.08 : 0.3 }}
        transition={glowTransition}
      />

      <svg
        viewBox="0 0 200 280"
        width={200}
        height={280}
        aria-hidden
        className="relative z-10"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <filter id="lmp-inner-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
          </filter>
        </defs>

        {/* ── Inner fill glow (inside bulb) ── */}
        <motion.ellipse
          cx={100} cy={105} rx={64} ry={64}
          fill="var(--primary)"
          filter="url(#lmp-inner-glow)"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLit ? 0.20 : 0 }}
          transition={{ duration: d(0.7, reducedMotion), ease: 'easeOut' }}
        />

        {/* ── Bulb outline ── */}
        <motion.path
          d="M100,24 C58,24 22,60 22,102 C22,136 41,163 70,178 C76,181 76,190 76,197 L124,197 C124,190 124,181 130,178 C159,163 178,136 178,102 C178,60 142,24 100,24 Z"
          fill="none"
          stroke="var(--primary-light)"
          strokeWidth={1.5}
          initial={{ opacity: 0.18 }}
          animate={{ opacity: isLit ? 0.72 : 0.20 }}
          transition={outlineTransition}
        />

        {/* ── Neck horizontal caps ── */}
        <motion.path
          d="M76,197 L124,197"
          fill="none"
          stroke="var(--primary-light)"
          strokeWidth={1.5}
          strokeLinecap="round"
          animate={{ opacity: isLit ? 0.55 : 0.15 }}
          transition={outlineTransition}
        />

        {/* ── Base body ── */}
        <motion.path
          d="M76,200 L76,252 L82,258 L118,258 L124,252 L124,200 Z"
          fill="none"
          stroke="var(--primary-light)"
          strokeWidth={1.5}
          strokeLinejoin="round"
          animate={{ opacity: isLit ? 0.48 : 0.15 }}
          transition={{ duration: d(0.5, reducedMotion) }}
        />

        {/* ── Screw ridges ── */}
        {[210, 224, 238].map((y, i) => (
          <motion.path
            key={y}
            d={`M ${76 + i * 2},${y} L ${124 - i * 2},${y}`}
            fill="none"
            stroke="var(--primary-light)"
            strokeWidth={1.5}
            strokeLinecap="round"
            animate={{ opacity: isLit ? 0.48 : 0.15 }}
            transition={{ duration: d(0.4, reducedMotion), delay: d(i * 0.07, reducedMotion) }}
          />
        ))}

        {/* ── Filament — 4 segments lighting up in sequence ── */}
        {FILAMENT.map((seg, i) => (
          <motion.path
            key={i}
            d={seg}
            fill="none"
            stroke="var(--text-primary)"
            strokeWidth={2.2}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: isLit ? 1 : 0, opacity: isLit ? 1 : 0 }}
            transition={filamentTransition(i)}
          />
        ))}

        {/* ── Circuit lines radiating from the bulb ── */}
        {CIRCUIT_LINES.map((ln, i) => (
          <React.Fragment key={i}>
            <motion.path
              d={`M ${ln.x1},${ln.y1} L ${ln.x2},${ln.y2}`}
              fill="none"
              stroke="var(--primary)"
              strokeWidth={1}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: isLit ? 1 : 0, opacity: isLit ? 0.7 : 0 }}
              transition={{ duration: d(0.38, reducedMotion), delay: d(ln.delay, reducedMotion) }}
            />
            <motion.circle
              cx={ln.x2} cy={ln.y2} r={2.5}
              fill="var(--primary)"
              initial={{ opacity: 0 }}
              animate={{ opacity: isLit ? 0.7 : 0 }}
              transition={{ duration: d(0.25, reducedMotion), delay: d(ln.delay + 0.3, reducedMotion) }}
            />
          </React.Fragment>
        ))}
      </svg>
    </div>
  )
}

export default LampIllustration
