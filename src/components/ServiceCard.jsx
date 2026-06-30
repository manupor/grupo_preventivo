import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ServiceCard({ icon: Icon, title, description, href = '/servicios', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className="group bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-lg hover:border-brand-200 transition-all"
    >
      <div className="w-12 h-12 rounded-lg bg-brand-50 text-brand-700 flex items-center justify-center mb-4 group-hover:bg-brand-700 group-hover:text-white transition-colors">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-bold text-brand-900 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm mb-4 line-clamp-3">{description}</p>
      <Link
        to={href}
        className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-900 transition-colors"
      >
        Ver más <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  )
}
