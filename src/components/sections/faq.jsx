'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How long does it take to get a prototype?",
      answer: "For a basic prototype, we typically deliver within 1-2 weeks. For more complex MVPs, it usually takes 4-6 weeks. We move at startup speed and keep you updated throughout the entire process."
    },
    // {
    //   question: "What's the typical budget for an MVP?",
    //   answer: "MVP projects typically range from $5,000 to $25,000 depending on complexity, features, and design requirements. We provide transparent pricing upfront and work within your budget to deliver maximum value."
    // },
    {
      question: "Will I own the code and design?",
      answer: "Absolutely! You own 100% of the code, design files, and intellectual property. No vendor lock-in, no hidden dependencies. Everything we create belongs to you from day one."
    },
    {
      question: "How do we handle revisions?",
      answer: "We include reasonable revisions in our packages and work collaboratively to ensure you're happy with the result. Major scope changes are discussed transparently with clear communication about timeline and cost impacts."
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Yes! We're your technical co-founder for the long haul. We offer maintenance packages, feature additions, scaling support, and strategic guidance as your product grows."
    },
    {
      question: "What technologies do you use?",
      answer: "We use modern, proven technologies like React, Next.js, Node.js, Python, and cloud platforms. We choose the right tech stack for your specific needs and ensure it's scalable and maintainable."
    },
    {
      question: "Can you help with just design or just development?",
      answer: "While we excel at full-stack product development, we can certainly help with design-only or development-only projects. We adapt our services to match your specific needs and existing capabilities."
    },
    {
      question: "How do you ensure quality?",
      answer: "We follow industry best practices, conduct thorough testing, use modern development workflows, and obsess over details. Every line of code and every pixel is crafted with love and attention to quality."
    },
    {
      question: "Do you follow web accessibility and performance standards?",
      answer: "Absolutely! All our websites are WCAG AA compliant for accessibility, achieve sub-3-second load times, and follow Core Web Vitals best practices. We build products that work for everyone, everywhere."
    },
    {
      question: "What makes you different from other agencies?",
      answer: "We're not just an agency - we're your technical co-founders. While others build and disappear, we obsess over your success, balance beautiful design with technical excellence, and stay with you through growth and evolution."
    }
  ]

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(140,62,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(140,62,238,0.05)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        
        {/* Floating question marks */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-8 h-8 text-purple-400/20 font-bold text-2xl"
            style={{
              left: `${10 + i * 20}%`,
              top: `${15 + i * 15}%`,
            }}
          >
            ?
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center w-fit mx-auto px-4 py-1.5 rounded-full bg-purple-500/15 backdrop-blur-md border border-purple-300/40 text-[#e9d8fd] text-sm font-medium mb-8"
          >
            {/* Question mark icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 28 28"
              fill="none"
              className="w-7 h-7 mr-3"
            >
              <g>
                <circle cx="14" cy="14" r="7" fill="#b794f4" fillOpacity="0.25"/>
                <path
                  d="M14 11C14 9.5 15 8.5 16 8.5C17 8.5 18 9.5 18 10.5C18 11.5 17.5 12 16.5 12.5C15.5 13 14.5 13.5 14.5 14.5"
                  stroke="#d1b3ff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="14.5" cy="17.5" r="0.8" fill="#d1b3ff"/>
                <circle cx="10" cy="8" r="0.6" fill="#e9d8fd"/>
                <circle cx="20" cy="19" r="0.5" fill="#e9d8fd"/>
              </g>
            </svg>
            Your Questions Matter
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#dcc5f8] mb-4 sm:mb-6"
          >
            Frequently Asked{' '}
            <motion.span 
              className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Questions
            </motion.span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg lg:text-xl text-[#ab9eba] max-w-2xl mx-auto leading-relaxed px-2"
          >
            Find quick answers to common questions about our process, pricing, and partnership approach.
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-purple-500/5 backdrop-blur-md rounded-2xl border border-purple-300/20 hover:border-purple-300/40 transition-all duration-300 overflow-hidden">
                <motion.button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 cursor-pointer flex items-center justify-between group-hover:bg-purple-500/5 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-[#dcc5f8] pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-6 h-6 text-[#ab9eba] group-hover:text-[#dcc5f8] transition-colors duration-300"
                  >
                    {openIndex === index ? <Minus /> : <Plus />}
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <motion.div
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ duration: 0.2, delay: 0.1 }}
                          className="w-full h-px bg-gradient-to-r from-purple-400/50 to-transparent mb-4"
                        />
                        <motion.p 
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: 10, opacity: 0 }}
                          transition={{ duration: 0.2, delay: 0.1 }}
                          className="text-[#ab9eba] leading-relaxed"
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-[#ab9eba] mb-6 text-lg">
            Still have questions? We'd love to chat about your project.
          </p>
          
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(140, 62, 238, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
            className="text-white px-10 py-4 cursor-pointer rounded-lg text-lg font-semibold shadow-xl transition-all duration-300 overflow-hidden relative"
            style={{ background: 'linear-gradient(135deg, #8c3eee 0%, #a855f7 100%)' }}
          >
            <span className="relative z-10">Get In Touch</span>
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

export default Faq