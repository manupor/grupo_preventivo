import { motion } from 'framer-motion'

export default function SectionHeader({ title, subtitle, label, centered = true, light = false }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.4 }}
          className={`inline-block font-semibold text-sm uppercase tracking-wide mb-2 ${light ? 'text-brand-500' : 'text-energy-600'}`}
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5, delay: label ? 0.05 : 0 }}
        className={`section-title ${light ? 'text-white' : 'text-brand-900'}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`section-subtitle ${centered ? 'mx-auto' : ''} ${light ? 'text-slate-200' : 'text-slate-600'}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
