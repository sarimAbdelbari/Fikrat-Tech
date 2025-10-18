'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Navigation items for a digital agency
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ]

  // Animation variants
  const navVariants = {
    initial: { backdropFilter: 'blur(0px)' },
    scrolled: { 
      backdropFilter: 'blur(20px)',
    }
  }

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  }

  const menuItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  }

  return (
    <motion.nav
      variants={navVariants}
      initial="initial"
      animate={isScrolled ? 'scrolled' : 'initial'}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'border-b border-purple-300/20 shadow-2xl bg-slate-900/80 backdrop-blur-lg' 
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-1.5">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 flex items-center mt-3"
          >
            <Image 
              src="/assets/Fikrat Tech (2).png" 
              alt="Fikrat.tech - Digital Product Agency" 
              width={170} 
              height={170}
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-[170px] md:h-[170px]"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    color: '#dcc5f8',
                    transition: { duration: 0.2 }
                  }}
                  style={{
                    color: '#ab9eba'
                  }}
                  className={`px-3 py-2 text-md font-medium transition-all duration-200 relative group`}
                >
                  {item.name}
                  
                  {/* Animated underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5"
                    style={{
                      background: 'linear-gradient(to right, #ab9eba, #dcc5f8)'
                    }}
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* CTA Button (Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:block"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(140, 62, 238, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              className="relative px-6 py-2.5 cursor-pointer rounded-lg text-white font-semibold text-sm overflow-hidden transition-all duration-300 shadow-lg"
              style={{ background: 'linear-gradient(135deg, #8c3eee 0%, #a855f7 100%)' }}
            >
              <span className="relative z-10">Book Your Free Call</span>
              <motion.div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, #a855f7 0%, #8c3eee 100%)' }}
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 cursor-pointer rounded-lg transition-colors duration-200 ${
                isScrolled 
                  ? 'text-[#dcc5f8] hover:bg-purple-500/10' 
                  : 'text-[#ab9eba] hover:bg-purple-500/5'
              }`}
            >
              <motion.div
                animate={isMobileMenuOpen ? 'open' : 'closed'}
                className="w-6 h-6 flex flex-col justify-center items-center"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 5 }
                  }}
                  className={`block h-0.5 w-6 rounded-full transition-colors duration-200 ${
                    isScrolled ? 'bg-[#dcc5f8]' : 'bg-[#ab9eba]'
                  }`}
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  className={`block h-0.5 w-6 mt-1.5 rounded-full transition-colors duration-200 ${
                    isScrolled ? 'bg-[#dcc5f8]' : 'bg-[#ab9eba]'
                  }`}
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -5 }
                  }}
                  className={`block h-0.5 w-6 mt-1.5 rounded-full transition-colors duration-200 ${
                    isScrolled ? 'bg-[#dcc5f8]' : 'bg-[#ab9eba]'
                  }`}
                />
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden border-t border-purple-300/20 bg-slate-900/80 backdrop-blur-lg"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    custom={index}
                    variants={menuItemVariants}
                    initial="closed"
                    animate="open"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 text-[#dcc5f8] hover:text-white text-base font-medium transition-colors duration-200 rounded-lg hover:bg-purple-500/10"
                  >
                    {item.name}
                  </motion.a>
                ))}
                
                {/* Mobile CTA */}
                <motion.div
                  custom={navItems.length}
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                  className="pt-4"
                >
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-4 py-3 rounded-lg cursor-pointer font-semibold hover:shadow-lg transition-all duration-300 text-white"
                    style={{ background: 'linear-gradient(135deg, #8c3eee 0%, #a855f7 100%)' }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Start Project
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar