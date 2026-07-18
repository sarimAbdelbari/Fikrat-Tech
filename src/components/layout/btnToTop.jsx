'use client'
import React, { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const BtnToTop = () => {
  const t = useTranslations('a11y')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 500)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          whileHover={{
            scale: 1.1,
            boxShadow: '0 20px 40px rgba(140, 62, 238, 0.4)'
          }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 end-8 z-50 p-4 cursor-pointer rounded-full text-white shadow-2xl transition-all duration-300 bg-gradient-primary"
          aria-label={t('scrollToTop')}
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowUp className="w-6 h-6" />
          </motion.div>

          {/* Animated ring effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary-light"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default BtnToTop
