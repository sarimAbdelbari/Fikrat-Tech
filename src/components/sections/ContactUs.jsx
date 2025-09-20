'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, Calendar, ArrowRight, Sparkles } from 'lucide-react'

const ContactUs = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "hello@fikrat.tech",
      action: "Send Email",
      color: "from-blue-400 to-indigo-400"
    },
    {
      icon: MessageCircle,
      title: "Start a Chat",
      description: "Quick questions? Let's chat",
      action: "Open Chat",
      color: "from-green-400 to-emerald-400"
    },
    {
      icon: Calendar,
      title: "Book a Call",
      description: "30-min vision session",
      action: "Schedule Now",
      color: "from-purple-400 to-pink-400"
    }
  ]

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(140,62,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(140,62,238,0.05)_1px,transparent_1px)] bg-[size:120px_120px]"></div>
        
        {/* Floating elements */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-20 left-20 w-24 h-24 border border-purple-400/10 rounded-full"
        />
        
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-32 right-20 w-16 h-16 border border-pink-400/10 rotate-45"
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
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-purple-500/10 backdrop-blur-md border border-purple-300/30 text-[#dcc5f8] text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
            Ready to See Your Idea in Motion?
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#dcc5f8] mb-4 sm:mb-6"
          >
            Your Vision is{' '}
            <motion.span 
              className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Waiting
            </motion.span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg lg:text-xl text-[#ab9eba] max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 px-2"
          >
            Ready to see your idea in motion? Your vision is waiting — let's bring it to life together.
          </motion.p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 sm:mb-20"
        >
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-purple-500/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 text-center border border-purple-300/20 hover:border-purple-300/40 transition-all duration-500 hover:bg-purple-500/10 cursor-pointer"
              >
                {/* Background glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
                />
                
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  className="relative w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.color} rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                  <div className="relative w-full h-full bg-purple-500/10 rounded-2xl flex items-center justify-center border border-purple-300/30">
                    <IconComponent className="w-8 h-8 text-[#dcc5f8]" />
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#dcc5f8] mb-2 group-hover:text-white transition-colors duration-300">
                  {method.title}
                </h3>
                
                <p className="text-[#ab9eba] mb-6">
                  {method.description}
                </p>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r ${method.color} text-white font-semibold transition-all duration-300 shadow-lg`}
                >
                  {method.action}
                  <ArrowRight size={16} />
                </motion.button>

                {/* Hover accent line */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${method.color} rounded-b-2xl`}
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Main CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md rounded-3xl p-12 border border-purple-300/20"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-[#dcc5f8] mb-6">
            Every Great Product Starts with a{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Conversation
            </span>
          </h3>
          
          <p className="text-lg text-[#ab9eba] mb-8 max-w-2xl mx-auto">
            Share your idea, ask questions, or just say hello. We're here to listen and help turn your vision into reality.
          </p>

          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 25px 50px rgba(140, 62, 238, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative text-white px-12 py-5 rounded-lg text-xl font-semibold shadow-2xl transition-all duration-300 overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #8c3eee 0%, #a855f7 100%)' }}
          >
            <span className="relative z-10 flex items-center gap-3">
              Start Your Journey
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight size={24} />
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
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-[#77638f] text-sm">
            © 2025 Fikrat.tech — All rights reserved. Built with ❤️ for dreamers and builders.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactUs
