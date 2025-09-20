'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Sparkles } from 'lucide-react'

const Hero = () => {  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden ">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(140,62,238,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(140,62,238,0.1)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        {/* Animated Background Image */}
        <Image
          src="/assets/images/fikrat_background_animated.gif"
          alt="Animated Background"
          fill
          className="object-cover opacity-20"
          priority
          unoptimized
        />
        {/* Elegant overlay */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute top-20 right-20 w-32 h-32 border border-purple-400/20 rounded-full z-0"
      />
      
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-40 left-20 w-2 h-2 bg-purple-400 rounded-full z-0"
      />

      <motion.div
        animate={{ 
          rotate: [0, -360],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute bottom-32 right-32 w-16 h-16 border border-pink-400/30 rotate-45 z-0"
      />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center w-fit mx-auto px-4 py-1.5 rounded-full bg-purple-500/15 backdrop-blur-md border border-purple-300/40 text-[#e9d8fd] text-sm font-medium mb-8"
          >
            {/* Static "stars" icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 28 28"
              fill="none"
              className="w-7 h-7 mr-3"
            >
              <g>
                <circle cx="14" cy="14" r="7" fill="#b794f4" fillOpacity="0.25"/>
                <path
                  d="M14 4.5L15.5 11.5L22.5 13L15.5 14.5L14 21.5L12.5 14.5L5.5 13L12.5 11.5L14 4.5Z"
                  fill="#d1b3ff"
                  stroke="#d1b3ff"
                  strokeWidth="1"
                  strokeLinejoin="round"
                />
                <circle cx="7" cy="7" r="1" fill="#e9d8fd"/>
                <circle cx="21" cy="8" r="0.7" fill="#e9d8fd"/>
                <circle cx="20" cy="20" r="0.5" fill="#e9d8fd"/>
              </g>
            </svg>
            Every Idea Deserves to be Real
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-[#e9d8fd] leading-tight mb-4 sm:mb-6"
          >
            You Imagine.{' '}
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative inline-block"
            >
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                We Build
              </span>
              {/* Animated underline */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
              />
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-[#ab9eba] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
            >
              From Spark to Screen
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg lg:text-xl text-[#c4b5fd] leading-relaxed mb-8 sm:mb-12 max-w-4xl mx-auto font-medium px-2"
          >
            Ideas are the seeds of change. At Fikrat.tech, we believe no idea is too small to matter. We're not just coders — we're{' '}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-[#dcc5f8] font-semibold"
            >
              dream-crafters
            </motion.span>
            {' '}who turn sparks of imagination into products people can touch, use, and love.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* Primary CTA */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(140, 62, 238, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 rounded-lg text-white font-semibold text-lg overflow-hidden transition-all duration-300 shadow-xl"
              style={{ background: 'linear-gradient(135deg, #8c3eee 0%, #a855f7 100%)' }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Your Project
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight size={18} />
                </motion.div>
              </span>
              <motion.div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, #a855f7 0%, #8c3eee 100%)' }}
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 rounded-lg text-lg font-semibold text-[#dcc5f8] border-2 border-purple-300/20 hover:bg-purple-500/10 hover:border-purple-300/40 transition-all duration-300 backdrop-blur flex items-center gap-2"
            >
              See Our Work
              <motion.div
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight size={18} />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero