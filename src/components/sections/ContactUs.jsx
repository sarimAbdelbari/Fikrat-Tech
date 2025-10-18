'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, Calendar, ArrowRight, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react'

const ContactUs = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "contact@fikrat.tech",
      action: "Send Email",
      color: "from-blue-400 to-indigo-400",
      onClick: () => window.location.href = "mailto:contact@fikrat.tech?subject=General Inquiry"
    },
    {
      icon: MessageCircle,
      title: "Start a Chat",
      description: "Quick questions? Let's chat",
      action: "Open Chat",
      color: "from-green-400 to-emerald-400",
      onClick: () => window.open("https://wa.me/923170101666?text=Hello! I'd like to know more about your services.", "_blank")
    },
    {
      icon: Calendar,
      title: "Book a Call",
      description: "30-min vision session",
      action: "Schedule Now",
      color: "from-purple-400 to-pink-400",
      onClick: () => window.location.href = "mailto:contact@fikrat.tech?subject=Book a 30-min Vision Call&body=Hi Fikrat Team,%0D%0A%0D%0AI would like to schedule a 30-minute vision call to discuss my project.%0D%0A%0D%0APreferred time:%0D%0AProject brief:%0D%0A%0D%0AThank you!"
    }
  ]

  const socialMedia = [
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://www.instagram.com/fikrat.tech",
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://www.facebook.com/fikrat.tech",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/fikrat-tech",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com/fikrat_tech",
      color: "from-sky-400 to-blue-500"
    }
  ]

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 overflow-hidden">
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center w-fit mx-auto px-4 py-1.5 rounded-full bg-purple-500/15 backdrop-blur-md border border-purple-300/40 text-[#e9d8fd] text-sm font-medium mb-8"
          >
            {/* Chat/Connect icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 28 28"
              fill="none"
              className="w-7 h-7 mr-3"
            >
              <g>
                <circle cx="14" cy="14" r="7" fill="#b794f4" fillOpacity="0.25"/>
                <path
                  d="M8 11C8 9 9.5 7.5 11.5 7.5H16.5C18.5 7.5 20 9 20 11V14C20 16 18.5 17.5 16.5 17.5H14L11 20V17.5H11.5C9.5 17.5 8 16 8 14V11Z"
                  fill="#d1b3ff"
                  stroke="#d1b3ff"
                  strokeWidth="1"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="12.5" r="0.8" fill="#e9d8fd"/>
                <circle cx="14" cy="12.5" r="0.8" fill="#e9d8fd"/>
                <circle cx="16" cy="12.5" r="0.8" fill="#e9d8fd"/>
                <circle cx="7" cy="7" r="0.5" fill="#e9d8fd"/>
                <circle cx="21" cy="20" r="0.5" fill="#e9d8fd"/>
              </g>
            </svg>
            Let's Start the Conversation
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
                  onClick={method.onClick}
                  className={`inline-flex items-center cursor-pointer gap-2 px-6 py-3 rounded-lg bg-gradient-to-r ${method.color} text-white font-semibold transition-all duration-300 shadow-lg`}
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

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.h3 
            className="text-2xl sm:text-3xl font-bold text-[#dcc5f8] mb-4"
          >
            Follow Our Journey
          </motion.h3>
          <motion.p 
            className="text-[#ab9eba] mb-8"
          >
            Stay connected and see what we're building
          </motion.p>
          
          <div className="flex justify-center items-center gap-4 flex-wrap">
            {socialMedia.map((social, index) => {
              const SocialIcon = social.icon
              return (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.15,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative w-14 h-14 sm:w-16 sm:h-16 cursor-pointer"
                >
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                  
                  {/* Icon container */}
                  <div className="relative w-full h-full bg-purple-500/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-purple-300/30 group-hover:border-purple-300/60 transition-all duration-300">
                    <SocialIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[#dcc5f8] group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-purple-500/90 backdrop-blur-md text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    {social.name}
                  </div>
                </motion.a>
              )
            })}
          </div>
        </motion.div>

        {/* Main CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
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
            onClick={() => window.location.href = "mailto:contact@fikrat.tech?subject=Book a Free Call - Let's Build Something Amazing&body=Hi Fikrat Team,%0D%0A%0D%0AI'm excited to discuss my project idea with you!%0D%0A%0D%0AProject Type:%0D%0ABrief Description:%0D%0APreferred Time:%0D%0ABudget Range:%0D%0A%0D%0ALooking forward to connecting!%0D%0A%0D%0ABest regards"}
            className="group relative text-white cursor-pointer px-12 py-5 rounded-lg text-xl font-semibold shadow-2xl transition-all duration-300 overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #8c3eee 0%, #a855f7 100%)' }}
          >
            <span className="relative z-10 flex items-center gap-3">
              Book Your Free Call
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
