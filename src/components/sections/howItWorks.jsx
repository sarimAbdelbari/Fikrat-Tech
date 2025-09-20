'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Lightbulb, Rocket, TrendingUp } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Tell us your idea",
      description: "Share your vision with us. We listen, understand, and capture the essence of what you want to build.",
      icon: MessageCircle,
      color: "from-purple-400 to-pink-400",
      delay: 0.1
    },
    {
      number: "02", 
      title: "Sketch & plan together",
      description: "We mock it up visually, create wireframes, and plan the technical architecture collaboratively.",
      icon: Lightbulb,
      color: "from-pink-400 to-purple-400",
      delay: 0.2
    },
    {
      number: "03",
      title: "Build & launch",
      description: "From prototype to real product. We craft every detail with precision and launch your vision to the world.",
      icon: Rocket,
      color: "from-purple-400 to-indigo-400",
      delay: 0.3
    },
    {
      number: "04",
      title: "Support & grow",
      description: "Stay with you for updates, scaling, and success. Your technical co-founder for the long journey.",
      icon: TrendingUp,
      color: "from-indigo-400 to-purple-400",
      delay: 0.4
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const stepVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(140,62,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(140,62,238,0.05)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        
        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-15, 15, -15],
              x: [-8, 8, -8],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 5 + i * 0.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          />
        ))}
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
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#dcc5f8] mb-4 sm:mb-6"
          >
            How It{' '}
            <motion.span 
              className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Works
            </motion.span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg lg:text-xl text-[#ab9eba] max-w-3xl mx-auto leading-relaxed px-2"
          >
            Remove friction; show transparent steps. From vision to reality in four simple phases.
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <motion.div
                key={index}
                variants={stepVariants}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: step.delay + 0.5 }}
                    className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-purple-400/50 to-transparent origin-left z-0"
                  />
                )}

                {/* Step Card */}
                <div className="relative bg-purple-500/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 text-center border border-purple-300/20 hover:border-purple-300/40 transition-all duration-500 group-hover:bg-purple-500/10">
                  {/* Step Number */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: step.delay }}
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold"
                  >
                    {step.number}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: step.delay + 0.2 }}
                    className="relative w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                    <div className="relative w-full h-full bg-purple-500/10 rounded-2xl flex items-center justify-center border border-purple-300/30">
                      <IconComponent className="w-8 h-8 text-[#dcc5f8]" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.h3 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: step.delay + 0.3 }}
                    className="text-xl font-bold text-[#dcc5f8] mb-4"
                  >
                    {step.title}
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: step.delay + 0.4 }}
                    className="text-[#ab9eba] leading-relaxed text-sm"
                  >
                    {step.description}
                  </motion.p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(140, 62, 238, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative text-white px-10 py-4 rounded-lg text-lg font-semibold shadow-xl transition-all duration-300 overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #8c3eee 0%, #a855f7 100%)' }}
          >
            <span className="relative z-10">Start Your Journey</span>
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

export default HowItWorks