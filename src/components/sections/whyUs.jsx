'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Heart, Users, Shield, Star, Sparkles } from 'lucide-react'
import { smoothScrollToSection } from '@/lib/utils'

const WhyUs = () => {
  const features = [
    {
      icon: Heart,
      title: "We Care About Your Vision",
      description: "Your idea isn't just another project to us. We become emotionally invested in your success and treat your vision like our own.",
      color: "from-pink-400 to-rose-400"
    },
    {
      icon: Zap,
      title: "Lightning Fast Development",
      description: "We move at startup speed. Our streamlined process gets you from idea to working prototype faster than traditional agencies.",
      color: "from-yellow-400 to-orange-400"
    },
    {
      icon: Users,
      title: "True Technical Co-Founder",
      description: "We don't just build and disappear. We stay with you through iterations, scaling, and growth - your long-term technical partner.",
      color: "from-blue-400 to-indigo-400"
    },
    {
      icon: Shield,
      title: "You Own Everything",
      description: "Complete ownership of code, design, and intellectual property. No vendor lock-in, no hidden dependencies - it's all yours.",
      color: "from-green-400 to-emerald-400"
    },
    {
      icon: Star,
      title: "Obsessed with Quality",
      description: "We obsess over details so your vision shines, not fades. Every pixel, every interaction, every line of code is crafted with love.",
      color: "from-purple-400 to-violet-400"
    },
    {
      icon: Sparkles,
      title: "Innovation in Our DNA",
      description: "We don't just follow trends - we help create them. Our team brings cutting-edge solutions to age-old problems.",
      color: "from-cyan-400 to-teal-400"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="why-us" className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(140,62,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(140,62,238,0.05)_1px,transparent_1px)] bg-[size:120px_120px]"></div>
        
        {/* Floating geometric shapes */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-20 right-10 w-20 h-20 border border-purple-400/10 rounded-full"
        />
        
        <motion.div
          animate={{ 
            rotate: [360, 0],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-20 left-10 w-16 h-16 border border-pink-400/10 rotate-45"
        />
      </div>

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center w-fit mx-auto px-4 py-1.5 rounded-full bg-purple-500/15 backdrop-blur-md border border-purple-300/40 text-[#e9d8fd] text-sm font-medium mb-8"
          >
            {/* Star with sparkle icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 28 28"
              fill="none"
              className="w-7 h-7 mr-3"
            >
              <g>
                <circle cx="14" cy="14" r="7" fill="#b794f4" fillOpacity="0.25"/>
                <path
                  d="M14 6L15.5 12L21.5 13.5L15.5 15L14 21L12.5 15L6.5 13.5L12.5 12L14 6Z"
                  fill="#d1b3ff"
                  stroke="#d1b3ff"
                  strokeWidth="1"
                  strokeLinejoin="round"
                />
                <path d="M8 8L9 10L11 11L9 12L8 14L7 12L5 11L7 10L8 8Z" fill="#e9d8fd"/>
                <path d="M20 7L20.5 8.5L22 9L20.5 9.5L20 11L19.5 9.5L18 9L19.5 8.5L20 7Z" fill="#e9d8fd"/>
              </g>
            </svg>
            Excellence in Every Detail
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#dcc5f8] mb-4 sm:mb-6"
          >
            Why{' '}
            <motion.span 
              className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Fikrat.tech
            </motion.span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg lg:text-xl text-[#ab9eba] max-w-3xl mx-auto leading-relaxed px-2"
          >
            We're not just coders — we're dream-crafters. Here's what makes us different in the digital product landscape.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="relative h-full bg-purple-500/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-purple-300/20 hover:border-purple-300/40 transition-all duration-500 group-hover:bg-purple-500/10">
                  {/* Background glow effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
                  />
                  
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative w-12 h-12 mb-6 group-hover:scale-110 transition-transform duration-300"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                    <div className="relative w-full h-full bg-purple-500/10 rounded-xl flex items-center justify-center border border-purple-300/30">
                      <IconComponent className="w-6 h-6 text-[#dcc5f8]" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.h3 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    className="text-xl font-bold text-[#dcc5f8] mb-4 group-hover:text-white transition-colors duration-300"
                  >
                    {feature.title}
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    className="text-[#ab9eba] leading-relaxed"
                  >
                    {feature.description}
                  </motion.p>

                  {/* Hover accent line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color} rounded-b-2xl`}
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <motion.blockquote 
            className="text-2xl sm:text-3xl font-bold text-[#dcc5f8] mb-8 italic"
          >
            "We don't just build products — we build{' '}
            <motion.span 
              className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              belief
            </motion.span>
            "
          </motion.blockquote>
          
          <motion.button
            onClick={() => smoothScrollToSection('#contact')}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(140, 62, 238, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
            className="text-white px-10 py-4 cursor-pointer rounded-lg text-lg font-semibold shadow-xl transition-all duration-300 overflow-hidden relative"
            style={{ background: 'linear-gradient(135deg, #8c3eee 0%, #a855f7 100%)' }}
          >
            <span className="relative z-10">Experience the Difference</span>
            <motion.div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, #a855f7 0%, #8c3eee 100%)' }}
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyUs