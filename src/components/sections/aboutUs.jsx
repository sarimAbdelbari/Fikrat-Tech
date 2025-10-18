'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Lightbulb, Target, Rocket } from 'lucide-react'

const AboutUs = () => {
  const stats = [
    {
      number: "20+",
      label: "Ideas Turned Real",
      icon: Lightbulb
    },
    {
      number: "2+",
      label: "Years of Crafting",
      icon: Brain
    },
    {
      number: "100%",
      label: "Client Ownership",
      icon: Target
    },
    {
      number: "∞",
      label: "Passion & Belief",
      icon: Rocket
    }
  ]

  const values = [
    {
      title: "Ideas are Valuable",
      description: "Every idea deserves respect, attention, and the chance to become reality. We treat your vision with the reverence it deserves."
    },
    {
      title: "Quality over Quantity",
      description: "We don't chase numbers - we chase excellence. Every project gets our full attention and dedication."
    },
    {
      title: "Long-term Partnership",
      description: "We're not just here for the build. We're here for the journey, the growth, and the success that follows."
    }
  ]

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(140,62,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(140,62,238,0.05)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        
        {/* Animated background elements */}
        <motion.div
          animate={{ 
            rotate: [0, 360] 
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/4 right-1/4 w-32 h-32 border border-purple-400/5 rounded-full"
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
            {/* Heart icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 28 28"
              fill="none"
              className="w-7 h-7 mr-3"
            >
              <g>
                <circle cx="14" cy="14" r="7" fill="#b794f4" fillOpacity="0.25"/>
                <path
                  d="M14 20.5L8.5 15C6.5 13 6.5 9.8 8.5 7.8C10.5 5.8 13.5 5.8 14 6.5C14.5 5.8 17.5 5.8 19.5 7.8C21.5 9.8 21.5 13 19.5 15L14 20.5Z"
                  fill="#d1b3ff"
                  stroke="#d1b3ff"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
                <circle cx="9" cy="9" r="0.8" fill="#e9d8fd"/>
                <circle cx="19" cy="9" r="0.6" fill="#e9d8fd"/>
              </g>
            </svg>
            Building Dreams Together
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#dcc5f8] mb-4 sm:mb-6"
          >
            Our{' '}
            <motion.span 
              className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Philosophy
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <blockquote className="text-2xl sm:text-3xl font-bold text-[#dcc5f8] leading-relaxed mb-8">
            "To make it easier for entrepreneurs and visionaries to launch digital products without needing a full tech team. We believe everyone with a strong idea and vision deserves a solid digital foundation."
          </blockquote>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"
          />
        </motion.div>

        {/* Professional Credentials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl p-8 border border-purple-300/10">
            <h3 className="text-2xl font-bold text-[#e9d8fd] mb-6 text-center">Technical Expertise & Standards</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-[#c4b5fd]">SEO Optimized</h4>
                <p className="text-sm text-[#9f7aea]">SEO optimized development ensuring your product reaches everyone</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-[#c4b5fd]">Performance Enhanced</h4>
                <p className="text-sm text-[#9f7aea]">Sub-3-second load times and Core Web Vitals excellence</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-[#c4b5fd]">Enterprise Security</h4>
                <p className="text-sm text-[#9f7aea]">Industry-standard security practices and data protection</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="text-center group"
              >
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
                  <div className="relative w-full h-full bg-purple-500/10 rounded-2xl flex items-center justify-center border border-purple-300/30 group-hover:border-purple-300/50 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-[#dcc5f8]" />
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-[#dcc5f8] mb-2 group-hover:text-white transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-[#ab9eba] font-medium">
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-[#dcc5f8] text-center mb-12">
            What We{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Believe
            </span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-purple-500/5 backdrop-blur-md rounded-2xl p-6 border border-purple-300/20 hover:border-purple-300/40 transition-all duration-500 hover:bg-purple-500/10"
              >
                <h4 className="text-xl font-bold text-[#dcc5f8] mb-4 group-hover:text-white transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-[#ab9eba] leading-relaxed">
                  {value.description}
                </p>
                
                {/* Subtle hover accent */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-t-2xl"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision Quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <blockquote className="text-xl sm:text-2xl text-[#ab9eba] italic mb-8 max-w-3xl mx-auto">
            "We don't just build products — we build belief. At Fikrat.tech, our role is to empower dreamers to trust their own ideas and see them become real. Every project is a partnership. Every product starts with a spark."
          </blockquote>
          
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(140, 62, 238, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
            className="text-white px-10 py-4 rounded-lg cursor-pointer text-lg font-semibold shadow-xl transition-all duration-300 overflow-hidden relative"
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
      </div>
    </section>
  )
}

export default AboutUs