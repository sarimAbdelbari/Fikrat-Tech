'use client'
import React, { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

const ReadingProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 50 })

  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0%' }}
      className="fixed top-0 left-0 right-0 h-[3px] z-[9999]"
      aria-hidden="true"
    >
      <div className="w-full h-full bg-gradient-primary" />
    </motion.div>
  )
}

export default ReadingProgress
