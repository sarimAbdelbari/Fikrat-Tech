'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Store, CreditCard, Package, LayoutDashboard, MessageSquare } from 'lucide-react'

const ICONS = {
  Store,
  CreditCard,
  Package,
  LayoutDashboard,
  MessageSquare,
}

const ServiceDetail = ({ iconName, title, description, features, badge, reverse = false, color = 'from-primary to-accent', index = 0 }) => {
  const Icon = ICONS[iconName]
  return (
    <section className="relative py-20 border-b border-theme overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern" />

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>

          {/* Icon side */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64">
              <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-3xl blur-3xl opacity-10`} />
              <div className="relative w-full h-full bg-primary/5 rounded-3xl border border-primary-light/15 flex items-center justify-center">
                <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-3xl opacity-5`} />
                {Icon && (
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.4 }}
                  >
                    <Icon className="w-24 h-24 sm:w-32 sm:h-32 text-theme-primary opacity-80" strokeWidth={1} />
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {badge && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary-light/25 text-theme-primary text-xs font-semibold mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {badge}
              </div>
            )}

            <h2 className="text-3xl sm:text-4xl font-bold text-theme-primary mb-4">
              {title}
            </h2>

            <p className="text-theme-secondary leading-relaxed mb-8 text-lg">
              {description}
            </p>

            {features && features.length > 0 && (
              <ul className="space-y-3">
                {features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 + 0.3 }}
                    className="flex items-start gap-3 text-theme-secondary text-sm leading-relaxed"
                  >
                    <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ServiceDetail
