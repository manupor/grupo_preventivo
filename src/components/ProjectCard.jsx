import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ProjectCard({ title, category, description, beforeImage, afterImage, client, delay = 0 }) {
  const [showAfter, setShowAfter] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
    >
      <div className="relative aspect-video bg-slate-100 overflow-hidden">
        <img
          src={showAfter ? afterImage : beforeImage}
          alt={`${title} - ${showAfter ? 'Después' : 'Antes'}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-900/80 text-white">
            {category}
          </span>
        </div>
        <button
          onClick={() => setShowAfter(!showAfter)}
          className="absolute bottom-3 right-3 px-3 py-1.5 rounded-md text-xs font-semibold bg-white text-brand-900 shadow hover:bg-brand-50 transition-colors"
        >
          {showAfter ? 'Ver antes' : 'Ver después'}
        </button>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-brand-900 mb-1">{title}</h3>
        <p className="text-xs text-energy-600 font-semibold mb-2">{client}</p>
        <p className="text-sm text-slate-600 line-clamp-3">{description}</p>
      </div>
    </motion.div>
  )
}
