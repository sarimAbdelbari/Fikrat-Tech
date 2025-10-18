'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const WhatWeDo = () => {
  const services = [
    {
      title: "Prototype & MVPs",
      description: "Test and refine fast. Turn your vision into a working prototype that validates your concept in the market",
      image: "/assets/images/3d Module.png",
      color: "from-purple-400 to-pink-400",
      badge: "Build Fast",
      badgeColor: "bg-purple-500/20"
    },
    {
      title: "Websites & Apps", 
      description: "Designed with love, built for performance. Full-scale digital experiences that grow with your business",
      image: "/assets/images/Coding Idea.png",
      color: "from-purple-400 to-pink-400",
      badge: "Scale Ready",
      badgeColor: "bg-blue-500/20"
    },
    {
      title: "UX/UI Design",
      description: "Intuitive, beautiful, effortless. We craft interfaces that feel natural and delightful to use",
      image: "/assets/images/Online Profile.png",
      color: "from-purple-400 to-pink-400",
      badge: "User First",
      badgeColor: "bg-pink-500/20"
    },
    {
      title: "Brand Identity",
      description: "Give your idea a voice and presence. Complete brand identity that resonates with your vision",
      image: "/assets/images/Web Design.png",
      color: "from-purple-400 to-pink-400",
      badge: "Vision Driven",
      badgeColor: "bg-indigo-500/20"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
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

  const iconVariants = {
    initial: { 
      scale: 1,
      rotate: 0 
    },
    hover: { 
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: { 
      scale: 0.95,
      rotate: -5
    }
  }

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(140,62,238,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(140,62,238,0.1)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + i * 8}%`,
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
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center w-fit mx-auto px-4 py-1.5 rounded-full bg-purple-500/15 backdrop-blur-md border border-purple-300/40 text-[#e9d8fd] text-sm font-medium mb-8"
          >
            {/* Tools/Craft icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 28 28"
              fill="none"
              className="w-7 h-7 mr-3"
            >
              <g>
                <circle cx="14" cy="14" r="7" fill="#b794f4" fillOpacity="0.25"/>
                <path
                  d="M10 9L14 5L18 9M14 5V16"
                  stroke="#d1b3ff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M19 18L14 23L9 18M14 23V19"
                  stroke="#d1b3ff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="14" cy="14" r="2" fill="#d1b3ff"/>
                <circle cx="8" cy="8" r="0.7" fill="#e9d8fd"/>
                <circle cx="20" cy="20" r="0.6" fill="#e9d8fd"/>
              </g>
            </svg>
            Crafting Digital Experiences
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#dcc5f8] mb-4 sm:mb-6"
          >
            What We{' '}
            <motion.span 
              className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Offer
            </motion.span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg lg:text-xl text-[#ab9eba] max-w-4xl mx-auto leading-relaxed px-2"
          >
            Your idea + our craft = something remarkable. We obsess over details so your vision shines, not fades.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                scale: 1.03,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
                className="group relative bg-purple-500/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-purple-300/20 overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
              />
              
              {/* Service Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`absolute  left-3 px-3 py-1  rounded-full ${service.badgeColor} backdrop-blur-sm border border-purple-300/30 text-xs font-semibold text-[#dcc5f8]`}
              >
                {service.badge}
              </motion.div>

              {/* Animated Background Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full opacity-30"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Image Container */}
              <motion.div
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="relative w-20 h-20 mx-auto mb-6"
              >
                <motion.div
                  animate={{
                    y: [0, -3, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain drop-shadow-lg"
                  />
                </motion.div>
                
                {/* Image Glow Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />
              </motion.div>

              {/* Content */}
              <motion.h3 
                className="text-xl font-bold text-[#dcc5f8] mb-4 group-hover:text-white transition-colors duration-300"
                initial={{ opacity: 0.8 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
              >
                {service.title}
              </motion.h3>
              
              <motion.p 
                className="text-[#ab9eba] leading-relaxed text-sm"
                initial={{ opacity: 0.6 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
              >
                {service.description}
              </motion.p>
              
              {/* Hover Underline */}
              <motion.div
                className={`absolute bottom-0 left-1/2 h-1 bg-gradient-to-r ${service.color} rounded-full`}
                initial={{ width: 0, x: "-50%" }}
                whileHover={{ width: "80%", x: "-50%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(140, 62, 238, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative cursor-pointer text-white px-10 py-5 rounded-lg text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #8c3eee 0%, #a855f7 100%)' }}
          >
            <span className="relative z-10">Start Your Vision Call</span>
            
            {/* Button Background Animation */}
            <motion.div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, #a855f7 0%, #8c3eee 100%)' }}
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            
            <motion.span
              className="relative z-10 ml-2 inline-block"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatWeDo